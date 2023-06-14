import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/models/user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    @InjectRepository(UserEntity)
    private readonly userService: Repository<UserEntity>,
  ) {
    super({
      //Chỗ này là lấy token từ header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //Chỗ này nếu token hết hạn thì sẽ báo lỗi 401
      ignoreExpiration: false,
      //Chỗ này là lấy secret key từ file config
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  //validate dùng để kiểm tra xem token có hợp lệ hay không
  async validate(payload: any) {
    const user = await this.userService.findOne({
      where: {
        id: payload.sub,
      },
    });
    return { userId: payload.sub, email: payload.email, role: user.role };
  }
}

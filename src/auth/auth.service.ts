import { GoogleTokenDto } from './dto/google-token.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login.dto';
import { UserEntity } from 'src/models/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { templateRespone } from 'src/util/exampleRespone';
import * as firebaseAdmin from 'firebase-admin';
import { UserService } from 'src/models/user/user.service';
import { Payload } from './payload';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserEntity> {
    const user = await this.userRepository.findOneBy({ email: email });
    const isMatch = await bcrypt.compare(password, user.password);
    delete user.password;
    if (user && isMatch) {
      return user;
    }
    return null;
  }

  async login(dto: LoginUserDto) {
    const checkUser = await this.validateUser(dto.email, dto.password);
    // console.log(checkUser);
    const payload = {
      email: dto.email,
      sub: checkUser.id,
      role: checkUser.role,
    };
    const token = await this.jwtService.signAsync(payload);
    // console.log('a', this.jwtService.sign(payload));
    return {
      user: checkUser,
      access_token: token,
    };
  }

  async loginGoogle(idToken: string) {
    const userFirebase = await firebaseAdmin.auth().verifyIdToken(idToken);
    console.log(userFirebase);
    if (!userFirebase)
      throw new HttpException('token invalid', HttpStatus.BAD_REQUEST);
    const user = await this.userService.findByEmail(userFirebase.email);
    if (!user)
      throw new HttpException(
        'This email be not signed up yet',
        HttpStatus.FOUND,
      );
    const role = user.role;
    const payload: Payload = { email: user.email, role };
    const access_token = await this.jwtService.signAsync(payload);
    return templateRespone(200, 'Login success', { access_token });
  }
}

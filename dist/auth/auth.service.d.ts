import { LoginUserDto } from './dto/login.dto';
import { UserEntity } from 'src/models/user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/models/user/user.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly userService;
    private jwtService;
    constructor(userRepository: Repository<UserEntity>, userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<UserEntity>;
    login(dto: LoginUserDto): Promise<{
        user: UserEntity;
        access_token: string;
    }>;
    loginGoogle(idToken: string): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}

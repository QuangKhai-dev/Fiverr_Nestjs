import { GoogleTokenDto } from './dto/google-token.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginUserDto): Promise<{
        user: import("../models/user/entities/user.entity").UserEntity;
        access_token: string;
    }>;
    loginGoogle(dto: GoogleTokenDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}

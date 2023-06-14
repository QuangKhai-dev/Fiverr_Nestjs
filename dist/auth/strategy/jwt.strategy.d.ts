import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/models/user/entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(configService: ConfigService, userService: Repository<UserEntity>);
    validate(payload: any): Promise<{
        userId: any;
        email: any;
        role: import("../../common/types/user.types").Roles;
    }>;
}
export {};

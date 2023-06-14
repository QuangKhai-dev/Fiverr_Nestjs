import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
export declare class JwtConfigService implements JwtOptionsFactory {
    createJwtOptions(): JwtModuleOptions;
}

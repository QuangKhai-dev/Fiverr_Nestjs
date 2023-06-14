import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RolesGuard implements CanActivate {
    private reflector;
    private readonly jwtService;
    constructor(reflector: Reflector, jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean;
}

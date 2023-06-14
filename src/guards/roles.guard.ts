import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/models/user/entities/user.entity';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../common/enums/role.enum';
import { ROLES_KEY } from '../decorators/role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // Chỗ này reflector sẽ lấy ra tất cả các roles được gắn vào method
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    //Xử lí check role người dùng bằng token jwt
    const request = context.switchToHttp().getRequest();
    // console.log(request);
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      return false;
    }
    const token = authHeader.split(' ')[1];
    const payload: { email: string; sub: number; role: Role; iat: number } =
      this.jwtService.decode(token) as {
        email: string;
        sub: number;
        role: Role;
        iat: number;
      };
    return requiredRoles.includes(payload.role);
  }
}

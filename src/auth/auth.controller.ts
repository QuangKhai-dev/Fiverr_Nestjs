import { GoogleTokenDto } from './dto/google-token.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';
import { Public } from 'src/decorators/jwt.decorator';

@Controller('auth')
@ApiTags('Auth-Done')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  @Public()
  @ApiOperation({ summary: 'Login' })
  //Mô tả cho api khi thành công
  // @ApiResponse({ status: 200, description: 'Return all cats.' })
  async login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }

  @Post('login-google')
  @Public()
  @ApiOperation({
    summary: 'Login with google',
    description: 'Dùng tokenid',
  })
  @ApiOperation({ summary: 'Login with google' })
  async loginGoogle(@Body() dto: GoogleTokenDto) {
    return this.authService.loginGoogle(dto.token);
  }
}

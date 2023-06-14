import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GoogleTokenDto {
  @ApiProperty()
  @IsString()
  token: string;
}

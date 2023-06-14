import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsString,
} from 'class-validator';
import { Role } from 'src/common/enums/role.enum';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ default: 'Đỗ Quang Khải' })
  name: string;

  @IsString()
  @ApiProperty({ default: 'sas13111' })
  userName: string;

  @IsEmail()
  @ApiProperty({ default: 'Quangkhai0901@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ default: '123456' })
  password: string;

  @IsString()
  @ApiProperty({ default: '0987654321' })
  phone: string;

  @IsBoolean()
  @ApiProperty({ default: true })
  gender: boolean;

  @IsString()
  @ApiProperty({ default: '2021-09-01' })
  dateOfBirth: string;
}

export class CreateAdminDto extends CreateUserDto {
  role: Role;
  isPublished: boolean;
}

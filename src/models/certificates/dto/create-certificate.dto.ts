import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CertificateDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  link: string;
}

export class UpdateCertificateDto extends PartialType(CertificateDto) {}

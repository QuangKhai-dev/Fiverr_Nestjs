import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsString, IsNumber } from 'class-validator';

export class JobDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsDecimal()
  @ApiProperty()
  rating: any;

  @IsNumber()
  @ApiProperty()
  price: number;

  @IsString()
  @ApiProperty()
  description: string;
}

export class UpdateJobDto {
  @IsString()
  @ApiProperty()
  name?: string;

  @IsDecimal()
  @ApiProperty()
  rating?: any;

  @IsNumber()
  @ApiProperty()
  price?: number;

  @IsString()
  @ApiProperty()
  description?: string;
}

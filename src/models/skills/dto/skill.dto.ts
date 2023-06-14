import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SkillDto {
  @IsString()
  @ApiProperty()
  name: string;
}

export class UpdateSkillDto extends PickType(SkillDto, ['name'] as const) {}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class CreateCategorySkillDto {
  @IsString()
  @ApiProperty()
  name: string;
}

export class UpdateCategorySkillDto extends CreateCategorySkillDto {}

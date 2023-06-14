import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategorySkillDto } from './create-sub-category-skill.dto';

export class UpdateSubCategorySkillDto extends PartialType(CreateSubCategorySkillDto) {}

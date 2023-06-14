import { Injectable } from '@nestjs/common';
import { CreateSubCategorySkillDto } from './dto/create-sub-category-skill.dto';
import { UpdateSubCategorySkillDto } from './dto/update-sub-category-skill.dto';

@Injectable()
export class SubCategorySkillsService {
  create(createSubCategorySkillDto: CreateSubCategorySkillDto) {
    return 'This action adds a new subCategorySkill';
  }

  findAll() {
    return `This action returns all subCategorySkills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subCategorySkill`;
  }

  update(id: number, updateSubCategorySkillDto: UpdateSubCategorySkillDto) {
    return `This action updates a #${id} subCategorySkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCategorySkill`;
  }
}

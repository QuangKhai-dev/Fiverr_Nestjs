import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubCategorySkillsService } from './sub-category-skills.service';
import { CreateSubCategorySkillDto } from './dto/create-sub-category-skill.dto';
import { UpdateSubCategorySkillDto } from './dto/update-sub-category-skill.dto';

@Controller('sub-category-skills')
export class SubCategorySkillsController {
  constructor(private readonly subCategorySkillsService: SubCategorySkillsService) {}

  @Post()
  create(@Body() createSubCategorySkillDto: CreateSubCategorySkillDto) {
    return this.subCategorySkillsService.create(createSubCategorySkillDto);
  }

  @Get()
  findAll() {
    return this.subCategorySkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCategorySkillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubCategorySkillDto: UpdateSubCategorySkillDto) {
    return this.subCategorySkillsService.update(+id, updateSubCategorySkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCategorySkillsService.remove(+id);
  }
}

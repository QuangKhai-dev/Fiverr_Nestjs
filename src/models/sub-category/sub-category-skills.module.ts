import { Module } from '@nestjs/common';
import { SubCategorySkillsService } from './sub-category-skills.service';
import { SubCategorySkillsController } from './sub-category-skills.controller';

@Module({
  controllers: [SubCategorySkillsController],
  providers: [SubCategorySkillsService]
})
export class SubCategorySkillsModule {}

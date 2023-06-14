import { CategorySkillEntity } from './entities/category-skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategorySkillsService } from './category-skills.service';
import { CategorySkillsController } from './category-skills.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategorySkillEntity])],
  controllers: [CategorySkillsController],
  providers: [CategorySkillsService],
})
export class CategorySkillsModule {}

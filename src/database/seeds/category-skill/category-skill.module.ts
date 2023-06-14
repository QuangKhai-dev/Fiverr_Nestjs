import { CategorySkillEntity } from '../../../models/main-category/entities/category-skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategorySkillSeedService } from './category-skill.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategorySkillEntity])],
  providers: [CategorySkillSeedService],
  exports: [CategorySkillSeedService],
})
export class CategorySkillSeedModule {}

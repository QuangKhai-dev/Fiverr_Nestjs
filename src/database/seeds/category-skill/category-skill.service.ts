import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategorySkillEntity } from 'src/models/main-category/entities/category-skill.entity';

@Injectable()
export class CategorySkillSeedService {
  constructor(
    @InjectRepository(CategorySkillEntity)
    private readonly categorySkillRepository: Repository<CategorySkillEntity>,
  ) {}

  async addCategorySkillSeed() {
    const categorySkills = [
      {
        id: 1,
        tenLoaiCongViec: 'Graphics & Design',
      },
      {
        id: 2,
        tenLoaiCongViec: 'Digital Marketing',
      },
      {
        id: 3,
        tenLoaiCongViec: 'Writing & Translation',
      },
      {
        id: 4,
        tenLoaiCongViec: 'Video & Animation',
      },
      {
        id: 5,
        tenLoaiCongViec: 'Music & Audio',
      },
      {
        id: 114,
        tenLoaiCongViec: 'Life Style',
      },
      {
        id: 275,
        tenLoaiCongViec: 'Project Management',
      },
      {
        id: 276,
        tenLoaiCongViec: 'Business Analyst ',
      },
    ];
    for (let i = 0; i < categorySkills.length; i++) {
      const categorySkill = new CategorySkillEntity();
      categorySkill.id = categorySkills[i].id;
      categorySkill.name = categorySkills[i].tenLoaiCongViec;
      await this.categorySkillRepository.save(categorySkill);
    }
  }
}

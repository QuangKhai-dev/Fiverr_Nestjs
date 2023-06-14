import { Repository } from 'typeorm';
import { CategorySkillEntity } from 'src/models/main-category/entities/category-skill.entity';
export declare class CategorySkillSeedService {
    private readonly categorySkillRepository;
    constructor(categorySkillRepository: Repository<CategorySkillEntity>);
    addCategorySkillSeed(): Promise<void>;
}

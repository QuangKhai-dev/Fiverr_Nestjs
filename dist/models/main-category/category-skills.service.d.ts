import { CreateCategorySkillDto, UpdateCategorySkillDto } from './dto/create-category-skill.dto';
import { CategorySkillEntity } from './entities/category-skill.entity';
import { Repository } from 'typeorm';
export declare class CategorySkillsService {
    private categorySkillRepository;
    constructor(categorySkillRepository: Repository<CategorySkillEntity>);
    create(createCategorySkillDto: CreateCategorySkillDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findAll(): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findOne(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    update(id: number, updateCategorySkillDto: UpdateCategorySkillDto): string;
    remove(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}

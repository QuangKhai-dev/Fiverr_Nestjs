import { CategorySkillsService } from './category-skills.service';
import { CreateCategorySkillDto, UpdateCategorySkillDto } from './dto/create-category-skill.dto';
export declare class CategorySkillsController {
    private readonly categorySkillsService;
    constructor(categorySkillsService: CategorySkillsService);
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
    update(id: string, updateCategorySkillDto: UpdateCategorySkillDto): string;
    remove(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}

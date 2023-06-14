import { SubCategorySkillsService } from './sub-category-skills.service';
import { CreateSubCategorySkillDto } from './dto/create-sub-category-skill.dto';
import { UpdateSubCategorySkillDto } from './dto/update-sub-category-skill.dto';
export declare class SubCategorySkillsController {
    private readonly subCategorySkillsService;
    constructor(subCategorySkillsService: SubCategorySkillsService);
    create(createSubCategorySkillDto: CreateSubCategorySkillDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubCategorySkillDto: UpdateSubCategorySkillDto): string;
    remove(id: string): string;
}

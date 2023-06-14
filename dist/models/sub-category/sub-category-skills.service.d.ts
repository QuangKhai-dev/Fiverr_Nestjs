import { CreateSubCategorySkillDto } from './dto/create-sub-category-skill.dto';
import { UpdateSubCategorySkillDto } from './dto/update-sub-category-skill.dto';
export declare class SubCategorySkillsService {
    create(createSubCategorySkillDto: CreateSubCategorySkillDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSubCategorySkillDto: UpdateSubCategorySkillDto): string;
    remove(id: number): string;
}

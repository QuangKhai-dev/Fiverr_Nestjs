import { SkillsService } from './skills.service';
import { SkillDto, UpdateSkillDto } from './dto/skill.dto';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    create(createSkillDto: SkillDto): Promise<{
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
    update(id: number, updateSkillDto: UpdateSkillDto): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    remove(id: string): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}

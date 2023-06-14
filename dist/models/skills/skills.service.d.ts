import { SkillEntity } from 'src/models/skills/entities/skill.entity';
import { SkillDto, UpdateSkillDto } from './dto/skill.dto';
import { Repository } from 'typeorm';
export declare class SkillsService {
    private readonly skillEntity;
    constructor(skillEntity: Repository<SkillEntity>);
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
    remove(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
}

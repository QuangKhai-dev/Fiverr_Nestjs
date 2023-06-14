import { SkillEntity } from 'src/models/skills/entities/skill.entity';
import { Repository } from 'typeorm';
export declare class SkillsSeederService {
    private readonly skillRepository;
    constructor(skillRepository: Repository<SkillEntity>);
    addSkillSeed(): Promise<void>;
}

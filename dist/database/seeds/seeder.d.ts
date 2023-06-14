import { CategorySkillSeedService } from './category-skill/category-skill.service';
import { CertificatesSeederService } from './certificates/certificates.service';
import { SkillsSeederService } from './skills/skills.service';
import { UsersSeederService } from './users/users.service';
export declare class Seeder {
    private readonly usersSeederService;
    private readonly skillSeederService;
    private readonly certificateService;
    private readonly categorySkillSeedService;
    constructor(usersSeederService: UsersSeederService, skillSeederService: SkillsSeederService, certificateService: CertificatesSeederService, categorySkillSeedService: CategorySkillSeedService);
    insertUser(): Promise<void>;
    insertSkill(): Promise<void>;
    insertCertificate(): Promise<void>;
    insertCategorySkill(): Promise<void>;
}

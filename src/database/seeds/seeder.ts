import { CategorySkillSeedService } from './category-skill/category-skill.service';
import { CategorySkillSeedModule } from './category-skill/category-skill.module';
import { CertificatesSeederService } from './certificates/certificates.service';
import { SkillsSeederService } from './skills/skills.service';
import { UsersSeederService } from './users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Seeder {
  constructor(
    private readonly usersSeederService: UsersSeederService,
    private readonly skillSeederService: SkillsSeederService,
    private readonly certificateService: CertificatesSeederService,
    private readonly categorySkillSeedService: CategorySkillSeedService,
  ) {}

  async insertUser() {
    return await this.usersSeederService.addUserSeed();
  }
  async insertSkill() {
    return await this.skillSeederService.addSkillSeed();
  }
  async insertCertificate() {
    return await this.certificateService.addCertificateSeed();
  }

  async insertCategorySkill() {
    return await this.categorySkillSeedService.addCategorySkillSeed();
  }
}

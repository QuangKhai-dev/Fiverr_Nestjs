import { CertificatesSeederModule } from './certificates/certificates.module';
import { Module } from '@nestjs/common';
import { Seeder } from './seeder';
import { UsersSeederModule } from './users/users.module';
import { MySQLDatabaseProviderModule } from 'src/providers/mysql/provider.module';
import { SkillsSeederModule } from './skills/skills.module';
import { CategorySkillSeedModule } from './category-skill/category-skill.module';

@Module({
  imports: [
    MySQLDatabaseProviderModule,
    UsersSeederModule,
    SkillsSeederModule,
    CertificatesSeederModule,
    CategorySkillSeedModule,
  ],
  providers: [Seeder],
})
export class SeederModule {}

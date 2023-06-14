import { SkillEntity } from 'src/models/skills/entities/skill.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsSeederService {
  constructor(
    @InjectRepository(SkillEntity)
    private readonly skillRepository: Repository<SkillEntity>,
  ) {}

  async addSkillSeed() {
    try {
      const listSkill = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Angular',
        'Vue.js',
        'Node.js',
        'Ruby on Rails',
        'Django',
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'Git',
        'AWS',
        'Google Cloud Platform',
        'Jest',
        'Mocha',
      ];
      for (let i = 0; i < listSkill.length; i++) {
        const skill = new SkillEntity();
        skill.name = listSkill[i];
        await this.skillRepository.save(skill);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

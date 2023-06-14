import { SkillEntity } from 'src/models/skills/entities/skill.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'job_detail' })
export class JobDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => SkillEntity, (skill) => skill.id)
  skills: SkillEntity[];
}

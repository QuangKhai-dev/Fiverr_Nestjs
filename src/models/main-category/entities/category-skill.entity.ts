import { SkillEntity } from '../../skills/entities/skill.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';

@Entity({ name: 'category_skills' })
export class CategorySkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //name can not be duplicated
  @Column({ unique: true })
  name: string;

  @OneToMany(() => SkillEntity, (skill) => skill.id)
  skills: SkillEntity[];
}

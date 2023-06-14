import { CategorySkillEntity } from '../../main-category/entities/category-skill.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('sub_category_skills')
export class SubCategorySkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  idCategorySkill: number;

  @ManyToOne(() => CategorySkillEntity, (categorySkill) => categorySkill.id)
  @JoinColumn({ name: 'idCategorySkill' })
  categorySkill: CategorySkillEntity;
}

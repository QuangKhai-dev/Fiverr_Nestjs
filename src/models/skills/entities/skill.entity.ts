import { UserEntity } from 'src/models/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'skills' })
export class SkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
  @ManyToMany(() => UserEntity, (user) => user.skills)
  users: UserEntity[];
}

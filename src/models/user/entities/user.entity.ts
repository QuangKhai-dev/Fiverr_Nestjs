import { Roles } from './../../../common/types/user.types';
import { JobEntity } from '../../jobs/entities/job.entity';
import { Role } from 'src/common/enums/role.enum';
import { CertificateEntity } from '../../certificates/entities/certificate.entity';
import { SkillEntity } from 'src/models/skills/entities/skill.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  gender: boolean;

  @Column({ default: true })
  isPublished: boolean;

  @Column({ default: Role.User })
  role: Roles;

  @Column({ default: '' })
  avatar: string;

  @Column()
  dateOfBirth: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => CertificateEntity, (cer) => cer.user)
  certificates: CertificateEntity[];

  //Liên kết skill với user
  @ManyToMany(() => SkillEntity, (skill) => skill.users)
  @JoinTable()
  skills: SkillEntity[];
}

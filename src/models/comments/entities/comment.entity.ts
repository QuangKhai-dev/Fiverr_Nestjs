import { JobEntity } from './../../jobs/entities/job.entity';
import { UserEntity } from 'src/models/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'comments' })
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column()
  userId: number;

  @Column()
  jobId: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToOne(() => JobEntity, (job) => job.id)
  @JoinColumn({ name: 'jobId' })
  job: JobEntity;
}

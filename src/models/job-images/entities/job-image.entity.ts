import { JobEntity } from 'src/models/jobs/entities/job.entity';
import {
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity({ name: 'job_images' })
export class JobImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @Column()
  jobId: number;

  @ManyToOne(() => JobEntity, (job) => job.id)
  @JoinColumn({ name: 'jobId' })
  job: JobEntity;
}

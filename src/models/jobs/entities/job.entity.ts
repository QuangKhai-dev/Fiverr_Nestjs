import { JobImageEntity } from 'src/models/job-images/entities/job-image.entity';
import { UserEntity } from 'src/models/user/entities/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'jobs' })
export class JobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal' })
  rating: number;

  @Column()
  price: number;

  @Column({ type: 'text' })
  description: string;

  @Column()
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}

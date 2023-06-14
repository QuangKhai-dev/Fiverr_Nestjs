import { UserEntity } from 'src/models/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('certificates')
export class CertificateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link: string;

  @Column()
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.certificates)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}

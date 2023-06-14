import { JobEntity } from './../../jobs/entities/job.entity';
import { UserEntity } from 'src/models/user/entities/user.entity';
export declare class CommentEntity {
    id: number;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    userId: number;
    jobId: number;
    user: UserEntity;
    job: JobEntity;
}

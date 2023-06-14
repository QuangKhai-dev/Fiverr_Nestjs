import { JobEntity } from 'src/models/jobs/entities/job.entity';
export declare class JobImageEntity {
    id: number;
    link: string;
    jobId: number;
    job: JobEntity;
}

import { JobDto, UpdateJobDto } from './dto/job.dto';
import { JobEntity } from './entities/job.entity';
import { Repository } from 'typeorm';
import { JobImageEntity } from '../job-images/entities/job-image.entity';
export declare class JobsService {
    private readonly jobRepository;
    private readonly imagesJobRepository;
    constructor(jobRepository: Repository<JobEntity>, imagesJobRepository: Repository<JobImageEntity>);
    checkAuthAndEmptyJob(id: number, userId: number): Promise<true | {
        status: number;
        message: string;
        content: any;
    }>;
    create(createJobDto: JobDto, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findAll(): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findOne(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    update(id: number, updateJobDto: UpdateJobDto, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    remove(id: number, user: {
        userId: number;
        email: string;
    }): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    uploadImages(id: number, files: any): Promise<void>;
}

import { JobEntity } from 'src/models/jobs/entities/job.entity';
import { CreateCommentDto, UpdateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { Repository } from 'typeorm';
export declare class CommentsService {
    private commentsRepository;
    private jobsRepository;
    constructor(commentsRepository: Repository<CommentEntity>, jobsRepository: Repository<JobEntity>);
    create(createCommentDto: CreateCommentDto, user: {
        userId: number;
        email: string;
    }): Promise<CommentEntity>;
    findAll(): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    findByJob(id: number): Promise<{
        status: number;
        message: string;
        content: any;
    }>;
    update(id: number, updateCommentDto: UpdateCommentDto, user: {
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
}

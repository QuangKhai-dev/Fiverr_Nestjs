import { CommentsService } from './comments.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/create-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto, user: {
        userId: number;
        email: string;
    }): Promise<import("./entities/comment.entity").CommentEntity>;
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

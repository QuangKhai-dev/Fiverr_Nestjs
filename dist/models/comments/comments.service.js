"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const exampleRespone_1 = require("../../util/exampleRespone");
const job_entity_1 = require("../jobs/entities/job.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("./entities/comment.entity");
const typeorm_2 = require("typeorm");
let CommentsService = class CommentsService {
    constructor(commentsRepository, jobsRepository) {
        this.commentsRepository = commentsRepository;
        this.jobsRepository = jobsRepository;
    }
    async create(createCommentDto, user) {
        const job = await this.jobsRepository.findOne({
            where: { id: createCommentDto.jobId },
        });
        if (!job) {
            throw new common_1.BadRequestException('Job not found');
        }
        const comment = new comment_entity_1.CommentEntity();
        comment.userId = user.userId;
        comment.content = createCommentDto.content;
        comment.jobId = createCommentDto.jobId;
        return await this.commentsRepository.save(comment);
    }
    async findAll() {
        const comments = await this.commentsRepository.find();
        return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.CREATED, 'Get all comments', comments);
    }
    async findByJob(id) {
        const comments = await this.commentsRepository.find({
            where: {
                jobId: id,
            },
        });
        if (comments.length === 0) {
            throw new common_1.BadRequestException('Comment not found');
        }
        return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.CREATED, 'Get all comments', comments);
    }
    async update(id, updateCommentDto, user) {
        const comment = await this.commentsRepository.findOne({
            where: { id: id },
        });
        if (!comment) {
            throw new common_1.BadRequestException('Comment not found');
        }
        if (comment.userId !== user.userId) {
            throw new common_1.ForbiddenException('You are not the owner of this comment');
        }
        comment.content = updateCommentDto.content;
        await this.commentsRepository.save(comment);
        return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.OK, 'Update comment successfully', {});
    }
    async remove(id, user) {
        const comment = await this.commentsRepository.findOne({
            where: { id: id },
        });
        if (!comment) {
            throw new common_1.BadRequestException('Comment not found');
        }
        if (comment.userId !== user.userId) {
            throw new common_1.ForbiddenException('You are not the owner of this comment');
        }
        await this.commentsRepository.delete(id);
        return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.OK, 'Delete comment successfully', {});
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.CommentEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(job_entity_1.JobEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map
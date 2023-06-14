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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentEntity = void 0;
const job_entity_1 = require("./../../jobs/entities/job.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let CommentEntity = class CommentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "jobId", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_2.ManyToOne)(() => job_entity_1.JobEntity, (job) => job.id),
    (0, typeorm_1.JoinColumn)({ name: 'jobId' }),
    __metadata("design:type", job_entity_1.JobEntity)
], CommentEntity.prototype, "job", void 0);
CommentEntity = __decorate([
    (0, typeorm_2.Entity)({ name: 'comments' })
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map
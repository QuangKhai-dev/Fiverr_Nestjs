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
exports.JobDetailEntity = void 0;
const skill_entity_1 = require("../../skills/entities/skill.entity");
const typeorm_1 = require("typeorm");
let JobDetailEntity = class JobDetailEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], JobDetailEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => skill_entity_1.SkillEntity, (skill) => skill.id),
    __metadata("design:type", Array)
], JobDetailEntity.prototype, "skills", void 0);
JobDetailEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'job_detail' })
], JobDetailEntity);
exports.JobDetailEntity = JobDetailEntity;
//# sourceMappingURL=job-detail.entity.js.map
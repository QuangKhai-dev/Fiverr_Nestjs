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
exports.CategorySkillEntity = void 0;
const skill_entity_1 = require("../../skills/entities/skill.entity");
const typeorm_1 = require("typeorm");
let CategorySkillEntity = class CategorySkillEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CategorySkillEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], CategorySkillEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => skill_entity_1.SkillEntity, (skill) => skill.id),
    __metadata("design:type", Array)
], CategorySkillEntity.prototype, "skills", void 0);
CategorySkillEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'category_skills' })
], CategorySkillEntity);
exports.CategorySkillEntity = CategorySkillEntity;
//# sourceMappingURL=category-skill.entity.js.map
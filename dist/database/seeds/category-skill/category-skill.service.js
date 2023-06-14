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
exports.CategorySkillSeedService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const category_skill_entity_1 = require("../../../models/main-category/entities/category-skill.entity");
let CategorySkillSeedService = class CategorySkillSeedService {
    constructor(categorySkillRepository) {
        this.categorySkillRepository = categorySkillRepository;
    }
    async addCategorySkillSeed() {
        const categorySkills = [
            {
                id: 1,
                tenLoaiCongViec: 'Graphics & Design',
            },
            {
                id: 2,
                tenLoaiCongViec: 'Digital Marketing',
            },
            {
                id: 3,
                tenLoaiCongViec: 'Writing & Translation',
            },
            {
                id: 4,
                tenLoaiCongViec: 'Video & Animation',
            },
            {
                id: 5,
                tenLoaiCongViec: 'Music & Audio',
            },
            {
                id: 114,
                tenLoaiCongViec: 'Life Style',
            },
            {
                id: 275,
                tenLoaiCongViec: 'Project Management',
            },
            {
                id: 276,
                tenLoaiCongViec: 'Business Analyst ',
            },
        ];
        for (let i = 0; i < categorySkills.length; i++) {
            const categorySkill = new category_skill_entity_1.CategorySkillEntity();
            categorySkill.id = categorySkills[i].id;
            categorySkill.name = categorySkills[i].tenLoaiCongViec;
            await this.categorySkillRepository.save(categorySkill);
        }
    }
};
CategorySkillSeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_skill_entity_1.CategorySkillEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategorySkillSeedService);
exports.CategorySkillSeedService = CategorySkillSeedService;
//# sourceMappingURL=category-skill.service.js.map
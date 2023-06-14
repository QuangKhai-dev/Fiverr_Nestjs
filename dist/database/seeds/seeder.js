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
exports.Seeder = void 0;
const category_skill_service_1 = require("./category-skill/category-skill.service");
const certificates_service_1 = require("./certificates/certificates.service");
const skills_service_1 = require("./skills/skills.service");
const users_service_1 = require("./users/users.service");
const common_1 = require("@nestjs/common");
let Seeder = class Seeder {
    constructor(usersSeederService, skillSeederService, certificateService, categorySkillSeedService) {
        this.usersSeederService = usersSeederService;
        this.skillSeederService = skillSeederService;
        this.certificateService = certificateService;
        this.categorySkillSeedService = categorySkillSeedService;
    }
    async insertUser() {
        return await this.usersSeederService.addUserSeed();
    }
    async insertSkill() {
        return await this.skillSeederService.addSkillSeed();
    }
    async insertCertificate() {
        return await this.certificateService.addCertificateSeed();
    }
    async insertCategorySkill() {
        return await this.categorySkillSeedService.addCategorySkillSeed();
    }
};
Seeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersSeederService,
        skills_service_1.SkillsSeederService,
        certificates_service_1.CertificatesSeederService,
        category_skill_service_1.CategorySkillSeedService])
], Seeder);
exports.Seeder = Seeder;
//# sourceMappingURL=seeder.js.map
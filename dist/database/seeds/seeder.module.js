"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const certificates_module_1 = require("./certificates/certificates.module");
const common_1 = require("@nestjs/common");
const seeder_1 = require("./seeder");
const users_module_1 = require("./users/users.module");
const provider_module_1 = require("../../providers/mysql/provider.module");
const skills_module_1 = require("./skills/skills.module");
const category_skill_module_1 = require("./category-skill/category-skill.module");
let SeederModule = class SeederModule {
};
SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            provider_module_1.MySQLDatabaseProviderModule,
            users_module_1.UsersSeederModule,
            skills_module_1.SkillsSeederModule,
            certificates_module_1.CertificatesSeederModule,
            category_skill_module_1.CategorySkillSeedModule,
        ],
        providers: [seeder_1.Seeder],
    })
], SeederModule);
exports.SeederModule = SeederModule;
//# sourceMappingURL=seeder.module.js.map
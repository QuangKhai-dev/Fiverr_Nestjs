"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const jwt_1 = require("@nestjs/jwt");
const seeder_module_1 = require("./database/seeds/seeder.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const user_module_1 = require("./models/user/user.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const skills_module_1 = require("./models/skills/skills.module");
const jobs_module_1 = require("./models/jobs/jobs.module");
const certificates_module_1 = require("./models/certificates/certificates.module");
const comments_module_1 = require("./models/comments/comments.module");
const core_1 = require("@nestjs/core");
const job_detail_module_1 = require("./models/job-detail/job-detail.module");
const category_skills_module_1 = require("./models/main-category/category-skills.module");
const provider_module_1 = require("./providers/mysql/provider.module");
const provider_module_2 = require("./providers/serveStatic/provider.module");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const roles_guard_1 = require("./guards/roles.guard");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            provider_module_1.MySQLDatabaseProviderModule,
            auth_module_1.AuthModule,
            provider_module_2.ServeStaticProviderModule,
            skills_module_1.SkillsModule,
            jobs_module_1.JobsModule,
            certificates_module_1.CertificatesModule,
            comments_module_1.CommentsModule,
            job_detail_module_1.JobDetailModule,
            category_skills_module_1.CategorySkillsModule,
            user_module_1.UserModule,
            seeder_module_1.SeederModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            jwt_1.JwtService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
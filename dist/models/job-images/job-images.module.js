"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobImagesModule = void 0;
const job_entity_1 = require("../jobs/entities/job.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const job_images_service_1 = require("./job-images.service");
const job_images_controller_1 = require("./job-images.controller");
const job_image_entity_1 = require("./entities/job-image.entity");
let JobImagesModule = class JobImagesModule {
};
JobImagesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([job_image_entity_1.JobImageEntity, job_entity_1.JobEntity])],
        controllers: [job_images_controller_1.JobImagesController],
        providers: [job_images_service_1.JobImagesService],
    })
], JobImagesModule);
exports.JobImagesModule = JobImagesModule;
//# sourceMappingURL=job-images.module.js.map
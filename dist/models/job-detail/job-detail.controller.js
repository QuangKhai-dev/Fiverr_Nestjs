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
exports.JobDetailController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const job_detail_service_1 = require("./job-detail.service");
const create_job_detail_dto_1 = require("./dto/create-job-detail.dto");
const update_job_detail_dto_1 = require("./dto/update-job-detail.dto");
const jwt_decorator_1 = require("../../decorators/jwt.decorator");
let JobDetailController = class JobDetailController {
    constructor(jobDetailService) {
        this.jobDetailService = jobDetailService;
    }
    create(createJobDetailDto) {
        return this.jobDetailService.create(createJobDetailDto);
    }
    findAll() {
        return this.jobDetailService.findAll();
    }
    findOne(id) {
        return this.jobDetailService.findOne(+id);
    }
    update(id, updateJobDetailDto) {
        return this.jobDetailService.update(+id, updateJobDetailDto);
    }
    remove(id) {
        return this.jobDetailService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, jwt_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_detail_dto_1.CreateJobDetailDto]),
    __metadata("design:returntype", void 0)
], JobDetailController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobDetailController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobDetailController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_job_detail_dto_1.UpdateJobDetailDto]),
    __metadata("design:returntype", void 0)
], JobDetailController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JobDetailController.prototype, "remove", null);
JobDetailController = __decorate([
    (0, common_1.Controller)('job-detail'),
    (0, swagger_1.ApiTags)('JobDetail'),
    __metadata("design:paramtypes", [job_detail_service_1.JobDetailService])
], JobDetailController);
exports.JobDetailController = JobDetailController;
//# sourceMappingURL=job-detail.controller.js.map
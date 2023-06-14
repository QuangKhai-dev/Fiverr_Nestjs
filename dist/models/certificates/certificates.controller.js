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
exports.CertificatesController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const certificates_service_1 = require("./certificates.service");
const create_certificate_dto_1 = require("./dto/create-certificate.dto");
const user_decorator_1 = require("../../decorators/user.decorator");
let CertificatesController = class CertificatesController {
    constructor(certificatesService) {
        this.certificatesService = certificatesService;
    }
    create(createCertificateDto, user) {
        return this.certificatesService.create(createCertificateDto, user);
    }
    findAllByUser(user) {
        return this.certificatesService.findAllByUser(user);
    }
    findOneById(id, user) {
        return this.certificatesService.findOneById(id, user);
    }
    findAllByName(name, user) {
        return this.certificatesService.findAllByName(name, user);
    }
    update(id, updateCertificateDto, user) {
        return this.certificatesService.update(id, updateCertificateDto, user);
    }
    remove(id, user) {
        return this.certificatesService.remove(id, user);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_certificate_dto_1.CertificateDto, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-all-user'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findAllByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Get)(':name'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "findAllByName", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_certificate_dto_1.UpdateCertificateDto, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CertificatesController.prototype, "remove", null);
CertificatesController = __decorate([
    (0, common_1.Controller)('certificates'),
    (0, swagger_1.ApiTags)('Certificates-Done'),
    __metadata("design:paramtypes", [certificates_service_1.CertificatesService])
], CertificatesController);
exports.CertificatesController = CertificatesController;
//# sourceMappingURL=certificates.controller.js.map
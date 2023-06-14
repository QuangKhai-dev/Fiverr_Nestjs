"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatesSeederModule = void 0;
const certificates_service_1 = require("./certificates.service");
const certificate_entity_1 = require("./../../../models/certificates/entities/certificate.entity");
const user_entity_1 = require("../../../models/user/entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
let CertificatesSeederModule = class CertificatesSeederModule {
};
CertificatesSeederModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, certificate_entity_1.CertificateEntity])],
        providers: [certificates_service_1.CertificatesSeederService],
        exports: [certificates_service_1.CertificatesSeederService],
    })
], CertificatesSeederModule);
exports.CertificatesSeederModule = CertificatesSeederModule;
//# sourceMappingURL=certificates.module.js.map
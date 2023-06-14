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
exports.UserController = void 0;
const user_decorator_1 = require("./../../decorators/user.decorator");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const storageMulter_1 = require("../../util/storageMulter");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const common_2 = require("@nestjs/common");
const role_decorator_1 = require("../../decorators/role.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const jwt_decorator_1 = require("../../decorators/jwt.decorator");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    createAdmin(createAdminDto) {
        return this.userService.createAdmin(createAdminDto);
    }
    findAll() {
        return this.userService.findAll();
    }
    getProfile(user) {
        return this.userService.getProfile(user);
    }
    findOne(id) {
        return this.userService.findOne(id);
    }
    update(updateUserDto, user) {
        return this.userService.update(user.userId, updateUserDto);
    }
    remove(id) {
        return this.userService.remove(id);
    }
    uploadAvatar(file, userId) {
        return this.userService.uploadAvatar(file, userId);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, jwt_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('register-admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, role_decorator_1.Roles)(role_enum_1.Role.SuperAdmin, role_enum_1.Role.Admin),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Get)('get-all'),
    (0, jwt_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, role_decorator_1.Roles)(role_enum_1.Role.SuperAdmin, role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                },
                password: {
                    type: 'string',
                },
                userName: {
                    type: 'string',
                },
                phone: {
                    type: 'string',
                },
                gender: {
                    type: 'boolean',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.SuperAdmin, role_enum_1.Role.Admin),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', storageMulter_1.storageMulter)),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Upsert Profile Photos' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                userId: {
                    type: 'number',
                },
            },
        },
    }),
    __param(0, (0, common_1.UploadedFile)(new common_2.ParseFilePipeBuilder()
        .addFileTypeValidator({
        fileType: 'jpeg',
    })
        .build({
        errorHttpStatusCode: common_2.HttpStatus.UNPROCESSABLE_ENTITY,
    }))),
    __param(1, (0, common_1.Body)('userId', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "uploadAvatar", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User-Done'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
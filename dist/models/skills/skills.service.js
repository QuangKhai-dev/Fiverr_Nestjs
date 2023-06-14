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
exports.SkillsService = void 0;
const exampleRespone_1 = require("../../util/exampleRespone");
const skill_entity_1 = require("./entities/skill.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let SkillsService = class SkillsService {
    constructor(skillEntity) {
        this.skillEntity = skillEntity;
    }
    async create(createSkillDto) {
        try {
            await this.skillEntity.save(createSkillDto);
            return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.CREATED, 'Xử lí thành công', null);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const allSkill = await this.skillEntity.find();
            return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.OK, 'Xử lí thành công', allSkill);
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        const skill = await this.skillEntity.findOne({
            where: {
                id,
            },
        });
        if (!skill) {
            throw new common_1.HttpException('Skill not found', common_1.HttpStatus.NOT_FOUND);
        }
        return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.OK, 'Xử lí thành công', skill);
    }
    async update(id, updateSkillDto) {
        try {
            const skill = await this.skillEntity.findOne({
                where: {
                    id,
                },
            });
            if (!skill) {
                throw new common_1.HttpException('Skill not found', common_1.HttpStatus.NOT_FOUND);
            }
            await this.skillEntity.update(id, updateSkillDto);
            return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.OK, 'Xử lí thành công', null);
        }
        catch (error) {
            throw new common_1.HttpException('error', common_1.HttpStatus.BAD_REQUEST, {
                cause: new Error(error),
            });
        }
    }
    async remove(id) {
        const skill = await this.skillEntity.findOne({
            where: {
                id,
            },
        });
        if (!skill) {
            throw new common_1.HttpException('Skill not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.skillEntity.delete(id);
        return (0, exampleRespone_1.templateRespone)(common_1.HttpStatus.OK, 'Xử lí thành công', null);
    }
};
SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(skill_entity_1.SkillEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkillsService);
exports.SkillsService = SkillsService;
//# sourceMappingURL=skills.service.js.map
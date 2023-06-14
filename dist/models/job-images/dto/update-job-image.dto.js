"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJobImageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_job_image_dto_1 = require("./create-job-image.dto");
class UpdateJobImageDto extends (0, mapped_types_1.PartialType)(create_job_image_dto_1.CreateJobImageDto) {
}
exports.UpdateJobImageDto = UpdateJobImageDto;
//# sourceMappingURL=update-job-image.dto.js.map
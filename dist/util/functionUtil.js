"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCheckNotExsit = void 0;
const common_1 = require("@nestjs/common");
const handleCheckNotExsit = async (EntityService, id) => {
    const checkExist = await EntityService.findOneBy({ id });
    if (!checkExist) {
        throw new common_1.HttpException('User not exists', common_1.HttpStatus.BAD_REQUEST);
    }
    return checkExist;
};
exports.handleCheckNotExsit = handleCheckNotExsit;
//# sourceMappingURL=functionUtil.js.map
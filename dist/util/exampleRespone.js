"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateRespone = void 0;
const templateRespone = (status, message, value) => {
    return {
        status,
        message,
        content: value,
    };
};
exports.templateRespone = templateRespone;
//# sourceMappingURL=exampleRespone.js.map
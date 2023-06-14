"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageMulter = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const uuid_1 = require("uuid");
exports.storageMulter = {
    storage: (0, multer_1.diskStorage)({
        destination: './uploads',
        filename: (req, file, cb) => {
            cb(null, `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`);
        },
    }),
};
//# sourceMappingURL=storageMulter.js.map
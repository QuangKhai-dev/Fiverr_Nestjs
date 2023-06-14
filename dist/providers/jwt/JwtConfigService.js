"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtConfigService = void 0;
class JwtConfigService {
    createJwtOptions() {
        return {
            secret: 'hard!to-guess_secret',
        };
    }
}
exports.JwtConfigService = JwtConfigService;
//# sourceMappingURL=JwtConfigService.js.map
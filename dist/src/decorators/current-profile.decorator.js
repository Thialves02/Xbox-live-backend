"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentProfile = void 0;
const common_1 = require("@nestjs/common");
const AuthRequest_1 = require("../auth/model/AuthRequest");
const Perfil_1 = require("../usuario/entities/Perfil");
exports.CurrentProfile = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.second;
});
//# sourceMappingURL=current-profile.decorator.js.map
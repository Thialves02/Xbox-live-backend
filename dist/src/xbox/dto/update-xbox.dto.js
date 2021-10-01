"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateXboxDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_xbox_dto_1 = require("./create-xbox.dto");
class UpdateXboxDto extends (0, mapped_types_1.PartialType)(create_xbox_dto_1.CreateXboxDto) {
}
exports.UpdateXboxDto = UpdateXboxDto;
//# sourceMappingURL=update-xbox.dto.js.map
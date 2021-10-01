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
exports.XboxController = void 0;
const common_1 = require("@nestjs/common");
const xbox_service_1 = require("./xbox.service");
const create_xbox_dto_1 = require("./dto/create-xbox.dto");
const update_xbox_dto_1 = require("./dto/update-xbox.dto");
let XboxController = class XboxController {
    constructor(xboxService) {
        this.xboxService = xboxService;
    }
    create(createXboxDto) {
        return this.xboxService.create(createXboxDto);
    }
    findAll() {
        return this.xboxService.findAll();
    }
    findOne(id) {
        return this.xboxService.findOne(+id);
    }
    update(id, updateXboxDto) {
        return this.xboxService.update(+id, updateXboxDto);
    }
    remove(id) {
        return this.xboxService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_xbox_dto_1.CreateXboxDto]),
    __metadata("design:returntype", void 0)
], XboxController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], XboxController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], XboxController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_xbox_dto_1.UpdateXboxDto]),
    __metadata("design:returntype", void 0)
], XboxController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], XboxController.prototype, "remove", null);
XboxController = __decorate([
    (0, common_1.Controller)('xbox'),
    __metadata("design:paramtypes", [xbox_service_1.XboxService])
], XboxController);
exports.XboxController = XboxController;
//# sourceMappingURL=xbox.controller.js.map
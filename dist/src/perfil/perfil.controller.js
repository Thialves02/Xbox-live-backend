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
exports.PerfilController = void 0;
const common_1 = require("@nestjs/common");
const perfil_service_1 = require("./perfil.service");
const create_perfil_dto_1 = require("./dto/create-perfil.dto");
const update_perfil_dto_1 = require("./dto/update-perfil.dto");
let PerfilController = class PerfilController {
    constructor(perfilService) {
        this.perfilService = perfilService;
    }
    create(createPerfilDto) {
        return this.perfilService.create(createPerfilDto);
    }
    findAll() {
        return this.perfilService.findAll();
    }
    findOne(id) {
        return this.perfilService.findOne(+id);
    }
    update(id, updatePerfilDto) {
        return this.perfilService.update(+id, updatePerfilDto);
    }
    remove(id) {
        return this.perfilService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_perfil_dto_1.CreatePerfilDto]),
    __metadata("design:returntype", void 0)
], PerfilController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PerfilController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerfilController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_perfil_dto_1.UpdatePerfilDto]),
    __metadata("design:returntype", void 0)
], PerfilController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerfilController.prototype, "remove", null);
PerfilController = __decorate([
    (0, common_1.Controller)('perfil'),
    __metadata("design:paramtypes", [perfil_service_1.PerfilService])
], PerfilController);
exports.PerfilController = PerfilController;
//# sourceMappingURL=perfil.controller.js.map
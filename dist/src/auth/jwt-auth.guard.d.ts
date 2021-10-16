import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsuarioService } from 'src/usuario/usuario.service';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private reflector;
    private readonly usuarioService;
    constructor(reflector: Reflector, usuarioService: UsuarioService);
    canActivate(context: ExecutionContext): boolean | import("rxjs").Observable<boolean>;
}
export {};

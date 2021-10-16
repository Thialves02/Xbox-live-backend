import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginRequestBody } from './model/LoginRequestBody';
import { UserToken } from './model/UserToke';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    login(dto: LoginRequestBody): Promise<UserToken>;
    validateUsuario(email: string, senha: string): Promise<Usuario>;
}

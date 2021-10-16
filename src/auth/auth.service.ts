import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginRequestBody } from './model/LoginRequestBody';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './model/UserPayload';
import { UserToken } from './model/UserToke';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuarioService: UsuarioService,
        private readonly jwtService: JwtService
        ){}
    async login(dto: LoginRequestBody): Promise<UserToken> {
        const usuario:Usuario = await this.validateUsuario(dto.email, dto.senha)

        const payload:UserPayload ={
            sub: usuario.id,
            username: usuario.email
        }

        return{
            accessToken:this.jwtService.sign(payload)
        }
    }
    async validateUsuario(email: string, senha: string): Promise<Usuario> {
        // Buscamos o user pelo e-mail
        const usuario: Usuario = await this.usuarioService.findByEmail(email);
    
        // Caso user esteja no banco, valido se a senha informada foi correta
        if (usuario) {
          const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
    
          if (isPasswordValid) {
            // Se a senha for válida, retornamos o objeto do usuário, sem senha
    
            return {
              ...usuario,
              senha: undefined,
            };
          }
        }
        throw new Error('Não autorizado')
    }
}

import { Usuario } from "../entities/usuario.entity";
import { CreatePerfilDto } from "src/perfil/dto/create-perfil.dto";
export declare class CreateUsuarioDto extends Usuario {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: number;
    isAdmin?: boolean | null;
    perfis: CreatePerfilDto[];
}

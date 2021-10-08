import { Usuario } from "../entities/usuario.entity";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsBoolean } from "class-validator";

export class CreateUsuarioDto extends Usuario {
    @IsString()
    @IsNotEmpty()
    nome: string

    @IsString()
    @IsNotEmpty()
    sobrenome: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    senha: string

    @IsInt()
    @IsNotEmpty()
    cpf: number

    @IsBoolean()
    @IsOptional()
    isAdmin?: boolean | null;
}

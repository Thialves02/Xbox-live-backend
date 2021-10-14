import { Usuario } from "../entities/usuario.entity";
import { IsInt, IsNotEmpty, IsOptional, IsString, IsBoolean, IsArray, ValidateNested} from "class-validator";
import { Perfil } from "../entities/Perfil";
import { CreatePerfilDto } from "src/perfil/dto/create-perfil.dto";
import { Type } from "class-transformer";



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

    @ValidateNested({each:true}) 
    @Type(() => CreatePerfilDto)
    @IsArray()
    perfis: CreatePerfilDto[]
}
 
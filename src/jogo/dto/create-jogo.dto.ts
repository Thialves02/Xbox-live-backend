import { IsInt, IsNotEmpty, IsOptional, IsString, IsBoolean } from "class-validator";
import { Jogo } from "../entities/jogo.entity";

export class CreateJogoDto extends Jogo{
    @IsString()
    @IsNotEmpty()
    nome : string

    @IsString()
    @IsNotEmpty()
    capa: string

    @IsString()
    @IsNotEmpty()
    descricao: string

    @IsString()
    @IsNotEmpty()
    ano: number

    @IsString()
    @IsNotEmpty()
    nota : number

    @IsString()
    @IsNotEmpty()
    link_yt: string

    @IsString()
    @IsNotEmpty()
    link_gp: string
}

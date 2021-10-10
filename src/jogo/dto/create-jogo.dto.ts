import { IsInt, IsNotEmpty, IsString, isNumber } from "class-validator";
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

    @IsNotEmpty()
    ano: number

    @IsNotEmpty()
    nota : number

    @IsString()
    @IsNotEmpty()
    link_yt: string

    @IsString()
    @IsNotEmpty()
    link_gp: string
}

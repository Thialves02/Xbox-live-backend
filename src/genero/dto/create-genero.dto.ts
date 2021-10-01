import { Genero } from "../entities/genero.entity"
import { IsInt, IsNotEmpty, IsOptional, IsString, IsBoolean } from "class-validator";

export class CreateGeneroDto extends Genero {
    @IsString()
    @IsNotEmpty()
    nome : string
}

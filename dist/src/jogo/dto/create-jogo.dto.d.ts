import { Jogo } from "../entities/jogo.entity";
export declare class CreateJogoDto extends Jogo {
    nome: string;
    capa: string;
    descricao: string;
    ano: number;
    nota: number;
    link_yt: string;
    link_gp: string;
}

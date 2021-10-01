import { Prisma } from "@prisma/client";
export declare class Jogo implements Prisma.JogoUncheckedCreateInput {
    id?: number;
    nome: string;
    capa: string;
    descricao: string;
    ano: number;
    nota: number;
    link_yt: string;
    link_gp: string;
}

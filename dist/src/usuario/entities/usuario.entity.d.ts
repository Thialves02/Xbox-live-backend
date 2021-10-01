import { Prisma } from "@prisma/client";
export declare class Usuario implements Prisma.UsuarioUncheckedCreateInput {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: number;
    isAdmin?: boolean;
}

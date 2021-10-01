import { Prisma } from "@prisma/client";
export declare class Perfil implements Prisma.PerfilUncheckedCreateInput {
    id?: number;
    usuarioId: number;
    titulo: string;
    imagem: string;
}

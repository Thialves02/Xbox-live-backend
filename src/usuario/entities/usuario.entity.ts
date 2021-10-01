import { Prisma } from "@prisma/client";

export class Usuario implements Prisma.UsuarioUncheckedCreateInput{
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: number
    isAdmin?: boolean
    /* perfis?: PerfilUncheckedCreateNestedManyWithoutUsuarioInput
    jogosUJ?: UsuarioOnJogoUncheckedCreateNestedManyWithoutUsuarioInput */
}

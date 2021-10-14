import { Perfil } from "./Perfil"

export class Usuario{
    id?: number
    nome: string
    sobrenome: string
    email: string
    senha: string
    cpf: number
    isAdmin?: boolean
    perfis:Perfil[]
}



import { PrismaService } from 'prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Prisma } from "@prisma/client";
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUsuarioDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        cpf: number;
        isAdmin: boolean;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Usuario[]>;
    findOneWithPerfis(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: import(".prisma/client").Perfil[];
    }>;
    findOne(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    findByEmail(email: string): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: import(".prisma/client").Perfil[];
    }>;
    update(id: number, data: UpdateUsuarioDto): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    remove(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

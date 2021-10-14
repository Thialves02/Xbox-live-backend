import { PrismaService } from 'prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Prisma } from "@prisma/client";
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUsuarioDto): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Usuario[]>;
    findOneWithPerfis(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: import(".prisma/client").Perfil[];
    }>;
    findOne(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    update(id: number, data: UpdateUsuarioDto): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    remove(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

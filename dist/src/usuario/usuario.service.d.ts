import { PrismaService } from 'prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Usuario[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    update(id: number, data: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

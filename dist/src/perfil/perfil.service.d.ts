import { PrismaService } from 'prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfilService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Perfil[]>;
    findAllWIthUsuarios(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Perfil & {
        usuario: import(".prisma/client").Usuario;
    })[]>;
    findAllWithJogos(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Perfil & {
        jogos: import(".prisma/client").Jogo[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    findOneWithJogos(id: number): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil & {
        jogos: import(".prisma/client").Jogo[];
    }>;
    update(id: number, data: UpdatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
}

import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfilController {
    private readonly perfilService;
    constructor(perfilService: PerfilService);
    create(createPerfilDto: CreatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Perfil[]>;
    findAllWIthUsuarios(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Perfil & {
        usuario: import(".prisma/client").Usuario;
        jogos: import(".prisma/client").Jogo[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    update(id: string, updatePerfilDto: UpdatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
}

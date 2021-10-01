import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Usuario[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

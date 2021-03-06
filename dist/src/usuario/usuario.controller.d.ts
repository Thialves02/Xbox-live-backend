import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        cpf: number;
        isAdmin: boolean;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Usuario[]>;
    findOneWithPerfis(currentUser: Usuario): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: import(".prisma/client").Perfil[];
    }>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: import(".prisma/client").Perfil[];
    }>;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

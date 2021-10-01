import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroController {
    private readonly generoService;
    constructor(generoService: GeneroService);
    create(createGeneroDto: CreateGeneroDto): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genero[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
    update(id: string, updateGeneroDto: UpdateGeneroDto): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
}

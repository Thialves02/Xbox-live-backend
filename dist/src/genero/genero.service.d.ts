import { PrismaService } from 'prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
export declare class GeneroService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateGeneroDto): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genero[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
    update(id: number, data: UpdateGeneroDto): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GeneroClient<import(".prisma/client").Genero>;
}

import { PrismaService } from 'prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Jogo[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    update(id: number, data: UpdateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}

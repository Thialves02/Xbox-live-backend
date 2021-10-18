import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Prisma } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor (private readonly prisma: PrismaService){}

  async create(dto: CreateUsuarioDto) {
    const data: Prisma.UsuarioCreateInput = {
      ...dto,
      perfis:{
        create:dto.perfis
      },
      senha: await bcrypt.hash(dto.senha, 10),
    };

    const createdUser = await this.prisma.usuario.create({ data });

    return {
      ...createdUser,
      senha: undefined,
    };
  }

  findAll() {
    return this.prisma.usuario.findMany()
  }
  findOneWithPerfis(id: number) {
    return this.prisma.usuario.findUnique({
      where:{id},
      include:{
        perfis:true,
      }
    })
  }
  findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: { perfis: true },
    });
  }
   findByEmail(email: string) {
    return this.prisma.usuario.findUnique({ where: { email } , include:{perfis:true}});
  }

  update(id: number, data: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where:{id},
      data
    })
  }

  remove(id: number) {
    return this.prisma.usuario.delete({
      where:{id}
    })
  }
}

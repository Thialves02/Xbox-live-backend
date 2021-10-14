import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Prisma } from "@prisma/client";

@Injectable()
export class UsuarioService {
  constructor (private readonly prisma: PrismaService){}

  create(dto: CreateUsuarioDto) {
    const data : Prisma.UsuarioCreateInput = {
      ...dto,
      perfis: {
        create: dto.perfis,
      },
    };
    return this.prisma.usuario.create({
      data
    })
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
      where:{id}
    })
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

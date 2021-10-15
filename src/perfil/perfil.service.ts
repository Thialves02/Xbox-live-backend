import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {
  constructor (private readonly prisma: PrismaService){}
  create(data: CreatePerfilDto) {
    return this.prisma.perfil.create({
      data
    })
  }

  findAll() {
    return this.prisma.perfil.findMany()
  }
  findAllWIthUsuarios() {
    return this.prisma.perfil.findMany({
      include:{
        usuario:true,
      }
    })
  }
  findAllWithJogos() {
    return this.prisma.perfil.findMany({
      include:{
        jogos:true,
      }
    })
  }
  findOne(id: number) {
    return this.prisma.perfil.findUnique({
      where:{id}
    })
  }

  update(id: number, data: UpdatePerfilDto) {
    return this.prisma.perfil.update({
      where:{id},
      data
    })
  }

  remove(id: number) {
    return this.prisma.perfil.delete({
      where:{id}
    })
  }
}


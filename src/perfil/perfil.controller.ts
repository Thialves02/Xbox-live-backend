import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Post()
  create(@Body() createPerfilDto: CreatePerfilDto) {
    return this.perfilService.create(createPerfilDto);
  }

  @Get()
  findAll() {
    return this.perfilService.findAll();
  }
  @Get('WithUsuarios')
  findAllWIthUsuarios() {
    return this.perfilService.findAllWIthUsuarios();
  }
  @Get('WithJogos')
  findAllWithJogos() {
    return this.perfilService.findAllWithJogos();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilService.findOne(+id);
  }
  @Get(':id/WithJogos')
  findOneWithJogos(@Param('id') id: string) {
    return this.perfilService.findOneWithJogos(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(+id, updatePerfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilService.remove(+id);
  }
}

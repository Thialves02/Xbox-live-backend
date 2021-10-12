import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Controller('genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    return this.generoService.create(createGeneroDto);
  }

  @Get()
  findAll() {
    return this.generoService.findAll();
  }

  @Get('withGames')
  findAllWithGames() {
    return this.generoService.findAllWithGames();
  }

  @Get(':id/withGames')
  findOneWithGames(@Param('id') id: number) {
    return this.generoService.findOneWithGames(id);
  }
  
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.generoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generoService.update(id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.generoService.remove(id);
  }
}

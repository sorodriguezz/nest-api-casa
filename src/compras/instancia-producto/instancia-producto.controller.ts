import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateInstanciaProductoDto } from './dto/create-instancia-producto.dto';
import { UpdateInstanciaProductoDto } from './dto/update-instancia-producto.dto';
import { InstanciaProductoService } from './instancia-producto.service';

@Controller('instancia-producto')
export class InstanciaProductoController {
  constructor(
    private readonly instanciaProductoService: InstanciaProductoService,
  ) {}

  @Post()
  create(@Body() createInstanciaProductoDto: CreateInstanciaProductoDto) {
    return this.instanciaProductoService.create(createInstanciaProductoDto);
  }

  @Get()
  findAll() {
    return this.instanciaProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instanciaProductoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstanciaProductoDto: UpdateInstanciaProductoDto,
  ) {
    return this.instanciaProductoService.update(id, updateInstanciaProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instanciaProductoService.remove(id);
  }
}

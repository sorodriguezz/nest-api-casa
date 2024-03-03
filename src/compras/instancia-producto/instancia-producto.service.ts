import { InstanciaProductoRepository } from './../../common/repositories/instancia-producto.repository';
import { Injectable } from '@nestjs/common';
import { CreateInstanciaProductoDto } from './dto/create-instancia-producto.dto';
import { UpdateInstanciaProductoDto } from './dto/update-instancia-producto.dto';

@Injectable()
export class InstanciaProductoService {
  constructor(
    private readonly instanciaProductoRepository: InstanciaProductoRepository,
  ) {}

  create(createInstanciaProductoDto: CreateInstanciaProductoDto) {
    return this.instanciaProductoRepository.create(createInstanciaProductoDto);
  }

  findAll() {
    return this.instanciaProductoRepository.findAll();
  }

  findOne(id: string) {
    return this.instanciaProductoRepository.findOne(id);
  }

  update(id: string, updateInstanciaProductoDto: UpdateInstanciaProductoDto) {
    return this.instanciaProductoRepository.update(
      id,
      updateInstanciaProductoDto,
    );
  }

  remove(id: string) {
    return this.instanciaProductoRepository.delete(id);
  }
}

import { CategoriaRepository } from './../../common/repositories/categoria.repository';
import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(private readonly categoriaRepository: CategoriaRepository) {}

  create(createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaRepository.create(createCategoriaDto);
  }

  findAll() {
    return this.categoriaRepository.findAll();
  }

  findOne(id: string) {
    return this.categoriaRepository.findOne(id);
  }

  update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaRepository.update(id, updateCategoriaDto);
  }

  remove(id: string) {
    return this.categoriaRepository.delete(id);
  }
}

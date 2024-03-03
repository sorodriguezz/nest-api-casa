import { ProductoRepository } from './../../common/repositories/producto.repository';
import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductoService {
  constructor(private readonly productoRepository: ProductoRepository) {}

  create(createProductoDto: CreateProductoDto) {
    return this.productoRepository.create(createProductoDto);
  }

  findAll() {
    return this.productoRepository.findAll();
  }

  findOne(id: string) {
    return this.productoRepository.findOne(id);
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    return this.productoRepository.update(id, updateProductoDto);
  }

  remove(id: string) {
    return this.productoRepository.delete(id);
  }
}

import { CreateProductoDto } from './../../compras/producto/dto/create-producto.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from '../entities/producto.entity';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Ubicacion } from '../entities/ubicacion.entity';

@Injectable()
export class ProductoRepository {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
    @InjectRepository(Ubicacion)
    private ubicacionRepository: Repository<Ubicacion>,
  ) {}

  public async create(createDto: CreateProductoDto): Promise<Producto> {
    const categoria = await this.categoriaRepository.findOneBy({
      id: createDto.idCategoria,
    });

    if (!categoria) {
      throw new Error('Categoria no encontrada');
    }

    const ubicacion = await this.ubicacionRepository.findOneBy({
      id: createDto.idUbicacion,
    });

    if (!ubicacion) {
      throw new Error('Categoria no encontrada');
    }

    const producto = this.productoRepository.create({
      ...createDto,
      categoria,
      ubicacion,
    });

    return this.productoRepository.save(producto);
  }

  public findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }
}

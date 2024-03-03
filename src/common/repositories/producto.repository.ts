import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductoDto } from 'src/compras/producto/dto/update-producto.dto';
import { Repository } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Producto } from '../entities/producto.entity';
import { CreateProductoDto } from './../../compras/producto/dto/create-producto.dto';

@Injectable()
export class ProductoRepository {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  public async create(createDto: CreateProductoDto): Promise<Producto> {
    const categoria = await this.categoriaRepository.findOneBy({
      id: createDto.idCategoria,
    });

    if (!categoria) {
      throw new Error('Categoria no encontrada');
    }

    const producto = this.productoRepository.create({
      ...createDto,
      categoria,
    });

    return this.productoRepository.save(producto);
  }

  public findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  public findOne(id: string): Promise<Producto> {
    return this.productoRepository.findOne({ where: { id } });
  }

  public async update(
    id: string,
    update: UpdateProductoDto,
  ): Promise<Producto> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id: update.idCategoria },
    });

    const producto = await this.productoRepository.preload({
      id,
      ...update,
      categoria,
    });
    return this.productoRepository.save(producto);
  }

  public async delete(id: string): Promise<Producto> {
    const producto = await this.findOne(id);

    return this.productoRepository.remove(producto);
  }
}

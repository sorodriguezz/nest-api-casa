import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInstanciaProductoDto } from 'src/compras/instancia-producto/dto/create-instancia-producto.dto';
import { UpdateInstanciaProductoDto } from 'src/compras/instancia-producto/dto/update-instancia-producto.dto';
import { Repository } from 'typeorm';
import { InstanciaProducto } from '../entities/instancia-producto.entity';
import { Ubicacion } from '../entities/ubicacion.entity';
import { Producto } from './../entities/producto.entity';

@Injectable()
export class InstanciaProductoRepository {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
    @InjectRepository(Ubicacion)
    private ubicacionRepository: Repository<Ubicacion>,
    @InjectRepository(InstanciaProducto)
    private instanciaProductoRepository: Repository<InstanciaProducto>,
  ) {}

  public async create(
    createDto: CreateInstanciaProductoDto,
  ): Promise<InstanciaProducto> {
    const producto = await this.productoRepository.findOneBy({
      id: createDto.idProducto,
    });

    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    const ubicacion = await this.ubicacionRepository.findOneBy({
      id: createDto.idUbicacion,
    });

    if (!ubicacion) {
      throw new Error('Ubicacion no encontrada');
    }

    const instanciaProducto = this.instanciaProductoRepository.create({
      ...createDto,
      producto,
      ubicacion,
    });

    return this.instanciaProductoRepository.save(instanciaProducto);
  }

  public findAll(): Promise<InstanciaProducto[]> {
    return this.instanciaProductoRepository.find();
  }

  public findOne(id: string): Promise<InstanciaProducto> {
    return this.instanciaProductoRepository.findOne({ where: { id } });
  }

  public async update(
    id: string,
    update: UpdateInstanciaProductoDto,
  ): Promise<InstanciaProducto> {
    const producto = await this.productoRepository.findOne({
      where: { id: update.idProducto },
    });

    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    const ubicacion = await this.ubicacionRepository.findOne({
      where: { id: update.idUbicacion },
    });

    if (!ubicacion) {
      throw new Error('Ubicacion no encontrada');
    }

    const instanciaProducto = await this.instanciaProductoRepository.preload({
      id,
      ...update,
      ubicacion,
      producto,
    });
    return this.instanciaProductoRepository.save(instanciaProducto);
  }

  public async delete(id: string): Promise<InstanciaProducto> {
    const producto = await this.findOne(id);

    return this.instanciaProductoRepository.remove(producto);
  }
}

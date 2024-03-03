import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCategoriaDto } from 'src/compras/categoria/dto/update-categoria.dto';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './../../compras/categoria/dto/create-categoria.dto';
import { Categoria } from './../entities/categoria.entity';

export class CategoriaRepository {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  public create(categoriaDto: CreateCategoriaDto) {
    const categoria = this.categoriaRepository.create(categoriaDto);
    return this.categoriaRepository.save(categoria);
  }

  public findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  public findOne(id: string): Promise<Categoria> {
    return this.categoriaRepository.findOne({ where: { id } });
  }

  public async update(
    id: string,
    update: UpdateCategoriaDto,
  ): Promise<Categoria> {
    const categoria = await this.categoriaRepository.preload({
      id,
      ...update,
    });
    return this.categoriaRepository.save(categoria);
  }

  public async delete(id: string): Promise<Categoria> {
    const categoria = await this.findOne(id);

    return this.categoriaRepository.remove(categoria);
  }
}

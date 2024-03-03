import { InjectRepository } from '@nestjs/typeorm';
import { CreateUbicacionDto } from 'src/compras/ubicacion/dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from 'src/compras/ubicacion/dto/update-ubicacion.dto';
import { Repository } from 'typeorm';
import { Ubicacion } from '../entities/ubicacion.entity';

export class UbicacionRepository {
  constructor(
    @InjectRepository(Ubicacion)
    private ubicacionRepository: Repository<Ubicacion>,
  ) {}

  public create(ubicacionDto: CreateUbicacionDto) {
    const ubicacion = this.ubicacionRepository.create(ubicacionDto);
    return this.ubicacionRepository.save(ubicacion);
  }

  public findAll(): Promise<Ubicacion[]> {
    return this.ubicacionRepository.find();
  }

  public findOne(id: string): Promise<Ubicacion> {
    return this.ubicacionRepository.findOne({ where: { id } });
  }

  public async update(
    id: string,
    update: UpdateUbicacionDto,
  ): Promise<Ubicacion> {
    const categoria = await this.ubicacionRepository.preload({
      id,
      ...update,
    });
    return this.ubicacionRepository.save(categoria);
  }

  public async delete(id: string): Promise<Ubicacion> {
    const categoria = await this.findOne(id);

    return this.ubicacionRepository.remove(categoria);
  }
}

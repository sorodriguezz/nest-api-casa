import { UbicacionRepository } from './../../common/repositories/ubicacion.repository';
import { Injectable } from '@nestjs/common';
import { CreateUbicacionDto } from './dto/create-ubicacion.dto';
import { UpdateUbicacionDto } from './dto/update-ubicacion.dto';

@Injectable()
export class UbicacionService {
  constructor(private readonly ubicacionRepository: UbicacionRepository) {}

  create(createUbicacionDto: CreateUbicacionDto) {
    return this.ubicacionRepository.create(createUbicacionDto);
  }

  findAll() {
    return this.ubicacionRepository.findAll();
  }

  findOne(id: string) {
    return this.ubicacionRepository.findOne(id);
  }

  update(id: string, updateUbicacionDto: UpdateUbicacionDto) {
    return this.ubicacionRepository.update(id, updateUbicacionDto);
  }

  remove(id: string) {
    return this.ubicacionRepository.delete(id);
  }
}

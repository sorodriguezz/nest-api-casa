import { PartialType } from '@nestjs/mapped-types';
import { CreateInstanciaProductoDto } from './create-instancia-producto.dto';

export class UpdateInstanciaProductoDto extends PartialType(CreateInstanciaProductoDto) {}

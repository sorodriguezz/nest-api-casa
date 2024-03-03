import { IsOptional, IsString } from 'class-validator';

export class CreateUbicacionDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}

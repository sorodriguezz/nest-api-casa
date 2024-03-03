import { IsOptional, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsString()
  marca: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsString()
  idCategoria: string;
}

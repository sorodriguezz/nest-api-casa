import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  nombre: string;

  @IsString()
  marca: string;

  @IsInt()
  cantidad: number;

  @IsDateString()
  fechaDeCompra: Date;

  @IsDateString()
  fechaDeVencimiento: Date;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsString()
  idCategoria: string;

  @IsString()
  idUbicacion: string;
}

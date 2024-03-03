import { IsDateString, IsInt, IsString } from 'class-validator';

export class CreateInstanciaProductoDto {
  @IsString()
  idProducto: string;

  @IsString()
  idUbicacion: string;

  @IsInt()
  cantidad: number;

  @IsDateString()
  fechaDeCompra: Date;

  @IsDateString()
  fechaDeVencimiento: Date;
}

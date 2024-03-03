import { Module } from '@nestjs/common';
import { CategoriaModule } from './categoria/categoria.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [CategoriaModule, UbicacionModule, ProductoModule],
})
export class ComprasModule {}

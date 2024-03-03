import { Module } from '@nestjs/common';
import { CategoriaModule } from './categoria/categoria.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { ProductoModule } from './producto/producto.module';
import { InstanciaProductoModule } from './instancia-producto/instancia-producto.module';

@Module({
  imports: [CategoriaModule, UbicacionModule, ProductoModule, InstanciaProductoModule],
})
export class ComprasModule {}

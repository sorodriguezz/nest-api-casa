import { UbicacionRepository } from './repositories/ubicacion.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Ubicacion } from './entities/ubicacion.entity';
import { Producto } from './entities/producto.entity';
import { CategoriaRepository } from './repositories/categoria.repository';
import { ProductoRepository } from './repositories/producto.repository';
import { InstanciaProducto } from './entities/instancia-producto.entity';
import { InstanciaProductoRepository } from './repositories/instancia-producto.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Categoria,
      Ubicacion,
      Producto,
      InstanciaProducto,
    ]),
    CommonModule,
  ],
  providers: [
    CategoriaRepository,
    UbicacionRepository,
    ProductoRepository,
    InstanciaProductoRepository,
  ],
  exports: [
    CategoriaRepository,
    UbicacionRepository,
    ProductoRepository,
    InstanciaProductoRepository,
  ],
})
export class CommonModule {}

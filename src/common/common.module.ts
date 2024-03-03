import { UbicacionRepository } from './repositories/ubicacion.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Ubicacion } from './entities/ubicacion.entity';
import { Producto } from './entities/producto.entity';
import { CategoriaRepository } from './repositories/categoria.repository';
import { ProductoRepository } from './repositories/producto.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Categoria, Ubicacion, Producto]),
    CommonModule,
  ],
  providers: [CategoriaRepository, UbicacionRepository, ProductoRepository],
  exports: [CategoriaRepository, UbicacionRepository, ProductoRepository],
})
export class CommonModule {}

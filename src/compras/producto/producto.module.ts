import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService],
  imports: [CommonModule],
})
export class ProductoModule {}

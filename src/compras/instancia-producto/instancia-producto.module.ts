import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { InstanciaProductoService } from './instancia-producto.service';
import { InstanciaProductoController } from './instancia-producto.controller';

@Module({
  controllers: [InstanciaProductoController],
  providers: [InstanciaProductoService],
  imports: [CommonModule],
})
export class InstanciaProductoModule {}

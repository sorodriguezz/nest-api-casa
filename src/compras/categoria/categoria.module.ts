import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService],
  imports: [CommonModule],
})
export class CategoriaModule {}

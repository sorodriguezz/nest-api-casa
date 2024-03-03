import { CommonModule } from './../../common/common.module';
import { Module } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { UbicacionController } from './ubicacion.controller';

@Module({
  controllers: [UbicacionController],
  providers: [UbicacionService],
  imports: [CommonModule],
})
export class UbicacionModule {}

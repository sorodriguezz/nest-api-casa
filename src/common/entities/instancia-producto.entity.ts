import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Producto } from './producto.entity';
import { Ubicacion } from './ubicacion.entity';

@Entity()
export class InstanciaProducto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Producto, (producto) => producto.instanciasProducto, {
    eager: true,
  })
  producto: Producto;

  @ManyToOne(() => Ubicacion, (ubicacion) => ubicacion.instanciasProducto, {
    eager: true,
  })
  ubicacion: Ubicacion;

  @Column('int')
  cantidad: number;

  @Column('date')
  fechaDeCompra: Date;

  @Column('date')
  fechaDeVencimiento: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}

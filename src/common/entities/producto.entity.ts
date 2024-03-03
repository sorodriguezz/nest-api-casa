import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Categoria } from './categoria.entity';
import { InstanciaProducto } from './instancia-producto.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  marca: string;

  @Column({ nullable: true })
  descripcion: string;

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

  @ManyToOne(() => Categoria, (categoria) => categoria.productos, {
    eager: true,
  })
  categoria: Categoria;

  @OneToMany(
    () => InstanciaProducto,
    (instanciaProducto) => instanciaProducto.producto,
  )
  instanciasProducto: InstanciaProducto[];
}

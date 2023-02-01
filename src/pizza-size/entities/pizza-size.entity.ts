import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'

@Entity('pizzaSize')
export class PizzaSizeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  type: string

  @Column()
  size: number

  @Column()
  isBorder: boolean

  @Column()
  pizzaId: number

  @ManyToOne(() => PizzaEntity, (pizza) => pizza.sizes, { createForeignKeyConstraints: false })
  @JoinColumn({ name: 'pizzaId' })
  pizza: PizzaEntity
}

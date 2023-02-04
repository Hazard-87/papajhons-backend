import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
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

  @ManyToMany(() => PizzaEntity, (pizza) => pizza.types, {
    cascade: true
  })
  @JoinTable()
  pizzaIds: PizzaEntity[]
}

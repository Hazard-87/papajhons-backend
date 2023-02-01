import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { PizzaSizeEntity } from '../../pizza-size/entities/pizza-size.entity'

@Entity('pizza')
export class PizzaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  imageID: number

  @Column()
  createdAt: Date

  @Column()
  productID: number

  @Column({
    type: 'integer',
    array: true,
    default: [],
    nullable: false
  })
  categoryIDs: number[]

  @Column()
  unit: string

  @Column()
  price: number

  @OneToMany(() => PizzaSizeEntity, (size) => size.pizza)
  sizes: PizzaSizeEntity[]
}

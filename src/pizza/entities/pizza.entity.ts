import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm'
import { PizzaSizeEntity } from '../../pizza-size/entities/pizza-size.entity'
import { ImageEntity } from '../../image/entities/image.entity'

@Entity('pizza')
export class PizzaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  productID: number

  @Column()
  createdAt: Date

  @Column({
    type: 'integer',
    array: true,
    default: [],
    nullable: false
  })
  public categoryIDs: number[]

  @Column()
  unit: string

  @Column()
  price: number

  @ManyToMany(() => PizzaSizeEntity, (size) => size.pizzaIds)
  types: PizzaSizeEntity[]

  @OneToMany(() => ImageEntity, (image) => image.pizza)
  images: ImageEntity[]
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pizza')
export class PizzaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  createdAt: Date

  @Column()
  productID: number

  @Column()
  categoryID: number

  @Column({
    type: 'integer',
    array: true,
    default: [],
    nullable: false
  })
  pizzaTypeIDs: number[]

  @Column({
    type: 'integer',
    array: true,
    default: [],
    nullable: false
  })
  pizzaSizeIDs: number[]

  @Column()
  price: number
}

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
}

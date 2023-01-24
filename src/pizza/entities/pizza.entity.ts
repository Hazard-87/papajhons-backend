import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pizzas')
export class PizzaEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  isNew: boolean

  @Column()
  categoryID: number

  @Column()
  typeID: number

  @Column()
  sizeID: number

  @Column()
  price: number
}

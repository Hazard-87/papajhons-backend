import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pizzaSize')
export class PizzaSizeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  size: number

  @Column()
  unit: string
}

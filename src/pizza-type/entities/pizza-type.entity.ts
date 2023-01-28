import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pizzaType')
export class PizzaTypeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  type: string
}

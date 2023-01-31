import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pizzaSize')
export class PizzaSizeEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  pizzaID: number

  @Column()
  type: string

  @Column()
  size: number

  @Column()
  isBorder: boolean
}

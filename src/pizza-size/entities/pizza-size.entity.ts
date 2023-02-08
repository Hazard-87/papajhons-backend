import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('pizzaSize')
export class PizzaSizeEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  type: string

  @Column()
  @ApiProperty()
  size: number

  @Column()
  @ApiProperty()
  isBorder: boolean

  @ManyToMany(() => PizzaEntity, (pizza) => pizza.types, {
    cascade: true
  })
  @JoinTable()
  @ApiProperty({ type: [Number] })
  pizzaIds: PizzaEntity[]
}

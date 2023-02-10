import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('pizzaSize')
export class PizzaSizeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  typeId: number

  @ApiProperty()
  @Column()
  size: number

  @ApiProperty()
  @Column()
  unit: string

  @ApiProperty()
  @Column()
  isBorder: boolean

  @ApiProperty({ type: [Number] })
  @ManyToMany(() => PizzaEntity, (pizza) => pizza.types, {
    cascade: true
  })
  @JoinTable()
  pizzaIds: PizzaEntity[]
}

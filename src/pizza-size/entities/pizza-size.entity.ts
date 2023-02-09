import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('pizzaSize')
export class PizzaSizeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  type: string

  @ApiProperty()
  @Column()
  size: number

  @ApiProperty()
  @Column({ nullable: true })
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

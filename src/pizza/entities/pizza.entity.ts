import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm'
import { PizzaSizeEntity } from '../../pizza-size/entities/pizza-size.entity'
import { ImageEntity } from '../../image/entities/image.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('pizza')
export class PizzaEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  name: string

  @Column()
  @ApiProperty()
  description: string

  @Column()
  @ApiProperty()
  productID: number

  @Column()
  @ApiProperty()
  createdAt: Date

  @Column({
    type: 'integer',
    array: true,
    default: [],
    nullable: false
  })
  @ApiProperty({ type: [Number] })
  public categoryIDs: number[]

  @Column()
  @ApiProperty()
  unit: string

  @Column()
  @ApiProperty()
  price: number

  @ManyToMany(() => PizzaSizeEntity, (size) => size.pizzaIds)
  @ApiProperty({ type: [PizzaSizeEntity] })
  types: PizzaSizeEntity[]

  @OneToMany(() => ImageEntity, (image) => image.pizza)
  @ApiProperty({ type: [ImageEntity] })
  images: ImageEntity[]
}

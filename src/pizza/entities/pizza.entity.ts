import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm'
import { PizzaSizeEntity } from '../../pizza-size/entities/pizza-size.entity'
import { ImageEntity } from '../../image/entities/image.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('pizza')
export class PizzaEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  name: string

  @ApiProperty()
  @Column()
  description: string

  @ApiProperty()
  @Column()
  productID: number

  @ApiProperty()
  @Column()
  createdAt: Date

  @ApiProperty({ type: [Number] })
  @Column({
    type: 'integer',
    array: true,
    default: [],
    nullable: false
  })
  public categoryIDs: number[]

  @ApiProperty()
  @Column()
  price: number

  @ApiProperty({ type: [PizzaSizeEntity] })
  @ManyToMany(() => PizzaSizeEntity, (size) => size.pizzaIds)
  types: PizzaSizeEntity[]

  @ApiProperty({ type: [ImageEntity] })
  @OneToMany(() => ImageEntity, (image) => image.pizza)
  images: ImageEntity[]
}

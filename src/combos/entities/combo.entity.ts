import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { PizzaSizeEntity } from '../../pizza-size/entities/pizza-size.entity'
import { ComboImageEntity } from '../../combo-images/entities/combo-image.entity'

@Entity('combo')
export class ComboEntity {
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
  @ManyToMany(() => PizzaSizeEntity, (size) => size.comboIds)
  types: PizzaSizeEntity[]

  @ApiProperty({ type: [ComboImageEntity] })
  @OneToMany(() => ComboImageEntity, (image) => image.combo)
  images: ComboImageEntity[]
}

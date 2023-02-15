import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { DessertSizeEntity } from '../../dessert-sizes/entities/dessert-size.entity'
import { DessertImageEntity } from '../../dessert-images/entities/dessert-image.entity'

@Entity('dessert')
export class DessertEntity {
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
  price: number

  @ManyToMany(() => DessertSizeEntity, (size) => size.dessertIds)
  @ApiProperty({ type: [DessertSizeEntity] })
  sizes: DessertSizeEntity[]

  @OneToMany(() => DessertImageEntity, (image) => image.dessert)
  @ApiProperty({ type: [DessertImageEntity] })
  images: DessertImageEntity[]
}

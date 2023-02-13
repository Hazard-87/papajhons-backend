import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { BeverageSizeEntity } from '../../beverage-sizes/entities/beverage-size.entity'
import { BeverageImageEntity } from '../../beverage-images/entities/beverage-image.entity'

@Entity('beverage')
export class BeverageEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @ApiProperty()
  name: string

  @Column({
    type: 'integer',
    array: true,
    default: [],
    nullable: false
  })
  @ApiProperty({ type: [Number] })
  public categoryIDs: number[]

  @Column()
  @ApiProperty({
    default: 3
  })
  productID: number

  @Column()
  @ApiProperty()
  price: number

  @ManyToMany(() => BeverageSizeEntity, (size) => size.beverageIds)
  @ApiProperty({ type: [BeverageSizeEntity] })
  sizes: BeverageSizeEntity[]

  @OneToMany(() => BeverageImageEntity, (image) => image.beverage)
  @ApiProperty({ type: [BeverageImageEntity] })
  images: BeverageImageEntity[]
}

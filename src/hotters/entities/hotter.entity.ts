import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { HotterImageEntity } from '../../hotter-images/entities/hotter-image.entity'

@Entity('hotter')
export class HotterEntity {
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

  @OneToMany(() => HotterImageEntity, (image) => image.hotter)
  @ApiProperty({ type: [HotterImageEntity] })
  images: HotterImageEntity[]
}

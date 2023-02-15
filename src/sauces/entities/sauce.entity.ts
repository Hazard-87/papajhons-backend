import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { SauceImageEntity } from '../../sauce-images/entities/sauce-image.entity'
import { SauceSizeEntity } from '../../sauce-sizes/entities/sauce-size.entity'

@Entity('sauce')
export class SauceEntity {
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
    default: 4
  })
  productID: number

  @Column()
  @ApiProperty()
  price: number

  @ManyToMany(() => SauceSizeEntity, (size) => size.sauceIds)
  @ApiProperty({ type: [SauceSizeEntity] })
  sizes: SauceSizeEntity[]

  @OneToMany(() => SauceImageEntity, (image) => image.sauce)
  @ApiProperty({ type: [SauceImageEntity] })
  images: SauceImageEntity[]
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { HotterImageEntity } from '../../hotter-images/entities/hotter-image.entity'
import { JoyImageEntity } from '../../joy-images/entities/joy-image.entity'

@Entity('joy')
export class JoyEntity {
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
  price: number

  @OneToMany(() => JoyImageEntity, (image) => image.joy)
  @ApiProperty({ type: [JoyImageEntity] })
  images: JoyImageEntity[]
}

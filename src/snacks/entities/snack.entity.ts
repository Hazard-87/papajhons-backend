import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { SnackImageEntity } from '../../snack-images/entities/snack-image.entity'
import { SnackSizeEntity } from '../../snack-sizes/entities/snack-size.entity'

@Entity('snack')
export class SnackEntity {
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

  @ManyToMany(() => SnackSizeEntity, (size) => size.snackIds)
  @ApiProperty({ type: [SnackSizeEntity] })
  sizes: SnackSizeEntity[]

  @OneToMany(() => SnackImageEntity, (image) => image.snack)
  @ApiProperty({ type: [SnackImageEntity] })
  images: SnackImageEntity[]
}

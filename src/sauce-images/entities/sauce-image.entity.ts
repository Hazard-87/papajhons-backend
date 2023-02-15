import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { SauceEntity } from '../../sauces/entities/sauce.entity'

@Entity('sauceImage')
export class SauceImageEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({
    nullable: true
  })
  sizeId: number

  @ApiProperty()
  @Column()
  url: string

  @ApiProperty({ type: [Number] })
  @ManyToOne(() => SauceEntity, (sauce) => sauce.images)
  @JoinColumn()
  sauce: SauceEntity
}

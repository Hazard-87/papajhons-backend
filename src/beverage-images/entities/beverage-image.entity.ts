import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { BeverageEntity } from '../../beverages/entities/beverage.entity'

@Entity('beverageImage')
export class BeverageImageEntity {
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
  @ManyToOne(() => BeverageEntity, (beverage) => beverage.images)
  @JoinColumn()
  beverage: BeverageEntity
}

import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { BeverageEntity } from '../../beverages/entities/beverage.entity'

@Entity('beverageSize')
export class BeverageSizeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({ type: 'float', nullable: true })
  size: number

  @ApiProperty()
  @Column()
  unit: string

  @ApiProperty({ type: [Number] })
  @ManyToMany(() => BeverageEntity, (beverage) => beverage.sizes, {
    cascade: true
  })
  @JoinTable()
  beverageIds: BeverageEntity[]
}

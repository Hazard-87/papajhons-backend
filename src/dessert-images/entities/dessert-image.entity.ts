import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { DessertEntity } from '../../desserts/entities/dessert.entity'

@Entity('dessertImage')
export class DessertImageEntity {
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
  @ManyToOne(() => DessertEntity, (dessert) => dessert.images)
  @JoinColumn()
  dessert: DessertEntity
}

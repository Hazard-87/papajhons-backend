import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { HotterEntity } from '../../hotters/entities/hotter.entity'

@Entity('hotterImage')
export class HotterImageEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  url: string

  @ApiProperty({ type: [Number] })
  @ManyToOne(() => HotterEntity, (hotter) => hotter.images)
  @JoinColumn()
  hotter: HotterEntity
}

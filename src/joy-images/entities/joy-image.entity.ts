import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { JoyEntity } from '../../joys/entities/joy.entity'

@Entity('joyImage')
export class JoyImageEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  url: string

  @ApiProperty({ type: [Number] })
  @ManyToOne(() => JoyEntity, (joy) => joy.images)
  @JoinColumn()
  joy: JoyEntity
}

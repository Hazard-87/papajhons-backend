import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { ComboEntity } from '../../combos/entities/combo.entity'

@Entity('comboImage')
export class ComboImageEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  typeId: number

  @ApiProperty()
  @Column()
  url: string

  @ApiProperty({ type: [Number] })
  @ManyToOne(() => ComboEntity, (combo) => combo.images)
  @JoinColumn()
  combo: ComboEntity
}

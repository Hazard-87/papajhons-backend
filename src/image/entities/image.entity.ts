import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('image')
export class ImageEntity {
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
  @ManyToOne(() => PizzaEntity, (pizza) => pizza.images)
  @JoinColumn()
  pizza: PizzaEntity
}

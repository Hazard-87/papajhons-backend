import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('image')
export class ImageEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  typeId: number

  @Column({
    nullable: true,
    default: null
  })
  @ApiProperty()
  url: string

  @ManyToOne(() => PizzaEntity, (pizza) => pizza.images)
  @JoinColumn()
  @ApiProperty({ type: [Number] })
  pizza: PizzaEntity
}

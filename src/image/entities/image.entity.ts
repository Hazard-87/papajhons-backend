import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'

@Entity('image')
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  typeId: number

  @Column({
    nullable: true,
    default: null
  })
  url: string

  @ManyToOne(() => PizzaEntity, (pizza) => pizza.images)
  @JoinColumn()
  pizza: PizzaEntity
}

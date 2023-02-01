import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { PizzaEntity } from '../../pizza/entities/pizza.entity'

@Entity('image')
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  url: string

  @OneToOne(() => PizzaEntity, (pizza) => pizza.image)
  @JoinColumn()
  pizza: PizzaEntity
}

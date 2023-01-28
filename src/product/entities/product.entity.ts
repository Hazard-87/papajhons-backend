import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}

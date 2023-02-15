import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { DessertEntity } from '../../desserts/entities/dessert.entity'

@Entity('dessertSize')
export class DessertSizeEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  size: number

  @ApiProperty()
  @Column()
  unit: string

  @ApiProperty({ type: [Number] })
  @ManyToMany(() => DessertEntity, (dessert) => dessert.sizes, {
    cascade: true
  })
  @JoinTable()
  dessertIds: DessertEntity[]
}

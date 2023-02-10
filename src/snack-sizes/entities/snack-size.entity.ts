import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { SnackEntity } from '../../snacks/entities/snack.entity'

@Entity('snackSize')
export class SnackSizeEntity {
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
  @ManyToMany(() => SnackEntity, (snack) => snack.sizes, {
    cascade: true
  })
  @JoinTable()
  snackIds: SnackEntity[]
}

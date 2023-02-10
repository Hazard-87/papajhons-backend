import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { SnackEntity } from '../../snacks/entities/snack.entity'

@Entity('snackImage')
export class SnackImageEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({
    nullable: true
  })
  sizeId: number

  @ApiProperty()
  @Column()
  url: string

  @ApiProperty({ type: [Number] })
  @ManyToOne(() => SnackEntity, (snack) => snack.images)
  @JoinColumn()
  snack: SnackEntity
}

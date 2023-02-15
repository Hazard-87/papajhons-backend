import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { SauceEntity } from '../../sauces/entities/sauce.entity'

@Entity('sauceSize')
export class SauceSizeEntity {
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
  @ManyToMany(() => SauceEntity, (sauce) => sauce.sizes, {
    cascade: true
  })
  @JoinTable()
  sauceIds: SauceEntity[]
}

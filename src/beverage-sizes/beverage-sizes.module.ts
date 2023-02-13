import { Module } from '@nestjs/common'
import { BeverageSizesService } from './beverage-sizes.service'
import { BeverageSizesController } from './beverage-sizes.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BeverageSizeEntity } from './entities/beverage-size.entity'

@Module({
  imports: [TypeOrmModule.forFeature([BeverageSizeEntity])],
  controllers: [BeverageSizesController],
  providers: [BeverageSizesService]
})
export class BeverageSizesModule {}

import { Module } from '@nestjs/common'
import { DessertSizesService } from './dessert-sizes.service'
import { DessertSizesController } from './dessert-sizes.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DessertSizeEntity } from './entities/dessert-size.entity'

@Module({
  imports: [TypeOrmModule.forFeature([DessertSizeEntity])],
  controllers: [DessertSizesController],
  providers: [DessertSizesService]
})
export class DessertSizesModule {}

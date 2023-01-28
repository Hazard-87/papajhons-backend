import { Module } from '@nestjs/common'
import { PizzaSizeService } from './pizza-size.service'
import { PizzaSizeController } from './pizza-size.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PizzaSizeEntity } from './entities/pizza-size.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PizzaSizeEntity])],
  controllers: [PizzaSizeController],
  providers: [PizzaSizeService]
})
export class PizzaSizeModule {}

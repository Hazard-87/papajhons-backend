import { Module } from '@nestjs/common'
import { PizzaTypeService } from './pizza-type.service'
import { PizzaTypeController } from './pizza-type.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PizzaTypeEntity } from './entities/pizza-type.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PizzaTypeEntity])],
  controllers: [PizzaTypeController],
  providers: [PizzaTypeService]
})
export class PizzaTypeModule {}

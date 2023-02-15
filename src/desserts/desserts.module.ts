import { Module } from '@nestjs/common'
import { DessertsService } from './desserts.service'
import { DessertsController } from './desserts.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DessertEntity } from './entities/dessert.entity'

@Module({
  imports: [TypeOrmModule.forFeature([DessertEntity])],
  controllers: [DessertsController],
  providers: [DessertsService]
})
export class DessertsModule {}

import { Module } from '@nestjs/common'
import { BeverageImagesService } from './beverage-images.service'
import { BeverageImagesController } from './beverage-images.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BeverageImageEntity } from './entities/beverage-image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([BeverageImageEntity])],
  controllers: [BeverageImagesController],
  providers: [BeverageImagesService]
})
export class BeverageImagesModule {}

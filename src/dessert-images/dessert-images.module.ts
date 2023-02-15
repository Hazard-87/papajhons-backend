import { Module } from '@nestjs/common'
import { DessertImagesService } from './dessert-images.service'
import { DessertImagesController } from './dessert-images.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DessertImageEntity } from './entities/dessert-image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([DessertImageEntity])],
  controllers: [DessertImagesController],
  providers: [DessertImagesService]
})
export class DessertImagesModule {}

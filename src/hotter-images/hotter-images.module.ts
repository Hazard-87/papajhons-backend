import { Module } from '@nestjs/common'
import { HotterImagesService } from './hotter-images.service'
import { HotterImagesController } from './hotter-images.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HotterImageEntity } from './entities/hotter-image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([HotterImageEntity])],
  controllers: [HotterImagesController],
  providers: [HotterImagesService]
})
export class HotterImagesModule {}

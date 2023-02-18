import { Module } from '@nestjs/common'
import { JoyImagesService } from './joy-images.service'
import { JoyImagesController } from './joy-images.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JoyImageEntity } from './entities/joy-image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([JoyImageEntity])],
  controllers: [JoyImagesController],
  providers: [JoyImagesService]
})
export class JoyImagesModule {}

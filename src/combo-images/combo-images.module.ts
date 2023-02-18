import { Module } from '@nestjs/common'
import { ComboImagesService } from './combo-images.service'
import { ComboImagesController } from './combo-images.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ComboImageEntity } from './entities/combo-image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ComboImageEntity])],
  controllers: [ComboImagesController],
  providers: [ComboImagesService]
})
export class ComboImagesModule {}

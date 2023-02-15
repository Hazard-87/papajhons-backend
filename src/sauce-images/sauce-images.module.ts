import { Module } from '@nestjs/common'
import { SauceImagesService } from './sauce-images.service'
import { SauceImagesController } from './sauce-images.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SauceImageEntity } from './entities/sauce-image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SauceImageEntity])],
  controllers: [SauceImagesController],
  providers: [SauceImagesService]
})
export class SauceImagesModule {}

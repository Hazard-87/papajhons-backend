import { Module } from '@nestjs/common'
import { SnackImagesService } from './snack-images.service'
import { SnackImagesController } from './snack-images.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SnackImageEntity } from './entities/snack-image.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SnackImageEntity])],
  controllers: [SnackImagesController],
  providers: [SnackImagesService]
})
export class SnackImagesModule {}

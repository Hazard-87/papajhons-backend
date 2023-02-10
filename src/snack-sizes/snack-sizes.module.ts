import { Module } from '@nestjs/common'
import { SnackSizesService } from './snack-sizes.service'
import { SnackSizesController } from './snack-sizes.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SnackSizeEntity } from './entities/snack-size.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SnackSizeEntity])],
  controllers: [SnackSizesController],
  providers: [SnackSizesService]
})
export class SnackSizesModule {}

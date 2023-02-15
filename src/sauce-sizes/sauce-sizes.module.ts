import { Module } from '@nestjs/common'
import { SauceSizesService } from './sauce-sizes.service'
import { SauceSizesController } from './sauce-sizes.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SauceSizeEntity } from './entities/sauce-size.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SauceSizeEntity])],
  controllers: [SauceSizesController],
  providers: [SauceSizesService]
})
export class SauceSizesModule {}

import { Module } from '@nestjs/common'
import { HottersService } from './hotters.service'
import { HottersController } from './hotters.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HotterEntity } from './entities/hotter.entity'

@Module({
  imports: [TypeOrmModule.forFeature([HotterEntity])],
  controllers: [HottersController],
  providers: [HottersService]
})
export class HottersModule {}

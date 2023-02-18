import { Module } from '@nestjs/common'
import { JoysService } from './joys.service'
import { JoysController } from './joys.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JoyEntity } from './entities/joy.entity'

@Module({
  imports: [TypeOrmModule.forFeature([JoyEntity])],
  controllers: [JoysController],
  providers: [JoysService]
})
export class JoysModule {}

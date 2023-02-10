import { Module } from '@nestjs/common'
import { SnacksService } from './snacks.service'
import { SnacksController } from './snacks.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SnackEntity } from './entities/snack.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SnackEntity])],
  controllers: [SnacksController],
  providers: [SnacksService]
})
export class SnacksModule {}

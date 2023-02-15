import { Module } from '@nestjs/common'
import { SaucesService } from './sauces.service'
import { SaucesController } from './sauces.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SauceEntity } from './entities/sauce.entity'

@Module({
  imports: [TypeOrmModule.forFeature([SauceEntity])],
  controllers: [SaucesController],
  providers: [SaucesService]
})
export class SaucesModule {}

import { Module } from '@nestjs/common'
import { CombosService } from './combos.service'
import { CombosController } from './combos.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ComboEntity } from './entities/combo.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ComboEntity])],
  controllers: [CombosController],
  providers: [CombosService]
})
export class CombosModule {}

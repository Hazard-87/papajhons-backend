import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PizzaModule } from './pizza/pizza.module'
import { PizzaEntity } from './pizza/entities/pizza.entity'
import { CategoryModule } from './category/category.module'
import { CategoryEntity } from './category/entities/category.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: ' ',
      database: 'papajhonsDB',
      entities: [PizzaEntity, CategoryEntity],
      synchronize: false
    }),
    PizzaModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

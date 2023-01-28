import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PizzaModule } from './pizza/pizza.module'
import { PizzaEntity } from './pizza/entities/pizza.entity'
import { CategoryModule } from './category/category.module'
import { CategoryEntity } from './category/entities/category.entity'
import { ProductModule } from './product/product.module'
import { PizzaTypeModule } from './pizza-type/pizza-type.module'
import { PizzaSizeModule } from './pizza-size/pizza-size.module'
import { PizzaSizeEntity } from './pizza-size/entities/pizza-size.entity'
import { PizzaTypeEntity } from './pizza-type/entities/pizza-type.entity'
import { ProductEntity } from './product/entities/product.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-icy-sun-981326.eu-central-1.aws.neon.tech',
      port: 5432,
      username: 'Hazard-87',
      password: 'bE4KCHFePSr3',
      database: 'neondb',
      entities: [PizzaEntity, CategoryEntity, PizzaSizeEntity, PizzaTypeEntity, ProductEntity],
      ssl: true,
      synchronize: true
    }),
    PizzaModule,
    CategoryModule,
    ProductModule,
    PizzaTypeModule,
    PizzaSizeModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

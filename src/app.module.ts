import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PizzaModule } from './pizza/pizza.module'
import { PizzaEntity } from './pizza/entities/pizza.entity'
import { CategoryModule } from './category/category.module'
import { CategoryEntity } from './category/entities/category.entity'
import { ProductModule } from './product/product.module'
import { PizzaSizeModule } from './pizza-size/pizza-size.module'
import { PizzaSizeEntity } from './pizza-size/entities/pizza-size.entity'
import { ProductEntity } from './product/entities/product.entity'
import { ImageModule } from './image/image.module'
import { ImageEntity } from './image/entities/image.entity'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-icy-sun-981326.eu-central-1.aws.neon.tech',
      port: 5432,
      username: 'Hazard-87',
      password: 'bE4KCHFePSr3',
      database: 'neondb',
      entities: [PizzaEntity, CategoryEntity, PizzaSizeEntity, ProductEntity, ImageEntity],
      ssl: true,
      synchronize: true
    }),
    PizzaModule,
    CategoryModule,
    ProductModule,
    PizzaSizeModule,
    ImageModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

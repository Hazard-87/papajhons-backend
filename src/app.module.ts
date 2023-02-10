import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PizzaModule } from './pizza/pizza.module'
import { PizzaEntity } from './pizza/entities/pizza.entity'
import { CategoryModule } from './category/category.module'
import { CategoryEntity } from './category/entities/category.entity'
import { PizzaSizeModule } from './pizza-size/pizza-size.module'
import { PizzaSizeEntity } from './pizza-size/entities/pizza-size.entity'
import { ProductModule } from './product/product.module'
import { ProductEntity } from './product/entities/product.entity'
import { ImageModule } from './image/image.module'
import { ImageEntity } from './image/entities/image.entity'
import { ServeStaticModule } from '@nestjs/serve-static'
import { PizzaTypeModule } from './pizza-type/pizza-type.module'
import { PizzaTypeEntity } from './pizza-type/entities/pizza-type.entity'
import { SnacksModule } from './snacks/snacks.module'
import { SnackEntity } from './snacks/entities/snack.entity'
import { SnackImagesModule } from './snack-images/snack-images.module'
import { SnackImageEntity } from './snack-images/entities/snack-image.entity'
import { SnackSizesModule } from './snack-sizes/snack-sizes.module'
import { SnackSizeEntity } from './snack-sizes/entities/snack-size.entity'
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
      entities: [
        PizzaEntity,
        CategoryEntity,
        PizzaSizeEntity,
        ProductEntity,
        ImageEntity,
        PizzaTypeEntity,
        SnackEntity,
        SnackSizeEntity,
        SnackImageEntity
      ],
      ssl: true,
      synchronize: true
    }),
    PizzaModule,
    CategoryModule,
    ProductModule,
    PizzaSizeModule,
    ImageModule,
    PizzaTypeModule,
    SnacksModule,
    SnackSizesModule,
    SnackImagesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

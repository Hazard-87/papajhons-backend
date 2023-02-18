import { join } from 'path'
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
import { BeveragesModule } from './beverages/beverages.module'
import { BeverageEntity } from './beverages/entities/beverage.entity'
import { BeverageSizesModule } from './beverage-sizes/beverage-sizes.module'
import { BeverageSizeEntity } from './beverage-sizes/entities/beverage-size.entity'
import { BeverageImagesModule } from './beverage-images/beverage-images.module'
import { BeverageImageEntity } from './beverage-images/entities/beverage-image.entity'
import { SaucesModule } from './sauces/sauces.module'
import { SauceEntity } from './sauces/entities/sauce.entity'
import { SauceImagesModule } from './sauce-images/sauce-images.module'
import { SauceImageEntity } from './sauce-images/entities/sauce-image.entity'
import { SauceSizesModule } from './sauce-sizes/sauce-sizes.module'
import { SauceSizeEntity } from './sauce-sizes/entities/sauce-size.entity'
import { DessertsModule } from './desserts/desserts.module'
import { DessertEntity } from './desserts/entities/dessert.entity'
import { DessertSizesModule } from './dessert-sizes/dessert-sizes.module'
import { DessertSizeEntity } from './dessert-sizes/entities/dessert-size.entity'
import { DessertImagesModule } from './dessert-images/dessert-images.module'
import { DessertImageEntity } from './dessert-images/entities/dessert-image.entity'
import { HottersModule } from './hotters/hotters.module'
import { HotterEntity } from './hotters/entities/hotter.entity'
import { HotterImagesModule } from './hotter-images/hotter-images.module'
import { HotterImageEntity } from './hotter-images/entities/hotter-image.entity'
import { CombosModule } from './combos/combos.module'
import { ComboEntity } from './combos/entities/combo.entity'
import { ComboImagesModule } from './combo-images/combo-images.module'
import { ComboImageEntity } from './combo-images/entities/combo-image.entity'
import { JoysModule } from './joys/joys.module'
import { JoyEntity } from './joys/entities/joy.entity'
import { JoyImagesModule } from './joy-images/joy-images.module'
import { JoyImageEntity } from './joy-images/entities/joy-image.entity'
import { CartsModule } from './carts/carts.module'

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
        SnackImageEntity,
        BeverageEntity,
        BeverageSizeEntity,
        BeverageImageEntity,
        SauceEntity,
        SauceSizeEntity,
        SauceImageEntity,
        DessertEntity,
        DessertSizeEntity,
        DessertImageEntity,
        HotterEntity,
        HotterImageEntity,
        ComboEntity,
        ComboImageEntity,
        JoyEntity,
        JoyImageEntity
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
    SnackImagesModule,
    BeveragesModule,
    BeverageSizesModule,
    BeverageImagesModule,
    SaucesModule,
    SauceImagesModule,
    SauceSizesModule,
    DessertsModule,
    DessertSizesModule,
    DessertImagesModule,
    HottersModule,
    HotterImagesModule,
    CombosModule,
    ComboImagesModule,
    JoysModule,
    JoyImagesModule,
    CartsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

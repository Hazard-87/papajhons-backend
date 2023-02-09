import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api')

  app.enableCors({
    credentials: true,
    origin: '*'
  })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const config = new DocumentBuilder().build()
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true
  })
  SwaggerModule.setup('/swagger', app, document, {
    customCssUrl: './docs/swagger-ui.css',
    customJs: './docs/swagger-ui-bundle.js',
    customfavIcon: './docs/favicon-16x16.png'
  })

  await app.listen(8080)
}

bootstrap()

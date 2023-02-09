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
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document, {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css'
  })

  await app.listen(8080)
}

bootstrap()

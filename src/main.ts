import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.setGlobalPrefix('/api')

  app.enableCors({
    credentials: true,
    origin: '*'
  })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const config = new DocumentBuilder().build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document, {
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.0.0/swagger-ui.min.css',
    customJs: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.0.0/swagger-ui-bundle.js',
    customJsStr:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.0.0/swagger-ui-standalone-preset.js'
  })

  await app.listen(8080)
}

bootstrap()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api')
  app.enableCors({
    origin: ['*'],
  })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  await app.listen(8080)
}

bootstrap()

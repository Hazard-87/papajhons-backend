import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api')
  app.enableCors({
    origin: ['http://localhost:3000', 'https://www.google.com'],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  await app.listen(8080)
}

bootstrap()

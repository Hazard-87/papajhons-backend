import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { resolve } from 'path'
import { writeFileSync } from 'fs'

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
  SwaggerModule.setup('/swagger', app, document)

  await app.listen(8080)

  if (process.env.NODE_ENV === 'development') {
    const pathToSwaggerStaticFolder = resolve(process.cwd(), 'swagger-static')

    // write swagger json file
    const pathToSwaggerJson = resolve(pathToSwaggerStaticFolder, 'swagger.json')
    const swaggerJson = JSON.stringify(document, null, 2)
    writeFileSync(pathToSwaggerJson, swaggerJson)
    console.log(`Swagger JSON file written to: '/swagger-static/swagger.json'`)
  }
}

bootstrap()

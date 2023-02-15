import { Test, TestingModule } from '@nestjs/testing'
import { DessertImagesController } from './dessert-images.controller'
import { DessertImagesService } from './dessert-images.service'

describe('DessertImagesController', () => {
  let controller: DessertImagesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DessertImagesController],
      providers: [DessertImagesService]
    }).compile()

    controller = module.get<DessertImagesController>(DessertImagesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

import { Test, TestingModule } from '@nestjs/testing'
import { ComboImagesController } from './combo-images.controller'
import { ComboImagesService } from './combo-images.service'

describe('ComboImagesController', () => {
  let controller: ComboImagesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComboImagesController],
      providers: [ComboImagesService]
    }).compile()

    controller = module.get<ComboImagesController>(ComboImagesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

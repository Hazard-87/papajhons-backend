import { Test, TestingModule } from '@nestjs/testing'
import { HotterImagesController } from './hotter-images.controller'
import { HotterImagesService } from './hotter-images.service'

describe('HotterImagesController', () => {
  let controller: HotterImagesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotterImagesController],
      providers: [HotterImagesService]
    }).compile()

    controller = module.get<HotterImagesController>(HotterImagesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

import { Test, TestingModule } from '@nestjs/testing'
import { SauceImagesController } from './sauce-images.controller'
import { SauceImagesService } from './sauce-images.service'

describe('SauceImagesController', () => {
  let controller: SauceImagesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SauceImagesController],
      providers: [SauceImagesService]
    }).compile()

    controller = module.get<SauceImagesController>(SauceImagesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

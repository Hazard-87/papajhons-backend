import { Test, TestingModule } from '@nestjs/testing'
import { JoyImagesController } from './joy-images.controller'
import { JoyImagesService } from './joy-images.service'

describe('JoyImagesController', () => {
  let controller: JoyImagesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoyImagesController],
      providers: [JoyImagesService]
    }).compile()

    controller = module.get<JoyImagesController>(JoyImagesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

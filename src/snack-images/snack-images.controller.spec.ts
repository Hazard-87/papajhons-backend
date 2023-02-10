import { Test, TestingModule } from '@nestjs/testing'
import { SnackImagesController } from './snack-images.controller'
import { SnackImagesService } from './snack-images.service'

describe('SnackImagesController', () => {
  let controller: SnackImagesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnackImagesController],
      providers: [SnackImagesService]
    }).compile()

    controller = module.get<SnackImagesController>(SnackImagesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

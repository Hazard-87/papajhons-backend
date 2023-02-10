import { Test, TestingModule } from '@nestjs/testing'
import { SnackImagesService } from './snack-images.service'

describe('SnackImagesService', () => {
  let service: SnackImagesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnackImagesService]
    }).compile()

    service = module.get<SnackImagesService>(SnackImagesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

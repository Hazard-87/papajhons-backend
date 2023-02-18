import { Test, TestingModule } from '@nestjs/testing'
import { ComboImagesService } from './combo-images.service'

describe('ComboImagesService', () => {
  let service: ComboImagesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComboImagesService]
    }).compile()

    service = module.get<ComboImagesService>(ComboImagesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

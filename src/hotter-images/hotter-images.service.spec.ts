import { Test, TestingModule } from '@nestjs/testing'
import { HotterImagesService } from './hotter-images.service'

describe('HotterImagesService', () => {
  let service: HotterImagesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotterImagesService]
    }).compile()

    service = module.get<HotterImagesService>(HotterImagesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

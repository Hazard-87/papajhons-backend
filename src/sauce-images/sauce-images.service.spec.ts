import { Test, TestingModule } from '@nestjs/testing'
import { SauceImagesService } from './sauce-images.service'

describe('SauceImagesService', () => {
  let service: SauceImagesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SauceImagesService]
    }).compile()

    service = module.get<SauceImagesService>(SauceImagesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

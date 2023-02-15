import { Test, TestingModule } from '@nestjs/testing'
import { DessertImagesService } from './dessert-images.service'

describe('DessertImagesService', () => {
  let service: DessertImagesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DessertImagesService]
    }).compile()

    service = module.get<DessertImagesService>(DessertImagesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

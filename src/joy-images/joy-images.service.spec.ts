import { Test, TestingModule } from '@nestjs/testing'
import { JoyImagesService } from './joy-images.service'

describe('JoyImagesService', () => {
  let service: JoyImagesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoyImagesService]
    }).compile()

    service = module.get<JoyImagesService>(JoyImagesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

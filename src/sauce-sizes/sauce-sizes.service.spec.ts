import { Test, TestingModule } from '@nestjs/testing'
import { SauceSizesService } from './sauce-sizes.service'

describe('SauceSizesService', () => {
  let service: SauceSizesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SauceSizesService]
    }).compile()

    service = module.get<SauceSizesService>(SauceSizesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

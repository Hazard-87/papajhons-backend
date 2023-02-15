import { Test, TestingModule } from '@nestjs/testing'
import { SaucesService } from './sauces.service'

describe('SaucesService', () => {
  let service: SaucesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaucesService]
    }).compile()

    service = module.get<SaucesService>(SaucesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

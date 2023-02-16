import { Test, TestingModule } from '@nestjs/testing'
import { HottersService } from './hotters.service'

describe('HottersService', () => {
  let service: HottersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HottersService]
    }).compile()

    service = module.get<HottersService>(HottersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

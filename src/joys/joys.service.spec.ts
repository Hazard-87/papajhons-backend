import { Test, TestingModule } from '@nestjs/testing'
import { JoysService } from './joys.service'

describe('JoysService', () => {
  let service: JoysService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoysService]
    }).compile()

    service = module.get<JoysService>(JoysService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

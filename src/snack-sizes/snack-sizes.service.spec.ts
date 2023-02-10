import { Test, TestingModule } from '@nestjs/testing'
import { SnackSizesService } from './snack-sizes.service'

describe('SnackSizesService', () => {
  let service: SnackSizesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnackSizesService]
    }).compile()

    service = module.get<SnackSizesService>(SnackSizesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})

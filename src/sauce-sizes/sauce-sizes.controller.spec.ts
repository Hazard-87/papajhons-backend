import { Test, TestingModule } from '@nestjs/testing'
import { SauceSizesController } from './sauce-sizes.controller'
import { SauceSizesService } from './sauce-sizes.service'

describe('SauceSizesController', () => {
  let controller: SauceSizesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SauceSizesController],
      providers: [SauceSizesService]
    }).compile()

    controller = module.get<SauceSizesController>(SauceSizesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

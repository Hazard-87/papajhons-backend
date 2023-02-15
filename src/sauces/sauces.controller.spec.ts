import { Test, TestingModule } from '@nestjs/testing'
import { SaucesController } from './sauces.controller'
import { SaucesService } from './sauces.service'

describe('SaucesController', () => {
  let controller: SaucesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaucesController],
      providers: [SaucesService]
    }).compile()

    controller = module.get<SaucesController>(SaucesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

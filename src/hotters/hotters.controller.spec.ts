import { Test, TestingModule } from '@nestjs/testing'
import { HottersController } from './hotters.controller'
import { HottersService } from './hotters.service'

describe('HottersController', () => {
  let controller: HottersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HottersController],
      providers: [HottersService]
    }).compile()

    controller = module.get<HottersController>(HottersController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

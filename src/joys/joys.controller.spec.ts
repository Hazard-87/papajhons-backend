import { Test, TestingModule } from '@nestjs/testing'
import { JoysController } from './joys.controller'
import { JoysService } from './joys.service'

describe('JoysController', () => {
  let controller: JoysController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoysController],
      providers: [JoysService]
    }).compile()

    controller = module.get<JoysController>(JoysController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

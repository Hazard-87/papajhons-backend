import { Test, TestingModule } from '@nestjs/testing'
import { SnackSizesController } from './snack-sizes.controller'
import { SnackSizesService } from './snack-sizes.service'

describe('SnackSizesController', () => {
  let controller: SnackSizesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnackSizesController],
      providers: [SnackSizesService]
    }).compile()

    controller = module.get<SnackSizesController>(SnackSizesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})

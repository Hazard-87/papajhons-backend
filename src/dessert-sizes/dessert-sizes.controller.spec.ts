import { Test, TestingModule } from '@nestjs/testing';
import { DessertSizesController } from './dessert-sizes.controller';
import { DessertSizesService } from './dessert-sizes.service';

describe('DessertSizesController', () => {
  let controller: DessertSizesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DessertSizesController],
      providers: [DessertSizesService],
    }).compile();

    controller = module.get<DessertSizesController>(DessertSizesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

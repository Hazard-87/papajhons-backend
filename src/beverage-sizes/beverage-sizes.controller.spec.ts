import { Test, TestingModule } from '@nestjs/testing';
import { BeverageSizesController } from './beverage-sizes.controller';
import { BeverageSizesService } from './beverage-sizes.service';

describe('BeverageSizesController', () => {
  let controller: BeverageSizesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeverageSizesController],
      providers: [BeverageSizesService],
    }).compile();

    controller = module.get<BeverageSizesController>(BeverageSizesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

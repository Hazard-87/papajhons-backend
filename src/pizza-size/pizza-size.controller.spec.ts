import { Test, TestingModule } from '@nestjs/testing';
import { PizzaSizeController } from './pizza-size.controller';
import { PizzaSizeService } from './pizza-size.service';

describe('PizzaSizeController', () => {
  let controller: PizzaSizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzaSizeController],
      providers: [PizzaSizeService],
    }).compile();

    controller = module.get<PizzaSizeController>(PizzaSizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

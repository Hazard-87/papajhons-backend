import { Test, TestingModule } from '@nestjs/testing';
import { PizzaTypeController } from './pizza-type.controller';
import { PizzaTypeService } from './pizza-type.service';

describe('PizzaTypeController', () => {
  let controller: PizzaTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzaTypeController],
      providers: [PizzaTypeService],
    }).compile();

    controller = module.get<PizzaTypeController>(PizzaTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PizzaTypeService } from './pizza-type.service';

describe('PizzaTypeService', () => {
  let service: PizzaTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaTypeService],
    }).compile();

    service = module.get<PizzaTypeService>(PizzaTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

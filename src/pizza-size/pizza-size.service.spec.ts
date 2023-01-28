import { Test, TestingModule } from '@nestjs/testing';
import { PizzaSizeService } from './pizza-size.service';

describe('PizzaSizeService', () => {
  let service: PizzaSizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizzaSizeService],
    }).compile();

    service = module.get<PizzaSizeService>(PizzaSizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

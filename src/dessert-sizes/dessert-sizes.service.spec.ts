import { Test, TestingModule } from '@nestjs/testing';
import { DessertSizesService } from './dessert-sizes.service';

describe('DessertSizesService', () => {
  let service: DessertSizesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DessertSizesService],
    }).compile();

    service = module.get<DessertSizesService>(DessertSizesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BeverageSizesService } from './beverage-sizes.service';

describe('BeverageSizesService', () => {
  let service: BeverageSizesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeverageSizesService],
    }).compile();

    service = module.get<BeverageSizesService>(BeverageSizesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

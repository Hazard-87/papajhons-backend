import { Test, TestingModule } from '@nestjs/testing';
import { BeverageImagesService } from './beverage-images.service';

describe('BeverageImagesService', () => {
  let service: BeverageImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeverageImagesService],
    }).compile();

    service = module.get<BeverageImagesService>(BeverageImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

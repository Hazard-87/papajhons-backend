import { Test, TestingModule } from '@nestjs/testing';
import { BeverageImagesController } from './beverage-images.controller';
import { BeverageImagesService } from './beverage-images.service';

describe('BeverageImagesController', () => {
  let controller: BeverageImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeverageImagesController],
      providers: [BeverageImagesService],
    }).compile();

    controller = module.get<BeverageImagesController>(BeverageImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

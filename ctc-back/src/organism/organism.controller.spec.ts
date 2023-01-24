import { Test, TestingModule } from '@nestjs/testing';
import { OrganismController } from './organism.controller';
import { OrganismService } from './organism.service';

describe('OrganismController', () => {
  let controller: OrganismController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganismController],
      providers: [OrganismService],
    }).compile();

    controller = module.get<OrganismController>(OrganismController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OrganismService } from './organism.service';

describe('OrganismService', () => {
  let service: OrganismService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganismService],
    }).compile();

    service = module.get<OrganismService>(OrganismService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

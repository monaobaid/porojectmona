import { TestBed } from '@angular/core/testing';

import { ListFoodService } from './list-food.service';

describe('ListFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFoodService = TestBed.get(ListFoodService);
    expect(service).toBeTruthy();
  });
});

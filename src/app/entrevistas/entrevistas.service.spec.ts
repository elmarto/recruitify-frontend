import { TestBed, inject } from '@angular/core/testing';

import { EntrevistasService } from './entrevistas.service';

describe('EntrevistasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntrevistasService]
    });
  });

  it('should be created', inject([EntrevistasService], (service: EntrevistasService) => {
    expect(service).toBeTruthy();
  }));
});

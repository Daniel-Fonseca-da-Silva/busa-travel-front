import { TestBed } from '@angular/core/testing';

import { FuncionarioFormService } from './funcionario-form.service';

describe('FuncionarioFormService', () => {
  let service: FuncionarioFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionarioFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

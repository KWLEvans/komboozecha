/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KegService } from './keg.service';

describe('KegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KegService]
    });
  });

  it('should ...', inject([KegService], (service: KegService) => {
    expect(service).toBeTruthy();
  }));
});

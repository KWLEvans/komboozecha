/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BevvoListComponent } from './bevvo-list.component';

describe('BevvoListComponent', () => {
  let component: BevvoListComponent;
  let fixture: ComponentFixture<BevvoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BevvoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevvoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

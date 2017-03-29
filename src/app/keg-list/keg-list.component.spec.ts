/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KegListComponent } from './keg-list.component';

describe('KegListComponent', () => {
  let component: KegListComponent;
  let fixture: ComponentFixture<KegListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

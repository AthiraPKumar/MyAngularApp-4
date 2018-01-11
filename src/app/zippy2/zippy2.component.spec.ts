import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Zippy2Component } from './zippy2.component';

describe('Zippy2Component', () => {
  let component: Zippy2Component;
  let fixture: ComponentFixture<Zippy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Zippy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Zippy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

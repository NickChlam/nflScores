import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesUpComponent } from './times-up.component';

describe('TimesUpComponent', () => {
  let component: TimesUpComponent;
  let fixture: ComponentFixture<TimesUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCare } from './auto-care';

describe('AutoCare', () => {
  let component: AutoCare;
  let fixture: ComponentFixture<AutoCare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoCare],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoCare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

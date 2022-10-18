import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBalanceComponent } from './calculate-balance.component';

describe('CalculateBalanceComponent', () => {
  let component: CalculateBalanceComponent;
  let fixture: ComponentFixture<CalculateBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

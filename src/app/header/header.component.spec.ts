import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: CurrencyHeaderComponent;
  let fixture: ComponentFixture<CurrencyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyHeaderComponent]
    });
    fixture = TestBed.createComponent(CurrencyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

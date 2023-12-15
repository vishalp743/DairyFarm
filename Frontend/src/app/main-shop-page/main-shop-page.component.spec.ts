import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShopPageComponent } from './main-shop-page.component';

describe('MainShopPageComponent', () => {
  let component: MainShopPageComponent;
  let fixture: ComponentFixture<MainShopPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainShopPageComponent]
    });
    fixture = TestBed.createComponent(MainShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

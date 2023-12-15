import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleShopePageComponent } from './single-shope-page.component';

describe('SingleShopePageComponent', () => {
  let component: SingleShopePageComponent;
  let fixture: ComponentFixture<SingleShopePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleShopePageComponent]
    });
    fixture = TestBed.createComponent(SingleShopePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

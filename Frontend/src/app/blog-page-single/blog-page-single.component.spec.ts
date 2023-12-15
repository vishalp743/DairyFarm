import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageSingleComponent } from './blog-page-single.component';

describe('BlogPageSingleComponent', () => {
  let component: BlogPageSingleComponent;
  let fixture: ComponentFixture<BlogPageSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPageSingleComponent]
    });
    fixture = TestBed.createComponent(BlogPageSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

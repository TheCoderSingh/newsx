import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAreaHomeComponent } from './news-area-home.component';

describe('NewsAreaHomeComponent', () => {
  let component: NewsAreaHomeComponent;
  let fixture: ComponentFixture<NewsAreaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAreaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAreaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

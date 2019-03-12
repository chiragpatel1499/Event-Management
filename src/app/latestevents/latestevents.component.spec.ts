import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesteventsComponent } from './latestevents.component';

describe('LatesteventsComponent', () => {
  let component: LatesteventsComponent;
  let fixture: ComponentFixture<LatesteventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatesteventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatesteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

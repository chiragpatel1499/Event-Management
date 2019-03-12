import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoureventsComponent } from './yourevents.component';

describe('YoureventsComponent', () => {
  let component: YoureventsComponent;
  let fixture: ComponentFixture<YoureventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoureventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoureventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

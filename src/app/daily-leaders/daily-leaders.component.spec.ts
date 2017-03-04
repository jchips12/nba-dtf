import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyLeadersComponent } from './daily-leaders.component';

describe('DailyLeadersComponent', () => {
  let component: DailyLeadersComponent;
  let fixture: ComponentFixture<DailyLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

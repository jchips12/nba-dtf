import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPickComponent } from './my-pick.component';

describe('MyPickComponent', () => {
  let component: MyPickComponent;
  let fixture: ComponentFixture<MyPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

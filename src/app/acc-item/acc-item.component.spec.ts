import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccItemComponent } from './acc-item.component';

describe('AccItemComponent', () => {
  let component: AccItemComponent;
  let fixture: ComponentFixture<AccItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

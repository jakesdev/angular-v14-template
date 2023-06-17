import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingTask1Component } from './task-1.component';

describe('WritingTask1Component', () => {
  let component: WritingTask1Component;
  let fixture: ComponentFixture<WritingTask1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritingTask1Component]
    });
    fixture = TestBed.createComponent(WritingTask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

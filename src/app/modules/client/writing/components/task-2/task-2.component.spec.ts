import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingTask2Component } from './task-2.component';

describe('WritingTask2Component', () => {
  let component: WritingTask2Component;
  let fixture: ComponentFixture<WritingTask2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritingTask2Component]
    });
    fixture = TestBed.createComponent(WritingTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

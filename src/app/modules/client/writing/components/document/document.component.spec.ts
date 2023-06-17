import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingDocumentComponent } from './document.component';

describe('WritingDocumentComponent', () => {
  let component: WritingDocumentComponent;
  let fixture: ComponentFixture<WritingDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritingDocumentComponent]
    });
    fixture = TestBed.createComponent(WritingDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WritingExaminationComponent } from './examination.component';


describe('WritingExaminationComponent', () => {
  let component: WritingExaminationComponent;
  let fixture: ComponentFixture<WritingExaminationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritingExaminationComponent]
    });
    fixture = TestBed.createComponent(WritingExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

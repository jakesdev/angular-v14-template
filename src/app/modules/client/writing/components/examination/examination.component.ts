import { Component } from '@angular/core';

@Component({
  selector: 'app-writing-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class WritingExaminationComponent {

  isStartExam: boolean = false;
  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline'],
        [{ 'size': [] }],
      ],

    }
  }

  content: string = '';

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { WritingExaminationComponent } from './examination.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

const writingExaminationRoutes: Route[] = [
  {
    path: '',
    component: WritingExaminationComponent
  }
]


@NgModule({
  declarations: [WritingExaminationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(writingExaminationRoutes),
    QuillModule,
    FormsModule
  ]
})
export class WritingExaminationModule { }

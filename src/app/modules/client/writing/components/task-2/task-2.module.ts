import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingTask2Component } from './task-2.component';
import { Route, RouterModule } from '@angular/router';

const WritingTask2Routes: Route[] = [
  {
    path: '',
    component: WritingTask2Component
  }
]


@NgModule({
  declarations: [WritingTask2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(WritingTask2Routes)
  ]
})
export class WritingTask2Module { }

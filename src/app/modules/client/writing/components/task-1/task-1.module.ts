import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingTask1Component } from './task-1.component';
import { Route, RouterModule } from '@angular/router';

const WritingTask1Routes: Route[] = [
  {
    path: '',
    component: WritingTask1Component
  }
]


@NgModule({
  declarations: [WritingTask1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(WritingTask1Routes)
  ]
})
export class WritingTask1Module { }

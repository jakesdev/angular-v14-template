import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { WritingDocumentComponent } from './document.component';

const documentRoutes: Route[] = [
  {
    path: '',
    component: WritingDocumentComponent
  }
]


@NgModule({
  declarations: [WritingDocumentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(documentRoutes)
  ]
})
export class WritingDocumentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WritingComponent } from './writing.component';
import { Route, RouterModule } from '@angular/router';

const writingRoutes: Route[] = [
  {
    path: '',
    component: WritingComponent,
    children:[
      {
        path:'',
        redirectTo:'document',
        pathMatch:'full',
      },
      {
        path: 'document',
        loadChildren: () => import('./components/document/document.module').then(m => m.WritingDocumentModule)
      },
      {
        path: 'exams',
        loadChildren: () => import('./components/examination/examination.module').then(m => m.WritingExaminationModule)
      },
      {
        path:'task-1',
        loadChildren: () => import('./components/task-1/task-1.module').then(m => m.WritingTask1Module)
      },
      {
        path: 'task-2',
        loadChildren: () => import('./components/task-2/task-2.module').then(m => m.WritingTask2Module)
      }
    ]
  }
]


@NgModule({
  declarations: [WritingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(writingRoutes)
  ]
})
export class WritingModule { }

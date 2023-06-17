import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ReadingComponent } from './reading.component';

const dashboardRoutes: Route[] = [
  {
    path:'',
    component: ReadingComponent
  }
]

@NgModule({
  declarations: [ReadingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class ReadingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeningComponent } from './listening.component';
import { Route, RouterModule } from '@angular/router';

const listeningRoutes: Route[] = [
  {
    path: '',
    component: ListeningComponent
  }
]


@NgModule({
  declarations: [ListeningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(listeningRoutes)
  ]
})
export class ListeningModule { }

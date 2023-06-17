import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakingComponent } from './speaking.component';
import { Route, RouterModule } from '@angular/router';

const speakingRoutes: Route[] = [
  {
    path: '',
    component: SpeakingComponent
  }
]


@NgModule({
  declarations: [SpeakingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(speakingRoutes)
  ]
})
export class SpeakingModule { }

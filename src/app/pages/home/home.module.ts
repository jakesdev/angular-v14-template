import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlocksModule } from 'src/app/ui/blocks/blocks.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    BlocksModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      }
    ]),
  ],
})
export class HomeModule { }

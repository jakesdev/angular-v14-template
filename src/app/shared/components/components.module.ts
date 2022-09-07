import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MemberCardComponent } from './member-card/member-card.component';


const COMPONENTS = [
  MemberCardComponent,
];

const MODULES = [
  CommonModule,
  RouterModule,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [ ...MODULES ],
})
export class LayoutsModule { }

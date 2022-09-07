import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';






const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
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
export class BlocksModule { }

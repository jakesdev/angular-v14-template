import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsRegistry } from '@app/core/services';
import { AppLayoutComponent } from './app-layout.component';
import { svgIconDashboard } from '../../../../assets/icons/svg-icons.constants';
import { SvgIconComponent } from '../../components/svg-icon/svg-icon.component';
import { RouterModule } from '@angular/router';



const COMPONENTS = [
  AppLayoutComponent
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SvgIconComponent,
    RouterModule,
  ],
  exports: [...COMPONENTS]
})
export class AppLayoutModule {

}

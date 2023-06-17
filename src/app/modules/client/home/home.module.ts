import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Route, RouterModule } from '@angular/router';
import { SvgIconComponent } from '../../../theme/components/svg-icon/svg-icon.component';
import { SvgIconsRegistry } from '@app/core/services';
import { svgIconDashboard } from '../../../../assets/icons/svg-icons.constants';

const SVG_ICONS = [
  svgIconDashboard
];

export const homeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SvgIconComponent
  ]
})
export class HomeModule {
  constructor(private svgIconRegistry: SvgIconsRegistry) {
    svgIconRegistry.registerIcons(SVG_ICONS);
  }
}

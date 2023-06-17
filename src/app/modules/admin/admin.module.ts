import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Route, RouterModule } from '@angular/router';
import { SvgIconComponent } from '../../theme/components/svg-icon/svg-icon.component';
import { SvgIconsRegistry } from '@app/core/services';
import { svgIconDashboard } from '../../../assets/icons/svg-icons.constants';
import { AdminLayoutModule } from '../../theme/layouts/admin-layout/admin-layout.module';

const SVG_ICONS = [
  svgIconDashboard
];

export const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminComponent,
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    SvgIconComponent,
    AdminLayoutModule
  ]
})
export class AdminModule {
  constructor(private svgIconRegistry: SvgIconsRegistry) {
    svgIconRegistry.registerIcons(SVG_ICONS);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsRegistry } from '@app/core/services';
import { AdminLayoutComponent } from './admin-layout.component';
import { svgIconDashboard } from '../../../../assets/icons/svg-icons.constants';
import { SvgIconComponent } from '../../components/svg-icon/svg-icon.component';
import { RouterModule } from '@angular/router';
import { AppLayoutModule } from '../app-layout/app-layout.module';

const SVG_ICONS = [
  svgIconDashboard
];

const COMPONENTS = [
  AdminLayoutComponent
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
export class AdminLayoutModule {
  constructor(private svgIconRegistry: SvgIconsRegistry) {
    svgIconRegistry.registerIcons(SVG_ICONS);
  }
}

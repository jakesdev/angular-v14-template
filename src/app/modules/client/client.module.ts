import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { Route, RouterModule } from '@angular/router';
import { SvgIconsRegistry } from '../../core/services';
import { svgIconDashboard } from '../../../assets/icons/svg-icons.constants';
import { SvgIconComponent } from '../../theme/components/svg-icon/svg-icon.component';
import { AdminLayoutModule } from '../../theme/layouts/admin-layout/admin-layout.module';
import { AppLayoutModule } from '../../theme/layouts/app-layout/app-layout.module';

const SVG_ICONS = [
  svgIconDashboard
];

export const clientRoutes: Route[] = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'writing', loadChildren: () => import('./writing/writing.module').then(m => m.WritingModule) },
      { path: 'reading', loadChildren: () => import('./reading/reading.module').then(m => m.ReadingModule) },
      { path: 'listening', loadChildren: () => import('./listening/listening.module').then(m => m.ListeningModule) },
      { path: 'speaking', loadChildren: () => import('./speaking/speaking.module').then(m => m.SpeakingModule) },
      { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
    ]
  }
];

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
    SvgIconComponent,
    //
    AppLayoutModule,
  ]
})
export class ClientModule {
  constructor(private svgIconRegistry: SvgIconsRegistry) {
    svgIconRegistry.registerIcons(SVG_ICONS);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { Route, RouterModule } from '@angular/router';
import { SettingAccountComponent } from './components/account/account.component';
import { SettingNotificationComponent } from './components/notification/notification.component';
import { FormsModule } from '@angular/forms';
import { SettingChangePasswordComponent } from './components/change-password/change-password.component';

const settingRoutes: Route[] = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
      },
      {
        path: 'account',
        component: SettingAccountComponent
      },
      {
        path: 'password',
        component: SettingChangePasswordComponent
      },
      {
        path: 'notification',
        component: SettingNotificationComponent
      }
    ]
  },

];


const COMPONENTS = [
  SettingComponent,
  SettingAccountComponent,
  SettingNotificationComponent,
  SettingChangePasswordComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoutes),
    FormsModule
  ]
})
export class SettingModule {}

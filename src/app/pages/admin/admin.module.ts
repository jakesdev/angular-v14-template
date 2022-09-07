import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlocksModule } from 'src/app/ui/blocks/blocks.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [ AdminComponent ],
  imports: [
    BlocksModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            // canActivate: [ AdminGuard ],
          },
          {
            path: 'dashboard',
            canActivate: [],
            loadChildren: () =>
              import('./components/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
              ),
          },
        ],
      },
    ]),
  ],
  providers: [],
})
export class AdminModule { }

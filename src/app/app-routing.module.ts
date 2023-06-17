import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMaintenanceComponent, PageNotFoundComponent } from './core/pages';
import { PageErrorComponent } from './core/pages/page-error/page-error.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'maintain',
    component: PageMaintenanceComponent,
  },
  {
    path: 'error',
    component: PageErrorComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'top',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [ RouterModule ],
  declarations: [],
})
export class AppRoutingModule { }

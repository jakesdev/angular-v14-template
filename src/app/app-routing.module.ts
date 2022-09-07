import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './core/enums';
import { AuthGuard } from './core/guards';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Pages.HOME,
  },
  {
    path: Pages.HOME,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [],
  },
  {
    path: Pages.AUTH,
    pathMatch: 'prefix',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [],
  },
  {
    path: Pages.ADMIN,
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [ AuthGuard ],
  },
  {
    path: '**',
    component: ErrorComponent,
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

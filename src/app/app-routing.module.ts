import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/pages';
import { Pages } from './shared/enums';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Pages.HOME,
  },
  // {
  //   path: Pages.HOME,
  //   loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  //   canActivate: [],
  // },
  // {
  //   path: Pages.AUTH,
  //   pathMatch: 'prefix',
  //   loadChildren: () =>
  //     import('./modules/auth/auth.module').then((m) => m.AuthModule),
  //   canActivate: [],
  // },
  // {
  //   path: Pages.ADMIN,
  //   loadChildren: () =>
  //     import('./modules/admin/admin.module').then((m) => m.AdminModule),
  //   canActivate: [ AuthGuard ],
  // },
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

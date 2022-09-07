import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/core/guards/is-logged-in.guard';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [ AuthComponent, LoginComponent, RegisterComponent ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [
          {
            path: '',
            pathMatch: 'prefix',
            redirectTo: 'login',
          },
          {
            path: 'login',
            component: LoginComponent,
            canActivate: [ IsLoggedInGuard ],
          },
          {
            path: 'register',
            component: RegisterComponent,
            canActivate: [ IsLoggedInGuard ],
          }
        ],
      },
    ]),
  ],
  providers: [],
})
export class AuthModule { }

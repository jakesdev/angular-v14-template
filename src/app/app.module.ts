import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JwtInterceptor } from './core/intercepters/jwt-interceptor';
import { AppLoadService } from './core/services/app-load.service';
import { AuthModule } from './pages/auth/auth.module';
import { BlocksModule } from './ui/blocks/blocks.module';



export function initializeApp(injector: Injector) {
  return (): Observable<any> | Promise<any> => {
    const appInitService = injector.get(AppLoadService);
    return appInitService.initApp();
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
    CoreModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    BlocksModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ Injector ],
      multi: true,
    },
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

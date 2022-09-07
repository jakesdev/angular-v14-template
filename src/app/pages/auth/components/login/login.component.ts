import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AuthService, NavigationService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  //TODO create login form

  public loginForm: FormGroup;

  public email: string = '';

  public password: string = '';
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private _formBuilder: FormBuilder
  ) {
    this.loginForm = this._formBuilder.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', Validators.required ]
    });
  }

  ngOnInit(): void {

  }

  onLogin() {
    console.log();
    //return
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(first())
      .subscribe(() => {
        this.navigationService.homePage();
      });
  }
}

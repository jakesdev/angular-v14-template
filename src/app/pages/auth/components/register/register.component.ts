import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, NavigationService } from 'src/app/core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private _formBuilder: FormBuilder) {

    this.registerForm = this._formBuilder.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', Validators.required ]
    });
  }

  ngOnInit(): void {
  }


  onRegister() {
    console.log('register');

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-setting-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class SettingChangePasswordComponent {
  hidePassword = false;
  hideConfirmPassword = false;
  newPassword = '';
  confirmPassword = '';

  onSubmit() {

  }
}

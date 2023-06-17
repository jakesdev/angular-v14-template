import { Component } from '@angular/core';
import { adminNavigateMenu } from './admin-navigate-menu';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  adminNavigateMenu = adminNavigateMenu;
}

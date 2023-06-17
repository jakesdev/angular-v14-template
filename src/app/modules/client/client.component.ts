import { Component } from '@angular/core';
import { clientNavigateMenu } from './client-navigate-menu';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  sideBar = false;

  clientNavigateMenu = clientNavigateMenu;

  toggleSideBar() {
    this.sideBar = !this.sideBar;
  }

  logOut() {

  }
}

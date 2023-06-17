import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigateMenuModel } from '../../../shared/models/navigate-menu.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLayoutComponent {

  @Input() navigateMenu: NavigateMenuModel[] = [];
  sideBar = false;

  toggleSideBar() {
    this.sideBar = !this.sideBar;
  }

  logOut() {

  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigateMenuModel } from '../../../shared/models/navigate-menu.model';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent {
  @Input() navigateMenu: NavigateMenuModel[] = [];
  @Input() showReminder = false;

  logOut() {

  }
}

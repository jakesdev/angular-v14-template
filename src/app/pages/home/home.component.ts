import { Component, OnInit } from '@angular/core';
import { AuthService, NavigationService } from 'src/app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
  ) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.navigationService.homePage();
  }
}

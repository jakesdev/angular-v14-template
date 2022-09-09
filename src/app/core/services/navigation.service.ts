import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from '../../shared/enums';

@Injectable()
export class NavigationService {
  constructor(private router: Router) { }

  loginPage(): void {
    this.router.navigate([ `/${Pages.LOGIN}` ]);
  }

  homePage(): void {
    this.router.navigate([ `/${Pages.HOME}` ]);
  }
}

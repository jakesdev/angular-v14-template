import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent {

  constructor(private _router: Router,) {}

  takeMeHome(): void {
    this._router.navigate(['/']).then();
  }
}

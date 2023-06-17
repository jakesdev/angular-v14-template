import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { svgIconMiscellaneousServices } from '../assets/icons/svg-icons.constants';
import { environment } from '@environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  isDevelopment: boolean = false;
  constructor() {
    this.isDevelopment = !environment.production;
  }
  svgIconMiscellaneousServices = svgIconMiscellaneousServices;
}

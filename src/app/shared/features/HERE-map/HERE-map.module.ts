import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HEREMapComponent } from './HERE-map.component';


const COMPONENTS = [
  HEREMapComponent
]


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class HEREMapModule {
}

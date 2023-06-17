import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import H from '@here/maps-api-for-javascript';
@Component({
  selector: 'app-HERE-map',
  templateUrl: './HERE-map.component.html',
  styleUrls: ['./HERE-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HEREMapComponent {
  // @ViewChild('map') mapContainer: ElementRef;

  // map: H.Map;

  // constructor() {}

  // ngOnInit() {
  //   this.map = this.initializeMap();
  // }

  // initializeMap() {
  //   const platform = new H.service.Platform({
  //     app_id: 'DemoAppId01082013GAL',
  //     app_code: 'AJKnXv84fjrb0KIHawS0Tg',
  //     useCIT: true,
  //     useHTTPS: true
  //   });

  //   const defaultLayers = platform.createDefaultLayers({
  //     tileSize: 256 * Math.min(2, devicePixelRatio),
  //     ppi: devicePixelRatio > 1 ? 320 : 72
  //   });

  //   const map = new H.Map(
  //     this.mapContainer.nativeElement,
  //     defaultLayers.normal.map,
  //     {
  //       center: { lat: 39.50, lng: -98.35 },
  //       pixelRatio: Math.min(2, devicePixelRatio),
  //       zoom: 3
  //     }
  //   );

  //   const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  //   const ui = H.ui.UI.createDefault(map, defaultLayers);

  //   window.addEventListener('resize', this.resizeHandler);

  //   return map;
  // }

  // ngOnDestroy() {
  //   window.removeEventListener('resize', this.resizeHandler);
  //   this.map.dispose();
  // }

  // private resizeHandler = () => {
  //   this.map.getViewPort().resize();
  // };
}

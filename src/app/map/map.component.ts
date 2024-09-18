import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
 
  markers: { lat: number; lng: number }[] = [
    { lat: -16.500000, lng: -68.150002 }, 
    { lat: -17.783333, lng: -63.183334 }, 
    { lat: -17.389500, lng: -66.156800 }, 
    { lat: -19.033320, lng: -65.262740 }, 
    { lat: -19.583611, lng: -65.753056 } 
  ];

  
  lat: number = -17.0;
  lng: number = -65.0;
  zoom: number = 6;

  constructor() {}
}
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lat;
  lng;

  constructor(
    private geo: Geolocation
  ) { }

  whereiam()
  {
    this.geo.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((res)=>{
      this.lat =res.coords.latitude;
      this.lng =res.coords.longitude;
    }).catch((e)=>{
      console.log(e);
    });
  }

}

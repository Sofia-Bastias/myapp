import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lat;
  lng;

  constructor(
    private geo: Geolocation,private localNotifications: LocalNotifications,private callNumber: CallNumber
  ) { }

  registerNotification(seconds:number) {
    this.localNotifications.schedule({
      title: "Listo!",
      text:"Ubicación enviada",
      trigger: {
        in: seconds,
        unit: ELocalNotificationTriggerUnit.SECOND,
      },
    });
  }

  callContact(number: string) {
    this.callNumber.callNumber("975308275", true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
  }

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

import { Component } from '@angular/core';
import { ELocalNotificationTriggerUnit, LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private localNotifications: LocalNotifications,private callNumber: CallNumber) { }

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

}

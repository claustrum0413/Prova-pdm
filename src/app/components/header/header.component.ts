import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton
} from '@ionic/angular';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    RouterLink
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}

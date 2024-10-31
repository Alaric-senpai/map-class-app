import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAlert } from '@ionic/angular/standalone';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InputGroupModule } from "primeng/inputgroup";
import { InputTextModule } from "primeng/inputtext";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonAlert, IonHeader, IonToolbar, IonTitle, IonContent, CardModule, ButtonModule,
    InputGroupModule, InputTextModule
   ],
})
export class HomePage {
  public alertButtons = ['OK'];
  constructor() {}


}

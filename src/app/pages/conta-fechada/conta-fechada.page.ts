import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-conta-fechada',
  templateUrl: './conta-fechada.page.html',
  styleUrls: ['./conta-fechada.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class ContaFechadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

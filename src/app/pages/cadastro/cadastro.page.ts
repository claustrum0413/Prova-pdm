import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonContent
} from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';


import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    HeaderComponent,
    IonContent
  ]
})
export class CadastroPage {

  nome = '';
  email = '';
  senha = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async cadastrar() {

    try {

      await this.authService.cadastrar(
        this.nome,
        this.email,
        this.senha
      );

      this.router.navigate(['/cardapio']);

    } catch(error) {

      console.error(error);

    }

  }


  async cadastrarComGoogle() {

    try {

      await this.authService.loginGoogle();

      await this.router.navigate(['/home']);

    } catch (error) {

      console.error('Erro no Google:', error);

    }

  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

}

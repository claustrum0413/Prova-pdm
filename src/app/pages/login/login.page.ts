import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    HeaderComponent
  ]
})
export class LoginPage {

  email = '';
  senha = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async entrar() {

    try {

      await this.authService.login(
        this.email,
        this.senha
      );

      this.router.navigate(['/cardapio']);

    } catch(error) {

      console.error(error);

    }

  }


  async entrarComGoogle() {
    try {
      await this.authService.loginGoogle();

      await this.router.navigate(['/home']);

    } catch (error) {
      console.error('Erro no login com Google:', error);
    }
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}

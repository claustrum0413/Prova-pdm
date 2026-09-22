import { Routes } from '@angular/router';

export const routes: Routes = [

{
 path: '',
 redirectTo: 'login',
 pathMatch: 'full'
},

{
 path: 'login',
 loadComponent: () =>
 import('./pages/login/login.page')
 .then(m => m.LoginPage)
},

{
 path: 'cadastro',
 loadComponent: () =>
 import('./pages/cadastro/cadastro.page')
 .then(m => m.CadastroPage)
},

{
 path: 'cardapio',
 loadComponent: () =>
 import('./pages/cardapio/cardapio.page')
 .then(m => m.CardapioPage)
},

{
 path: 'comanda',
 loadComponent: () =>
 import('./pages/comanda/comanda.page')
 .then(m => m.ComandaPage)
},

{
 path: 'minimo',
 loadComponent: () =>
 import('./pages/minimo/minimo.page')
 .then(m => m.MinimoPage)
},

{
 path: 'conta-fechada',
 loadComponent: () =>
 import('./pages/conta-fechada/conta-fechada.page')
 .then(m => m.ContaFechadaPage)
}

];

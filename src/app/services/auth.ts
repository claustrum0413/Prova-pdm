import { Injectable } from '@angular/core';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';

import { auth } from '../firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(email: string, senha: string) {
    return signInWithEmailAndPassword(
      auth,
      email,
      senha
    );
  }

  loginGoogle() {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(
      auth,
      provider
    );
  }

  async cadastrar(
    nome: string,
    email: string,
    senha: string
  ) {

    const resultado =
      await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

    await updateProfile(
      resultado.user,
      {
        displayName: nome
      }
    );

    return resultado;
  }

}

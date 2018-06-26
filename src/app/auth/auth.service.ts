import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) { }
  signUp(email, password) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  signIn(email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
}

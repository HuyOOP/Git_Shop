import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private auth : Auth) { }
    currentUser : any;

    async login() {
      const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
      //console.log(credential);
      this.currentUser = credential.user;
      //const token = await credential.user.displayName;
      //console.log(token);

    }
    async logout() {
      await this.auth.signOut();
      this.currentUser.photoURL = '';
    }

}

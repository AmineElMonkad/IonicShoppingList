import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../models/user/user.model";
import {ToastService} from "../../services/toast/toast.service";
import * as firebase from "firebase/app";

/**
 * Generated class for the LoginV2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-v2',
  templateUrl: 'login-v2.html',
})
export class LoginV2Page {

  user: User = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastService, private rAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginV2Page');
  }

  async login(user: User) {
    this.rAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      this.toast.show('You arre loggedIn :D');
      this.navCtrl.setRoot('HomePage');
    }).catch(err => {
      this.toast.show(err.message);
    });
  }

  logWithGoogle() {
    this.rAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      this.toast.show('You arre loggedIn With Google API :D');
      this.navCtrl.setRoot('HomePage');
    }).catch(err => {
      this.toast.show(err.message);
    });
  }

}

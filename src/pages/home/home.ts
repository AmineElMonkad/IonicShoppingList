import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {Item} from "../../models/item/item.model";
import {ShoppingListService} from "../../services/shopping-list/shopping-list.service";
import {ToastService} from "../../services/toast/toast.service";
import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shopping: ShoppingListService, private toast: ToastService, private rAuth: AngularFireAuth) {
    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    );
  }

  logout() {
    this.rAuth.auth.signOut().then(() => {
      this.toast.show('Good Bye !');
      this.navCtrl.setRoot('LoginV2Page');
    });
  }

}

import {Injectable} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import {User} from "../../models/user/user.model";
import {ToastService} from "../toast/toast.service";


@Injectable()
export class UserService {
  result: any;
  constructor(private rAuth: AngularFireAuth, private toast: ToastService) {

  }



  async register(user: User) {
    try {
      const result = await this.rAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.toast.show(`Compte crée avec succées !`);
    } catch(e) {
      console.log(e);
      this.toast.show(e);
    }
  }
}

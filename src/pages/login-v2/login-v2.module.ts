import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginV2Page } from './login-v2';

@NgModule({
  declarations: [
    LoginV2Page,
  ],
  imports: [
    IonicPageModule.forChild(LoginV2Page),
  ],
})
export class LoginV2PageModule {}

import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController,
              private auth: AuthService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private uniqueDeviceID: UniqueDeviceID) { }

  public createAccount() {
    //this.nav.push('RegisterPage');
    console.log("inside register");
    this.generateDeviceUUID();
    this.nav.push('ScanAadhaarPage');
  }

  public login() {
    this.showLoading()
    console.log("check 1" + JSON.stringify(this.registerCredentials));

    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.nav.setRoot('HomePage');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  generateDeviceUUID() {
    this.uniqueDeviceID.get().then((uuid: any) => {
                                    console.log("uuid value " + uuid);
                                    return uuid;
                               }).catch((error: any) => console.log(error));
    //2ea2ae97-517c-ea28-3582-230756135768
    //2ea2ae97-517c-ea28-3582-230756135768
  }
}

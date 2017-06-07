import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
  barcodeText = '';

  aadharPropNames = {
     uid:"uid",
     name:"name",
     gender:"gender",
     yearOfBirth:"yob",
     co:"co",
     house:"house",
     street:"street",
     loc:"loc",
     vtc:"vtc",
     postOffice:"po",
     dist:"dist",
     state:"state",
     postCode:"pc",
     dob:"dob"
  }

  aadharInfo :any = {}

  constructor(private nav: NavController,
              private navParams: NavParams,
              private auth: AuthService,
              private alertCtrl: AlertController) {
                 this.barcodeText = this.navParams.get("scannedText");
                 console.log(this.barcodeText);
                 if(this.barcodeText.indexOf("<?xml") === 0){
                   var parser = new DOMParser();
                   var xmlDoc = parser.parseFromString(this.barcodeText,"text/xml");

                   var x = xmlDoc.getElementsByTagName("PrintLetterBarcodeData")[0].attributes;

                   this.aadharInfo.uid = x.getNamedItem(this.aadharPropNames.uid).value;
                   this.aadharInfo.name = x.getNamedItem(this.aadharPropNames.name).value;
                   this.aadharInfo.gender = x.getNamedItem(this.aadharPropNames.gender).value;
                   this.aadharInfo.dist = x.getNamedItem(this.aadharPropNames.dist).value;
                   console.log("Object is" + this.aadharInfo.uid);

                 }

              }

  public register() {

    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}

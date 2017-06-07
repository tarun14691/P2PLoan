import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
//import { ScanResultPage } from "../scan-result/scan-result.ts";


@IonicPage()
@Component({
  selector: 'page-scan-aadhaar',
  templateUrl: 'scan-aadhaar.html'
})
export class ScanAadhaarPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private _barcodeScanner: BarcodeScanner,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.eventId = this._navParams.get('eventId');
    this.eventTitle = this._navParams.get('eventTitle');

    this.buttonText = "Scan";
    this.loading = false;
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;

    this._barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.buttonText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
      this.goToRegisterPage(barcodeData);

    }, (err) => {
      console.log(err);
    });
  }

  private goToRegisterPage(barcodeData) {
    this._nav.push('RegisterPage', {
      scannedText: barcodeData.text
    });
  }

  /*private checkPass(data) {
  }*/s
}

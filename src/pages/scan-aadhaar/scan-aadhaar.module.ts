import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanAadhaarPage } from './scan-aadhaar';

@NgModule({
  declarations: [
    ScanAadhaarPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanAadhaarPage),
  ],
  exports: [
    ScanAadhaarPage
  ]
})
export class ScanAadhaarPageModule {}

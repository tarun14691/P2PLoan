webpackJsonp([0],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan_aadhaar__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanAadhaarPageModule", function() { return ScanAadhaarPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanAadhaarPageModule = (function () {
    function ScanAadhaarPageModule() {
    }
    return ScanAadhaarPageModule;
}());
ScanAadhaarPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__scan_aadhaar__["a" /* ScanAadhaarPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scan_aadhaar__["a" /* ScanAadhaarPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__scan_aadhaar__["a" /* ScanAadhaarPage */]
        ]
    })
], ScanAadhaarPageModule);

//# sourceMappingURL=scan-aadhaar.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanAadhaarPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ScanResultPage } from "../scan-result/scan-result.ts";
var ScanAadhaarPage = (function () {
    function ScanAadhaarPage(_nav, _navParams, _barcodeScanner, alertCtrl) {
        this._nav = _nav;
        this._navParams = _navParams;
        this._barcodeScanner = _barcodeScanner;
        this.alertCtrl = alertCtrl;
    }
    ScanAadhaarPage.prototype.ionViewDidLoad = function () {
        this.eventId = this._navParams.get('eventId');
        this.eventTitle = this._navParams.get('eventTitle');
        this.buttonText = "Scan";
        this.loading = false;
    };
    ScanAadhaarPage.prototype.scanQR = function () {
        var _this = this;
        this.buttonText = "Loading..";
        this.loading = true;
        this._barcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled) {
                console.log("User cancelled the action!");
                _this.buttonText = "Scan";
                _this.loading = false;
                return false;
            }
            console.log("Scanned successfully!");
            _this.goToRegisterPage(barcodeData);
        }, function (err) {
            console.log(err);
        });
    };
    ScanAadhaarPage.prototype.goToRegisterPage = function (barcodeData) {
        this._nav.push('RegisterPage', {
            scannedText: barcodeData.text
        });
    };
    return ScanAadhaarPage;
}());
ScanAadhaarPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-scan-aadhaar',template:/*ion-inline-start:"/Users/tarunkumar/WorkHome/ionic_project/loanApp/src/pages/scan-aadhaar/scan-aadhaar.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Scan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="Scan">\n  <div class="row">\n    <div class="col">\n      <h2>Scan your QR Code Here</h2>\n    </div>\n    <div class="col">\n      <h3>{{eventTitle}}</h3>\n    </div>\n  </div>\n  <button ion-button block color="secondary" class="Scan-button" (click)="scanQR()" [disabled]="loading">{{buttonText}}</button>\n</ion-content>\n'/*ion-inline-end:"/Users/tarunkumar/WorkHome/ionic_project/loanApp/src/pages/scan-aadhaar/scan-aadhaar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */]])
], ScanAadhaarPage);

//# sourceMappingURL=scan-aadhaar.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map
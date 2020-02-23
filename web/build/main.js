webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return readGaia; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evalAriketak_evalAriketak__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { DatabaseService } from '../../app/services/databaseService';
var readGaia = (function () {
    function readGaia(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var lesson = navParams.get('gaia') - 1;
        this.izenburu = Object(__WEBPACK_IMPORTED_MODULE_2__home_home__["b" /* database */])().gaiak[lesson].izenburu;
        this.gaia = Object(__WEBPACK_IMPORTED_MODULE_2__home_home__["b" /* database */])().gaiak[lesson];
        var currentGaia = Object(__WEBPACK_IMPORTED_MODULE_2__home_home__["b" /* database */])().gaiak[lesson].gaia;
        var hizta = navParams.get('hizta');
        if (hizta) {
            currentGaia = currentGaia.replace(new RegExp(hizta, 'gi'), "<span class='highlight'>" + hizta + "</span>");
        }
        this.currentGaia = currentGaia;
    }
    readGaia.prototype.clickAriketak = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__evalAriketak_evalAriketak__["a" /* evalAriketak */], { gaia: e });
    };
    return readGaia;
}());
readGaia = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'readGaia',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/pages/readGaia/readGaia.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{izenburu}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="lessonContainer">\n    <div [innerHTML] = " currentGaia "></div>\n  </div>\n  <button ion-button full (click)="clickAriketak(gaia.maila)">Ejercicios de {{gaia.izenburu}}</button>      \n</ion-content> '/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/pages/readGaia/readGaia.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], readGaia);

//# sourceMappingURL=readGaia.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return evalAriketak; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_components_hiztegiakView_hiztegiakView__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_services_HiztegiakService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var evalAriketak = (function () {
    function evalAriketak(navCtrl, http, navParams, storage, popoverCtrl, hiztegiakService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
        this.hiztegiakService = hiztegiakService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.zorionak = false;
        this.mediaIcon = "play";
        this.http = http;
        this.storage = storage;
        this.lesson = navParams.get('gaia') - 1;
        this.izenburu = Object(__WEBPACK_IMPORTED_MODULE_2__home_home__["b" /* database */])().gaiak[this.lesson].izenburu;
        this.ariketakList = Object(__WEBPACK_IMPORTED_MODULE_2__home_home__["b" /* database */])().ariketak[this.lesson];
        this.completePercent = "0";
        this.totalAriketak = this.ariketakList.length;
        this.setCurrent();
    }
    evalAriketak.prototype.translate = function (event) {
        var _this = this;
        var word = event.target.innerText;
        var loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loader.present();
        this.hiztegiakService.translate(word, function (data) {
            var popover = _this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__assets_components_hiztegiakView_hiztegiakView__["a" /* hiztegiakView */], {
                result: data
            });
            loader.dismiss();
            popover.present({
                ev: event
            });
        });
    };
    evalAriketak.prototype.setCurrent = function () {
        var _this = this;
        if (this.ariketakList.length === 0) {
            this.lessonComplete();
        }
        this.current = this.ariketakList.sort(function () { return Math.random() - 0.5; }).pop();
        console.info('current', this.current);
        if (this.current.audio) {
            this.text = null;
            this.audio = "https://raw.githubusercontent.com/litospayaso/bagoaz/master/src/assets/database/audios/" + this.current.audio + ".mp3";
            var audioTag = document.getElementById('audioTag');
            audioTag ? audioTag.load() : '';
            this.http.get(this.audio).subscribe(null, function (err) {
                var toast = _this.toastCtrl.create({
                    message: 'Es necesario tener conexión a internet para poder hacer ejercicios de audio.',
                    duration: 3000
                });
                toast.present();
                _this.setCurrent();
            });
        }
        else {
            this.audio = null;
            if (typeof (this.current.euskara) === "string") {
                this.current.euskara = this.current.euskara.split(" ");
            }
            this.text = this.current;
        }
    };
    evalAriketak.prototype.zuzendu = function () {
        if (this.compareStrings(this.response === undefined ? '' : this.response, this.current.erantzun)) {
            this.isCorrecting = ["Oso ondo! ", "Zuzen! ", "Egoki! "].sort(function () { return Math.random() - 0.5; }).pop();
            this.evaluationClass = "zuzen";
            this.completePercent = ((this.totalAriketak - this.ariketakList.length) * 100 / this.totalAriketak) + "%";
        }
        else {
            this.isCorrecting = "Akats: " + this.current.erantzun;
            this.evaluationClass = "akats";
        }
    };
    evalAriketak.prototype.jarraitu = function () {
        if (!this.compareStrings(this.response === undefined ? '' : this.response, this.current.erantzun)) {
            this.ariketakList.push(this.current);
        }
        if (this.ariketakList.length > 0) {
            this.isCorrecting = null;
            this.response = "";
            this.setCurrent();
        }
        else {
            this.lessonComplete();
        }
    };
    evalAriketak.prototype.lessonComplete = function () {
        var _this = this;
        this.zorionak = true;
        this.completePercent = "100%";
        this.storage.get('lessonPassed').then(function (val) {
            var cookie;
            if (val) {
                cookie = JSON.parse(val);
            }
            else {
                cookie = [];
            }
            cookie.push(_this.lesson);
            _this.storage.set("lessonPassed", JSON.stringify(cookie));
        }).catch(function (e) { return console.error(e); });
    };
    evalAriketak.prototype.playMedia = function () {
        var audioTag = document.getElementById('audioTag');
        audioTag.load();
    };
    evalAriketak.prototype.onKeyPress = function (event) {
        if (event.keyCode === 13) {
            if (this.isCorrecting) {
                this.jarraitu();
            }
            else {
                this.zuzendu();
            }
        }
    };
    evalAriketak.prototype.comeBackToGaiak = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    evalAriketak.prototype.compareStrings = function (str1, str2) {
        var answer = str1, solution = str2;
        if (answer === solution) {
            return true;
        } //removing punctuation marks:
        answer = answer.replace(/[?=]|[¿=]|[!=]|[¡=]/gi, "").replace(/[, ]|[. ]/gi, " ").replace(/[,]|[.]/gi, " ").replace(/^(\s*)|(\s*)$/g, '').replace(/\s+/g, ' ');
        solution = solution.replace(/[?=]|[¿=]|[!=]|[¡=]/gi, "").replace(/[, ]|[. ]/gi, " ").replace(/[,]|[.]/gi, " ").replace(/^(\s*)|(\s*)$/g, '').replace(/\s+/g, ' ');
        if (answer === solution) {
            return true;
        } //removing capital letters:
        answer = answer.toLowerCase();
        solution = solution.toLowerCase();
        if (answer === solution) {
            return true;
        } //removing accent mark:
        answer = answer.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u");
        solution = solution.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u");
        if (answer === solution) {
            return true;
        } //removing quoutes:
        answer = answer.replace(/"/g, "");
        solution = solution.replace(/"/g, "");
        if (answer === solution) {
            return true;
        } //removing white spaces at the beginning and at the end:
        answer = answer.trim();
        solution = solution.trim();
        if (answer === solution) {
            return true;
        } //the answer is wrong
        return false;
    };
    return evalAriketak;
}());
evalAriketak = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'evalAriketak',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/pages/evalAriketak/evalAriketak.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{izenburu}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding (keypress)="onKeyPress($event)">\n  <div *ngIf="!zorionak">\n      <div class="percent-complete"><span [style.width]="completePercent"></span></div>\n      <div *ngIf="text">\n        <ion-card>\n          <ion-card-header>\n              <span *ngFor="let texto of text.euskara" (click)="translate($event)">\n                {{texto.concat(" ")}}\n              </span>\n          </ion-card-header>\n        </ion-card>\n      </div>\n      <div *ngIf="audio">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n              <!-- <img src="img/thumbnail-totoro.png"> -->\n              <button class="button-media" (click)="playMedia()">\n                <ion-icon [name]="mediaIcon"></ion-icon>\n              </button>\n            </ion-thumbnail>\n            <h2>Escucha y escribe</h2>\n          </ion-item>\n        </ion-list>\n        <audio controls="controls" id="audioTag" preload="none" autoplay><source src="{{audio}}" type="audio/mpeg"></audio>\n      </div>\n      <ion-item>\n        <ion-textarea type="text" lineHeight="22" [(ngModel)]="response"></ion-textarea>\n      </ion-item>\n        <div *ngIf="!isCorrecting">\n        <button ion-button full (click)="zuzendu()">Zuzendu (Corregir)</button>\n      </div>\n      <div *ngIf="isCorrecting">\n        <div [className]="evaluationClass">{{isCorrecting}}</div>\n        <button ion-button full (click)="jarraitu()">Jarraitu (Continuar)</button>\n      </div>\n  </div>\n  <div *ngIf="zorionak">\n    <div class="zorionak-picture">\n      <img src="assets/euskicons/zorionak.png">\n    </div>\n    <div class="zuzen">¡Has completado correctamente la lección!</div>\n    <button ion-button full (click)="comeBackToGaiak()">Volver a las lecciones</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/pages/evalAriketak/evalAriketak.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_6__assets_services_HiztegiakService__["a" /* HiztegiakService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], evalAriketak);

//# sourceMappingURL=evalAriketak.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiztegiakService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HiztegiakService = (function () {
    function HiztegiakService(http) {
        this.http = http;
        this.http = http;
    }
    HiztegiakService.prototype.translate = function (hitza, callback, language, entry) {
        var _this = this;
        if (language === void 0) { language = "eu"; }
        if (entry === void 0) { entry = true; }
        var url = "https://hiztegiak.elhuyar.eus/" + (language === 'eu' ? 'eu_es/' : 'es_eu/') + hitza;
        this.http.get(url).subscribe(function (data) {
            var trans = Array();
            var examples = Array();
            var el = __WEBPACK_IMPORTED_MODULE_2_jquery___default()(data["_body"].replace("<!doctype html>", "").replace(/src=/gi, "srcad="));
            if (el.find(".wrapDef").length === 1) {
                var strong = el.find(".lehena strong");
                for (var i = 0; i < strong.length && i < 4; i++) {
                    if (!trans.includes(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(strong[i]).text())) {
                        trans.push(strong[i].innerText);
                    }
                }
                var remark = el.find(".remark_" + (language === "eu" ? "es_eu" : "eu_es"));
                for (var i = 0; i < remark.length && i < 4; i++) {
                    if (!trans.includes(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(remark[i]).text())) {
                        trans.push(remark[i].innerText);
                    }
                }
                var padDefn = el.find(".padDefn p");
                for (var i = 0; i < padDefn.length && i < 4; i++) {
                    examples.push(padDefn[i].innerText);
                }
                hitza = el.find("#tts_source").text();
                callback({ hitza: hitza, trans: trans, examples: examples, language: language, url: url });
            }
            else {
                if (el.find(".didyoumean").length > 0 && entry) {
                    _this.translate(el.find(".didyoumean a")[0].innerText, callback, language, false);
                }
                else {
                    callback(false);
                }
            }
        }, function (err) {
            callback(err);
        });
    };
    return HiztegiakService;
}());
HiztegiakService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], HiztegiakService);

//# sourceMappingURL=HiztegiakService.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hiztegiakView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var hiztegiakView = (function () {
    function hiztegiakView(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.result = navParams.get('result');
    }
    return hiztegiakView;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], hiztegiakView.prototype, "result", void 0);
hiztegiakView = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'hiztegiakView',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/assets/components/hiztegiakView/hiztegiakView.html"*/'<div *ngIf="result" padding>\n  <ion-card>\n    <ion-card-header>\n      {{result.hitza}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-lines>\n        <div *ngFor="let translation of result.trans">\n          {{translation}}\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="result.examples.length>0">\n    <ion-card-header>\n      Ejemplos\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <div *ngFor="let example of result.examples">\n          {{example}}\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <a [href]="result.url">Traducción ofrecida por El Huyar</a>\n</div>\n'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/assets/components/hiztegiakView/hiztegiakView.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], hiztegiakView);

//# sourceMappingURL=hiztegiakView.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ariketak; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evalAriketak_evalAriketak__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ariketak = (function () {
    function ariketak(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.lessonPassed = [];
        this.gaiak = Object(__WEBPACK_IMPORTED_MODULE_2__home_home__["b" /* database */])().gaiak;
        this.storage.get('lessonPassed').then(function (val) {
            if (val) {
                _this.lessonPassed = JSON.parse(val);
            }
        }).catch(function (e) { return console.error(e); });
    }
    ariketak.prototype.clickAriketak = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__evalAriketak_evalAriketak__["a" /* evalAriketak */], { gaia: e });
    };
    ariketak.prototype.completeClass = function (e) {
        if (this.lessonPassed.includes(e)) {
            return "passed";
        }
        return "none";
    };
    return ariketak;
}());
ariketak = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/pages/ariketak/ariketak.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="create"></ion-icon> Ariketak (Ejercicios)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="ariketak center">\n  <span *ngFor="let gaia of gaiak">\n    <div class="card-element" [ngClass]="completeClass(gaia.maila-1)" (click)="clickAriketak(gaia.maila)">\n      <ion-grid style="height:100%">\n        <ion-row style="height:100%">\n          <ion-col col-4 style="height:100%">\n            <img src="assets/euskicons/{{gaia.maila}}.png">\n          </ion-col>\n          <ion-col col-8 style="height:100%">{{gaia.maila}}. {{gaia.izenburu}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </span>\n</ion-content>'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/pages/ariketak/ariketak.html"*/,
        styles: ['ariketak.scss']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], ariketak);

//# sourceMappingURL=ariketak.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bilatzaile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__readGaia_readGaia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DatabaseService } from '../../app/services/databaseService';
var bilatzaile = (function () {
    function bilatzaile(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gaiak = [];
    }
    bilatzaile.prototype.bilatzaile = function () {
        var _this = this;
        var allGaiak = Object(__WEBPACK_IMPORTED_MODULE_3__home_home__["b" /* database */])().gaiak;
        this.gaiak = allGaiak.filter(function (e) { return e.gaia.toLowerCase().includes(_this.hizta.toLowerCase()); });
    };
    bilatzaile.prototype.clickGaia = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__readGaia_readGaia__["a" /* readGaia */], { gaia: e, hizta: this.hizta });
    };
    return bilatzaile;
}());
bilatzaile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'bilatzaile',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/pages/bilatzaile/bilatzaile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="search"></ion-icon> Bilatzaile (Buscador)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bilatzaile">\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>\n        <ion-icon name="search"></ion-icon> Hizta</ion-label>\n      <ion-input type="text" [(ngModel)]="hizta" (ngModelChange)="bilatzaile()"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <span *ngFor="let gaia of gaiak">\n    <div class="card-element" (click)="clickGaia(gaia.maila)">\n      <ion-grid style="height:100%">\n        <ion-row style="height:100%">\n          <ion-col col-4 style="height:100%">\n            <img src="assets/euskicons/{{gaia.maila}}.png">\n          </ion-col>\n          <ion-col col-8 style="height:100%">{{gaia.maila}}. {{gaia.izenburu}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </span>\n  <!-- <div *ngFor="let gaia of gaiak" >\n    <button ion-button full (click)="clickGaia(gaia.maila)">{{gaia.maila}}. {{gaia.izenburu}}</button>      \n  </div> -->\n</ion-content>'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/pages/bilatzaile/bilatzaile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], bilatzaile);

//# sourceMappingURL=bilatzaile.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hiztegiak; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_services_HiztegiakService__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var hiztegiak = (function () {
    function hiztegiak(hiztegiakService, loadingCtrl) {
        this.hiztegiakService = hiztegiakService;
        this.loadingCtrl = loadingCtrl;
        this.language = 'eu';
    }
    hiztegiak.prototype.clickTranslate = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loader.present();
        this.hiztegiakService.translate(this.hizta, function (data) {
            loader.dismiss();
            _this.result = data;
        }, this.language);
    };
    return hiztegiak;
}());
hiztegiak = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'hiztegiak',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/pages/hiztegiak/hiztegiak.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="bookmarks"></ion-icon> Hiztegiak (Diccionario)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="padding:5px" class="hiztegiak">\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <!-- <ion-label fixed>\n              <ion-icon name="search"></ion-icon> Hizta</ion-label> -->\n            <ion-input type="text" [(ngModel)]="hizta" (keyup.enter)=clickTranslate()></ion-input>\n            <ion-item>\n              <ion-label>Lenguage</ion-label>\n            </ion-item>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-select [(ngModel)]="language" interface="popover">\n            <ion-option value="eu">Euskera - Castellano</ion-option>\n            <ion-option value="es">Castellano - Euskera</ion-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item>\n      <button ion-button full (click)="clickTranslate()">Buscar</button>\n    </ion-item>\n  </ion-list>\n\n  <hiztegiakView [result]="result"></hiztegiakView>\n\n</ion-content>'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/pages/hiztegiak/hiztegiak.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__assets_services_HiztegiakService__["a" /* HiztegiakService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], hiztegiak);

//# sourceMappingURL=hiztegiak.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return about; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var about = (function () {
    function about() {
    }
    return about;
}());
about = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'about',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="help"></ion-icon> Laguntza (Acerca de) </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="about">\n  <h4>¡Bienvenido al curso de euskera Bagoaz!</h4>\n  <p>Este curso está dividido en 36 lecciones\n    <strong>(Gaiak)</strong> a través de las cuales podrás aprender de manera interactiva esta maravillosa lengua.</p>\n  <p>Al finalizar cada lección podrás realizar unos ejercicios\n    <strong>(Arieketak)</strong> para afianzar tu conocimiento. La voz de los audios ha sido prestada por Eli Elustondo (Mila esker!).</p>\n  <p>Si quieres buscar dentro de todas las lecciones alguna palabra o información concreta puedes usar el buscador\n    <strong>(Bilatzaile)</strong>\n  </p>\n  <p>También disponemos de un diccionario\n    <strong>(Hiztegiak)</strong> que puedes utilizar para buscar alguna palabra que no conozcas en euskera, o buscar como se dice\n    alguna palabra en euskera.</p>\n  <p> para documentar cualquier error de la aplicación, sugerencia o duda puedes ponerte en contacto conmigo a través del mail:</p>\n  <h5 style="text-align: center;">\n    <a href="mailto:angel.jesuita@gmail.com">angel.jesuita@gmail.com</a>\n  </h5>\n  <p>Las imágenes de fondo han son propiedad de <a href="https://www.freepik.com/kjpargeter">@kjpargeter</a></p>\n  <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>\n  <p>Toda la información de esta aplicación ha sido extraída del curso gratuito de Euskera creado por\n    <strong>Gorka I. Bakero</strong>. Aquí dispones de su introducción:</p>\n  <br>\n  <br>\n  <h4>Sarrera (Introducción)</h4>\n  <p>Este documento es una versión revisada del curso de euskera que comencé en 2001. Por aquel entonces no había ningún curso\n    en internet, y por otro lado yo mismo aprendí euskera entre los 17 y 19 años de modo autodidacta por lo que conozco bien\n    los posibles problemas a la hora de aprenderlo y algunos trucos prácticos. Además conociendo el interés de mi entorno\n    por aprender esta lengua, ajustándose cada cual a sus limitaciones de horario, decidí que un material así había de existir\n    de modo gratuito y emprendí este proyecto para compartir con quien así lo quisiera el placer de estudiar y hablar esta\n    lengua. Inicialmente se alojaba en una página de geocities y posteriormente en su propio dominio\n    <a ng-href="http://www.aprendereuskera.com">aprendereuskera.com</a>\n  </p>\n  <p>En la web aprendereuskera.com se incluyen enlaces a otros cursos on-line con audio así como otros recursos para localizar\n    euskaldunes o estudiantes de euskera con quienes practicar, tanto para ordenador como móvil y tabletas. Además de estos,\n    se enlazan páginas de apellidos y otras web de interés. Os recomiendo que lo miréis.</p>\n  <p>Quien domine el contenido de este curso podrá sin duda leer y mantener conversaciones en euskera, además debe ser capaz\n    de certificarse en nivel B1. No obstante, las certificaciones oficiales de nivel lingüístico solo se obtienen en exámenes\n    presenciales, por lo que ningún curso on-line otorga certificaciones de validez administrativa o laboral.</p>\n  <p>Por otro lado, cualquier curso por si mismo os dará conocimiento pero no práctica y, es precisamente esta la que os dará\n    naturalidad en la conversación. Por esto, si gracias a las herramientas sociales citadas o sin ellas, conocéis a alguien\n    con quien practicar ¡aprovechad! Y si vuestr@ amig@ euskaldun no está en vuestro entorno próximo siempre podréis recurrir\n    al teléfono, viber o skype para conversar.</p>\n  <p>Aunque inicialmente pensé que solo sería de interés para personas de Euskal Herria (conjunto de 7 provincias en las que\n    desde la antigüedad hasta hoy en día el euskera es hablado), la verdad que durante todo este tiempo me ha sorprendido,\n    y no dejo de sorprenderme, del interés que también existe en la 8ª provincia, la formada por tod@s aquell@s de cualquier\n    etnia, religión o país, que amáis la cultura vasca. Esta se extiende por todo el mundo y en ella he podido conocer gente\n    de muchos paises que aprenden cada cual a su ritmo e incluso, quienes llegan a hablar muy bien el euskera sin siquiera\n    haber pisado tierra vasca.</p>\n  <p>Espero que la aventura de aprender euskera os sea del todo agradable y la disfrutéis siempre, para ello espero también\n    que el presente documento os sea de ayuda. Solo me queda mandar un abrazo muy fuerte a tod@s l@s vasc@s de estas 8 provincias\n    que por cualquier razón queréis aprender esta antiquísima y mágica lengua.</p>\n  <!--<button type="button" class="button button-block button-positive" ng-click="moveScreen(\'Gaiak\')">Bueltan</button>-->\n</ion-content>'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/pages/about/about.html"*/
    })
], about);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_readGaia_readGaia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ariketak_ariketak__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_evalAriketak_evalAriketak__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bilatzaile_bilatzaile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_hiztegiak_hiztegiak__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_services_HiztegiakService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_components_hiztegiakView_hiztegiakView__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_readGaia_readGaia__["a" /* readGaia */],
            __WEBPACK_IMPORTED_MODULE_6__pages_ariketak_ariketak__["a" /* ariketak */],
            __WEBPACK_IMPORTED_MODULE_7__pages_evalAriketak_evalAriketak__["a" /* evalAriketak */],
            __WEBPACK_IMPORTED_MODULE_8__pages_bilatzaile_bilatzaile__["a" /* bilatzaile */],
            __WEBPACK_IMPORTED_MODULE_9__pages_hiztegiak_hiztegiak__["a" /* hiztegiak */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* about */],
            __WEBPACK_IMPORTED_MODULE_12__assets_components_hiztegiakView_hiztegiakView__["a" /* hiztegiakView */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_12__assets_components_hiztegiakView_hiztegiakView__["a" /* hiztegiakView */]),
            __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_readGaia_readGaia__["a" /* readGaia */],
            __WEBPACK_IMPORTED_MODULE_6__pages_ariketak_ariketak__["a" /* ariketak */],
            __WEBPACK_IMPORTED_MODULE_7__pages_evalAriketak_evalAriketak__["a" /* evalAriketak */],
            __WEBPACK_IMPORTED_MODULE_8__pages_bilatzaile_bilatzaile__["a" /* bilatzaile */],
            __WEBPACK_IMPORTED_MODULE_9__pages_hiztegiak_hiztegiak__["a" /* hiztegiak */],
            __WEBPACK_IMPORTED_MODULE_12__assets_components_hiztegiakView_hiztegiakView__["a" /* hiztegiakView */],
            __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* about */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__assets_services_HiztegiakService__["a" /* HiztegiakService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ariketak_ariketak__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bilatzaile_bilatzaile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_hiztegiak_hiztegiak__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DatabaseService } from './services/databaseService';





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Gaiak (Lecciones)', icon: 'book', color: '#10c1f3', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Ariketak (Ejercicios)', icon: 'create', color: '#ffc900', component: __WEBPACK_IMPORTED_MODULE_5__pages_ariketak_ariketak__["a" /* ariketak */] },
            { title: 'Bilatzaile (Buscador)', icon: 'search', color: '#f53d3d', component: __WEBPACK_IMPORTED_MODULE_6__pages_bilatzaile_bilatzaile__["a" /* bilatzaile */] },
            { title: 'Hiztegiak (Diccionario)', icon: 'bookmarks', color: '#33cd5e', component: __WEBPACK_IMPORTED_MODULE_7__pages_hiztegiak_hiztegiak__["a" /* hiztegiak */] },
            { title: 'Laguntza (Acerca de)', icon: 'help', color: '#886aea', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* about */] } //#33cd5e
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        }).catch(function (e) { return console.error(e); });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title><img src="assets/icon/Basque-flag.png"><img src="assets/icon/bagoaz-logo.png"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" [style.color]="p.color"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/app/app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__readGaia_readGaia__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { evalAriketak } from '../evalAriketak/evalAriketak';


var allData;
var HomePage = (function () {
    function HomePage(navCtrl, http, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.lessonPassed = [];
        this.storage.get('lessonPassed').then(function (val) {
            if (val) {
                _this.lessonPassed = JSON.parse(val);
            }
        }).catch(function (e) { return console.error(e); });
        var loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        loader.present();
        this.navCtrl = navCtrl;
        this.storage = storage;
        http.get("https://raw.githubusercontent.com/litospayaso/bagoaz/master/src/assets/database/bagoaz-export.json").map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.dataBase = response;
            allData = response;
            _this.storage.set('allData', JSON.stringify(allData));
            console.info(_this.dataBase);
            _this.gaiak = response.gaiak;
            loader.dismiss();
            // this.navCtrl.push(evalAriketak,{gaia:36});
        }, function (err) {
            storage.get('allData').then(function (val) {
                if (val) {
                    var response = JSON.parse(val);
                    _this.dataBase = response;
                    allData = response;
                    console.info("you don't have internet conection, running with cache.", _this.dataBase);
                    _this.gaiak = response.gaiak;
                    loader.dismiss();
                }
                else {
                    http.get("assets/database/bagoaz-export.json").map(function (res) { return res.json(); }).subscribe(function (response) {
                        _this.dataBase = response;
                        allData = response;
                        console.info("you don't have internet conection, running with local json.", _this.dataBase);
                        _this.gaiak = response.gaiak;
                        loader.dismiss();
                    }, function (err) {
                        _this.dataBase = undefined;
                        loader.dismiss();
                    });
                }
            }).catch(function (e) { return console.error(e); });
        });
    }
    HomePage.prototype.clickGaia = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__readGaia_readGaia__["a" /* readGaia */], { gaia: e });
    };
    HomePage.prototype.completeClass = function (e) {
        if (this.lessonPassed.includes(e)) {
            return "passed";
        }
        return "none";
    };
    HomePage.prototype.refresh = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/angelita/Documents/bagoaz/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="book"></ion-icon> Gaiak (Lecciones)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n  <div *ngIf="!dataBase">\n    <ion-card>\n      <ion-card-content>\n        Fallo al obtener la base de datos, revise su conexión a internet.\n      </ion-card-content>\n      <ion-item>\n        <button ion-button icon-left clear item-end (click)="refresh()">\n          <ion-icon name="refresh"></ion-icon>\n          Reintentar\n        </button>\n      </ion-item>\n    </ion-card>\n  </div>\n  <div *ngIf="dataBase" class="center">\n    <span *ngFor="let gaia of gaiak">\n      <div class="card-element" [ngClass]="completeClass(gaia.maila-1)" (click)="clickGaia(gaia.maila)">\n        <ion-grid style="height:100%">\n          <ion-row style="height:100%">\n            <ion-col col-4 style="height:100%">\n              <img src="assets/euskicons/{{gaia.maila}}.png">\n            </ion-col>\n            <ion-col col-8 style="height:100%">{{gaia.maila}}. {{gaia.izenburu}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </span>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/angelita/Documents/bagoaz/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], HomePage);

var database = function () { return allData; };
//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map
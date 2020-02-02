(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-income-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/income/income.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/income/income.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Income</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"presentModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-segment (ionChange)=\"filterDates($event)\">\n          <ion-segment-button value=\"All\" checked>\n            <ion-label>All</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Today\">\n            <ion-label>Today</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Weekly\">\n            <ion-label>Weekly</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Monthly\">\n            <ion-label>Monthly</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col> -->\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-card class=\"ion-padding\">\n          <ion-card-header>\n            <ion-card-title>Summary</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-label color=\"medium\"><i><small>Total Income</small></i></ion-label>\n              <ion-text>{{ getAmount() | currency: curr }}</ion-text>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-padding\" size-md=\"4\" offset-md=\"4\">\n        <ion-list>\n            <ion-item *ngFor=\"let item of items\" (click)=\"presentModal(item)\">\n              <ion-label position=\"fixed\">{{ item.date | date: 'MMM dd' }}</ion-label>\n              <ion-label>{{ item.type }}</ion-label>\n              <p>{{ item.amount | currency: curr }}</p>\n            </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/income/income-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/tabs/income/income-routing.module.ts ***!
  \******************************************************/
/*! exports provided: IncomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageRoutingModule", function() { return IncomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _income_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income.page */ "./src/app/tabs/income/income.page.ts");




const routes = [
    {
        path: '',
        component: _income_page__WEBPACK_IMPORTED_MODULE_3__["IncomePage"]
    }
];
let IncomePageRoutingModule = class IncomePageRoutingModule {
};
IncomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IncomePageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/income/income.module.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/income/income.module.ts ***!
  \**********************************************/
/*! exports provided: IncomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _income_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-routing.module */ "./src/app/tabs/income/income-routing.module.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals */ "./src/app/modals/index.ts");
/* harmony import */ var _income_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./income.page */ "./src/app/tabs/income/income.page.ts");






let IncomePageModule = class IncomePageModule {
};
IncomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _income_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncomePageRoutingModule"],
            _modals__WEBPACK_IMPORTED_MODULE_4__["IncomeModalPageModule"]
        ],
        declarations: [_income_page__WEBPACK_IMPORTED_MODULE_5__["IncomePage"]]
    })
], IncomePageModule);



/***/ }),

/***/ "./src/app/tabs/income/income.page.scss":
/*!**********************************************!*\
  !*** ./src/app/tabs/income/income.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvaW5jb21lL2luY29tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/income/income.page.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/income/income.page.ts ***!
  \********************************************/
/*! exports provided: IncomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePage", function() { return IncomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modals */ "./src/app/modals/index.ts");








let IncomePage = class IncomePage {
    constructor(store, incomeService, loadingController, modalController) {
        this.store = store;
        this.incomeService = incomeService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
    }
    ngOnInit() {
        this.subs.add(this.store
            .select('user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.curency))
            .subscribe(curency => { this.curr = curency; }), this.store
            .select('income')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.types))
            .subscribe(types => { this.types = types; }), this.store
            .select('income')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.items))
            .subscribe(items => { this.items = items; }), this.store
            .select('expenses')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.total))
            .subscribe(total => { this.total = total; }));
    }
    getAmount(id) {
        if (id) {
            return this.items
                .filter(exp => exp.typeid === id)
                .reduce((a, e) => a + e.amount, 0);
        }
        return this.items.reduce((a, e) => a + e.amount, 0);
    }
    filterDates(event) { console.log(event.detail.value); }
    filterArr(id) { return this.items.filter(exp => exp.typeid === id); }
    ngOnDestroy() { this.subs.unsubscribe(); }
    refresh(event) {
        // this.incomeService.fetchAll();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    presentModal(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals__WEBPACK_IMPORTED_MODULE_7__["IncomeModalPage"],
                componentProps: {
                    item: i,
                    types: this.types
                }
            });
            return yield modal.present();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 1000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
};
IncomePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_6__["IncomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
IncomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/income/income.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income.page.scss */ "./src/app/tabs/income/income.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        _store__WEBPACK_IMPORTED_MODULE_6__["IncomeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], IncomePage);



/***/ })

}]);
//# sourceMappingURL=income-income-module-es2015.js.map
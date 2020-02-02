(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/dashboard.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/dashboard.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"presentModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-segment (ionChange)=\"filterDates($event)\">\n          <ion-segment-button value=\"All\" checked>\n            <ion-label>All</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Today\">\n            <ion-label>Today</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Weekly\">\n            <ion-label>Weekly</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Monthly\">\n            <ion-label>Monthly</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col> -->\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-card class=\"ion-padding\">\n          <ion-card-header>\n            <ion-card-title>Summary</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-label color=\"medium\"><i><small>Total Income</small></i></ion-label>\n              <ion-text>{{ totalIncome | currency: curr }}</ion-text>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"medium\"><i><small>Total Expenses</small></i></ion-label>\n              <ion-text>{{ totalExpenses | currency: curr }}</ion-text>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label color=\"medium\"><i><small>Net Total</small></i></ion-label>\n              <ion-text><strong>{{ totalIncome - totalExpenses | currency: curr }}</strong></ion-text>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[0]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[0]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showHome\"></ion-toggle>\n        </ion-item>\n        <app-house *ngIf=\"showHome\" [category]=\"categories[0]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-house>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[1]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[1]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showLiving\">\n          </ion-toggle>\n        </ion-item>\n        <app-living *ngIf=\"showLiving\" [category]=\"categories[1]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-living>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[2]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[2]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showTrans\"></ion-toggle>\n        </ion-item>\n        <app-trans *ngIf=\"showTrans\" [category]=\"categories[2]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-trans>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[3]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[3]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showEduc\"></ion-toggle>\n        </ion-item>\n        <app-educ *ngIf=\"showEduc\" [category]=\"categories[3]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-educ>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[4]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[4]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showMisc\"></ion-toggle>\n        </ion-item>\n        <app-misc *ngIf=\"showMisc\" [category]=\"categories[4]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-misc>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/educ/educ.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/educ/educ.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/house/house.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/house/house.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/living/living.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/living/living.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/misc/misc.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/misc/misc.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/trans/trans.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/trans/trans.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n");

/***/ }),

/***/ "./src/app/tabs/dashboard/dashboard-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/tabs/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/tabs/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/dashboard/dashboard.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tabs/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/tabs/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals */ "./src/app/modals/index.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/tabs/dashboard/dashboard.page.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./house/house.component */ "./src/app/tabs/dashboard/house/house.component.ts");
/* harmony import */ var _living_living_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./living/living.component */ "./src/app/tabs/dashboard/living/living.component.ts");
/* harmony import */ var _trans_trans_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trans/trans.component */ "./src/app/tabs/dashboard/trans/trans.component.ts");
/* harmony import */ var _educ_educ_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./educ/educ.component */ "./src/app/tabs/dashboard/educ/educ.component.ts");
/* harmony import */ var _misc_misc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./misc/misc.component */ "./src/app/tabs/dashboard/misc/misc.component.ts");











let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardPageRoutingModule"],
            _modals__WEBPACK_IMPORTED_MODULE_4__["ExpenseModalPageModule"],
            _modals__WEBPACK_IMPORTED_MODULE_4__["ListModalPageModule"]
        ],
        declarations: [
            _dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"],
            _house_house_component__WEBPACK_IMPORTED_MODULE_6__["HouseComponent"],
            _living_living_component__WEBPACK_IMPORTED_MODULE_7__["LivingComponent"],
            _trans_trans_component__WEBPACK_IMPORTED_MODULE_8__["TransComponent"],
            _educ_educ_component__WEBPACK_IMPORTED_MODULE_9__["EducComponent"],
            _misc_misc_component__WEBPACK_IMPORTED_MODULE_10__["MiscComponent"]
        ]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/tabs/dashboard/dashboard.page.scss":
/*!****************************************************!*\
  !*** ./src/app/tabs/dashboard/dashboard.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/dashboard/dashboard.page.ts":
/*!**************************************************!*\
  !*** ./src/app/tabs/dashboard/dashboard.page.ts ***!
  \**************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modals */ "./src/app/modals/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");








let DashboardPage = class DashboardPage {
    constructor(store, authService, categoryService, expenseService, incomeService, profileService, loadingController, modalController) {
        this.store = store;
        this.authService = authService;
        this.categoryService = categoryService;
        this.expenseService = expenseService;
        this.incomeService = incomeService;
        this.profileService = profileService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.showHome = false;
        this.showLiving = false;
        this.showTrans = false;
        this.showEduc = false;
        this.showMisc = false;
    }
    ngOnInit() {
        this.subs.add(this.store
            .select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.user.id))
            .subscribe(id => { this.id = id; }), this.store
            .select('user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.item))
            .subscribe(item => {
            if (this.id && !item) {
                this.profileService.fetch(this.id);
            }
        }), this.store
            .select('user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.curency))
            .subscribe(curency => { this.curr = curency; }), this.store
            .select('category')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.isLoading))
            .subscribe(loading => {
            this.isLoading = loading;
            if (this.isLoading) {
                this.presentLoading();
            }
        }), this.store
            .select('category')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.items))
            .subscribe(items => { this.categories = items; }), this.store
            .select('expenses')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.isLoading))
            .subscribe(loading => {
            this.isLoading = loading;
            if (this.isLoading) {
                this.presentLoading();
            }
        }), this.store
            .select('expenses')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.items))
            .subscribe(items => { this.expenses = items; }), this.store
            .select('expenses')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.total))
            .subscribe(total => { this.totalExpenses = total; }), this.store
            .select('income')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.isLoading))
            .subscribe(loading => {
            this.isLoading = loading;
            if (this.isLoading) {
                this.presentLoading();
            }
        }), this.store
            .select('income')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => state.total))
            .subscribe(total => { this.totalIncome = total; }));
    }
    filterDates(event) { console.log(event.detail.value); }
    getAmount(id) {
        return this.expenses
            .filter(exp => exp.categoryId === id)
            .reduce((a, e) => a + e.amount, 0);
    }
    ngOnDestroy() { this.subs.unsubscribe(); }
    refresh(event) {
        // this.expenseService.fetchAll();
        // this.incomeService.fetchAll();
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals__WEBPACK_IMPORTED_MODULE_6__["ExpenseModalPage"],
                componentProps: {
                    categories: this.categories
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
DashboardPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_7__["ExpenseService"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_7__["IncomeService"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/tabs/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
        _store__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _store__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
        _store__WEBPACK_IMPORTED_MODULE_7__["ExpenseService"],
        _store__WEBPACK_IMPORTED_MODULE_7__["IncomeService"],
        _store__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], DashboardPage);



/***/ }),

/***/ "./src/app/tabs/dashboard/educ/educ.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tabs/dashboard/educ/educ.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2VkdWMvZWR1Yy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tabs/dashboard/educ/educ.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tabs/dashboard/educ/educ.component.ts ***!
  \*******************************************************/
/*! exports provided: EducComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducComponent", function() { return EducComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modals */ "./src/app/modals/index.ts");




let EducComponent = class EducComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    getAmount(id) {
        return this.expenses
            .filter(exp => exp.categoryId === this.category.id)
            .filter(t => t.typeid === id)
            .reduce((a, e) => a + e.amount, 0);
    }
    presentModal(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                componentProps: {
                    category: this.category,
                    type: i,
                    curr: this.curr
                }
            });
            return yield modal.present();
        });
    }
};
EducComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EducComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], EducComponent.prototype, "expenses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], EducComponent.prototype, "curr", void 0);
EducComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-educ',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./educ.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/educ/educ.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./educ.component.scss */ "./src/app/tabs/dashboard/educ/educ.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], EducComponent);



/***/ }),

/***/ "./src/app/tabs/dashboard/house/house.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/tabs/dashboard/house/house.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2hvdXNlL2hvdXNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tabs/dashboard/house/house.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tabs/dashboard/house/house.component.ts ***!
  \*********************************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modals */ "./src/app/modals/index.ts");




let HouseComponent = class HouseComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    getAmount(id) {
        return this.expenses
            .filter(exp => exp.categoryId === this.category.id)
            .filter(t => t.typeid === id)
            .reduce((a, e) => a + e.amount, 0);
    }
    presentModal(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                componentProps: {
                    category: this.category,
                    type: i,
                    curr: this.curr
                }
            });
            return yield modal.present();
        });
    }
};
HouseComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HouseComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], HouseComponent.prototype, "expenses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HouseComponent.prototype, "curr", void 0);
HouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-house',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./house.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/house/house.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./house.component.scss */ "./src/app/tabs/dashboard/house/house.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HouseComponent);



/***/ }),

/***/ "./src/app/tabs/dashboard/living/living.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tabs/dashboard/living/living.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2xpdmluZy9saXZpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabs/dashboard/living/living.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tabs/dashboard/living/living.component.ts ***!
  \***********************************************************/
/*! exports provided: LivingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivingComponent", function() { return LivingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modals */ "./src/app/modals/index.ts");




let LivingComponent = class LivingComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    getAmount(id) {
        return this.expenses
            .filter(exp => exp.categoryId === this.category.id)
            .filter(t => t.typeid === id)
            .reduce((a, e) => a + e.amount, 0);
    }
    presentModal(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                componentProps: {
                    category: this.category,
                    type: i,
                    curr: this.curr
                }
            });
            return yield modal.present();
        });
    }
};
LivingComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LivingComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], LivingComponent.prototype, "expenses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], LivingComponent.prototype, "curr", void 0);
LivingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-living',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./living.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/living/living.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./living.component.scss */ "./src/app/tabs/dashboard/living/living.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], LivingComponent);



/***/ }),

/***/ "./src/app/tabs/dashboard/misc/misc.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tabs/dashboard/misc/misc.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL21pc2MvbWlzYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tabs/dashboard/misc/misc.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tabs/dashboard/misc/misc.component.ts ***!
  \*******************************************************/
/*! exports provided: MiscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscComponent", function() { return MiscComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modals */ "./src/app/modals/index.ts");




let MiscComponent = class MiscComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    getAmount(id) {
        return this.expenses
            .filter(exp => exp.categoryId === this.category.id)
            .filter(t => t.typeid === id)
            .reduce((a, e) => a + e.amount, 0);
    }
    presentModal(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                componentProps: {
                    category: this.category,
                    type: i,
                    curr: this.curr
                }
            });
            return yield modal.present();
        });
    }
};
MiscComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MiscComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MiscComponent.prototype, "expenses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MiscComponent.prototype, "curr", void 0);
MiscComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-misc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./misc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/misc/misc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./misc.component.scss */ "./src/app/tabs/dashboard/misc/misc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], MiscComponent);



/***/ }),

/***/ "./src/app/tabs/dashboard/trans/trans.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/tabs/dashboard/trans/trans.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL3RyYW5zL3RyYW5zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tabs/dashboard/trans/trans.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tabs/dashboard/trans/trans.component.ts ***!
  \*********************************************************/
/*! exports provided: TransComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransComponent", function() { return TransComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modals */ "./src/app/modals/index.ts");




let TransComponent = class TransComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    getAmount(id) {
        return this.expenses
            .filter(exp => exp.categoryId === this.category.id)
            .filter(t => t.typeid === id)
            .reduce((a, e) => a + e.amount, 0);
    }
    presentModal(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                componentProps: {
                    category: this.category,
                    type: i,
                    curr: this.curr
                }
            });
            return yield modal.present();
        });
    }
};
TransComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TransComponent.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TransComponent.prototype, "expenses", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TransComponent.prototype, "curr", void 0);
TransComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trans',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/trans/trans.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trans.component.scss */ "./src/app/tabs/dashboard/trans/trans.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], TransComponent);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map
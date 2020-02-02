(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~income-income-module~profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/expense-modal/expense-modal.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/expense-modal/expense-modal.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ isNew ? 'New Expense' : 'Edit Expense' }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-padding\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <form [formGroup]=\"form\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\" width=\"full\">Date*</ion-label>\n                      <ion-datetime formControlName=\"date\" displayFormat=\"MMM DD, YYYY\" [value]=\"\"></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Category*</ion-label>\n                      <ion-select autocomplete formControlName=\"category\" (ionChange)=\"getTypes($event)\">\n                        <ion-select-option *ngFor=\"let item of categories\" [value]=\"item\">\n                          {{ item.name }}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Type*</ion-label>\n                      <ion-select autocomplete formControlName=\"type\">\n                        <ion-select-option *ngFor=\"let item of types\" [value]=\"item\">{{ item.name }}\n                        </ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Amount*</ion-label>\n                      <ion-input type=\"number\" autocomplete formControlName=\"amount\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Description</ion-label>\n                      <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"description\"></ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                      <ion-button (click)=\"submit()\">Submit</ion-button>\n                      <ion-button (click)=\"dismiss()\" color=\"danger\">Cancel</ion-button>\n                      <ion-button *ngIf=\"!isNew\" (click)=\"delete()\" color=\"danger\" fill=\"outline\">Delete</ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/income-modal/income-modal.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/income-modal/income-modal.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ isNew ? 'New Income' : 'Edit Income' }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-padding\"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <form [formGroup]=\"form\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\" width=\"full\">Date*</ion-label>\n                      <ion-datetime formControlName=\"date\" displayFormat=\"MMM DD, YYYY\" [value]=\"\"></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Type*</ion-label>\n                      <ion-select autocomplete formControlName=\"type\">\n                        <ion-select-option *ngFor=\"let item of types\" [value]=\"item\">{{ item.name }}\n                        </ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Amount*</ion-label>\n                      <ion-input type=\"number\" autocomplete formControlName=\"amount\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Description</ion-label>\n                      <ion-textarea rows=\"6\" cols=\"20\" formControlName=\"description\"></ion-textarea>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                      <ion-button (click)=\"submit()\">Submit</ion-button>\n                      <ion-button (click)=\"dismiss()\" color=\"danger\">Cancel</ion-button>\n                      <ion-button *ngIf=\"!isNew\" (click)=\"delete()\" color=\"danger\" fill=\"outline\">Delete</ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/list-modal/list-modal.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/list-modal/list-modal.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ type.name }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-text>{{ type.description }}</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"items?.length <= 0\">\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-text>There are currently no items on this list.</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"items?.length > 0\">\n      <ion-col>\n        <ion-list>\n            <ion-item *ngFor=\"let item of items\" (click)=\"presentModal(item)\">\n            <ion-text class=\"date-label\" position=\"fixed\">{{ item.date | date: 'MMM dd' }}</ion-text>\n            <ion-label>{{ item.description }}</ion-label>\n            <p>{{ item.amount | currency: curr }}</p>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/user-modal/user-modal.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/user-modal/user-modal.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ !item?.firstname ? 'New Profile' : item.firstname + ' ' + item.lastname}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"dismiss()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngIf=\"isNew\">\n      <ion-col>\n        <div class=\"ion-padding\">\n          <p>Please complete your profile.</p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-content>\n            <form [formGroup]=\"form\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">First Name*</ion-label>\n                      <ion-input type=\"text\" autocomplete formControlName=\"firstname\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Last Name*</ion-label>\n                      <ion-input type=\"text\" autocomplete formControlName=\"lastname\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Currency</ion-label>\n                      <ion-select autocomplete formControlName=\"currency\">\n                        <ion-select-option *ngFor=\"let i of currencies\" [value]=\"i\">{{ i }}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"!isNew\">\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">List View</ion-label>\n                      <ion-select autocomplete formControlName=\"listview\">\n                        <ion-select-option [value]=\"'All'\" selected>All</ion-select-option>\n                        <ion-select-option [value]=\"'Today'\">Today</ion-select-option>\n                        <ion-select-option [value]=\"'Weekly'\">Weekly</ion-select-option>\n                        <ion-select-option [value]=\"'Monthly'\">Monthly</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <div class=\"ion-padding\">\n                      <ion-button (click)=\"submit()\">Submit</ion-button>\n                      &nbsp;\n                      <ion-button (click)=\"dismiss()\" color=\"danger\">Cancel</ion-button>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/modals/expense-modal/expense-modal-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modals/expense-modal/expense-modal-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExpenseModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseModalPageRoutingModule", function() { return ExpenseModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expense_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-modal.page */ "./src/app/modals/expense-modal/expense-modal.page.ts");




const routes = [
    {
        path: '',
        component: _expense_modal_page__WEBPACK_IMPORTED_MODULE_3__["ExpenseModalPage"]
    }
];
let ExpenseModalPageRoutingModule = class ExpenseModalPageRoutingModule {
};
ExpenseModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpenseModalPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/expense-modal/expense-modal.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modals/expense-modal/expense-modal.module.ts ***!
  \**************************************************************/
/*! exports provided: ExpenseModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseModalPageModule", function() { return ExpenseModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _expense_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-modal-routing.module */ "./src/app/modals/expense-modal/expense-modal-routing.module.ts");
/* harmony import */ var _expense_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-modal.page */ "./src/app/modals/expense-modal/expense-modal.page.ts");





let ExpenseModalPageModule = class ExpenseModalPageModule {
};
ExpenseModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _expense_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpenseModalPageRoutingModule"]
        ],
        declarations: [_expense_modal_page__WEBPACK_IMPORTED_MODULE_4__["ExpenseModalPage"]]
    })
], ExpenseModalPageModule);



/***/ }),

/***/ "./src/app/modals/expense-modal/expense-modal.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/modals/expense-modal/expense-modal.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9leHBlbnNlLW1vZGFsL2V4cGVuc2UtbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modals/expense-modal/expense-modal.page.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/expense-modal/expense-modal.page.ts ***!
  \************************************************************/
/*! exports provided: ExpenseModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseModalPage", function() { return ExpenseModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");





let ExpenseModalPage = class ExpenseModalPage {
    constructor(expenseService, modalCtrl, navParams, alertController) {
        this.expenseService = expenseService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.item = this.navParams.get('item');
        this.categories = this.navParams.get('categories');
        this.isNew = !this.item;
        if (!this.isNew) {
            this.getTypes(this.item.categoryId);
        }
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]
            }),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]
            }),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]
            }),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                updateOn: 'blur',
                validators: []
            })
        });
        if (!this.isNew) {
            this.id = this.item.id;
            this.form.patchValue({
                date: this.item.date,
                category: this.getCategory(this.item.categoryId),
                type: this.getType(this.item.typeid),
                amount: this.item.amount,
                description: this.item.description
            });
        }
    }
    submit() {
        if (this.form.valid) {
            this.item = {
                date: this.form.value.date,
                category: this.form.value.category.name,
                categoryId: this.form.value.category.id,
                type: this.form.value.type.name,
                typeid: this.form.value.type.id,
                amount: this.form.value.amount,
                description: this.form.value.description
            };
            if (this.isNew) {
                this.expenseService.add(this.item);
            }
            else {
                this.item.id = this.id;
                this.expenseService.update(this.item);
            }
            this.dismiss();
        }
        else {
            this.presentAlert();
        }
    }
    delete() {
        if (!this.isNew) {
            this.expenseService.delete(this.id);
            this.dismiss();
        }
    }
    getCategory(id) { return this.categories.find(c => c.id === id); }
    getType(id) { return this.types.find(t => t.id === id); }
    getTypes(e) {
        const catID = this.isNew ? e.detail.value.id : e;
        this.categories.map(i => { if (i.id === catID) {
            this.types = i.types;
        } });
    }
    dismiss() { this.modalCtrl.dismiss({ dismissed: true }); }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Incomplete Form',
                message: 'Please complete the required fields.',
                buttons: [{ text: 'Ok' }]
            });
            yield alert.present();
        });
    }
};
ExpenseModalPage.ctorParameters = () => [
    { type: _store__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ExpenseModalPage.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpenseModalPage.prototype, "item", void 0);
ExpenseModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expense-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/expense-modal/expense-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expense-modal.page.scss */ "./src/app/modals/expense-modal/expense-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store__WEBPACK_IMPORTED_MODULE_4__["ExpenseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ExpenseModalPage);



/***/ }),

/***/ "./src/app/modals/income-modal/income-modal-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/income-modal/income-modal-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: IncomeModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeModalPageRoutingModule", function() { return IncomeModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _income_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-modal.page */ "./src/app/modals/income-modal/income-modal.page.ts");




const routes = [
    {
        path: '',
        component: _income_modal_page__WEBPACK_IMPORTED_MODULE_3__["IncomeModalPage"]
    }
];
let IncomeModalPageRoutingModule = class IncomeModalPageRoutingModule {
};
IncomeModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IncomeModalPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/income-modal/income-modal.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modals/income-modal/income-modal.module.ts ***!
  \************************************************************/
/*! exports provided: IncomeModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeModalPageModule", function() { return IncomeModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _income_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-modal-routing.module */ "./src/app/modals/income-modal/income-modal-routing.module.ts");
/* harmony import */ var _income_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-modal.page */ "./src/app/modals/income-modal/income-modal.page.ts");





let IncomeModalPageModule = class IncomeModalPageModule {
};
IncomeModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _income_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncomeModalPageRoutingModule"]
        ],
        declarations: [_income_modal_page__WEBPACK_IMPORTED_MODULE_4__["IncomeModalPage"]]
    })
], IncomeModalPageModule);



/***/ }),

/***/ "./src/app/modals/income-modal/income-modal.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modals/income-modal/income-modal.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9pbmNvbWUtbW9kYWwvaW5jb21lLW1vZGFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modals/income-modal/income-modal.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modals/income-modal/income-modal.page.ts ***!
  \**********************************************************/
/*! exports provided: IncomeModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeModalPage", function() { return IncomeModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");





let IncomeModalPage = class IncomeModalPage {
    constructor(modalCtrl, navParams, incomeService, alertController) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.incomeService = incomeService;
        this.alertController = alertController;
        this.item = this.navParams.get('item');
        this.isNew = !this.item;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            }),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            }),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: []
            })
        });
        if (!this.isNew) {
            this.id = this.item.id;
            this.form.patchValue({
                date: this.item.date,
                type: this.getType(this.item.typeid),
                amount: this.item.amount,
                description: this.item.description
            });
        }
    }
    submit() {
        if (this.form.valid) {
            this.item = {
                date: this.form.value.date,
                type: this.form.value.type.name,
                typeid: this.form.value.type.id,
                amount: this.form.value.amount,
                description: this.form.value.description
            };
            if (this.isNew) {
                this.incomeService.add(this.item);
            }
            else {
                this.item.id = this.id;
                this.incomeService.update(this.item);
            }
            this.dismiss();
        }
        else {
            this.presentAlert();
        }
    }
    delete() {
        if (!this.isNew) {
            this.incomeService.delete(this.id);
            this.dismiss();
        }
    }
    getType(id) { return this.types.find(t => t.id === id); }
    dismiss() { this.modalCtrl.dismiss({ dismissed: true }); }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Incomplete Form',
                message: 'Please complete the required fields.',
                buttons: [{ text: 'Ok' }]
            });
            yield alert.present();
        });
    }
};
IncomeModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_4__["IncomeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], IncomeModalPage.prototype, "types", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomeModalPage.prototype, "item", void 0);
IncomeModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/income-modal/income-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-modal.page.scss */ "./src/app/modals/income-modal/income-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _store__WEBPACK_IMPORTED_MODULE_4__["IncomeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], IncomeModalPage);



/***/ }),

/***/ "./src/app/modals/index.ts":
/*!*********************************!*\
  !*** ./src/app/modals/index.ts ***!
  \*********************************/
/*! exports provided: ExpenseModalPage, ExpenseModalPageModule, IncomeModalPage, IncomeModalPageModule, ListModalPage, ListModalPageModule, UserModalPage, UserModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _expense_modal_expense_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense-modal/expense-modal.page */ "./src/app/modals/expense-modal/expense-modal.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpenseModalPage", function() { return _expense_modal_expense_modal_page__WEBPACK_IMPORTED_MODULE_1__["ExpenseModalPage"]; });

/* harmony import */ var _expense_modal_expense_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense-modal/expense-modal.module */ "./src/app/modals/expense-modal/expense-modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpenseModalPageModule", function() { return _expense_modal_expense_modal_module__WEBPACK_IMPORTED_MODULE_2__["ExpenseModalPageModule"]; });

/* harmony import */ var _income_modal_income_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-modal/income-modal.page */ "./src/app/modals/income-modal/income-modal.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncomeModalPage", function() { return _income_modal_income_modal_page__WEBPACK_IMPORTED_MODULE_3__["IncomeModalPage"]; });

/* harmony import */ var _income_modal_income_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income-modal/income-modal.module */ "./src/app/modals/income-modal/income-modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncomeModalPageModule", function() { return _income_modal_income_modal_module__WEBPACK_IMPORTED_MODULE_4__["IncomeModalPageModule"]; });

/* harmony import */ var _list_modal_list_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-modal/list-modal.page */ "./src/app/modals/list-modal/list-modal.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListModalPage", function() { return _list_modal_list_modal_page__WEBPACK_IMPORTED_MODULE_5__["ListModalPage"]; });

/* harmony import */ var _list_modal_list_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-modal/list-modal.module */ "./src/app/modals/list-modal/list-modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListModalPageModule", function() { return _list_modal_list_modal_module__WEBPACK_IMPORTED_MODULE_6__["ListModalPageModule"]; });

/* harmony import */ var _user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-modal/user-modal.page */ "./src/app/modals/user-modal/user-modal.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModalPage", function() { return _user_modal_user_modal_page__WEBPACK_IMPORTED_MODULE_7__["UserModalPage"]; });

/* harmony import */ var _user_modal_user_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-modal/user-modal.module */ "./src/app/modals/user-modal/user-modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModalPageModule", function() { return _user_modal_user_modal_module__WEBPACK_IMPORTED_MODULE_8__["UserModalPageModule"]; });













/***/ }),

/***/ "./src/app/modals/list-modal/list-modal-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modals/list-modal/list-modal-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ListModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModalPageRoutingModule", function() { return ListModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-modal.page */ "./src/app/modals/list-modal/list-modal.page.ts");




const routes = [
    {
        path: '',
        component: _list_modal_page__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"]
    }
];
let ListModalPageRoutingModule = class ListModalPageRoutingModule {
};
ListModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListModalPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/list-modal/list-modal.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modals/list-modal/list-modal.module.ts ***!
  \********************************************************/
/*! exports provided: ListModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModalPageModule", function() { return ListModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _list_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-modal-routing.module */ "./src/app/modals/list-modal/list-modal-routing.module.ts");
/* harmony import */ var _list_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-modal.page */ "./src/app/modals/list-modal/list-modal.page.ts");





let ListModalPageModule = class ListModalPageModule {
};
ListModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _list_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListModalPageRoutingModule"]
        ],
        declarations: [_list_modal_page__WEBPACK_IMPORTED_MODULE_4__["ListModalPage"]]
    })
], ListModalPageModule);



/***/ }),

/***/ "./src/app/modals/list-modal/list-modal.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modals/list-modal/list-modal.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".date-label {\n  margin-right: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2xpc3QtbW9kYWwvRTpcXFByb2plY3RzXFxkZXYgc2FuZGJveFxcZWFzeWJvb2tzL3NyY1xcYXBwXFxtb2RhbHNcXGxpc3QtbW9kYWxcXGxpc3QtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvbGlzdC1tb2RhbC9saXN0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvbGlzdC1tb2RhbC9saXN0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlLWxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxufSIsIi5kYXRlLWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modals/list-modal/list-modal.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modals/list-modal/list-modal.page.ts ***!
  \******************************************************/
/*! exports provided: ListModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModalPage", function() { return ListModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _expense_modal_expense_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../expense-modal/expense-modal.page */ "./src/app/modals/expense-modal/expense-modal.page.ts");








let ListModalPage = class ListModalPage {
    constructor(store, expenseService, modalController, navParams) {
        this.store = store;
        this.expenseService = expenseService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.category = this.navParams.get('category');
    }
    ngOnInit() {
        this.subs.add(this.store
            .select('category')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(state => state.items))
            .subscribe(items => { this.categories = items; }), this.store
            .select('expenses')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(state => state.items))
            .subscribe(items => {
            this.items = items
                .filter(c => c.categoryId === this.category.id)
                .filter(t => t.typeid === this.type.id);
        }));
    }
    ngOnDestroy() { this.subs.unsubscribe(); }
    presentModal(i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _expense_modal_expense_modal_page__WEBPACK_IMPORTED_MODULE_7__["ExpenseModalPage"],
                componentProps: {
                    item: i,
                    categories: this.categories
                }
            });
            return yield modal.present();
        });
    }
    dismiss() { this.modalController.dismiss({ dismissed: true }); }
};
ListModalPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_6__["ExpenseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListModalPage.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListModalPage.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ListModalPage.prototype, "curr", void 0);
ListModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/list-modal/list-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-modal.page.scss */ "./src/app/modals/list-modal/list-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
        _store__WEBPACK_IMPORTED_MODULE_6__["ExpenseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], ListModalPage);



/***/ }),

/***/ "./src/app/modals/user-modal/currencies.ts":
/*!*************************************************!*\
  !*** ./src/app/modals/user-modal/currencies.ts ***!
  \*************************************************/
/*! exports provided: currencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencies", function() { return currencies; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const currencies = [
    'AED', 'AFN', 'ALL', 'AMD', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
    'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD',
    'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUP', 'CVE', 'CZK',
    'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS',
    'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF',
    'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY',
    'KES', 'KGS', 'KHR', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD',
    'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN',
    'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG',
    'QAR', 'RON', 'RSD', 'RUB', 'RWF',
    'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'STN', 'SYP', 'SZL',
    'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS',
    'UAH', 'UGX', 'USD', 'UYU', 'UZS',
    'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XPF', 'YER', 'ZAR', 'ZMW', 'ZWL'
];


/***/ }),

/***/ "./src/app/modals/user-modal/user-modal-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modals/user-modal/user-modal-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: UserModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalPageRoutingModule", function() { return UserModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-modal.page */ "./src/app/modals/user-modal/user-modal.page.ts");




const routes = [
    {
        path: '',
        component: _user_modal_page__WEBPACK_IMPORTED_MODULE_3__["UserModalPage"]
    }
];
let UserModalPageRoutingModule = class UserModalPageRoutingModule {
};
UserModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserModalPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/user-modal/user-modal.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modals/user-modal/user-modal.module.ts ***!
  \********************************************************/
/*! exports provided: UserModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalPageModule", function() { return UserModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-modal-routing.module */ "./src/app/modals/user-modal/user-modal-routing.module.ts");
/* harmony import */ var _user_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-modal.page */ "./src/app/modals/user-modal/user-modal.page.ts");





let UserModalPageModule = class UserModalPageModule {
};
UserModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _user_modal_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserModalPageRoutingModule"]
        ],
        declarations: [_user_modal_page__WEBPACK_IMPORTED_MODULE_4__["UserModalPage"]]
    })
], UserModalPageModule);



/***/ }),

/***/ "./src/app/modals/user-modal/user-modal.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modals/user-modal/user-modal.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy91c2VyLW1vZGFsL3VzZXItbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modals/user-modal/user-modal.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modals/user-modal/user-modal.page.ts ***!
  \******************************************************/
/*! exports provided: UserModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalPage", function() { return UserModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/app/store/index.ts");
/* harmony import */ var _currencies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currencies */ "./src/app/modals/user-modal/currencies.ts");






let UserModalPage = class UserModalPage {
    constructor(authService, profileService, navParams, modalCtrl, alertController, loadingController) {
        this.authService = authService;
        this.profileService = profileService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.currencies = _currencies__WEBPACK_IMPORTED_MODULE_5__["currencies"];
        this.item = this.navParams.get('item');
        this.isNew = !this.item;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            }),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            }),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: []
            }),
            listview: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: 'blur',
                validators: []
            }),
        });
        if (!this.isNew) {
            this.form.patchValue({
                firstname: this.item.firstname,
                lastname: this.item.lastname,
                currency: this.item.currency,
                listview: this.item.listview,
            });
        }
    }
    submit() {
        if (this.form.valid) {
            const prof = {
                id: this.authService.user.id,
                firstname: this.form.value.firstname,
                lastname: this.form.value.lastname,
                email: this.authService.user.email,
                currency: this.form.value.currency,
                valid: true
            };
            if (this.isNew && this.item === null) {
                prof.listview = 'All';
                this.profileService.addCustom(prof);
            }
            else {
                prof.listview = this.form.value.listview;
                this.profileService.update(prof);
            }
            this.presentLoading();
            this.dismiss();
        }
    }
    dismiss() { this.modalCtrl.dismiss({ dismissed: true }); }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({ duration: 2000 });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Incomplete Form',
                message: 'Please complete the required fields.',
                buttons: [{ text: 'Ok' }]
            });
            yield alert.present();
        });
    }
};
UserModalPage.ctorParameters = () => [
    { type: _store__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _store__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], UserModalPage.prototype, "isNew", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserModalPage.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], UserModalPage.prototype, "email", void 0);
UserModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/user-modal/user-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-modal.page.scss */ "./src/app/modals/user-modal/user-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _store__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], UserModalPage);



/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~income-income-module~profile-profile-module-es2015.js.map
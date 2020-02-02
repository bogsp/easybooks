function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/dashboard.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/dashboard.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"presentModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-segment (ionChange)=\"filterDates($event)\">\n          <ion-segment-button value=\"All\" checked>\n            <ion-label>All</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Today\">\n            <ion-label>Today</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Weekly\">\n            <ion-label>Weekly</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Monthly\">\n            <ion-label>Monthly</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col> -->\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-card class=\"ion-padding\">\n          <ion-card-header>\n            <ion-card-title>Summary</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-label color=\"medium\"><i><small>Total Income</small></i></ion-label>\n              <ion-text>{{ totalIncome | currency: curr }}</ion-text>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"medium\"><i><small>Total Expenses</small></i></ion-label>\n              <ion-text>{{ totalExpenses | currency: curr }}</ion-text>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label color=\"medium\"><i><small>Net Total</small></i></ion-label>\n              <ion-text><strong>{{ totalIncome - totalExpenses | currency: curr }}</strong></ion-text>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[0]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[0]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showHome\"></ion-toggle>\n        </ion-item>\n        <app-house *ngIf=\"showHome\" [category]=\"categories[0]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-house>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[1]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[1]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showLiving\">\n          </ion-toggle>\n        </ion-item>\n        <app-living *ngIf=\"showLiving\" [category]=\"categories[1]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-living>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[2]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[2]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showTrans\"></ion-toggle>\n        </ion-item>\n        <app-trans *ngIf=\"showTrans\" [category]=\"categories[2]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-trans>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[3]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[3]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showEduc\"></ion-toggle>\n        </ion-item>\n        <app-educ *ngIf=\"showEduc\" [category]=\"categories[3]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-educ>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <div *ngIf=\"isLoading\">\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 40%\"></ion-skeleton-text>\n          </div>\n        </div>\n        <ion-item *ngIf=\"!isLoading\" lines=\"none\">\n          <ion-label>{{ categories[4]?.name }}</ion-label>\n          <ion-text>{{ getAmount(categories[4]?.id) | currency: curr }}</ion-text>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"showMisc\"></ion-toggle>\n        </ion-item>\n        <app-misc *ngIf=\"showMisc\" [category]=\"categories[4]\" [expenses]=\"expenses\" [curr]=\"curr\"></app-misc>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/educ/educ.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/educ/educ.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsDashboardEducEducComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/house/house.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/house/house.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsDashboardHouseHouseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/living/living.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/living/living.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsDashboardLivingLivingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/misc/misc.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/misc/misc.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsDashboardMiscMiscComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/trans/trans.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/trans/trans.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsDashboardTransTransComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list class=\"ion-padding\">\n  <ion-item *ngFor=\"let i of category.types\" (click)=\"presentModal(i)\">\n    <ion-label color=\"medium\"><i><small>{{ i.name }}</small></i></ion-label>\n    <p>\n      <ion-text>{{ getAmount(i.id) | currency: curr }}</ion-text>\n    </p>\n  </ion-item>\n</ion-list>\n";
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/dashboard-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/tabs/dashboard/dashboard-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppTabsDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/tabs/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/dashboard.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/tabs/dashboard/dashboard.module.ts ***!
    \****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppTabsDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/tabs/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modals */
    "./src/app/modals/index.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/tabs/dashboard/dashboard.page.ts");
    /* harmony import */


    var _house_house_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./house/house.component */
    "./src/app/tabs/dashboard/house/house.component.ts");
    /* harmony import */


    var _living_living_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./living/living.component */
    "./src/app/tabs/dashboard/living/living.component.ts");
    /* harmony import */


    var _trans_trans_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./trans/trans.component */
    "./src/app/tabs/dashboard/trans/trans.component.ts");
    /* harmony import */


    var _educ_educ_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./educ/educ.component */
    "./src/app/tabs/dashboard/educ/educ.component.ts");
    /* harmony import */


    var _misc_misc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./misc/misc.component */
    "./src/app/tabs/dashboard/misc/misc.component.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardPageRoutingModule"], _modals__WEBPACK_IMPORTED_MODULE_4__["ExpenseModalPageModule"], _modals__WEBPACK_IMPORTED_MODULE_4__["ListModalPageModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"], _house_house_component__WEBPACK_IMPORTED_MODULE_6__["HouseComponent"], _living_living_component__WEBPACK_IMPORTED_MODULE_7__["LivingComponent"], _trans_trans_component__WEBPACK_IMPORTED_MODULE_8__["TransComponent"], _educ_educ_component__WEBPACK_IMPORTED_MODULE_9__["EducComponent"], _misc_misc_component__WEBPACK_IMPORTED_MODULE_10__["MiscComponent"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/dashboard.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/tabs/dashboard/dashboard.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/dashboard.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/tabs/dashboard/dashboard.page.ts ***!
    \**************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppTabsDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modals */
    "./src/app/modals/index.ts");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../store */
    "./src/app/store/index.ts");

    var DashboardPage =
    /*#__PURE__*/
    function () {
      function DashboardPage(store, authService, categoryService, expenseService, incomeService, profileService, loadingController, modalController) {
        _classCallCheck(this, DashboardPage);

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

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subs.add(this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.user.id;
          })).subscribe(function (id) {
            _this.id = id;
          }), this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.item;
          })).subscribe(function (item) {
            if (_this.id && !item) {
              _this.profileService.fetch(_this.id);
            }
          }), this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.curency;
          })).subscribe(function (curency) {
            _this.curr = curency;
          }), this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.isLoading;
          })).subscribe(function (loading) {
            _this.isLoading = loading;

            if (_this.isLoading) {
              _this.presentLoading();
            }
          }), this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.items;
          })).subscribe(function (items) {
            _this.categories = items;
          }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.isLoading;
          })).subscribe(function (loading) {
            _this.isLoading = loading;

            if (_this.isLoading) {
              _this.presentLoading();
            }
          }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.items;
          })).subscribe(function (items) {
            _this.expenses = items;
          }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.total;
          })).subscribe(function (total) {
            _this.totalExpenses = total;
          }), this.store.select('income').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.isLoading;
          })).subscribe(function (loading) {
            _this.isLoading = loading;

            if (_this.isLoading) {
              _this.presentLoading();
            }
          }), this.store.select('income').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.total;
          })).subscribe(function (total) {
            _this.totalIncome = total;
          }));
        }
      }, {
        key: "filterDates",
        value: function filterDates(event) {
          console.log(event.detail.value);
        }
      }, {
        key: "getAmount",
        value: function getAmount(id) {
          return this.expenses.filter(function (exp) {
            return exp.categoryId === id;
          }).reduce(function (a, e) {
            return a + e.amount;
          }, 0);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          // this.expenseService.fetchAll();
          // this.incomeService.fetchAll();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modals__WEBPACK_IMPORTED_MODULE_6__["ExpenseModalPage"],
                      componentProps: {
                        categories: this.categories
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var loading, _ref, role, data;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      duration: 1000
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return loading.onDidDismiss();

                  case 7:
                    _ref = _context2.sent;
                    role = _ref.role;
                    data = _ref.data;

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _store__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _store__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]
      }, {
        type: _store__WEBPACK_IMPORTED_MODULE_7__["ExpenseService"]
      }, {
        type: _store__WEBPACK_IMPORTED_MODULE_7__["IncomeService"]
      }, {
        type: _store__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/tabs/dashboard/dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _store__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _store__WEBPACK_IMPORTED_MODULE_7__["CategoryService"], _store__WEBPACK_IMPORTED_MODULE_7__["ExpenseService"], _store__WEBPACK_IMPORTED_MODULE_7__["IncomeService"], _store__WEBPACK_IMPORTED_MODULE_7__["ProfileService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], DashboardPage);
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/educ/educ.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/tabs/dashboard/educ/educ.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsDashboardEducEducComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2VkdWMvZWR1Yy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/educ/educ.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/tabs/dashboard/educ/educ.component.ts ***!
    \*******************************************************/

  /*! exports provided: EducComponent */

  /***/
  function srcAppTabsDashboardEducEducComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducComponent", function () {
      return EducComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../modals */
    "./src/app/modals/index.ts");

    var EducComponent =
    /*#__PURE__*/
    function () {
      function EducComponent(modalController) {
        _classCallCheck(this, EducComponent);

        this.modalController = modalController;
      }

      _createClass(EducComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAmount",
        value: function getAmount(id) {
          var _this2 = this;

          return this.expenses.filter(function (exp) {
            return exp.categoryId === _this2.category.id;
          }).filter(function (t) {
            return t.typeid === id;
          }).reduce(function (a, e) {
            return a + e.amount;
          }, 0);
        }
      }, {
        key: "presentModal",
        value: function presentModal(i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                      componentProps: {
                        category: this.category,
                        type: i,
                        curr: this.curr
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return EducComponent;
    }();

    EducComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EducComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], EducComponent.prototype, "expenses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], EducComponent.prototype, "curr", void 0);
    EducComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-educ',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./educ.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/educ/educ.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./educ.component.scss */
      "./src/app/tabs/dashboard/educ/educ.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EducComponent);
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/house/house.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/tabs/dashboard/house/house.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsDashboardHouseHouseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2hvdXNlL2hvdXNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/house/house.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/tabs/dashboard/house/house.component.ts ***!
    \*********************************************************/

  /*! exports provided: HouseComponent */

  /***/
  function srcAppTabsDashboardHouseHouseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HouseComponent", function () {
      return HouseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../modals */
    "./src/app/modals/index.ts");

    var HouseComponent =
    /*#__PURE__*/
    function () {
      function HouseComponent(modalController) {
        _classCallCheck(this, HouseComponent);

        this.modalController = modalController;
      }

      _createClass(HouseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAmount",
        value: function getAmount(id) {
          var _this3 = this;

          return this.expenses.filter(function (exp) {
            return exp.categoryId === _this3.category.id;
          }).filter(function (t) {
            return t.typeid === id;
          }).reduce(function (a, e) {
            return a + e.amount;
          }, 0);
        }
      }, {
        key: "presentModal",
        value: function presentModal(i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                      componentProps: {
                        category: this.category,
                        type: i,
                        curr: this.curr
                      }
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return HouseComponent;
    }();

    HouseComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HouseComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], HouseComponent.prototype, "expenses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HouseComponent.prototype, "curr", void 0);
    HouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-house',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./house.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/house/house.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./house.component.scss */
      "./src/app/tabs/dashboard/house/house.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], HouseComponent);
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/living/living.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/tabs/dashboard/living/living.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsDashboardLivingLivingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL2xpdmluZy9saXZpbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/living/living.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/tabs/dashboard/living/living.component.ts ***!
    \***********************************************************/

  /*! exports provided: LivingComponent */

  /***/
  function srcAppTabsDashboardLivingLivingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LivingComponent", function () {
      return LivingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../modals */
    "./src/app/modals/index.ts");

    var LivingComponent =
    /*#__PURE__*/
    function () {
      function LivingComponent(modalController) {
        _classCallCheck(this, LivingComponent);

        this.modalController = modalController;
      }

      _createClass(LivingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAmount",
        value: function getAmount(id) {
          var _this4 = this;

          return this.expenses.filter(function (exp) {
            return exp.categoryId === _this4.category.id;
          }).filter(function (t) {
            return t.typeid === id;
          }).reduce(function (a, e) {
            return a + e.amount;
          }, 0);
        }
      }, {
        key: "presentModal",
        value: function presentModal(i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                      componentProps: {
                        category: this.category,
                        type: i,
                        curr: this.curr
                      }
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return LivingComponent;
    }();

    LivingComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], LivingComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], LivingComponent.prototype, "expenses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], LivingComponent.prototype, "curr", void 0);
    LivingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-living',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./living.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/living/living.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./living.component.scss */
      "./src/app/tabs/dashboard/living/living.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], LivingComponent);
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/misc/misc.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/tabs/dashboard/misc/misc.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsDashboardMiscMiscComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL21pc2MvbWlzYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/misc/misc.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/tabs/dashboard/misc/misc.component.ts ***!
    \*******************************************************/

  /*! exports provided: MiscComponent */

  /***/
  function srcAppTabsDashboardMiscMiscComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscComponent", function () {
      return MiscComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../modals */
    "./src/app/modals/index.ts");

    var MiscComponent =
    /*#__PURE__*/
    function () {
      function MiscComponent(modalController) {
        _classCallCheck(this, MiscComponent);

        this.modalController = modalController;
      }

      _createClass(MiscComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAmount",
        value: function getAmount(id) {
          var _this5 = this;

          return this.expenses.filter(function (exp) {
            return exp.categoryId === _this5.category.id;
          }).filter(function (t) {
            return t.typeid === id;
          }).reduce(function (a, e) {
            return a + e.amount;
          }, 0);
        }
      }, {
        key: "presentModal",
        value: function presentModal(i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalController.create({
                      component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                      componentProps: {
                        category: this.category,
                        type: i,
                        curr: this.curr
                      }
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return MiscComponent;
    }();

    MiscComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], MiscComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], MiscComponent.prototype, "expenses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MiscComponent.prototype, "curr", void 0);
    MiscComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-misc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./misc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/misc/misc.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./misc.component.scss */
      "./src/app/tabs/dashboard/misc/misc.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], MiscComponent);
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/trans/trans.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/tabs/dashboard/trans/trans.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsDashboardTransTransComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvZGFzaGJvYXJkL3RyYW5zL3RyYW5zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/tabs/dashboard/trans/trans.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/tabs/dashboard/trans/trans.component.ts ***!
    \*********************************************************/

  /*! exports provided: TransComponent */

  /***/
  function srcAppTabsDashboardTransTransComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransComponent", function () {
      return TransComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../modals */
    "./src/app/modals/index.ts");

    var TransComponent =
    /*#__PURE__*/
    function () {
      function TransComponent(modalController) {
        _classCallCheck(this, TransComponent);

        this.modalController = modalController;
      }

      _createClass(TransComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAmount",
        value: function getAmount(id) {
          var _this6 = this;

          return this.expenses.filter(function (exp) {
            return exp.categoryId === _this6.category.id;
          }).filter(function (t) {
            return t.typeid === id;
          }).reduce(function (a, e) {
            return a + e.amount;
          }, 0);
        }
      }, {
        key: "presentModal",
        value: function presentModal(i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalController.create({
                      component: _modals__WEBPACK_IMPORTED_MODULE_3__["ListModalPage"],
                      componentProps: {
                        category: this.category,
                        type: i,
                        curr: this.curr
                      }
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return TransComponent;
    }();

    TransComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TransComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], TransComponent.prototype, "expenses", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], TransComponent.prototype, "curr", void 0);
    TransComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trans',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./trans.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/dashboard/trans/trans.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./trans.component.scss */
      "./src/app/tabs/dashboard/trans/trans.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], TransComponent);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map
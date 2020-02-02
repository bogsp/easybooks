function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-income-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/income/income.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/income/income.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsIncomeIncomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Income</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button slot=\"secondary\" (click)=\"presentModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-segment (ionChange)=\"filterDates($event)\">\n          <ion-segment-button value=\"All\" checked>\n            <ion-label>All</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Today\">\n            <ion-label>Today</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Weekly\">\n            <ion-label>Weekly</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Monthly\">\n            <ion-label>Monthly</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col> -->\n      <ion-col size-md=\"4\" offset-md=\"4\">\n        <ion-card class=\"ion-padding\">\n          <ion-card-header>\n            <ion-card-title>Summary</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item lines=\"none\">\n              <ion-label color=\"medium\"><i><small>Total Income</small></i></ion-label>\n              <ion-text>{{ getAmount() | currency: curr }}</ion-text>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-padding\" size-md=\"4\" offset-md=\"4\">\n        <ion-list>\n            <ion-item *ngFor=\"let item of items\" (click)=\"presentModal(item)\">\n              <ion-label position=\"fixed\">{{ item.date | date: 'MMM dd' }}</ion-label>\n              <ion-label>{{ item.type }}</ion-label>\n              <p>{{ item.amount | currency: curr }}</p>\n            </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/income/income-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/tabs/income/income-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: IncomePageRoutingModule */

  /***/
  function srcAppTabsIncomeIncomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePageRoutingModule", function () {
      return IncomePageRoutingModule;
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


    var _income_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./income.page */
    "./src/app/tabs/income/income.page.ts");

    var routes = [{
      path: '',
      component: _income_page__WEBPACK_IMPORTED_MODULE_3__["IncomePage"]
    }];

    var IncomePageRoutingModule = function IncomePageRoutingModule() {
      _classCallCheck(this, IncomePageRoutingModule);
    };

    IncomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IncomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/income/income.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/income/income.module.ts ***!
    \**********************************************/

  /*! exports provided: IncomePageModule */

  /***/
  function srcAppTabsIncomeIncomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePageModule", function () {
      return IncomePageModule;
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


    var _income_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./income-routing.module */
    "./src/app/tabs/income/income-routing.module.ts");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modals */
    "./src/app/modals/index.ts");
    /* harmony import */


    var _income_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./income.page */
    "./src/app/tabs/income/income.page.ts");

    var IncomePageModule = function IncomePageModule() {
      _classCallCheck(this, IncomePageModule);
    };

    IncomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _income_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncomePageRoutingModule"], _modals__WEBPACK_IMPORTED_MODULE_4__["IncomeModalPageModule"]],
      declarations: [_income_page__WEBPACK_IMPORTED_MODULE_5__["IncomePage"]]
    })], IncomePageModule);
    /***/
  },

  /***/
  "./src/app/tabs/income/income.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/tabs/income/income.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsIncomeIncomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvaW5jb21lL2luY29tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/income/income.page.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/income/income.page.ts ***!
    \********************************************/

  /*! exports provided: IncomePage */

  /***/
  function srcAppTabsIncomeIncomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePage", function () {
      return IncomePage;
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


    var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store */
    "./src/app/store/index.ts");
    /* harmony import */


    var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../modals */
    "./src/app/modals/index.ts");

    var IncomePage =
    /*#__PURE__*/
    function () {
      function IncomePage(store, incomeService, loadingController, modalController) {
        _classCallCheck(this, IncomePage);

        this.store = store;
        this.incomeService = incomeService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
      }

      _createClass(IncomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subs.add(this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.curency;
          })).subscribe(function (curency) {
            _this.curr = curency;
          }), this.store.select('income').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.types;
          })).subscribe(function (types) {
            _this.types = types;
          }), this.store.select('income').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.items;
          })).subscribe(function (items) {
            _this.items = items;
          }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) {
            return state.total;
          })).subscribe(function (total) {
            _this.total = total;
          }));
        }
      }, {
        key: "getAmount",
        value: function getAmount(id) {
          if (id) {
            return this.items.filter(function (exp) {
              return exp.typeid === id;
            }).reduce(function (a, e) {
              return a + e.amount;
            }, 0);
          }

          return this.items.reduce(function (a, e) {
            return a + e.amount;
          }, 0);
        }
      }, {
        key: "filterDates",
        value: function filterDates(event) {
          console.log(event.detail.value);
        }
      }, {
        key: "filterArr",
        value: function filterArr(id) {
          return this.items.filter(function (exp) {
            return exp.typeid === id;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "refresh",
        value: function refresh(event) {
          // this.incomeService.fetchAll();
          setTimeout(function () {
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "presentModal",
        value: function presentModal(i) {
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
                      component: _modals__WEBPACK_IMPORTED_MODULE_7__["IncomeModalPage"],
                      componentProps: {
                        item: i,
                        types: this.types
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

      return IncomePage;
    }();

    IncomePage.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _store__WEBPACK_IMPORTED_MODULE_6__["IncomeService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    IncomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./income.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/income/income.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./income.page.scss */
      "./src/app/tabs/income/income.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _store__WEBPACK_IMPORTED_MODULE_6__["IncomeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], IncomePage);
    /***/
  }
}]);
//# sourceMappingURL=income-income-module-es5.js.map
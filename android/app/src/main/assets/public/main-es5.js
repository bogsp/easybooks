function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'tabs',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'tabs',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | tabs-tabs-module */
        [__webpack_require__.e("common"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | auth-auth-module */
        [__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store */
    "./src/app/store/index.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, authService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.authService.isAuth) {
            this.authService.autoLogin();
          }
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _store__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _store__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store */
    "./src/app/store/index.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_11__["appReducers"], {
        metaReducers: _store__WEBPACK_IMPORTED_MODULE_11__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_11__["appEffects"]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_9__["StoreRouterConnectingModule"].forRoot(), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
      }), _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"].enablePersistence(), _angular_fire_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store */
    "./src/app/store/index.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canLoad",
        value: function canLoad(route, segments) {
          if (this.authService.isAuth) {
            return this.authService.isAuth;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _store__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/store/actions/auth.actions.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/actions/auth.actions.ts ***!
    \***********************************************/

  /*! exports provided: ActionTypes, Signup, SignupSuccess, Login, LoginSuccess, AutoLogin, Logout, AuthFailed, ClearError */

  /***/
  function srcAppStoreActionsAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Signup", function () {
      return Signup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupSuccess", function () {
      return SignupSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSuccess", function () {
      return LoginSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoLogin", function () {
      return AutoLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logout", function () {
      return Logout;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthFailed", function () {
      return AuthFailed;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClearError", function () {
      return ClearError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["SIGNUP"] = "[Auth] Signup";
      ActionTypes["SIGNUP_SUCCESS"] = "[Auth] Signup Success";
      ActionTypes["LOGIN"] = "[Auth] Login";
      ActionTypes["LOGIN_SUCCESS"] = "[Auth] Login Success";
      ActionTypes["AUTO_LOGIN"] = "[Auth] Auto Login";
      ActionTypes["LOGOUT"] = "[Auth] Logout";
      ActionTypes["AUTH_FAILED"] = "[Auth] Auth Failed";
      ActionTypes["CLEAR_ERROR"] = "[Auth] Clear Error";
    })(ActionTypes || (ActionTypes = {}));

    var Signup = function Signup(payload) {
      _classCallCheck(this, Signup);

      this.payload = payload;
      this.type = ActionTypes.SIGNUP;
    };

    var SignupSuccess = function SignupSuccess(payload) {
      _classCallCheck(this, SignupSuccess);

      this.payload = payload;
      this.type = ActionTypes.SIGNUP_SUCCESS;
    };

    var Login = function Login(payload) {
      _classCallCheck(this, Login);

      this.payload = payload;
      this.type = ActionTypes.LOGIN;
    };

    var LoginSuccess = function LoginSuccess(payload) {
      _classCallCheck(this, LoginSuccess);

      this.payload = payload;
      this.type = ActionTypes.LOGIN_SUCCESS;
    };

    var AutoLogin = function AutoLogin() {
      _classCallCheck(this, AutoLogin);

      this.type = ActionTypes.AUTO_LOGIN;
    };

    var Logout = function Logout() {
      _classCallCheck(this, Logout);

      this.type = ActionTypes.LOGOUT;
    };

    var AuthFailed = function AuthFailed(payload) {
      _classCallCheck(this, AuthFailed);

      this.payload = payload;
      this.type = ActionTypes.AUTH_FAILED;
    };

    var ClearError = function ClearError() {
      _classCallCheck(this, ClearError);

      this.type = ActionTypes.CLEAR_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/category.actions.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/actions/category.actions.ts ***!
    \***************************************************/

  /*! exports provided: ActionTypes, Fetch, Set, SetType, FetchAll, SetAll, FetchAllTypes, SetAllTypes, Add, AddCustom, AddType, Update, UpdateType, Delete, DeleteType, StartEdit, StopEdit, Error, ClearError */

  /***/
  function srcAppStoreActionsCategoryActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fetch", function () {
      return Fetch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Set", function () {
      return Set;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetType", function () {
      return SetType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchAll", function () {
      return FetchAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAll", function () {
      return SetAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchAllTypes", function () {
      return FetchAllTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAllTypes", function () {
      return SetAllTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Add", function () {
      return Add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustom", function () {
      return AddCustom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddType", function () {
      return AddType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Update", function () {
      return Update;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateType", function () {
      return UpdateType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Delete", function () {
      return Delete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteType", function () {
      return DeleteType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartEdit", function () {
      return StartEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopEdit", function () {
      return StopEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error", function () {
      return Error;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClearError", function () {
      return ClearError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["FETCH"] = "[Category] Fetch";
      ActionTypes["SET"] = "[Category] Set";
      ActionTypes["SET_TYPE"] = "[Category] Set Type";
      ActionTypes["FETCH_ALL"] = "[Category] Fetch All";
      ActionTypes["SET_ALL"] = "[Category] Set All";
      ActionTypes["FETCH_ALL_TYPES"] = "[Category] Fetch All Types";
      ActionTypes["SET_ALL_TYPES"] = "[Category] Set All Types";
      ActionTypes["ADD"] = "[Category] Add";
      ActionTypes["ADD_CUSTOM"] = "[Category] Add Custom";
      ActionTypes["ADD_TYPE"] = "[Category] Add Type";
      ActionTypes["UPDATE"] = "[Category] Update";
      ActionTypes["UPDATE_TYPE"] = "[Category] Update Type";
      ActionTypes["DELETE"] = "[Category] Delete";
      ActionTypes["DELETE_TYPE"] = "[Category] Delete Type";
      ActionTypes["START_EDIT"] = "[Category] Start Edit";
      ActionTypes["STOP_EDIT"] = "[Category] Stop Edit";
      ActionTypes["ERROR"] = "[Category] Error";
      ActionTypes["CLEAR_ERROR"] = "[Category] Clear Error";
    })(ActionTypes || (ActionTypes = {}));

    var Fetch = function Fetch(payload) {
      _classCallCheck(this, Fetch);

      this.payload = payload;
      this.type = ActionTypes.FETCH;
    };

    var Set = function Set(payload) {
      _classCallCheck(this, Set);

      this.payload = payload;
      this.type = ActionTypes.SET;
    };

    var SetType = function SetType(payload) {
      _classCallCheck(this, SetType);

      this.payload = payload;
      this.type = ActionTypes.SET_TYPE;
    };

    var FetchAll = function FetchAll() {
      _classCallCheck(this, FetchAll);

      this.type = ActionTypes.FETCH_ALL;
    };

    var SetAll = function SetAll(payload) {
      _classCallCheck(this, SetAll);

      this.payload = payload;
      this.type = ActionTypes.SET_ALL;
    };

    var FetchAllTypes = function FetchAllTypes(payload) {
      _classCallCheck(this, FetchAllTypes);

      this.payload = payload;
      this.type = ActionTypes.FETCH_ALL_TYPES;
    };

    var SetAllTypes = function SetAllTypes(payload) {
      _classCallCheck(this, SetAllTypes);

      this.payload = payload;
      this.type = ActionTypes.SET_ALL_TYPES;
    };

    var Add = function Add(payload) {
      _classCallCheck(this, Add);

      this.payload = payload;
      this.type = ActionTypes.ADD;
    };

    var AddCustom = function AddCustom(payload) {
      _classCallCheck(this, AddCustom);

      this.payload = payload;
      this.type = ActionTypes.ADD_CUSTOM;
    };

    var AddType = function AddType(payload) {
      _classCallCheck(this, AddType);

      this.payload = payload;
      this.type = ActionTypes.ADD_TYPE;
    };

    var Update = function Update(payload) {
      _classCallCheck(this, Update);

      this.payload = payload;
      this.type = ActionTypes.UPDATE;
    };

    var UpdateType = function UpdateType(payload) {
      _classCallCheck(this, UpdateType);

      this.payload = payload;
      this.type = ActionTypes.UPDATE_TYPE;
    };

    var Delete = function Delete(payload) {
      _classCallCheck(this, Delete);

      this.payload = payload;
      this.type = ActionTypes.DELETE;
    };

    var DeleteType = function DeleteType(payload) {
      _classCallCheck(this, DeleteType);

      this.payload = payload;
      this.type = ActionTypes.DELETE_TYPE;
    };

    var StartEdit = function StartEdit() {
      _classCallCheck(this, StartEdit);

      this.type = ActionTypes.START_EDIT;
    };

    var StopEdit = function StopEdit() {
      _classCallCheck(this, StopEdit);

      this.type = ActionTypes.STOP_EDIT;
    };

    var Error = function Error(payload) {
      _classCallCheck(this, Error);

      this.payload = payload;
      this.type = ActionTypes.ERROR;
    };

    var ClearError = function ClearError() {
      _classCallCheck(this, ClearError);

      this.type = ActionTypes.CLEAR_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/expense.actions.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/actions/expense.actions.ts ***!
    \**************************************************/

  /*! exports provided: ActionTypes, Fetch, Set, FetchAll, SetAll, Add, AddCustom, Update, Delete, StartEdit, StopEdit, Error, ClearError */

  /***/
  function srcAppStoreActionsExpenseActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fetch", function () {
      return Fetch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Set", function () {
      return Set;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchAll", function () {
      return FetchAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAll", function () {
      return SetAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Add", function () {
      return Add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustom", function () {
      return AddCustom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Update", function () {
      return Update;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Delete", function () {
      return Delete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartEdit", function () {
      return StartEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopEdit", function () {
      return StopEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error", function () {
      return Error;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClearError", function () {
      return ClearError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["FETCH"] = "[Expense] Fetch";
      ActionTypes["SET"] = "[Expense] Set";
      ActionTypes["FETCH_ALL"] = "[Expense] Fetch All";
      ActionTypes["SET_ALL"] = "[Expense] Set All";
      ActionTypes["ADD"] = "[Expense] Add";
      ActionTypes["ADD_CUSTOM"] = "[Expense] Add Custom";
      ActionTypes["UPDATE"] = "[Expense] Update";
      ActionTypes["DELETE"] = "[Expense] Delete";
      ActionTypes["START_EDIT"] = "[Expense] Start Edit";
      ActionTypes["STOP_EDIT"] = "[Expense] Stop Edit";
      ActionTypes["ERROR"] = "[Expense] Error";
      ActionTypes["CLEAR_ERROR"] = "[Expense] Clear Error";
    })(ActionTypes || (ActionTypes = {}));

    var Fetch = function Fetch(payload) {
      _classCallCheck(this, Fetch);

      this.payload = payload;
      this.type = ActionTypes.FETCH;
    };

    var Set = function Set(payload) {
      _classCallCheck(this, Set);

      this.payload = payload;
      this.type = ActionTypes.SET;
    };

    var FetchAll = function FetchAll(payload) {
      _classCallCheck(this, FetchAll);

      this.payload = payload;
      this.type = ActionTypes.FETCH_ALL;
    };

    var SetAll = function SetAll(payload) {
      _classCallCheck(this, SetAll);

      this.payload = payload;
      this.type = ActionTypes.SET_ALL;
    };

    var Add = function Add(payload) {
      _classCallCheck(this, Add);

      this.payload = payload;
      this.type = ActionTypes.ADD;
    };

    var AddCustom = function AddCustom(payload) {
      _classCallCheck(this, AddCustom);

      this.payload = payload;
      this.type = ActionTypes.ADD_CUSTOM;
    };

    var Update = function Update(payload) {
      _classCallCheck(this, Update);

      this.payload = payload;
      this.type = ActionTypes.UPDATE;
    };

    var Delete = function Delete(payload) {
      _classCallCheck(this, Delete);

      this.payload = payload;
      this.type = ActionTypes.DELETE;
    };

    var StartEdit = function StartEdit() {
      _classCallCheck(this, StartEdit);

      this.type = ActionTypes.START_EDIT;
    };

    var StopEdit = function StopEdit() {
      _classCallCheck(this, StopEdit);

      this.type = ActionTypes.STOP_EDIT;
    };

    var Error = function Error(payload) {
      _classCallCheck(this, Error);

      this.payload = payload;
      this.type = ActionTypes.ERROR;
    };

    var ClearError = function ClearError() {
      _classCallCheck(this, ClearError);

      this.type = ActionTypes.CLEAR_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/income.actions.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/actions/income.actions.ts ***!
    \*************************************************/

  /*! exports provided: ActionTypes, Fetch, Set, FetchAll, SetAll, Add, AddCustom, Update, Delete, StartEdit, StopEdit, Error, ClearError */

  /***/
  function srcAppStoreActionsIncomeActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fetch", function () {
      return Fetch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Set", function () {
      return Set;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchAll", function () {
      return FetchAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAll", function () {
      return SetAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Add", function () {
      return Add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustom", function () {
      return AddCustom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Update", function () {
      return Update;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Delete", function () {
      return Delete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartEdit", function () {
      return StartEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopEdit", function () {
      return StopEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error", function () {
      return Error;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClearError", function () {
      return ClearError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["FETCH"] = "[Income] Fetch";
      ActionTypes["SET"] = "[Income] Set";
      ActionTypes["FETCH_ALL"] = "[Income] Fetch All";
      ActionTypes["SET_ALL"] = "[Income] Set All";
      ActionTypes["ADD"] = "[Income] Add";
      ActionTypes["ADD_CUSTOM"] = "[Income] Add Custom";
      ActionTypes["UPDATE"] = "[Income] Update";
      ActionTypes["DELETE"] = "[Income] Delete";
      ActionTypes["START_EDIT"] = "[Income] Start Edit";
      ActionTypes["STOP_EDIT"] = "[Income] Stop Edit";
      ActionTypes["ERROR"] = "[Income] Error";
      ActionTypes["CLEAR_ERROR"] = "[Income] Clear Error";
    })(ActionTypes || (ActionTypes = {}));

    var Fetch = function Fetch(payload) {
      _classCallCheck(this, Fetch);

      this.payload = payload;
      this.type = ActionTypes.FETCH;
    };

    var Set = function Set(payload) {
      _classCallCheck(this, Set);

      this.payload = payload;
      this.type = ActionTypes.SET;
    };

    var FetchAll = function FetchAll(payload) {
      _classCallCheck(this, FetchAll);

      this.payload = payload;
      this.type = ActionTypes.FETCH_ALL;
    };

    var SetAll = function SetAll(payload) {
      _classCallCheck(this, SetAll);

      this.payload = payload;
      this.type = ActionTypes.SET_ALL;
    };

    var Add = function Add(payload) {
      _classCallCheck(this, Add);

      this.payload = payload;
      this.type = ActionTypes.ADD;
    };

    var AddCustom = function AddCustom(payload) {
      _classCallCheck(this, AddCustom);

      this.payload = payload;
      this.type = ActionTypes.ADD_CUSTOM;
    };

    var Update = function Update(payload) {
      _classCallCheck(this, Update);

      this.payload = payload;
      this.type = ActionTypes.UPDATE;
    };

    var Delete = function Delete(payload) {
      _classCallCheck(this, Delete);

      this.payload = payload;
      this.type = ActionTypes.DELETE;
    };

    var StartEdit = function StartEdit() {
      _classCallCheck(this, StartEdit);

      this.type = ActionTypes.START_EDIT;
    };

    var StopEdit = function StopEdit() {
      _classCallCheck(this, StopEdit);

      this.type = ActionTypes.STOP_EDIT;
    };

    var Error = function Error(payload) {
      _classCallCheck(this, Error);

      this.payload = payload;
      this.type = ActionTypes.ERROR;
    };

    var ClearError = function ClearError() {
      _classCallCheck(this, ClearError);

      this.type = ActionTypes.CLEAR_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/profile.actions.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/actions/profile.actions.ts ***!
    \**************************************************/

  /*! exports provided: ActionTypes, Fetch, Set, FetchAll, SetAll, Add, AddCustom, Update, Delete, StartEdit, StopEdit, Error, ClearError */

  /***/
  function srcAppStoreActionsProfileActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Fetch", function () {
      return Fetch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Set", function () {
      return Set;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchAll", function () {
      return FetchAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetAll", function () {
      return SetAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Add", function () {
      return Add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCustom", function () {
      return AddCustom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Update", function () {
      return Update;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Delete", function () {
      return Delete;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartEdit", function () {
      return StartEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StopEdit", function () {
      return StopEdit;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error", function () {
      return Error;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClearError", function () {
      return ClearError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["FETCH"] = "[Profile] Fetch";
      ActionTypes["SET"] = "[Profile] Set";
      ActionTypes["FETCH_ALL"] = "[Profile] Fetch All";
      ActionTypes["SET_ALL"] = "[Profile] Set All";
      ActionTypes["ADD"] = "[Profile] Add";
      ActionTypes["ADD_CUSTOM"] = "[Profile] Add Custom";
      ActionTypes["UPDATE"] = "[Profile] Update";
      ActionTypes["DELETE"] = "[Profile] Delete";
      ActionTypes["START_EDIT"] = "[Profile] Start Edit";
      ActionTypes["STOP_EDIT"] = "[Profile] Stop Edit";
      ActionTypes["ERROR"] = "[Profile] Error";
      ActionTypes["CLEAR_ERROR"] = "[Profile] Clear Error";
    })(ActionTypes || (ActionTypes = {}));

    var Fetch = function Fetch(payload) {
      _classCallCheck(this, Fetch);

      this.payload = payload;
      this.type = ActionTypes.FETCH;
    };

    var Set = function Set(payload) {
      _classCallCheck(this, Set);

      this.payload = payload;
      this.type = ActionTypes.SET;
    };

    var FetchAll = function FetchAll() {
      _classCallCheck(this, FetchAll);

      this.type = ActionTypes.FETCH_ALL;
    };

    var SetAll = function SetAll(payload) {
      _classCallCheck(this, SetAll);

      this.payload = payload;
      this.type = ActionTypes.SET_ALL;
    };

    var Add = function Add(payload) {
      _classCallCheck(this, Add);

      this.payload = payload;
      this.type = ActionTypes.ADD;
    };

    var AddCustom = function AddCustom(payload) {
      _classCallCheck(this, AddCustom);

      this.payload = payload;
      this.type = ActionTypes.ADD_CUSTOM;
    };

    var Update = function Update(payload) {
      _classCallCheck(this, Update);

      this.payload = payload;
      this.type = ActionTypes.UPDATE;
    };

    var Delete = function Delete(payload) {
      _classCallCheck(this, Delete);

      this.payload = payload;
      this.type = ActionTypes.DELETE;
    };

    var StartEdit = function StartEdit() {
      _classCallCheck(this, StartEdit);

      this.type = ActionTypes.START_EDIT;
    };

    var StopEdit = function StopEdit() {
      _classCallCheck(this, StopEdit);

      this.type = ActionTypes.STOP_EDIT;
    };

    var Error = function Error(payload) {
      _classCallCheck(this, Error);

      this.payload = payload;
      this.type = ActionTypes.ERROR;
    };

    var ClearError = function ClearError() {
      _classCallCheck(this, ClearError);

      this.type = ActionTypes.CLEAR_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/store/actions/settings.actions.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/actions/settings.actions.ts ***!
    \***************************************************/

  /*! exports provided: ActionTypes, FetchCurrency, SetCurrency, FetchListview, SetListview */

  /***/
  function srcAppStoreActionsSettingsActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionTypes", function () {
      return ActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchCurrency", function () {
      return FetchCurrency;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetCurrency", function () {
      return SetCurrency;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FetchListview", function () {
      return FetchListview;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetListview", function () {
      return SetListview;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionTypes;

    (function (ActionTypes) {
      ActionTypes["FETCH_CURRENCY"] = "[Settings] Fetch Currency";
      ActionTypes["SET_CURRENCY"] = "[Settings] Set Currency";
      ActionTypes["FETCH_LISTVIEW"] = "[Settings] Fetch Listview";
      ActionTypes["SET_LISTVIEW"] = "[Settings] Set Listview";
    })(ActionTypes || (ActionTypes = {}));

    var FetchCurrency = function FetchCurrency() {
      _classCallCheck(this, FetchCurrency);

      this.type = ActionTypes.FETCH_CURRENCY;
    };

    var SetCurrency = function SetCurrency(payload) {
      _classCallCheck(this, SetCurrency);

      this.payload = payload;
      this.type = ActionTypes.SET_CURRENCY;
    };

    var FetchListview = function FetchListview() {
      _classCallCheck(this, FetchListview);

      this.type = ActionTypes.FETCH_LISTVIEW;
    };

    var SetListview = function SetListview(payload) {
      _classCallCheck(this, SetListview);

      this.payload = payload;
      this.type = ActionTypes.SET_LISTVIEW;
    };
    /***/

  },

  /***/
  "./src/app/store/effects/auth.effects.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/effects/auth.effects.ts ***!
    \***********************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppStoreEffectsAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/store/actions/auth.actions.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../models */
    "./src/app/store/models/index.ts");

    var storeLocalData = function storeLocalData(email, userId, token) {
      var user = new _models__WEBPACK_IMPORTED_MODULE_8__["User"](email, userId, token);
      localStorage.setItem('userData', JSON.stringify(user));
    };

    var handleError = function handleError(err) {
      var errorRes = {
        header: 'Error!',
        message: 'An unknown error occured!'
      };

      if (err.code) {
        switch (err.code) {
          case 'no-user-data':
            errorRes = {
              header: 'Auto Login Failed',
              message: 'No user data found.'
            };
            break;

          case 'auto-login-failed':
            errorRes = {
              header: 'Auto Login Failed',
              message: 'Unable to login automatically.'
            };
            break;

          case 'auth/user-not-found':
            errorRes = {
              header: 'Unregistered User',
              message: 'Your account does not exist.'
            };
            break;

          case 'auth/email-already-in-use':
            errorRes = {
              header: 'Account Exists',
              message: 'You already have an existing account.'
            };
            break;

          case 'auth/invalid-email':
            errorRes = {
              header: 'Invalid Email',
              message: 'The email you entered is incorrect.'
            };
            break;

          case 'auth/wrong-password':
            errorRes = {
              header: 'Incorrect Password',
              message: 'The password you entered is incorrect.'
            };
            break;
        }
      }

      return errorRes;
    };

    var AuthEffects = function AuthEffects(actions$, router, afAuth, db) {
      var _this2 = this;

      _classCallCheck(this, AuthEffects);

      this.actions$ = actions$;
      this.router = router;
      this.afAuth = afAuth;
      this.db = db;
      this.signup = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].SIGNUP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", this.afAuth.auth.createUserWithEmailAndPassword(action.payload.email, action.payload.password).then(function (res) {
                    storeLocalData(res.user.email, res.user.uid, res.user.refreshToken);
                    return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["SignupSuccess"]({
                      email: res.user.email,
                      userId: res.user.uid,
                      token: res.user.refreshToken,
                      redirect: true
                    });
                  }).catch(function (err) {
                    return {
                      type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].AUTH_FAILED,
                      payload: handleError(err)
                    };
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      }));
      this.signupSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].SIGNUP_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
        _this2.router.navigate(['tabs', 'profile']);
      }));
      this.login = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", this.afAuth.auth.signInWithEmailAndPassword(action.payload.email, action.payload.password).then(function (res) {
                    storeLocalData(res.user.email, res.user.uid, res.user.refreshToken);
                    return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["LoginSuccess"]({
                      email: res.user.email,
                      userId: res.user.uid,
                      token: res.user.refreshToken,
                      redirect: true
                    });
                  }).catch(function (err) {
                    return {
                      type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].AUTH_FAILED,
                      payload: handleError(err)
                    };
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      }));
      this.loginSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
        _this2.router.navigate(['tabs', 'dashboard']);
      }));
      this.autoLogin = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].AUTO_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
        var userData = JSON.parse(localStorage.getItem('userData'));
        var err = {
          code: 'no-user-data'
        };

        if (!userData) {
          return {
            type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].AUTH_FAILED,
            payload: handleError(err)
          };
        }

        var loadedUser = new _models__WEBPACK_IMPORTED_MODULE_8__["User"](userData.email, userData.id, userData._token);

        if (loadedUser.token) {
          return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["LoginSuccess"]({
            email: loadedUser.email,
            userId: loadedUser.id,
            token: loadedUser.token,
            redirect: false
          });
        }

        err = {
          code: 'auto-login-failed'
        };
        return {
          type: _actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].AUTH_FAILED,
          payload: handleError(err)
        };
      }));
      this.logout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].LOGOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
        _this2.afAuth.auth.signOut().then(function () {
          _this2.db.firestore.terminate();

          localStorage.removeItem('userData');

          _this2.router.navigate(['auth']);
        });
      }));
      this.authFailed = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["ActionTypes"].AUTH_FAILED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (err) {
        handleError(err);

        _this2.router.navigate(['auth']);
      }));
    };

    AuthEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthEffects.prototype, "signup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthEffects.prototype, "signupSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthEffects.prototype, "login", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthEffects.prototype, "loginSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthEffects.prototype, "autoLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthEffects.prototype, "logout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AuthEffects.prototype, "authFailed", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])], AuthEffects);
    /***/
  },

  /***/
  "./src/app/store/effects/category.effects.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/effects/category.effects.ts ***!
    \***************************************************/

  /*! exports provided: CategoryEffects */

  /***/
  function srcAppStoreEffectsCategoryEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryEffects", function () {
      return CategoryEffects;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/category.actions */
    "./src/app/store/actions/category.actions.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/store/services/data.service.ts");

    var handleError = function handleError(err) {
      console.log(err);
      var header = 'Error!';
      var message = 'An unknown error occured!';
      return {
        header: header,
        message: message
      };
    };

    var CategoryEffects = function CategoryEffects(actions$, dataService) {
      var _this3 = this;

      _classCallCheck(this, CategoryEffects);

      this.actions$ = actions$;
      this.dataService = dataService;
      this.feature = 'categories';
      this.sub = 'types';
      this.fetchAll = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH_ALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
        return _this3.dataService.fetchAll(_this3.feature).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["SetAll"](items.sort(function (a, b) {
            return a.index - b.index;
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.fetchAllTypes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH_ALL_TYPES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.fetchAll(_this3.sub, action.payload).pipe( // tap((items: Types[]) => console.log(items)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["SetAllTypes"]({
            id: action.payload,
            types: _toConsumableArray(items).sort(function (a, b) {
              return a.index - b.index;
            })
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.fetch = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.fetchItem(_this3.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.add = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.addItem(_this3.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.addType = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD_TYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.addItem(_this3.sub, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["SetType"]({
            id: action.payload.id,
            types: action.payload.item
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.addCustom = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD_CUSTOM), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.addCustomItem(_this3.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.update = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.updateItem(_this3.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.updateType = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].UPDATE_TYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.updateItem(_this3.sub, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["SetType"]({
            id: action.payload.id,
            types: action.payload.item
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.delete = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.deleteItem(_this3.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.deleteType = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE_TYPE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this3.dataService.deleteItem(_this3.sub, action.payload.key, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
    };

    CategoryEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "fetchAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "fetchAllTypes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "fetch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "addType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "addCustom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "update", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "updateType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoryEffects.prototype, "deleteType", void 0);
    CategoryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], CategoryEffects);
    /***/
  },

  /***/
  "./src/app/store/effects/expense.effects.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/effects/expense.effects.ts ***!
    \**************************************************/

  /*! exports provided: ExpenseEffects */

  /***/
  function srcAppStoreEffectsExpenseEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseEffects", function () {
      return ExpenseEffects;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/expense.actions */
    "./src/app/store/actions/expense.actions.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/store/services/data.service.ts");

    var handleError = function handleError(err) {
      console.log(err);
      var header = 'Error!';
      var message = 'An unknown error occured!';
      return {
        header: header,
        message: message
      };
    };

    var ExpenseEffects = function ExpenseEffects(actions$, dataService) {
      var _this4 = this;

      _classCallCheck(this, ExpenseEffects);

      this.actions$ = actions$;
      this.dataService = dataService;
      this.feature = 'expenses';
      this.fetchAll = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH_ALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this4.dataService.fetchAll(_this4.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
          return new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["SetAll"](items.sort(function (a, b) {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.fetch = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this4.dataService.fetchItem(_this4.feature, action.payload.key, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
          return new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.add = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this4.dataService.addItem(_this4.feature, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload.item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.addCustom = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD_CUSTOM), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this4.dataService.addCustomItem(_this4.feature, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload.item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.update = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this4.dataService.updateItem(_this4.feature, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload.item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.delete = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_expense_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this4.dataService.deleteItem(_this4.feature, action.payload.key, action.payload.id);
      }));
    };

    ExpenseEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpenseEffects.prototype, "fetchAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpenseEffects.prototype, "fetch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpenseEffects.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpenseEffects.prototype, "addCustom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpenseEffects.prototype, "update", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ExpenseEffects.prototype, "delete", void 0);
    ExpenseEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], ExpenseEffects);
    /***/
  },

  /***/
  "./src/app/store/effects/income.effects.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/effects/income.effects.ts ***!
    \*************************************************/

  /*! exports provided: IncomeEffects */

  /***/
  function srcAppStoreEffectsIncomeEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeEffects", function () {
      return IncomeEffects;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/income.actions */
    "./src/app/store/actions/income.actions.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/store/services/data.service.ts");

    var handleError = function handleError(err) {
      console.log(err);
      var header = 'Error!';
      var message = 'An unknown error occured!';
      return {
        header: header,
        message: message
      };
    };

    var IncomeEffects = function IncomeEffects(actions$, dataService) {
      var _this5 = this;

      _classCallCheck(this, IncomeEffects);

      this.actions$ = actions$;
      this.dataService = dataService;
      this.feature = 'income';
      this.fetchAll = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH_ALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this5.dataService.fetchAll(_this5.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
          return new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["SetAll"](items.sort(function (a, b) {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
          }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.fetch = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this5.dataService.fetchItem(_this5.feature, action.payload.key, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
          return new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.add = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this5.dataService.addItem(_this5.feature, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload.item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.addCustom = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD_CUSTOM), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this5.dataService.addCustomItem(_this5.feature, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload.item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.update = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this5.dataService.updateItem(_this5.feature, action.payload.item, action.payload.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload.item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.delete = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
        return _this5.dataService.deleteItem(_this5.feature, action.payload.key, action.payload.id);
      }));
    };

    IncomeEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IncomeEffects.prototype, "fetchAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IncomeEffects.prototype, "fetch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IncomeEffects.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IncomeEffects.prototype, "addCustom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IncomeEffects.prototype, "update", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
      dispatch: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IncomeEffects.prototype, "delete", void 0);
    IncomeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], IncomeEffects);
    /***/
  },

  /***/
  "./src/app/store/effects/index.ts":
  /*!****************************************!*\
    !*** ./src/app/store/effects/index.ts ***!
    \****************************************/

  /*! exports provided: appEffects */

  /***/
  function srcAppStoreEffectsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appEffects", function () {
      return appEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.effects */
    "./src/app/store/effects/auth.effects.ts");
    /* harmony import */


    var _expense_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./expense.effects */
    "./src/app/store/effects/expense.effects.ts");
    /* harmony import */


    var _income_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./income.effects */
    "./src/app/store/effects/income.effects.ts");
    /* harmony import */


    var _profile_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile.effects */
    "./src/app/store/effects/profile.effects.ts");
    /* harmony import */


    var _category_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category.effects */
    "./src/app/store/effects/category.effects.ts");

    var appEffects = [_auth_effects__WEBPACK_IMPORTED_MODULE_1__["AuthEffects"], _category_effects__WEBPACK_IMPORTED_MODULE_5__["CategoryEffects"], _expense_effects__WEBPACK_IMPORTED_MODULE_2__["ExpenseEffects"], _income_effects__WEBPACK_IMPORTED_MODULE_3__["IncomeEffects"], _profile_effects__WEBPACK_IMPORTED_MODULE_4__["ProfileEffects"]];
    /***/
  },

  /***/
  "./src/app/store/effects/profile.effects.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/effects/profile.effects.ts ***!
    \**************************************************/

  /*! exports provided: ProfileEffects */

  /***/
  function srcAppStoreEffectsProfileEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileEffects", function () {
      return ProfileEffects;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/profile.actions */
    "./src/app/store/actions/profile.actions.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/store/services/data.service.ts");

    var handleError = function handleError(err) {
      console.log(err);
      var header = 'Error!';
      var message = 'An unknown error occured!';
      return {
        header: header,
        message: message
      };
    };

    var ProfileEffects = function ProfileEffects(actions$, dataService) {
      var _this6 = this;

      _classCallCheck(this, ProfileEffects);

      this.actions$ = actions$;
      this.dataService = dataService;
      this.feature = 'profiles';
      this.fetchAll = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH_ALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
        return _this6.dataService.fetchAll(_this6.feature).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) {
          return new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["SetAll"](items);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.fetch = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].FETCH), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this6.dataService.fetchItem(_this6.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (item) {
          return new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.add = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this6.dataService.addItem(_this6.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.addCustom = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].ADD_CUSTOM), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this6.dataService.addCustomItem(_this6.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.update = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].UPDATE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this6.dataService.updateItem(_this6.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Set"](action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
      this.delete = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
        return _this6.dataService.deleteItem(_this6.feature, action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Error"](handleError(err)));
        }));
      }));
    };

    ProfileEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfileEffects.prototype, "fetchAll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfileEffects.prototype, "fetch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfileEffects.prototype, "add", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfileEffects.prototype, "addCustom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfileEffects.prototype, "update", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProfileEffects.prototype, "delete", void 0);
    ProfileEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])], ProfileEffects);
    /***/
  },

  /***/
  "./src/app/store/index.ts":
  /*!********************************!*\
    !*** ./src/app/store/index.ts ***!
    \********************************/

  /*! exports provided: appEffects, appReducers, AuthService, CategoryService, DataService, ExpenseService, IncomeService, metaReducers, ProfileService, SettingsService */

  /***/
  function srcAppStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./effects */
    "./src/app/store/effects/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "appEffects", function () {
      return _effects__WEBPACK_IMPORTED_MODULE_1__["appEffects"];
    });
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/store/reducers/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "appReducers", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_2__["appReducers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return _reducers__WEBPACK_IMPORTED_MODULE_2__["metaReducers"];
    });
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services */
    "./src/app/store/services/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_3__["AuthService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_3__["CategoryService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_3__["DataService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExpenseService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IncomeService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_3__["IncomeService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_3__["ProfileService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_3__["SettingsService"];
    });
    /***/

  },

  /***/
  "./src/app/store/models/index.ts":
  /*!***************************************!*\
    !*** ./src/app/store/models/index.ts ***!
    \***************************************/

  /*! exports provided: User */

  /***/
  function srcAppStoreModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/store/models/user.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _user_model__WEBPACK_IMPORTED_MODULE_1__["User"];
    });
    /***/

  },

  /***/
  "./src/app/store/models/user.model.ts":
  /*!********************************************!*\
    !*** ./src/app/store/models/user.model.ts ***!
    \********************************************/

  /*! exports provided: User */

  /***/
  function srcAppStoreModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User(email, id, _token) {
        _classCallCheck(this, User);

        this.email = email;
        this.id = id;
        this._token = _token;
      }

      _createClass(User, [{
        key: "token",
        get: function get() {
          return this._token;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/store/reducers/auth.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/auth.reducer.ts ***!
    \************************************************/

  /*! exports provided: AuthReducer */

  /***/
  function srcAppStoreReducersAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthReducer", function () {
      return AuthReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/store/actions/auth.actions.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models */
    "./src/app/store/models/index.ts");

    var initialState = {
      user: null,
      authError: null,
      loading: false,
      isAuth: false
    };

    function AuthReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SIGNUP:
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN:
          return Object.assign({}, state, {
            authError: null,
            loading: true
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SIGNUP_SUCCESS:
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN_SUCCESS:
          var newUser = new _models__WEBPACK_IMPORTED_MODULE_2__["User"](action.payload.email, action.payload.userId, action.payload.token);
          return Object.assign({}, state, {
            authError: null,
            user: newUser,
            loading: false,
            isAuth: true
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].AUTH_FAILED:
          return Object.assign({}, state, {
            user: null,
            authError: action.payload,
            loading: false,
            isAuth: false
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGOUT:
          return Object.assign({}, state, {
            user: null,
            isAuth: false
          });

        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CLEAR_ERROR:
          return Object.assign({}, state, {
            authError: null
          });

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/category.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/reducers/category.reducer.ts ***!
    \****************************************************/

  /*! exports provided: CategoryReducer */

  /***/
  function srcAppStoreReducersCategoryReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryReducer", function () {
      return CategoryReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/category.actions */
    "./src/app/store/actions/category.actions.ts");

    var initialState = {
      item: null,
      items: [{
        id: '8lXBbAgksXDLNG625AuO',
        name: 'Household',
        description: 'Household expenses.',
        types: [{
          id: 'JMu2wIz8XhfPYdZm3jOC',
          name: 'Mortgage',
          description: 'Mortgage, house payments or rent.',
          index: 0
        }, {
          id: 'p3qdn3NUEBlzpfZYWW0M',
          name: 'Utilities',
          description: 'Electricity, water and gas.',
          index: 1
        }, {
          id: 'r9C3DGrbe2pA98YCRfKS',
          name: 'Communication',
          description: 'Phone, internet and cable tv.',
          index: 2
        }, {
          id: 'S1iW361BtIaAxshcgcci',
          name: 'Subscriptions',
          description: 'Miscellaneous subscriptions.',
          index: 3
        }, {
          id: '7OR5oAPsTcRl73ydzbG3',
          name: 'Maintenance',
          description: 'Home maintenance supplies and equipment.',
          index: 4
        }, {
          id: '7S2dqkzrs9V5sllqHHIC',
          name: 'Home Improvement',
          description: 'Home improvements, repairs and renovations',
          index: 5
        }, {
          id: 'cJOF2MYFN0U0nkfSDYrA',
          name: 'Other',
          description: 'Miscellaneous household expenses.',
          index: 6
        }],
        index: 0
      }, {
        id: '45a8qE0upOkLXy3Xzg9w',
        name: 'Daily Living',
        description: 'Daily living expenses.',
        types: [{
          id: '79mrZ0IoP01t9wHxxjur',
          name: 'Groceries',
          description: 'Groceries and other food supplies.',
          index: 0
        }, {
          id: 'vmLWLFPu2GTrpcqY7CvS',
          name: 'Clothing',
          description: 'Clothing and other articles.',
          index: 1
        }, {
          id: 'Fc8NZlHPPBSckJ30onCD',
          name: 'Hygiene',
          description: 'Personal hygiene, grooming supplies, salon and barber.',
          index: 2
        }, {
          id: 'F341OsdeZEOV1oplEUu9',
          name: 'Health',
          description: 'Medical and health related expenses.',
          index: 3
        }, {
          id: '0Sa5noBN2kAq8Ptk5nWp',
          name: 'Insurance',
          description: 'Personal insurance.',
          index: 4
        }, {
          id: '6l5wjqHj3bXkTFghLzk6',
          name: 'Dining',
          description: 'Dining and eating out.',
          index: 5
        }, {
          id: '0ZlIb3z0dv4g0wDdTIBP',
          name: 'Entertainment',
          description: 'Entertainment expenses.',
          index: 6
        }, {
          id: 'yggDn8SBUKZ4RB8LpV3A',
          name: 'Other',
          description: 'Miscellaneous daily living expenses.',
          index: 7
        }],
        index: 1
      }, {
        id: 'WFwAorK6AwBieXdZKjtI',
        name: 'Transportation',
        description: 'Vehicle and transportation expenses.',
        types: [{
          id: 'AhYnurWIzAMV2tpOMC9k',
          name: 'Vehicle Payments',
          description: 'Car and other vehicle payments.',
          index: 0
        }, {
          id: 'tv4DZvOFDPVZ4SOilD9P',
          name: 'Auto Insurance',
          description: 'Car and other vehicle insurance.',
          index: 1
        }, {
          id: 'KaERwLvmmndna2UZ3TjF',
          name: 'Fuel',
          description: 'Petrol and fuel expenses.',
          index: 2
        }, {
          id: '09xwpOjDForxeHHisgg9',
          name: 'Transportation Fare',
          description: 'Tickets and other travel fare.',
          index: 3
        }, {
          id: '4lsDq7QFuP8Elveo6s3z',
          name: 'Repairs',
          description: 'Vehicle repair and maintenance expenses.',
          index: 4
        }, {
          id: 'a19Fki8Mrqi2vewBK0Y2',
          name: 'Registration',
          description: 'Drivers license and vehicle registration.',
          index: 5
        }, {
          id: 'aoBEP47HyqwhImVyPQhH',
          name: 'Other',
          description: 'Miscellaneous transportation expenses.',
          index: 6
        }],
        index: 2
      }, {
        id: 'GDs3IX3m8yzkXL9Z49zw',
        name: 'Education',
        description: 'Education related expenses.',
        types: [{
          id: 'ryXn0lO8okopUDkQ5NaS',
          name: 'Tuition',
          description: 'Tuition fees and course purchases.',
          index: 0
        }, {
          id: 'JK0pfrw0KxLytxjxpN3d',
          name: 'Allowance',
          description: 'School allowance and pocket money.',
          index: 1
        }, {
          id: 'S9Zqevd0ySJXXMU2iRG9',
          name: 'Loans',
          description: 'Student loans and other payments.',
          index: 2
        }, {
          id: 'rI7afr5qE2mV07yXtNM3',
          name: 'Other',
          description: 'Miscellaneous education related expenses.',
          index: 3
        }],
        index: 3
      }, {
        id: 'DxIWMMkHbGgCGFdJGG6J',
        name: 'Miscellaneous',
        description: 'Miscellaneous expenses.',
        types: [{
          id: 'ZO2jZkaGnV0EKJvnAcRo',
          name: 'Accounts Receivable',
          description: 'Accounts receivable.',
          index: 0
        }, {
          id: 'lTFIDX1SkDYhn76Vqq4f',
          name: 'Pet Supplies',
          description: 'Pet food and supplies.',
          index: 1
        }, {
          id: 'xz4xGeYKRinS2GRgv7yl',
          name: 'Pet Health',
          description: 'Pet grooming and veterinary expenses.',
          index: 2
        }, {
          id: 'AsrbxR9K9tUX9QSNUIDQ',
          name: 'Other',
          description: 'Other expenses.',
          index: 2
        }],
        index: 4
      }],
      itemId: null,
      isEditing: false,
      isLoading: false,
      error: null
    };

    function CategoryReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH:
        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH_ALL:
        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH_ALL_TYPES:
          return Object.assign({}, state, {
            isLoading: true
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET:
          return Object.assign({}, state, {
            item: action.payload,
            itemId: action.payload.id,
            isLoading: false
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_TYPE:
          var setItem = Object.assign({}, state.items);
          var setCat = setItem[action.payload.id];
          setCat.push(action.payload.types);
          return Object.assign({}, state, {
            items: _toConsumableArray(setItem),
            isLoading: false
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_ALL:
          return Object.assign({}, state, {
            items: _toConsumableArray(action.payload),
            isLoading: false
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_ALL_TYPES:
          var setTypes = _toConsumableArray(state.items).map(function (c) {
            if (c.id === action.payload.id) {
              return Object.assign({}, c, {
                types: _toConsumableArray(action.payload.types)
              });
            } else {
              return c;
            }
          });

          return Object.assign({}, state, {
            items: _toConsumableArray(setTypes),
            isLoading: false
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE:
          return Object.assign({}, state, {
            item: action.payload
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_TYPE:
          var upItems = Object.assign({}, state.items);
          var upCat = upItems[action.payload.id];
          upCat.types[action.payload.id] = action.payload.item;
          return Object.assign({}, state, {
            items: _toConsumableArray(upItems)
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE:
          return Object.assign({}, state, {
            item: null,
            itemId: null
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE_TYPE:
          var delItems = Object.assign({}, state.items);
          var delCat = delItems[action.payload.id];
          delCat.types = delCat.types.splice(action.payload.key);
          return Object.assign({}, state, {
            items: _toConsumableArray(delItems)
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].START_EDIT:
          return Object.assign({}, state, {
            isEditing: true
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].STOP_EDIT:
          return Object.assign({}, state, {
            isEditing: false
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ERROR:
          return Object.assign({}, state, {
            error: action.payload
          });

        case _actions_category_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CLEAR_ERROR:
          return Object.assign({}, state, {
            error: null
          });

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/expense.reducer.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/reducers/expense.reducer.ts ***!
    \***************************************************/

  /*! exports provided: ExpenseReducer */

  /***/
  function srcAppStoreReducersExpenseReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseReducer", function () {
      return ExpenseReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/expense.actions */
    "./src/app/store/actions/expense.actions.ts");

    var initialState = {
      item: null,
      items: [],
      itemId: null,
      isEditing: false,
      isLoading: false,
      total: 0,
      error: null
    };

    function ExpenseReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH:
        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH_ALL:
          return Object.assign({}, state, {
            isLoading: true
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET:
          return Object.assign({}, state, {
            item: action.payload,
            itemId: action.payload.id,
            isLoading: false
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_ALL:
          var totals = _toConsumableArray(action.payload).reduce(function (a, e) {
            return a + e.amount;
          }, 0);

          return Object.assign({}, state, {
            items: _toConsumableArray(action.payload),
            total: totals,
            isLoading: false
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE:
          return Object.assign({}, state, {
            item: action.payload.item
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE:
          return Object.assign({}, state, {
            item: null,
            itemId: null
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].START_EDIT:
          return Object.assign({}, state, {
            isEditing: true
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].STOP_EDIT:
          return Object.assign({}, state, {
            isEditing: false
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ERROR:
          return Object.assign({}, state, {
            error: action.payload
          });

        case _actions_expense_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CLEAR_ERROR:
          return Object.assign({}, state, {
            error: null
          });

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/income.reducer.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/reducers/income.reducer.ts ***!
    \**************************************************/

  /*! exports provided: IncomeReducer */

  /***/
  function srcAppStoreReducersIncomeReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeReducer", function () {
      return IncomeReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/income.actions */
    "./src/app/store/actions/income.actions.ts");

    var initialState = {
      item: null,
      items: [],
      itemId: null,
      isEditing: false,
      isLoading: false,
      total: 0,
      types: [{
        id: 'Y3QMZWsXDlcMa2mrVH81',
        name: 'Salaries',
        description: 'Income from salaries and wages.',
        index: 0
      }, {
        id: 'CWrw4EQbigy2AaF7GMx6',
        name: 'Sales',
        description: 'Income from sales.',
        index: 1
      }, {
        id: 'tf4Z8h8sMqSMoqYI4k4H',
        name: 'Projects',
        description: 'Income from projects and services.',
        index: 2
      }, {
        id: 'Magy5joUh65JErrDFwcY',
        name: 'Remittances',
        description: 'Remittances.',
        index: 3
      }, {
        id: 'w4qx6xi21642a15Kc6dJ',
        name: 'Accounts Payable',
        description: 'Accounts Payable.',
        index: 4
      }, {
        id: '70Ka9KO9seyXBYoD5JEL',
        name: 'Other',
        description: 'Miscellaneous and other income.',
        index: 4
      }],
      error: null
    };

    function IncomeReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH:
        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH_ALL:
          return Object.assign({}, state, {
            isLoading: true
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET:
          return Object.assign({}, state, {
            item: action.payload,
            itemId: action.payload.id,
            isLoading: false
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_ALL:
          var totals = _toConsumableArray(action.payload).reduce(function (a, e) {
            return a + e.amount;
          }, 0);

          return Object.assign({}, state, {
            items: _toConsumableArray(action.payload),
            total: totals,
            isLoading: false
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE:
          return Object.assign({}, state, {
            item: action.payload.item
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE:
          return Object.assign({}, state, {
            item: null,
            itemId: null
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].START_EDIT:
          return Object.assign({}, state, {
            isEditing: true
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].STOP_EDIT:
          return Object.assign({}, state, {
            isEditing: false
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ERROR:
          return Object.assign({}, state, {
            error: action.payload
          });

        case _actions_income_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CLEAR_ERROR:
          return Object.assign({}, state, {
            error: null
          });

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/reducers/index.ts ***!
    \*****************************************/

  /*! exports provided: appReducers, metaReducers */

  /***/
  function srcAppStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducers", function () {
      return appReducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.reducer */
    "./src/app/store/reducers/auth.reducer.ts");
    /* harmony import */


    var _category_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category.reducer */
    "./src/app/store/reducers/category.reducer.ts");
    /* harmony import */


    var _expense_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./expense.reducer */
    "./src/app/store/reducers/expense.reducer.ts");
    /* harmony import */


    var _income_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./income.reducer */
    "./src/app/store/reducers/income.reducer.ts");
    /* harmony import */


    var _profile_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.reducer */
    "./src/app/store/reducers/profile.reducer.ts");
    /* harmony import */


    var _settings_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./settings.reducer */
    "./src/app/store/reducers/settings.reducer.ts");

    var appReducers = {
      auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_2__["AuthReducer"],
      category: _category_reducer__WEBPACK_IMPORTED_MODULE_3__["CategoryReducer"],
      expenses: _expense_reducer__WEBPACK_IMPORTED_MODULE_4__["ExpenseReducer"],
      income: _income_reducer__WEBPACK_IMPORTED_MODULE_5__["IncomeReducer"],
      settings: _settings_reducer__WEBPACK_IMPORTED_MODULE_7__["SettingsReducer"],
      user: _profile_reducer__WEBPACK_IMPORTED_MODULE_6__["ProfileReducer"]
    };
    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];
    /***/
  },

  /***/
  "./src/app/store/reducers/profile.reducer.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/reducers/profile.reducer.ts ***!
    \***************************************************/

  /*! exports provided: ProfileReducer */

  /***/
  function srcAppStoreReducersProfileReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileReducer", function () {
      return ProfileReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/profile.actions */
    "./src/app/store/actions/profile.actions.ts");

    var initialState = {
      item: null,
      itemId: null,
      isEditing: false,
      isLoading: false,
      curency: '',
      listview: 'all',
      error: null
    };

    function ProfileReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH:
        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH_ALL:
          return Object.assign({}, state, {
            isLoading: true
          });

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET:
          return Object.assign({}, state, {
            item: action.payload,
            itemId: action.payload.id,
            isLoading: false,
            curency: action.payload.currency,
            listview: action.payload.listview
          });

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_ALL:
          return Object.assign({}, state);

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE:
          return Object.assign({}, state, {
            item: action.payload
          });

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE:
          return Object.assign({}, state, {
            item: null,
            itemId: null
          });

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].START_EDIT:
          return Object.assign({}, state, {
            isEditing: true
          });

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].STOP_EDIT:
          return Object.assign({}, state, {
            isEditing: false
          });

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ERROR:
          return Object.assign({}, state, {
            error: action.payload
          });

        case _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CLEAR_ERROR:
          return Object.assign({}, state, {
            error: null
          });

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/reducers/settings.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/reducers/settings.reducer.ts ***!
    \****************************************************/

  /*! exports provided: SettingsReducer */

  /***/
  function srcAppStoreReducersSettingsReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsReducer", function () {
      return SettingsReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../actions/settings.actions */
    "./src/app/store/actions/settings.actions.ts");

    var initialState = {
      currency: '',
      listview: 'All',
      isLoading: false
    };

    function SettingsReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH_CURRENCY:
          return Object.assign({}, state, {
            isLoading: true
          });

        case _actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_CURRENCY:
          return Object.assign({}, state, {
            currency: action.payload,
            isLoading: false
          });

        case _actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].FETCH_LISTVIEW:
          return Object.assign({}, state, {
            isLoading: true
          });

        case _actions_settings_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_LISTVIEW:
          return Object.assign({}, state, {
            listview: action.payload,
            isLoading: false
          });

        default:
          {
            return state;
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/store/services/auth.service.ts":
  /*!************************************************!*\
    !*** ./src/app/store/services/auth.service.ts ***!
    \************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppStoreServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/auth.actions */
    "./src/app/store/actions/auth.actions.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(store) {
        var _this7 = this;

        _classCallCheck(this, AuthService);

        this.store = store;
        this.store.select('auth').subscribe(function (state) {
          _this7.user = state.user;

          if (!!_this7.user) {
            _this7.token = _this7.user.token;
          }

          _this7.isAuth = state.isAuth;
        });
      }

      _createClass(AuthService, [{
        key: "signup",
        value: function signup(email, password) {
          this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Signup"]({
            email: email,
            password: password
          }));
        }
      }, {
        key: "login",
        value: function login(email, password) {
          this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Login"]({
            email: email,
            password: password
          }));
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AutoLogin"]());
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
        }
      }, {
        key: "clearError",
        value: function clearError() {
          this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["ClearError"]());
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/store/services/category.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/services/category.service.ts ***!
    \****************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppStoreServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/store/services/auth.service.ts");
    /* harmony import */


    var _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../actions/category.actions */
    "./src/app/store/actions/category.actions.ts");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(store, authService) {
        var _this8 = this;

        _classCallCheck(this, CategoryService);

        this.store = store;
        this.authService = authService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_5__["SubSink"]();
        this.subs.add(this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) {
          return state.items;
        })).subscribe(function (items) {
          _this8.items = items;
        }), this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) {
          return state.item;
        })).subscribe(function (item) {
          _this8.item = item;
        }), this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) {
          return state.itemId;
        })).subscribe(function (itemId) {
          _this8.itemId = itemId;
        }), this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) {
          return state.isEditing;
        })).subscribe(function (isEditing) {
          _this8.isEditing = isEditing;
        }), this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) {
          return state.isLoading;
        })).subscribe(function (loading) {
          _this8.isLoading = loading;
        }), this.store.select('category').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) {
          return state.error;
        })).subscribe(function (error) {
          _this8.error = error;
        }));
        this.isAuth = this.authService.isAuth;

        if (!this.isAuth) {
          this.unsub();
        }
      }

      _createClass(CategoryService, [{
        key: "getItem",
        value: function getItem() {
          return this.item;
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "getItemId",
        value: function getItemId() {
          return this.itemId;
        }
      }, {
        key: "getIsEditing",
        value: function getIsEditing() {
          return this.isEditing;
        }
      }, {
        key: "getIsLoading",
        value: function getIsLoading() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.isLoading);
        }
      }, {
        key: "getError",
        value: function getError() {
          return this.error;
        }
      }, {
        key: "fetchAll",
        value: function fetchAll() {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["FetchAll"]());
        }
      }, {
        key: "fetchAllTypes",
        value: function fetchAllTypes(id) {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["FetchAllTypes"](id));
        }
      }, {
        key: "fetch",
        value: function fetch(id) {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["Fetch"](id));
        }
      }, {
        key: "add",
        value: function add(item) {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["Add"](item));
        }
      }, {
        key: "addCustom",
        value: function addCustom(item) {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["AddCustom"](item));
        }
      }, {
        key: "update",
        value: function update(item) {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["Update"](item));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["Delete"](id));
        }
      }, {
        key: "startEdit",
        value: function startEdit() {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["StartEdit"]());
        }
      }, {
        key: "stoptEdit",
        value: function stoptEdit() {
          this.store.dispatch(new _actions_category_actions__WEBPACK_IMPORTED_MODULE_7__["StopEdit"]());
        }
      }, {
        key: "unsub",
        value: function unsub() {
          this.subs.unsubscribe();
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], CategoryService);
    /***/
  },

  /***/
  "./src/app/store/services/data.service.ts":
  /*!************************************************!*\
    !*** ./src/app/store/services/data.service.ts ***!
    \************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppStoreServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(db) {
        _classCallCheck(this, DataService);

        this.db = db;
      }

      _createClass(DataService, [{
        key: "fetchAll",
        value: function fetchAll(ref, id) {
          var _this9 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.collectionRef(ref, id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (docArray) {
            return docArray.map(function (res) {
              return _this9.returnData(ref, res);
            });
          })));
        }
      }, {
        key: "fetchItem",
        value: function fetchItem(ref, key, id) {
          var _this10 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.collectionRef(ref, id).doc(key).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return _this10.returnData(ref, res);
          })));
        }
      }, {
        key: "addItem",
        value: function addItem(ref, item, id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.collectionRef(ref, id).add(item));
        }
      }, {
        key: "addCustomItem",
        value: function addCustomItem(ref, item, id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.collectionRef(ref, id).doc(item.id).set(Object.assign({}, item)));
        }
      }, {
        key: "updateItem",
        value: function updateItem(ref, item, id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.collectionRef(ref, id).doc(item.id).update(Object.assign({}, item)));
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(ref, key, id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.collectionRef(ref, id).doc(key).delete());
        }
      }, {
        key: "collectionRef",
        value: function collectionRef(ref, id) {
          switch (ref) {
            case 'profiles':
              return this.db.collection('users');

            case 'expenses':
              return this.db.collection('users').doc(id).collection(ref);

            case 'income':
              return this.db.collection('users').doc(id).collection(ref);

            case 'categories':
              return this.db.collection(ref);

            case 'types':
              return this.db.collection('categories').doc(id).collection(ref);

            default:
              break;
          }
        }
      }, {
        key: "returnData",
        value: function returnData(ref, res) {
          switch (ref) {
            case 'profiles':
              return Object.assign({
                id: res.payload.id
              }, res.payload.data());

            case 'expenses':
              return Object.assign({
                id: res.payload.doc.id
              }, res.payload.doc.data());

            case 'income':
              return Object.assign({
                id: res.payload.doc.id
              }, res.payload.doc.data());

            case 'categories':
              return Object.assign({
                id: res.payload.doc.id
              }, res.payload.doc.data());

            case 'types':
              return Object.assign({
                id: res.payload.doc.id
              }, res.payload.doc.data());

            default:
              break;
          }
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])], DataService);
    /***/
  },

  /***/
  "./src/app/store/services/expense.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/services/expense.service.ts ***!
    \***************************************************/

  /*! exports provided: ExpenseService */

  /***/
  function srcAppStoreServicesExpenseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseService", function () {
      return ExpenseService;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/store/services/auth.service.ts");
    /* harmony import */


    var _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../actions/expense.actions */
    "./src/app/store/actions/expense.actions.ts");

    var ExpenseService =
    /*#__PURE__*/
    function () {
      function ExpenseService(store, authService) {
        var _this11 = this;

        _classCallCheck(this, ExpenseService);

        this.store = store;
        this.authService = authService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_4__["SubSink"]();
        this.uid = this.authService.user.id;

        if (!!this.uid) {
          this.fetchAll();
        }

        this.subs.add(this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state.items;
        })).subscribe(function (items) {
          _this11.items = items;
        }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state.item;
        })).subscribe(function (item) {
          _this11.item = item;
        }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state.itemId;
        })).subscribe(function (itemId) {
          _this11.itemId = itemId;
        }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state.isEditing;
        })).subscribe(function (isEditing) {
          _this11.isEditing = isEditing;
        }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state.isLoading;
        })).subscribe(function (loading) {
          _this11.isLoading = loading;
        }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state.total;
        })).subscribe(function (total) {
          _this11.total = total;
        }), this.store.select('expenses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state.error;
        })).subscribe(function (error) {
          _this11.error = error;
        }));
        this.isAuth = this.authService.isAuth;

        if (!this.isAuth) {
          this.unsub();
        }
      }

      _createClass(ExpenseService, [{
        key: "getItem",
        value: function getItem() {
          return this.item;
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "getItemId",
        value: function getItemId() {
          return this.itemId;
        }
      }, {
        key: "getIsEditing",
        value: function getIsEditing() {
          return this.isEditing;
        }
      }, {
        key: "getIsLoading",
        value: function getIsLoading() {
          return this.isLoading;
        }
      }, {
        key: "getError",
        value: function getError() {
          return this.error;
        }
      }, {
        key: "fetchAll",
        value: function fetchAll() {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["FetchAll"](this.uid));
        }
      }, {
        key: "fetch",
        value: function fetch(key) {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["Fetch"]({
            id: this.uid,
            key: key
          }));
        }
      }, {
        key: "add",
        value: function add(item) {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["Add"]({
            id: this.uid,
            item: item
          }));
        }
      }, {
        key: "addCustom",
        value: function addCustom(item) {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["AddCustom"]({
            id: this.uid,
            item: item
          }));
        }
      }, {
        key: "update",
        value: function update(item) {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["Update"]({
            id: this.uid,
            item: item
          }));
        }
      }, {
        key: "delete",
        value: function _delete(key) {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["Delete"]({
            id: this.uid,
            key: key
          }));
        }
      }, {
        key: "startEdit",
        value: function startEdit() {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["StartEdit"]());
        }
      }, {
        key: "stoptEdit",
        value: function stoptEdit() {
          this.store.dispatch(new _actions_expense_actions__WEBPACK_IMPORTED_MODULE_6__["StopEdit"]());
        }
      }, {
        key: "unsub",
        value: function unsub() {
          this.subs.unsubscribe();
        }
      }]);

      return ExpenseService;
    }();

    ExpenseService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    ExpenseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], ExpenseService);
    /***/
  },

  /***/
  "./src/app/store/services/income.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/services/income.service.ts ***!
    \**************************************************/

  /*! exports provided: IncomeService */

  /***/
  function srcAppStoreServicesIncomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeService", function () {
      return IncomeService;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/store/services/auth.service.ts");
    /* harmony import */


    var _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/income.actions */
    "./src/app/store/actions/income.actions.ts");

    var IncomeService =
    /*#__PURE__*/
    function () {
      function IncomeService(store, authService) {
        _classCallCheck(this, IncomeService);

        this.store = store;
        this.authService = authService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_3__["SubSink"]();
        this.uid = this.authService.user.id;

        if (!!this.uid) {
          this.fetchAll();
        }
      }

      _createClass(IncomeService, [{
        key: "fetchAll",
        value: function fetchAll() {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["FetchAll"](this.uid));
        }
      }, {
        key: "fetch",
        value: function fetch(key) {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Fetch"]({
            id: this.uid,
            key: key
          }));
        }
      }, {
        key: "add",
        value: function add(item) {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Add"]({
            id: this.uid,
            item: item
          }));
        }
      }, {
        key: "addCustom",
        value: function addCustom(item) {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["AddCustom"]({
            id: this.uid,
            item: item
          }));
        }
      }, {
        key: "update",
        value: function update(item) {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Update"]({
            id: this.uid,
            item: item
          }));
        }
      }, {
        key: "delete",
        value: function _delete(key) {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["Delete"]({
            id: this.uid,
            key: key
          }));
        }
      }, {
        key: "startEdit",
        value: function startEdit() {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["StartEdit"]());
        }
      }, {
        key: "stoptEdit",
        value: function stoptEdit() {
          this.store.dispatch(new _actions_income_actions__WEBPACK_IMPORTED_MODULE_5__["StopEdit"]());
        }
      }, {
        key: "unsub",
        value: function unsub() {
          this.subs.unsubscribe();
        }
      }]);

      return IncomeService;
    }();

    IncomeService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    IncomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], IncomeService);
    /***/
  },

  /***/
  "./src/app/store/services/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/store/services/index.ts ***!
    \*****************************************/

  /*! exports provided: AuthService, CategoryService, DataService, ExpenseService, IncomeService, ProfileService, SettingsService */

  /***/
  function srcAppStoreServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/store/services/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"];
    });
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/store/services/data.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"];
    });
    /* harmony import */


    var _expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./expense.service */
    "./src/app/store/services/expense.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExpenseService", function () {
      return _expense_service__WEBPACK_IMPORTED_MODULE_3__["ExpenseService"];
    });
    /* harmony import */


    var _income_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./income.service */
    "./src/app/store/services/income.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IncomeService", function () {
      return _income_service__WEBPACK_IMPORTED_MODULE_4__["IncomeService"];
    });
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.service */
    "./src/app/store/services/profile.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return _profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"];
    });
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category.service */
    "./src/app/store/services/category.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return _category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"];
    });
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/store/services/settings.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return _settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"];
    });
    /***/

  },

  /***/
  "./src/app/store/services/profile.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/services/profile.service.ts ***!
    \***************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppStoreServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/store/services/auth.service.ts");
    /* harmony import */


    var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../actions/profile.actions */
    "./src/app/store/actions/profile.actions.ts");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(store, authService) {
        _classCallCheck(this, ProfileService);

        this.store = store;
        this.authService = authService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_3__["SubSink"]();
        this.isAuth = this.authService.isAuth;

        if (!this.isAuth) {
          this.unsub();
        }
      }

      _createClass(ProfileService, [{
        key: "fetchAll",
        value: function fetchAll() {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["FetchAll"]());
        }
      }, {
        key: "fetch",
        value: function fetch(id) {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Fetch"](id));
        }
      }, {
        key: "add",
        value: function add(item) {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Add"](item));
        }
      }, {
        key: "addCustom",
        value: function addCustom(item) {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["AddCustom"](item));
        }
      }, {
        key: "update",
        value: function update(item) {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Update"](item));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["Delete"](id));
        }
      }, {
        key: "startEdit",
        value: function startEdit() {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["StartEdit"]());
        }
      }, {
        key: "stoptEdit",
        value: function stoptEdit() {
          this.store.dispatch(new _actions_profile_actions__WEBPACK_IMPORTED_MODULE_5__["StopEdit"]());
        }
      }, {
        key: "unsub",
        value: function unsub() {
          this.subs.unsubscribe();
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], ProfileService);
    /***/
  },

  /***/
  "./src/app/store/services/settings.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/services/settings.service.ts ***!
    \****************************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppStoreServicesSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/store/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SettingsService =
    /*#__PURE__*/
    function () {
      function SettingsService(store, authService) {
        var _this12 = this;

        _classCallCheck(this, SettingsService);

        this.store = store;
        this.authService = authService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_3__["SubSink"]();
        this.subs.add(this.store.select('settings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) {
          return state.currency;
        })).subscribe(function (currency) {
          _this12.currency = currency;
        }), this.store.select('settings').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) {
          return state.listview;
        })).subscribe(function (listview) {
          _this12.listview = listview;
        }));
        this.isAuth = this.authService.isAuth;

        if (!this.isAuth) {
          this.unsub();
        }
      }

      _createClass(SettingsService, [{
        key: "unsub",
        value: function unsub() {
          this.subs.unsubscribe();
        }
      }]);

      return SettingsService;
    }();

    SettingsService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], SettingsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyCh0aldDSltm1mFzCzG29e6Z3FfYzzN_to',
        authDomain: 'easy-books.firebaseapp.com',
        databaseURL: 'https://easy-books.firebaseio.com',
        projectId: 'easy-books',
        storageBucket: 'easy-books.appspot.com',
        messagingSenderId: '110208937184',
        appId: '1:110208937184:web:a273fc2c1d46cf3d347485',
        measurementId: 'G-5KM5RTSCNP'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\dev sandbox\easybooks\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
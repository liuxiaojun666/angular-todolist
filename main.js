(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/angular-todolist/angular-todolist/src/main.ts */"zUnb");


/***/ }),

/***/ "3fZY":
/*!********************************************************!*\
  !*** ./src/app/store/selectors/scheduler.selectors.ts ***!
  \********************************************************/
/*! exports provided: selectScheduler, selectSchedules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectScheduler", function() { return selectScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSchedules", function() { return selectSchedules; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_scheduler_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/scheduler.reducer */ "n6Zu");


const selectScheduler = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_reducers_scheduler_reducer__WEBPACK_IMPORTED_MODULE_1__["scheduleFeatureKey"]);
const selectSchedules = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectScheduler, state => state.schedule);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "SU7y":
/*!***********************************************************************!*\
  !*** ./src/app/components/input-selector/input-selector.component.ts ***!
  \***********************************************************************/
/*! exports provided: InputSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectorComponent", function() { return InputSelectorComponent; });
/* harmony import */ var src_app_store_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/actions/scheduler.actions */ "jbfK");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");









class InputSelectorComponent {
    constructor(store) {
        this.store = store;
        this.value = '';
    }
    ngOnInit() {
    }
    inputKeydown(event) {
        if (event.key === 'Enter') {
            this.scheduleSave();
        }
    }
    scheduleSave() {
        if (!this.value)
            return;
        const schedule = {
            title: this.value,
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
            status: false,
            checked: false
        };
        this.value = '';
        this.store.dispatch(Object(src_app_store_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_0__["saveSchedule"])({ schedule }));
    }
}
InputSelectorComponent.ɵfac = function InputSelectorComponent_Factory(t) { return new (t || InputSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
InputSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InputSelectorComponent, selectors: [["app-input-selector"]], decls: 4, vars: 1, consts: [[1, "input-selector"], ["nz-input", "", "placeholder", "\u5F85\u529E\u4E8B\u9879", "maxlength", "24", 3, "ngModel", "ngModelChange", "keydown"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function InputSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InputSelectorComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; })("keydown", function InputSelectorComponent_Template_input_keydown_1_listener($event) { return ctx.inputKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputSelectorComponent_Template_button_click_2_listener() { return ctx.scheduleSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u6DFB \u52A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], styles: [".input-selector[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin: 24px 0;\n}\n.input-selector[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 8px;\n  height: 32px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  padding: 4px 11px;\n  font-size: 14px;\n  color: rgba(0,0,0,0.65);\n  background-color: #fff;\n  background-image: none;\n  box-shadow: none;\n  transition: all 0.3s;\n}\n.input-selector[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%]:hover {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n}\n.input-selector[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%]:focus {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  box-shadow: 0 0 0 2px rgba(24,144,255,0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXNlbGVjdG9yLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBTztFQUNQLGFBQVM7RUFDVCxjQUFRO0FBQ1Y7QUFBRTtFQUNFLE9BQU07RUFDTixpQkFBYztFQUNkLFlBQU87RUFDUCxrQkFBZTtFQUNmLHlCQUFRO0VBQ1IsaUJBQVM7RUFDVCxlQUFXO0VBQ1gsdUJBQU87RUFDUCxzQkFBa0I7RUFDbEIsc0JBQWtCO0VBQ2xCLGdCQUFZO0VBQ1osb0JBQVk7QUFFaEI7QUFESTtFQUNFLHFCQUFjO0VBQ2Qsa0NBQW9CO0FBRzFCO0FBREk7RUFDRSxxQkFBYztFQUNkLGtDQUFvQjtFQUNwQiwwQ0FBWTtBQUdsQiIsImZpbGUiOiJpbnB1dC1zZWxlY3Rvci5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zZWxlY3RvciB7XHJcbiAgd2lkdGg6IDEwMCVcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgbWFyZ2luOiAyNHB4IDBcclxuICAuYW50LWlucHV0IHtcclxuICAgIGZsZXg6IDFcclxuICAgIG1hcmdpbi1yaWdodDogOHB4XHJcbiAgICBoZWlnaHQgMzJweFxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5XHJcbiAgICBwYWRkaW5nOiA0cHggMTFweFxyXG4gICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZVxyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3NcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICM0MGE5ZmZcclxuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHggIWltcG9ydGFudFxyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzQwYTlmZlxyXG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweCAhaW1wb3J0YW50XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_input_selector_input_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/input-selector/input-selector.component */ "SU7y");
/* harmony import */ var _components_item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/item-selector/item-selector.component */ "jgzk");



class AppComponent {
    constructor() {
        this.title = 'angular-guide';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "app-component"], [1, "app-selector"], [1, "header-slot"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Angular TodoList ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-input-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-item-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_input_selector_input_selector_component__WEBPACK_IMPORTED_MODULE_1__["InputSelectorComponent"], _components_item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_2__["ItemSelectorComponent"]], styles: [".app-component[_ngcontent-%COMP%] {\n  display: flex;\n}\n.app-component[_ngcontent-%COMP%]   .app-selector[_ngcontent-%COMP%] {\n  margin: 60px auto;\n  width: 420px;\n  padding: 30px;\n  border-radius: 5px;\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n}\n.app-component[_ngcontent-%COMP%]   .app-selector[_ngcontent-%COMP%]   .header-slot[_ngcontent-%COMP%] {\n  height: 42px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 360px;\n  font-size: 18px;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVM7QUFDWDtBQUFFO0VBQ0UsaUJBQVE7RUFDUixZQUFPO0VBQ1AsYUFBUztFQUNULGtCQUFlO0VBQ2Ysc0JBQWtCO0VBQ2xCLHNDQUFZO0FBRWhCO0FBREk7RUFDRSxZQUFRO0VBQ1IsYUFBUztFQUNULHVCQUFpQjtFQUNqQixtQkFBYTtFQUNiLFlBQU87RUFDUCxlQUFXO0VBQ1gsV0FBTztBQUdiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29tcG9uZW50IHtcclxuICBkaXNwbGF5OiBmbGV4XHJcbiAgLmFwcC1zZWxlY3RvciB7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0b1xyXG4gICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIC5oZWFkZXItc2xvdCB7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAzNjBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _reducers_scheduler_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/scheduler.reducer */ "n6Zu");


const reducers = {
    [_reducers_scheduler_reducer__WEBPACK_IMPORTED_MODULE_1__["scheduleFeatureKey"]]: _reducers_scheduler_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/item-selector/item-selector.component */ "jgzk");
/* harmony import */ var _components_input_selector_input_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input-selector/input-selector.component */ "SU7y");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");


























Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_7___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot({}, {}),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_18__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_19__["reducers"], { metaReducers: _store__WEBPACK_IMPORTED_MODULE_19__["metaReducers"] }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument() : []
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_item_selector_item_selector_component__WEBPACK_IMPORTED_MODULE_3__["ItemSelectorComponent"],
        _components_input_selector_input_selector_component__WEBPACK_IMPORTED_MODULE_4__["InputSelectorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_18__["StoreRouterConnectingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "jbfK":
/*!****************************************************!*\
  !*** ./src/app/store/actions/scheduler.actions.ts ***!
  \****************************************************/
/*! exports provided: loadSchedules, saveSchedule, deleteSchedule, updateSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSchedules", function() { return loadSchedules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSchedule", function() { return saveSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSchedule", function() { return deleteSchedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSchedule", function() { return updateSchedule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadSchedules = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('loadSchedules');
const saveSchedule = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('saveSchedule', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteSchedule = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('deleteSchedule', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateSchedule = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('updateSchedule', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "jgzk":
/*!*********************************************************************!*\
  !*** ./src/app/components/item-selector/item-selector.component.ts ***!
  \*********************************************************************/
/*! exports provided: ItemSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemSelectorComponent", function() { return ItemSelectorComponent; });
/* harmony import */ var _store_selectors_scheduler_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors/scheduler.selectors */ "3fZY");
/* harmony import */ var src_app_store_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/actions/scheduler.actions */ "jbfK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");










function ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_s_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "s", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r4.title);
} }
function ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r4.title);
} }
function ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_Template_label_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const menu_r4 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.checkedOnChange($event, menu_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_s_3_Template, 2, 1, "s", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_span_4_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const menu_r4 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.deleteSchedule(menu_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u5220 \u9664");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", menu_r4.id)("ngModel", menu_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menu_r4.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !menu_r4.checked);
} }
function ItemSelectorComponent_nz_checkbox_wrapper_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-checkbox-wrapper", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnChange", function ItemSelectorComponent_nz_checkbox_wrapper_1_Template_nz_checkbox_wrapper_nzOnChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.logChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemSelectorComponent_nz_checkbox_wrapper_1_div_1_Template, 8, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.schedule));
} }
function ItemSelectorComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u6682\u65E0\u5F85\u529E\u4E8B\u9879");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return []; };
// import { slideAnimation } from '../../animations/index';
class ItemSelectorComponent {
    constructor(store) {
        this.store = store;
        this.checked = false;
        this.schedule = this.store.select(_store_selectors_scheduler_selectors__WEBPACK_IMPORTED_MODULE_0__["selectSchedules"]);
        this.store.select(_store_selectors_scheduler_selectors__WEBPACK_IMPORTED_MODULE_0__["selectSchedules"]).subscribe(state => {
            console.log(state);
        });
    }
    ngOnInit() {
    }
    deleteSchedule(id) {
        this.store.dispatch(Object(src_app_store_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_1__["deleteSchedule"])({ id }));
    }
    checkedOnChange(checked, id) {
        this.store.dispatch(Object(src_app_store_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_1__["updateSchedule"])({ id, checked }));
    }
    logChange(event) {
        // console.log(event);
    }
}
ItemSelectorComponent.ɵfac = function ItemSelectorComponent_Factory(t) { return new (t || ItemSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ItemSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItemSelectorComponent, selectors: [["app-item-selector"]], decls: 5, vars: 5, consts: [[1, "item-selector"], ["style", "width: 100%;", 3, "nzOnChange", 4, "ngIf", "ngIfElse"], ["empty", ""], [2, "width", "100%", 3, "nzOnChange"], ["class", "schedule-item", 4, "ngFor", "ngForOf"], [1, "schedule-item"], [1, "wrapper-left"], ["nz-checkbox", "", 3, "nzValue", "ngModel", "ngModelChange"], ["style", "opacity: 0.5;", 4, "ngIf"], [4, "ngIf"], [1, "wrapper-right"], ["nz-button", "", "nzType", "danger", 3, "click"], [2, "opacity", "0.5"], [1, "empty-wrapper"]], template: function ItemSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemSelectorComponent_nz_checkbox_wrapper_1_Template, 3, 3, "nz-checkbox-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ItemSelectorComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.schedule) || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0)).length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxWrapperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".item-selector[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 3px;\n}\n.item-selector[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #999;\n}\n.item-selector[_ngcontent-%COMP%]   .schedule-item[_ngcontent-%COMP%]   .wrapper-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.item-selector[_ngcontent-%COMP%]   .empty-wrapper[_ngcontent-%COMP%] {\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tc2VsZWN0b3IuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBa0I7RUFDbEIsa0JBQWU7QUFDakI7QUFBRTtFQUNFLGFBQVM7RUFDVCw4QkFBaUI7RUFDakIsZUFBUztFQUNULDZCQUFlO0FBRW5CO0FBQUk7RUFDRSxhQUFTO0VBQ1QsbUJBQWE7QUFFbkI7QUFFRTtFQUNFLGlCQUFhO0FBQWpCIiwiZmlsZSI6Iml0ZW0tc2VsZWN0b3IuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1zZWxlY3RvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAuc2NoZWR1bGUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcclxuXHJcbiAgICAud3JhcHBlci1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVtcHR5LXdyYXBwZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHhcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "n6Zu":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/scheduler.reducer.ts ***!
  \*****************************************************/
/*! exports provided: scheduleFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleFeatureKey", function() { return scheduleFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/scheduler.actions */ "jbfK");



const scheduleFeatureKey = 'scheduler';
const initialState = {
    schedule: [
        { title: 'schedule.actions', id: '42ec6d0f-1f4b-48a9-86f4-b71f3c58ba62', status: false, checked: false },
        { title: 'Live Reloading enabled', id: 'a30bdf6f-1a8b-41a6-ac65-d1448356fd5d', status: false, checked: false }
    ]
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_1__["saveSchedule"], (state, action) => {
    return {
        schedule: state.schedule.concat(action.schedule).sort((a, b) => {
            if (a.checked && !b.checked) {
                return 1;
            }
            if (!a.checked && b.checked) {
                return -1;
            }
            return 0;
        })
    };
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_1__["deleteSchedule"], (state, action) => {
    const schedule = state.schedule
        .filter(item => item.id !== action.id);
    return { schedule };
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_scheduler_actions__WEBPACK_IMPORTED_MODULE_1__["updateSchedule"], (state, { id, checked }) => {
    const schedule = state.schedule
        .map(item => {
        const newItem = Object.assign({}, item);
        if (item.id === id) {
            newItem.checked = checked;
        }
        return newItem;
    }).sort((a, b) => {
        if (a.checked && !b.checked) {
            return 1;
        }
        else if (!a.checked && b.checked) {
            return -1;
        }
        else {
            return 0;
        }
    });
    return { schedule };
}));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
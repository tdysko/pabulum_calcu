(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutmyplans/aboutmyplans.component.html":
/*!**********************************************************!*\
  !*** ./src/app/aboutmyplans/aboutmyplans.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutmyplans works!\n</p>\n"

/***/ }),

/***/ "./src/app/aboutmyplans/aboutmyplans.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/aboutmyplans/aboutmyplans.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0bXlwbGFucy9hYm91dG15cGxhbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/aboutmyplans/aboutmyplans.component.ts":
/*!********************************************************!*\
  !*** ./src/app/aboutmyplans/aboutmyplans.component.ts ***!
  \********************************************************/
/*! exports provided: AboutmyplansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmyplansComponent", function() { return AboutmyplansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutmyplansComponent = /** @class */ (function () {
    function AboutmyplansComponent() {
    }
    AboutmyplansComponent.prototype.ngOnInit = function () {
    };
    AboutmyplansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutmyplans',
            template: __webpack_require__(/*! ./aboutmyplans.component.html */ "./src/app/aboutmyplans/aboutmyplans.component.html"),
            styles: [__webpack_require__(/*! ./aboutmyplans.component.scss */ "./src/app/aboutmyplans/aboutmyplans.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutmyplansComponent);
    return AboutmyplansComponent;
}());



/***/ }),

/***/ "./src/app/advancedcalculator/advancedcalculator.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/advancedcalculator/advancedcalculator.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"display: grid; grid-template-columns: 20% 30% 20% 30%; grid-template-rows: 12% 12% 12% 12%; float: left; width: 30em; margin-top: 1.3%; height: 32em; margin-left: 3%\">\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Weight</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <input class=\"advInput\" type=\"text\" [(ngModel)]=\"Waga\" value=\"\" (ngModelChange)=\"WeightChange()\" />\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Height</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <input class=\"advInput\" type=\"text\" [(ngModel)]=\"Wzrost\" value=\"\" (ngModelChange)=\"HeightChange()\" />\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Sex</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <select class=\"advSelect\" [(ngModel)]=\"Plec\" (ngModelChange)=\"SexChange()\">\n        <option value=\"1\">Men</option>\n        <option value=\"2\">Woman</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label style=\"display: inline\">Age</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <input class=\"advInput\" type=\"text\" [(ngModel)]=\"Wiek\" (ngModelChange)=\"AgeChange()\" />\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Goal</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <select class=\"advSelect\" name=\"GoalControl\" [(ngModel)]=\"Goal\" (ngModelChange)=\"GoalChange()\">\n        <option value=\"1\">Reduction</option>\n        <option value=\"2\" selected=\"selected\">Maintenance</option>\n        <option value=\"3\">Mass building</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label style=\"display: inline\">Metabolism</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <select class=\"advSelect\" [(ngModel)]=\"LifeStyle\" (ngModelChange)=\"LifeStyleChange()\">\n        <option value=\"3\">Low</option>\n        <option value=\"2\">Medium</option>\n        <option value=\"1\">High</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>BodyType</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <select class=\"advSelect\" [(ngModel)]=\"MetaBolism\" (ngModelChange)=\"MetabolismChange()\">\n        <option value=\"3\">Low</option>\n        <option value=\"2\">Medium</option>\n        <option value=\"1\">High</option>\n      </select>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/advancedcalculator/advancedcalculator.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/advancedcalculator/advancedcalculator.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".advrValue {\n  padding-top: 15%;\n  width: 90%; }\n\n.advrLabel {\n  padding-top: 25%;\n  width: 90%; }\n\n.advrLabel select {\n    width: 100%; }\n\n.GridField {\n  border: 0px solid black;\n  height: 100%;\n  width: 100%; }\n\n.advInput {\n  width: 100%; }\n\n.advSelect {\n  width: 101.2%;\n  height: 1.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2YW5jZWRjYWxjdWxhdG9yL0M6XFxVc2Vyc1xcVG9tYW5pXFxEZXNrdG9wXFxPdXRwb3N0RGlldC9zcmNcXGFwcFxcYWR2YW5jZWRjYWxjdWxhdG9yXFxhZHZhbmNlZGNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFGZDtJQUtRLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWE7RUFDYixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZHZhbmNlZGNhbGN1bGF0b3IvYWR2YW5jZWRjYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkdnJWYWx1ZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmFkdnJMYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uR3JpZEZpZWxke1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFkdklucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWR2U2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDEuMiU7XHJcbiAgICBoZWlnaHQ6IDEuOGVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/advancedcalculator/advancedcalculator.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/advancedcalculator/advancedcalculator.component.ts ***!
  \********************************************************************/
/*! exports provided: AdvancedcalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedcalculatorComponent", function() { return AdvancedcalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requirementsdata.service */ "./src/app/requirementsdata.service.ts");



var AdvancedcalculatorComponent = /** @class */ (function () {
    function AdvancedcalculatorComponent(_requirementsdataService) {
        this._requirementsdataService = _requirementsdataService;
        this.LifeStyle = 0;
        this.MetaBolism = 0;
        this.childWagaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childAgeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childHeightEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childSexEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childGoalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rds = _requirementsdataService;
    }
    AdvancedcalculatorComponent.prototype.ngOnInit = function () {
        var observer = {
            next: function (value) {
                console.log(value);
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                console.log("completed");
            }
        };
    };
    AdvancedcalculatorComponent.prototype.ngAfterViewInit = function () {
    };
    AdvancedcalculatorComponent.prototype.activityChange = function () {
    };
    AdvancedcalculatorComponent.prototype.WeightChange = function () {
        this.rds.setWeight(this.Waga);
        this.childWagaEvent.emit(this.Waga);
    };
    AdvancedcalculatorComponent.prototype.HeightChange = function () {
        this.rds.setHeight(this.Wzrost);
        this.childHeightEvent.emit(this.Wzrost);
    };
    AdvancedcalculatorComponent.prototype.AgeChange = function () {
        this.rds.setAge(this.Wiek);
        this.childAgeEvent.emit(this.Wiek);
    };
    AdvancedcalculatorComponent.prototype.SexChange = function () {
        this.rds.setSex(this.Plec);
        this.childSexEvent.emit(this.Plec);
    };
    AdvancedcalculatorComponent.prototype.GoalChange = function () {
        this.rds.setGoal(this.Goal);
        this.childGoalEvent.emit(this.Goal);
    };
    AdvancedcalculatorComponent.prototype.LifeStyleChange = function () {
        this.rds.setLifeStyle(this.LifeStyle);
    };
    AdvancedcalculatorComponent.prototype.MetabolismChange = function () {
        this.rds.setMetabolism(this.MetaBolism);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentWaga'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AdvancedcalculatorComponent.prototype, "Waga", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentWzrost'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AdvancedcalculatorComponent.prototype, "Wzrost", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentPlec'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AdvancedcalculatorComponent.prototype, "Plec", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentWiek'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AdvancedcalculatorComponent.prototype, "Wiek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentGoal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AdvancedcalculatorComponent.prototype, "Goal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdvancedcalculatorComponent.prototype, "childWagaEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdvancedcalculatorComponent.prototype, "childAgeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdvancedcalculatorComponent.prototype, "childHeightEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdvancedcalculatorComponent.prototype, "childSexEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdvancedcalculatorComponent.prototype, "childGoalEvent", void 0);
    AdvancedcalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advancedcalculator',
            template: __webpack_require__(/*! ./advancedcalculator.component.html */ "./src/app/advancedcalculator/advancedcalculator.component.html"),
            styles: [__webpack_require__(/*! ./advancedcalculator.component.scss */ "./src/app/advancedcalculator/advancedcalculator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsdataService"]])
    ], AdvancedcalculatorComponent);
    return AdvancedcalculatorComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _diets_diets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diets/diets.component */ "./src/app/diets/diets.component.ts");
/* harmony import */ var _yourdiet_yourdiet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requirements/requirements.component */ "./src/app/requirements/requirements.component.ts");
/* harmony import */ var _seminaturaldiet_seminaturaldiet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seminaturaldiet/seminaturaldiet.component */ "./src/app/seminaturaldiet/seminaturaldiet.component.ts");
/* harmony import */ var _fullnaturaldiet_fullnaturaldiet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fullnaturaldiet/fullnaturaldiet.component */ "./src/app/fullnaturaldiet/fullnaturaldiet.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _whattoexpect_whattoexpect_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whattoexpect/whattoexpect.component */ "./src/app/whattoexpect/whattoexpect.component.ts");










var routes = [
    { path: 'diets', component: _diets_diets_component__WEBPACK_IMPORTED_MODULE_3__["DietsComponent"] },
    { path: 'yourdiet', component: _yourdiet_yourdiet_component__WEBPACK_IMPORTED_MODULE_4__["YourdietComponent"] },
    { path: 'fullnaturaldiet', component: _fullnaturaldiet_fullnaturaldiet_component__WEBPACK_IMPORTED_MODULE_6__["FullnaturaldietComponent"] },
    { path: 'seminaturaldiet', component: _seminaturaldiet_seminaturaldiet_component__WEBPACK_IMPORTED_MODULE_5__["SeminaturaldietComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'whattoexpect', component: _whattoexpect_whattoexpect_component__WEBPACK_IMPORTED_MODULE_9__["WhattoexpectComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <router-outlet></router-outlet>\n</section>\n<div style=\"position: absolute; bottom: 2.5%; right: 10%\">\n  Diet outpost ver. 1.0.0\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Diet Home';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _diets_diets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diets/diets.component */ "./src/app/diets/diets.component.ts");
/* harmony import */ var _yourdiet_yourdiet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requirements/requirements.component */ "./src/app/requirements/requirements.component.ts");
/* harmony import */ var _fullnaturaldiet_fullnaturaldiet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fullnaturaldiet/fullnaturaldiet.component */ "./src/app/fullnaturaldiet/fullnaturaldiet.component.ts");
/* harmony import */ var _seminaturaldiet_seminaturaldiet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seminaturaldiet/seminaturaldiet.component */ "./src/app/seminaturaldiet/seminaturaldiet.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _requirementsdata_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./requirementsdata.service */ "./src/app/requirementsdata.service.ts");
/* harmony import */ var _basiccalculator_basiccalculator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./basiccalculator/basiccalculator.component */ "./src/app/basiccalculator/basiccalculator.component.ts");
/* harmony import */ var _advancedcalculator_advancedcalculator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./advancedcalculator/advancedcalculator.component */ "./src/app/advancedcalculator/advancedcalculator.component.ts");
/* harmony import */ var _whattoexpect_whattoexpect_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./whattoexpect/whattoexpect.component */ "./src/app/whattoexpect/whattoexpect.component.ts");
/* harmony import */ var _aboutmyplans_aboutmyplans_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./aboutmyplans/aboutmyplans.component */ "./src/app/aboutmyplans/aboutmyplans.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _diets_diets_component__WEBPACK_IMPORTED_MODULE_7__["DietsComponent"],
                _yourdiet_yourdiet_component__WEBPACK_IMPORTED_MODULE_8__["YourdietComponent"],
                _fullnaturaldiet_fullnaturaldiet_component__WEBPACK_IMPORTED_MODULE_9__["FullnaturaldietComponent"],
                _seminaturaldiet_seminaturaldiet_component__WEBPACK_IMPORTED_MODULE_10__["SeminaturaldietComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _basiccalculator_basiccalculator_component__WEBPACK_IMPORTED_MODULE_14__["BasiccalculatorComponent"],
                _advancedcalculator_advancedcalculator_component__WEBPACK_IMPORTED_MODULE_15__["AdvancedcalculatorComponent"],
                _whattoexpect_whattoexpect_component__WEBPACK_IMPORTED_MODULE_16__["WhattoexpectComponent"],
                _aboutmyplans_aboutmyplans_component__WEBPACK_IMPORTED_MODULE_17__["AboutmyplansComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_requirementsdata_service__WEBPACK_IMPORTED_MODULE_13__["RequirementsdataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basiccalculator/basiccalculator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/basiccalculator/basiccalculator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"display: grid; grid-template-columns: 20% 80%; grid-template-rows: 20% 20% 20% 20%; float: left; width: 20em; padding-top: 0%; height: 100%; margin-left: 3%\">\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Weight</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <input class=\"advInput\" type=\"text\" [(ngModel)]=\"Waga\" (ngModelChange)=\"WeightChange()\" />\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Height</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <input class=\"advInput\" type=\"text\" [(ngModel)]=\"Wzrost\" (ngModelChange)=\"HeightChange()\" />\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Sex</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <select class=\"advSelect\" name=\"sexControl\" [(ngModel)]=\"Plec\" (ngModelChange)=\"SexChange()\">\n        <option value=\"1\">Men</option>\n        <option value=\"2\">Woman</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Age</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <input class=\"advInput\" name=\"WiekControl\" type=\"text\" [(ngModel)]=\"Wiek\" (ngModelChange)=\"AgeChange()\" />\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrLabel\">\n      <label>Goal</label>\n    </div>\n  </div>\n  <div class=\"GridField\">\n    <div class=\"advrValue\">\n      <select class=\"advSelect\" name=\"GoalControl\" [(ngModel)]=\"Goal\" (ngModelChange)=\"GoalChange()\">\n        <option value=\"1\">Reduction</option>\n        <option value=\"2\" selected=\"selected\">Maintenance</option>\n        <option value=\"3\">Mass building</option>\n      </select>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/basiccalculator/basiccalculator.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/basiccalculator/basiccalculator.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".advrValue {\n  padding-top: 10%;\n  width: 90%; }\n\n.advrLabel {\n  padding-top: 41%;\n  width: 90%; }\n\n.advrLabel select {\n    width: 100%; }\n\n.GridField {\n  border: 0px solid black;\n  height: 100%;\n  width: 100%; }\n\n.advInput {\n  width: 100%; }\n\n.advSelect {\n  width: 101.2%;\n  height: 1.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWNjYWxjdWxhdG9yL0M6XFxVc2Vyc1xcVG9tYW5pXFxEZXNrdG9wXFxPdXRwb3N0RGlldC9zcmNcXGFwcFxcYmFzaWNjYWxjdWxhdG9yXFxiYXNpY2NhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFGZDtJQUtRLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWE7RUFDYixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNpY2NhbGN1bGF0b3IvYmFzaWNjYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkdnJWYWx1ZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLmFkdnJMYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDElO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uR3JpZEZpZWxke1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFkdklucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWR2U2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDEuMiU7XHJcbiAgICBoZWlnaHQ6IDEuOGVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/basiccalculator/basiccalculator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/basiccalculator/basiccalculator.component.ts ***!
  \**************************************************************/
/*! exports provided: BasiccalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasiccalculatorComponent", function() { return BasiccalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requirementsdata.service */ "./src/app/requirementsdata.service.ts");



var BasiccalculatorComponent = /** @class */ (function () {
    function BasiccalculatorComponent(_requirementsdataService) {
        this._requirementsdataService = _requirementsdataService;
        this.Goal = 2;
        this.childWagaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childAgeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childHeightEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childSexEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.childGoalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rds = _requirementsdataService;
    }
    BasiccalculatorComponent.prototype.ngOnInit = function () {
        this.rds.setHeight(this.Wzrost);
        this.rds.setWeight(this.Waga);
        this.rds.setSex(this.Plec);
        this.rds.setAge(this.Wiek);
        this.rds.setGoal(this.Goal);
    };
    BasiccalculatorComponent.prototype.WeightChange = function () {
        this.rds.setWeight(this.Waga);
        this.childWagaEvent.emit(this.Waga);
    };
    BasiccalculatorComponent.prototype.HeightChange = function () {
        this.rds.setHeight(this.Wzrost);
        this.childHeightEvent.emit(this.Wzrost);
    };
    BasiccalculatorComponent.prototype.AgeChange = function () {
        this.rds.setAge(this.Wiek);
        this.childAgeEvent.emit(this.Wiek);
    };
    BasiccalculatorComponent.prototype.SexChange = function () {
        this.rds.setSex(this.Plec);
        this.childSexEvent.emit(this.Plec);
    };
    BasiccalculatorComponent.prototype.GoalChange = function () {
        this.rds.setGoal(this.Goal);
        this.childGoalEvent.emit(this.Goal);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentWaga'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BasiccalculatorComponent.prototype, "Waga", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentWzrost'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BasiccalculatorComponent.prototype, "Wzrost", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentPlec'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BasiccalculatorComponent.prototype, "Plec", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentWiek'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BasiccalculatorComponent.prototype, "Wiek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parentGoal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BasiccalculatorComponent.prototype, "Goal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasiccalculatorComponent.prototype, "childWagaEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasiccalculatorComponent.prototype, "childAgeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasiccalculatorComponent.prototype, "childHeightEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasiccalculatorComponent.prototype, "childSexEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasiccalculatorComponent.prototype, "childGoalEvent", void 0);
    BasiccalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basiccalculator',
            template: __webpack_require__(/*! ./basiccalculator.component.html */ "./src/app/basiccalculator/basiccalculator.component.html"),
            styles: [__webpack_require__(/*! ./basiccalculator.component.scss */ "./src/app/basiccalculator/basiccalculator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsdataService"]])
    ], BasiccalculatorComponent);
    return BasiccalculatorComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  Contact dietoutpost at:\n</h3>\n<a href=\"mailto:dietoutposte@dietoutpost.com\">\n  dietoutposte@dietoutpost.com\n</a>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/diets/diets.component.html":
/*!********************************************!*\
  !*** ./src/app/diets/diets.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: grid; grid-template-columns: 44.5% 50%; margin-top: 1.3%\">\n  <div routerLink=\"/fullnaturaldiet\" class=\"dietStyle\">Full natural</div>\n  <div routerLink=\"/seminaturaldiet\" class=\"dietStyle\" style=\"margin-left: 5%\">Semi natural</div>\n</div>"

/***/ }),

/***/ "./src/app/diets/diets.component.scss":
/*!********************************************!*\
  !*** ./src/app/diets/diets.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dietStyle {\n  border: 2px solid gray;\n  border-radius: 2px;\n  text-align: center;\n  padding-top: 1.7em;\n  padding-left: 0.2em;\n  height: 4.5em;\n  background: #eeeeee;\n  font-weight: bold;\n  font-size: 24px; }\n\n.dietStyle:hover {\n  background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlldHMvQzpcXFVzZXJzXFxUb21hbmlcXERlc2t0b3BcXE91dHBvc3REaWV0L3NyY1xcYXBwXFxkaWV0c1xcZGlldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpZXRzL2RpZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpZXRTdHlsZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEuN2VtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjJlbTtcclxuICAgIGhlaWdodDogNC41ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmRpZXRTdHlsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/diets/diets.component.ts":
/*!******************************************!*\
  !*** ./src/app/diets/diets.component.ts ***!
  \******************************************/
/*! exports provided: DietsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsComponent", function() { return DietsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DietsComponent = /** @class */ (function () {
    function DietsComponent() {
        this.appTitle = "OutpostDieto";
    }
    DietsComponent.prototype.ngOnInit = function () {
    };
    DietsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diets',
            template: __webpack_require__(/*! ./diets.component.html */ "./src/app/diets/diets.component.html"),
            styles: [__webpack_require__(/*! ./diets.component.scss */ "./src/app/diets/diets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DietsComponent);
    return DietsComponent;
}());



/***/ }),

/***/ "./src/app/fullnaturaldiet/fullnaturaldiet.component.html":
/*!****************************************************************!*\
  !*** ./src/app/fullnaturaldiet/fullnaturaldiet.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Full natural diet\n</h1>"

/***/ }),

/***/ "./src/app/fullnaturaldiet/fullnaturaldiet.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/fullnaturaldiet/fullnaturaldiet.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Z1bGxuYXR1cmFsZGlldC9mdWxsbmF0dXJhbGRpZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/fullnaturaldiet/fullnaturaldiet.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/fullnaturaldiet/fullnaturaldiet.component.ts ***!
  \**************************************************************/
/*! exports provided: FullnaturaldietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullnaturaldietComponent", function() { return FullnaturaldietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullnaturaldietComponent = /** @class */ (function () {
    function FullnaturaldietComponent() {
    }
    FullnaturaldietComponent.prototype.ngOnInit = function () {
    };
    FullnaturaldietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullnaturaldiet',
            template: __webpack_require__(/*! ./fullnaturaldiet.component.html */ "./src/app/fullnaturaldiet/fullnaturaldiet.component.html"),
            styles: [__webpack_require__(/*! ./fullnaturaldiet.component.scss */ "./src/app/fullnaturaldiet/fullnaturaldiet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FullnaturaldietComponent);
    return FullnaturaldietComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome!<br><br>\n</p>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/home\" class=\"logo\">{{ appTitle }}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"/home\">Home</a></li>\n        <li><a routerLink=\"/yourdiet\">Your diet</a></li>\n        <!--<li><a routerLink=\"/diets\">Diets</a></li>\n        <li><a routerLink=\"/whattoexpect\">What to expect</a></li>-->\n        <li><a routerLink=\"/contact\">Contact</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #0033CC; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #7700FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcVG9tYW5pXFxEZXNrdG9wXFxPdXRwb3N0RGlldC9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUlRLGlCQUFpQixFQUFBO0VBSnpCO0lBUVEsbUJBQW1CLEVBQUE7RUFSM0I7TUFXWSxxQkFBcUI7TUFDckIsU0FBUztNQUFFLFVBQVUsRUFBQTtFQVpqQztRQWVnQixXQUFXLEVBQUE7RUFmM0I7VUFrQm9CLGNBQWM7VUFDZCx5QkFBeUI7VUFDekIsZUFBZSxFQUFBO0VBcEJuQztZQXVCd0IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDMzQ0M7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzc3MDBGRjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = "Diet Home";
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/requirementsdata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/requirementsdata.service.ts ***!
  \*********************************************/
/*! exports provided: RequirementsData, RequirementsdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsData", function() { return RequirementsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsdataService", function() { return RequirementsdataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequirementsData = /** @class */ (function () {
    function RequirementsData() {
        this.Weight = 0;
        this.Height = 0;
        this.Sex = 0;
        this.Age = 0;
        this.LifeStyle = 0;
        this.Metabolism = 0;
        this.tdee = 0;
        this.wiek = 29;
        this.time = 0;
        this.intensity = 0;
        this.workouttype = 0;
        this.goal = 0;
        this.BMR = 0;
        this.TEF = 0;
        this.TEA = 0;
        this.NEAT = 0;
        this.EPOC = 0;
        this.ProteinsRequired = 0;
        this.CarbohydratessRequired = 0;
        this.FatsRequired = 0;
    }
    RequirementsData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RequirementsData);
    return RequirementsData;
}());

var RequirementsdataService = /** @class */ (function () {
    function RequirementsdataService() {
        this.BMR = 0;
        this.TEF = 0;
        this.TEA = 0;
        this.NEAT = 0;
        this.EPOC = 0;
        this.Requirements = null;
        this.InitEmptyRequirements();
    }
    RequirementsdataService.prototype.InitEmptyRequirements = function () {
        this.Requirements = new RequirementsData();
    };
    RequirementsdataService.prototype.SetRequirements = function (ProtsRequired, CarbsRequired, FtsReqiured) {
        //this.Requirements = new RequirementsData();
        this.Requirements.ProteinsRequired = ProtsRequired;
        this.Requirements.CarbohydratessRequired = CarbsRequired;
        this.Requirements.FatsRequired = FtsReqiured;
    };
    RequirementsdataService.prototype.ObliczZapotrzebowanie = function () {
        this.Requirements.tdee = this.GetTEF(this.GetBMR(this.Requirements.Weight, this.Requirements.Height, this.Requirements.wiek, this.Requirements.Sex)
            + this.GetTEA(this.Requirements.time, this.Requirements.intensity, this.Requirements.workouttype)
            + this.GetEPOC(this.Requirements.time, this.Requirements.intensity, this.Requirements.workouttype)
            + this.GetNEAT(this.Requirements.LifeStyle, this.Requirements.Metabolism));
        this.Requirements.tdee = parseFloat(this.Requirements.tdee.toString().substr(0, this.Requirements.tdee.toString().indexOf(".")));
        if (this.Requirements.goal == 1) {
            this.Requirements.tdee = this.Requirements.tdee - 300;
        }
        else if (this.Requirements.goal == 3) {
            this.Requirements.tdee = this.Requirements.tdee + 300;
        }
        this.SetRequirements((this.Requirements.tdee * 0.15) / 4, (this.Requirements.tdee * 0.55) / 4, (this.Requirements.tdee * 0.3) / 9);
        return this.Requirements.tdee;
    };
    RequirementsdataService.prototype.GetTEF = function (BMR) {
        this.TEF = 0;
        this.TEF = (BMR * (107 / 100));
        return this.TEF;
    };
    RequirementsdataService.prototype.GetNEAT = function (Lifestyle, BodyType) {
        if (Lifestyle == 1) {
            if (BodyType == 1) {
                this.NEAT = 900;
            }
            else if (BodyType == 2) {
                this.NEAT = 800;
            }
            else if (BodyType == 3) {
                this.NEAT = 700;
            }
        }
        if (Lifestyle == 2) {
            if (BodyType == 1) {
                this.NEAT = 500;
            }
            else if (BodyType == 2) {
                this.NEAT = 450;
            }
            else if (BodyType == 3) {
                this.NEAT = 400;
            }
        }
        if (Lifestyle == 3) {
            if (BodyType == 1) {
                this.NEAT = 400;
            }
            else if (BodyType == 2) {
                this.NEAT = 300;
            }
            else if (BodyType == 3) {
                this.NEAT = 200;
            }
        }
        return this.NEAT;
    };
    RequirementsdataService.prototype.GetEPOC = function (Time, Intensity, WorkoutType) {
        if (Time > 0) {
            if (Intensity == 1) {
                this.EPOC = 0.04 * this.BMR;
            }
            else if (Intensity == 2) {
                this.EPOC = 0.045 * this.BMR;
            }
            else if (Intensity == 3) {
                this.EPOC = 0.05 * this.BMR;
            }
            else if (Intensity == 4) {
                this.EPOC = 0.055 * this.BMR;
            }
            else if (Intensity == 5) {
                this.EPOC = 0.06 * this.BMR;
            }
            else if (Intensity == 6) {
                this.EPOC = 0.065 * this.BMR;
            }
        }
        return this.EPOC;
    };
    RequirementsdataService.prototype.GetBMR = function (Weight, Height, Age, Sex) {
        if (Sex == 1) {
            this.BMR = (10 * Weight) + (6.25 * Height) - (5 * Age) + 5;
        }
        else {
            this.BMR = (10 * Weight) + (6.25 * Height) - (5 * Age) - 161;
        }
        return this.BMR;
    };
    RequirementsdataService.prototype.GetTEA = function (Time, Intensity, WorkoutType) {
        if (WorkoutType == 1) {
            if (Intensity == 1) {
                this.TEA = 5 * Time;
            }
            else if (Intensity == 2) {
                this.TEA = 6 * Time;
            }
            else if (Intensity == 3) {
                this.TEA = 7 * Time;
            }
            else if (Intensity == 4) {
                this.TEA = 8 * Time;
            }
            else if (Intensity == 5) {
                this.TEA = 9 * Time;
            }
            else if (Intensity == 6) {
                this.TEA = 10 * Time;
            }
        }
        if (WorkoutType == 2) {
            if (Intensity == 1) {
                this.TEA = 7.00 * Time;
            }
            else if (Intensity == 2) {
                this.TEA = 7.40 * Time;
            }
            else if (Intensity == 3) {
                this.TEA = 7.80 * Time;
            }
            else if (Intensity == 4) {
                this.TEA = 8.20 * Time;
            }
            else if (Intensity == 5) {
                this.TEA = 8.60 * Time;
            }
            else if (Intensity == 6) {
                this.TEA = 9.00 * Time;
            }
        }
        return this.TEA;
    };
    RequirementsdataService.prototype.setWeight = function (Weight) {
        this.Requirements.Weight = Weight;
    };
    RequirementsdataService.prototype.setHeight = function (Height) {
        this.Requirements.Height = Height;
    };
    RequirementsdataService.prototype.setAge = function (Age) {
        this.Requirements.Age = Age;
    };
    RequirementsdataService.prototype.setSex = function (Sex) {
        this.Requirements.Sex = Sex;
    };
    RequirementsdataService.prototype.setLifeStyle = function (LifeStyle) {
        this.Requirements.LifeStyle = LifeStyle;
    };
    RequirementsdataService.prototype.setMetabolism = function (Metabolism) {
        this.Requirements.Metabolism = Metabolism;
    };
    RequirementsdataService.prototype.setGoal = function (Goal) {
        this.Requirements.goal = Goal;
    };
    RequirementsdataService.prototype.GetRequirements = function () {
        return this.Requirements;
    };
    return RequirementsdataService;
}());



/***/ }),

/***/ "./src/app/seminaturaldiet/seminaturaldiet.component.html":
/*!****************************************************************!*\
  !*** ./src/app/seminaturaldiet/seminaturaldiet.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Semi natural diet\n</h1>\n<p>\n\n</p>"

/***/ }),

/***/ "./src/app/seminaturaldiet/seminaturaldiet.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/seminaturaldiet/seminaturaldiet.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbWluYXR1cmFsZGlldC9zZW1pbmF0dXJhbGRpZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/seminaturaldiet/seminaturaldiet.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/seminaturaldiet/seminaturaldiet.component.ts ***!
  \**************************************************************/
/*! exports provided: SeminaturaldietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeminaturaldietComponent", function() { return SeminaturaldietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requirementsdata.service */ "./src/app/requirementsdata.service.ts");



var SeminaturaldietComponent = /** @class */ (function () {
    function SeminaturaldietComponent(_requirementsdataSerivce) {
        this._requirementsdataSerivce = _requirementsdataSerivce;
        this.Requirements = null;
        this.Requirements = _requirementsdataSerivce.GetRequirements();
    }
    SeminaturaldietComponent.prototype.ngOnInit = function () {
    };
    SeminaturaldietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seminaturaldiet',
            template: __webpack_require__(/*! ./seminaturaldiet.component.html */ "./src/app/seminaturaldiet/seminaturaldiet.component.html"),
            styles: [__webpack_require__(/*! ./seminaturaldiet.component.scss */ "./src/app/seminaturaldiet/seminaturaldiet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsdataService"]])
    ], SeminaturaldietComponent);
    return SeminaturaldietComponent;
}());



/***/ }),

/***/ "./src/app/whattoexpect/whattoexpect.component.html":
/*!**********************************************************!*\
  !*** ./src/app/whattoexpect/whattoexpect.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>Hello!</h2>\n  In the near future, dietoutpost plans to allow users for the next following activities:\n  <ul>\n    <li>Define your own proteins/carbohydrates/fats relations. Which are now calculated by default in regards to your\n      caloric demand:\n      <div>\n        <ul>\n          <li>Proteins: 15%</li>\n          <li>Carbohydrates: 55%</li>\n          <li>Fats: 30%</li>\n        </ul>\n      </div>\n    </li>\n    <li>\n      Define your workout plan to include it within calculated caloric demand.\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/whattoexpect/whattoexpect.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/whattoexpect/whattoexpect.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\n  padding-top: 0.4em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdHRvZXhwZWN0L0M6XFxVc2Vyc1xcVG9tYW5pXFxEZXNrdG9wXFxPdXRwb3N0RGlldC9zcmNcXGFwcFxcd2hhdHRvZXhwZWN0XFx3aGF0dG9leHBlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3doYXR0b2V4cGVjdC93aGF0dG9leHBlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC40ZW07XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/whattoexpect/whattoexpect.component.ts":
/*!********************************************************!*\
  !*** ./src/app/whattoexpect/whattoexpect.component.ts ***!
  \********************************************************/
/*! exports provided: WhattoexpectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhattoexpectComponent", function() { return WhattoexpectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhattoexpectComponent = /** @class */ (function () {
    function WhattoexpectComponent() {
    }
    WhattoexpectComponent.prototype.ngOnInit = function () {
    };
    WhattoexpectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-whattoexpect',
            template: __webpack_require__(/*! ./whattoexpect.component.html */ "./src/app/whattoexpect/whattoexpect.component.html"),
            styles: [__webpack_require__(/*! ./whattoexpect.component.scss */ "./src/app/whattoexpect/whattoexpect.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WhattoexpectComponent);
    return WhattoexpectComponent;
}());



/***/ }),

/***/ "./src/app/requirements/requirements.component.html":
/*!**************************************************!*\
  !*** ./src/app/requirements/requirements.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top: 0px; margin-top: 0px\">\n  <div [hidden]=\"advancedcalc\" style=\"padding: 0; margin: 0\">\n    <app-basiccalculator (childWagaEvent)=\"waga=$event\" (childHeightEvent)=\"wzrost=$event\" (childAgeEvent)=\"wiek=$event\"\n      (childSexEvent)=\"plec=$event\" (childGoalEvent)=\"goal=$event\" [parentPlec]=\"plec\" [parentWzrost]=\"wzrost\"\n      [parentWaga]=\"waga\" [parentWiek]=\"wiek\" [parentGoal]=\"goal\">\n    </app-basiccalculator>\n  </div>\n\n  <div [hidden]=\"!advancedcalc\" style=\"padding: 0; margin: 0\">\n    <app-advancedcalculator (childWagaEvent)=\"waga=$event\" (childHeightEvent)=\"wzrost=$event\"\n      (childAgeEvent)=\"wiek=$event\" (childSexEvent)=\"plec=$event\" (childLifeStyleEvent)=\"lifestyle=$event\"\n      (childGoalEvent)=\"goal=$event\" (childMetabolismEvent)=\"metabolism=$event\" [parentPlec]=\"plec\"\n      [parentWzrost]=\"wzrost\" [parentWaga]=\"waga\" [parentWiek]=\"wiek\" [parentGoal]=\"goal\">\n    </app-advancedcalculator>\n  </div>\n  <div style=\"float: right; padding-top: 3%; padding-left: 5%; padding-right: 6.5%\">\n    <div style=\"text-align: center\">Your rough daily demand for calories is: {{ tdee }} </div>\n    <br /><br /><br />\n    <div style=\"text-align: center\">\n      <button (click)=\"ObliczZapotrzebowanie()\"\n        style=\"width: 32em; height: 4em; background: none; border: 2px solid black; border-radius: 5px\">Calculate\n        demand</button>\n    </div>\n    <div style=\"text-align: center; padding-top: 5%\">\n      <button (click)=\"Podstawowe()\"\n        style=\"width: 16em; height: 4em; background: none; border: 2px solid black; border-radius: 5px\">Basic\n        calculator</button>\n      <button (click)=\"Zaawansowane()\"\n        style=\"width: 16em; height: 4em; background: none; border: 2px solid black; border-radius: 5px\">Advanced\n        calculator</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/requirements/requirements.component.scss":
/*!**************************************************!*\
  !*** ./src/app/requirements/requirements.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXJkaWV0L3lvdXJkaWV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/requirements/requirements.component.ts":
/*!************************************************!*\
  !*** ./src/app/requirements/requirements.component.ts ***!
  \************************************************/
/*! exports provided: YourdietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourdietComponent", function() { return YourdietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requirementsdata.service */ "./src/app/requirementsdata.service.ts");



var YourdietComponent = /** @class */ (function () {
    function YourdietComponent(_requirementsdataService) {
        this._requirementsdataService = _requirementsdataService;
        this.tdee = 0;
        this.time = 0;
        this.intensity = 0;
        this.workouttype = 0;
        this.lifestyle = 0;
        this.metabolism = 0;
        this.goal = 0;
        this.advancedcalc = false;
    }
    YourdietComponent.prototype.ngOnInit = function () {
    };
    YourdietComponent.prototype.Podstawowe = function () {
        this.advancedcalc = false;
    };
    YourdietComponent.prototype.Zaawansowane = function () {
        this.advancedcalc = true;
    };
    YourdietComponent.prototype.ObliczZapotrzebowanie = function () {
        this.tdee = this._requirementsdataService.ObliczZapotrzebowanie();
        //this.rds.SetRequirements((this.tdee * 0.15) / 4, (this.tdee * 0.55) / 4, (this.tdee * 0.3) / 9);
    };
    YourdietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-yourdiet',
            template: __webpack_require__(/*! ./yourdiet.component.html */ "./src/app/requirements/requirements.component.html"),
            styles: [__webpack_require__(/*! ./yourdiet.component.scss */ "./src/app/requirements/requirements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_requirementsdata_service__WEBPACK_IMPORTED_MODULE_2__["RequirementsdataService"]])
    ], YourdietComponent);
    return YourdietComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tomani\Desktop\OutpostDiet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
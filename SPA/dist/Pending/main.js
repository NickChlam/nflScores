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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n        <!-- Add Router Outlet -->\r\n        <router-outlet></router-outlet>\r\n        \r\n   \r\n</div>\r\n \r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pend_edit_pend_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pend-edit/pend-edit.component */ "./src/app/pend-edit/pend-edit.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pend_detail_pend_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pend-detail/pend-detail.component */ "./src/app/pend-detail/pend-detail.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _auth_guard_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-guard.guard */ "./src/app/auth-guard.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// 3rd party 










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _pend_edit_pend_edit_component__WEBPACK_IMPORTED_MODULE_4__["PendEditComponent"],
                _pend_detail_pend_detail_component__WEBPACK_IMPORTED_MODULE_7__["PendDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__["UserFormComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase, 'Pending'),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_17__["appRoutes"])
            ],
            providers: [_services_data_service_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _auth_guard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth-guard.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, af) {
        this.auth = auth;
        this.router = router;
        this.af = af;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.af.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data) {
                return true;
            }
            else {
                _this.router.navigate(['/home']);
                return false;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());

// return this.auth.user
//       .pipe(
//         take(1), 
//         map( user => !!(user && user.catchPhrase)),
//         tap( (loggedIn) => {
//           console.log(loggedIn)
//             if(!loggedIn) {
//               console.log('you must be logged in');
//               this.router.navigate(['/home']);
//             }
//         }),
//       )
//   }


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Add login feature -->\r\n<!-- <app-pend-detail></app-pend-detail> -->\r\n<login></login>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.execute = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n   margin-top: 2rem;\r\n}\r\n.col{\r\n    margin-top: 1rem;\r\n}\r\n.error{\r\n    color: red;\r\n    margin-bottom: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"afAuth.user | async as user; else showLogin\">\r\n  <h1>Hello {{ user.displayName }}!</h1>\r\n  <button (click)=\"logout()\">Logout</button>\r\n</div>\r\n\r\n\r\n\r\n<ng-template class=\"ng-template\" #showLogin>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n    </div>\r\n      <div class=\"col\">\r\n          <h2>Robert Half</h2>\r\n          \r\n      </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n\r\n  <div class=\"row login\">\r\n    <div class=\"col\"></div>\r\n\r\n    <div class=\"col align-center\">\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n\r\n        <label for=\"email\" class=\"control-label\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\">\r\n\r\n        <div class=\"error\" *ngIf=\"email.invalid && email.touched\">\r\n            enter valid username \r\n        </div>\r\n\r\n        <label for=\"password\" class=\"control-label\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" required>\r\n\r\n        <div class=\"error\" *ngIf=\"password.invalid && password.touched\">\r\n          enter valid password\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n              \r\n                <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn-sm btn-outline-dark form-control\">Login</button>\r\n            </div>\r\n            \r\n            <div class=\"col\"> \r\n            </div>\r\n          \r\n        </div>\r\n\r\n        <div class=\"col\">\r\n          No Account? <a [routerLink]=\"['/signUp']\" routerLinkActive=\"router-link-active\" > Create One </a>\r\n        </div>\r\n\r\n\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n    \r\n  </div>\r\n  \r\n\r\n\r\n\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, fb, router, alertify, auth) {
        this.afAuth = afAuth;
        this.fb = fb;
        this.router = router;
        this.alertify = alertify;
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                    // TODO: Create Custom @rht email validator 
                ]
            ],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                ]
            ]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.loginForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (value) {
            if (value)
                _this.auth.user.subscribe(function (data) {
                    localStorage.setItem('office', data.office);
                    localStorage.setItem('uid', data.uid);
                    _this.router.navigate(['/detail']);
                });
        }, function (err) {
            _this.alertify.error(err.message);
            _this.loginForm.controls.password.reset();
        });
    };
    LoginComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        localStorage.clear();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());

//TODO: notify user of incorrect credentials reset form. 


/***/ }),

/***/ "./src/app/models/offices.ts":
/*!***********************************!*\
  !*** ./src/app/models/offices.ts ***!
  \***********************************/
/*! exports provided: Offices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offices", function() { return Offices; });
var Offices = [
    '00610',
    '00600',
    '00620',
    '00710'
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    padding: .5rem;\r\n    background-color: #34434B;\r\n    border-radius: 0;\r\n    box-shadow: 0 2px 5px 0 rgba (0,0,0,.24);\r\n}\r\nimg {\r\n    padding: 0px;\r\n    width: 75px;\r\n  }\r\n#nav-dropdown {\r\n    \r\n    color: #FFF;\r\n}\r\n.dropdown-menu  {\r\n    border-radius: 0;\r\n}\r\n.navbar-nav {\r\n    float: right;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    \r\n    nav {\r\n        width: 100%;\r\n    }\r\n    img {\r\n        width: 50%;\r\n        height: 50%;\r\n    }\r\n    .nav-item,\r\n    .dropdown-item,\r\n    .nav-dropdown,\r\n    .dropdown-menu{\r\n       width: 5px;\r\n       font-size: .5rem;\r\n       \r\n      \r\n    }\r\n    .navbar-nav{\r\n        float: initial;\r\n    }\r\n    \r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"navbar-dark bg-inverse\">               \r\n  <div class=\"container\"  >\r\n        \r\n    <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" class=\"navbar-brand\"><img src=\"/assets/RH.jpg\" alt=\"\" class=\"img-thumbmail img-fluid float-left\"> </a>\r\n      <ul class=\"nav navbar-nav \">\r\n          <li class=\"nav-item dropdown\">\r\n              <a *ngIf=\"(afAuth.user | async) as user\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" class=\"nav-link dropdown-toggle \" id=\"nav-dropdown\" data-toggle=\"dropdown\" aria-expanded=\"false\" >{{ user?.email}}</a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"nav-dropdown\">\r\n                  <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" class=\"dropdown-item\">Sign Out </a>\r\n                  \r\n              </div>\r\n          </li>\r\n      </ul>\r\n  </div> \r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, afAuth) {
        this.auth = auth;
        this.afAuth = afAuth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.afAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.user1 = data;
            console.log("hello");
        }));
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pend-detail/pend-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pend-detail/pend-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    margin-bottom :2rem;\r\n}\r\nthead th   {\r\n    border-top: none;\r\n    border-bottom: 1px solid #34434B;\r\n}\r\nth {\r\n    font-weight: bold;\r\n}\r\ntd {\r\n    border-bottom : .5px solid rgba(52,67,75,.1);\r\n    font-weight: lighter;\r\n}\r\ni {\r\n    padding-right: .5rem; \r\n}\r\n#edit {\r\n    cursor: pointer;\r\n    color: green;\r\n}\r\n#delete {\r\n    cursor: pointer;\r\n    color: black;\r\n    \r\n}\r\n.fa-trash{\r\n    transition: .5s ease;\r\n    text-align: center;\r\n    \r\n}\r\n.fa-trash:hover{\r\n    transition:  .2s ease;\r\n    color: red;\r\n}\r\n.fa-pencil {\r\n    transition: .5s ease;\r\n    text-align: center;\r\n}\r\n.fa-pencil:hover {\r\n    transition: .2s ease;\r\n    color: blue;\r\n}\r\n.justify-content-end{\r\n    margin-bottom: 1rem;\r\n    margin-top: 1rem;\r\n}\r\n@media only screen and (max-width: 500px) {\r\n    .table {\r\n        width:100%;\r\n        font-size: .55rem;\r\n    }\r\n    h1 {\r\n        font-size: .9rem;\r\n    }\r\n   \r\n\r\n}"

/***/ }),

/***/ "./src/app/pend-detail/pend-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/pend-detail/pend-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"row justify-content-end\">\r\n    \r\n    <div class=\"col-sm-2\">\r\n            <app-pend-edit [pending]=\"pending\" ></app-pend-edit>\r\n    </div>\r\n</div>\r\n<form [formGroup]=\"updateFormData\" >\r\n    <select formControlName=\"office\">\r\n        <option *ngFor=\"let office of Offices\" value={{office}}> {{office}}</option>\r\n    </select>\r\n    <select  formControlName=\"users\">\r\n        <option  *ngFor=\"let user of users\" value={{user.knownAs}}> {{user.knownAs}}</option>\r\n    </select>\r\n</form>\r\n\r\n    <button (click)=\"updateData()\">Update</button>\r\n\r\n\r\n    <div class=\"col-lg-12\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Company</th>\r\n                    <th>Candidate </th>\r\n                    <th> Job Owner </th>\r\n                    <th>Candidate Owner </th>\r\n                    <th> Salary </th>\r\n                    <th> Fee % </th>\r\n                    <th> Fee $</th>\r\n                    <th> Notes </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let pend of pending\">\r\n                    <!-- <td id=\"edit\" (click)=\"bugDetail.configureForm(bug)\" data-toggle=\"modal\" [attr.data-target]=\" '#' + bugDetail.modalId\"> <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> </td>\r\n                    <td id=\"delete\" (click)=\"bugDetail.deleteBug(bug)\"> <i class=\"fa fa-trash\" aria-hidden=\"true\"></i> </td> --> \r\n                    <td> {{ pend.company}} </td>\r\n                    <td> {{ pend.candidate }}</td>\r\n                    <td> {{ pend.jobOwner }} </td>\r\n                    <td> {{ pend.sendOut }}  </td>\r\n                    <td> {{ pend.baseSalary | currency }}</td>\r\n                    <td> {{ pend.feePercent }} </td>\r\n                    <td> {{ calcFeeAmount(pend) | currency}}  </td>\r\n                    <td> {{ pend.status }} </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-end\">\r\n        <div class=\"col-md-4\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th> Avg Fee %</th>\r\n                        <th> Total pending </th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td> {{ calcAvgFee(pending)| number }} </td>\r\n                        <td>{{ calcTotal(pending) | currency }}</td>\r\n                    </tr>\r\n                </thead>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    \r\n   \r\n\r\n\r\n<hr>\r\n\r\n   \r\n"

/***/ }),

/***/ "./src/app/pend-detail/pend-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pend-detail/pend-detail.component.ts ***!
  \******************************************************/
/*! exports provided: PendDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendDetailComponent", function() { return PendDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _models_offices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/offices */ "./src/app/models/offices.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PendDetailComponent = /** @class */ (function () {
    function PendDetailComponent(afs, dataService, auth, afAuth, fb) {
        this.afs = afs;
        this.dataService = dataService;
        this.auth = auth;
        this.afAuth = afAuth;
        this.fb = fb;
        this.users = [];
        this.pending = [];
        this.userOffice = localStorage.getItem('office');
        this.Offices = _models_offices__WEBPACK_IMPORTED_MODULE_5__["Offices"];
    }
    PendDetailComponent.prototype.ngOnInit = function () {
        this.getData(this.userOffice);
        this.updateFormData = this.fb.group({
            office: ['',],
            users: [this.userOffice]
        });
        this.getUsers();
    };
    PendDetailComponent.prototype.getData = function (office) {
        var _this = this;
        this.dataService.getPendData('items', office).subscribe(function (data) {
            _this.pending = data;
            _this.convertUIDtoName(_this.pending);
        }, function (err) {
            //TODO : log errors
        });
    };
    PendDetailComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (data) {
            _this.users = data;
        }, function (err) {
            // TODO: error logger 
        });
    };
    PendDetailComponent.prototype.updateData = function () {
        this.pending = [];
        var off = this.updateFormData.controls['office'].value;
        this.getData(off);
    };
    PendDetailComponent.prototype.getUserName = function (uid, userData) {
        var x = userData.map(function (x) {
            return x.uid;
        }).indexOf(uid);
        return userData[x].knownAs;
    };
    PendDetailComponent.prototype.convertUIDtoName = function (pend) {
        var _this = this;
        pend.map(function (element) {
            element.jobOwner = _this.getUserName(element.jobOwner, _this.users);
            element.sendOut = _this.getUserName(element.sendOut, _this.users);
        });
    };
    PendDetailComponent.prototype.calcFeeAmount = function (pend) {
        if (pend.feePercent < 1)
            return pend.baseSalary * pend.feePercent;
        else
            return pend.baseSalary * (pend.feePercent / 100);
    };
    PendDetailComponent.prototype.calcAvgFee = function (pend) {
        var sum = pend.reduce(function (accumulator, Currentvalue) {
            return accumulator + Number(Currentvalue.feePercent);
        }, 0);
        return (sum / pend.length);
    };
    PendDetailComponent.prototype.calcTotal = function (pend) {
        var sum = pend.reduce(function (accumulator, Currentvalue) {
            return accumulator + Number(Currentvalue.baseSalary * (Currentvalue.feePercent / 100));
        }, 0);
        return (sum);
    };
    PendDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pend-detail',
            template: __webpack_require__(/*! ./pend-detail.component.html */ "./src/app/pend-detail/pend-detail.component.html"),
            styles: [__webpack_require__(/*! ./pend-detail.component.css */ "./src/app/pend-detail/pend-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _services_data_service_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], PendDetailComponent);
    return PendDetailComponent;
}());



/***/ }),

/***/ "./src/app/pend-edit/pend-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/pend-edit/pend-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    padding: 1rem;\r\n}\r\nlabel.alert-danger{\r\n    font: bold;\r\n    background: none;\r\n    font-size: .75rem;\r\n    font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pend-edit/pend-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/pend-edit/pend-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Pending</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n    <form [formGroup]=\"pendForm\" >\r\n        <div class=\"form-group\" >\r\n            <div class=\"row\">\r\n                <div class=\"col\"> \r\n                    <label class=\"control-label\">Company:</label>\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"company\" placeholder=\"Company\" >\r\n                    <label class=\"control-label has-error\" \r\n                        [ngClass]=\"{'alert-danger': pendForm.get('company').errors \r\n                        && pendForm.get('company').touched}\"\r\n\r\n                        *ngIf=\"pendForm.get('company').touched \r\n                        && pendForm.get('company').hasError('required')\">\r\n                        Company is Required\r\n                  </label>\r\n                </div>\r\n                <div class=\"col\">\r\n                        <label class=\"control-label\">Job Owner:</label>\r\n                        <select class=\"form-control\" formControlName=\"jobOwner\">\r\n                            <option *ngFor=\"let employee of employees\" value=\"{{employee.uid}}\">{{employee.knownAs}}</option>\r\n                        </select>\r\n                        <label class=\"control-label has-error\" \r\n                            [ngClass]=\"{'alert-danger': pendForm.get('jobOwner').errors \r\n                            && pendForm.get('jobOwner').touched}\"\r\n\r\n                            *ngIf=\"pendForm.get('jobOwner').touched \r\n                            && pendForm.get('jobOwner').hasError('required')\">\r\n                            Job Owner as is Required\r\n                      </label>\r\n                </div>\r\n                <div class=\"col\">\r\n                        <label class=\"control-label\" >Candidate Owner:</label>\r\n                        <select class=\"form-control\" formControlName=\"sendOut\">\r\n                            <option *ngFor=\"let employee of employees\" value=\"{{employee.uid}}\">{{employee.knownAs}}</option>\r\n                        </select>\r\n                        <label class=\"control-label has-error rounded\" \r\n                        [ngClass]=\"{'alert-danger': pendForm.get('jobOwner').errors \r\n                        && pendForm.get('sendOut').touched}\"\r\n\r\n                        *ngIf=\"pendForm.get('sendOut').touched \r\n                        && pendForm.get('sendOut').hasError('required')\">\r\n                        Candidate Owner Required\r\n                  </label>\r\n                </div>\r\n            </div>\r\n           \r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"candidate\" placeholder=\"Candidate\" >\r\n                    <label class=\"control-label has-error\" \r\n                    [ngClass]=\"{'alert-danger': pendForm.get('candidate').errors \r\n                    && pendForm.get('candidate').touched}\"\r\n\r\n                    *ngIf=\"pendForm.get('candidate').touched \r\n                    && pendForm.get('candidate').hasError('required')\">\r\n                    Candidate is Required \r\n              </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">\r\n                    <input class=\"form-control\" type=\"text\" formControlName=\"baseSalary\" placeholder=\"Salary\" >\r\n                    <label class=\"control-label has-error\" \r\n                    [ngClass]=\"{'alert-danger': pendForm.get('baseSalary').errors \r\n                    && pendForm.get('baseSalary').touched}\"\r\n\r\n                    *ngIf=\"pendForm.get('baseSalary').touched \r\n                    && pendForm.get('baseSalary').hasError('required')\">\r\n                   Salary Required\r\n              </label>\r\n                    <div class=\"row\">\r\n                        <div class=\"co\">\r\n                            <input class=\"form-control\" type=\"text\" formControlName=\"feePercent\" placeholder=\"Fee\" >\r\n                            <label class=\"control-label has-error\" \r\n                            [ngClass]=\"{'alert-danger': pendForm.get('feePercent').errors \r\n                            && pendForm.get('feePercent').touched}\"\r\n\r\n                            *ngIf=\"pendForm.get('feePercent').touched \r\n                            && pendForm.get('feePercent').hasError('required')\">\r\n                            Fee Required\r\n                      </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-9\">\r\n                    <textarea class=\"form-control\" rows=\"4\" placeholder=\"Notes\" formControlName=\"status\"></textarea>\r\n                    <label class=\"control-label has-error\" \r\n                    [ngClass]=\"{'alert-danger': pendForm.get('status').errors \r\n                    && pendForm.get('status').touched}\"\r\n\r\n                    *ngIf=\"pendForm.get('status').touched \r\n                    && pendForm.get('status').hasError('required')\">\r\n                    Notes Required\r\n                    </label>\r\n                </div>\r\n            </div>\r\n          \r\n            \r\n\r\n        </div>\r\n    </form> <!-- end form -->\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n   \r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"exit()\">cancel</button>\r\n      <button type=\"button\" [disabled]=\"!pendForm.valid\" class=\"btn btn-outline-dark\" (click)=\"save()\">Save</button>\r\n    </div>\r\n</ng-template>\r\n\r\n  \r\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Add Pending</button>\r\n\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pend-edit/pend-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pend-edit/pend-edit.component.ts ***!
  \**************************************************/
/*! exports provided: PendEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendEditComponent", function() { return PendEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendEditComponent = /** @class */ (function () {
    function PendEditComponent(config, modalService, fb, dataService, afAuth) {
        this.modalService = modalService;
        this.fb = fb;
        this.dataService = dataService;
        this.afAuth = afAuth;
        this.employees = [];
        this.currUserFromFirebase = [];
        config.backdrop = 'static';
        config.keyboard = false;
    }
    PendEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pendForm = this.fb.group({
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            candidate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            jobOwner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sendOut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            baseSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            feePercent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            user: [''],
            office: ['']
        });
        //get current users uid
        this.user = this.afAuth.auth.currentUser;
        // get user from FireStore set users from office;
        // TODO: refactor 
        this.dataService.getOfficeUser(this.user.uid)
            .subscribe(function (data) {
            _this.currUserFromFirebase = data;
            _this.getOffice();
            _this.getUsersFromOffice(_this.office);
        });
    };
    PendEditComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', backdropClass: 'light-blue-backdrop' })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.pendForm.reset();
        });
    };
    PendEditComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
            //this.pendForm.reset();
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
            //this.pendForm.reset();
        }
    };
    PendEditComponent.prototype.save = function () {
        this.pendForm.controls['user'].setValue(this.user.uid);
        this.pendForm.controls['office'].setValue(this.office);
        this.pending.push(this.pendForm.value);
        this.modalService.dismissAll();
        //save data 
        this.dataService.saveData(this.pendForm.value, 'items');
        this.pendForm.reset();
    };
    PendEditComponent.prototype.exit = function () {
        this.modalService.dismissAll();
        this.pendForm.reset();
    };
    PendEditComponent.prototype.getOffice = function () {
        var _this = this;
        this.currUserFromFirebase.forEach(function (value) {
            _this.office = value.office;
        });
    };
    PendEditComponent.prototype.getUsersFromOffice = function (office) {
        var _this = this;
        this.dataService.getUsersFromOffice(office).subscribe(function (data) {
            _this.employees = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PendEditComponent.prototype, "pending", void 0);
    PendEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pend-edit',
            template: __webpack_require__(/*! ./pend-edit.component.html */ "./src/app/pend-edit/pend-edit.component.html"),
            styles: [__webpack_require__(/*! ./pend-edit.component.css */ "./src/app/pend-edit/pend-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], PendEditComponent);
    return PendEditComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _pend_detail_pend_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pend-detail/pend-detail.component */ "./src/app/pend-detail/pend-detail.component.ts");
/* harmony import */ var _pend_edit_pend_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pend-edit/pend-edit.component */ "./src/app/pend-edit/pend-edit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-guard.guard */ "./src/app/auth-guard.guard.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");





var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'signUp', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"] },
    { path: 'detail', component: _pend_detail_pend_detail_component__WEBPACK_IMPORTED_MODULE_0__["PendDetailComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'app-pend-edit', component: _pend_edit_pend_edit_component__WEBPACK_IMPORTED_MODULE_1__["PendEditComponent"], canActivate: [_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// wrappeer service for Alertify 

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
                return;
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user = this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc('users/' + user.uid).valueChanges();
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
        }));
    }
    /// Email/Password Auth 
    AuthService.prototype.emailSignUp = function (email, password, displayName, office, photoURL) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.router.navigate(['/detail']);
            _this.afAuth.auth.currentUser.updateProfile({ 'displayName': displayName, 'photoURL': photoURL });
            return _this.setUserDoc(user, displayName, office);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // if error, log and notify user 
    AuthService.prototype.handleError = function (error) {
        console.error(error.message);
    };
    // sets user data to firestore after successful login
    AuthService.prototype.setUserDoc = function (user, displayName, off) {
        var userRef = this.afs.doc('users/' + user.user.uid);
        var data = {
            uid: user.user.uid,
            email: user.user.email,
            knownAs: displayName,
            office: off
        };
        return userRef.set(data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(afs) {
        this.afs = afs;
    }
    DataService.prototype.getPendData = function (collection, office) {
        var pendingData;
        this.pendingCollection = this.afs.collection(collection, function (ref) {
            return ref
                .where('office', '==', office);
        });
        pendingData = this.pendingCollection.valueChanges();
        return pendingData;
    };
    DataService.prototype.saveData = function (object, collection) {
        this.pendingCollection = this.afs.collection(collection);
        this.pendingCollection.add(object);
    };
    DataService.prototype.getUserData = function (user) {
        this.pendingCollection = this.afs.collection('items', function (ref) {
            return ref
                .where('jobOwner', '==', user)
                .where('sendOut', '==', user);
        });
        return this.pendingCollection.valueChanges();
    };
    DataService.prototype.getUsersFromOffice = function (office) {
        this.userCollection = this.afs.collection('users', function (ref) {
            return ref
                .where('office', '==', office);
        });
        return this.userCollection.valueChanges();
    };
    DataService.prototype.getOfficeUser = function (uid) {
        this.userCollection = this.afs.collection('users', function (ref) {
            return ref
                .where('uid', '==', uid);
        });
        return this.userCollection.valueChanges();
    };
    DataService.prototype.getUsers = function () {
        var userData;
        this.userCollection = this.afs.collection('users');
        userData = this.userCollection.valueChanges();
        return userData;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-danger{\r\n    background: none;\r\n}"

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(auth.user | async) || {} as user\">\r\n    \r\n\r\n  <form [formGroup]=\"signupForm\" *ngIf=\"!user.uid\" (ngSubmit)=\"signup()\">\r\n \r\n    <h3>New User Sign Up :  </h3>\r\n  <!-- email input -->\r\n  <div class=\"form-group\"\r\n      [ngClass]=\"{'alert-danger': signupForm.get('email').errors \r\n                && signupForm.get('email').touched}\">\r\n\r\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\r\n\r\n      <div *ngIf=\"email.invalid && email.dirty\">\r\n          Your email doesnt look quite right\r\n      </div>\r\n\r\n      <label class=\"control-label has-error\" \r\n        *ngIf=\"signupForm.get('email').touched \r\n        && signupForm.get('email').hasError('required')\">\r\n        email is required\r\n      </label>\r\n  </div>\r\n\r\n   <!-- input knownAs-->\r\n  <div class=\"form-group\" \r\n        [ngClass]=\"{'alert-danger': signupForm.get('knownAs').errors \r\n        && signupForm.get('knownAs').touched}\">\r\n      <input  class=\"form-control\"\r\n        placeholder=\"Known as\" \r\n        formControlName=\"knownAs\">\r\n\r\n      <label class=\"control-label alert-danger\" \r\n        *ngIf=\"signupForm.get('knownAs').touched \r\n        && signupForm.get('knownAs').hasError('required')\">\r\n        Known as is required\r\n      </label>\r\n  </div>\r\n\r\n    <!-- password -->\r\n  <div class=\"form-group\" \r\n        [ngClass]=\"{'alert-danger': signupForm.get('password').errors \r\n        && signupForm.get('password').touched}\">\r\n      <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                                            required placeholder=\"Password\">\r\n\r\n      <div *ngIf=\"password.invalid && password.touched\">\r\n        Password must be between 6 and 24 charachters and at least one number\r\n      </div>\r\n      <label class=\"control-label alert-danger\" \r\n          *ngIf=\"signupForm.get('password').touched \r\n          && signupForm.get('password').hasError('required')\">\r\n          Password Required\r\n      </label>\r\n  </div>\r\n\r\n    <!-- confirm password-->\r\n  <div class=\"form-group\" \r\n        [ngClass]=\"{'alert-danger': signupForm.get('confirmPassword').errors\r\n        && signupForm.get('confirmPassword').touched\r\n        || signupForm.get('confirmPassword').touched\r\n        && signupForm.hasError('mismatch') } \">\r\n      <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" \r\n                                                required placeholder=\"confirm password\">\r\n\r\n\r\n      <label *ngIf=\"signupForm.hasError('mismatch') \r\n                && signupForm.get('confirmPassword').touched\" \r\n        class=\"control-label has-error\" \r\n        for=\"inputError1\" \r\n        id=\"inputError1\">\r\n        password must match\r\n    </label>\r\n       \r\n  </div>\r\n\r\n  <!-- Office -->\r\n  <div class=\"form-group\" \r\n      [ngClass]=\"{'alert-danger': signupForm.get('office').errors \r\n      && signupForm.get('office').touched}\">\r\n    <label for=\"office\" class=\"control-label\">Office</label>\r\n      <select class=\"form-control\" formControlName=\"office\">\r\n        <option *ngFor=\"let office of offices\" value=\"{{office}}\">{{office}}<option>\r\n    </select>\r\n    <label class=\"control-label alert-danger\" \r\n          *ngIf=\"signupForm.get('office').touched \r\n          && signupForm.get('office').hasError('required')\">\r\n          Office Required\r\n      </label>\r\n  </div>\r\n\r\n\r\n    <div *ngIf=\"signupForm.valid\">lets do this! {{ signupForm.valid}} </div>\r\n\r\n    <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"form-control\">Submit</button>\r\n    \r\n \r\n</form>\r\n\r\n\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_offices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/offices */ "./src/app/models/offices.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, auth, router, afAuth, afs) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.afAuth = afAuth;
        this.afs = afs;
        this.offices = _models_offices__WEBPACK_IMPORTED_MODULE_4__["Offices"];
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                ]
            ],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            office: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.passwordMatchValidator });
        this.detailForm = this.fb.group({
            'catchPhrase': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    UserFormComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    Object.defineProperty(UserFormComponent.prototype, "email", {
        // getters for form
        get: function () { return this.signupForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFormComponent.prototype, "password", {
        get: function () { return this.signupForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFormComponent.prototype, "knownAs", {
        get: function () { return this.signupForm.get('knownAs'); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(UserFormComponent.prototype, "office", {
        get: function () { return this.signupForm.get('office'); },
        enumerable: true,
        configurable: true
    });
    ;
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.email.value, this.password.value, this.knownAs.value, this.office.value);
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signUp',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
    ], UserFormComponent);
    return UserFormComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAczS72Zzzn94XMd4B5bSn0gdqbkwOVJT4',
        authDomain: 'pending-ed724.firebaseapp.com',
        databaseURL: 'https://pending-ed724.firebaseio.com',
        projectId: 'pending-ed724',
        storageBucket: 'pending-ed724.appspot.com',
        messagingSenderId: '589562918841'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nicchl01\Downloads\projects\Pending\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
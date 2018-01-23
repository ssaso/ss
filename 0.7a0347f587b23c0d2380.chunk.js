webpackJsonp([0],{"9Yz1":function(e,t){e.exports='<div class="jumbotron">\r\n    <div class="container">\r\n        <div class="col-sm-8 col-sm-offset-2">\r\n            <ss-alert></ss-alert>\r\n            <div class="col-sm-6 col-sm-offset-3">\r\n              <h2>Login</h2>\r\n              <form name="form" (ngSubmit)="f.form.valid && login()" #f="ngForm" novalidate>\r\n                <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n                  <label for="username">Username</label>\r\n                  <input type="text" class="form-control" name="username" [(ngModel)]="model.username" #username="ngModel" required />\r\n                  <div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div>\r\n                </div>\r\n                <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !password.valid }">\r\n                  <label for="password">Password</label>\r\n                  <input type="password" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel" required />\r\n                  <div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <button [disabled]="loading" class="btn btn-primary">Login</button>\r\n                  <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="\r\n                  />\r\n                  <a routerLink=\'/auth/register\' class="btn btn-link">Register</a>\r\n                </div>\r\n              </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},Fhhn:function(e,t,r){(e.exports=r("rP7Y")(!1)).push([e.i,".xx{background:#080808;pointer-events:all;box-shadow:0 5px 15px rgba(0,0,0,.5);position:relative;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;opacity:.7;max-width:inherit;height:inherit}.vertical-alignment-helper{display:table;height:100%;width:100%;pointer-events:none}.vertical-align-center{display:table-cell;vertical-align:middle;pointer-events:none}.modal-content{width:inherit;max-width:inherit;height:inherit;margin:0 auto;pointer-events:all}.register-label{margin-top:20px;text-align:center;margin-bottom:10px;color:#f5f5f5}.register-form{padding-left:15px;padding-right:15px;padding-bottom:15px;padding-top:10px;color:#f5f5f5}.register-img{position:absolute;left:457px;width:54%!important;top:46px;pointer-events:none}",""]),e.exports=e.exports.toString()},mXuZ:function(e,t){e.exports='\x3c!-- <div class="jumbotron">\r\n\t<div class="container">\r\n\t\t<div class="col-sm-8 col-sm-offset-2">\r\n\t\t\t<ss-alert></ss-alert> --\x3e\r\n<img src="ss/assets/img/dark_energy_soul_sword__no_background__by_solidsunny954-d9xs76y.png"\r\n  class="register-img">\r\n<div class="vertical-alignment-helper">\r\n  <div class="modal-dialog vertical-align-center">\r\n    <div class="col-sm-4 col-sm-offset-4 xx">\r\n      <h2 class="register-label">Register</h2>\r\n      <form name="form" class="register-form" (ngSubmit)="f.form.valid && register()" #f="ngForm" novalidate>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n          <label for="firstName">First Name</label>\r\n          <input type="text" class="form-control" name="firstName" [(ngModel)]="model.firstName" #firstName="ngModel" required />\r\n          <div *ngIf="f.submitted && !firstName.valid" class="help-block">First Name is required</div>\r\n        </div>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n          <label for="lastName">Last Name</label>\r\n          <input type="text" class="form-control" name="lastName" [(ngModel)]="model.lastName" #lastName="ngModel" required />\r\n          <div *ngIf="f.submitted && !lastName.valid" class="help-block">Last Name is required</div>\r\n        </div>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n          <label for="username">Username</label>\r\n          <input type="text" class="form-control" name="username" [(ngModel)]="model.username" #username="ngModel" required />\r\n          <div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div>\r\n        </div>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !password.valid }">\r\n          <label for="password">Password</label>\r\n          <input type="password" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel" required />\r\n          <div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>\r\n        </div>\r\n        <div class="form-group">\r\n          <button [disabled]="loading" class="btn btn-primary">Register</button>\r\n          <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />\r\n          <a routerLink=\'/auth/login\' class="btn btn-link">Cancel</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\x3c!-- </div>\r\n\t</div>\r\n</div> --\x3e\r\n'},rZ3z:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("LMZF"),i=r("Un6q"),o=r("9iV4"),s=r("0nO6"),a=r("UHIZ"),A=r("AP4T"),l=r("dmC+");A.a.prototype.map=l.a;var c=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e){this.http=e}return e.prototype.login=function(e,t){return this.http.post("/api/authenticate",{username:e,password:t}).map(function(e){return e&&e.token&&localStorage.setItem("currentUser",JSON.stringify(e)),e})},e.prototype.logout=function(){localStorage.removeItem("currentUser")},e=c([Object(n.A)(),d("design:paramtypes",[o.b])],e)}(),u=r("TO51"),g=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},p=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(e){var t=this;this.router=e,this.subject=new u.a,this.keepAfterNavigationChange=!1,e.events.subscribe(function(e){e instanceof a.b&&(t.keepAfterNavigationChange?t.keepAfterNavigationChange=!1:t.subject.next())})}return e.prototype.success=function(e,t){void 0===t&&(t=!1),this.keepAfterNavigationChange=t,this.subject.next({type:"success",text:e})},e.prototype.error=function(e,t){void 0===t&&(t=!1),this.keepAfterNavigationChange=t,this.subject.next({type:"error",text:e})},e.prototype.getMessage=function(){return this.subject.asObservable()},e=g([Object(n.A)(),p("design:paramtypes",[a.c])],e)}(),h=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},b=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(){function e(e,t,r,n){this.route=e,this.router=t,this.authenticationService=r,this.alertService=n,this.model={},this.loading=!1}return e.prototype.ngOnInit=function(){this.authenticationService.logout(),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"},e.prototype.login=function(){var e=this;this.loading=!0,this.authenticationService.login(this.model.username,this.model.password).subscribe(function(t){e.router.navigate([e.returnUrl])},function(t){e.alertService.error(t),e.loading=!1})},e=h([Object(n.n)({template:r("9Yz1")}),b("design:paramtypes",[a.a,a.c,f,m])],e)}(),w=r("B7hO"),y=r("fAeS"),C=Object(y.j)("slideInOutAnimation",[Object(y.g)("*",Object(y.h)({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)"})),Object(y.i)(":enter",[Object(y.h)({right:"-400%",backgroundColor:"rgba(0, 0, 0, 0)"}),Object(y.e)(".5s ease-in-out",Object(y.h)({right:0,backgroundColor:"rgba(0, 0, 0, 0.8)"}))]),Object(y.i)(":leave",[Object(y.e)(".5s ease-in-out",Object(y.h)({right:"-400%",backgroundColor:"rgba(0, 0, 0, 0)"}))])]),I=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},j=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(){function t(e,t,r){this.router=e,this.userService=t,this.alertService=r,this.model={},this.loading=!1}return t.prototype.register=function(){var e=this;this.loading=!0,this.userService.create(this.model).subscribe(function(t){e.alertService.success("Registration successful",!0),e.router.navigate(["auth/login"])},function(t){e.alertService.error(t),e.loading=!1})},t=I([Object(n.n)({moduleId:e.i.toString(),template:r("mXuZ"),styles:[r("Fhhn")],animations:[C],host:{"[@slideInOutAnimation]":""}}),j("design:paramtypes",[a.c,w.a,m])],t)}(),O=[{path:"login",component:v},{path:"register",component:R},{path:"**",redirectTo:"login"}],Q=a.d.forChild(O),M=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},x=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(){function e(e){this.alertService=e}return e.prototype.ngOnInit=function(){var e=this;this.alertService.getMessage().subscribe(function(t){e.message=t})},e=M([Object(n.n)({selector:"ss-alert",template:r("ySdI")}),x("design:paramtypes",[m])],e)}(),E=r("kbqb"),D=r("fgk8");r.d(t,"LoginAuthModule",function(){return B});var G=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},B=function(){function e(){}return e=G([Object(n.I)({imports:[i.b,Q,o.c,s.a],declarations:[v,R,k],providers:[o.c,f,w.a,m,{provide:o.a,useClass:E.a,multi:!0},D.a]})],e)}()},ySdI:function(e,t){e.exports="<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\r\n"}});
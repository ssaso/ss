webpackJsonp([2],{"2L+1":function(t,e){t.exports='<div class="col-sm-12 col-md-6 col-md-offset-3 about-p">\r\n  <h3> Technologies used to build this project:</h3>\r\n  <div class="Link">\r\n\r\n\r\n    <ul>\r\n      <li>\r\n        Angular 5 (Latest stable v5.2.1)\r\n      </li>\r\n      <li>\r\n        Angular-Cli (backed up with Webpack)\r\n      </li>\r\n      <li>\r\n        Typescript 2\r\n      </li>\r\n      <li>\r\n        RxJs\r\n      </li>\r\n      <li>\r\n        Html5\r\n      </li>\r\n      <li>\r\n        CSS\r\n      </li>\r\n      <li>\r\n        NPM\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n<style>\r\n  div[data-type=\'xx\'] {\r\n    color: red;\r\n  }\r\n</style>\r\n'},HLOF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("LMZF"),o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([Object(r.Component)({selector:"ss-about",template:n("Jlc5"),styles:[n("ij+s"),n("eKMT"),n("axQO")]}),i("design:paramtypes",[])],t)}(),a=n("UHIZ"),c=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t){var e=this;this.router=t,t.events.subscribe(function(t){t instanceof a.b&&("/about"===t.url?e.active_link=!0:e.active_link=!1)})}return t.prototype.ngOnInit=function(){},t=c([Object(r.Component)({template:n("K/Nv"),styles:[n("eKMT")]}),l("design:paramtypes",[a.d])],t)}(),p=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(){this.x=3,this.y=8,this.x1=this.y-this.x,this.z=100*this.x/this.y,this.z1=100*this.x1/this.y,this.z2=(this.z1+this.z1)/100+1,this.z3=(this.y-this.x)/this.x*100}return t.prototype.ngOnInit=function(){},t.prototype.ngDoCheck=function(){this.x1=this.y-this.x,this.z=100*this.x/this.y,this.z1=100*this.x1/this.y,this.z2=(this.z1+this.z1)/100+1,this.z3=(this.y-this.x)/this.x*100},t=p([Object(r.Component)({selector:"ss-technical",template:n("2L+1"),styles:[n("pK9O"),n("axQO")]}),f("design:paramtypes",[])],t)}(),m=n("81Ei"),h=n("B7hO"),b=n("i+pZ"),y=n("fAeS"),g=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},x=function(){function t(t,e){this.userService=t,this.componentFactoryResolver=e,this.user="Sasho",this.usernameToDelete="",this.users=[],this.showWarning=!1,this.msgComponentClass=b.a,this.currentUser=JSON.parse(localStorage.getItem("currentUser")),null===this.currentUser&&(this.currentUser={id:0,username:"",password:"",firstName:"Unknown",lastName:""})}return t.prototype.ngOnInit=function(){this.loadAllUsers()},t.prototype.deleteUser=function(t){this.usernameToDelete=" "+t.firstName+" "+t.lastName,this.showWarning=!0,this.tempId=t.id},t.prototype.loadAllUsers=function(){var t=this;this.userService.getAll().subscribe(function(e){t.users=e})},t.prototype.onVoted=function(t){var e=this;t&&this.userService.delete(this.tempId).subscribe(function(){e.loadAllUsers()}),this.showWarning=!1},t=g([Object(r.Component)({selector:"ss-users",template:n("Y/j7"),styles:[n("axQO")],animations:[Object(y.j)("fadeInX",[Object(y.i)(":enter",[Object(y.h)({opacity:.1}),Object(y.e)("400ms",Object(y.h)({opacity:1}))]),Object(y.i)(":leave",[Object(y.h)({opacity:1}),Object(y.e)("400ms",Object(y.h)({opacity:0}))])])]}),v("design:paramtypes",[h.a,r.ComponentFactoryResolver])],t)}(),w=[{path:"",component:u,children:[{path:"",component:s},{path:"technical",component:d},{path:"users",component:x,canActivate:[m.a]}]}],k=a.e.forChild(w),O=n("0nO6"),j=n("Un6q");n.d(e,"AboutModule",function(){return _});var R=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},_=function(){function t(){}return t=R([Object(r.NgModule)({declarations:[s,u,d,x,b.a],entryComponents:[b.a],imports:[k,j.CommonModule,O.a],exports:[],providers:[]})],t)}()},Jlc5:function(t,e){t.exports='<div class="col-sm-12 col-md-6 col-md-offset-3 about-p Link">\r\n  <p>I started this project at the beginning of 2018 only for practicing and experimenting. My goal was to create a website\r\n    that would be hosted on github and with only ONE command I will create a production build and deploy a new version to the\r\n    cloud. After I succeed in that, then I decided to use it like a personal CV.\r\n  </p>\r\n  <p class="about-p">Also one of the goals was to build website which will include all best practices and to lay the foundations of a website\r\n    that will grow each day. Any component and module is reusable and can be easy added to other projects.\r\n  </p>\r\n  <p class="about-p">Tested browsers are:\r\n    <a href="https://www.google.com/chrome/">Chrome</a>,\r\n    <a href="https://brave.com">Brave</a> and\r\n    <a href="https://www.microsoft.com/en-us/windows/microsoft-edge">Edge</a>\r\n  </p>\r\n  \x3c!-- <p class="about-p">The site may seems more complicated then it should be, but the point is to show and implement more features\r\n  </p>--\x3e\r\n</div>\r\n'},"K/Nv":function(t,e){t.exports='<h2 class="text-center">About the project</h2>\r\n\r\n<div class="col-md-6 col-md-offset-3 div-ul-center">\r\n  <ul class="nav navbar-nav ul-center">\r\n    <li>\r\n      <a routerLink=\'/about\'\r\n       [ngClass]="{\'active-link\': active_link}">Basic info</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\'/about/technical\' routerLinkActive="active-link"> Technical</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\'/about/users\' routerLinkActive="active-link">Users</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div class="col-sm-12 general-div">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n'},"Y/j7":function(t,e){t.exports='<div class="col-sm-12 col-md-6 col-md-offset-3 about-p">\r\n  <h3>\r\n    All registered users:</h3>\r\n  <ul class="Link">\r\n    <li *ngFor="let user of users">\r\n      {{user.username}} ({{user.firstName}} {{user.lastName}})\r\n      <span *ngIf="user.id != currentUser.id"> - </span>\r\n      <a *ngIf="user.id != currentUser.id" (click)="deleteUser(user)">Delete</a>\r\n    </li>\r\n  </ul>\r\n  <p>\r\n    <a [routerLink]="[\'/auth/login\']">Logout</a>\r\n  </p>\r\n</div>\r\n<ss-msg *ngIf="showWarning" [username]="usernameToDelete" (response)="onVoted($event)" [@fadeInX]></ss-msg>\r\n'},eKMT:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,".nav>li>a:focus,.nav>li>a:hover{text-decoration:underline;background-color:transparent}.about-p{font-size:16px;font-weight:500;text-indent:30px}.div-ul-center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;height:50px}.ul-center{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.active-link{text-decoration:underline}",""]),t.exports=t.exports.toString()},pK9O:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,".mybutton.ultra a span,.mybutton.ultra button span{padding:0 30px}.mybutton.big a,.mybutton.big button{font-size:17px;line-height:50px}.mybutton.big a span,.mybutton.big button span{padding:0 20px}.mybutton.medium a,.mybutton.medium button{font-size:14px;line-height:40px}.mybutton.medium a span,.mybutton.medium button span{padding:0 15px}.mybutton.small a,.mybutton.small button{font-size:12px;line-height:35px}.mybutton.small a span,.mybutton.small button span{padding:0 10px}.mybutton{display:inline}.mybutton2,.mybutton2 a,.mybutton2 button,.mybutton a,.mybutton a span,.mybutton button,.mybutton button span{position:relative;display:inline-block}.mybutton a span,.mybutton button span{color:#fff;text-align:center}@media (min-width:992px){.mybutton a,.mybutton button{-webkit-perspective:1000px;perspective:1000px;letter-spacing:0}.mybutton a span{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.mybutton a:hover span{-webkit-transform:rotateX(90deg) translateY(-22px);transform:rotateX(90deg) translateY(-22px)}.csstransforms3d .mybutton a span:before{position:absolute;top:100%;left:0;width:100%;height:100%;content:attr(data-hover);transition:background .3s;-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% 0;transform-origin:50% 0}}.mybutton.ultra a,.mybutton.ultra button{font-size:20px;line-height:60px}.mybutton a,.mybutton button{-webkit-perspective:1000px;perspective:1000px;padding:0;letter-spacing:0;text-transform:uppercase;border:0;outline:0;text-decoration:none;font-weight:400;text-shadow:0 0 1px hsla(0,0%,100%,.3)}.mybutton a span,.mybutton button span{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.mybutton a span{background:#0098f9}@media (min-width:992px){.csstransforms3d .mybutton a span:before,.csstransforms3d .mybutton button span:before{position:absolute;top:100%;left:0;width:100%;height:100%;content:attr(data-hover);transition:background .3s;-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% 0;transform-origin:50% 0}}a:focus,a:hover{color:#222;text-decoration:none}",""]),t.exports=t.exports.toString()}});
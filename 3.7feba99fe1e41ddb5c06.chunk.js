webpackJsonp([3],{"2L+1":function(t,e){t.exports='<div class="text-center">\r\n  \x3c!-- <h1 > Skills:</h1> --\x3e\r\n\r\n  <input type="text" [(ngModel)]="x" />\r\n  <input type="text" [(ngModel)]="y">\r\n  <div class="col-sm-12"> Percentage: {{z}}%</div>\r\n  <div class="col-sm-12">Coefficient: {{ z2 }}</div>\r\n  <div class="col-sm-12">Percentage incrised: {{ z3 }}</div>\r\n</div>\r\n\r\n<div class="mybutton ultra">\r\n  <a class="start-button" data-hover="Discover!">\r\n    <span data-hover="Discover!">Are you ready?</span>\r\n  </a>\r\n</div>\r\n<style>\r\n    div[data-type=\'xx\']{\r\n      color:red;\r\n    }\r\n  </style>\r\n'},HLOF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("LMZF"),r=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([Object(o.n)({selector:"ss-about",template:n("Jlc5"),styles:[n("ij+s")]}),i("design:paramtypes",[])],t)}(),s=n("UHIZ"),c=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},u=function(){function t(){}return t=c([Object(o.n)({template:n("K/Nv"),styles:[n("eKMT")]})],t)}(),p=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(){this.x=3,this.y=8,this.x1=this.y-this.x,this.z=100*this.x/this.y,this.z1=100*this.x1/this.y,this.z2=(this.z1+this.z1)/100+1,this.z3=(this.y-this.x)/this.x*100}return t.prototype.ngOnInit=function(){},t.prototype.ngDoCheck=function(){this.x1=this.y-this.x,this.z=100*this.x/this.y,this.z1=100*this.x1/this.y,this.z2=(this.z1+this.z1)/100+1,this.z3=(this.y-this.x)/this.x*100},t=p([Object(o.n)({selector:"ss-technical",template:n("2L+1"),styles:[n("pK9O")]}),l("design:paramtypes",[])],t)}(),d=n("81Ei"),b=[{path:"",component:u,children:[{path:"",component:a},{path:"technical",component:f,canActivate:[d.a]}]}],m=s.e.forChild(b),h=n("0nO6");n.d(e,"AboutModule",function(){return g});var y=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=function(){function t(){}return t=y([Object(o.J)({declarations:[a,u,f],imports:[m,h.a],exports:[],providers:[]})],t)}()},Jlc5:function(t,e){t.exports='<div class="col-sm-12">\r\n  about component\r\n</div>\r\n'},"K/Nv":function(t,e){t.exports='<div class="text-center">\r\n  <h2 class="text-center">About the project</h2>\r\n  <div>I started this project at the begining of 2018 only for practicing and experimenting.</div>\r\n  <div>My goal was to create a website that would be hosted on github and with only 1 command I will create a production build\r\n    and deploy a new version to the cloud.\r\n  </div>\r\n</div>\r\n<div class="col-md-6 col-md-offset-3">\r\n  <ul class="nav navbar-nav">\r\n    <li>\r\n      <a routerLink=\'/about/technical\'> Technical</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\'/about/users\'>Users</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<router-outlet></router-outlet>\r\n'},eKMT:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,".nav>li>a:focus,.nav>li>a:hover{text-decoration:underline;background-color:transparent}",""]),t.exports=t.exports.toString()},pK9O:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,".mybutton.ultra a span,.mybutton.ultra button span{padding:0 30px}.mybutton.big a,.mybutton.big button{font-size:17px;line-height:50px}.mybutton.big a span,.mybutton.big button span{padding:0 20px}.mybutton.medium a,.mybutton.medium button{font-size:14px;line-height:40px}.mybutton.medium a span,.mybutton.medium button span{padding:0 15px}.mybutton.small a,.mybutton.small button{font-size:12px;line-height:35px}.mybutton.small a span,.mybutton.small button span{padding:0 10px}.mybutton{display:inline}.mybutton2,.mybutton2 a,.mybutton2 button,.mybutton a,.mybutton a span,.mybutton button,.mybutton button span{position:relative;display:inline-block}.mybutton a span,.mybutton button span{color:#fff;text-align:center}@media (min-width:992px){.mybutton a,.mybutton button{-webkit-perspective:1000px;perspective:1000px;letter-spacing:0}.mybutton a span{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.mybutton a:hover span{-webkit-transform:rotateX(90deg) translateY(-22px);transform:rotateX(90deg) translateY(-22px)}.csstransforms3d .mybutton a span:before{position:absolute;top:100%;left:0;width:100%;height:100%;content:attr(data-hover);transition:background .3s;-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% 0;transform-origin:50% 0}}.mybutton.ultra a,.mybutton.ultra button{font-size:20px;line-height:60px}.mybutton a,.mybutton button{-webkit-perspective:1000px;perspective:1000px;padding:0;letter-spacing:0;text-transform:uppercase;border:0;outline:0;text-decoration:none;font-weight:400;text-shadow:0 0 1px hsla(0,0%,100%,.3)}.mybutton a span,.mybutton button span{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.mybutton a span{background:#0098f9}@media (min-width:992px){.csstransforms3d .mybutton a span:before,.csstransforms3d .mybutton button span:before{position:absolute;top:100%;left:0;width:100%;height:100%;content:attr(data-hover);transition:background .3s;-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg);-webkit-transform-origin:50% 0;transform-origin:50% 0}}a:focus,a:hover{color:#222;text-decoration:none}",""]),t.exports=t.exports.toString()}});
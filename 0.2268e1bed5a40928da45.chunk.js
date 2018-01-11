webpackJsonp([0],{"9Yz1":function(e,t){e.exports='<div class="jumbotron">\r\n    <div class="container">\r\n        <div class="col-sm-8 col-sm-offset-2">\r\n            <ss-alert></ss-alert>\r\n            <div class="col-sm-6 col-sm-offset-3">\r\n              <h2>Login</h2>\r\n              <form name="form" (ngSubmit)="f.form.valid && login()" #f="ngForm" novalidate>\r\n                <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n                  <label for="username">Username</label>\r\n                  <input type="text" class="form-control" name="username" [(ngModel)]="model.username" #username="ngModel" required />\r\n                  <div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div>\r\n                </div>\r\n                <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !password.valid }">\r\n                  <label for="password">Password</label>\r\n                  <input type="password" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel" required />\r\n                  <div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <button [disabled]="loading" class="btn btn-primary">Login</button>\r\n                  <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="\r\n                  />\r\n                  <a routerLink=\'/auth/register\' class="btn btn-link">Register</a>\r\n                </div>\r\n              </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},Fhhn:function(e,t,r){(e.exports=r("rP7Y")(!1)).push([e.i,".xx{background:#080808;pointer-events:all;box-shadow:0 5px 15px rgba(0,0,0,.5);position:relative;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;opacity:.7;max-width:inherit;height:inherit}.vertical-alignment-helper{display:table;height:100%;width:100%;pointer-events:none}.vertical-align-center{display:table-cell;vertical-align:middle;pointer-events:none}.modal-content{width:inherit;max-width:inherit;height:inherit;margin:0 auto;pointer-events:all}.register-label{margin-top:20px;text-align:center;margin-bottom:10px;color:#f5f5f5}.register-form{padding-left:15px;padding-right:15px;padding-bottom:15px;padding-top:10px;color:#f5f5f5}.register-img{position:absolute;left:457px;width:54%!important;top:46px;pointer-events:none}",""]),e.exports=e.exports.toString()},mXuZ:function(e,t){e.exports='\x3c!-- <div class="jumbotron">\r\n\t<div class="container">\r\n\t\t<div class="col-sm-8 col-sm-offset-2">\r\n\t\t\t<ss-alert></ss-alert> --\x3e\r\n<img src="https://orig00.deviantart.net/5892/f/2016/094/d/7/dark_energy_soul_sword__no_background__by_solidsunny954-d9xs76y.png"\r\n  class="register-img">\r\n<div class="vertical-alignment-helper">\r\n  <div class="modal-dialog vertical-align-center">\r\n    <div class="col-sm-4 col-sm-offset-4 xx">\r\n      <h2 class="register-label">Register</h2>\r\n      <form name="form" class="register-form" (ngSubmit)="f.form.valid && register()" #f="ngForm" novalidate>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n          <label for="firstName">First Name</label>\r\n          <input type="text" class="form-control" name="firstName" [(ngModel)]="model.firstName" #firstName="ngModel" required />\r\n          <div *ngIf="f.submitted && !firstName.valid" class="help-block">First Name is required</div>\r\n        </div>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n          <label for="lastName">Last Name</label>\r\n          <input type="text" class="form-control" name="lastName" [(ngModel)]="model.lastName" #lastName="ngModel" required />\r\n          <div *ngIf="f.submitted && !lastName.valid" class="help-block">Last Name is required</div>\r\n        </div>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !username.valid }">\r\n          <label for="username">Username</label>\r\n          <input type="text" class="form-control" name="username" [(ngModel)]="model.username" #username="ngModel" required />\r\n          <div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div>\r\n        </div>\r\n        <div class="form-group" [ngClass]="{ \'has-error\': f.submitted && !password.valid }">\r\n          <label for="password">Password</label>\r\n          <input type="password" class="form-control" name="password" [(ngModel)]="model.password" #password="ngModel" required />\r\n          <div *ngIf="f.submitted && !password.valid" class="help-block">Password is required</div>\r\n        </div>\r\n        <div class="form-group">\r\n          <button [disabled]="loading" class="btn btn-primary">Register</button>\r\n          <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="\r\n          />\r\n          <a routerLink=\'/auth/login\' class="btn btn-link">Cancel</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\x3c!-- </div>\r\n\t</div>\r\n</div> --\x3e\r\n'},rZ3z:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}function o(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function s(e){return"undefined"!=typeof Blob&&e instanceof Blob}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}function u(e,t){return void 0===t&&(t=[]),t?t.reduceRight(function(e,t){return new I(e,t)},e):e}function c(){return"object"==typeof window?window:{}}Object.defineProperty(t,"__esModule",{value:!0});var l=r("LMZF"),d=r("Un6q"),p=r("GZB0"),h=r("eL9U"),f=r("6S6c"),A=r("dmC+"),m=r("6Xbx"),y=r("AP4T"),g=function(){return function(){}}(),v=function(){return function(){}}(),b=function(){function e(e){var t=this;this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?function(){t.headers=new Map,e.split("\n").forEach(function(e){var r=e.indexOf(":");if(r>0){var n=e.slice(0,r),o=n.toLowerCase(),s=e.slice(r+1).trim();t.maybeSetNormalizedName(n,o),t.headers.has(o)?t.headers.get(o).push(s):t.headers.set(o,[s])}})}:function(){t.headers=new Map,Object.keys(e).forEach(function(r){var n=e[r],o=r.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(t.headers.set(o,n),t.maybeSetNormalizedName(r,o))})}:this.headers=new Map}return e.prototype.has=function(e){return this.init(),this.headers.has(e.toLowerCase())},e.prototype.get=function(e){this.init();var t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null},e.prototype.keys=function(){return this.init(),Array.from(this.normalizedNames.values())},e.prototype.getAll=function(e){return this.init(),this.headers.get(e.toLowerCase())||null},e.prototype.append=function(e,t){return this.clone({name:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({name:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({name:e,value:t,op:"d"})},e.prototype.maybeSetNormalizedName=function(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)},e.prototype.init=function(){var t=this;this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(function(e){return t.applyUpdate(e)}),this.lazyUpdate=null))},e.prototype.copyFrom=function(e){var t=this;e.init(),Array.from(e.headers.keys()).forEach(function(r){t.headers.set(r,e.headers.get(r)),t.normalizedNames.set(r,e.normalizedNames.get(r))})},e.prototype.clone=function(t){var r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r},e.prototype.applyUpdate=function(e){var t=e.name.toLowerCase();switch(e.op){case"a":case"s":var r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);var n=("a"===e.op?this.headers.get(t):void 0)||[];n.push.apply(n,r),this.headers.set(t,n);break;case"d":var o=e.value;if(o){var s=this.headers.get(t);if(!s)return;0===(s=s.filter(function(e){return-1===o.indexOf(e)})).length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}else this.headers.delete(t),this.normalizedNames.delete(t)}},e.prototype.forEach=function(e){var t=this;this.init(),Array.from(this.normalizedNames.keys()).forEach(function(r){return e(t.normalizedNames.get(r),t.headers.get(r))})},e}(),w=function(){function e(){}return e.prototype.encodeKey=function(e){return n(e)},e.prototype.encodeValue=function(e){return n(e)},e.prototype.decodeKey=function(e){return decodeURIComponent(e)},e.prototype.decodeValue=function(e){return decodeURIComponent(e)},e}(),C=function(){function e(e){void 0===e&&(e={});var t=this;if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new w,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){var r=new Map;e.length>0&&e.split("&").forEach(function(e){var n=e.indexOf("="),o=-1==n?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,n)),t.decodeValue(e.slice(n+1))],s=o[0],i=o[1],a=r.get(s)||[];a.push(i),r.set(s,a)});return r}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(function(r){var n=e.fromObject[r];t.map.set(r,Array.isArray(n)?n:[n])})):this.map=null}return e.prototype.has=function(e){return this.init(),this.map.has(e)},e.prototype.get=function(e){this.init();var t=this.map.get(e);return t?t[0]:null},e.prototype.getAll=function(e){return this.init(),this.map.get(e)||null},e.prototype.keys=function(){return this.init(),Array.from(this.map.keys())},e.prototype.append=function(e,t){return this.clone({param:e,value:t,op:"a"})},e.prototype.set=function(e,t){return this.clone({param:e,value:t,op:"s"})},e.prototype.delete=function(e,t){return this.clone({param:e,value:t,op:"d"})},e.prototype.toString=function(){var e=this;return this.init(),this.keys().map(function(t){var r=e.encoder.encodeKey(t);return e.map.get(t).map(function(t){return r+"="+e.encoder.encodeValue(t)}).join("&")}).join("&")},e.prototype.clone=function(t){var r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat([t]),r},e.prototype.init=function(){var e=this;null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(function(t){return e.map.set(t,e.cloneFrom.map.get(t))}),this.updates.forEach(function(t){switch(t.op){case"a":case"s":var r=("a"===t.op?e.map.get(t.param):void 0)||[];r.push(t.value),e.map.set(t.param,r);break;case"d":if(void 0===t.value){e.map.delete(t.param);break}var n=e.map.get(t.param)||[],o=n.indexOf(t.value);-1!==o&&n.splice(o,1),n.length>0?e.map.set(t.param,n):e.map.delete(t.param)}}),this.cloneFrom=null)},e}(),O=function(){function e(e,t,r,n){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();var o;if(function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new b),this.params){var s=this.params.toString();if(0===s.length)this.urlWithParams=t;else{var i=t.indexOf("?"),a=-1===i?"?":i<t.length-1?"&":"";this.urlWithParams=t+a+s}}else this.params=new C,this.urlWithParams=t}return e.prototype.serializeBody=function(){return null===this.body?null:o(this.body)||s(this.body)||i(this.body)||"string"==typeof this.body?this.body:this.body instanceof C?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()},e.prototype.detectContentTypeHeader=function(){return null===this.body?null:i(this.body)?null:s(this.body)?this.body.type||null:o(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof C?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null},e.prototype.clone=function(t){void 0===t&&(t={});var r=t.method||this.method,n=t.url||this.url,o=t.responseType||this.responseType,s=void 0!==t.body?t.body:this.body,i=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress,u=t.headers||this.headers,c=t.params||this.params;return void 0!==t.setHeaders&&(u=Object.keys(t.setHeaders).reduce(function(e,r){return e.set(r,t.setHeaders[r])},u)),t.setParams&&(c=Object.keys(t.setParams).reduce(function(e,r){return e.set(r,t.setParams[r])},c)),new e(r,n,s,{params:c,headers:u,reportProgress:a,responseType:o,withCredentials:i})},e}(),E={Sent:0,UploadProgress:1,ResponseHeader:2,DownloadProgress:3,Response:4,User:5};E[E.Sent]="Sent",E[E.UploadProgress]="UploadProgress",E[E.ResponseHeader]="ResponseHeader",E[E.DownloadProgress]="DownloadProgress",E[E.Response]="Response",E[E.User]="User";var x=function(){return function(e,t,r){void 0===t&&(t=200),void 0===r&&(r="OK"),this.headers=e.headers||new b,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}(),R=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,t)||this;return r.type=E.ResponseHeader,r}return Object(m.b)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(x),j=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,t)||this;return r.type=E.Response,r.body=void 0!==t.body?t.body:null,r}return Object(m.b)(t,e),t.prototype.clone=function(e){return void 0===e&&(e={}),new t({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})},t}(x),k=function(e){function t(t){var r=e.call(this,t,0,"Unknown Error")||this;return r.name="HttpErrorResponse",r.ok=!1,r.status>=200&&r.status<300?r.message="Http failure during parsing for "+(t.url||"(unknown url)"):r.message="Http failure response for "+(t.url||"(unknown url)")+": "+t.status+" "+t.statusText,r.error=t.error||null,r}return Object(m.b)(t,e),t}(x),P=function(){function e(e){this.handler=e}return e.prototype.request=function(e,t,r){var n=this;void 0===r&&(r={});var o;if(e instanceof O)o=e;else{var s=void 0;s=r.headers instanceof b?r.headers:new b(r.headers);var i=void 0;r.params&&(i=r.params instanceof C?r.params:new C({fromObject:r.params})),o=new O(e,t,void 0!==r.body?r.body:null,{headers:s,params:i,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}var a=h.a.call(Object(p.a)(o),function(e){return n.handler.handle(e)});if(e instanceof O||"events"===r.observe)return a;var u=f.a.call(a,function(e){return e instanceof j});switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return A.a.call(u,function(e){if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body});case"blob":return A.a.call(u,function(e){if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body});case"text":return A.a.call(u,function(e){if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body});case"json":default:return A.a.call(u,function(e){return e.body})}case"response":return u;default:throw new Error("Unreachable: unhandled observe type "+r.observe+"}")}},e.prototype.delete=function(e,t){return void 0===t&&(t={}),this.request("DELETE",e,t)},e.prototype.get=function(e,t){return void 0===t&&(t={}),this.request("GET",e,t)},e.prototype.head=function(e,t){return void 0===t&&(t={}),this.request("HEAD",e,t)},e.prototype.jsonp=function(e,t){return this.request("JSONP",e,{params:(new C).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})},e.prototype.options=function(e,t){return void 0===t&&(t={}),this.request("OPTIONS",e,t)},e.prototype.patch=function(e,t,r){return void 0===r&&(r={}),this.request("PATCH",e,a(r,t))},e.prototype.post=function(e,t,r){return void 0===r&&(r={}),this.request("POST",e,a(r,t))},e.prototype.put=function(e,t,r){return void 0===r&&(r={}),this.request("PUT",e,a(r,t))},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[{type:g}]},e}(),I=function(){function e(e,t){this.next=e,this.interceptor=t}return e.prototype.handle=function(e){return this.interceptor.intercept(e,this.next)},e}(),N=new l.B("HTTP_INTERCEPTORS"),T=function(){function e(){}return e.prototype.intercept=function(e,t){return t.handle(e)},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[]},e}(),S=0,M=function(){return function(){}}(),U=function(){function e(e,t){this.callbackMap=e,this.document=t}return e.prototype.nextCallback=function(){return"ng_jsonp_callback_"+S++},e.prototype.handle=function(e){var t=this;if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");return new y.a(function(r){var n=t.nextCallback(),o=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,"="+n+"$1"),s=t.document.createElement("script");s.src=o;var i=null,a=!1,u=!1;t.callbackMap[n]=function(e){delete t.callbackMap[n],u||(i=e,a=!0)};var c=function(){s.parentNode&&s.parentNode.removeChild(s),delete t.callbackMap[n]},l=function(e){u||(c(),a?(r.next(new j({body:i,status:200,statusText:"OK",url:o})),r.complete()):r.error(new k({url:o,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")})))},d=function(e){u||(c(),r.error(new k({error:e,status:0,statusText:"JSONP Error",url:o})))};return s.addEventListener("load",l),s.addEventListener("error",d),t.document.body.appendChild(s),r.next({type:E.Sent}),function(){u=!0,s.removeEventListener("load",l),s.removeEventListener("error",d),c()}})},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[{type:M},{type:void 0,decorators:[{type:l.z,args:[d.c]}]}]},e}(),Q=function(){function e(e){this.jsonp=e}return e.prototype.intercept=function(e,t){return"JSONP"===e.method?this.jsonp.handle(e):t.handle(e)},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[{type:U}]},e}(),D=/^\)\]\}',?\n/,z=function(){return function(){}}(),B=function(){function e(){}return e.prototype.build=function(){return new XMLHttpRequest},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[]},e}(),L=function(){function e(e){this.xhrFactory=e}return e.prototype.handle=function(e){var t=this;if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");return new y.a(function(r){var n=t.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach(function(e,t){return n.setRequestHeader(e,t.join(","))}),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){var o=e.detectContentTypeHeader();null!==o&&n.setRequestHeader("Content-Type",o)}if(e.responseType){var s=e.responseType.toLowerCase();n.responseType="json"!==s?s:"text"}var i=e.serializeBody(),a=null,u=function(){if(null!==a)return a;var t=1223===n.status?204:n.status,r=n.statusText||"OK",o=new b(n.getAllResponseHeaders()),s=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(n)||e.url;return a=new R({headers:o,status:t,statusText:r,url:s})},c=function(){var t=u(),o=t.headers,s=t.status,i=t.statusText,a=t.url,c=null;204!==s&&(c=void 0===n.response?n.responseText:n.response),0===s&&(s=c?200:0);var l=s>=200&&s<300;if("json"===e.responseType&&"string"==typeof c){var d=c;c=c.replace(D,"");try{c=""!==c?JSON.parse(c):null}catch(e){c=d,l&&(l=!1,c={error:e,text:c})}}l?(r.next(new j({body:c,headers:o,status:s,statusText:i,url:a||void 0})),r.complete()):r.error(new k({error:c,headers:o,status:s,statusText:i,url:a||void 0}))},l=function(e){var t=new k({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error"});r.error(t)},d=!1,p=function(t){d||(r.next(u()),d=!0);var o={type:E.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(o.total=t.total),"text"===e.responseType&&n.responseText&&(o.partialText=n.responseText),r.next(o)},h=function(e){var t={type:E.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),r.next(t)};return n.addEventListener("load",c),n.addEventListener("error",l),e.reportProgress&&(n.addEventListener("progress",p),null!==i&&n.upload&&n.upload.addEventListener("progress",h)),n.send(i),r.next({type:E.Sent}),function(){n.removeEventListener("error",l),n.removeEventListener("load",c),e.reportProgress&&(n.removeEventListener("progress",p),null!==i&&n.upload&&n.upload.removeEventListener("progress",h)),n.abort()}})},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[{type:z}]},e}(),H=new l.B("XSRF_COOKIE_NAME"),F=new l.B("XSRF_HEADER_NAME"),K=function(){return function(){}}(),J=function(){function e(e,t,r){this.doc=e,this.platform=t,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}return e.prototype.getToken=function(){if("server"===this.platform)return null;var e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(d.k)(e,this.cookieName),this.lastCookieString=e),this.lastToken},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:l.z,args:[d.c]}]},{type:void 0,decorators:[{type:l.z,args:[l.R]}]},{type:void 0,decorators:[{type:l.z,args:[H]}]}]},e}(),_=function(){function e(e,t){this.tokenService=e,this.headerName=t}return e.prototype.intercept=function(e,t){var r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return t.handle(e);var n=this.tokenService.getToken();return null===n||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,n)})),t.handle(e)},e.decorators=[{type:l.A}],e.ctorParameters=function(){return[{type:K},{type:void 0,decorators:[{type:l.z,args:[F]}]}]},e}(),G=function(){function e(){}return e.disable=function(){return{ngModule:e,providers:[{provide:_,useClass:T}]}},e.withOptions=function(t){return void 0===t&&(t={}),{ngModule:e,providers:[t.cookieName?{provide:H,useValue:t.cookieName}:[],t.headerName?{provide:F,useValue:t.headerName}:[]]}},e.decorators=[{type:l.I,args:[{providers:[_,{provide:N,useExisting:_,multi:!0},{provide:K,useClass:J},{provide:H,useValue:"XSRF-TOKEN"},{provide:F,useValue:"X-XSRF-TOKEN"}]}]}],e.ctorParameters=function(){return[]},e}(),q=function(){function e(){}return e.decorators=[{type:l.I,args:[{imports:[G.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})],providers:[P,{provide:g,useFactory:u,deps:[v,[new l.O,new l.z(N)]]},L,{provide:v,useExisting:L},B,{provide:z,useExisting:B}]}]}],e.ctorParameters=function(){return[]},e}(),Y=(function(){function e(){}e.decorators=[{type:l.I,args:[{providers:[U,{provide:M,useFactory:c},{provide:N,useClass:Q,multi:!0}]}]}],e.ctorParameters=function(){return[]}}(),r("0nO6")),W=r("UHIZ");y.a.prototype.map=A.a;var V=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},X=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Z=function(){function e(e){this.http=e}return e.prototype.login=function(e,t){return this.http.post("/api/authenticate",{username:e,password:t}).map(function(e){return e&&e.token&&localStorage.setItem("currentUser",JSON.stringify(e)),e})},e.prototype.logout=function(){localStorage.removeItem("currentUser")},e=V([Object(l.A)(),X("design:paramtypes",[P])],e)}(),$=r("TO51"),ee=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},te=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},re=function(){function e(e){var t=this;this.router=e,this.subject=new $.a,this.keepAfterNavigationChange=!1,e.events.subscribe(function(e){e instanceof W.b&&(t.keepAfterNavigationChange?t.keepAfterNavigationChange=!1:t.subject.next())})}return e.prototype.success=function(e,t){void 0===t&&(t=!1),this.keepAfterNavigationChange=t,this.subject.next({type:"success",text:e})},e.prototype.error=function(e,t){void 0===t&&(t=!1),this.keepAfterNavigationChange=t,this.subject.next({type:"error",text:e})},e.prototype.getMessage=function(){return this.subject.asObservable()},e=ee([Object(l.A)(),te("design:paramtypes",[W.c])],e)}(),ne=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},oe=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},se=function(){function e(e,t,r,n){this.route=e,this.router=t,this.authenticationService=r,this.alertService=n,this.model={},this.loading=!1}return e.prototype.ngOnInit=function(){},e.prototype.login=function(){var e=this;this.loading=!0,this.authenticationService.login(this.model.username,this.model.password).subscribe(function(t){e.router.navigate([e.returnUrl])},function(t){e.alertService.error(t),e.loading=!1})},e=ne([Object(l.n)({template:r("9Yz1")}),oe("design:paramtypes",[W.a,W.c,Z,re])],e)}(),ie=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},ae=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ue=function(){function e(e){this.http=e}return e.prototype.getAll=function(){return this.http.get("/api/users")},e.prototype.getById=function(e){return this.http.get("/api/users/"+e)},e.prototype.create=function(e){return this.http.post("/api/users",e)},e.prototype.update=function(e){return this.http.put("/api/users/"+e.id,e)},e.prototype.delete=function(e){return this.http.delete("/api/users/"+e)},e=ie([Object(l.A)(),ae("design:paramtypes",[P])],e)}(),ce=r("fAeS"),le=Object(ce.j)("slideInOutAnimation",[Object(ce.g)("*",Object(ce.h)({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)"})),Object(ce.i)(":enter",[Object(ce.h)({right:"-400%",backgroundColor:"rgba(0, 0, 0, 0)"}),Object(ce.e)(".5s ease-in-out",Object(ce.h)({right:0,backgroundColor:"rgba(0, 0, 0, 0.8)"}))]),Object(ce.i)(":leave",[Object(ce.e)(".5s ease-in-out",Object(ce.h)({right:"-400%",backgroundColor:"rgba(0, 0, 0, 0)"}))])]),de=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},pe=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},he=function(){function t(e,t,r){this.router=e,this.userService=t,this.alertService=r,this.model={},this.loading=!1}return t.prototype.register=function(){var e=this;this.loading=!0,this.userService.create(this.model).subscribe(function(t){e.alertService.success("Registration successful",!0),e.router.navigate(["/login"])},function(t){e.alertService.error(t),e.loading=!1})},t=de([Object(l.n)({moduleId:e.i.toString(),template:r("mXuZ"),styles:[r("Fhhn")],animations:[le],host:{"[@slideInOutAnimation]":""}}),pe("design:paramtypes",[W.c,ue,re])],t)}(),fe=[{path:"login",component:se},{path:"register",component:he},{path:"**",redirectTo:"login"}],Ae=W.d.forChild(fe),me=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},ye=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ge=function(){function e(e){this.alertService=e}return e.prototype.ngOnInit=function(){var e=this;this.alertService.getMessage().subscribe(function(t){e.message=t})},e=me([Object(l.n)({selector:"ss-alert",template:r("ySdI")}),ye("design:paramtypes",[re])],e)}();r.d(t,"LoginAuthModule",function(){return be});var ve=this&&this.__decorate||function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},be=function(){function e(){}return e=ve([Object(l.I)({imports:[d.b,Ae,q,Y.a],declarations:[se,he,ge],providers:[q,Z,ue,re]})],e)}()},ySdI:function(e,t){e.exports="<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\r\n"}});
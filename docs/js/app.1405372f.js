/*! For license information please see app.1405372f.js.LICENSE.txt */
!function(){"use strict";var e,t={6902:function(e,t,r){r(1539),r(8674),r(2526),r(1817),r(5218),r(2165),r(6992),r(8783),r(3948),r(2443),r(9341),r(3706),r(2703),r(489),r(4747),r(8309),r(8304),r(7042),r(6649),r(6078),r(9653);var n=r(5988),o=r(8118);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(){a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function f(e,t,r,o){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),c=new q(o||[]);return n(a,"_invoke",{value:E(e,r,c)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=f;var h={};function y(){}function d(){}function m(){}var v={};l(v,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(L([])));w&&w!==t&&r.call(w,c)&&(v=w);var x=m.prototype=y.prototype=Object.create(v);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function o(n,a,c,u){var s=p(e[n],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==i(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,c,u)}),(function(e){o("throw",e,c,u)})):t.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return o("throw",e,c,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function E(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function b(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=m,n(x,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},S(_.prototype),l(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),z(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function c(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){c(i,n,o,a,u,"next",e)}function u(e){c(i,n,o,a,u,"throw",e)}a(void 0)}))}}function s(e){return l.apply(this,arguments)}function l(){return l=u(a().mark((function e(t){var r,o,i,c,u,s,l,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,o=t.image,i=t.sprite,c=t.spritesheet_animations_key,u=t.animationSpeed,s=t.additionals,l=new n.c2G(n.VL4.from(o),i),e.next=4,l.parse();case 4:return(f=new n.KgH(l.animations[c])).animationSpeed=u,r.stage.addChild(f),f=Object.assign(f,s||{}),e.abrupt("return",f);case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}r(9601);var f=r.p+"848d8e76315a2fac25f2.png",p=JSON.parse('{"frames":{"man1":{"frame":{"x":0,"y":438,"w":165,"h":224},"sourceSize":{"w":165,"h":224},"spriteSourceSize":{"x":0,"y":0,"w":165,"h":224}},"man2":{"frame":{"x":223,"y":438,"w":165,"h":224},"sourceSize":{"w":165,"h":224},"spriteSourceSize":{"x":0,"y":0,"w":165,"h":224}}},"meta":{"image":"../images/sprite_man.png","format":"RGBA8888","size":{"w":835,"h":662},"scale":1},"animations":{"man":["man1","man2"]}}'),h=r.p+"383cd4fec70ad568d154.png",y=JSON.parse('{"frames":{"Explosion_Sequence_A 1.png":{"frame":{"x":244,"y":1454,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 10.png":{"frame":{"x":244,"y":970,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 11.png":{"frame":{"x":2,"y":970,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 12.png":{"frame":{"x":728,"y":728,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 13.png":{"frame":{"x":486,"y":728,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 14.png":{"frame":{"x":244,"y":728,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 15.png":{"frame":{"x":2,"y":728,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 16.png":{"frame":{"x":728,"y":486,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 17.png":{"frame":{"x":486,"y":486,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 18.png":{"frame":{"x":244,"y":486,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 19.png":{"frame":{"x":2,"y":486,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 2.png":{"frame":{"x":728,"y":1212,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 20.png":{"frame":{"x":728,"y":244,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 21.png":{"frame":{"x":486,"y":244,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 22.png":{"frame":{"x":244,"y":244,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 23.png":{"frame":{"x":2,"y":244,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 24.png":{"frame":{"x":728,"y":2,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 25.png":{"frame":{"x":486,"y":2,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 26.png":{"frame":{"x":244,"y":2,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 27.png":{"frame":{"x":2,"y":2,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 3.png":{"frame":{"x":486,"y":1212,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 4.png":{"frame":{"x":244,"y":1212,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 5.png":{"frame":{"x":2,"y":1696,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 6.png":{"frame":{"x":2,"y":1454,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 7.png":{"frame":{"x":2,"y":1212,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 8.png":{"frame":{"x":728,"y":970,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}},"Explosion_Sequence_A 9.png":{"frame":{"x":486,"y":970,"w":240,"h":240},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":240,"h":240},"sourceSize":{"w":240,"h":240}}},"meta":{"image":"/images/sprite_explosive.png","format":"RGBA8888","size":{"w":1024,"h":2048},"scale":1},"animations":{"explosive":["Explosion_Sequence_A 1.png","Explosion_Sequence_A 2.png","Explosion_Sequence_A 3.png","Explosion_Sequence_A 4.png","Explosion_Sequence_A 5.png","Explosion_Sequence_A 6.png","Explosion_Sequence_A 7.png","Explosion_Sequence_A 8.png","Explosion_Sequence_A 9.png","Explosion_Sequence_A 10.png","Explosion_Sequence_A 11.png","Explosion_Sequence_A 12.png","Explosion_Sequence_A 13.png","Explosion_Sequence_A 14.png","Explosion_Sequence_A 15.png","Explosion_Sequence_A 16.png","Explosion_Sequence_A 17.png","Explosion_Sequence_A 18.png","Explosion_Sequence_A 19.png","Explosion_Sequence_A 20.png","Explosion_Sequence_A 21.png","Explosion_Sequence_A 22.png","Explosion_Sequence_A 23.png","Explosion_Sequence_A 24.png","Explosion_Sequence_A 25.png","Explosion_Sequence_A 26.png","Explosion_Sequence_A 27.png"]}}');function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function s(e,t,r,o){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),c=new q(o||[]);return n(a,"_invoke",{value:E(e,r,c)}),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var f={};function p(){}function h(){}function y(){}var m={};u(m,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(L([])));w&&w!==t&&r.call(w,i)&&(m=w);var x=y.prototype=p.prototype=Object.create(m);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function o(n,i,a,c){var u=l(e[n],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==d(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,a,c)}),(function(e){o("throw",e,a,c)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return o("throw",e,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function E(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function b(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,f;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=y,n(x,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},S(_.prototype),u(_.prototype,a,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(z),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),z(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function g(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){g(i,n,o,a,c,"next",e)}function c(e){g(i,n,o,a,c,"throw",e)}a(void 0)}))}}var x;o.eq.add("explosive","audio/explosion-01.mp3");var S=!1;function _(){return(_=w(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.stage.destroy(!0),x.view.remove(),x.destroy(),n.P6Y.clearTextureCache();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=w(v().mark((function e(){var t,r,i,a,c,u,l,d;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(x=new n.MxU({width:640,height:360})).ticker.maxFPS=60,document.body.appendChild(x.view),r=window.Symbol("start"),i=window.Symbol("stop"),e.next=7,s({app:x,image:f,sprite:p,spritesheet_animations_key:"man",animationSpeed:.0666});case 7:return a=e.sent,e.next=10,s({app:x,image:h,sprite:y,spritesheet_animations_key:"explosive",animationSpeed:.966,additionals:(t={},m(t,r,null),m(t,i,null),t)});case 10:(c=e.sent)[r]=function(){c.play(),o.eq.play("explosive")},c[i]=function(){c.stop(),o.eq.stop("explosive")},150,a.anchor.set(.5,0),c.anchor.set(.5,0),a.x=150,a.y=100,c.x=100,c.y=100,u=150,l=0,d=0,a.play(),c.play(),o.eq.play("explosive"),x.ticker.add((function(){!l&&u>490?(c[i](),l=1,a.scale.x=-1,c.x=u+50):l&&u<150?(c[i](),l=0,a.scale.x=1,c.x=u-50):!c.playing&&d>=30&&(d=0,c[r]()),u+=8.166666666666666*(l?-1:1),a.x=u,d++}));case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.startPlaying=function(e){S?(S=!1,e.target.innerText="Play",function(){_.apply(this,arguments)}()):(S=!0,e.target.innerText="Stop",function(){E.apply(this,arguments)}())}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self.webpackChunkwebpack_starter=self.webpackChunkwebpack_starter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[745],(function(){return n(6902)}));o=n.O(o)}();
//# sourceMappingURL=app.1405372f.js.map
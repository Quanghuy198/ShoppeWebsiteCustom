(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[1],{1399:function(t,e,n){t.exports=n(2453)()},1400:function(t,e,n){t.exports=n(2455)()},1401:function(t,e,n){"use strict";(function(t){var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),r="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),o="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},c=2;var a=20,s=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,f=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function a(){n&&(n=!1,t()),r&&u()}function s(){o(a)}function u(){var t=Date.now();if(n){if(t-i<c)return;r=!0}else n=!0,r=!1,setTimeout(s,e);i=t}return u}(this.refresh.bind(this),a)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},p=_(0,0,0,0);function d(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+d(t["border-"+n+"-width"])},0)}function b(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return p;var r=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=d(o)}return e}(r),o=i.left+i.right,c=i.top+i.bottom,a=d(r.width),s=d(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=v(r,"left","right")+o),Math.round(s+c)!==n&&(s-=v(r,"top","bottom")+c)),!function(t){return t===l(t).document.documentElement}(t)){var u=Math.round(a+o)-e,f=Math.round(s+c)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(f)&&(s-=f)}return _(i.left,i.top,a,s)}var m="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function y(t){return r?m(t)?function(t){var e=t.getBBox();return _(0,0,e.width,e.height)}(t):b(t):p}function _(t,e,n,r){return{x:t,y:e,width:n,height:r}}var g=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=y(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),O=function(){return function(t,e){var n,r,i,o,c,a,s,u=(r=(n=e).x,i=n.y,o=n.width,c=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(a.prototype),h(s,{x:r,y:i,width:o,height:c,top:i,right:r+o,bottom:c+i,left:r}),s);h(this,{target:t,contentRect:u})}}(),w=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new g(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new O(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!=typeof WeakMap?new WeakMap:new n,T=function(){return function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f.getInstance(),r=new w(e,n,this);E.set(this,r)}}();["observe","unobserve","disconnect"].forEach(function(t){T.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}});var j=void 0!==i.ResizeObserver?i.ResizeObserver:T;e.a=j}).call(this,n(88))},1434:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var c=n(0);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.alignSelf=t.alignSelf,e},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.flex=t.flex,e},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.margin=t.m||t.margin,e.marginTop=t.mt||t.marginTop||t.my||t.marginY,e.marginRight=t.mr||t.marginRight||t.mx||t.marginX,e.marginBottom=t.mb||t.marginBottom||t.my||t.marginY,e.marginLeft=t.ml||t.marginLeft||t.mx||t.marginX,e},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.order=t.order,e},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.textTransform=t.textTransform,e},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.width=t.width,e},v=n(39),b=n.n(v),m=(n(2457),{button:"_3sjFp","size-dynamic":"lJMau","size-default":"_3zn07","size-medium":"_18F8b","size-small":"uxSdp","variant-wireframe":"xCn81","color-primary":"TOjHY","variant-solid":"AHhqR","color-secondary":"_1-4Xn","color-white":"_1qQAl",text:"_2HCeY",icon:"_19rDu"}),y=function(t,e){var n,i,a,v=t.text,y=t.icon,_=t.color,g=void 0===_?"primary":_,O=t.size,w=void 0===O?"default":O,E=t.variant,T=void 0===E?"solid":E,j=t.disabled,S=t.onClick,C="secondary"===g||"white"===g?"wireframe":T,x=y?c.cloneElement(y,o(o({},y.props),{},{style:o(o({},y.props.style),{},{flex:"0 0 auto"})})):null,A=b()(m.button,m["size-"+w],m["variant-"+C],m["color-"+g]),M=(i=[u,"dynamic"===w&&f,h,l,p,"dynamic"===w&&d],a={},(n=t)&&Array.isArray(i)?(i.forEach(function(t){t&&t(n,a)}),Object.entries(a).forEach(function(t){var e=s(t,2),n=e[0],r=e[1];r||0===r||delete a[n]}),a):a),R=b()(m.text,r({},m.icon,Boolean(y)));return c.createElement("button",{ref:e,className:A,style:M,disabled:j,onClick:S},x,c.createElement("span",{className:R},v))},_=c.forwardRef(y);e.a=_},2453:function(t,e,n){"use strict";var r=n(2454);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},2454:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2455:function(t,e,n){"use strict";var r=n(2456);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},2456:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2457:function(t,e,n){},555:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(124),i=n(257),o=n(256),c=n(308),a=n(307);function s(t,e){var n=Object(r.a)(t,e);return{getCurrencyConfig:function(){return n.getCurrencyConfig(t)},getCountryConfig:function(){return n.getCountryConfig(t,e)},deflateServerNumber:function(e){return Object(i.a)(e,t)},parseServerNumber:function(e){return Object(i.b)(e,t)},getCurrencySymbol:function(){return n.getCurrencySymbol(t)},getNotches:function(){return n.getNotches(t,e)},formatServerNumber:function(e,n){return a.a(Object(i.a)(e,t),n)},formatCurrencyNumber:function(e,n){return o.b(t,e,n)},formatServerCurrencyNumber:function(e,n){return o.b(t,Object(i.a)(e,t),n)},formatCurrency:function(e,n){return o.a(t,e,n)},formatServerCurrency:function(e,n){return o.a(t,Object(i.a)(e,t),n)},compactServerNumber:function(e,n,r){return c.b(Object(i.a)(e,t),n,r)},localizeCompactNumber:function(n,r){return c.c(t,n,r,e)},localizeCompactServerNumber:function(n,r){return c.c(t,Object(i.a)(n,t),r,e)},compactCurrency:function(n,r,i){return c.a(t,n,r,i,e)},compactServerCurrency:function(n,r,o){return c.a(t,Object(i.a)(n,t),r,o,e)}}}}}]);
//# sourceMappingURL=https://shopee.sg/assets/modules~AddonCollectionPage~CollectionPage~EventPage~Homepage~OfficialShopPage~OfficialShopRecommend~3edb0d78.79f1763817e1f25635ba.js.map
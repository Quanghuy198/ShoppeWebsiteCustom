(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[101],{2213:function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a}),r.d(e,"c",function(){return o});var n=8,a=2,o="popSearch"},2214:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function a(t,e,r){return void 0===r&&(r={}),n({type:"RECORD_SEARCH_HISTORY",searchType:t,data:e},r,{isOfficialShop:!1})}r.d(e,"a",function(){return a})},2215:function(t,e,r){"use strict";var n=r(0),a=r(53),o=r(844),i=r.n(o),c=r(366),s=r(786),u=r(398),f=r(297),d=r(912),p=r(2216),l=r.n(p);var h=d.a.searchWithQuery,v=function(t){var e,r;function a(e){var r;return(r=t.call(this,e)||this).onClick=r.onClick.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r)),r}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=a.prototype;return o.onClick=function(){var t=this.props,e=t.keyword,r=t.trackingClick,n=t.searchParams,a=t.targetSearchParams,o=t.recordSearchHistory,i=t.index;Object(s.a)({action:"submitKeyboardSearch",data:{keyword:e,inputType:"popular_search",targetSearchParams:a,searchParams:n,isMallSearch:!!this.context.isOfficialShopPath,absoluteLocation:i,relativeLocation:i},track:this.props.contextOnTrack}),o("product",e),r&&r()},o.render=function(){var t=this.props,e=t.trackingRef,r=t.keyword,a=t.targetSearchParams;return n.createElement(c.a,{onClick:this.onClick,to:h(a),className:l.a.keyword,innerRef:e},r)},a}(n.Component);v.contextTypes={isOfficialShopPath:i.a.bool},e.a=Object(a.d)(Object(u.b)("HotwordItem"),Object(f.a)())(v)},2216:function(t,e,r){t.exports={keyword:"F2JPgx"}},2217:function(t,e,r){t.exports={container:"_1HpIaC",list:"JpRXYU"}},3627:function(t,e,r){"use strict";r.r(e);var n,a,o=r(0),i=r(70),c=r(2215),s=r(22),u=r(253),f=r(10),d=r(1),p=Object(d.b)("FETCH_POP_SEARCH"),l="popsearch_sec";function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var v={progress:f.b.INIT,state_update_time:0},b={update_time:0,version:"",sections:(n={},n[l]={total:0,data:[]},n)},y=Object(s.a)(((a={})[p.REQUESTED]=function(t){return h({},t,{progress:f.b.REQ,error:0,state_update_time:0})},a[p.SUCCESS]=function(t,e){var r,n=e.payload,a=n.offset,o=n.data,i=n.shouldReset,c=t&&t.data||b;return h({},t,{data:h({},c,{update_time:o.update_time,version:o.version,sections:h({},c.sections,(r={},r[l]={total:o.sections[l].total,data:Object(u.b)(i?[]:c.sections[l].data,o.sections[l].data,a)},r))}),progress:f.b.OK,state_update_time:Date.now()})},a[p.FAILED]=function(t,e){var r=e.payload.error;return h({},t,{progress:f.b.ERR,error:r})},a),v),m=r(37),O=r(15),S=r(2),k="/api/v4/recommend/recommend";function _(t){var e,r={update_time:t.data.update_time,version:t.data.version,sections:(e={},e[l]={total:0,data:[]},e)},n=t.data.sections.find(function(t){return t&&t.key===l});if(!n||!n.index||!n.data)return r;var a=n.index,o=n.data,i=n.total;return r.sections[l].total=i||0,a.forEach(function(t){var e=o.keyword.find(function(e){return e.key===t.key});e&&r.sections[l].data.push(e)}),r}function E(t){var e=t.limit,r=void 0===e?8:e,n=t.offset,a=void 0===n?0:n,o=t.getStore,i=t.onFinish,c=t.shouldSkipCall,s=t.shouldReset,u=t.version,f=Object(O.f)({bundle:"popsearch",limit:r,offset:a,version:a>0&&u||void 0});return Object(m.a)({apiCall:function(){return function(t){return Object(S.fetchInfo)(""+k+t)}(f)},actions:[function(){return{type:p.REQUESTED}},function(t,e){return{type:p.SUCCESS,payload:{offset:a,data:_(e),shouldReset:s}}},function(t,e){return{type:p.FAILED,payload:{error:e.error}}}],shouldSkipCall:o&&!c?C(o):c,onFinish:i})}function C(t){return function(e){var r=t(e);return!!(r&&r&&r.state_update_time)&&r.state_update_time>Date.now()-6e4}}var j=[];var g=r(2214),R=r(243),w=r(1153),P=r(2213),I=r(2217),x=r.n(I),T=[f.b.INIT,f.b.REQ];function D(t){return t[P.c]}e.default=function(t){var e=t.searchParams,r=o.useContext(R.a).injectAsyncReducer;o.useEffect(function(){var t;r(((t={})[P.c]=y,t))},[r]);var n=Object(i.useDispatch)();o.useEffect(function(){n(E({offset:0,limit:P.a,getStore:D}))},[n]);var a,s=o.useCallback(function(t,e){n(Object(g.a)(t,e))},[n]),u=Object(i.useSelector)(D);if(T.includes((a=u)?a.progress:f.b.INIT))return null;var d=function(t){return t&&t.data?t.data.sections[l].data:j}(u);return!d||d.length<P.b?null:o.createElement("div",{className:x.a.container},o.createElement("div",{className:x.a.list},d.map(function(t,r){var n=t.keyword,a=t.info,i=t.label;if(!n)return null;var u=Object(w.a)(n,e);return o.createElement(c.a,{key:n,keyword:n,recordSearchHistory:s,index:r,searchParams:e,targetSearchParams:u,info:a,intentionid:i})})))}}}]);
//# sourceMappingURL=https://shopee.sg/assets/HotWordList.de020e113b7728d05cea.js.map
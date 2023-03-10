
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"232",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.targetType"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"environment"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hostname"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;",["escape",["macro",9],8,16],"?a=",["escape",["macro",9],8,16],":",["escape",["macro",10],8,16],"?a=",["escape",["macro",10],8,16],":",["escape",["macro",11],8,16],"\u0026\u0026(a=",["escape",["macro",11],8,16],");if(a)return a=a.toString(),a=sha256(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.href"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.is_seller"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=b.split(\"?\");if(2\u003C=c.length){b=encodeURIComponent(a)+\"\\x3d\";a=c[1].split(\/[\u0026;]\/g);for(var d=a.length;0\u003Cd--;)-1!==a[d].lastIndexOf(b,0)\u0026\u0026a.splice(d,1);b=c[0]+\"?\"+a.join(\"\\x26\")}return b}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.dclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",13],8,16],"||",["escape",["macro",14],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=",["escape",["macro",19],8,16],";-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));var b=document.createElement(\"a\");b.href=a;if(b.search){a=b.search.replace(\"?\",\"\\x26\");var c;for(c=0;c\u003Ce.length;c++){var d=e[c];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";b.search=a}return b.href})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.origin"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],",b=",["escape",["macro",23],8,16],"+",["escape",["macro",21],8,16],";return a=a.split(b)[1]||\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],"||",["escape",["macro",7],8,16],";a+=",["escape",["macro",24],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=[\"email\",\"loginKey\"],a=",["escape",["macro",25],8,16],";if(a){-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));a=a.replace(\"?\",\"\\x26\");var b;for(b=0;b\u003Cc.length;b++){var d=c[b];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";a=a.replace(\"\\x26\",\"?\")}return c=a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return ",["escape",["macro",16],8,16],";if(",["escape",["macro",18],8,16],")return ",["escape",["macro",18],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return\"gclid\";if(",["escape",["macro",18],8,16],")return\"dclid\"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.br","value","UA-149843394-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"info.initial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.tw","value","34651"],["map","key","shopee.vn","value","34657"],["map","key","shopee.co.id","value","34652"],["map","key","shopee.com.my","value","32773"],["map","key","shopee.ph","value","34655"],["map","key","shopee.co.th","value","34654"],["map","key","shopee.sg","value","32772"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"info.impressions.0.targetData.accountInfo.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 767\u003E=window.innerWidth?\"m\":980\u003C=window.innerWidth?\"d\":\"t\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.items"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];a=",["escape",["macro",39],8,16],"||[];return a=a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.checkoutid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.orders"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity});return d})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","SGD"],["map","key","shopee.com.my","value","MYR"],["map","key","shopee.co.th","value","THB"],["map","key","shopee.tw","value","TWD"],["map","key","shopee.co.id","value","IDR"],["map","key","shopee.vn","value","VND"],["map","key","shopee.ph","value","PHP"],["map","key","shopee.com.br","value","BRL"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"*",["escape",["macro",49],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{currencyCode:\"",["escape",["macro",45],7],"\",add:{products:[{name:\"",["escape",["macro",46],7],"\",id:\"",["escape",["macro",47],7],"\",price:\"",["escape",["macro",50],7],"\",category:\"",["escape",["macro",51],7],"\",variant:\"",["escape",["macro",52],7],"\",quantity:",["escape",["macro",49],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.operation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.register_channel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",c=0,a=0;a\u003Cb.length;a++)c+=b[a].total_without_shipping;return c\/1E5})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",43],8,16],",d=0,e=[],b=0;b\u003Ca.length;b++){for(var c=0;c\u003Ca[b].items.length;c++)try{e.push({id:a[b].items[c].itemid,price:a[b].items[c].price\/1E5,name:a[b].items[c].name,quantity:a[b].items[c].quantity,category:a[b].items[c].categories[0].catids.join(\".\")})}catch(f){console.warn(f)}d+=a[b].shipping_fee}a={ecommerce:{purchase:{actionField:{id:\"",["escape",["macro",42],7],"\",revenue:\"",["escape",["macro",56],7],"\",shipping:d\/1E5},products:e}}};str=JSON.stringify(a);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.orderids"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/shopee.vn\/m\/99","value","1005975"],["map","key","https:\/\/shopee.co.id\/m\/super-shopping-day-129","value","1005969"],["map","key","https:\/\/shopee.co.th\/m\/99","value","1005972"],["map","key","https:\/\/shopee.com.my\/m\/99","value","1005973"],["map","key","https:\/\/shopee.ph\/m\/99","value","953969"],["map","key","https:\/\/shopee.sg\/m\/99","value","1005974"],["map","key","https:\/\/shopee.tw\/m\/99","value","1005971"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_med"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","1011l628"],["map","key","shopee.co.th","value","1100l551"],["map","key","shopee.vn","value","1100l682"],["map","key","shopee.ph","value","1100l720"],["map","key","shopee.com.my","value","1100l721"],["map","key","shopee.tw","value","1011l795"],["map","key","shopee.co.id","value","1101l712"],["map","key","shopee.com.br","value","1011l971"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",62],8,16],",e=",["escape",["macro",42],8,16],",f=",["escape",["macro",58],8,16],",g=",["escape",["macro",43],8,16],",c=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+e+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";b=g.filter(function(d){return d.hasOwnProperty(\"items\")});console.log(\"check \"+b);b.forEach(function(d,h){d.items.forEach(function(a){var k=a.itemid,l=a.price\/1E5,m=a.quantity,n=a.shopid;a=a.categories[0].catids[0];c+=\"[category:\"+a+\"\/sku:\"+k+\"\/value:\"+l+\n\"\/quantity:\"+m+\"\/shop_id:\"+n+\"\/order_id:\"+f[h]+\"\/]\"})});console.log(\"::: \"+c);return c})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-125099498-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePostAuthor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePostType2"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.br","value","UA-149843394-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",65]],["map","index","2","group",["macro",66]],["map","index","3","group",["macro",67]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",68]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",74],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",75],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com","value","UA-132684032-1"],["map","key","shopee.com.br","value","UA-149843394-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",83],8,16],"*",["escape",["macro",84],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catid_be"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{remove:{products:[{name:\"",["escape",["macro",81],7],"\",id:\"",["escape",["macro",82],7],"\",price:",["escape",["macro",85],8,16],",category:\"",["escape",["macro",86],7],"\",variant:\"",["escape",["macro",87],7],"\",quantity:",["escape",["macro",84],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.login_option"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","2599"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var g=",["escape",["macro",92],8,16],",h=",["escape",["macro",42],8,16],",a=",["escape",["macro",43],8,16],",k=",["escape",["macro",56],8,16],",l=",["escape",["macro",58],8,16],",d=[],e=[],f=[];(a||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){})});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].shopid),e.push(a[b].items[c].itemid),f.push(a[b].items[c].categories[0].catids[0]);d=d.join(\"|\");e=e.join(\"|\");f=f.join(\"|\");a=[];a=l.join(\"|\");return g=\"https:\/\/shopback.go2cloud.org\/aff_l?offer_id\\x3d\"+\ng+\"\\x26adv_sub\\x3d\"+h+\"\\x26adv_sub2\\x3d\"+d+\"\\x26adv_sub3\\x3d\"+e+\"\\x26adv_sub4\\x3d\"+a+\"\\x26adv_sub5\\x3d\"+f+\"\\x26amount\\x3d\"+k})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-9"],["map","key","shopee.sg","value","UA-61921742-12"],["map","key","shopee.com.my","value","UA-61915055-10"],["map","key","shopee.tw","value","UA-61915057-10"],["map","key","shopee.co.th","value","UA-61914165-10"],["map","key","(giaitri|nhasach).shopee.vn","value","UA-61914164-10"],["map","key","shopee.ph","value","UA-61918643-10"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",39],8,16],";return a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=location.pathname+location.search,b=document.createElement(\"a\"),d;b.href=a;if(b.search){a=\"\\x26\"+b.search.replace(\"?\",\"\")+\"\\x26\";for(d=0;d\u003Ce.length;d++){var c=e[d];c=a.indexOf(\"\\x26\"+c+\"\\x3d\");if(-1\u003Cc){var f=a.indexOf(\"\\x26\",c+1);a=a.slice(0,c)+a.slice(f,a.length)}}b.search=a.slice(1,a.length-1)}return b.href.replace(location.origin,\"\")})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-14"],["map","key","shopee.sg","value","UA-61921742-14"],["map","key","shopee.com.my","value","UA-61915055-12"],["map","key","shopee.tw","value","UA-61915057-13"],["map","key","shopee.co.th","value","UA-61914165-12"],["map","key","shopee.vn","value","UA-61914164-12"],["map","key","shopee.ph","value","UA-61918643-12"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",104],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value","G-4572B3WZ33"],["map","key","shopee.com.my","value","G-H06K3499BD"],["map","key","shopee.tw","value","G-RPSBE3TQZZ"],["map","key","shopee.co.th","value","G-L4QXS6R7YG"],["map","key","shopee.vn","value","G-M32T05RVZT"],["map","key","shopee.ph","value","G-CB0044GVTM"],["map","key","shopee.com.br","value","G-0GS478VKB8"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pc\"===",["escape",["macro",2],8,16],")return\"pc\";if(\"rweb\"===",["escape",["macro",2],8,16],"||\"rweb_android\"===",["escape",["macro",2],8,16],"||\"mweb\"===",["escape",["macro",2],8,16],")return\"mobile\"})();"]
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return google_tag_manager[",["escape",["macro",109],8,16],"].dataLayer})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.catid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.subcategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0===",["escape",["macro",112],8,16],"?\"cat1\":\"cat2\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"\/1E5;return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","100188"],["map","key","shopee.com.my","value","100126"],["map","key","shopee.co.th","value","100245"],["map","key","shopee.sg","value","100376"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","139835196351422"],["map","key","shopee.com.my","value","757894527666013"],["map","key","shopee.co.th","value","905703166183408"],["map","key","shopee.tw","value","503280033161781"],["map","key","shopee.co.id","value","466924370133774"],["map","key","shopee.vn","value","1457130904612161"],["map","key","shopee.ph","value","1478059392491608"],["map","key","shopee.com.br","value","703307166810792"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",118],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={cookieName:\"_med\",cookieTime:30,keyToGet:\"utm_medium\",keyToSearch:{gclid:\"cpc\"},shopee_refer:\"^((http(s?):\/\/)(([a-z0-9_]+.)?)(shopee.(sg|com.my|co.th|tw|co.id|vn|ph)\/))\",path:\"\/\",domain:\".\"+location.hostname.replace(\/^www\\.\/i,\"\")};return a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__t"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","11"],["map","key","shopee.com.my","value","8"],["map","key","shopee.co.id","value","14"],["map","key","shopee.vn","value","9"],["map","key","shopee.ph","value","15"],["map","key","shopee.tw","value","13"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],",d=[];a=a.filter(function(a){return a.hasOwnProperty(\"items\")});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].itemid);return d.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",43],8,16],",d=[],e=c.filter(function(a){return a.hasOwnProperty(\"items\")}),a=0;a\u003Ce.length;a++)for(var b=0;b\u003Ce[a].items.length;b++)d.push(c[a].items[b].price\/1E5*c[a].items[b].quantity);return d.join(\"|\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.vn","value","ICay2JfBmbeRc1R5Enp1"],["map","key","shopee.co.id","value","IfdkwXB0UU0fVf5tq0DM"],["map","key","shopee.com.my","value","zlDYA9jJjHq1nyHyCLaU"],["map","key","shopee.ph","value","l7fVkOg4vYLmM3fayfyy"],["map","key","shopee.co.th","value","zXiY0VQ8H0VLkoIzoC80"],["map","key","shopee.sg","value","bQSfrGqH6d5VMoTaldIA"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],b=[],c;for(c in a)b.push(a[c].itemid);return b.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.isOfficialShopTheme"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.keyword"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","ICM-39-1334"],["map","key","shopee.com.my","value","ICM-11-1270"],["map","key","shopee.co.th","value","ICM-49-1393"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"crto.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",138],8,16],",c=[],a=0;a\u003Cb.length\u0026\u00263\u003Ea;a++)\"object\"==typeof b[a]?b[a].hasOwnProperty(\"id\")\u0026\u0026c.push(b[a].id):(\"number\"==typeof b[a]||\"number\"==typeof b[a])\u0026\u0026c.push(b[a]);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.totalPrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",143],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}];return a.map(function(a){return a.items.map(function(a){return a.itemid}).join(\"|\")}).join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/\n1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",127],8,16],",b=a.shipping_subtotal\/1E5,c=a.tax_payable\/1E5;return a=a.total_payable\/1E5-b-c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",62],8,16],",n=",["escape",["macro",42],8,16],",p=",["escape",["macro",58],8,16],",c=",["escape",["macro",43],8,16],";b=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+n+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";var f=[];(c||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){var b=a.itemid,c=a.price\/1E5,d=a.quantity,e=a.shopid;a=a.categories[0].catids[0];f.push({itemId:b,itemPrice:c,quantity:d,shopId:e,categoryL1:a})})});var d,e,g,h,k,l=[];\n(Object.values(f)||[]).forEach(function(a){d=a.itemId;e=a.itemPrice;g=a.quantity;h=a.categoryL1;k=a.shopId;l.push(\"[category:\"+h+\"\/sku:\"+d+\"\/value:\"+e+\"\/quantity:\"+g+\"\/shop_id:\"+k+\"\/order_id:\"+p+\"\/]\")});var m=\"\";(Object.values(l)||[]).forEach(function(a){m+=a});return c=b+m})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",151],
      "vtp_map":["list",["map","key","0","value","Baseline"],["map","key","10","value","10%"],["map","key","25","value","25%"],["map","key","50","value","50%"],["map","key","75","value","75%"],["map","key","90","value","90%"],["map","key","100","value","100%"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname.split(\"\/\");return a[1].toLowerCase()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.shopid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value",""],["map","key","shopee.com.my","value",""],["map","key","shopee.tw","value",""],["map","key","shopee.co.th","value",""],["map","key","shopee.vn","value",""],["map","key","shopee.ph","value",""],["map","key","shopee.com.br","value",""]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclsrc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",160],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",179],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":50,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar p=",["escape",["macro",123],8,16],";document.cookie=p.cookieName+\"\\x3d; expires\\x3dThu, 01 Jan 1970 00:00:01 GMT; path\\x3d\"+p.path+\";domain\\x3d\"+p.domain;\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":4
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":6
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":30
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"868286",
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":37
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":38
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"BASKET_TAG",
      "vtp_siteType":["macro",36],
      "vtp_basketArray":["macro",38],
      "tag_id":50
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":51
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",40],
      "vtp_siteType":["macro",36],
      "tag_id":52
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_productID":["macro",41],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":53
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"TRANSACTION_TAG",
      "vtp_siteType":["macro",36],
      "vtp_TransactionID":["macro",42],
      "vtp_TransactionArray":["macro",44],
      "tag_id":54
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":57
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"955851",
      "tag_id":63
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":64
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":69
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":71
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__hjtc",
      "once_per_event":true,
      "vtp_hotjar_site_id":["macro",60],
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":76
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",63],14,3],
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":82
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",64],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",64],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":86
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":88
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":91
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video-playing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["template",["macro",72]," - ",["macro",73]],
      "vtp_eventLabel":["macro",76],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":94
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",78],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"blog-link-clicked",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",70],
      "vtp_eventAction":["macro",79],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",88],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"remove_from_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":100
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",78],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",90],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",91],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":108
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",93],14,3],
      "tag_id":118
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":120
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":121
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":123
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",91]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":124
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",98]],["map","key","u50","value",["macro",99]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":125
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",100]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":126
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":127
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",81]],["map","key","u41","value",["macro",82]],["map","key","u42","value",["macro",85]],["map","key","u43","value",["macro",86]],["map","key","u44","value",["macro",87]],["map","key","u45","value",["macro",84]]],
      "vtp_revenue":["macro",85],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",82],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":128
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":129
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":130
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":131
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",91]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":134
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":135
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":136
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",98]],["map","key","u50","value",["macro",99]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":137
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":138
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":139
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",100]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":140
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",81]],["map","key","u41","value",["macro",82]],["map","key","u42","value",["macro",85]],["map","key","u43","value",["macro",86]],["map","key","u44","value",["macro",87]],["map","key","u45","value",["macro",84]]],
      "vtp_revenue":["macro",85],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",82],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":141
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",100]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":142
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":143
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",91]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":144
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":145
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":146
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",98]],["map","key","u50","value",["macro",99]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":147
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":148
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":149
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",81]],["map","key","u41","value",["macro",82]],["map","key","u42","value",["macro",85]],["map","key","u43","value",["macro",86]],["map","key","u44","value",["macro",87]],["map","key","u45","value",["macro",84]]],
      "vtp_revenue":["macro",85],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",82],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":150
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":151
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",98]],["map","key","u50","value",["macro",99]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":152
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",81]],["map","key","u41","value",["macro",82]],["map","key","u42","value",["macro",85]],["map","key","u43","value",["macro",86]],["map","key","u44","value",["macro",87]],["map","key","u45","value",["macro",84]]],
      "vtp_revenue":["macro",85],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",82],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":153
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":154
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":155
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",91]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":156
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":157
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":158
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",100]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":159
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":160
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":161
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":163
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",81]],["map","key","u41","value",["macro",82]],["map","key","u42","value",["macro",85]],["map","key","u43","value",["macro",86]],["map","key","u44","value",["macro",87]],["map","key","u45","value",["macro",84]]],
      "vtp_revenue":["macro",85],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",82],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":164
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",98]],["map","key","u50","value",["macro",99]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":165
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":166
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":167
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",100]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":168
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",91]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":169
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":170
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":171
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",98]],["map","key","u50","value",["macro",99]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":172
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",100]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",91]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",96],
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":177
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",81]],["map","key","u41","value",["macro",82]],["map","key","u42","value",["macro",85]],["map","key","u43","value",["macro",86]],["map","key","u44","value",["macro",87]],["map","key","u45","value",["macro",84]]],
      "vtp_revenue":["macro",85],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",82],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",97],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":178
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":179
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "consent":["list"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":180
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":184
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",103],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":189
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":190
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":191
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":192
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":193
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",103],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":194
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",105],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":195
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",105],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":196
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"myads-link-clicked",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",105],
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":197
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "consent":["list"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",107],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":392
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",107],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":393
    },{
      "function":"__hl",
      "tag_id":394
    },{
      "function":"__tl",
      "vtp_eventName":"pageState",
      "vtp_interval":"3000",
      "vtp_uniqueTriggerId":"7691473_172",
      "tag_id":395
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10, 25, 50, 75, 90",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"7691473_229",
      "vtp_enableTriggerStartOption":true,
      "tag_id":396
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7691473_263",
      "tag_id":397
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7691473_264",
      "tag_id":398
    },{
      "function":"__hl",
      "tag_id":399
    },{
      "function":"__hl",
      "tag_id":400
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"5000",
      "vtp_uniqueTriggerId":"7691473_360",
      "tag_id":401
    },{
      "function":"__hl",
      "tag_id":402
    },{
      "function":"__hl",
      "tag_id":403
    },{
      "function":"__hl",
      "tag_id":404
    },{
      "function":"__cl",
      "tag_id":405
    },{
      "function":"__hl",
      "tag_id":406
    },{
      "function":"__hl",
      "tag_id":407
    },{
      "function":"__hl",
      "tag_id":408
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",108],8,16],"?\"item_m\":\"item\",data=",["escape",["macro",110],8,16],";(window._bwtm=window._bwtm||[]).push({ch:",["escape",["macro",111],8,16],",iid:",["escape",["macro",41],8,16],",uid:",["escape",["macro",11],8,16],",pid:pid,mid:422});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",108],8,16],"?\"home_m\":\"home\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"cat2\"===",["escape",["macro",113],8,16],"?(pid=\"mobile\"===",["escape",["macro",108],8,16],"?\"cat2_m\":\"cat2\",ch=",["escape",["macro",112],8,16],"):(pid=\"mobile\"===",["escape",["macro",108],8,16],"?\"cat1_m\":\"cat1\",ch=",["escape",["macro",114],8,16],");(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,ch:ch,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",108],8,16],"?\"cart_m\":\"cart\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,carts:[{itemid:",["escape",["macro",47],8,16],",price:",["escape",["macro",115],8,16],",count:",["escape",["macro",49],8,16],"}],uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var pid=\"mobile\"===",["escape",["macro",108],8,16],"?\"buy_m\":\"buy\",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push({itemid:orders[i].items[j].itemid,price:orders[i].items[j].price\/1E5,count:orders[i].items[j].quantity});(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,bitem:orderItems,uid:",["escape",["macro",11],8,16],",order:",["escape",["macro",42],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var orderItems=",["escape",["macro",43],8,16],",totalPrice=0,i=0;i\u003CorderItems.length;i++)ga(\"gtm.ec:addProduct\",{id:orderItems[i].itemid,quantity:orderItems[i].quantity}),totalPrice+=orderItems[i].price\/1E5;ga(\"gtm.ec:setAction\",\"purchase\",{id:",["escape",["macro",42],8,16],"+\"\",revenue:totalPrice});ga(\"gtm.send\",\"event\",\"tracking\",\"purchase\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"ios\"===",["escape",["macro",108],8,16],"||\"android\"===",["escape",["macro",108],8,16],"?\"search_m\":\"search\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,kw:",["escape",["macro",98],8,16],",uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Efor(var cookieName=\"icm-ssid\",iaTransactionId=getCookie(cookieName),iaOfferID=",["escape",["macro",116],8,16],",iaCheckoutId=",["escape",["macro",42],8,16],",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push(orders[i].items[j]);var iaItemId,iaItemPrice,iaQuantity,iaModelId,iaShopId,iaSubTotal=0;\nfor(i=0;i\u003CorderItems.length;i++){iaItemId=orderItems[i].itemid;iaItemPrice=orderItems[i].price\/1E5;iaQuantity=orderItems[i].quantity;iaModelId=orderItems[i].modelid;iaShopId=orderItems[i].shopid;iaSubTotal=iaItemPrice*iaQuantity;var iaConvesionPixelUrl=\"https:\/\/invol.co\/aff_l?offer_id\\x3d\"+iaOfferID+\"\\x26adv_sub\\x3d\"+iaCheckoutId+\"\\x26adv_sub2\\x3d\"+iaItemId+\"\\x26adv_sub3\\x3d\"+iaModelId+\"\\x26adv_sub4\\x3d\"+iaShopId+\"\\x26amount\\x3d\"+iaSubTotal;\"\"!==iaTransactionId\u0026\u0026(iaConvesionPixelUrl+=\"\\x26transaction_id\\x3d\"+\niaTransactionId);var iaImgPixel=new Image(1,1);iaImgPixel.src=iaConvesionPixelUrl}function getCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/static.masoffer.net\/php\/tracking_js.php?type=general\" async\u003E\u003C\/script\u003E\n\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",117],8,16],");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",117],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{search_string:\"",["escape",["macro",98],7],"\",content_ids:\"",["escape",["macro",99],7],"\",content_type:\"product\",content_category:\"Internal Site Search\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{value:",["escape",["macro",119],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",41],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:",["escape",["macro",50],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",47],7],"\",content_type:\"product\",contents:[{id:\"",["escape",["macro",47],7],"\",quantity:",["escape",["macro",49],8,16],",item_price:",["escape",["macro",115],8,16],"}]});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:1*",["escape",["macro",56],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",120],7],"\",content_type:\"product\",contents:",["escape",["macro",121],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"ViewCategory\",{content_name:\"",["escape",["macro",122],7],"\",content_category:\"",["escape",["macro",114],7],"\",content_ids:\"",["escape",["macro",40],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "setup_tags":["list",["tag",157,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(window._bwtm=window._bwtm||[]).push({mid:422,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",c=\"\";for(d in this.aff_source_params){b=this.aff_source_params[d];var e=this.get_param(b);b=e;if(-1!=this.aff_utm_sources.indexOf(e)){a=1;break}}for(var g in this.aff_sid_params){var d=this.aff_sid_params[g];d=this.get_param(d);if(\"\"!==d){c=d;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\nc\u0026\u0026this.set_cookie(\"_aff_sid\",c,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",c=\"\",e=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var d=0;d\u003Ca.length;d++){var k=a[d].itemid,l=a[d].quantity,m=a[d].price\/1E5,h=a[d].shopid,n=a[d].catid,p=a[d].modelid;c+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(d=0;d\u003Cq.length;d++){h=q[d];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,c+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+e+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\nc,navigator.sendBeacon(b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+e+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+c,document.body.appendChild(a));AT.set_cookie(\"_aff_network\",e,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");var c=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";c=new RegExp(c);c=c.exec(b);return null==c?null:\nc[1]},set_cookie:function(a,b,c){var e=new Date;e.setTime(e.getTime()+864E5*c);c=\"expires\\x3d\"+e.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+c+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0;c\u003Cb.length;c++){for(var e=b[c];\" \"==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(a))return e.substring(a.length,e.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\n\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",c=\"\";for(d in this.aff_source_params){b=this.aff_source_params[d];var e=this.get_param(b);b=e;if(-1!=this.aff_utm_sources.indexOf(e)){a=1;break}}for(var g in this.aff_sid_params){var d=this.aff_sid_params[g];d=this.get_param(d);if(\"\"!==d){c=d;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\nc\u0026\u0026this.set_cookie(\"_aff_sid\",c,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",c=\"\",e=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var d=0;d\u003Ca.length;d++){var k=a[d].itemid,l=a[d].quantity,m=a[d].price\/1E5,h=a[d].shopid,n=a[d].catid,p=a[d].modelid;c+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(d=0;d\u003Cq.length;d++){h=q[d];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,c+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+e+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\nc,navigator.sendBeacon(b),console.log(\"[AT] Postback tracking url: \"+b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+e+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+c,document.body.appendChild(a),console.log(\"[AT] Pixel tracking url: \"+a.src));AT.set_cookie(\"_aff_network\",e,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\n\"\\\\]\");var c=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";c=new RegExp(c);c=c.exec(b);return null==c?null:c[1]},set_cookie:function(a,b,c){var e=new Date;e.setTime(e.getTime()+864E5*c);c=\"expires\\x3d\"+e.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+c+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0;c\u003Cb.length;c++){for(var e=b[c];\" \"==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(a))return e.substring(a.length,\ne.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks();AT.track_shopee_order()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction track_keyToGet(){try{var a=get_key(p.keyToGet);null!==a?setCookie(p.cookieName,a):track_keyToSearch()}catch(b){console.warn(\"[medium_cookie_create][track_keyToGet]\",b)}}function track_keyToSearch(){try{var a=Object.entries(p.keyToSearch),b=!0;for(i=0;i\u003Ca.length;i++){var c=a[i],d=get_key(c[0]);if(null!==d){setCookie(p.cookieName,c[1]);b=!1;break}}b\u0026\u0026get_refer()}catch(e){console.warn(\"[medium_cookie_create][track_keyToSearch]\",e)}}\nfunction get_refer(){try{refer\u0026\u0026!shopee_refer_check.test(refer)\u0026\u0026setCookie(p.cookieName,\"refer\")}catch(a){console.warn(\"[medium_cookie_create][get_refer]\",a)}}function get_key(a){try{var b=window.location.href;a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(b);return null==a?null:a[1]}catch(c){return console.warn(\"[medium_cookie_create][get_key]\",c),null}}\nfunction setCookie(a,b){try{var c=new Date;c.setTime(c.getTime()+864E5*p.cookieTime);var d=\";expires\\x3d\"+c.toUTCString();document.cookie=a+\"\\x3d\"+b+d+\";path\\x3d\"+p.path+\";domain\\x3d\"+p.domain}catch(e){return console.warn(\"[medium_cookie_create][setCookie]\",e),null}}try{var p=",["escape",["macro",123],8,16],",refer=",["escape",["macro",124],8,16],",shopee_refer_check=new RegExp(p.shopee_refer,\"i\");track_keyToGet()}catch(a){console.warn(\"[medium_cookie_create]\",a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{var timestamp=(new Date).getTime();(function(a){var b=a.createElement(\"script\");b.src=\"https:\/\/click.accesstra.de\/js\/nct\/lp.js?cb\\x3d\"+timestamp;b.async=!0;a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document)}catch(a){console.warn(a)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var b=a.itemid,c=a.price\/1E5,d=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:b,category_id:a,price:c,quantity:d})})});var __atw=__atw||[];__atw.push({mcn:\"d64a340bcb633f536d56e51874281454\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});var timestamp=(new Date).getTime();\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstra.de\/js\/nct\/cv_global.js?cb\\x3d\"+timestamp;a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function k(a,b){b?(l[0]=l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0,this.blocks=l):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225);this.block=\nthis.start=this.bytes=this.hBytes=0;this.finalized=this.hashed=!1;this.first=!0;this.is224=a}function x(a,b,c){var f=typeof a;if(\"string\"===f){var e,m=[],d=a.length,g=0;for(f=0;f\u003Cd;++f)128\u003E(e=a.charCodeAt(f))?m[g++]=e:2048\u003Ee?(m[g++]=192|e\u003E\u003E6,m[g++]=128|63\u0026e):55296\u003Ee||57344\u003C=e?(m[g++]=224|e\u003E\u003E12,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e):(e=65536+((1023\u0026e)\u003C\u003C10|1023\u0026a.charCodeAt(++f)),m[g++]=240|e\u003E\u003E18,m[g++]=128|e\u003E\u003E12\u002663,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e);a=m}else{if(\"object\"!==f)throw Error(u);if(null===\na)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);}64\u003Ca.length\u0026\u0026(a=(new k(b,!0)).update(a).array());e=[];m=[];for(f=0;64\u003Ef;++f)d=a[f]||0,e[f]=92^d,m[f]=54^d;k.call(this,b,c);this.update(m);this.oKeyPad=e;this.inner=!0;this.sharedMemory=c}var u=\"input is invalid type\",v=\"object\"==typeof window,p=v?window:{};p.JS_SHA256_NO_WINDOW\u0026\u0026(v=!1);v=!v\u0026\u0026\"object\"==typeof self;var A=!p.JS_SHA256_NO_NODE_JS\u0026\u0026\"object\"==typeof process\u0026\u0026\nprocess.versions\u0026\u0026process.versions.node;A?p=global:v\u0026\u0026(p=self);v=!p.JS_SHA256_NO_COMMON_JS\u0026\u0026\"object\"==typeof module\u0026\u0026module.exports;var F=\"function\"==typeof define\u0026\u0026define.amd,w=!p.JS_SHA256_NO_ARRAY_BUFFER\u0026\u0026\"undefined\"!=typeof ArrayBuffer,c=\"0123456789abcdef\".split(\"\"),G=[-2147483648,8388608,32768,128],n=[24,16,8,0],y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,\n4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],\nz=[\"hex\",\"array\",\"digest\",\"arrayBuffer\"],l=[];!p.JS_SHA256_NO_NODE_JS\u0026\u0026Array.isArray||(Array.isArray=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)});!w||!p.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW\u0026\u0026ArrayBuffer.isView||(ArrayBuffer.isView=function(a){return\"object\"==typeof a\u0026\u0026a.buffer\u0026\u0026a.buffer.constructor===ArrayBuffer});var B=function(a,b){return function(m){return(new k(b,!0)).update(m)[a]()}},C=function(a){var b=B(\"hex\",a);A\u0026\u0026(b=H(b,a));b.create=function(){return new k(a)};b.update=\nfunction(a){return b.create().update(a)};for(var m=0;m\u003Cz.length;++m){var c=z[m];b[c]=B(c,a)}return b},H=function(a,b){var c=eval(\"require('crypto')\"),f=eval(\"require('buffer').Buffer\"),e=b?\"sha224\":\"sha256\",h=function(b){if(\"string\"==typeof b)return c.createHash(e).update(b,\"utf8\").digest(\"hex\");if(null===b||void 0===b)throw Error(u);return b.constructor===ArrayBuffer\u0026\u0026(b=new Uint8Array(b)),Array.isArray(b)||ArrayBuffer.isView(b)||b.constructor===f?c.createHash(e).update(new f(b)).digest(\"hex\"):a(b)};\nreturn h},D=function(a,b){return function(c,f){return(new x(c,b,!0)).update(f)[a]()}},E=function(a){var b=D(\"hex\",a);b.create=function(b){return new x(b,a)};b.update=function(a,c){return b.create(a).update(c)};for(var c=0;c\u003Cz.length;++c){var f=z[c];b[f]=D(f,a)}return b};k.prototype.update=function(a){if(!this.finalized){var b=typeof a;if(\"string\"!==b){if(\"object\"!==b)throw Error(u);if(null===a)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);\nvar c=!0}for(var f,e=0,h=a.length,d=this.blocks;e\u003Ch;){if(this.hashed\u0026\u0026(this.hashed=!1,d[0]=this.block,d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0),c)for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)d[b\u003E\u003E2]|=a[e]\u003C\u003Cn[3\u0026b++];else for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)128\u003E(f=a.charCodeAt(e))?d[b\u003E\u003E2]|=f\u003C\u003Cn[3\u0026b++]:2048\u003Ef?(d[b\u003E\u003E2]|=(192|f\u003E\u003E6)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]):55296\u003Ef||57344\u003C=f?(d[b\u003E\u003E2]|=(224|f\u003E\u003E12)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003C\nn[3\u0026b++]):(f=65536+((1023\u0026f)\u003C\u003C10|1023\u0026a.charCodeAt(++e)),d[b\u003E\u003E2]|=(240|f\u003E\u003E18)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E12\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]);this.lastByteIndex=b;this.bytes+=b-this.start;64\u003C=b?(this.block=d[16],this.start=b-64,this.hash(),this.hashed=!0):this.start=b}return 4294967295\u003Cthis.bytes\u0026\u0026(this.hBytes+=this.bytes\/4294967296\u003C\u003C0,this.bytes%=4294967296),this}};k.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var a=this.blocks,\nb=this.lastByteIndex;a[16]=this.block;a[b\u003E\u003E2]|=G[3\u0026b];this.block=a[16];56\u003C=b\u0026\u0026(this.hashed||this.hash(),a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0);a[14]=this.hBytes\u003C\u003C3|this.bytes\u003E\u003E\u003E29;a[15]=this.bytes\u003C\u003C3;this.hash()}};k.prototype.hash=function(){var a,b,c,f,e=this.h0,h=this.h1,d=this.h2,g=this.h3,k=this.h4,l=this.h5,r=this.h6,q=this.h7,n=this.blocks;for(a=16;64\u003Ea;++a){var p=((c=n[a-15])\u003E\u003E\u003E7|c\u003C\u003C25)^(c\u003E\u003E\u003E18|c\u003C\u003C14)^c\u003E\u003E\u003E3;var t=((c=n[a-2])\u003E\u003E\u003E\n17|c\u003C\u003C15)^(c\u003E\u003E\u003E19|c\u003C\u003C13)^c\u003E\u003E\u003E10;n[a]=n[a-16]+p+n[a-7]+t\u003C\u003C0}var u=h\u0026d;for(a=0;64\u003Ea;a+=4)this.first?(this.is224?(f=300032,q=(c=n[0]-1413257819)-150054599\u003C\u003C0,g=c+24177077\u003C\u003C0):(f=704751109,q=(c=n[0]-210244248)-1521486534\u003C\u003C0,g=c+143694565\u003C\u003C0),this.first=!1):(p=(e\u003E\u003E\u003E2|e\u003C\u003C30)^(e\u003E\u003E\u003E13|e\u003C\u003C19)^(e\u003E\u003E\u003E22|e\u003C\u003C10),b=(f=e\u0026h)^e\u0026d^u,q=g+(c=q+((k\u003E\u003E\u003E6|k\u003C\u003C26)^(k\u003E\u003E\u003E11|k\u003C\u003C21)^(k\u003E\u003E\u003E25|k\u003C\u003C7))+(k\u0026l^~k\u0026r)+y[a]+n[a])\u003C\u003C0,g=c+(p+b)\u003C\u003C0),p=(g\u003E\u003E\u003E2|g\u003C\u003C30)^(g\u003E\u003E\u003E13|g\u003C\u003C19)^(g\u003E\u003E\u003E22|g\u003C\u003C10),b=(u=g\u0026e)^g\u0026h^f,r=d+(c=r+((q\u003E\u003E\u003E6|q\u003C\u003C26)^(q\u003E\u003E\u003E11|\nq\u003C\u003C21)^(q\u003E\u003E\u003E25|q\u003C\u003C7))+(q\u0026k^~q\u0026l)+y[a+1]+n[a+1])\u003C\u003C0,p=((d=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|d\u003C\u003C30)^(d\u003E\u003E\u003E13|d\u003C\u003C19)^(d\u003E\u003E\u003E22|d\u003C\u003C10),b=(t=d\u0026g)^d\u0026e^u,l=h+(c=l+((r\u003E\u003E\u003E6|r\u003C\u003C26)^(r\u003E\u003E\u003E11|r\u003C\u003C21)^(r\u003E\u003E\u003E25|r\u003C\u003C7))+(r\u0026q^~r\u0026k)+y[a+2]+n[a+2])\u003C\u003C0,p=((h=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|h\u003C\u003C30)^(h\u003E\u003E\u003E13|h\u003C\u003C19)^(h\u003E\u003E\u003E22|h\u003C\u003C10),b=(u=h\u0026d)^h\u0026g^t,k=e+(c=k+((l\u003E\u003E\u003E6|l\u003C\u003C26)^(l\u003E\u003E\u003E11|l\u003C\u003C21)^(l\u003E\u003E\u003E25|l\u003C\u003C7))+(l\u0026r^~l\u0026q)+y[a+3]+n[a+3])\u003C\u003C0,e=c+(p+b)\u003C\u003C0;this.h0=this.h0+e\u003C\u003C0;this.h1=this.h1+h\u003C\u003C0;this.h2=this.h2+d\u003C\u003C0;this.h3=this.h3+g\u003C\u003C0;this.h4=this.h4+k\u003C\u003C0;this.h5=this.h5+\nl\u003C\u003C0;this.h6=this.h6+r\u003C\u003C0;this.h7=this.h7+q\u003C\u003C0};k.prototype.hex=function(){this.finalize();var a=this.h0,b=this.h1,m=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=c[a\u003E\u003E28\u002615]+c[a\u003E\u003E24\u002615]+c[a\u003E\u003E20\u002615]+c[a\u003E\u003E16\u002615]+c[a\u003E\u003E12\u002615]+c[a\u003E\u003E8\u002615]+c[a\u003E\u003E4\u002615]+c[15\u0026a]+c[b\u003E\u003E28\u002615]+c[b\u003E\u003E24\u002615]+c[b\u003E\u003E20\u002615]+c[b\u003E\u003E16\u002615]+c[b\u003E\u003E12\u002615]+c[b\u003E\u003E8\u002615]+c[b\u003E\u003E4\u002615]+c[15\u0026b]+c[m\u003E\u003E28\u002615]+c[m\u003E\u003E24\u002615]+c[m\u003E\u003E20\u002615]+c[m\u003E\u003E16\u002615]+c[m\u003E\u003E12\u002615]+c[m\u003E\u003E8\u002615]+c[m\u003E\u003E4\u002615]+c[15\u0026m]+c[f\u003E\u003E28\u002615]+c[f\u003E\u003E24\u002615]+c[f\u003E\u003E20\u002615]+c[f\u003E\u003E16\u002615]+c[f\u003E\u003E12\u0026\n15]+c[f\u003E\u003E8\u002615]+c[f\u003E\u003E4\u002615]+c[15\u0026f]+c[e\u003E\u003E28\u002615]+c[e\u003E\u003E24\u002615]+c[e\u003E\u003E20\u002615]+c[e\u003E\u003E16\u002615]+c[e\u003E\u003E12\u002615]+c[e\u003E\u003E8\u002615]+c[e\u003E\u003E4\u002615]+c[15\u0026e]+c[h\u003E\u003E28\u002615]+c[h\u003E\u003E24\u002615]+c[h\u003E\u003E20\u002615]+c[h\u003E\u003E16\u002615]+c[h\u003E\u003E12\u002615]+c[h\u003E\u003E8\u002615]+c[h\u003E\u003E4\u002615]+c[15\u0026h]+c[d\u003E\u003E28\u002615]+c[d\u003E\u003E24\u002615]+c[d\u003E\u003E20\u002615]+c[d\u003E\u003E16\u002615]+c[d\u003E\u003E12\u002615]+c[d\u003E\u003E8\u002615]+c[d\u003E\u003E4\u002615]+c[15\u0026d];return this.is224||(a+=c[g\u003E\u003E28\u002615]+c[g\u003E\u003E24\u002615]+c[g\u003E\u003E20\u002615]+c[g\u003E\u003E16\u002615]+c[g\u003E\u003E12\u002615]+c[g\u003E\u003E8\u002615]+c[g\u003E\u003E4\u002615]+c[15\u0026g]),a};k.prototype.toString=k.prototype.hex;k.prototype.digest=function(){this.finalize();\nvar a=this.h0,b=this.h1,c=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=[a\u003E\u003E24\u0026255,a\u003E\u003E16\u0026255,a\u003E\u003E8\u0026255,255\u0026a,b\u003E\u003E24\u0026255,b\u003E\u003E16\u0026255,b\u003E\u003E8\u0026255,255\u0026b,c\u003E\u003E24\u0026255,c\u003E\u003E16\u0026255,c\u003E\u003E8\u0026255,255\u0026c,f\u003E\u003E24\u0026255,f\u003E\u003E16\u0026255,f\u003E\u003E8\u0026255,255\u0026f,e\u003E\u003E24\u0026255,e\u003E\u003E16\u0026255,e\u003E\u003E8\u0026255,255\u0026e,h\u003E\u003E24\u0026255,h\u003E\u003E16\u0026255,h\u003E\u003E8\u0026255,255\u0026h,d\u003E\u003E24\u0026255,d\u003E\u003E16\u0026255,d\u003E\u003E8\u0026255,255\u0026d];return this.is224||a.push(g\u003E\u003E24\u0026255,g\u003E\u003E16\u0026255,g\u003E\u003E8\u0026255,255\u0026g),a};k.prototype.array=k.prototype.digest;k.prototype.arrayBuffer=function(){this.finalize();var a=new ArrayBuffer(this.is224?\n28:32),b=new DataView(a);return b.setUint32(0,this.h0),b.setUint32(4,this.h1),b.setUint32(8,this.h2),b.setUint32(12,this.h3),b.setUint32(16,this.h4),b.setUint32(20,this.h5),b.setUint32(24,this.h6),this.is224||b.setUint32(28,this.h7),a};x.prototype=new k;x.prototype.finalize=function(){if(k.prototype.finalize.call(this),this.inner){this.inner=!1;var a=this.array();k.call(this,this.is224,this.sharedMemory);this.update(this.oKeyPad);this.update(a);k.prototype.finalize.call(this)}};var t=C();t.sha256=\nt;t.sha224=C(!0);t.sha256.hmac=E();t.sha224.hmac=E(!0);v?module.exports=t:(p.sha256=t.sha256,p.sha224=t.sha224,F\u0026\u0026define(function(){return t}))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/click.accesstrade.co.id\/js\/nct\/lp.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var b=a.itemid,c=a.price\/1E5,d=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:b,category_id:a,price:c,quantity:d})})});var __atw=__atw||[];__atw.push({mcn:\"c3c59e5f8b3e9753913f4d435b53c308\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstrade.co.id\/js\/nct\/cv.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",177,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",productId:\"",["escape",["macro",128],7],"\",value:\"",["escape",["macro",129],7],"\",data:\"",["escape",["macro",42],7],"\",filter:\"payment method\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",177,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",filter:\"MEMBER-SIGNUP\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"_home\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"_category2_",["escape",["macro",114],12],"\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"_offer_",["escape",["macro",41],12],"\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"_listing_",["escape",["macro",99],12],"\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"_basketstatus_",["escape",["macro",131],12],"\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"_startorder\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":386
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"\u0026amp;ncm=1\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":387
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",130],12],"_orderstatus2_",["escape",["macro",56],12],"_",["escape",["macro",42],12],"_",["escape",["macro",120],12],"\u0026amp;cd=default\u0026amp;id=pr_",["escape",["macro",130],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":388
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ProductPage.Self"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"impression"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"pc"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"test"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"test.shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"uat"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"uat.shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"ItemCard",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ItemCard"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"click"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"action"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"mweb"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/produk-digital\/"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"HomePage"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"pageState"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"CategoryPage"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"buyNow"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ShopPage.Self"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"OfficialShopLandingPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CollectionPage"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"FlashSale"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"PageMicroSite"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"MallPage.Self"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\/search",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"tw"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"sg"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"ph"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"vn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"placeOrder"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"my"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"id"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"th"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"br"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"Search(Result|)Page"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CartPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CheckoutPage"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_sign_up_success"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"v3"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.(vn|co.th|com.my|ph|sg|tw)\/m\/99",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.co.id\/m\/super-shopping-day-129",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",61],
      "arg1":"(affiliate|affiliates)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"live"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(test|uat|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(test|uat|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\/web$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"https:\/\/shopee.(sg|tw|co.id|vn|co.th|ph|com.my|com.br)\/(blog|inspirasi-shopee)($|.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",67],
      "arg1":"single-post"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":"(^$|((^|,)7691473_229($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",67],
      "arg1":"(single-post|single-page)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/blog"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"shopee.com"
    },{
      "function":"_cn",
      "arg0":["macro",79],
      "arg1":"sho.pe"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/blog\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":"(^$|((^|,)7691473_263($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",79],
      "arg1":"https:\/\/shopee."
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":"(^$|((^|,)7691473_264($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"action_delete_shopping_cart_item"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"popstate"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(event|doitac).shopee.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"login_success"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_login_success"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(giaitri|nhasach).shopee.vn",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"nhasach.shopee.vn",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",101],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",102],
      "arg1":"^(undefined|null|NaN|0|false)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(myads|iklanku|muatukhoa).shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"btn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",101],
      "arg1":"pageState"
    },{
      "function":"_eq",
      "arg0":["macro",101],
      "arg1":"impressions"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"registration"
    }],
  "rules":[
    [["if",0,1],["add",2,9,11,13,14,21,24,30,120,147,159,167,170,173,180]],
    [["if",9],["unless",10],["add",3,148],["block",9]],
    [["if",11],["unless",10],["add",4]],
    [["if",12],["unless",10],["add",4]],
    [["if",1,13],["add",5,29,36]],
    [["if",14,15],["add",6,26,40]],
    [["if",16,17],["add",7,9,11,14,27,30,35,67,71,85,87,102,110,151,160,167,170,173]],
    [["if",3,18],["unless",19],["add",8,65,69,84,90,101,111,131]],
    [["if",9,20],["add",8,38,131]],
    [["if",9,21],["add",8,38,131]],
    [["if",22,23,24],["add",9,11,13,14,19,24,30,118,149,167,170,173,178]],
    [["if",23,24,25],["add",9,11,13,14,20,24,30,119,150,162,167,170,173,179]],
    [["if",17,26],["add",9,11,30,151,167,170,173]],
    [["if",1,27],["add",9,11,13,14,24,30,125,167,170,173,184]],
    [["if",24,28],["add",9,11,13,14,24,30,167,170,173]],
    [["if",24,29],["add",9,11,13,14,20,24,30,125,167,170,173,184]],
    [["if",24,30],["add",9,11,13,14,24,30,125,167,170,173,184]],
    [["if",24,31],["add",9,11,13,14,24,30,125,166,167,170,173,184]],
    [["if",1,32],["add",9,11,13,14,24,30,167,170,173]],
    [["if",23,33,34],["add",9,11,13,20,24,30,63,73,83,88,100,107,121,154,158,167,170,173,181]],
    [["if",17,40],["add",10,12,15,16,17,22,25,0,33,39,42,43,44,45,46,68,75,82,94,97,106,124,152,153,155,156,161,168,1,171,174,185]],
    [["if",23,24,45],["add",14]],
    [["if",24,46],["add",18,122,165,182]],
    [["if",9],["add",23,157,169,172,177,132,134,135,136,137,138,140,141,142,143,144,145,146]],
    [["if",24,47],["add",24,123,164,183]],
    [["if",48,49],["add",28,41,61,74,79,91,98,108,163]],
    [["if",24,50],["unless",19],["add",31,64,76,78,95,103,109,130,157]],
    [["if",11,51],["unless",8],["add",31,130]],
    [["if",11,21],["unless",52],["add",31,130]],
    [["if",9,53],["add",32]],
    [["if",9,54],["add",32]],
    [["if",17,40,55],["add",34,58,175]],
    [["if",24,59],["add",37,115]],
    [["if",11,59,60],["add",37,115]],
    [["if",11,59],["add",37,115]],
    [["if",11,61],["add",37,115]],
    [["if",3,18,62],["add",38,114]],
    [["if",9,63],["add",38,50,114]],
    [["if",8,9],["add",38,114],["block",2,3,4,5,6,7,8,10,11,13,16,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,147,148,149,150,151,152,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,170,171,173,174,175,176,177,178,179,180,181,182,183,184,185]],
    [["if",9,64],["add",47]],
    [["if",65,66,67],["add",48]],
    [["if",9,68,69],["add",49]],
    [["if",9,70],["add",50]],
    [["if",3,4,5],["add",51],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,155,157,158,159,160,161,162,163,164,165,167,168,170,171,173,174,175,176,177,178,179,180,181,182,183,184,185]],
    [["if",3,6,7],["add",51],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,25,26,27,28,0,29,30,31,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,155,157,158,159,160,161,162,163,164,165,167,168,170,171,173,174,175,176,177,178,179,180,181,182,183,184,185]],
    [["if",71,72,73,74],["add",52]],
    [["if",72,73,75,76],["add",52]],
    [["if",17,77],["add",53,54,66,77,86,89,99,113]],
    [["if",11,78,79],["add",55]],
    [["if",9,79],["add",55]],
    [["if",17,80],["add",56,60,72,81,93,96,105]],
    [["if",49,81],["add",57,62,70,80,92,104,112]],
    [["if",9,82],["add",59],["block",148,177]],
    [["if",11,83],["unless",8],["add",116,157]],
    [["if",84,86],["unless",85],["add",117,126]],
    [["if",11,87],["add",127]],
    [["if",9,87],["add",128]],
    [["if",88,89],["add",129]],
    [["if",9,90],["add",133]],
    [["if",9,91],["add",139]],
    [["if",17,55,92],["add",176]],
    [["if",2,3],["block",2,3,4,5,6,7,16,153]],
    [["if",3,35],["block",9,10,11,13,14,15,17,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,153,155,156,167,168,170,171,173,174,175,176,177,178,179,180,181,182,183,184,185]],
    [["if",3,36],["block",9,10,11,12,13,14,15,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,147,148,149,150,151,152,153,154,156,166,167,168,170,171,173,174,175,176,177]],
    [["if",3,37],["block",9,10,11,12,13,14,15,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,147,148,149,150,151,152,153,154,155,156,166,167,168,170,171,173,174,175,176,177]],
    [["if",3,38],["block",9,14,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,147,148,149,150,151,152,153,154,155,166,170,171,173,174,175,176,177]],
    [["if",39],["block",9]],
    [["if",3,41],["block",10,11,13,14,15,17,24,25,30,58,60,61,62,63,64,65,66,67,68,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,147,148,149,150,151,152,153,154,156,166,167,168,173,174,175,176,177]],
    [["if",3,42],["block",10,11,13,15,17,25,30,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,147,148,149,150,151,152,153,154,156,166,167,168,170,171,175,176,177]],
    [["if",3,43],["block",10,11,13,14,15,17,24,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,105,106,107,108,109,110,111,112,113,147,148,149,150,151,152,153,154,156,166,167,168,170,171,173,174]],
    [["if",3,44],["block",10,11,13,18,19,20,21,22,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,147,148,149,150,151,152,154,155,156,166,167,168,170,171,173,174,175,176,177,178,179,180,181,182,183,184,185]],
    [["if",3,56,57],["block",35,36,37,38,39,40,41,45,46,54,86,114,115,117]],
    [["if",9],["unless",58],["block",35,36,37,38,39,40,41,45,46,54,114,115,117]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]],[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}},"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto","__hjtc"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},fa=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={Fg:!0},la={};try{la.__proto__=ka;ja=la.Fg;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ia,na=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.wi=b.prototype},pa=this||self,sa=function(a){if(a&&a!=pa)return qa(a.document);null===ra&&(ra=qa(pa.document));return ra},ua=/^[\w+/_-]+[=]{0,2}$/,ra=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ua.test(c))return c}return""},ya=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},za=function(a,b){function c(){}c.prototype=b.prototype;a.wi=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pi=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},Aa=function(a){return a};var Ba=function(a,b){this.a=a;this.i=b};var Ca=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Da=function(){this.B={};this.m=!1;this.F={}};Da.prototype.get=function(a){return this.B["dust."+a]};Da.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Da.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ea=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Da;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Ca(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=k.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"===a){if(!Ca(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else Ca(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"===a?this.length():Ca(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.Dc=function(){for(var a=Ea(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Fa=function(a,b){if(Ca(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};ba=k.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return Ca(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Ga=function(){function a(f,g){if(b[f]){if(b[f].vc+g>b[f].max)throw Error("Quota exceeded");b[f].vc+=g}}var b={},c=void 0,d=void 0,e={Vh:function(f){c=f},ff:function(){c&&a(c,1)},Xh:function(f){d=f},Na:function(f){d&&a(d,f)},si:function(f,g){b[f]=b[f]||{vc:0};b[f].max=g},vh:function(f){return b[f]&&b[f].vc||0},reset:function(){b={}},dh:a};e.onFnConsume=e.Vh;e.consumeFn=e.ff;e.onStorageConsume=e.Xh;e.consumeStorage=e.Na;e.setMax=e.si;e.getConsumed=e.vh;e.reset=e.reset;e.consume=e.dh;return e};var Ha=function(a,b){this.F=a;this.R=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Da;this.a=this.B=void 0};Ha.prototype.add=function(a,b){Ia(this,a,b,!1)};var Ia=function(a,b,c,d){if(!a.i.m)if(a.F.Na(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ha.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Na(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ha.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ha.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ja=function(a){var b=new Ha(a.F,a);a.B&&(b.B=a.B);b.R=a.R;b.a=a.a;return b};var Ka=function(){},La=function(a){return"function"==typeof a},m=function(a){return"string"==typeof a},Ma=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pa=function(a,b){if(a&&Na(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Qa=function(a,b){if(!Ma(a)||
!Ma(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ta=function(a,b){for(var c=new Ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ua=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Va=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Wa=function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},$a=function(){return(new Date).getTime()},Ra=function(){this.prefix="gtm.";this.values={}};Ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ra.prototype.get=function(a){return this.values[this.prefix+a]};
var ab=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},db=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},eb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},gb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},mb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},nb=function(a,b){var c=B;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=Oa(b,d))return}return d},
ob=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},pb=function(a){var b=[];Ua(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var rb=function(a,b){Da.call(this);this.a=a;this.R=b};na(rb,Da);rb.prototype.toString=function(){return this.a};rb.prototype.Dc=function(){return new k(Ea(this))};rb.prototype.i=function(a,b){a.F.ff();return this.R.apply(tb(this,a),Array.prototype.slice.call(arguments,1))};var tb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Na(d)?ub(e,d):d};c.prototype.F=function(d){return vb(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
rb.prototype.Qa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var vb=function(a,b){for(var c,d=0;d<b.length&&!(c=ub(a,b[d]),c instanceof Ba);d++);return c},ub=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof rb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var wb=function(){Da.call(this)};na(wb,Da);wb.prototype.Dc=function(){return new k(Ea(this))};var xb={control:function(a,b){return new Ba(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Na(a.length+f.length);return new rb(a,function(){return function(g){var h=Ja(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),p=0;p<l.length;p++)if(l[p]=this.a(l[p]),l[p]instanceof Ba)return l[p];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var t=vb(h,f);if(t instanceof Ba)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Na(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Na(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new wb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Na(g);c.set(e,f)}return c},undefined:function(){}};var yb=function(){this.m=Ga();this.a=new Ha(this.m)},zb=function(a,b,c){var d=new rb(b,c);d.m=!0;a.a.set(b,d)};yb.prototype.Ac=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};yb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=ub(this.a,arguments[c]);return b};yb.prototype.B=function(a,b){var c=Ja(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=ub(c,arguments[e]);return d};var Ab=function(a){if(a instanceof Ab)return a;this.ra=a};Ab.prototype.toString=function(){return String(this.ra)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Bb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Cb=function(a){if(null==a)return String(a);var b=Bb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Db=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Eb=function(a){if(!a||"object"!=Cb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Db(a,"constructor")&&!Db(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Db(a,b)},E=function(a,b){var c=b||("array"==Cb(a)?[]:{}),d;for(d in a)if(Db(a,d)){var e=a[d];"array"==Cb(e)?("array"!=Cb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):Eb(e)?(Eb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var Hb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var p=Ea(h),n=0;n<p.length;n++)l[p[n]]=g(h.get(p[n]))},g=function(h){var l=Oa(d,h);if(-1<l)return e[l];if(h instanceof k){var p=[];d.push(h);e.push(p);for(var n=h.Dc(),q=0;q<n.length();q++)p[n.get(q)]=g(h.get(n.get(q)));return p}if(h instanceof wb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof rb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Fb(u[v],b,!!c);var w=b?b.F:Ga(),y=new Ha(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Fb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var p in h)h.hasOwnProperty(p)&&l.set(p,g(h[p]))},g=function(h){var l=Oa(d,
h);if(-1<l)return e[l];if(Na(h)||Va(h)){var p=new k([]);d.push(h);e.push(p);for(var n in h)h.hasOwnProperty(n)&&p.set(n,g(h[n]));return p}if(Eb(h)){var q=new wb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new rb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Hb(this.a(v[w]),b,!!c);return g((0,this.m.R)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Ib=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Jb=function(a){if(void 0===a||Na(a)||Eb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Kb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ib(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Fa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ib(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Fa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mb=new Ba("break"),Nb=new Ba("continue"),Ob=function(a,b){return this.a(a)+this.a(b)},Pb=function(a,b){return this.a(a)&&this.a(b)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Oa(Lb,b))return Fb(a[b].apply(a,Ib(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof rb){var e=Ib(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Oa(Kb.supportedMethods,b)){var f=Ib(c);
f.unshift(this.m);return Kb[b].apply(a,f)}}if(a instanceof rb||a instanceof wb){if(a.has(b)){var g=a.get(b);if(g instanceof rb){var h=Ib(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof rb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ib(c))}if(a instanceof Ab&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Rb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Ub=function(a){var b=Ja(this.m),c=vb(b,Array.prototype.slice.apply(arguments));if(c instanceof Ba)return c},Vb=function(){return Mb},Wb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof Ba)return d}},Xb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ia(b,d,e,
!0)}}},Yb=function(){return Nb},Zb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},$b=function(a,b){return this.a(a)/this.a(b)},ac=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof Ab,d=b instanceof Ab;return c||d?c&&d?a.ra==b.ra:!1:a==b},bc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function dc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=vb(f,d);if(g instanceof Ba){if("break"===g.a)break;if("return"===g.a)return g}}}function ec(a,b,c){if("string"===typeof b)return dc(a,function(){return b.length},function(f){return f},c);if(b instanceof wb||b instanceof k||b instanceof rb){var d=b.Dc(),e=d.length();return dc(a,function(){return e},function(f){return d.get(f)},c)}}
var fc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ec(function(e){d.set(a,e);return d},b,c)},gc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ec(function(e){var f=Ja(d);Ia(f,a,e,!0);return f},b,c)},hc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ec(function(e){var f=Ja(d);f.add(a,e);return f},b,c)},mc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ic(function(e){d.set(a,e);return d},b,c)},nc=
function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ic(function(e){var f=Ja(d);Ia(f,a,e,!0);return f},b,c)},oc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ic(function(e){var f=Ja(d);f.add(a,e);return f},b,c)};
function ic(a,b,c){if("string"===typeof b)return dc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return dc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var pc=function(a,b,c,d){function e(n,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,n.get(r))}}var f=this.a(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ja(g);for(e(g,h);ub(h,b);){var l=vb(h,d);if(l instanceof Ba){if("break"===l.a)break;if("return"===l.a)return l}var p=Ja(g);e(h,p);ub(p,c);h=p}},qc=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},rc=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof wb||a instanceof k||a instanceof rb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Ca(b)&&(c=a[b]);else if(a instanceof Ab)return;return c},sc=function(a,b){return this.a(a)>this.a(b)},
tc=function(a,b){return this.a(a)>=this.a(b)},uc=function(a,b){a=this.a(a);b=this.a(b);a instanceof Ab&&(a=a.ra);b instanceof Ab&&(b=b.ra);return a===b},vc=function(a,b){return!uc.call(this,a,b)},wc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof Ba)return e},xc=function(a,b){return this.a(a)<this.a(b)},yc=function(a,b){return this.a(a)<=this.a(b)},Ac=function(a,b){return this.a(a)%this.a(b)},Bc=function(a,b){return this.a(a)*this.a(b)},Cc=function(a){return-this.a(a)},
Dc=function(a){return!this.a(a)},Ec=function(a,b){return!ac.call(this,a,b)},Fc=function(){return null},Gc=function(a,b){return this.a(a)||this.a(b)},Hc=function(a,b){var c=this.a(a);this.a(b);return c},Ic=function(a){return this.a(a)},Jc=function(a){return Array.prototype.slice.apply(arguments)},Kc=function(a){return new Ba("return",this.a(a))},Lc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof rb||
a instanceof k||a instanceof wb)&&a.set(b,c);return c},Mc=function(a,b){return this.a(a)-this.a(b)},Nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof Ba){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof Ba&&("return"===f.a||"continue"===
f.a)))return f},Oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},Pc=function(a){a=this.a(a);return a instanceof rb?"function":typeof a},Qc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Rc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof Ba){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof Ba){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},
Sc=function(a){return~Number(this.a(a))},Tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Xc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Yc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Zc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var ad=function(){this.a=new yb;$c(this)};ad.prototype.Ac=function(a){return bd(this.a.i(a))};
var dd=function(a,b){return bd(cd.a.B(a,b))},$c=function(a){var b=function(d,e){var f=a.a,g=String(e);xb.hasOwnProperty(d)&&zb(f,g||d,xb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){zb(a.a,String(d),e)};c(0,Ob);c(1,Pb);c(2,Qb);c(3,Rb);c(53,Ub);c(4,Vb);c(5,Wb);c(52,Xb);c(6,Yb);c(9,Wb);c(50,Zb);c(10,$b);c(12,ac);c(13,bc);c(47,fc);c(54,gc);c(55,hc);c(63,pc);c(64,mc);c(65,nc);c(66,oc);c(15,qc);c(16,rc);c(17,rc);c(18,sc);c(19,tc);c(20,uc);c(21,vc);c(22,wc);
c(23,xc);c(24,yc);c(25,Ac);c(26,Bc);c(27,Cc);c(28,Dc);c(29,Ec);c(45,Fc);c(30,Gc);c(32,Hc);c(33,Hc);c(34,Ic);c(35,Ic);c(46,Jc);c(36,Kc);c(43,Lc);c(37,Mc);c(38,Nc);c(39,Oc);c(40,Pc);c(41,Qc);c(42,Rc);c(58,Sc);c(57,Tc);c(60,Uc);c(61,Vc);c(56,Xc);c(62,Yc);c(59,Zc)},fd=function(){var a=cd,b=ed();zb(a.a,"require",b)},gd=function(a,b){a.a.a.R=b};
function bd(a){if(a instanceof Ba||a instanceof rb||a instanceof k||a instanceof wb||a instanceof Ab||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var hd=[],id={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},jd=function(a){return id[a]},kd=/[\x00\x22\x26\x27\x3c\x3e]/g;hd[3]=function(a){return String(a).replace(kd,jd)};var od=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,pd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},qd=function(a){return pd[a]};hd[7]=function(a){return String(a).replace(od,qd)};
hd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(od,qd)+"'"}};var zd=/['()]/g,Ad=function(a){return"%"+a.charCodeAt(0).toString(16)};hd[12]=function(a){var b=
encodeURIComponent(String(a));zd.lastIndex=0;return zd.test(b)?b.replace(zd,Ad):b};var Bd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Cd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Dd=function(a){return Cd[a]};var Ed=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;hd[14]=function(a){var b=String(a);return Ed.test(b)?b.replace(Bd,Dd):"#zSoyz"};hd[16]=function(a){return a};var Fd;
var Gd=[],Hd=[],Id=[],Jd=[],Kd=[],Ld={},Md,Nd,Od,Pd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Qd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ld[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.cf&&b.cf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Fd(c,e,b)},Sd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Rd(a[e],b,c));return d},Td=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ld[b];return c?c.priorityOverride||0:0},Rd=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Rd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Gd[f];if(!g||b.Ad(g))return;c[f]=!0;try{var h=Sd(g,b,c);h.vtp_gtmEventId=b.id;d=Qd(h,b);Od&&(d=Od.fh(d,h))}catch(y){b.tf&&b.tf(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Rd(a[l],b,c)]=Rd(a[l+1],b,c);return d;case "template":d=[];for(var p=!1,n=1;n<a.length;n++){var q=Rd(a[n],b,c);Nd&&(p=p||q===Nd.jc);d.push(q)}return Nd&&p?Nd.ih(d):d.join("");case "escape":d=Rd(a[1],b,c);if(Nd&&Na(a[1])&&"macro"===a[1][0]&&Nd.Hh(a))return Nd.bi(d);d=String(d);for(var t=2;t<a.length;t++)hd[a[t]]&&(d=hd[a[t]](d));return d;case "tag":var r=a[1];if(!Jd[r])throw Error("Unable to resolve tag reference "+r+".");return d=
{kf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ud(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ud=function(a,b,c){try{return Md(Sd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Vd=function(){var a=function(b){return{toString:function(){return b}}};return{Kf:a("consent"),$d:a("convert_case_to"),ae:a("convert_false_to"),be:a("convert_null_to"),ce:a("convert_true_to"),de:a("convert_undefined_to"),Gi:a("debug_mode_metadata"),Ma:a("function"),wg:a("instance_name"),xg:a("live_only"),yg:a("malware_disabled"),zg:a("metadata"),Ji:a("original_activity_id"),Ki:a("original_vendor_template_id"),Cg:a("once_per_event"),Te:a("once_per_load"),Xe:a("setup_tags"),Ye:a("tag_id"),Ze:a("teardown_tags")}}();var Wd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};na(Wd,Error);function Xd(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Xd(a[c],b[c])}};var Yd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};na(Yd,Error);var Zd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var ae=function(){return function(a,b){a instanceof Yd||(a=new Yd(a,$d));b&&a.a.push(b);throw a;}};function $d(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ma(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var be=null,ee=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];be=ce(a);for(var e=0;e<Hd.length;e++){var f=Hd[e],g=de(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var p=[],n=0;n<Jd.length;n++)c[n]&&!d[n]&&(p[n]=!0);return p},de=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=be(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=be(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ce=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ud(Id[c],a));return b[c]}};var fe={fh:function(a,b){b[Vd.$d]&&"string"===typeof a&&(a=1==b[Vd.$d]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Vd.be)&&null===a&&(a=b[Vd.be]);b.hasOwnProperty(Vd.de)&&void 0===a&&(a=b[Vd.de]);b.hasOwnProperty(Vd.ce)&&!0===a&&(a=b[Vd.ce]);b.hasOwnProperty(Vd.ae)&&!1===a&&(a=b[Vd.ae]);return a}};var ge=function(){this.a={}};function he(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Wd(c,d,g);}}function ie(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));he(e,b,d,g);he(f,b,d,g)}}}};var me=function(a){var b=je.C,c=this;this.i=new ge;this.a={};var d={},e=ie(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ua(a,function(f,g){var h={};Ua(g,function(l,p){var n=ke(l,p);h[l]=n.assert;d[l]||(d[l]=n.L)});c.a[f]=function(l,p){var n=h[l];if(!n)throw le(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},oe=function(a){return ne.a[a]||
function(){}};function ke(a,b){var c=Pd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=le;try{return Qd(c)}catch(d){return{assert:function(e){throw new Wd(e,{},"Permission "+e+" is unknown.");},L:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function le(a,b,c){return new Wd(a,b,c)};var pe=!1;var qe={};qe.Bi=Xa('');qe.oh=Xa('');var re=pe,se=qe.oh,te=qe.Bi;
var Je=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ke=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Je(b,"/*")&&(b=b.slice(0,-2));Je(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Le=/^[a-z0-9-]+$/i,Me=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Oe=function(a,b){var c;if(!(c=!Ne(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Le.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,p=b[g];if(!Me.exec(p))throw Error("Invalid Wildcard");var n=p.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=n.slice(n.indexOf("/"));h=Ke(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ne=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Re=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Se={Fn:"function",DustMap:"Object",List:"Array"},G=function(a,b,c){for(var d=0;d<b.length;d++){var e=Re.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],p=typeof l;if(null===l||"undefined"===p){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof rb?n="Fn":l instanceof k?n="List":l instanceof wb?n="DustMap":
l instanceof Ab&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Se[h]||h)+".");}}};function Te(a){return""+a}
function Ue(a,b){var c=[];return c};var Ve=function(a,b){var c=new rb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},We=function(a,b){var c=new wb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];La(e)?c.set(d,Ve(a+"_"+d,e)):(Ma(e)||m(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Xe=function(a,b){G(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new wb;return d=We("AssertApiSubject",c)};var Ye=function(a,b){G(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new wb;return d=We("AssertThatSubject",c)};function Ze(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(Hb(arguments[d],c));return Fb(a.apply(null,b))}}var af=function(){for(var a=Math,b=$e,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ze(a[e].bind(a)))}return c};var bf=function(a){var b;return b};var cf=function(a){var b;return b};var df=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ef=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ff=function(a){G(this.i.a,["message:?string"],arguments);};var gf=function(a,b){G(this.i.a,["min:!number","max:!number"],arguments);return Qa(a,b)};var hf=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Rg.apply(null,Array.prototype.slice.call(arguments,1))};var jf=function(){hf(this,"read_container_data");var a=new wb;a.set("containerId",'GTM-WJZQSJF');a.set("version",'232');a.set("environmentName",'');a.set("debugMode",re);a.set("previewMode",te);a.set("environmentMode",se);a.m=!0;return a};var kf=function(){return(new Date).getTime()};var lf=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof rb)return"function";if(a instanceof Ab){a=a.ra;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var mf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(re||te)&&a.call(this,e.message)}}}return{parse:b(function(c){return Fb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Hb(c))})}};var nf=function(a){return Wa(Hb(a,this.m))};var of=function(a){return Number(Hb(a,this.m))};var pf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var qf=function(a,b,c){var d=null,e=!1;return e?d:null};var $e="floor ceil round max min abs pow sqrt".split(" ");var rf=function(){var a={};return{wh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ui:function(b,c){a[b]=c},reset:function(){a={}}}},sf=function(a,b){G(this.i.a,["apiName:!string","mock:?*"],arguments);};var tf=function(){this.a={};this.i={}};tf.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
tf.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:La(b)?Ve(a,b):We(a,b)};
var uf=function(a,b,c){if(a.i.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.a.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.i[b]=La(c)?Ve(b,c):We(b,c)};function vf(){var a={};return a};var H={Ab:"_ee",od:"_syn",Ni:"_uei",Li:"_pci",Xc:"event_callback",bc:"event_timeout",ia:"gtag.config"};H.Ia="gtag.get";H.la="purchase";H.Za="refund";H.Ha="begin_checkout";H.Xa="add_to_cart";H.Ya="remove_from_cart";H.Tf="view_cart";H.ie="add_to_wishlist";H.ya="view_item";H.he="view_promotion";H.fe="select_promotion";H.Sc="select_item";H.Yb="view_item_list";H.ee="add_payment_info";H.Sf="add_shipping_info";
H.Ba="value_key",H.Aa="value_callback";H.ja="allow_ad_personalization_signals";H.ed="restricted_data_processing";H.ob="allow_google_signals";H.ka="cookie_expires";H.ac="cookie_update";H.xb="session_duration";H.oa="user_properties";H.La="transport_url";H.N="ads_data_redaction";H.s="ad_storage";H.I="analytics_storage";H.Lf="region";H.Mf="wait_for_update";H.Ke=[H.la,H.Za,H.Ha,H.Xa,H.Ya,H.Tf,H.ie,H.ya,H.he,H.fe,H.Yb,H.Sc,H.ee,H.Sf];H.Je=[H.ja,H.ob,H.ac];H.Le=[H.ka,H.bc,H.xb];var wf={},xf=function(a,b){wf[a]=wf[a]||[];wf[a][b]=!0},yf=function(a){for(var b=[],c=wf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){xf("GTM",a)};function zf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,zf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}za(zf,Error);zf.prototype.name="CustomError";var Af=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");zf.call(this,d+c[e])};za(Af,zf);Af.prototype.name="AssertionError";var Bf=function(a,b){throw new Af("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Cf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Df=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ef,Ff=function(){if(void 0===Ef){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Aa,createScript:Aa,createScriptURL:Aa})}catch(c){pa.console&&pa.console.error(c.message)}Ef=a}else Ef=a}return Ef};var Hf=function(a,b){this.a=b===Gf?a:""};Hf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var Gf={};var If=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Jf;a:{var Kf=pa.navigator;if(Kf){var Lf=Kf.userAgent;if(Lf){Jf=Lf;break a}}Jf=""}var Mf=function(a){return-1!=Jf.indexOf(a)};var Of=function(a,b,c){this.a=c===Nf?a:""};Of.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Pf=function(a){if(a instanceof Of&&a.constructor===Of)return a.a;Bf("expected object of type SafeHtml, got '"+a+"' of type "+ya(a));return"type_error:SafeHtml"},Nf={},Rf=new Of(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Nf);var Sf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Tf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Pf(Rf);return!c.parentElement}),Uf=function(a,b){if(a.tagName&&Sf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Tf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Pf(b)};var Vf=function(a){var b=Ff(),c=b?b.createHTML(a):a;return new Of(c,null,Nf)};var B=window,L=document,Wf=navigator,Xf=L.currentScript&&L.currentScript.src,Yf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Zf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},$f=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Ff(),g=f?f.createScriptURL(a):a;e=new Hf(g,Gf);var h;a:{try{var l=d&&d.ownerDocument,p=l&&(l.defaultView||l.parentWindow);
p=p||pa;if(p.Element&&p.Location){h=p;break a}}catch(w){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var n;var q=typeof d;if("object"==q&&null!=d||"function"==q)try{n=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(w){n="<object could not be stringified>"}else n=void 0===d?"undefined":null===d?"null":typeof d;Bf("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",n)}var t;e instanceof Hf&&e.constructor===Hf?t=e.a:(Bf("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ya(e)),t="type_error:TrustedResourceUrl");d.src=t;var r=sa(d.ownerDocument&&d.ownerDocument.defaultView);r&&d.setAttribute("nonce",r);Zf(d,b);c&&(d.onerror=c);var u=sa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},ag=function(){if(Xf){var a=Xf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},bg=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Zf(c,b);void 0!==a&&(c.src=a);return c},cg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},dg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},eg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},fg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},gg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},hg=function(a){var b=L.createElement("div");Uf(b,Vf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ig=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},jg=function(a){Wf.sendBeacon&&Wf.sendBeacon(a)||cg(a)},kg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var lg={},mg=function(a){return void 0==lg[a]?!1:lg[a]};var ng=[];function og(){var a=Yf("google_tag_data",{});a.ics||(a.ics={entries:{},set:pg,update:qg,addListener:rg,notifyListeners:sg,active:!1});return a.ics}
function pg(a,b,c,d,e,f){var g=og();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},p=l.region,n=c&&m(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?p!==e:!n&&!p)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,tg(a),sg(),xf("TAGGING",2))},f)}}}
function qg(a,b){var c=og();c.active=!0;if(void 0!=b){var d=ug(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=ug(a);f.quiet?(f.quiet=!1,tg(a)):g!==d&&tg(a)}}function rg(a,b){ng.push({ef:a,rh:b})}function tg(a){for(var b=0;b<ng.length;++b){var c=ng[b];Na(c.ef)&&-1!==c.ef.indexOf(a)&&(c.xf=!0)}}function sg(a){for(var b=0;b<ng.length;++b){var c=ng[b];if(c.xf){c.xf=!1;try{c.rh({df:a})}catch(d){}}}}
var ug=function(a){var b=og().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},vg=function(a){return!(og().entries[a]||{}).quiet},wg=function(){return mg("gtag_cs_api")?og().active:!1},xg=function(a,b){og().addListener(a,b)},yg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!vg(b[e]))return!0;return!1}if(c()){var d=!1;xg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},zg=function(a,b){if(!1===ug(b)){var c=!1;xg([b],function(d){!c&&ug(b)&&(a(d),c=!0)})}};var Ag=[H.s,H.I],Bg=function(a){var b=a[H.Lf];b&&I(40);var c=a[H.Mf];c&&I(41);for(var d=Na(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Ag.length;f++){var g=Ag[f],h=a[Ag[f]],l=d[e];og().set(g,h,l,"VN","VN-SG",c)}},Cg=function(a,b){for(var c=0;c<Ag.length;c++){var d=Ag[c],e=a[Ag[c]];og().update(d,e)}og().notifyListeners(b)},Dg=function(a){var b=ug(a);return void 0!=b?b:!0},Eg=function(){for(var a=[],b=0;b<Ag.length;b++){var c=ug(Ag[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Fg=function(a,b){yg(a,b)};var Hg=function(a){return Gg?L.querySelectorAll(a):null},Ig=function(a,b){if(!Gg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Jg=!1;if(L.querySelectorAll)try{var Kg=L.querySelectorAll(":root");Kg&&1==Kg.length&&Kg[0]==L.documentElement&&(Jg=!0)}catch(a){}var Gg=Jg;var Lg=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};
var Mg=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ng=function(a){var b=Mg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Ug=/:[0-9]+$/,Vg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Yg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Wg(a.protocol)||Wg(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(Ug,"").toLowerCase());return Xg(a,b,c,d,e)},Xg=function(a,b,c,d,e){var f,g=Wg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Zg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Ug,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||xf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Vg(f,e,!1,void 0));break;case "extension":var p=a.pathname.split(".");f=1<p.length?p[p.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Wg=function(a){return a?a.replace(":",
"").toLowerCase():""},Zg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},$g=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||xf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ug,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},ah=function(a){function b(p){var n=p.split("=")[0];return 0>d.indexOf(n)?p:n+"=0"}function c(p){return p.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=$g(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var bh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),ch=["SCRIPT","IMG","SVG","PATH","BR"],dh=["BR"];function eh(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=eh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function fh(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=ch.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=dh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,p=l.elements,n=[],q=0;q<p.length;q++){var t=p[q],r=t.textContent;t.value&&(r=t.value);if(r){var u=r.match(bh);if(u){var v=
u[0],w;if(B.location){var y=Xg(B.location,"host",!0);w=0<=v.toLowerCase().indexOf(y)}else w=!1;w||n.push({element:t,Wd:v})}}}for(var x=[],z=10<n.length?"3":l.status,A=0;A<n.length&&10>A;A++){var C=n[A].element;x.push({Wd:n[A].Wd,querySelector:eh(C),tagName:C.tagName,isVisible:!Lg(C),type:1})}return{elements:x,status:z}}var je={},O=null,th=Math.random();je.C="GTM-WJZQSJF";je.oc="bu0";je.Ii="";var uh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},vh={__paused:!0,__tg:!0},wh;for(wh in uh)uh.hasOwnProperty(wh)&&(vh[wh]=!0);var xh="www.googletagmanager.com/gtm.js";
var yh=xh,zh=Xa(""),Ah=null,Bh=null,Ch="//www.googletagmanager.com/a?id="+je.C+"&cv=232",Dh={},Eh={},Fh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Gh={},Hh=new Ra,Ih={},Jh={},Mh={name:"dataLayer",set:function(a,b){E(ob(a,b),Ih);Kh()},get:function(a){return Lh(a,2)},reset:function(){Hh=new Ra;Ih={};Kh()}},Lh=function(a,b){return 2!=b?Hh.get(a):Nh(a)},Nh=function(a,b){var c=a.split(".");b=b||[];for(var d=Ih,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Oa(b,d))return}return d},Oh=function(a,b){Jh.hasOwnProperty(a)||(Hh.set(a,b),E(ob(a,b),Ih),Kh())},Kh=function(a){Ua(Jh,function(b,c){Hh.set(b,c);E(ob(b,
void 0),Ih);E(ob(b,c),Ih);a&&delete Jh[b]})},Ph=function(a,b,c){Gh[a]=Gh[a]||{};var d=1!==c?Nh(b):Hh.get(b);"array"===Cb(d)||"object"===Cb(d)?Gh[a][b]=E(d):Gh[a][b]=d},Qh=function(a,b){if(Gh[a])return Gh[a][b]},Rh=function(a,b){Gh[a]&&delete Gh[a][b]};var Uh={},Vh=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===Uh[a]&&(Uh[a]=Math.floor(Math.random()*b));return Uh[a]};function Wh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Yh=function(a,b,c,d){return Xh(d)?Wh(a,String(b||document.cookie),c):[]},ai=function(a,b,c,d,e){if(Xh(e)){var f=Zh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=$h(f,function(g){return g.yc},b);if(1===f.length)return f[0].id;f=$h(f,function(g){return g.Ob},c);return f[0]?f[0].id:void 0}}};function bi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Yh(b,f,!1,d).indexOf(c)}
var fi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Xh(c.wa))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ci(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Sh);g=e(g,"samesite",
c.li);c.oi&&(g=f(g,"secure"));var p=c.domain;if("auto"===p){for(var n=di(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}t=!0;if(!ei(u,c.path)&&bi(v,a,b,c.wa))return 0}if(q&&!t)throw q;return 1}p&&"none"!==p&&(g=e(g,"domain",p));g=f(g,c.flags);d&&d(a,h);return ei(p,c.path)?1:bi(g,a,b,c.wa)?0:1},gi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return fi(a,b,c)};
function $h(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Zh(a,b,c){for(var d=[],e=Yh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),yc:1*l[0]||1,Ob:1*l[1]||1}))}}return d}
var ci=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},hi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ii=/(^|\.)doubleclick\.net$/i,ei=function(a,b){return ii.test(document.location.hostname)||"/"===b&&hi.test(a)},di=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ii.test(e)||hi.test(e)||a.push("none");
return a},Xh=function(a){if(!mg("gtag_cs_api")||!a||!wg())return!0;if(!vg(a))return!1;var b=ug(a);return null==b?!0:!!b};var ji=function(){for(var a=Wf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round($a()/1E3)].join(".")},mi=function(a,b,c,d,e){var f=ki(b);return ai(a,f,li(c),d,e)},ni=function(a,b,c,d){var e=""+ki(c),f=li(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ki=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},li=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function oi(a,b,c){var d,e=a.Nb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||$a())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var pi=["1"],qi={},vi=function(a){var b=si(a.prefix);qi[b]||ti(b,a.path,a.domain)||(ui(b,ji(),a),ti(b,a.path,a.domain))};function ui(a,b,c){var d=ni(b,"1",c.domain,c.path),e=oi(c);e.wa="ad_storage";gi(a,d,e)}function ti(a,b,c){var d=mi(a,b,c,pi,"ad_storage");d&&(qi[a]=d);return d}function si(a){return(a||"_gcl")+"_au"};function wi(){for(var a=xi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function yi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var xi,zi;function Ai(a){xi=xi||yi();zi=zi||wi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,p=(f&3)<<4|g>>4,n=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(n=64));b.push(xi[l],xi[p],xi[n],xi[q])}return b.join("")}
function Bi(a){function b(l){for(;d<a.length;){var p=a.charAt(d++),n=zi[p];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return l}xi=xi||yi();zi=zi||wi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ci;var Gi=function(){var a=Di,b=Ei,c=Fi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){dg(L,"mousedown",d);dg(L,"keyup",d);dg(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Hi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Fi().decorators.push(f)},Ii=function(a,b,c){for(var d=Fi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,p=a,n=!!g.sameHost;if(l&&(n||p!==L.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(p)){h=!0;break a}}else if(0<=p.indexOf(l[q])||n&&0<=l[q].indexOf(p)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&eb(e,g.callback())}}return e},Fi=function(){var a=Yf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ji=/(.*?)\*(.*?)\*(.*)/,Ki=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Li=/^(?:www\.|m\.|amp\.)+/,Mi=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ni(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Pi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ai(String(d))))}var e=b.join("*");return["1",Oi(e),e].join("*")},Oi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ci)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ci=d;for(var l=4294967295,p=0;p<c.length;p++)l=l>>>8^Ci[(l^c.charCodeAt(p))&255];return((l^-1)>>>0).toString(36)},Ri=function(){return function(a){var b=$g(B.location.href),c=b.search.replace("?",""),d=Vg(c,"_gl",!1,!0)||"";a.query=Qi(d)||{};var e=Yg(b,"fragment").match(Ni("_gl"));a.fragment=Qi(e&&e[3]||"")||{}}},Si=function(a){var b=Ri(),c=Fi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(eb(d,e.query),a&&eb(d,e.fragment));return d},
Qi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ji.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var p=g[2],n=0;n<b;++n)if(p===Oi(h,n)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Bi(t[r+1]);return q}}}}catch(u){}};
function Ti(a,b,c,d){function e(n){var q=n,t=Ni(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+p}d=void 0===d?!1:d;var f=Mi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",p=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Ui(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ii(b,1,c),e=Ii(b,2,c),f=Ii(b,3,c);if(gb(d)){var g=Pi(d);c?Vi("_gl",g,a):Wi("_gl",g,a,!1)}if(!c&&gb(e)){var h=Pi(e);Wi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var p=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Wi(p,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Vi(p,n,q);break a}}"string"==typeof q&&Ti(p,n,q,void 0)}}
function Wi(a,b,c,d){if(c.href){var e=Ti(a,b,c.href,void 0===d?!1:d);If.test(e)&&(c.href=e)}}
function Vi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var p=Ti(a,b,c.action);If.test(p)&&(c.action=p)}}}
var Di=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ui(e,e.hostname)}}catch(g){}},Ei=function(a){try{if(a.action){var b=Yg($g(a.action),"host");Ui(a,b)}}catch(c){}},Xi=function(a,b,c,d){Gi();Hi(a,b,"fragment"===c?2:1,!!d,!1)},Yi=function(a,b){Gi();Hi(a,[Xg(B.location,"host",!0)],b,!0,!0)},Zi=function(){var a=L.location.hostname,b=Ki.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Li,""),l=e.replace(Li,""),p;if(!(p=h===l)){var n="."+l;p=h.substring(h.length-n.length,h.length)===n}return p},$i=function(a,b){return!1===a?!1:a||b||Zi()};var aj=/^\w+$/,bj=/^[\w-]+$/,cj=/^~?[\w-]+$/,dj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},ej=function(){if(!mg("gtag_cs_api")||!wg())return!0;var a=ug("ad_storage");return null==a?!0:!!a},fj=function(a,b){vg("ad_storage")?ej()?a():zg(a,"ad_storage"):b?xf("TAGGING",3):yg(function(){fj(a,!0)},["ad_storage"])},ij=function(a){var b=[];if(!L.cookie)return b;var c=Yh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=gj(c[d]);e&&-1===Oa(b,e)&&b.push(e)}return hj(b)};
function jj(a){return a&&"string"==typeof a&&a.match(aj)?a:"_gcl"}
var lj=function(){var a=$g(B.location.href),b=Yg(a,"query",!1,void 0,"gclid"),c=Yg(a,"query",!1,void 0,"gclsrc"),d=Yg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Vg(e,"gclid",!1,void 0);c=c||Vg(e,"gclsrc",!1,void 0)}return kj(b,c,d)},kj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(bj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":mg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},nj=function(a){var b=lj();fj(function(){mj(b,a)})};
function mj(a,b,c){function d(l,p){var n=oj(l,e);n&&gi(n,p,f)}b=b||{};var e=jj(b.prefix);c=c||$a();var f=oi(b,c,!0);f.wa="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.cj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var qj=function(a,b){var c=Si(!0);fj(function(){for(var d=jj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==dj[f]){var g=oj(f,d),h=c[g];if(h){var l=Math.min(pj(h),$a()),p;b:{for(var n=l,q=Yh(g,L.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(pj(q[t])>n){p=!0;break b}p=!1}if(!p){var r=oi(b,l,!0);r.wa="ad_storage";gi(g,h,r)}}}}mj(kj(c.gclid,c.gclsrc),b)})},oj=function(a,b){var c=dj[a];if(void 0!==c)return b+c},pj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function gj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var rj=function(a,b,c,d,e){if(Na(b)){var f=jj(e),g=function(){for(var h={},l=0;l<a.length;++l){var p=oj(a[l],f);if(p){var n=Yh(p,L.cookie,void 0,"ad_storage");n.length&&(h[p]=n.sort()[n.length-1])}}return h};fj(function(){Xi(g,b,c,d)})}},hj=function(a){return a.filter(function(b){return cj.test(b)})},sj=function(a,b){for(var c=jj(b.prefix),d={},e=0;e<a.length;e++)dj[a[e]]&&(d[a[e]]=dj[a[e]]);fj(function(){Ua(d,function(f,g){var h=Yh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],p=pj(l),
n={};n[f]=[gj(l)];mj(n,b,p)}})})};function tj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var uj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(wg()){var c=lj();if(tj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Yi(function(){return d},3);Yi(function(){var e={};return e._up="1",e},1)}}},vj=function(){var a;if(ej()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Td:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Td]||(g[b[h].Td]=[]),g[b[h].Td].push({timestamp:l[1],th:l[2]}))}a=g}else a={};return a};var wj=/^\d+\.fls\.doubleclick\.net$/;function xj(a,b){vg(H.s)?Dg(H.s)?a():zg(a,H.s):b?I(42):Fg(function(){xj(a,!0)},[H.s])}function yj(a){var b=$g(B.location.href),c=Yg(b,"host",!1);if(c&&c.match(wj)){var d=Yg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function zj(a,b,c){if("aw"==a||"dc"==a){var d=yj("gcl"+a);if(d)return d.split(".")}var e=jj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Dg(H.s)&&c,g;g=lj()[a]||[];if(0<g.length)return f?["0"]:g}var h=oj(a,e);return h?ij(h):[]}
var Aj=function(a){var b=yj("gac");if(b)return!Dg(H.s)&&a?"0":decodeURIComponent(b);var c=vj(),d=[];Ua(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].th);g=hj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Bj=function(a,b){var c=lj().dc||[];xj(function(){vi(b);var d=qi[si(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;jg(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var p=si(b.prefix),n=qi[p];n&&ui(p,n,b)}})};var Cj=/[A-Z]+/,Dj=/\s/,Ej=function(a){if(m(a)&&(a=Za(a),!Dj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Cj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},Gj=function(a){for(var b={},c=0;c<a.length;++c){var d=Ej(a[c]);d&&(b[d.id]=d)}Fj(b);var e=[];Ua(b,function(f,g){e.push(g)});return e};
function Fj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Hj=function(){var a=!1;return a};var Jj=function(a,b,c,d){return(2===Ij()||d||"http:"!=B.location.protocol?a:b)+c},Ij=function(){var a=ag(),b;if(1===a)a:{var c=yh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Xj=function(a){return Dg(H.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=ah(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Yj=function(){var a;if(!(a=zh)){var b;if(!0===B._gtmdgs)b=!0;else{var c=Wf&&Wf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Wa("1");return Vh(1,100)<d?Vh(2,2):-1},Zj=function(a){var b;return b};var ak=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),bk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ck={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},dk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fk=function(a){var b;Lh("gtm.allowlist")&&I(52);b=Lh("gtm.allowlist");b||(b=Lh("gtm.whitelist"));b&&I(9);
var c=b&&mb(Ya(b),bk),d;Lh("gtm.blocklist")&&I(51);d=Lh("gtm.blocklist");d||(d=Lh("gtm.blacklist"));d||(d=Lh("tagTypeBlacklist"))&&I(3);d?I(8):d=[];ek()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Oa(Ya(d),"google")&&I(2);var e=
d&&mb(Ya(d),ck),f={};return function(g){var h=g&&g[Vd.Ma];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Eh[h]||[],p=a(h,l);if(b){var n;if(n=p)a:{if(0>Oa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Oa(c,l[q])){I(11);n=!1;break a}}else{n=!1;break a}n=!0}p=n}var t=!1;if(d){var r=0<=Oa(e,h);if(r)t=r;else{var u=Ta(e,l||[]);u&&I(10);t=u}}var v=!p||t;v||!(0<=Oa(l,"sandboxedScripts"))||c&&-1!==Oa(c,"sandboxedScripts")||(v=Ta(e,dk));return f[h]=v}},
ek=function(){return ak.test(B.location&&B.location.hostname)};var gk={active:!0,isAllowed:function(){return!0}},hk=function(a){var b=O.zones;return b?b.checkState(je.C,a):gk},ik=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var jk=function(){},kk=function(){};var lk=!1,mk=0,nk=[];function ok(a){if(!lk){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){lk=!0;for(var e=0;e<nk.length;e++)N(nk[e])}nk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function pk(){if(!lk&&140>mk){mk++;try{L.documentElement.doScroll("left"),ok()}catch(a){B.setTimeout(pk,50)}}}var qk=function(a){lk?a():nk.push(a)};var rk={},sk={},tk=function(a,b,c,d){if(!sk[a]||vh[b]||"__zone"===b)return-1;var e={};Eb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return sk[a].tags.push(e)-1},uk=function(a,b,c,d){if(sk[a]){var e=sk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function vk(a){for(var b=rk[a]||[],c=0;c<b.length;c++)b[c]();rk[a]={push:function(d){d(je.C,sk[a])}}}
var yk=function(a,b,c){sk[a]={tags:[]};La(b)&&wk(a,b);c&&B.setTimeout(function(){return vk(a)},Number(c));return xk(a)},wk=function(a,b){rk[a]=rk[a]||[];rk[a].push(db(function(){return N(function(){b(je.C,sk[a])})}))};function xk(a){var b=0,c=0,d=!1;return{add:function(){c++;return db(function(){b++;d&&b>=c&&vk(a)})},Qg:function(){d=!0;b>=c&&vk(a)}}};var zk=function(){function a(d){return!Ma(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ma(Mh.get("gtm.start"))?Mh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Bh-b)}}};var Dk={},Ek=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},Fk=!1;
var Gk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}zk();return B[b]},Hk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ek();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Ik=function(a){};
var Kk=function(a){},Jk=function(){return B.GoogleAnalyticsObject||"ga"},Lk=function(a,b){return function(){var c=Ek(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Qk=function(){return"&tc="+Jd.filter(function(a){return a}).length},Tk=function(){2022<=Rk().length&&Sk()},Vk=function(){Uk||(Uk=B.setTimeout(Sk,500))},Sk=function(){Uk&&(B.clearTimeout(Uk),Uk=void 0);void 0===Wk||Xk[Wk]&&!Yk&&!Zk||($k[Wk]||al.Jh()||0>=bl--?(I(1),$k[Wk]=!0):(al.hi(),cg(Rk()),Xk[Wk]=!0,cl=dl=el=Zk=Yk=""))},Rk=function(){var a=Wk;if(void 0===a)return"";var b=yf("GTM"),c=yf("TAGGING");return[fl,Xk[a]?"":"&es=1",gl[a],b?"&u="+b:"",c?"&ut="+c:"",Qk(),Yk,Zk,el?el:"",dl,cl,"&z=0"].join("")},
hl=function(){return[Ch,"&v=3&t=t","&pid="+Qa(),"&rv="+je.oc].join("")},il="0.005000">Math.random(),fl=hl(),jl=function(){fl=hl()},Xk={},Yk="",Zk="",cl="",dl="",el="",Wk=void 0,gl={},$k={},Uk=void 0,al=function(a,b){var c=0,d=0;return{Jh:function(){if(c<a)return!1;$a()-d>=b&&(c=0);return c>=a},hi:function(){$a()-d>=b&&(c=0);c++;d=$a()}}}(2,1E3),bl=1E3,kl=function(a,b,c){if(il&&!$k[a]&&b){a!==Wk&&(Sk(),Wk=a);var d,e=String(b[Vd.Ma]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Yk=Yk?Yk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ld[g]?"1":"2")+d;cl=cl?cl+"."+h:"&ti="+h;Vk();Tk()}},ll=function(a,b,c){if(il&&!$k[a]){a!==Wk&&(Sk(),Wk=a);var d=c+b;Zk=Zk?Zk+"."+d:"&epr="+d;Vk();Tk()}},ml=function(a,b,c){};
var nl=function(){return!1},ol=function(){var a={};return function(b,c,d){}};function pl(a,b,c,d){var e=Jd[a],f=ql(a,b,c,d);if(!f)return null;var g=Rd(e[Vd.Xe],c,[]);if(g&&g.length){var h=g[0];f=pl(h.index,{K:f,J:1===h.kf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ql(a,b,c,d){function e(){if(f[Vd.yg])h();else{var w=Sd(f,c,[]);var z=tk(c.id,String(f[Vd.Ma]),Number(f[Vd.Ye]),w[Vd.zg]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var F=$a()-D;kl(c.id,Jd[a],"5");uk(c.id,z,"success",
F);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var F=$a()-D;kl(c.id,Jd[a],"6");uk(c.id,z,"failure",F);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;kl(c.id,f,"1");var C=function(){var F=$a()-D;kl(c.id,f,"7");uk(c.id,z,"exception",F);A||(A=!0,h())};var D=$a();try{Qd(w,c)}catch(F){C(F)}}}var f=Jd[a],g=b.K,h=b.J,l=b.terminate;if(c.Ad(f))return null;var p=Rd(f[Vd.Ze],c,[]);if(p&&p.length){var n=p[0],q=pl(n.index,{K:g,J:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.kf?l:q}if(f[Vd.Te]||f[Vd.Cg]){var t=f[Vd.Te]?Kd:c.xi,r=g,u=h;if(!t[a]){e=db(e);
var v=rl(a,t,e);g=v.K;h=v.J}return function(){t[a](r,u)}}return e}function rl(a,b,c){var d=[],e=[];b[a]=sl(d,e,c);return{K:function(){b[a]=tl;for(var f=0;f<d.length;f++)d[f]()},J:function(){b[a]=ul;for(var f=0;f<e.length;f++)e[f]()}}}function sl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function tl(a){a()}function ul(a,b){b()};var xl=function(a,b,c){for(var d=[],e=0;e<Jd.length;e++)if(a[e]){var f=Jd[e];var g=c.add();try{var h=pl(e,{K:g,J:g,terminate:g},b,e);h?d.push({Ff:e,yf:Td(f),Ac:h}):(vl(e,b),g())}catch(p){g()}}c.Qg();d.sort(wl);for(var l=0;l<d.length;l++)d[l].Ac();return 0<d.length};function wl(a,b){var c,d=b.yf,e=a.yf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Ff,h=b.Ff;f=g>h?1:g<h?-1:0}return f}
function vl(a,b){if(!il)return;var c=function(d){var e=b.Ad(Jd[d])?"3":"4",f=Rd(Jd[d][Vd.Xe],b,[]);f&&f.length&&c(f[0].index);kl(b.id,Jd[d],e);var g=Rd(Jd[d][Vd.Ze],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var yl=!1,Dl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(yl)return!1;yl=!0}var d=hk(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=hk(Number.MAX_SAFE_INTEGER);}if(f)return!1}il&&!$k[b]&&Wk!==b&&(Sk(),Wk=b,cl=Yk="",gl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Vk());
var g={id:b,name:c,Ad:fk(d.isAllowed),xi:[],tf:function(){I(6)},cf:zl(b)},h=yk(b,a.eventCallback,a.eventTimeout);Al(b);var l=ee(g);e&&(l=Bl(l));var p=xl(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||Kk(je.C);switch(c){case "gtm.init":I(19),p&&I(20)}return Cl(l,
p)};function zl(a){return function(b){il&&(Jb(b)||ml(a,"input",b))}}function Al(a){Ph(a,"event",1);Ph(a,"ecommerce",1);Ph(a,"gtm");Ph(a,"eventModel");}
function Bl(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&uh[String(Jd[c][Vd.Ma])]&&(b[c]=!0);return b}function Cl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Jd[c]&&!vh[String(Jd[c][Vd.Ma])])return!0;return!1}function El(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return $g(""+c+b).href}}function Fl(a,b){return Gl()?El(a,b):void 0}function Gl(){var a=!1;return a};var Hl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.K=function(){};this.J=function(){};this.eventId=void 0},Il=function(a){var b=new Hl;b.eventModel=a;return b},Jl=function(a,b){a.targetConfig=b;return a},Kl=function(a,b){a.containerConfig=b;return a},Ll=function(a,b){a.a=b;return a},Ml=function(a,b){a.globalConfig=b;return a},Nl=function(a,b){a.K=b;return a},Ol=function(a,b){a.J=b;return a};
Hl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Pl=function(a){function b(e){Ua(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ua(c,function(e){d.push(e)});return d};var Ql;if(3===je.oc.length)Ql="g";else{var Rl="G";Ql=Rl}
var Sl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ql,OPT:"o"},Tl=function(a){var b=je.C.split("-"),c=b[0].toUpperCase(),d=Sl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===je.oc.length){var g="w";f="2"+g}else f="";return f+d+je.oc+e};var Ul=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var Vl=function(){return Mf("iPhone")&&!Mf("iPod")&&!Mf("iPad")};Mf("Opera");Mf("Trident")||Mf("MSIE");Mf("Edge");!Mf("Gecko")||-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")||Mf("Trident")||Mf("MSIE")||Mf("Edge");-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")&&Mf("Mobile");Mf("Macintosh");Mf("Windows");Mf("Linux")||Mf("CrOS");var Wl=pa.navigator||null;Wl&&(Wl.appVersion||"").indexOf("X11");Mf("Android");Vl();Mf("iPad");Mf("iPod");Vl()||Mf("iPad")||Mf("iPod");Jf.toLowerCase().indexOf("kaios");var Xl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Yl=function(){};var Zl=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},$l=function(a,b){this.i=a;this.a=null;this.B={};this.R=0;this.F=void 0===b?500:b;this.m=null};na($l,Yl);
var bm=function(a){return"function"===typeof a.i.__tcfapi||null!=am(a)};
$l.prototype.addEventListener=function(a){var b={},c=Df(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Zl(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{cm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};$l.prototype.removeEventListener=function(a){a&&a.listenerId&&cm(this,"removeEventListener",null,a.listenerId)};
var em=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var p=dm(a.vendor.consents,void 0===d?"755":d);l=p&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:p&&dm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?dm(a.purpose.legitimateInterests,
b)&&dm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},dm=function(a,b){return!(!a||!a[b])},cm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(am(a)){fm(a);var f=++a.R;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},am=function(a){if(a.a)return a.a;a.a=Xl(a.i,"__tcfapiLocator");return a.a},fm=function(a){a.m||(a.m=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(d){}},Ul(a.i,a.m))};var gm={1:0,3:0,4:0,7:3,9:3,10:3};function hm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var im=hm("",550),jm=hm("",500);function km(){var a=O.tcf||{};return O.tcf=a}
var lm=function(a,b){this.m=a;this.a=b;this.i=$a();},mm=function(a){},nm=function(a){},tm=function(){var a=km(),b=new $l(B,3E3),c=new lm(b,a);if((om()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||bm(b))){a.active=!0;a.Pb={};pm();var d=setTimeout(function(){qm(a);rm(a);d=null},jm);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)qm(a),rm(a),mm(c);else{var f;if(!1===e.gdprApplies)f=sm(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in gm)if(gm.hasOwnProperty(h))if("1"===h){var l=e,p=!0;p=void 0===p?!1:p;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=Zl(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!p||"string"!==typeof l.tcString||!l.tcString.length?!0:em(l,"1",0):!1}else g[h]=em(e,h,gm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Pb=f,rm(a),mm(c))}}),nm(c)}catch(e){d&&(clearTimeout(d),d=null),qm(a),rm(a)}}};function qm(a){a.type="e";a.tcString="tcunavailable";a.Pb=sm()}function pm(){var a={};Bg((a.ad_storage="denied",a.wait_for_update=im,a))}
var om=function(){var a=!1;a=!0;return a};function sm(){var a={},b;for(b in gm)gm.hasOwnProperty(b)&&(a[b]=!0);return a}function rm(a){var b={};Cg((b.ad_storage=a.Pb["1"]?"granted":"denied",b))}
var um=function(){var a=km();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},vm=function(){var a=km();return a.active?a.tcString||"":""},wm=function(a){if(!gm.hasOwnProperty(String(a)))return!0;var b=km();return b.active&&b.Pb?!!b.Pb[String(a)]:!0};function xm(a,b,c){function d(n){var q;O.reported_gclid||(O.reported_gclid={});q=O.reported_gclid;var t=f+(n?"gcu":"gcs");if(!q[t]){q[t]=!0;var r=[],u=function(z,A){A&&r.push(z+"="+encodeURIComponent(A))},v="https://www.google.com";if(wg()){var w=Dg(H.s);u("gcs",Eg());n&&u("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=""+ji());u("rnd",O.dedupe_gclid);if((!f||g&&"aw.ds"!==g)&&Dg(H.s)){var y=ij("_gcl_aw");u("gclaw",y.join("."))}u("url",String(B.location).split(/[?#]/)[0]);u("dclid",ym(b,h));!w&&b&&(v=
"https://pagead2.googlesyndication.com")}u("gdpr_consent",vm());"1"===Si(!1)._up&&u("gtm_up","1");u("gclid",ym(b,f));u("gclsrc",g);u("gtm",Tl(!c));var x=v+"/pagead/landing?"+r.join("&");jg(x)}}var e=lj(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),p=wg();if(l||p)p?Fg(function(){d();Dg(H.s)||zg(function(n){return d(!0,n.df)},H.s)},[H.s]):d()}
function ym(a,b){var c=a&&!Dg(H.s);return b&&c?"0":b}
var Im=function(a){return!(void 0===a||null===a||0===(a+"").length)},Jm=function(a,b){var c;if(2===b.ca)return a("ord",Qa(1E11,1E13)),!0;if(3===b.ca)return a("ord","1"),a("num",Qa(1E11,1E13)),!0;if(4===b.ca)return Im(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.ca)c="1";else if(6===b.ca)c=b.Od;else return!1;Im(c)&&a("qty",c);Im(b.wc)&&a("cost",b.wc);Im(b.transactionId)&&a("ord",b.transactionId);return!0},Lm=function(a,b,c){function d(x,z,A){n.hasOwnProperty(x)||(z=String(z),p.push(";"+x+"="+(A?
z:Km(z))))}var e=a.td,f=a.Rd,g=a.protocol;g+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var h=";",l=!Dg(H.s)&&a.Qb;l&&(g="https://ade.googlesyndication.com/ddm/activity",h="/",f=!1);var p=[h,"src="+Km(e),";type="+Km(a.wd),";cat="+Km(a.Eb)],n=a.kh||{};Ua(n,function(x,z){p.push(";"+Km(x)+"="+Km(z+""))});if(Jm(d,a)){Im(a.Pc)&&d("u",a.Pc);Im(a.Oc)&&d("tran",a.Oc);d("gtm",Tl());wg()&&(d("gcs",Eg()),c&&d("gcu","1"));(function(x,z){z&&
d(x,z)})("gdpr_consent",vm());"1"===Si(!1)._up&&d("gtm_up","1");!1===a.Ng&&d("npa","1");if(a.sd){var q=void 0===a.Qb?!0:!!a.Qb,t=zj("dc",a.eb,q);t&&t.length&&d("gcldc",t.join("."));var r=zj("aw",a.eb,q);r&&r.length&&d("gclaw",r.join("."));var u=Aj(q);u&&d("gac",u);vi({prefix:a.eb,Nb:a.hh,domain:a.gh,flags:a.Ri});var v=qi[si(a.eb)];v&&d("auiddc",v)}Im(a.Jd)&&d("prd",a.Jd,!0);Ua(a.Vd,function(x,z){d(x,z)});p.push(b||"");if(Im(a.Fc)){var w=a.Fc||"";l&&(w=ah(w));
d("~oref",w)}var y=g+p.join("")+"?";f?bg(y,a.K):cg(y,a.K,a.J)}else N(a.J)},Km=encodeURIComponent,Mm=function(a,b){wg()?Fg(function(){Lm(a,b);Dg(H.s)||zg(function(){Lm(a,b,!0)},H.s)},[H.s]):Lm(a,b)};var hn=function(){var a=!0;wm(7)&&wm(9)&&wm(10)||(a=!1);var b=!0;b=!1;b&&!gn()&&(a=!1);return a},gn=function(){var a=!0;wm(3)&&wm(4)||(a=!1);return a};var En=!1;function Fn(){var a=O;return a.gcq=a.gcq||new Gn}
var Hn=function(a,b,c){Fn().register(a,b,c)},In=function(a,b,c,d){Fn().push("event",[b,a],c,d)},Jn=function(a,b){Fn().push("config",[a],b)},Kn=function(a,b,c,d){Fn().push("get",[a,b],c,d)},Ln=function(a){return Fn().getRemoteConfig(a)},Mn={},Nn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},On=function(a,b,c,d,e){this.type=a;this.m=b;this.U=c||"";this.a=d;this.i=e},Gn=function(){this.m={};this.i={};this.a=[]},Pn=function(a,b){var c=Ej(b);return a.m[c.containerId]=
a.m[c.containerId]||new Nn},Qn=function(a,b,c){if(b){var d=Ej(b);if(d&&1===Pn(a,b).status){Pn(a,b).status=2;var e={};il&&(e.timeoutId=B.setTimeout(function(){I(38);Vk()},3E3));a.push("require",[e],d.containerId);Mn[d.containerId]=$a();if(Hj()){}else{var g=
"/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Fl(c,g)||h;$f(l)}}}},Rn=function(a,b,c,d){if(d.U){var e=Pn(a,d.U),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.U]),l=E(e.containerConfig),p=E(e.i),n=E(a.i),q=Lh("gtm.uniqueEventId"),t=Ej(d.U).prefix,r=Ol(Nl(Ml(Ll(Kl(Jl(Il(g),h),l),p),n),function(){ll(q,t,"2");}),function(){
ll(q,t,"3");});try{ll(q,t,"1");f(d.U,b,d.m,r)}catch(u){ll(q,t,"4");}}}};ba=Gn.prototype;
ba.register=function(a,b,c){var d=Pn(this,a);if(3!==d.status){d.m=b;d.status=3;if(c){d.i=c}var e=Ej(a),f=Mn[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Lh("gtm.uniqueEventId"),p=h,n=$a()-g;if(il&&!$k[l]){l!==Wk&&(Sk(),Wk=l);var q=p+"."+Math.floor(g-f)+"."+Math.floor(n);dl=
dl?dl+","+q:"&cl="+q}delete Mn[e.containerId]}this.flush()}};ba.push=function(a,b,c,d){var e=Math.floor($a()/1E3);Qn(this,c,b[0][H.La]||this.i[H.La]);En&&c&&Pn(this,c).a&&(d=!1);this.a.push(new On(a,e,c,b,d));d||this.flush()};ba.insert=function(a,b,c){var d=Math.floor($a()/1E3);0<this.a.length?this.a.splice(1,0,new On(a,d,c,b,!1)):this.a.push(new On(a,d,c,b,!1))};
ba.flush=function(a){for(var b=this,c=[],d=!1;this.a.length;){var e=this.a[0];if(e.i)En?!e.U||Pn(this,e.U).a?(e.i=!1,this.a.push(e)):c.push(e):(e.i=!1,this.a.push(e));else switch(e.type){case "require":if(3!==Pn(this,e.U).status&&!a){En&&this.a.push.apply(this.a,c);return}il&&B.clearTimeout(e.a[0].timeoutId);break;case "set":Ua(e.a[0],function(t,r){E(ob(t,r),b.i)});break;case "config":var f=e.a[0],g=!!f[H.ic];delete f[H.ic];var h=Pn(this,e.U),l=Ej(e.U),p=l.containerId===l.id;g||(p?h.containerConfig=
{}:h.targetConfig[e.U]={});h.a&&g||Rn(this,H.ia,f,e);h.a=!0;delete f[H.Ab];p?E(f,h.containerConfig):E(f,h.targetConfig[e.U]);En&&(d=!0);break;case "event":Rn(this,e.a[1],e.a[0],e);break;case "get":var n={},q=(n[H.Ba]=e.a[0],n[H.Aa]=e.a[1],n);Rn(this,H.Ia,q,e);}this.a.shift()}En&&(this.a.push.apply(this.a,c),d&&this.flush())};ba.getRemoteConfig=function(a){return Pn(this,a).i};var Sn=function(a,b,c){};var Tn=function(a,b,c,d){};var Un=function(a){};var Vn=function(a,b,c){};var Wn=function(a,b){
return!0};var Xn=function(a,b){var c;return c};var Yn=function(a){};var Zn=!1,$n=[];function ao(){if(!Zn){Zn=!0;for(var a=0;a<$n.length;a++)N($n[a])}}var bo=function(a){Zn?N(a):$n.push(a)};var co=function(a){G(this.i.a,["listener:!Fn"],arguments);hf(this,"process_dom_events","window","load");bo(Hb(a))};var eo=function(a,b){var c;var e=!1;var f=Fb(c,this.m,e);void 0===f&&void 0!==c&&I(45);return f};var fo=function(a){var b;var f=!1;var g=Fb(b,this.m,f);void 0===g&&void 0!==b&&I(45);return g};var go=function(a,b){var c=null,d=!1;G(this.i.a,["functionPath:!string","arrayPath:!string"],arguments);hf(this,"access_globals","readwrite",a);hf(this,"access_globals","readwrite",b);var e=[];
var f=a.split("."),g=nb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!La(l))return null;if(l)return Fb(l,this.m,d);var p;l=function(){if(!La(p.push))throw Error("Object at "+b+" in window is not an array.");p.push.call(p,arguments)};g[h]=l;var n=b.split("."),q=nb(n,e),t=n[n.length-1];if(void 0===q)throw Error("Path "+n+" does not exist.");p=q[t];void 0===p&&(p=[],q[t]=p);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};
return Fb(c,this.m,d)};var ho=function(a){var b;G(this.i.a,["path:!string"],arguments);hf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=nb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!La(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Fb(b,this.m,h)};var io=function(a){var b;return b};var jo=function(a,b){b=void 0===b?!0:b;var c;return c};var ko=function(a){var b=null;return b};var lo=function(a,b){var c;return c};var mo=function(a,b){var c;return c};var no=function(a){var b="";return b};function oo(a,b){};var po=function(a){var b="";return b};var qo=function(){hf(this,"get_user_agent");return B.navigator.userAgent};var ro=function(a,b){};var so={},to=function(a,b,c,d){G(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hf(this,"inject_script",a);var e=this.m,f=function(){b instanceof rb&&b.Qa(e)},g=function(){c instanceof rb&&c.Qa(e)};if(!d){$f(a,f,g);return}var h=d;so[h]?(so[h].onSuccess.push(f),so[h].onFailure.push(g)):(so[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=so[h].onSuccess,p=0;p<l.length;p++)N(l[p]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=so[h].onFailure,p=0;p<l.length;p++)N(l[p]);so[h]=null},$f(a,f,g));};var uo=function(){return!1},vo={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var wo=function(){};var xo=function(a){var b=void 0;return b};var yo=function(a,b){var c=!1;return c};var zo=function(){var a="";return a};var Ao=function(){var a="";return a};var Bo=function(a,b,c){};var Co=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Do=function(a,b,c){G(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);hf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=B,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Hb(b,this.m,d),!0;return!1};function Eo(a,b,c){};var Fo=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Go=function(a,b,c){var d=this;};var Ho={},Io={};Ho.getItem=function(a){var b=null;return b};
Ho.setItem=function(a,b){};
Ho.removeItem=function(a){};Ho.clear=function(){};var Jo=function(a){var b;return b};var ed=function(){var a=new tf;Hj()?(a.add("injectHiddenIframe",Ka),a.add("injectScript",Ka)):(a.add("injectHiddenIframe",ro),a.add("injectScript",to));var b=Bo;a.add("Math",af());a.add("TestHelper",vf());a.add("addEventCallback",Un);a.add("aliasInWindow",Wn);a.add("assertApi",Xe);a.add("assertThat",Ye);a.add("callInWindow",
Xn);a.add("callLater",Yn);a.add("copyFromDataLayer",eo);a.add("copyFromWindow",fo);a.add("createArgumentsQueue",go);a.add("createQueue",ho);a.add("decodeUri",bf);a.add("decodeUriComponent",cf);a.add("encodeUri",df);a.add("encodeUriComponent",ef);a.add("fail",ff);a.add("fromBase64",io,!("atob"in B));a.add("generateRandom",gf);a.add("getContainerVersion",jf);a.add("getCookieValues",jo);a.add("getQueryParameters",lo);a.add("getReferrerQueryParameters",mo);a.add("getReferrerUrl",no);a.add("getTimestamp",
kf);a.add("getTimestampMillis",kf);a.add("getType",lf);a.add("getUrl",po);a.add("localStorage",vo,!uo());a.add("logToConsole",wo);a.add("makeInteger",nf);a.add("makeNumber",of);a.add("makeString",pf);a.add("makeTableMap",qf);a.add("mock",sf);a.add("queryPermission",yo);a.add("readCharacterSet",zo);a.add("readTitle",Ao);a.add("sendPixel",b);a.add("setCookie",Co);a.add("setInWindow",Do);a.add("sha256",Go);a.add("templateStorage",Ho);a.add("toBase64",Jo,!("btoa"in B));a.add("JSON",mf(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Ib();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var cd,ne;
function Ko(){var a=data.runtime||[],b=data.runtime_lines;cd=new ad;Lo();Fd=function(e,f,g){Mo(f);var h=new wb;Ua(f,function(r,u){var v=Fb(u);void 0===v&&void 0!==u&&I(44);h.set(r,v)});cd.a.a.B=ae();var l={Rg:oe(e),eventId:void 0!==g?g.id:void 0,Ib:function(){return e},log:function(){}};if(nl()){var p=ol(),n=void 0,q=void 0;l.fa={i:{},a:function(r,u,v){1===u&&(n=r);7===u&&(q=v);p(r,u,v)},m:rf()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);p(n,4,{level:r,source:q,message:v})}}}var t=
dd(l,[e,h]);cd.a.a.B=void 0;t instanceof Ba&&"return"===t.a&&(t=t.i);return Hb(t)};fd();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Xd(d,b[c]);cd.Ac(d)}}function Mo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;La(b)&&(a.gtmOnSuccess=function(){N(b)});La(c)&&(a.gtmOnFailure=function(){N(c)})}
function Lo(){var a=cd;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;gd(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function No(a){void 0!==a&&Ua(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Eh[e]=Eh[e]||[];Eh[e].push(b)}})};var Oo="HA GF G UA AW DC".split(" "),Po=!1,Qo={},Ro=!1;function So(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Xc]&&(c.eventCallback=b[H.Xc]),b[H.bc]&&(c.eventTimeout=b[H.bc]));return c}function To(){return Po}
var Wo={config:function(a){},consent:function(a){function b(){To()&&
E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Fh(),d=a[1];"default"===d?(b(),Bg(a[2])):"update"===d&&(b(),Cg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&m(b)){var c;if(2<a.length){if(!Eb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=So(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Ro=!0,To(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=
a[1],c=a[2],d=ne.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&Eb(a[1])?b=E(a[1]):3==a.length&&m(a[1])&&(b={},Eb(a[2])||Na(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
Wo.get=function(a){};var Xo={policy:!0};
var Yo=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},$o=function(a){var b=Zo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var qp=function(a){if(pp(a))return a;this.a=a};qp.prototype.zh=function(){return this.a};var pp=function(a){return!a||"object"!==Cb(a)||Eb(a)?!1:"getUntrustedUpdateValue"in a};qp.prototype.getUntrustedUpdateValue=qp.prototype.zh;var rp=[];var tp=!1,up=function(a){return B["dataLayer"].push(a)},vp=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function wp(a){var b=a._clear;Ua(a,function(d,e){"_clear"!==d&&(b&&Oh(d,void 0),Oh(d,e))});Ah||(Ah=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Fh(),a["gtm.uniqueEventId"]=c,Oh("gtm.uniqueEventId",c));return Dl(a)}
function xp(){for(var a=!1;!tp&&0<rp.length;){tp=!0;delete Ih.eventModel;Kh();
var f=rp.shift();if(null!=f){var g=pp(f);if(g){var h=f;f=pp(h)?h.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],p=0;p<l.length;p++){var n=l[p],q=Lh(n,1);if(Na(q)||Eb(q))q=E(q);Jh[n]=q}}try{if(La(f))try{f.call(Mh)}catch(z){}else if(Na(f)){var t=f;if(m(t[0])){var r=t[0].split("."),u=r.pop(),v=t.slice(1),w=Lh(r.join("."),2);if(void 0!==w&&null!==w)try{w[u].apply(w,v)}catch(z){}}}else{if(Va(f)){a:{var y=f;if(y.length&&m(y[0])){var x=
Wo[y[0]];if(x&&(!g||!Xo[y[0]])){f=x(y);break a}}f=void 0}if(!f){tp=!1;continue}}a=wp(f)||a}}finally{g&&Kh(!0)}}tp=!1}return!a}function yp(){var a=xp();try{Yo(B["dataLayer"],je.C)}catch(b){}return a}
var Ap=function(){var a=Yf("dataLayer",[]),b=Yf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};qk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});bo(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new qp(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);rp.push.apply(rp,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return xp()&&h};var d=a.slice(0);rp.push.apply(rp,d);zp()&&N(yp)},zp=function(){var a=!0;return a};var Bp={};Bp.jc=new String("undefined");
var Cp=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Bp.jc?b:a[d]);return c.join("")}};Cp.prototype.toString=function(){return this.a("undefined")};Cp.prototype.valueOf=Cp.prototype.toString;Bp.Eg=Cp;Bp.md={};Bp.ih=function(a){return new Cp(a)};var Dp={};Bp.ii=function(a,b){var c=Fh();Dp[c]=[a,b];return c};Bp.hf=function(a){var b=a?0:1;return function(c){var d=Dp[c];if(d&&"function"===typeof d[b])d[b]();Dp[c]=void 0}};Bp.Hh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Bp.bi=function(a){if(a===Bp.jc)return a;var b=Fh();Bp.md[b]=a;return'google_tag_manager["'+je.C+'"].macro('+b+")"};Bp.Th=function(a,b,c){a instanceof Bp.Eg&&(a=a.a(Bp.ii(b,c)),b=Ka);return{yd:a,K:b}};var Ep=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||fg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Fp=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Gp=function(a,b,c){Fp(a)[b]=c},Hp=function(a,b,c,d){var e=Fp(a),f=ab(e,b,d);e[b]=c(f)},Ip=function(a,b,c){var d=Fp(a);return ab(d,b,c)};var Jp=["input","select","textarea"],Kp=["button","hidden","image","reset","submit"],Lp=function(a){var b=a.tagName.toLowerCase();return!Pa(Jp,function(c){return c===b})||"input"===b&&Pa(Kp,function(c){return c===a.type.toLowerCase()})?!1:!0},Mp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):ig(a,["form"],100)},Np=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Lp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Op=!!B.MutationObserver,Pp=void 0,Qp=function(a){if(!Pp){var b=function(){var c=L.body;if(c)if(Op)(new MutationObserver(function(){for(var e=0;e<Pp.length;e++)N(Pp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;dg(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Pp.length;e++)N(Pp[e])}))})}};Pp=[];L.body?b():N(b)}Pp.push(a)};
var aq=function(a,b,c){function d(){var g=a();f+=e?($a()-e)*g.playbackRate/1E3:0;e=$a()}var e=0,f=0;return{zc:function(g,h,l){var p=a(),n=p.jf,q=void 0!==l?Math.round(l):void 0!==h?Math.round(p.jf*h):Math.round(p.jh),t=void 0!==h?Math.round(100*h):0>=n?0:Math.round(q/n*100),r=L.hidden?!1:.5<=Ng(c);d();var u=Ep(c,"gtm.video",[b]);u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=g;u["gtm.videoUrl"]=p.url;u["gtm.videoTitle"]=p.title;u["gtm.videoDuration"]=Math.round(n);u["gtm.videoCurrentTime"]=
Math.round(q);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=t;u["gtm.videoVisible"]=r;up(u)},ki:function(){e=$a()},pd:function(){d()}}};var bq=B.clearTimeout,cq=B.setTimeout,R=function(a,b,c){if(Hj()){b&&N(b)}else return $f(a,b,c)},dq=function(){return new Date},eq=function(){return B.location.href},fq=function(a){return Yg($g(a),"fragment")},gq=function(a){return Zg($g(a))},hq=function(a,b){return Lh(a,b||2)},iq=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=up(a)):d=up(a);return d},jq=function(a,b){B[a]=b},T=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},kq=function(a,b,c){return Yh(a,b,void 0===c?!0:!!c)},lq=function(a,b,c){return 0===gi(a,b,c)},mq=function(a,b){if(Hj()){b&&N(b)}else bg(a,b)},nq=function(a){return!!Ip(a,"init",!1)},oq=function(a){Gp(a,"init",!0)},pq=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":yh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Jj("https://","http://",c))},qq=function(a,
b){var c=a[b];return c},rq=function(a,b,c){il&&(Jb(a)||ml(c,b,a))};
var sq=Bp.Th;function Pq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Qq=new Ra;function Rq(a,b){function c(g){var h=$g(g),l=Yg(h,"protocol"),p=Yg(h,"host",!0),n=Yg(h,"port"),q=Yg(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,p,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Sq(a){return Tq(a)?1:0}
function Tq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Sq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Pq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Oa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,t=Qq.get(q);t||(t=new RegExp(c,n),Qq.set(q,t));p=t.test(b)}catch(r){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Rq(b,c)}return!1};var Uq={},Vq=encodeURI,X=encodeURIComponent,Wq=cg;var Xq=function(a,b){if(!a)return!1;var c=Yg($g(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Yq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Uq.Ih=function(){var a=!1;return a};var Lr=null,Mr=[],Nr=0,Or=null;function Pr(a){if(!B.MutationObserver)return!1;try{return Lr||(Lr=new MutationObserver(Qr),Lr.observe(L.documentElement,{subtree:!0,childList:!0,attributes:!0,characterData:!0}),Nr=$a()),Mr.push(a),!0}catch(b){return!1}}function Qr(){var a=$a()-Nr;0<=a?(Or&&(B.clearTimeout(Or),Or=null),Rr()):Or||(Or=B.setTimeout(function(){Rr();Or=null},0-a))}
function Rr(){Nr=$a();var a=Mr;Mr=[];for(var b=fa(a),c=b.next();!c.done;c=b.next()){var d=c.value;d()}Lr&&(Lr.takeRecords(),Mr.length||(Lr&&(Lr.disconnect(),Lr=null),Or&&(B.clearTimeout(Or),Or=null)))};function Cs(){return B.gaGlobal=B.gaGlobal||{}}var Ds=function(){var a=Cs();a.hid=a.hid||Qa();return a.hid},Es=function(a,b){var c=Cs();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};function dt(a,b){}function et(a){var b=$g(a),c=b.search;return b.protocol+"//"+b.hostname+b.pathname+(c?c+"&richsstsse":"?richsstsse")};var lt=function(a,b){var c;var d=Ns(a);d?(Ls(d,a)||(I(25),a.abort()),c=d):c=void 0;var e=c,f;a:{var g=a.M[H.$a];g?(g=""+g,Is(g,a)||(I(31),a.abort()),Es(g,Dg(H.I)),f=g):(I(32),a.abort(),f="")}return{clientId:f,Cf:e}};var mt=window,nt=document,ot=function(a){var b=mt._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mt["ga-disable-"+a])return!0;try{var c=mt.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Wh("AMP_TOKEN",String(nt.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nt.getElementById("__gaOptOutExtension")?!0:!1};function rt(a){delete a.eventModel[H.Ab];ut(a.eventModel)}
var ut=function(a){Ua(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.oa]||{};Ua(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xt=function(a,b,c){In(b,c,a)},yt=function(a,b,c){In(b,c,a,!0)},At=function(a,b){};
function zt(a,b){}var Z={b:{}};
Z.b.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.g="gaawc";Z.__gaawc.h=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Yq(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(H.oa)||b.vtp_userProperties){var e=d[H.oa]||{};E(Yq(b.vtp_userProperties,"name","value"),e);d[H.oa]=e}a(d,H.Je,function(f){return Xa(f)});a(d,H.Le,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Jn(d,c);N(b.vtp_gtmOnSuccess)})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);rq(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.b.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Mm(b,c)}(function(b){Z.__flc=b;Z.__flc.g="flc";Z.__flc.h=!0;Z.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Yq(b.vtp_customVariable||[],"key","value")||{},e={Eb:b.vtp_activityTag,sd:c,eb:b.vtp_conversionCookiePrefix||void 0,wc:void 0,ca:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,td:b.vtp_advertiserId,wd:b.vtp_groupTag,J:b.vtp_gtmOnFailure,K:b.vtp_gtmOnSuccess,
Fc:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Od:void 0,Rd:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Oc:b.vtp_transactionVariable,transactionId:void 0,Pc:b.vtp_userVariable,Vd:d},f=!Dg(H.s)&&void 0!=hq(H.N)&&!1!==hq(H.N);e.Qb=f;if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,T("google_attr").build([Yq(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Qh(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=hq("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Yg($g(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):gq(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Ep(c,"gtm.click");iq(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!nq("cl")){var c=T("document");dg(c,"click",a,!0);oq("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];rq(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return kq(a.vtp_name,hq("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.fls=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Mm(b,c)}(function(b){Z.__fls=b;Z.__fls.g="fls";Z.__fls.h=!0;Z.__fls.priorityOverride=0})(function(b){var c;if(b.vtp_enableProductReporting){var d=function(t){t=t||[];for(var r=[],u=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],v=0;v<t.length;v++)for(var w=0;w<u.length;w++){var y=u[w],x=t[v][y[1]];void 0!==x&&r.push(y[0]+
(v+1)+":"+X(x))}return r.join("|")};switch(b.vtp_dataSource){case "DATA_LAYER":c=d(hq("ecommerce.purchase.products"));break;case "JSON":c=d(b.vtp_productData);break;case "STRING":for(var e=(b.vtp_productData||"").split("|"),f=0;f<e.length;f++){var g=e[f].split(":");g[1]=g[1]&&X(g[1])||"";e[f]=g.join(":")}c=e.join("|")}}var h=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,l=Yq(b.vtp_customVariable||
[],"key","value")||{},p={Eb:b.vtp_activityTag,sd:h,eb:b.vtp_conversionCookiePrefix||void 0,wc:b.vtp_revenue,ca:"ITEM_SOLD"===b.vtp_countingMethod?6:5,td:b.vtp_advertiserId,wd:b.vtp_groupTag,J:b.vtp_gtmOnFailure,K:b.vtp_gtmOnSuccess,Fc:b.vtp_useImageTag?void 0:b.vtp_url,Jd:c,protocol:"",Od:b.vtp_quantity,Rd:!b.vtp_useImageTag,Oc:b.vtp_transactionVariable,transactionId:b.vtp_orderId,Pc:b.vtp_userVariable,Vd:l},n=!Dg(H.s)&&void 0!=hq(H.N)&&!1!==hq(H.N);p.Qb=n;if(b.vtp_enableAttribution){var q=b.vtp_attributionFields||
[];if(q.length){R("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(p,T("google_attr").build([Yq(q,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(p)})}();
Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],p=l.key;l.read&&e.push(p);l.write&&f.push(p);l.execute&&g.push(p)}return{assert:function(n,q,t){if(!m(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Oa(e,t))return}else if("write"===q){if(-1<Oa(f,t))return}else if("readwrite"===q){if(-1<Oa(f,t)&&-1<Oa(e,t))return}else if("execute"===q){if(-1<Oa(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},L:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Qa(a.vtp_min,a.vtp_max)})}();
Z.b.t=["google"],function(){(function(a){Z.__t=a;Z.__t.g="t";Z.__t.h=!0;Z.__t.priorityOverride=0})(function(){return dq().getTime()})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:hq("gtm.url",1))||eq();var d=b[a("vtp_component")];if(!d||"URL"==d)return gq(String(c));var e=$g(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],p;g?Na(h)?p=h:p=String(h).replace(/\s+/g,
"").split(","):p=[String(h)];for(var n=0;n<p.length;n++){var q=Yg(e,"QUERY",void 0,void 0,p[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Yg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=hq(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;rq(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.Dd&&b.Ed>=b.Dd)b.zd&&T("self").clearInterval(b.zd);else{b.Ed++;var c=dq().getTime();iq({event:b.O,"gtm.timerId":b.zd,"gtm.timerEventNumber":b.Ed,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Dd,"gtm.timerStartTime":b.Ef,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ef,"gtm.triggers":b.Ai})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{O:b.vtp_eventName,Ed:0,interval:Number(b.vtp_interval),Dd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ai:String(b.vtp_uniqueTriggerId||"0"),Ef:dq().getTime()};c.zd=T("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){function a(q){return Dg(q)}function b(q,t){if(wg()&&!e[q]){var r=function(){var u=Ek(),v="gtm"+Fh(),w=p(t),y={name:v};l(w,y,!0);u("create",q,y);u(function(){u.remove(v)})};zg(r,H.I);zg(r,H.s);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?Xa(q[v]):q[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},p=function(q){var t={};q.vtp_gaSettings&&E(Yq(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);E(Yq(q.vtp_fieldsToSet,"fieldName","value"),t);Dg(H.I)||(t.storage="none");Dg(H.s)||(t.allowAdFeatures=!1,t.storeGac=!1);hn()||(t.allowAdFeatures=!1);gn()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);
return t},n=function(q){function t(ta,aa){void 0!==aa&&F("set",ta,aa)}var r={},u={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;E(Yq(y.vtp_contentGroup,"index","group"),u);E(Yq(y.vtp_dimension,"index","dimension"),v);E(Yq(y.vtp_metric,"index","metric"),w);var x=E(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;q=E(q,x)}E(Yq(q.vtp_contentGroup,"index","group"),u);E(Yq(q.vtp_dimension,"index","dimension"),v);E(Yq(q.vtp_metric,"index","metric"),w);var z=p(q),A=Gk(q.vtp_functionName);if(La(A)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Fh(),C=D+".");var F=function(ta){var aa=[].slice.call(arguments,0);aa[0]=C+aa[0];A.apply(window,aa)},M=function(ta,aa){return void 0===aa?aa:ta(aa)},Q=function(ta,
aa){if(aa)for(var hb in aa)aa.hasOwnProperty(hb)&&F("set",ta+hb,aa[hb])},ca=function(){var ta={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},aa={},hb=(aa[H.Sc]="click",aa[H.ya]="detail",aa[H.Xa]="add",aa[H.Ya]="remove",aa[H.Ha]="checkout",aa[H.la]="purchase",aa[H.Za]="refund",aa),Sb={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",
item_category:"category",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},jc=function(bb,lb){for(var cb in bb)ta.hasOwnProperty(cb)&&(bb[lb]=bb[lb]||{},bb[lb].actionField=bb[lb].actionField||{},bb[lb].actionField[ta[cb]]=bb[cb])},ib=function(bb){for(var lb=[],cb={},Tb=0;Tb<bb.length;cb={lb:cb.lb},Tb++)cb.lb={},Ua(bb[Tb],function(xd){return function(ri,Vm){Sb.hasOwnProperty(ri)?xd.lb[Sb[ri]]=Vm:xd.lb[ri]=Vm}}(cb)),lb.push(cb.lb);
return lb},sb=function(bb,lb,cb){if(!Eb(lb))return!1;for(var Tb=ab(Object(lb),cb,[]),xd=0;Tb&&xd<Tb.length;xd++)F(bb,Tb[xd]);return!!Tb&&0<Tb.length},V;if(q.vtp_useEcommerceDataLayer){var jb=!1;q.vtp_useGA4SchemaForEcommerce&&(V=Qh(q.vtp_gtmEventId,"eventModel"),jb=!!V);jb||(V=hq("ecommerce",1))}else q.vtp_ecommerceMacroData&&(V=q.vtp_ecommerceMacroData.ecommerce,
!V&&q.vtp_useGA4SchemaForEcommerce&&(V=q.vtp_ecommerceMacroData));if(!Eb(V))return;V=Object(V);if(q.vtp_useGA4SchemaForEcommerce){V.currencyCode=V.currencyCode||V.currency;var kb=String(Qh(q.vtp_gtmEventId,"event"));if("view_item_list"===kb&&!V.impressions&&V.items)V.impressions=ib(V.items);else if("view_promotion"===kb&&!V.promoView&&V.items)V.promoView={},V.promoView.promotions=ib(V.items);else if("select_promotion"===kb&&!V.promoClick)V.items&&(V.promoClick={},V.promoClick.promotions=ib(V.items)),
jc(V,"promoClick");else if(hb.hasOwnProperty(kb)){var Gb=hb[kb];V[Gb]||(V.items&&(V[Gb]={},V[Gb].products=ib(V.items)),jc(V,Gb))}}var ve=ab(z,"currencyCode",V.currencyCode);void 0!==ve&&F("set","&cu",ve);sb("ec:addImpression",V,"impressions");if(sb("ec:addPromo",V[V.promoClick?"promoClick":"promoView"],"promotions")&&V.promoClick){F("ec:setAction","promo_click",V.promoClick.actionField);return}for(var vd="detail checkout checkout_option click add remove purchase refund".split(" "),wd="refund purchase remove checkout checkout_option add click detail".split(" "),
kc=0;kc<vd.length;kc++){var lc=V[vd[kc]];if(lc){sb("ec:addProduct",lc,"products");F("ec:setAction",vd[kc],lc.actionField);if(il)for(var zc=0;zc<wd.length;zc++){var Qf=V[wd[zc]];if(Qf){Qf!==lc&&I(13);break}}break}}},ea={name:D};l(z,ea,!0);var wa=q.vtp_trackingId||r.trackingId;A("create",wa,ea);F("set","&gtm",Tl(!0));
wg()&&(F("set","&gcs",Eg()),b(wa,q));z._x_19&&(null==Xf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Lk(D,String(z._x_20)))));q.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(ta,aa){void 0!==q[aa]&&F("set",ta,q[aa])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",w);var J={};l(z,J,!1)&&F("set",J);var K;
q.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var ta=z&&z.hitCallback;La(ta)&&ta();q.vtp_gtmOnSuccess()});if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ca());var W={hitType:"event",eventCategory:String(q.vtp_eventCategory||r.category),eventAction:String(q.vtp_eventAction||r.action),eventLabel:M(String,q.vtp_eventLabel||r.label),eventValue:M(Wa,q.vtp_eventValue||
r.value)};l(K,W,!1);F("send",W);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==
q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ca());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var cc=
"_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:cc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var fb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:fb})}K?F("send","pageview",K):F("send","pageview");Xa(z.urlPassthrough)&&Ik(C)}if(!c){var qb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(qb="internal/"+qb);c=!0;var ue=Fl(z._x_19,"/analytics.js"),Wc=Jj("https:","http:","//www.google-analytics.com/"+qb,z&&!!z.forceSSL);R("analytics.js"===qb&&ue?ue:Wc,function(){var ta=Ek();ta&&ta.loaded||q.vtp_gtmOnFailure();},
q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(q){Fg(function(){n(q)},[H.I,H.s])})}();



Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!m(f))throw d(e,{},"Script URL must be a string.");try{if(Oe($g(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},L:a}})}();


Z.b.ytl=["google"],function(){function a(){var v=Math.round(1E9*Math.random())+"";return L.getElementById(v)?a():v}function b(v,w){if(!v)return!1;for(var y=0;y<q.length;y++)if(0<=v.indexOf("//"+q[y]+"/"+w))return!0;return!1}function c(v){var w=-1!==v.indexOf("?")?"&":"?";if(-1<v.indexOf("origin="))return v+w+"enablejsapi=1";if(!r){var y=T("document");r=y.location.protocol+"//"+y.location.hostname;y.location.port&&(r+=":"+y.location.port)}return v+w+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(v,
w){var y=v.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(w)return v.setAttribute("src",c(y)),!0}return!1}function e(v,w){if(!v.getAttribute("data-gtm-yt-inspected-"+w.Ud)&&(v.setAttribute("data-gtm-yt-inspected-"+w.Ud,"true"),d(v,w.pf))){v.id||(v.id=a());var y=T("YT"),x=y.get(v.id);x||(x=new y.Player(v.id));var z=g(x,w),A={},C;for(C in z)A.kb=C,z.hasOwnProperty(A.kb)&&x.addEventListener(A.kb,function(D){return function(F){return z[D.kb](F.data)}}(A)),A={kb:A.kb}}}
function f(v){N(function(){function w(){for(var x=y.getElementsByTagName("iframe"),z=x.length,A=0;A<z;A++)e(x[A],v)}var y=T("document");w();Qp(w)})}function g(v,w){var y,x;function z(){wa=aq(function(){return{url:W,title:U,jf:K,jh:v.getCurrentTime(),playbackRate:P}},w.Ud,v.getIframe());K=0;U=W="";P=1;return A}function A(Y){switch(Y){case t.PLAYING:K=Math.round(v.getDuration());W=v.getVideoUrl();if(v.getVideoData){var oa=v.getVideoData();U=oa?oa.title:""}P=v.getPlaybackRate();w.bh?wa.zc("start"):wa.pd();
J=p(w.di,w.ci,v.getDuration());return C(Y);default:return A}}function C(){xa=v.getCurrentTime();S=dq().getTime();wa.ki();ea();return D}function D(Y){var oa;switch(Y){case t.ENDED:return M(Y);case t.PAUSED:oa="pause";case t.BUFFERING:var Sa=v.getCurrentTime()-xa;oa=1<Math.abs((dq().getTime()-S)/1E3*P-Sa)?"seek":oa||"buffering";v.getCurrentTime()&&(w.ah?wa.zc(oa):wa.pd());ca();return F;case t.UNSTARTED:return z(Y);default:return D}}function F(Y){switch(Y){case t.ENDED:return M(Y);case t.PLAYING:return C(Y);
case t.UNSTARTED:return z(Y);default:return F}}function M(){for(;x;){var Y=y;bq(x);Y()}w.$g&&wa.zc("complete",1);return z(t.UNSTARTED)}function Q(){}function ca(){x&&(bq(x),x=0,y=Q)}function ea(){if(J.length&&0!==P){var Y=-1,oa;do{oa=J[0];if(oa.Ra>v.getDuration())return;Y=(oa.Ra-v.getCurrentTime())/P;if(0>Y&&(J.shift(),0===J.length))return}while(0>Y);y=function(){x=0;y=Q;0<J.length&&J[0].Ra===oa.Ra&&(J.shift(),wa.zc("progress",oa.wf,oa.Af));ea()};x=cq(y,1E3*Y)}}var wa,J=[],K,W,U,P,xa,S,va=z(t.UNSTARTED);
x=0;y=Q;return{onStateChange:function(Y){va=va(Y)},onPlaybackRateChange:function(Y){xa=v.getCurrentTime();S=dq().getTime();wa.pd();P=Y;ca();ea()}}}function h(v){for(var w=v.split(","),y=w.length,x=[],z=0;z<y;z++){var A=parseInt(w[z],10);isNaN(A)||100<A||0>A||x.push(A/100)}x.sort(function(C,D){return C-D});return x}function l(v){for(var w=v.split(","),y=w.length,x=[],z=0;z<y;z++){var A=parseInt(w[z],10);isNaN(A)||0>A||x.push(A)}x.sort(function(C,D){return C-D});return x}function p(v,w,y){var x=v.map(function(C){return{Ra:C,
Af:C,wf:void 0}});if(!w.length)return x;var z=w.map(function(C){return{Ra:C*y,Af:void 0,wf:C}});if(!x.length)return z;var A=x.concat(z);A.sort(function(C,D){return C.Ra-D.Ra});return A}function n(v){var w=!!v.vtp_captureStart,y=!!v.vtp_captureComplete,x=!!v.vtp_capturePause,z=h(v.vtp_progressThresholdsPercent+""),A=l(v.vtp_progressThresholdsTimeInSeconds+""),C=!!v.vtp_fixMissingApi;if(w||y||x||z.length||A.length){var D={bh:w,$g:y,ah:x,ci:z,di:A,pf:C,Ud:void 0===v.vtp_uniqueTriggerId?"":v.vtp_uniqueTriggerId},
F=T("YT"),M=function(){f(D)};N(v.vtp_gtmOnSuccess);if(F)F.ready&&F.ready(M);else{var Q=T("onYouTubeIframeAPIReady");jq("onYouTubeIframeAPIReady",function(){Q&&Q();M()});N(function(){for(var ca=T("document"),ea=ca.getElementsByTagName("script"),wa=ea.length,J=0;J<wa;J++){var K=ea[J].getAttribute("src");if(b(K,"iframe_api")||b(K,"player_api"))return}for(var W=ca.getElementsByTagName("iframe"),U=W.length,P=0;P<U;P++)if(!u&&d(W[P],D.pf)){R("https://www.youtube.com/iframe_api");u=!0;break}})}}else N(v.vtp_gtmOnSuccess)}
var q=["www.youtube.com","www.youtube-nocookie.com"],t={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,u=!1;(function(v){Z.__ytl=v;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.priorityOverride=0})(function(v){v.vtp_triggerStartOption?n(v):qk(function(){n(v)})})}();
Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return je.C})}();

Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Zi())&&qj(a,h));nj(h);sj(["aw","dc"],h);Bj(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var p=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");rj(a,p,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var n=hq(H.N);xm(!1,void 0!=n&&!1!==n);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&uj()})}();

Z.b.aev=["google"],function(){function a(r,u){var v=Qh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(r,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var A=q.shift();delete n[A]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(eq());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!Xq(r,w)}function e(r){p.test(r)||(r="http://"+r);return Yg($g(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return fg(r,"value");case "button":return gg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Lp(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&fg(w,u)||v}var p=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,gg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),A=$g(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=Yg(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var F=r.vtp_attribute,M=a(u,"element");D=M&&fg(M,F)||v||""}return D;case "MD":var Q=r.vtp_mdValue,ca=b(u,"MD",Xp);return Q&&ca?$p(ca,Q)||v:ca||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ea=c(u,w,v);rq(ea,"aev",r.vtp_gtmEventId);return ea}})}();Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Vd.Ma]=null;c[Vd.wg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:eq()}function b(f,g){dg(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:gq(l),T:fq(l)})})}function c(f,g){dg(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:gq(l),T:fq(l)})})}function d(f,g,h){var l=g.history,p=l[f];if(La(p))try{l[f]=function(n,q,t){p.apply(l,[].slice.call(arguments,0));h({source:f,state:n,url:gq(eq()),
T:fq(eq())})}}catch(n){}}function e(){var f={source:null,state:T("history").state||null,url:gq(eq()),T:fq(eq())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.T!=g.T){var p={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.T,"gtm.newUrlFragment":g.T,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;iq(p)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=
0})(function(f){var g=T("self");if(!nq("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);oq("hl")}N(f.vtp_gtmOnSuccess)})}();
Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var p=c[g].value;a.vtp_replaceAfterMatch&&(p=String(b).replace(l,p));f=p;break}}rq(f,"remm",a.vtp_gtmEventId);return f})}();
Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Yq(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;rq(d,"smm",a.vtp_gtmEventId);return d})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var p=L.createElement("script");p.async=!1;p.type="text/javascript";p.id=h.id;p.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(p.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(p.src=n,Zf(p,l));d.insertBefore(p,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(L.body){var e=d.vtp_gtmOnFailure,f=sq(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.yd,h=f.K;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,hg(g),h,e)()}else cq(function(){c(d)},200)};Z.__html=c;Z.__html.g="html";Z.__html.h=
!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=hg('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Wq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.b.lcl=[],function(){function a(){var c=T("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Gh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=ig(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=Ip("lcl",h?"nv.mwt":"mwt",0),p;p=h?Ip("lcl","nv.ids",[]):Ip("lcl","ids",[]);if(p.length){var n=Ep(g,"gtm.linkClick",p);if(b(f,g,c)&&!h&&l&&g.href){var q=String(qq(g,"rel")||""),t=!!Pa(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var r=T((qq(g,"target")||"_self").substring(1)),u=!0;if(iq(n,vp(function(){var v;if(v=u&&r){var w;a:if(t){var y;try{var x=void 0;y=new MouseEvent(f.type,x)}catch(z){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Gh=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(r.location.href=qq(g,"href"))}),l))u=!1;else return f.preventDefault&&
f.preventDefault(),f.returnValue=!1}else iq(n,function(){},l||2E3);return!0}}};dg(c,"click",e,!1);dg(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=qq(d,"href"),g=f.indexOf("#"),h=qq(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=gq(f),p=gq(e.location);return l!==p}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(p){return Math.max(f,p)};Hp("lcl","mwt",h,0);e||Hp("lcl","nv.mwt",h,0)}var l=function(p){p.push(g);return p};Hp("lcl","ids",l,[]);e||Hp("lcl","nv.ids",l,[]);nq("lcl")||(a(),oq("lcl"));N(c.vtp_gtmOnSuccess)})}();


var Bt={};Bt.macro=function(a){if(Bp.md.hasOwnProperty(a))return Bp.md[a]},Bt.onHtmlSuccess=Bp.hf(!0),Bt.onHtmlFailure=Bp.hf(!1);Bt.dataLayer=Mh;Bt.callback=function(a){Dh.hasOwnProperty(a)&&La(Dh[a])&&Dh[a]();delete Dh[a]};Bt.bootstrap=0;Bt._spx=!1;function Ct(){O[je.C]=Bt;eb(Eh,Z.b);Nd=Nd||Bp;Od=fe}
function Dt(){lg.gtm_3pds=!0;lg.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};tm();if(O[je.C]){var a=O.zones;a&&a.unregisterChild(je.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)Gd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Jd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Id.push(g[h]);for(var l=b.rules||[],p=0;p<l.length;p++){for(var n=l[p],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Hd.push(q)}Ld=Z;Md=Sq;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Ko();ne=new me(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Eh[x]=w}No(v);Ct();Ap();
lk=!1;mk=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)ok();else{dg(L,"DOMContentLoaded",ok);dg(L,"readystatechange",ok);if(L.createEventObject&&L.documentElement.doScroll){var z=!0;try{z=!B.frameElement}catch(M){}z&&pk()}dg(B,"load",ok)}Zn=!1;"complete"===L.readyState?ao():dg(B,"load",ao);
a:{if(!il)break a;B.setInterval(jl,864E5);}Bh=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var p=B["google.tagmanager.debugui2.queue"];p||(p=[],B["google.tagmanager.debugui2.queue"]=p,$f("https://www.googletagmanager.com/debug/bootstrap"));return p},g="x"===Yg(B.location,"query",
!1,void 0,"gtm_debug");if(!g&&L.referrer){var h=$g(L.referrer);g="tagassistant.google.com"===Xg(h,"host")}if(!g){var l=Yh("__TAG_ASSISTANT");g=l.length&&l[0].length}B.__TAG_ASSISTANT_API&&(g=!0);if(g&&Xf){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Xf,resume:function(){a()}}});return}a()})(Dt);

})()

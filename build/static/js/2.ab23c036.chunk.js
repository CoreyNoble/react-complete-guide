webpackJsonp([2],{204:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(0),o=n.n(t),a=n(11),i=n(215),c=n(18),s=n(65),d=n(6),u=n(64),p=function(e){var r=e.onFetchOrders;Object(t.useEffect)(function(){r(e.token,e.userId)},[r]);var n=o.a.createElement(u.a,null);return e.loading||(n=e.orders.map(function(e){return o.a.createElement(i.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),o.a.createElement("div",null,n)},l=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},A=function(e){return{onFetchOrders:function(r,n){return e(d.i(r,n))}}};r.default=Object(a.b)(l,A)(Object(s.a)(p,c.a))},215:function(e,r,n){"use strict";var t=n(0),o=n.n(t),a=n(216),i=n.n(a),c=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:i.a.Order},o.a.createElement("p",null,"Ingredients: ",t),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};r.a=c},216:function(e,r,n){var t=n(217);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;n(202)(t,o);t.locals&&(e.exports=t.locals)},217:function(e,r,n){r=e.exports=n(201)(!0),r.push([e.i,".Order__Order__W-Npf{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["C:/Users/corey/Documents/Development/react-complete-guide/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC",file:"Order.css",sourcesContent:[".Order {\r\n    width: 80%;\r\n    border: 1px solid #eee;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    padding: 10px;\r\n    margin: 10px auto;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}"],sourceRoot:""}]),r.locals={Order:"Order__Order__W-Npf"}}});
//# sourceMappingURL=2.ab23c036.chunk.js.map
(this["webpackJsonpapp-react"]=this["webpackJsonpapp-react"]||[]).push([[0],{31:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);a(0);var r=a(17),c=a.n(r),u=(a(31),a(6));var n=function(){return Object(u.jsx)("div",{className:"App",children:"hhhh"})},s=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,r=e.getFID,c=e.getFCP,u=e.getLCP,n=e.getTTFB;a(t),r(t),c(t),u(t),n(t)}))},o=a(23),O=a(22),d=a(10),i=a(20),g="features/Auth/USER_LOGIN",l="features/Auth/USER_LOGOUT",b=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{user:null,token:null};var j=a(5),f=a(1),E="features/Cart/ADD_ITEM",P="features/Cart/REMOVE_ITEM",_="features/Cart/CLEAR_ITEM",h=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];var p="features/Product/START_FETCHING_PRODUCT",T="features/Product/ERROR_FETCHING_PRODUCT",y="features/Product/SUCCESS_FETCHING_PRODUCT",S="features/Product/SET_PAGE",C="features/Product/NEXT_PAGE",v="features/Product/PREV_PAGE",I="features/Product/SET_CATEGORY",R="features/Product/TOGGLE_TAGS",m="features/Product/SET_KEYWORD",G="process",w="success",A="error",k={data:[],currentPage:1,totalItems:-1,perPage:8,keyword:"",category:"",tags:[],status:"idle"};var N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,D=Object(d.b)({auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0,a=e.type,r=e.payload;switch(a){case g:return{user:r.user,token:r.token};case l:return{user:null,token:null};default:return t}},products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0,a=e.type,r=e.payload;switch(a){case p:return Object(f.a)(Object(f.a)({},t),{},{status:G});case T:return Object(f.a)(Object(f.a)({},t),{},{status:A});case y:return Object(f.a)(Object(f.a)({},t),{},{status:w,data:r.data,totalItems:r.count});case S:return Object(f.a)(Object(f.a)({},t),{},{currentPage:r.currentPage});case C:return Object(f.a)(Object(f.a)({},t),{},{currentPage:t.currentPage+1});case v:return Object(f.a)(Object(f.a)({},t),{},{currentPage:t.currentPage-1});case I:return Object(f.a)(Object(f.a)({},t),{},{currentPage:1,category:r.category,keyword:"",tags:[]});case R:return t.tags.includes(r.tag)?Object(f.a)(Object(f.a)({},t),{},{currentPage:1,tags:t.tags.filter((function(t){return t!==r.tag}))}):Object(f.a)(Object(f.a)({},t),{},{currentPage:1,tags:[].concat(Object(j.a)(t.tags),[r.tag])});case m:return Object(f.a)(Object(f.a)({},t),{},{keyword:r.keyword});default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0,a=e.type,r=e.payload;switch(a){case E:return t.find((function(t){return t._id===r.item._id}))?t.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{qty:t._id===r.item._id?t.qty+1:t.qty})})):[].concat(Object(j.a)(t),[Object(f.a)(Object(f.a)({},r.item),{},{qty:1})]);case P:return t.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{qty:t._id===r.item._id?t.qty-1:t.qty})})).filter((function(t){return t.qty>0}));case _:return[];default:return t}}}),q=Object(d.d)(D,N(Object(d.a)(i.a)));c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(o.a,{children:Object(u.jsx)(O.a,{store:q,children:Object(u.jsx)(n,{})})})),s()}},[[43,1,2]]]);
//# sourceMappingURL=main.48e02c88.chunk.js.map
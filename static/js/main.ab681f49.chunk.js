(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports={form:"book-form_form__109pN",btn:"book-form_btn__24vMw"}},12:function(e,t,a){e.exports={list:"nav_list__3eaUr",link:"nav_link__29t6Q"}},13:function(e,t,a){e.exports={label:"text-input_label__aiVIM",input:"text-input_input__3wLgX",active:"text-input_active__3qKDn",invalid:"text-input_invalid__HTS7S"}},14:function(e,t,a){e.exports={wrapper:"img-input_wrapper__2Kx8w",input:"img-input_input__2-iqv",label:"img-input_label__2uLef",active:"img-input_active__3t-NA",img:"img-input_img__1a-rm"}},17:function(e,t,a){e.exports={input:"star_input__35vX-",star:"star_star__3oq9L",button:"star_button__xcTj0",active:"star_active__1iIas"}},22:function(e,t,a){e.exports={link:"book-preview_link__2hKZJ"}},23:function(e,t,a){e.exports={wrapper:"app_wrapper__35_xq",header:"app_header__2UDB5"}},31:function(e,t,a){e.exports={wrapper:"rating_wrapper__28Vyy"}},32:function(e,t,a){e.exports=a(47)},37:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),o=a.n(i),c=(a(37),a(7)),u=a(16),l=a(18),s=a(15),m=a.n(s),d=a(20),p=a(2),f=a(8),b=r.a.createContext({books:[{ISBN:"",author:"",cover:"localhost:3000/img/1.jpg",description:"",rating:3,title:"",year:"2000"},{ISBN:"",author:"",description:"",title:"",year:"2000"}],addBook:function(){},updateBook:function(){}}),v=a(12),g=a.n(v),h=function(){return r.a.createElement("ul",{className:g.a.list},r.a.createElement("li",{className:g.a.item},r.a.createElement(c.b,{to:"/",className:g.a.link},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430")),r.a.createElement("li",{className:g.a.item},r.a.createElement(c.b,{to:"/add-book",className:g.a.link},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443")))},_=a(3),E=a(17),k=a.n(E),j=a(9),O=a.n(j),N=function(e){var t=e.value,a=e.onClick,n=e.onMouseEnter,i=e.onMouseLeave,o=e.active,c=e.disabled;return r.a.createElement("button",{type:"button",value:t,onClick:function(){return a(t)},className:O()(k.a.button,Object(_.a)({},k.a.active,o)),disabled:c,onMouseEnter:function(){return n(t)},onMouseLeave:function(){return i()}},r.a.createElement("svg",{height:"25",width:"23",viewBox:"0 0 20 19",className:k.a.star},r.a.createElement("polygon",{points:"9.9, 0, 3.3, 20.7, 19.8, 7.5, 0, 7.5, 16.5, 20.7",style:{fillRule:"nonzero"}})))},w=a(31),y=a.n(w),x=function(e){var t=e.value,a=void 0===t?0:t,i=e.editing,o=e.onDataChange,c=Object(n.useState)(a),u=Object(p.a)(c,2),l=u[0],s=u[1];Object(n.useEffect)(function(){s(a)},[a]);var m=function(e){o&&o("rating",e)},d=function(e){i&&s(e)},f=function(){i&&s(a)};return r.a.createElement("div",{className:y.a.wrapper},[1,2,3,4,5].map(function(e){return r.a.createElement(N,{key:e,onClick:m,onMouseEnter:d,onMouseLeave:f,value:e,active:l>=e,disabled:!i})}))},S=a(22),C=a.n(S),B=function(e){var t=e.book,a=t.id,n=t.rating,i=t.title;return r.a.createElement(c.b,{to:"/".concat(a),className:C.a.link},r.a.createElement("h3",{className:C.a.title},i),n&&r.a.createElement(x,{value:n}))},I=function(e){return r.a.createElement("ul",{className:"list"},e.books.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(B,{book:e}))}))},D=function(){var e=Object(n.useContext)(b);return r.a.createElement("div",null,r.a.createElement(I,{books:e.books}))},A=a(13),M=a.n(A),L=function(e){var t,a=e.name,i=e.data,o=e.editing,c=e.onDataChange,u=e.valid,l=e.placeholder,s=Object(n.useState)(!0),m=Object(p.a)(s,2),d=m[0],f=m[1];return Object(n.useEffect)(function(){f(u)},[u]),r.a.createElement("label",{className:M.a.label},r.a.createElement("span",{className:M.a.name},a),r.a.createElement("input",{className:O()(M.a.input,(t={},Object(_.a)(t,M.a.invalid,!d),Object(_.a)(t,M.a.active,o),t)),type:"text",name:a,value:i,disabled:!o,onChange:function(e){c(a,e.target.value),d||f(!0)},placeholder:l,autoComplete:"off"}))},J=a(14),U=a.n(J),q=function(e){var t=e.name,a=e.editing,n=e.onDataChange,i=e.img;return r.a.createElement("div",{className:U.a.wrapper},r.a.createElement("label",{className:O()(U.a.label,Object(_.a)({},U.a.active,a))},r.a.createElement("input",{type:"file",name:"img",id:"img-input",className:U.a.input,onChange:function(e){var a=e.target,r=new FileReader;r.onload=function(){var e=r.result;n(t,e)},a.files&&r.readAsDataURL(a.files[0])},disabled:!a})),r.a.createElement("img",{src:i||"/bookshelf-ts/no-img.svg",alt:t,className:U.a.img}))},Z=a(11),K=a.n(Z),R=function(e){var t=e.editing,a=e.creating,n=e.setEditing,i=e.onAdd,o=e.onUpdate;if(a)return r.a.createElement("button",{type:"button",onClick:i,className:K.a.btn},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443");if(t)return r.a.createElement("button",{type:"button",onClick:o,className:K.a.btn},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f");return r.a.createElement("button",{type:"button",onClick:function(){return n(!0)},className:K.a.btn},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u0438\u0433\u0443")},T=function(e){return/[A-Z]/gi.test(e)},$=function(e){return/[A-Z]/gi.test(e)},V=function(e){return/^\d{4}$/.test(e)},W=function(e){return/[A-Z]/gi.test(e)},X=function(e){return/^\d{4}$/.test(e)},z={title:"",description:"",author:"",ISBN:"",year:"",cover:void 0,id:0,rating:void 0},F=function(e){var t=e.data,a=void 0===t?z:t,i=e.creating,o=void 0!==i&&i,c=e.history,l=Object(n.useState)(o),s=Object(p.a)(l,2),m=s[0],d=s[1],f=Object(n.useState)(a),v=Object(p.a)(f,2),g=v[0],h=v[1],E=Object(n.useState)({title:!0,description:!0,ISBN:!0,author:!0,year:!0}),k=Object(p.a)(E,2),j=k[0],O=k[1],N=Object(n.useContext)(b);Object(n.useEffect)(function(){h(a)},[a]);var w=function(e,t){var a=Object(u.a)({},g,Object(_.a)({},e,t));h(a)},y=function(){return{author:T(g.author),description:$(g.description),ISBN:V(g.ISBN),title:W(g.title),year:!g.year||X(g.year)}};return r.a.createElement("form",{className:K.a.form},r.a.createElement(q,{img:g.cover,name:"cover",editing:m,onDataChange:w}),r.a.createElement(L,{name:"title",data:g.title,editing:m,onDataChange:w,valid:j.title,placeholder:"Title"}),r.a.createElement(L,{name:"description",data:g.description,editing:m,onDataChange:w,valid:j.description,placeholder:"Description"}),r.a.createElement(L,{name:"author",data:g.author,editing:m,onDataChange:w,valid:j.author,placeholder:"Author"}),r.a.createElement(L,{name:"ISBN",data:g.ISBN,editing:m,onDataChange:w,valid:j.ISBN,placeholder:"1234"}),r.a.createElement(L,{name:"year",data:g.year,editing:m,onDataChange:w,valid:j.year,placeholder:"2000"}),r.a.createElement(x,{value:g.rating,editing:m,onDataChange:w}),r.a.createElement(R,{creating:o,editing:m,setEditing:d,onAdd:function(){var e=y();Object.values(e).some(function(e){return!1===e})?O(e):(N.addBook(g),c.push("/"))},onUpdate:function(){var e=y();Object.values(e).some(function(e){return!1===e})?O(e):(g.id&&N.updateBook(g,g.id),c.push("/"))}}))},H=function(e){return r.a.createElement(F,{creating:!0,history:e.history})},P=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),i=a[0],o=a[1],c=Object(n.useContext)(b),u=e.match.params.id;return Object(n.useEffect)(function(){var e=c.books.find(function(e){return Number(e.id)===Number(u)});e&&o(e)},[c.books,u]),i&&r.a.createElement(F,{data:i,history:e.history})},Q=a(23),G=a.n(Q),Y=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(0),c=Object(p.a)(o,2),s=c[0],v=c[1],g=function(){var e=Object(d.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch("/bookshelf-ts/books.json").then(function(e){return e.json()});case 3:return t=e.sent,a=t.newBooks,e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=localStorage.getItem("books");return e?JSON.parse(e):null};return Object(n.useEffect)(function(){!function(){var e=Object(d.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=_()){e.next=5;break}return e.next=4,g();case 4:t=e.sent;case 5:i(t),a=t[t.length-1].id+1,v(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),r.a.createElement(b.Provider,{value:{books:a,updateBook:function(e,t){var n=a.findIndex(function(e){return e.id===t}),r=[].concat(Object(l.a)(a.slice(0,n)),[e],Object(l.a)(a.slice(n+1)));i(r),localStorage.setItem("books",JSON.stringify(r))},addBook:function(e){var t=Object(l.a)(a),n=Object(u.a)({},e,{id:s});t.push(n),v(s+1),i(t),localStorage.setItem("books",JSON.stringify(t))}}},r.a.createElement("div",{className:G.a.wrapper},r.a.createElement("header",{className:G.a.header},r.a.createElement(h,null)),r.a.createElement("main",null,r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:D}),r.a.createElement(f.a,{path:"/add-book",component:H}),r.a.createElement(f.a,{path:"/:id",component:P})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(c.a,{basename:"/bookshelf-ts"},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.ab681f49.chunk.js.map
(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(0),a=n.n(o),i=n(13),d=n.n(i),s=(n(32),n(33),n(25)),r=n(3),l=n(16),u=n(11),j=n(17),m=n(8),b={do:[{id:0,name:"Buy food"}],completed:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"do":return Object(m.a)(Object(m.a)({},e),{},{do:[].concat(Object(j.a)(e.do),[t.value]),completed:e.completed.filter((function(e){return e.id!==t.value.id}))});case"completed":return Object(m.a)(Object(m.a)({},e),{},{completed:[].concat(Object(j.a)(e.completed),[t.value]),do:e.do.filter((function(e){return e.id!==t.value.id}))});case"adddo":return Object(m.a)(Object(m.a)({},e),{},{do:[].concat(Object(j.a)(e.do),[t.value])});default:return e}},f=Object(u.b)({main:O}),p=Object(u.c)(f),h=p;window.store=p;var x=n(26),v=function(e){return Object(c.jsxs)("li",{className:"main__item",children:[Object(c.jsx)("label",{htmlFor:"checkbox-".concat(e.id),className:"main__name ".concat(e.setDo&&"completed"),children:e.nameIn}),Object(c.jsx)("input",{onChange:function(t){return t.target.checked?e.setCompleted({id:e.id,name:e.nameIn}):e.setDo({id:e.id,name:e.nameIn})},id:"checkbox-".concat(e.id),className:"main__checkbox",type:"checkbox",checked:!!e.setDo})]})},_=function(e){var t=e.do.length+e.completed.length,n=Object(o.useRef)(null),a=e.do.map((function(t){return Object(c.jsx)(v,{id:t.id,nameIn:t.name,setCompleted:e.setCompleted},t.id)})),i=e.completed.map((function(t){return Object(c.jsx)(v,{id:t.id,nameIn:t.name,setDo:e.setDo},t.id)})),d=Object(o.useState)(!1),s=Object(x.a)(d,2),r=s[0],l=s[1],u=function(){l(!1)},j=function(n){""!=n.current.value.trim()&&(e.addDo({id:t,name:n.current.value}),n.current.value="")};return Object(c.jsx)("div",{className:"main",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"main__body",children:[Object(c.jsx)("div",{className:"main__title",children:"All Tasks"}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:"main__tasks",children:Object(c.jsxs)("ul",{className:"main__list",children:[a,i]})}),Object(c.jsx)("div",{className:"main__input",children:Object(c.jsxs)("div",{className:"d-flex ".concat(r&&"long"),children:[Object(c.jsx)("input",{type:"text",ref:n,onBlur:function(){return setTimeout(u,300)},onKeyDown:function(e){return function(e,t){"Enter"===e.code&&j(t)}(e,n)}}),Object(c.jsx)("button",{onClick:function(){return r?j(n):(l(!0),void setTimeout((function(){n.current.focus()}),300))},children:Object(c.jsx)("i",{className:"fas fa-plus"})})]})})]})})})},g=(n(38),{setDo:function(e){return{type:"do",value:e}},setCompleted:function(e){return{type:"completed",value:e}},addDo:function(e){return{type:"adddo",value:e}}}),N=Object(l.b)((function(e){return{do:e.main.do,completed:e.main.completed}}),g)((function(e){return Object(c.jsx)(_,Object(m.a)({},e))})),k=function(){return Object(c.jsx)(s.a,{children:Object(c.jsx)(l.a,{store:h,children:Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(r.c,{children:Object(c.jsx)(r.a,{path:"/",component:N})})})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),a(e),i(e)}))};d.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.536cc641.chunk.js.map
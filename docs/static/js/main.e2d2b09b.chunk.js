(this["webpackJsonpbuscacalles-cartociudad"]=this["webpackJsonpbuscacalles-cartociudad"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(7),r=c.n(i),l=(c(15),c(16),function(){return Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)("a",{className:"active",href:"http://www.sigdeletras.com",children:"SIGdeletras"}),Object(s.jsxs)("div",{className:"nav__infolinks",children:[Object(s.jsx)("a",{href:"#search_tools_section",children:"Buscador"}),Object(s.jsx)("a",{href:"#about",children:"Info"}),Object(s.jsx)("a",{href:"https://github.com/sigdeletras/buscacalles-cartociudad",children:"GitHub"})]})]})})}),o=c(3),d=c(4),j=c(2),u=(c(17),c(6)),b=c.n(u),h=c(8),O=c(9),f=c.n(O),x="http://www.cartociudad.es/geocoder/api/geocoder";function p(){return(p=Object(h.a)(b.a.mark((function e(t){var c,s=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.length>1&&void 0!==s[1]?s[1]:"",e.next=3,f()("".concat(x,"/candidatesJsonp?q=").concat(t,"&no_process=").concat(c)).then((function(e){return e.json()})).then((function(e){if(Array.isArray(e))return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(19),c(20);var m=function(e){var t=e.data,c=t.postalCode?"CP "+t.postalCode:"";return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("p",{className:"card__title",children:t.address}),Object(s.jsxs)("div",{className:"card__info",children:[Object(s.jsxs)("p",{className:"card__info--city",children:["Tipo ",t.type]}),Object(s.jsx)("p",{className:"card__info--city",children:c?c+" "+t.province:t.province}),Object(s.jsx)("p",{className:"card__info--message",children:t.stateMsg})]})]})},v=(c(21),function(e){var t=e.data;return Object(s.jsx)("section",{className:"candidates",children:t.length>0?t.map((function(e){return Object(s.jsx)(m,{data:e},e.id)})):Object(s.jsx)("p",{})})}),_=(c(22),function(){return Object(s.jsxs)("div",{className:"infoblocks",children:[Object(s.jsxs)("div",{className:"infoblocks__block",children:[Object(s.jsx)("p",{children:Object(s.jsx)("i",{class:"infoblocks__block--icon zmdi zmdi-search zmdi-hc-3x"})}),Object(s.jsx)("h2",{children:"B\xfasqueda"}),Object(s.jsx)("p",{children:"Introduce un texto de b\xfasqueda para ver las calles, top\xf3nimos y localidades"})]}),Object(s.jsxs)("div",{className:"infoblocks__block",children:[Object(s.jsx)("p",{children:Object(s.jsx)("i",{class:"infoblocks__block--icon zmdi zmdi-filter-list zmdi-hc-3x"})}),Object(s.jsx)("h2",{children:"Filtro"}),Object(s.jsx)("p",{children:"Puedes ver todas las coincidencias o filtrar solo los datos del callejero"})]}),Object(s.jsxs)("div",{className:"infoblocks__block",children:[Object(s.jsx)("p",{children:Object(s.jsx)("i",{class:"infoblocks__block--icon zmdi zmdi-filter-center-focus zmdi-hc-3x"})}),Object(s.jsx)("h2",{children:"Consulta"}),Object(s.jsx)("p",{children:"Consulta los resultados por municipios de Espa\xf1a"})]})]})}),g=function(e){var t=e.data,c=Object(a.useState)([]),n=Object(j.a)(c,2),i=n[0],r=n[1],l=Object(a.useState)([]),o=Object(j.a)(l,2),d=o[0],u=o[1],b=Object(a.useState)(!0),h=Object(j.a)(b,2),O=h[0],f=h[1];Object(a.useEffect)((function(){r(t)}),[t]);var x={};i.forEach((function(e){x[e.province]=(x[e.province]||0)+1}));var p=function(e){var t=e.target.value;if("all"===t)f(!0);else{var c=i.filter((function(e){return e.province===t}));u(c),f(!1)}document.querySelectorAll('[class="tag tag--select"]').forEach((function(e){e.className="tag"})),document.querySelector('[value="'.concat(t,'"]')).className="tag tag--select"};return Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)("section",{className:"information",children:Array.isArray(i)&&i.length?Object(s.jsxs)("div",{children:[Object(s.jsxs)("button",{className:"tag tag--select",value:"all",onClick:p,children:["TODOS ",i.length]}),Object.entries(x).sort().map((function(e){var t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(s.jsxs)("button",{className:"tag",value:c,onClick:p,children:[c," ",a]})}))]}):Object(s.jsx)(_,{})}),Object(s.jsx)(v,{data:O?i:d})]})},N=function(){var e=Object(a.useState)({address_text:"",filter_option:""}),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!0),r=Object(j.a)(i,2),l=r[0],u=r[1],b=Object(a.useState)([]),h=Object(j.a)(b,2),O=h[0],f=h[1],x=Object(a.useRef)(),m=Object(a.useRef)(),v=Object(a.useRef)();Object(a.useEffect)((function(){(function(e){return p.apply(this,arguments)})(c.address_text,c.filter_option).then((function(e){return f(e)}))}),[c.address_text,c.filter_option]);var _=function(e){n(Object(d.a)(Object(d.a)({},c),{},Object(o.a)({},e.target.name,e.target.value))),u(!0)};return Object(s.jsxs)(a.Fragment,{children:[Object(s.jsxs)("section",{id:"search_tools_section",className:"search_tools",children:[Object(s.jsxs)("div",{className:"margin",children:[Object(s.jsx)("h1",{className:"candidates__title",children:"BuscaCalles"}),Object(s.jsx)("h2",{className:"candidates__subtitle",children:"Localiza las direcciones postales de Espa\xf1a"}),Object(s.jsx)("h2",{className:"candidates__subtitle",children:"usando los datos de CartoCiudad"})]}),Object(s.jsx)("div",{className:"margin",children:Object(s.jsx)("input",{ref:x,type:"text",name:"address_text",placeholder:"Escribe el texto de b\xfasqueda...",onChange:function(e){e.target.value.length>2&&n(Object(d.a)(Object(d.a)({},c),{},Object(o.a)({},e.target.name,e.target.value)))}})}),Object(s.jsxs)("div",{className:"margin search_tools_section--filter_option",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"radio",ref:v,id:"all",name:"filter_option",value:"",onClick:_,defaultChecked:l}),Object(s.jsx)("label",{for:"all",children:" Completo"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"radio",ref:m,id:"callejero",name:"filter_option",value:"municipio,poblacion,toponimo",onClick:_,defaultChecked:!l}),Object(s.jsx)("label",{for:"all",children:" Solo callejero"})]})]}),Object(s.jsx)("div",{className:"margin",children:Object(s.jsx)("button",{className:"btn",onClick:function(){n({address_text:"",filter_option:""}),x.current.value="",v.current.checked=!0,m.current.checked=!1},children:"Limpiar"})})]}),Object(s.jsx)(g,{data:O})]})};c(23);var k=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),Object(s.jsx)(N,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),C()}],[[24,1,2]]]);
//# sourceMappingURL=main.e2d2b09b.chunk.js.map
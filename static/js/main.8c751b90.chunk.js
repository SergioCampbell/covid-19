(this["webpackJsonpfront-end-test"]=this["webpackJsonpfront-end-test"]||[]).push([[0],{21:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(16),o=c.n(a),l=(c(21),c(6)),r=c(5),i=c.n(r),j=(c(40),c(0));function d(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),o=Object(l.a)(a,2),r=o[0],d=o[1],b=Object(n.useState)([]),h=Object(l.a)(b,2),u=h[0],O=h[1],p="https://covid-api.mmediagroup.fr/v1/cases?country=".concat(c);Object(n.useEffect)((function(){i.a.get("https://covid-api.mmediagroup.fr/v1/cases?country=Global").then((function(e){O(e.data.All)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){i.a.get(p).then((function(e){console.log(e.data),d(e.data)})).catch((function(e){console.log(e)}))}),[]);return Object(j.jsxs)("div",{className:"App container mt-3 mb-5 bg-dark",children:[Object(j.jsx)("h1",{className:"display-2",children:"World Covid-19 data"}),Object(j.jsx)("h2",{children:"Global data"}),Object(j.jsxs)("table",{className:"table table-dark table-bordered table-responsive-sm",children:[Object(j.jsx)("thead",{className:"table-active",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Confirmed"}),Object(j.jsx)("th",{scope:"col",children:"Deaths"}),Object(j.jsx)("th",{scope:"col",children:"Population"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:u.confirmed}),Object(j.jsx)("td",{children:u.deaths}),Object(j.jsx)("td",{children:u.population})]})})]}),Object(j.jsxs)("form",{className:"form-group mt-5",onSubmit:function(e){e.preventDefault(),"https://covid-api.mmediagroup.fr/v1/cases?country=".concat(c),i.a.get(p).then((function(e){console.log(e.data),d(e.data.All)})).catch((function(e){console.log(e)})),console.log(r.All)},children:[Object(j.jsx)("p",{children:"Search your country here"}),Object(j.jsx)("input",{type:"text",name:"country",value:c,onChange:function(e){s(e.target.value)},placeholder:"Type a country here",required:!0}),Object(j.jsx)("input",{type:"submit",value:"Search"}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),c?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h2",{className:"display-6",children:[c," data"]}),Object(j.jsxs)("table",{loading:"lazy",className:"table table-dark table-bordered table-responsive",children:[Object(j.jsx)("thead",{className:"table-active",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Continent"}),Object(j.jsx)("th",{scope:"col",children:"Country area"}),Object(j.jsx)("th",{scope:"col",children:"Population"}),Object(j.jsx)("th",{scope:"col",children:"Life expectancy"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:r.continent}),Object(j.jsxs)("td",{children:[r.sq_km_area," km"]}),Object(j.jsx)("td",{children:r.population}),Object(j.jsxs)("td",{children:[r.life_expectancy," ~ "]})]})})]})]}):Object(j.jsx)("p",{children:"Type your country"}),Object(j.jsx)("br",{})]})}var b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.8c751b90.chunk.js.map
(this["webpackJsonphellow-world"]=this["webpackJsonphellow-world"]||[]).push([[0],{12:function(e,a,t){e.exports=t(22)},22:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=t(3),s=t(7),m=r.a.memo((function(e){var a=e.recipe;return r.a.createElement("div",{className:"col-sm-4 col-md-4 my-5"},r.a.createElement("div",{className:"card h-100"},r.a.createElement(s.a,null,r.a.createElement(s.b,{to:a.image},r.a.createElement("img",{className:"card-img-top responsive",src:a.image,alt:"recipe"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},a.label),r.a.createElement("h6",null,"Calories:",a.calories),r.a.createElement("ul",{className:"card-text"},a.ingredientLines.map((function(e,a){return r.a.createElement("li",{key:a},e)}))))))})),i=r.a.memo((function(e){var a=e.recipes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Recipes found are"),r.a.createElement("div",{className:"row"},a.map((function(e,a){return r.a.createElement(m,{key:a,recipe:e.recipe})}))))})),u=r.a.memo((function(e){var a=e.searchInNav,t=e.query,n=e.setQuery,c=e.search;return r.a.createElement(r.a.Fragment,null,!a&&r.a.createElement("div",{className:"row justify-content-center my-md-5 my-sm-2"},r.a.createElement("input",{className:"form-control form-control-lg form-control-borderless w-50",type:"search",placeholder:"Search recipe or item",onChange:function(e){return n(e.target.value)},value:t,onKeyPress:function(e){return"Enter"===e.key||"NumpadEnter"===e.key?c():onchange}}),r.a.createElement("button",{className:"btn btn-lg btn-success",onClick:c},"Search")),r.a.createElement("div",{className:"text-center mx-auto w-responsive w-75"},r.a.createElement("h1",{className:"h1-responsive"},'"One cannot think well, love well, sleep well, if not has not dined well."'),r.a.createElement("h5",{className:"h5-responsive"},"Virginia Woolf")))})),h=r.a.memo((function(e){var a=e.query,t=e.setQuery,n=e.searchInNav,c=e.search;return r.a.createElement("nav",{className:"navbar navbar-light bg-light sticky-top"},n&&r.a.createElement("div",{className:"form-inline mx-2 w-50"},r.a.createElement("input",{className:"form-control form-control-lg w-75 w-responsive",type:"search",placeholder:"Search recipe or item",onChange:function(e){return t(e.target.value)},value:a,onKeyPress:function(e){return"Enter"===e.key||"NumpadEnter"===e.key?c():onchange}}),r.a.createElement("button",{className:"btn btn-lg btn-outline-success",onClick:c},"Search")),r.a.createElement("h3",{className:"navbar-brand"},"Navbar"))})),d=r.a.memo((function(){return r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"25vh"}},r.a.createElement("div",{className:"spinner-border text-warning fast",role:"status"}))})),p=r.a.memo((function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)([]),m=Object(o.a)(s,2),p=m[0],v=m[1],E=Object(n.useState)(!1),f=Object(o.a)(E,2),b=f[0],g=f[1],N=Object(n.useState)(!0),y=Object(o.a)(N,2),w=y[0],k=y[1];Object(n.useEffect)((function(){g(0!==p.length),k(!1)}),[p]);var j=function(){c&&""!==c.trim()?(k(!0),l(c.trim()),fetch("https://api.edamam.com/search?q=".concat(c,"&app_id=").concat("11250472","&app_key=").concat("6e67cb7a74a3afa5cd25a9ee7840f90e")).then((function(e){return e.json()})).then((function(e){v(e.hits),0===e.hits.length&&alert("No recipe found")})).catch((function(e){return alert("Limit exceeded")}))):alert("No input")};return r.a.createElement("div",{className:"App"},r.a.createElement(h,{query:c,setQuery:l,searchInNav:b,search:j}),r.a.createElement("div",{className:"container"},w?r.a.createElement(d,null):0===p.length?r.a.createElement(u,{setSearchInNav:b,query:c,setQuery:l,search:j}):r.a.createElement(i,{recipes:p})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.39ec7e3a.chunk.js.map
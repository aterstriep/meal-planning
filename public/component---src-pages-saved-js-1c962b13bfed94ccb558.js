"use strict";(self.webpackChunkmeal_planning=self.webpackChunkmeal_planning||[]).push([[264],{5764:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(7294),i=t(5444),c=t(4816),r=function(e){var a=e.children,t=e.className;return n.createElement("span",{className:"badge "+t},a)};function l(e){var a=e.recipe,t=e.day,l=e.draggable,d=void 0!==l&&l,s=e.onDragStart,p=void 0===s?"":s,m=e.children,u=e.actions,o=void 0===u?["add","save"]:u,v=e.addRecipe,E=e.saveRecipe,f=function(e){var i=e.children;return d?n.createElement("div",{draggable:d,onDragStart:function(e){return p(e,a,t)},className:"recipe-container",recipe_id:a.id,id:a.id},i):n.createElement("div",{className:"recipe-container",recipe_id:a.id,id:a.id},i)};return n.createElement(f,null,n.createElement(c.Z,{recipe:a,actions:o,saveRecipe:E,addRecipe:function(){return v(a)}}),n.createElement(i.rU,{to:"/recipe?"+a.id,state:{activeRecipe:a.id}},n.createElement("div",{className:"image-wrapper"},n.createElement("img",{src:a.image,alt:a.title}))),n.createElement("div",{className:"recipe-details",padding:"0"},n.createElement("div",{className:"dish-types"},a.dishTypes.map((function(e,a){return n.createElement(r,{key:a},e)}))),n.createElement(i.rU,{to:"/recipe?"+a.id,state:{activeRecipe:a.id}},n.createElement("h3",null,a.title)),m))}},6822:function(e,a,t){var n=t(7294),i=t(5764),c=t(2010);t(7606);a.Z=function(e){var a=e.recipes,t=e.actions,r=void 0===t?["add","save"]:t,l=e.saveRecipe,d=e.addRecipe,s=(0,n.useState)([]),p=s[0],m=s[1],u=function(e){m(e),document.getElementById("meal-plan-modal").style.display="flex"};return a.length?n.createElement(n.Fragment,null,n.createElement(c.Z,{recipe:p,addRecipe:d}),n.createElement("div",{className:"recipe-grid"},a.map((function(e){return n.createElement(i.Z,{key:e.id,recipe:e,actions:r,saveRecipe:l,addRecipe:u})})))):n.createElement("p",null,"You have not saved any recipes.")}},8283:function(e,a,t){t.r(a);var n=t(7294),i=t(9),c=t(5414),r=t(9410),l=t(6810),d=t(6822),s=t(5972),p=t(6117),m=i.default.h1.withConfig({displayName:"saved__PageTitle",componentId:"sc-pbdll1-0"})(["margin-top:0;"]);a.default=function(){var e=(0,s.Z)([]),a=e[0],t=e[1],i=(0,p.Z)([]),u=(i[0],i[1]);return n.createElement(r.Z,null,n.createElement(c.q,null,n.createElement("body",{className:"saved-recipes"}),n.createElement("title",null,"Saved Recipes"),n.createElement("meta",{name:"icon",href:"../images/favicon.png"})),n.createElement(l.Z,{padding:"20px 40px 40px"},n.createElement(m,null,"Saved Recipes"),n.createElement(d.Z,{recipes:a,actions:["save"],saveRecipe:t,addRecipe:function(e){u(e)}})))}}}]);
//# sourceMappingURL=component---src-pages-saved-js-1c962b13bfed94ccb558.js.map
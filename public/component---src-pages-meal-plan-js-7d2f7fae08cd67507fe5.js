"use strict";(self.webpackChunkmeal_planning=self.webpackChunkmeal_planning||[]).push([[694],{5764:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(7294),r=t(5444),i=t(4816),c=function(e){var a=e.children,t=e.className;return n.createElement("span",{className:"badge "+t},a)};function l(e){var a=e.recipe,t=e.day,l=e.draggable,d=void 0!==l&&l,u=e.onDragStart,m=void 0===u?"":u,s=e.children,o=e.actions,p=void 0===o?["add","save"]:o,f=e.addRecipe,g=e.saveRecipe,v=function(e){var r=e.children;return d?n.createElement("div",{draggable:d,onDragStart:function(e){return m(e,a,t)},className:"recipe-container",recipe_id:a.id,id:a.id},r):n.createElement("div",{className:"recipe-container",recipe_id:a.id,id:a.id},r)};return n.createElement(v,null,n.createElement(i.Z,{recipe:a,actions:p,saveRecipe:g,addRecipe:function(){return f(a)}}),n.createElement(r.rU,{to:"/recipe?"+a.id,state:{activeRecipe:a.id}},n.createElement("div",{className:"image-wrapper"},n.createElement("img",{src:a.image,alt:a.title}))),n.createElement("div",{className:"recipe-details",padding:"0"},n.createElement("div",{className:"dish-types"},a.dishTypes.map((function(e,a){return n.createElement(c,{key:a},e)}))),n.createElement(r.rU,{to:"/recipe?"+a.id,state:{activeRecipe:a.id}},n.createElement("h3",null,a.title)),s))}},2698:function(e,a,t){t.r(a);var n=t(7294),r=t(9),i=t(5414),c=t(9410),l=t(6810),d=t(5764),u=t(6117),m=r.default.h1.withConfig({displayName:"meal-plan__PageTitle",componentId:"sc-i2wdgo-0"})(["margin-top:0;"]);a.default=function(){var e=(0,u.Z)([]),a=e[0],t=e[1],r=function(e){e.preventDefault()},s=function(e,a,t){e.dataTransfer.setData("recipe",JSON.stringify(a)),e.dataTransfer.setData("day",t)},o=function(e){e.preventDefault();var a=JSON.parse(e.dataTransfer.getData("recipe")),n=e.dataTransfer.getData("day"),r=e.currentTarget.getAttribute("day");e.currentTarget.append(document.getElementById(a.id)),t(a,{previous:n,new:r},"update")},p=function(){return["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((function(e){return a[e]?n.createElement("div",{key:e,day:e,className:"day-container",onDrop:function(e){return o(e)},onDragOver:function(e){return r(e)}},n.createElement("h2",null,e),a[e].map((function(a){return n.createElement(d.Z,{draggable:!0,day:e,onDragStart:s,actions:!1,recipe:a,key:a.id},n.createElement("span",{role:"button",id:"delete-recipe",onClick:function(n){return t(a,e,"delete")}},"Delete"))}))):n.createElement("div",{key:e,day:e,className:"day-container",onDrop:function(e){return o(e)},onDragOver:function(e){return r(e)}},n.createElement("h2",null,e))}))};return n.createElement(c.Z,null,n.createElement(i.q,null,n.createElement("body",{className:"meal-plan"}),n.createElement("title",null,"Meal Plan"),n.createElement("meta",{name:"icon",href:"../images/favicon.png"})),n.createElement(l.Z,{padding:"20px 40px 40px"},n.createElement(m,null,"Meal Plan"),n.createElement("div",{className:"meal-plan-container"},n.createElement(p,null))))}}}]);
//# sourceMappingURL=component---src-pages-meal-plan-js-7d2f7fae08cd67507fe5.js.map
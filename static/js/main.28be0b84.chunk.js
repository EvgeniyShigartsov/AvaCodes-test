(this["webpackJsonpava.codes-test"]=this["webpackJsonpava.codes-test"]||[]).push([[0],{148:function(e,t,r){},149:function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"setFullCharactersData",(function(){return B})),r.d(a,"setFilterData",(function(){return G})),r.d(a,"filterCharacters",(function(){return H}));var n={};r.r(n),r.d(n,"setFavoritesList",(function(){return k})),r.d(n,"addNewCharacter",(function(){return U})),r.d(n,"deleteCharacter",(function(){return V})),r.d(n,"setLastDraggedItem",(function(){return J}));var c,s=r(0),i=r.n(s),u=r(19),l=r.n(u),o=r(53),h=r(154),d=r(156),j=r(157),p=r(5),f=function(){return Object(p.jsx)(j.a,{span:6,children:"Star Wars characters list"})},b=r(153),O=o.c,v=r(54),x=r(18),m=r(40),E=r(63),A=r(43),S=r(26),R=r.n(S),T=r(47),C=r(64),_=r.n(C);!function(e){e.GET_CHARACTERS_START="GET_CHARACTERS_START",e.GET_CHARACTERS_SUCCESS="GET_CHARACTERS_SUCCESS",e.GET_CHARACTERS_ERROR="GET_CHARACTERS_ERROR",e.SET_FILTERED_CHARACTERS="SET_FILTERED_CHARACTERS",e.SET_FILTER_OPTIONS="SET_FILTER_OPTIONS",e.UPDATE_FILTER_PARAMS="UPDATE_FILTER_PARAMS"}(c||(c={}));var g,y="favorites",D="characters",I=function(){var e=localStorage.getItem(D);return e?JSON.parse(e):[]},L=function(){var e=localStorage.getItem(y);return e?JSON.parse(e):[]},N=function(){var e=Object(T.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.a.get(t).then((function(e){return e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(T.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","Human");case 2:return e.abrupt("return",_.a.get(t).then((function(e){return e.data.name})).catch((function(){return""})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(T.a)(R.a.mark((function e(t){var r,a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=0;case 2:if(!(a<t.length)){e.next=9;break}return n=t[a],e.next=6,_.a.get(n).then((function(e){return r.push({title:e.data.title,episode_id:e.data.episode_id})})).catch((function(){return[]}));case 6:a++,e.next=2;break;case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(T.a)(R.a.mark((function e(t){var r,a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],0!==t.length){e.next=3;break}return e.abrupt("return",r);case 3:a=0;case 4:if(!(a<t.length)){e.next=11;break}return n=t[a],e.next=8,_.a.get(n).then((function(e){return r.push({name:e.data.name,url:e.data.url})})).catch((function(){return[]}));case 8:a++,e.next=4;break;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(T.a)(R.a.mark((function e(t){var r,a,n,c,s,i,u,l,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=0;case 2:if(!(a<t.length)){e.next=25;break}return n=t[a],c=Object(A.a)(n.species,1),s=c[0],i={},e.next=8,F(s);case 8:return u=e.sent,e.next=11,w(n.films);case 11:return l=e.sent,e.next=14,M(n.starships);case 14:o=e.sent,i.name=n.name,i.url=n.url,i.birthYear="unknown"!==n.birth_year?n.birth_year:"".concat(Math.floor(51*Math.random()),"ABY"),i.species=u,i.films=l,i.starships=o,r.push(i);case 22:a++,e.next=2;break;case 25:return e.abrupt("return",r);case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){return function(){var e=Object(T.a)(R.a.mark((function e(t){var r,a,n,s,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=I()).length){e.next=4;break}return t({type:c.GET_CHARACTERS_SUCCESS,payload:r}),e.abrupt("return");case 4:t({type:c.GET_CHARACTERS_START}),a=[],n="".concat("https://swapi.dev/api","/people");case 7:if(null===n){e.next=26;break}return e.prev=8,e.next=11,N(n);case 11:return s=e.sent,n=s.next,e.next=15,Y(s.results);case 15:i=e.sent,a.push.apply(a,Object(E.a)(i)),e.next=24;break;case 19:return e.prev=19,e.t0=e.catch(8),n=null,t({type:c.GET_CHARACTERS_ERROR,payload:"Loading data has been failed. Probably SWAPI server has been shut down."}),e.abrupt("return");case 24:e.next=7;break;case 26:t({type:c.GET_CHARACTERS_SUCCESS,payload:a}),localStorage.setItem(D,JSON.stringify(a));case 28:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(t){return e.apply(this,arguments)}}()},G=function(e){return function(t){var r=e.reduce((function(e,t){var r,a;return(r=e.movies).push.apply(r,Object(E.a)(t.films.map((function(e){return e.title})))),e.species.push(t.species),null===(a=e.birth_year)||void 0===a||a.push(t.birthYear),e}),{movies:[],species:[],birth_year:[]}),a=Array.from(new Set(r.movies)),n=Array.from(new Set(r.species)),s=function(e){if(!e.length)return{BBYmin:0,ABYmax:0};var t=[],r=[];e.forEach((function(e){var a=e.toUpperCase().endsWith("BBY"),n=e.toUpperCase().endsWith("ABY"),c=parseFloat(e);a?t.push(c):n&&r.push(c)}));var a=Math.max.apply(Math,t);return{BBYmin:a-2*a,ABYmax:Math.max.apply(Math,r)}}(r.birth_year);t({type:c.SET_FILTER_OPTIONS,payload:{allMovies:a,allSpecies:n,birthYearsRangeStatic:s}}),t({type:c.UPDATE_FILTER_PARAMS,payload:{movie:null,species:null,birthYearsRange:{min:s.BBYmin,max:s.ABYmax}}})}},H=function(e){return function(t,r){var a=r().characters,n=a.characters,s=a.filterParams,i=Object(A.a)(e,2),u=i[0],l=i[1],o=Object(x.a)(Object(x.a)({},s),{},Object(m.a)({},u,l)),h=o.movie,d=o.species,j=o.birthYearsRange,p=j.min,f=j.max,b=p<0,O=Math.abs(p),v=n.filter((function(e){return null===h||e.films.some((function(e){return e.title===h}))})).filter((function(e){return null===d||e.species===d})).filter((function(e){var t=e.birthYear.toUpperCase().endsWith("BBY"),r=e.birthYear.toUpperCase().endsWith("ABY"),a=parseFloat(e.birthYear);return b?t?f<=0?a<=O&&a>=Math.abs(f):a<=O:!(r&&f<0)&&a<=f:!t&&(r?!(f<0)&&(a>=p&&a<=f):a>=O&&a<=f)}));t({type:c.SET_FILTERED_CHARACTERS,payload:v}),t({type:c.UPDATE_FILTER_PARAMS,payload:o})}};!function(e){e.UPDATE_FAVORITE_CHARACTERS="UPDATE_FAVORITE_CHARACTERS",e.SET_LAST_DRAGGED_ITEM="SET_LAST_DRAGGED_ITEM",e.CLEAR_LAST_DRAGGED_ITEM="CLEAR_LAST_DRAGGED_ITEM"}(g||(g={}));var P,k=function(){return function(e){var t=L();e({type:g.UPDATE_FAVORITE_CHARACTERS,payload:t})}},U=function(e){return function(t){var r=L();if(!r.some((function(t){return t.url===e.url}))){var a=[].concat(Object(E.a)(r),[e]);localStorage.setItem(y,JSON.stringify(a)),t({type:g.UPDATE_FAVORITE_CHARACTERS,payload:a})}}},V=function(e){return function(t){var r=L().filter((function(t){return t.url!==e}));localStorage.setItem(y,JSON.stringify(r)),t({type:g.UPDATE_FAVORITE_CHARACTERS,payload:r})}},J=function(e){return function(t){t({type:g.SET_LAST_DRAGGED_ITEM,payload:e})}},W=Object(x.a)(Object(x.a)({},a),n),z=function(){var e=Object(o.b)();return Object(v.b)(W,e)},q={characters:[],filteredCharacters:[],allMovies:[],allSpecies:[],birthYearsRangeStatic:{BBYmin:0,ABYmax:0},isLoading:!1,error:null,filterParams:{movie:null,species:null,birthYearsRange:{min:0,max:0}}},K="characters",Q=function(e){return e.characters.characters},X=function(e){return e.characters.filteredCharacters},Z=function(e){return e.characters.isLoading},$=function(e){return e.characters.error},ee=function(e){return e.characters.allMovies},te=function(e){return e.characters.allSpecies},re=b.a.Option,ae=function(){var e=O(ee),t=z().filterCharacters;return Object(p.jsx)(j.a,{span:6,children:Object(p.jsxs)(b.a,{defaultValue:"allMovies",className:"select-dropdown",size:"large",onChange:function(e){t(["movie","allMovies"===e?null:e])},children:[Object(p.jsx)(re,{value:"allMovies",children:"All Movies"}),e.map((function(e){return Object(p.jsx)(re,{value:e,children:e},e)}))]})})},ne=b.a.Option,ce=function(){var e=O(te),t=z().filterCharacters;return Object(p.jsx)(j.a,{span:6,children:Object(p.jsxs)(b.a,{defaultValue:"allSpecies",className:"select-dropdown",size:"large",onChange:function(e){t(["species","allSpecies"===e?null:e])},children:[Object(p.jsx)(ne,{value:"allSpecies",children:"All Species"}),e.map((function(e){return Object(p.jsx)(ne,{value:e,children:e},e)}))]})})},se=r(152),ie=function(){var e=z().filterCharacters;return Object(p.jsx)(j.a,{span:6,push:1,children:Object(p.jsx)(se.a,{range:!0,min:-200,max:50,onAfterChange:function(t){var r=Object(A.a)(t,2),a=r[0],n=r[1];e(["birthYearsRange",{min:a,max:n}])},defaultValue:[-200,50],tipFormatter:function(e){var t=Number(e);return Number.isNaN(t)?null:Object(p.jsxs)("span",{children:[Math.abs(t)," ","year"," ","".concat(t>=0?"ABY":"BBY")," "]})},className:"slider"})})},ue=function(){var e=O(Q),t=z().setFilterData;return Object(s.useEffect)((function(){t(e)}),[e]),Object(p.jsx)(j.a,{span:18,children:Object(p.jsxs)(d.a,{align:"middle",children:[Object(p.jsx)(ae,{}),Object(p.jsx)(ce,{}),Object(p.jsx)(ie,{})]})})},le=h.a.Header,oe=function(){return Object(p.jsx)(le,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(ue,{})]})})},he=r(108),de=r(155),je=Object(p.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsx)("path",{d:"M0.5 0.5L12.5 12.5M0.5 12.5L12.5 0.5",stroke:"#424242"})}),pe=function(e){var t=e.character,r=e.onDragStart,a=e.removeFromFaviritesHandler,n=e.itemNo,c=e.draggable,i=void 0!==c&&c,u=e.deleteFromFavoritesBtn,l=void 0!==u&&u,o=Object(s.useState)(!1),h=Object(A.a)(o,2),d=h[0],j=h[1],f=t.name,b=t.species,O=t.films,v=t.starships,x=t.birthYear;return Object(p.jsxs)("div",{className:"character-wrapper",draggable:i,onDragStart:function(){"function"===typeof r&&r(t)},children:[Object(p.jsxs)("div",{className:"character-title",onClick:function(){return j((function(e){return!e}))},children:[Object(p.jsxs)("span",{className:"character-number",children:[n,"."]}),Object(p.jsx)("span",{className:"character-name",children:f})]}),d&&Object(p.jsxs)("div",{className:"character-body",children:[l&&Object(p.jsx)("div",{className:"delete-btn",children:Object(p.jsx)(de.a,{size:"small",icon:je,onClick:function(){"function"===typeof a&&a(t)}})}),Object(p.jsxs)("div",{className:"character-spesies",children:["Species:"," ",b]}),Object(p.jsxs)("div",{className:"character-spesies",children:["Birth year:"," ",x]}),Object(p.jsxs)("div",{className:"character-data",children:[Object(p.jsx)("span",{className:"character-data-title",children:"Movies:"}),Object(p.jsx)("ul",{className:"character-list-data",children:O.map((function(e){return Object(p.jsx)("li",{children:e.title},e.episode_id)}))})]}),Object(p.jsxs)("div",{className:"character-data",children:[Object(p.jsx)("span",{className:"character-data-title",children:"Starships:"}),v.length?Object(p.jsx)("ul",{children:v.map((function(e){return Object(p.jsx)("li",{children:e.name},e.url)}))}):Object(p.jsx)("span",{children:"No starships found."})]}),Object(p.jsx)("div",{})]})]})},fe=r(151),be=h.a.Content,Oe=function(){return Object(p.jsx)(be,{children:Object(p.jsx)(d.a,{justify:"center",align:"middle",className:"loader-box",children:Object(p.jsx)(j.a,{span:24,children:Object(p.jsx)(fe.a,{size:"large",tip:"Loading characters data...",style:{width:"100%",height:"100%"}})})})})},ve=r(56),xe=h.a.Content,me=function(e){switch(e.type){case"CharactersList":return Object(p.jsx)(xe,{children:Object(p.jsx)(d.a,{align:"middle",children:Object(p.jsx)(j.a,{span:6,push:2,children:Object(p.jsx)(ve.a,{className:"empty",description:Object(p.jsx)("span",{children:"No characters found with this criteries."})})})})});case"FavoritesList":return Object(p.jsx)(xe,{children:Object(p.jsx)(ve.a,{className:"empty",description:Object(p.jsx)("span",{children:"Add favorite character!"})})});default:return null}},Ee=h.a.Content,Ae=function(){var e=O(X),t=O(Z),r=O($),a=z().setLastDraggedItem,n=function(e){a(e)};return t?Object(p.jsx)(Oe,{}):e.length?r?(he.b.warn(r,3),null):Object(p.jsx)(Ee,{children:Object(p.jsxs)(j.a,{span:12,push:2,children:[Object(p.jsx)("h2",{children:"Selected Characters"}),Object(p.jsx)("div",{children:e.map((function(e,t){return Object(p.jsx)(pe,{character:e,itemNo:t+1,draggable:!0,onDragStart:n},e.url)}))})]})}):Object(p.jsx)(me,{type:"CharactersList"})},Se={favoritesCharacters:[],lastDraggedItem:null},Re="favorites",Te=function(e){return e.favorites.lastDraggedItem},Ce=function(e){return e.favorites.favoritesCharacters},_e=h.a.Content,ge=function(){var e=O(Te),t=O(Ce),r=z(),a=r.addNewCharacter,n=r.deleteCharacter,c=function(e){n(e.url)},s=t.map((function(e,t){return Object(p.jsx)(pe,{character:e,itemNo:t+1,deleteFromFavoritesBtn:!0,removeFromFaviritesHandler:c},e.url)}));return Object(p.jsx)(_e,{children:Object(p.jsxs)(j.a,{span:12,push:2,children:[Object(p.jsx)("h2",{children:"Favorites Characters"}),Object(p.jsx)("div",{className:"favorites-list",onDrop:function(t){t.preventDefault(),a(e)},onDragOver:function(e){e.preventDefault()},children:t.length?s:Object(p.jsx)(me,{type:"FavoritesList"})})]})})},ye=function(){var e=z(),t=e.setFullCharactersData,r=e.setFavoritesList;return Object(s.useEffect)((function(){t(),r()}),[]),Object(p.jsxs)(h.a,{children:[Object(p.jsx)(oe,{}),Object(p.jsx)(h.a,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(Ae,{}),Object(p.jsx)(ge,{})]})})]})},De=r(105),Ie=Object(v.c)((P={},Object(m.a)(P,K,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.GET_CHARACTERS_START:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!0});case c.GET_CHARACTERS_SUCCESS:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,characters:t.payload,filteredCharacters:t.payload});case c.GET_CHARACTERS_ERROR:return Object(x.a)(Object(x.a)({},e),{},{isLoading:!1,error:t.payload});case c.SET_FILTER_OPTIONS:return Object(x.a)(Object(x.a)({},e),{},{allMovies:t.payload.allMovies,allSpecies:t.payload.allSpecies,birthYearsRangeStatic:t.payload.birthYearsRangeStatic});case c.SET_FILTERED_CHARACTERS:return Object(x.a)(Object(x.a)({},e),{},{filteredCharacters:t.payload});case c.UPDATE_FILTER_PARAMS:return Object(x.a)(Object(x.a)({},e),{},{filterParams:t.payload});default:return e}})),Object(m.a)(P,Re,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.UPDATE_FAVORITE_CHARACTERS:return Object(x.a)(Object(x.a)({},e),{},{favoritesCharacters:t.payload});case g.SET_LAST_DRAGGED_ITEM:return Object(x.a)(Object(x.a)({},e),{},{lastDraggedItem:t.payload});case g.CLEAR_LAST_DRAGGED_ITEM:return Object(x.a)(Object(x.a)({},e),{},{lastDraggedItem:null});default:return e}})),P)),Le=Object(v.d)(Ie,Object(v.a)(De.a));r(147),r(148);l.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.a,{store:Le,children:Object(p.jsx)(ye,{})})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.28be0b84.chunk.js.map
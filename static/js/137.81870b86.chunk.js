"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{1687:function(n,e,t){t.d(e,{TP:function(){return p},qF:function(){return s},tx:function(){return d},u5:function(){return i},zv:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(3263);u.Z.defaults.baseURL="https://api.themoviedb.org/";var o="1222ad49372cbb365a0e9b84c00590f8",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/all/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2706:function(n,e,t){t.d(e,{e:function(){return m}});var r,a,c,u,o,i=t(7689),s=t(168),p=t(6444),f=t(1087),d=p.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 25px;\n"]))),l=p.ZP.li(a||(a=(0,s.Z)(["\n  display: block;\n"]))),v=p.ZP.img(c||(c=(0,s.Z)(["\n  margin-bottom: 5px;\n  transition: background 250ms cubic-bezier(0.075, 0.82, 0.165, 1),\n    box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  border-radius: 5px;\n  &:hover,\n  &:focus {\n    background: #c4c4c4;\n    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);\n  }\n"]))),h=(0,p.ZP)(f.rU)(u||(u=(0,s.Z)(["\n  text-decoration: none;\n  color: #000000;\n  font-weight: 500;\n"]))),x=p.ZP.h3(o||(o=(0,s.Z)(["\n  &:hover {\n    color: orange;\n  }\n"]))),g=t(184),m=function(n){var e=n.movies,t=(0,i.TH)();return(0,g.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,a=n.name,c=n.poster_path;return(0,g.jsx)(h,{to:"/movies/".concat(e),state:{from:t},children:(0,g.jsxs)(l,{children:[(0,g.jsx)(v,{src:c?"".concat("https://image.tmdb.org/t/p/w500/").concat(c):"Sorry,coming soon",alt:""}),(0,g.jsx)(x,{children:r||a})]})},e)}))})}},1137:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a=t(5861),c=t(9439),u=t(7757),o=t.n(u),i=t(168),s=t(6444).ZP.h1(r||(r=(0,i.Z)(["\n  color: purple;\n"]))),p=t(2791),f=t(1687),d=t(2706),l=t(184),v=function(){var n=(0,p.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,p.useEffect)((function(){function n(){return(n=(0,a.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.u5)();case 3:e=n.sent,t=e.results,r(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Ooops,something went wrong");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)(s,{children:"Trending today"}),(0,l.jsx)(d.e,{movies:t})]})}}}]);
//# sourceMappingURL=137.81870b86.chunk.js.map
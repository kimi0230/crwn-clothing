(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[4],{144:function(t,c,e){"use strict";e(5);var n=e(45),i=e(94),r=e(64),a=(e(148),e(13));c.a=Object(n.b)(null,(function(t){return{addItem:function(c){return t(Object(r.a)(c))}}}))((function(t){var c=t.item,e=t.addItem,n=c.name,r=c.price,o=c.imageUrl;return Object(a.jsxs)("div",{className:"collection-item",children:[Object(a.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(o,")")}}),Object(a.jsxs)("div",{className:"collection-footer",children:[Object(a.jsx)("span",{className:"name",children:n}),Object(a.jsx)("span",{className:"price",children:r})]}),Object(a.jsx)(i.a,{onClick:function(){return e(c)},inverted:!0,children:"Add to cart"})]})}))},147:function(t,c,e){"use strict";e(5);var n=e(26),i=e(144),r=(e(149),e(13));c.a=Object(n.i)((function(t){var c=t.title,e=t.items,n=t.history,a=t.match;return Object(r.jsxs)("div",{className:"collection-preview",children:[Object(r.jsx)("h1",{className:"title",onClick:function(){return n.push("".concat(a.path,"/").concat(c.toLowerCase()))},children:c.toUpperCase()}),Object(r.jsx)("div",{className:"preview",children:e.filter((function(t,c){return c<4})).map((function(t){return Object(r.jsx)(i.a,{item:t},t.id)}))})]})}))},148:function(t,c,e){},149:function(t,c,e){},150:function(t,c,e){},151:function(t,c,e){},192:function(t,c,e){"use strict";e.r(c);var n=e(5),i=e(26),r=e(45),a=e(46),o=e(39),s=function(t){return t.shop},l=Object(o.a)([s],(function(t){return t.collections})),u=Object(o.a)([l],(function(t){return t?Object.keys(t).map((function(c){return t[c]})):[]})),j=Object(o.a)([s],(function(t){return t.isFetching})),b=Object(o.a)([s],(function(t){return!!t.collections})),O=e(16),d=e(93),f=e(95),h=e(13),m=function(t){return function(c){var e=c.isLoading,n=Object(d.a)(c,["isLoading"]);return e?Object(h.jsx)(f.a,{}):Object(h.jsx)(t,Object(O.a)({},n))}},p=e(147),v=(e(150),Object(o.b)({collections:u})),x=Object(r.b)(v)((function(t){var c=t.collections;return Object(h.jsx)("div",{className:"collections-overiew",children:c.map((function(t){var c=t.id,e=Object(d.a)(t,["id"]);return Object(h.jsx)(p.a,Object(O.a)({},e),c)}))})})),g=Object(o.b)({isLoading:j}),N=Object(a.c)(Object(r.b)(g),m)(x),w=e(144),k=(e(151),function(){var t,c=Object(i.h)().collectionId,e=Object(r.d)((t=c,Object(o.a)([l],(function(c){return c?c[t]:null})))),n=e.title,a=e.items;return Object(h.jsxs)("div",{className:"collection-page",children:[Object(h.jsx)("h2",{className:"title",children:n}),Object(h.jsx)("div",{className:"items",children:a.map((function(t){return Object(h.jsx)(w.a,{item:t},t.id)}))})]})}),C=Object(o.b)({isLoading:function(t){return!b(t)}}),I=Object(a.c)(Object(r.b)(C),m)(k),L=e(87);c.default=Object(r.b)(null,(function(t){return{fetchCollectionsStart:function(){return t(Object(L.b)())}}}))((function(t){var c=t.fetchCollectionsStart,e=t.match;return Object(n.useEffect)((function(){c()}),[c]),Object(h.jsxs)("div",{className:"shop-page",children:[Object(h.jsx)(i.b,{exact:!0,path:"".concat(e.path),component:N}),Object(h.jsx)(i.b,{path:"".concat(e.path,"/:collectionId"),component:I})]})}))}}]);
//# sourceMappingURL=4.2c79d2d3.chunk.js.map
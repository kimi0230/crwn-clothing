(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[7],{162:function(e,c,t){},182:function(e,c,t){},195:function(e,c,t){"use strict";t.r(c);t(5);var n=t(45),s=t(39),a=t(67),r=t(64),i=(t(162),t(13)),l=Object(n.b)(null,(function(e){return{clearItem:function(c){return e(Object(r.c)(c))},addItem:function(c){return e(Object(r.a)(c))},removeItem:function(c){return e(Object(r.d)(c))}}}))((function(e){var c=e.cartItem,t=e.clearItem,n=e.addItem,s=e.removeItem,a=c.name,r=c.imageUrl,l=c.price,o=c.quantity;return Object(i.jsxs)("div",{className:"checkout-item",children:[Object(i.jsx)("div",{className:"image-container",children:Object(i.jsx)("img",{src:r,alt:"item"})}),Object(i.jsx)("span",{className:"name",children:a}),Object(i.jsxs)("span",{className:"quantity",children:[Object(i.jsx)("div",{className:"arrow",onClick:function(){return s(c)},children:"\u276e"}),Object(i.jsx)("span",{className:"value",children:o}),Object(i.jsx)("div",{className:"arrow",onClick:function(){return n(c)},children:"\u276f"})]}),Object(i.jsx)("span",{className:"price",children:l}),Object(i.jsx)("div",{className:"remove-button",onClick:function(){return t(c)},children:"\u2715"})]})})),o=t(163),d=t.n(o),j=t(164),b=t.n(j),m=function(e){var c=e.price,t=100*c;return Object(i.jsx)(d.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(c),amount:t,panelLabel:"Pay Now",token:function(e){console.log(e),b()({url:Object({NODE_ENV:"production",PUBLIC_URL:"/crwn-clothing",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_STORAGE_BUCKET:"crwn-db-e06e9.appspot.com",REACT_APP_MEASUREMENT_ID:"G-34CGNDB3L1",REACT_APP_AUTH_DOMAIN:"crwn-db-e06e9.firebaseapp.com",REACT_APP_STRIPE_PUBLISHABLE_KEY:"pk_test_51Jffj8I42yIsghEhK1uZdt9y6mvR4wdzbyS5WERAIlin1StGm3ozPgY7ypzcRYjwS4WVqH2tHMOAGuNekomvdXZ200KL9uGMS1",REACT_APP_PROJECT_ID:"crwn-db-e06e9",REACT_APP_APP_ID:"1:71677055237:web:f396ea8d7e2f70e13e676c",REACT_APP_API_KEY:"AIzaSyAgM-85UneRkka55aTvKKUYguyRJYswIkM",REACT_APP_MESSAGING_SENDER_ID:"71677055237"}).REACT_APP_API_URL+"v1/payment",method:"post",data:{amount:t,token:e}}).then((function(e){alert("succesful payment")})).catch((function(e){console.log("Payment Error: ",e),alert("There was an issue with your payment! Please make sure you use the provided credit card.")}))},stripeKey:"pk_test_51Jffj8I42yIsghEhK1uZdt9y6mvR4wdzbyS5WERAIlin1StGm3ozPgY7ypzcRYjwS4WVqH2tHMOAGuNekomvdXZ200KL9uGMS1"})},u=(t(182),Object(s.b)({cartItems:a.b,total:a.d}));c.default=Object(n.b)(u)((function(e){var c=e.cartItems,t=e.total;return Object(i.jsxs)("div",{className:"checkout-page",children:[Object(i.jsxs)("div",{className:"checkout-header",children:[Object(i.jsx)("div",{className:"header-block",children:Object(i.jsx)("span",{children:"\bProduct"})}),Object(i.jsx)("div",{className:"header-block",children:Object(i.jsx)("span",{children:"\bDescriptions"})}),Object(i.jsx)("div",{className:"header-block",children:Object(i.jsx)("span",{children:"Quantity"})}),Object(i.jsx)("div",{className:"header-block",children:Object(i.jsx)("span",{children:"Price"})}),Object(i.jsx)("div",{className:"header-block",children:Object(i.jsx)("span",{children:"Remove"})})]}),c.map((function(e){return Object(i.jsx)(l,{cartItem:e},e.id)})),Object(i.jsx)("div",{className:"total",children:Object(i.jsxs)("span",{children:["TOTAL: $",t]})}),Object(i.jsx)(m,{price:t}),Object(i.jsxs)("div",{className:"test-warning",children:["* Test credit card for payments *",Object(i.jsx)("br",{}),"4242 4242 4242 4242 - EXP: 10/23 - CVV: 123"]})]})}))}}]);
//# sourceMappingURL=7.7abcd3d8.chunk.js.map
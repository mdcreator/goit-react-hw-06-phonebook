(this["webpackJsonpcreate-react-app-template"]=this["webpackJsonpcreate-react-app-template"]||[]).push([[0],{12:function(e,t,n){e.exports={filter:"Filter_filter__Rr5xj",filterLabel:"Filter_filterLabel__2VO7j",filterInput:"Filter_filterInput__36d8K"}},17:function(e,t,n){e.exports={contactList:"ContactList_contactList__rgf1X",contact:"ContactList_contact__1YDTe"}},24:function(e,t,n){e.exports={container:"Container_container__3sDDb"}},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n(0),i=n.n(r),o=n(8),s=n.n(o),l=n(14),b=n(11),u=n(2),j=n(3),m=Object(j.b)("contacts/add",(function(e){return{payload:{id:Object(j.e)(),name:e.name,number:e.number}}})),d=Object(j.b)("contacts/delete"),f=Object(j.b)("contacts/changeFilter"),O=Object(j.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(b.a)(c,m,(function(e,t){var n=t.payload;return[].concat(Object(l.a)(e),[n])})),Object(b.a)(c,d,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),p=Object(j.c)("",Object(b.a)({},f,(function(e,t){return t.payload}))),h=Object(u.c)({items:O,filter:p}),x=(n(31),n(5)),_=n(21),v=n.n(_),C={serializableCheck:{ignoredActions:[x.a,x.f,x.b,x.c,x.d,x.e]}},L=Object(j.d)(C);var N={key:"PhoneBookRedux",storage:v.a,blacklist:["filter"]},F=Object(j.a)({reducer:{contacts:Object(x.g)(N,h)},devTools:!1,middleware:L}),g=Object(x.h)(F),y=n(22),I=n(4),k=(n(40),n(18)),w=n(6),D=n.n(w);function S(){var e=Object(r.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(k.a)(i,2),s=o[0],l=o[1],b=Object(I.b)();return Object(a.jsxs)("form",{className:D.a.form,onSubmit:function(e){e.preventDefault(),""!==n&&""!==s?(b(m({name:n,number:s})),c(""),l("")):alert("Name required")},children:[Object(a.jsxs)("div",{className:D.a.formField,children:[Object(a.jsx)("label",{className:D.a.formLabel,children:"Name"}),Object(a.jsx)("input",{className:D.a.formInput,type:"text",placeholder:"",name:"name",value:n,onChange:function(e){var t=e.target;c(t.value.trimLeft())}})]}),Object(a.jsxs)("div",{className:D.a.formField,children:[Object(a.jsx)("label",{className:D.a.formLabel,children:"Number"}),Object(a.jsx)("input",{className:D.a.formInput,type:"text",placeholder:"",name:"number",value:s,onChange:function(e){var t=e.target;l(t.value.trimLeft())}})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}var A=n(9),M=function(e){return e.contacts.filter},R=Object(A.a)([function(e){return e.contacts.items},M],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),z=n(17),B=n.n(z);function E(){var e=Object(I.c)(R),t=Object(I.b)();return Object(a.jsx)("ul",{className:B.a.contactList,children:e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(a.jsxs)("li",{className:B.a.contact,children:[Object(a.jsxs)("p",{children:[c," : ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return t(d(n))},children:"Delete"})]},n)}))})}var J=n(12),K=n.n(J);function P(){var e=Object(I.c)(M),t=Object(I.b)();return Object(a.jsxs)("div",{className:K.a.filter,children:[Object(a.jsx)("label",{className:K.a.filterLabel,children:"Find contacts by name"}),Object(a.jsx)("input",{className:K.a.filterInput,type:"text",value:e,onChange:function(e){var n=e.target;t(f(n.value.trim()))}})]})}var T=n(24),q=n.n(T);var H=function(e){var t=e.children;return Object(a.jsx)("div",{className:q.a.container,children:t})};function V(){return Object(a.jsx)("div",{children:Object(a.jsxs)(H,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(S,{}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(P,{}),Object(a.jsx)(E,{})]})})}s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(I.a,{store:F,children:Object(a.jsx)(y.a,{persistor:g,children:Object(a.jsx)(V,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__1M897",formField:"ContactForm_formField__3IMnn",formInput:"ContactForm_formInput__1n_Li",formLabel:"ContactForm_formLabel__2fvnz"}}},[[41,1,2]]]);
//# sourceMappingURL=main.f0538aee.chunk.js.map
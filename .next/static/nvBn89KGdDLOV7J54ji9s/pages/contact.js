(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0TmZ":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("2w0b"),c=n.n(a),o=n("joYR"),l=n.n(o),r=(n("v4hW"),c.a.createElement);function m(){return r("footer",{className:"main-footer"},r("div",null,r("div",{className:"main-footer-links"},r("span",null,"github "),r("a",{target:"_new",href:"https://github.com/soWhiteSoColl"},"soWhiteSoColl")),r("div",null,r("span",{className:"main-footer-item"},"\xa92018 dodo "),r("span",{className:"main-footer-item"},r(l.a,{href:"/blog?id=5c2c8bf7e71e1855ab4d18f0"},r("a",null,"\u5173\u4e8e\u5c0f\u5bd2"))))))}},W5ma:function(e,t,n){"use strict";n.r(t);var a=n("r6tY"),c=n.n(a),o=n("u20+"),l=n.n(o),r=n("ZxvJ"),m=n.n(r),i=n("Ah5Y"),s=n.n(i),u=n("w2yW"),f=n.n(u),d=n("AkfJ"),b=n.n(d),v=n("CvBr"),g=n("2w0b"),h=n.n(g),p=n("Hcux"),N=n("1s8z"),w=n.n(N),k=n("6n+W"),W=n("l6d1"),j=n("0TmZ"),E=n("rEMe"),O=(n("ftrK"),h.a.createElement);function M(e,t){var n=b()(e);if(f.a){var a=f()(e);t&&(a=a.filter((function(t){return s()(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(v.a)(e,t,n[t])})):m.a?l()(e,m()(n)):M(Object(n)).forEach((function(t){c()(e,t,s()(n,t))}))}return e}t.default=Object(p.b)((function(e){return _({},e.blogModel,{},e.globalModel)}),(function(e){return _({},e.blogModel,{},e.globalModel)}))((function(e){var t=e.getComments,n=e.comments,a=e.leaveMessage,c=Object(g.useState)(""),o=c[0],l=c[1],r=Object(g.useState)(""),m=r[0],i=r[1];return Object(g.useEffect)((function(){Object(E.a)("enter-contact","route-change"),t({type:2})}),[]),O("div",{className:"contact-page page-common-container"},O(w.a,null,O("title",null,"\u5c0f\u5bd2\u7684\u535a\u5ba2-\u7559\u8a00\u677f")),O(k.a,null),O("form",{className:"contact-form"},O("input",{value:o,className:"contact-form-username",type:"text",maxLength:6,placeholder:"\u540d\u5b57\u6216\u8005\u6635\u79f0",onChange:function(e){l(e.target.value)}}),O("textarea",{value:m,maxLength:300,className:"contact-form-textarea",placeholder:"\u5199\u70b9\u4ec0\u4e48\u5427...",onChange:function(e){i(e.target.value)}}),O("button",{disabled:!o||!m,onClick:function(e){e.preventDefault(),a({type:2,content:m,nickname:o}),l(""),i("")},className:"contact-form-submit"},"\u7559\u8a00")),!(!n||!n.list.length)&&O(h.a.Fragment,null,O("div",{className:"page-common-section-title comment-list-title"},"\u5168\u90e8\u7559\u8a00"),O(W.a,{comments:n.list})),O(j.a,null))}))},WsPk:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("W5ma")}])},l6d1:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("2w0b"),c=n.n(a),o=n("WN8c"),l=n.n(o),r=(n("lOme"),c.a.createElement);function m(e){var t=e.comments;return t&&t.length?r("ul",{className:"comment-list"},t.map((function(e){return r("li",{key:e._id,className:"comment-item"},r("div",{className:"comment-nickname"},e.nickname),r("div",{className:"comment-created"},l()(e.created).format("YYYY.MM.DD HH:mm")),r("div",{className:"comment-content"},e.content))}))):r("div",{className:"no-comment"},"\u6682\u65e0\u8bc4\u8bba")}}},[["WsPk",1,0,2]]]);
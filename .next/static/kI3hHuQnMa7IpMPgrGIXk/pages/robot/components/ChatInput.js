(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9m3z":function(n,e,t){"use strict";t.r(e);var o=t("2w0b"),a=t.n(o),c=t("iczh"),r=t.n(c),u=(t("4c5X"),a.a.createElement);e.default=a.a.memo((function(n){var e=n.choose,t=n.onChange,a=n.visible,c=n.onCancel,i=Object(o.useState)(a),l=i[0],s=i[1];return Object(o.useEffect)((function(){var n;return a?s(!0):n=setTimeout((function(){return s(!1)}),250),function(){return clearTimeout(n)}}),[a]),l?u("div",{className:r()("robot-selects-panel",a?"show":"hidden")},u("div",{className:"selects-list"},e.map((function(n){return u("div",{key:n.label,className:"select-item",onClick:function(){return t(n.value)}},n.label)}))),u("div",{className:"selects-panel-mask",onClick:function(){return c()}})):null}))},R1WI:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/robot/components/ChatInput",function(){return t("l1Ty")}])},l1Ty:function(n,e,t){"use strict";t.r(e);var o=t("r6tY"),a=t.n(o),c=t("u20+"),r=t.n(c),u=t("ZxvJ"),i=t.n(u),l=t("Ah5Y"),s=t.n(l),f=t("w2yW"),b=t.n(f),m=t("AkfJ"),v=t.n(m),d=t("CvBr"),p=t("2w0b"),w=t.n(p),h=t("Hcux"),C=t("9m3z"),j=(t("1Cjw"),w.a.createElement);function k(n,e){var t=v()(n);if(b.a){var o=b()(n);e&&(o=o.filter((function(e){return s()(n,e).enumerable}))),t.push.apply(t,o)}return t}function N(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){Object(d.a)(n,e,t[e])})):i.a?r()(n,i()(t)):k(Object(t)).forEach((function(e){a()(n,e,s()(t,e))}))}return n}e.default=Object(h.b)((function(n){return N({},n.robotModel)}),(function(n){return N({},n.robotModel)}))((function(n){var e=n.status,t=n.selects,o=n.userReply,a=Object(p.useState)(!1),c=a[0],r=a[1];return j(w.a.Fragment,null,"waiting"===e&&j("div",{className:"robot-input-area",onClick:function(){r(!0)}},"\u8bf7\u8f93\u5165..."),"waiting"!==e&&j("div",{className:"robot-info-area"},function(n){return{offline:"\u5c0f\u5bd2\u5df2\u79bb\u7ebf...",action:"\u5c0f\u5bd2\u64cd\u4f5c\u4e2d...",inputing:"\u5c0f\u5bd2\u6b63\u5728\u8f93\u5165\u4e2d..."}[n]}(e)),j(C.default,{choose:t,visible:c,onChange:function(n){o(n),r(!1)},onCancel:function(){r(!1)}}))}))}},[["R1WI",1,0,2]]]);
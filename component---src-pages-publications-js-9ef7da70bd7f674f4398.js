(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{252:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return m}));t(4),t(5),t(2),t(8),t(86);var n=t(0),c=t.n(n),r=t(27),l=t(234),i=t(264),o=t(151),s=t(119),u=t(33);t(253);a.default=function(e){var a=e.data,t=e.pageContext.locale,n=a.allMarkdownRemark.edges.map((function(e){return e.node})),m=Object(s.b)(n,t,u.defaultLocale),d=Object(o.groupBy)(m,(function(e){return e.frontmatter.year})),b=Object.keys(d).sort().reverse(),p=(0,Object(r.d)().formatMessage)({id:"pages.publications"});return c.a.createElement(l.a,{title:p},c.a.createElement("section",null,c.a.createElement("h1",null,p),c.a.createElement("div",{className:"publications"},b.map((function(e){return c.a.createElement("section",{className:"publications__section",key:e},c.a.createElement("h2",{className:"publications__year"},e),d[e].map((function(e){return c.a.createElement(i.a,{node:e,key:e.id})})))})))))};var m="670024798"},264:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),c=t.n(n),r=t(120),l=t.n(r),i=t(27),o=t(70),s=(t(235),function(e){var a=e.node,t=Object(n.useState)(!1),r=t[0],s=t[1];return c.a.createElement("article",{className:"publication-card card card--left card--with-hover"},c.a.createElement("h3",{className:"publication-card__title"},c.a.createElement(o.a,{to:a.fields.slug,className:"publication-card__title-link"},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:a.frontmatter.title}}))),c.a.createElement("div",null,a.frontmatter.journal),c.a.createElement("nav",{className:"publication-card__links"},!!a.html&&c.a.createElement("button",{className:"link-button publication-card__link",onClick:function(){s(!r)}},c.a.createElement(i.b,{id:"common.abstract"})),c.a.createElement(o.a,{className:"publication-card__link",to:a.fields.slug},c.a.createElement(i.b,{id:"common.more-details"}))),c.a.createElement("aside",{className:l()("publication-card__abstract",{"publication-card__abstract--visible":r}),dangerouslySetInnerHTML:{__html:a.html}}))})}}]);
//# sourceMappingURL=component---src-pages-publications-js-9ef7da70bd7f674f4398.js.map
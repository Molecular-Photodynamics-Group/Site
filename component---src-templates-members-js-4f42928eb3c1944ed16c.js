(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return f}));a(88);var r=a(0),i=a.n(r),n=a(27),s=a(260),l=a.n(s),o=a(232),d=a(263),c=a(119),u=a(33);a(243);t.default=function(e){var t=e.data,a=e.pageContext.locale,r=t.allMarkdownRemark.edges.map((function(e){return e.node})),s=Object(c.b)(r,a,u.defaultLocale).shift().frontmatter,f=t.publications.edges.map((function(e){return e.node})),m=Object(c.b)(f,a,u.defaultLocale),p=s.educations||[];p=p.sort((function(e,t){return+t.start-+e.start}));var g=s.lastName+" "+s.firstName;return s.middleName&&(g=g+" "+s.middleName),i.a.createElement(o.a,{title:g,description:s.position},i.a.createElement("article",{className:"member"},i.a.createElement("h1",null,g),i.a.createElement("section",{className:"member__info-block"},i.a.createElement("div",{className:"member__info card card--left"},i.a.createElement("h3",{className:"member__position"},s.position),i.a.createElement("div",{className:"member__degree"},s.degree),s.interests&&i.a.createElement("div",{className:"member__interests"},i.a.createElement("h4",{className:"member__interests-label"},i.a.createElement(n.b,{id:"member-page.interests"})),i.a.createElement("ul",{className:"member__interests-list"},s.interests.map((function(e,t){return i.a.createElement("li",{className:"member__interest",key:t},e)}))))),i.a.createElement("div",{className:"member__photo-wrapper card"},i.a.createElement(l.a,{className:"member__photo",fluid:s.photo.childImageSharp.fluid}))),p.length>0&&i.a.createElement("section",null,i.a.createElement("h2",null,i.a.createElement(n.b,{id:"member-page.education"})),i.a.createElement("div",{className:"member__educations card card--left"},p.map((function(e,t){return i.a.createElement("div",{key:t,className:"member__education education"},i.a.createElement("div",{className:"education__first-line"},i.a.createElement("h4",{className:"education__place"},e.place),e.start&&i.a.createElement("div",{className:"education__dates"},e.start," - ",e.end||i.a.createElement(n.b,{id:"member-page.now"}))),i.a.createElement("p",{className:"education__level"},e.level),i.a.createElement("p",{className:"education__diploma",dangerouslySetInnerHTML:{__html:e.diploma}}))})))),m.length>0&&i.a.createElement("section",null,i.a.createElement("h2",null,i.a.createElement(n.b,{id:"member-page.publications"})),i.a.createElement("div",{className:"member__publications"},m.map((function(e){return i.a.createElement(d.a,{node:e,key:e.id})}))))))};var f="1597283202"},260:function(e,t,a){"use strict";a(4),a(5),a(2),a(69),a(158),a(261);var r=a(32);t.__esModule=!0,t.default=void 0;var i,n=r(a(87)),s=r(a(86)),l=r(a(159)),o=r(a(160)),d=r(a(0)),c=r(a(1)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,E=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function _(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(O,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,N=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:k?1:0,transition:R?"opacity "+b+"ms":"none"},l),z="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&C,{},l,{},f),j={title:t,alt:this.state.isVisible?"":a,style:T,className:m};if(p){var x=p,M=x[0];return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),z&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&C)}),M.base64&&d.default.createElement(I,{src:M.base64,spreadProps:j,imageVariants:x,generateSources:_}),M.tracedSVG&&d.default.createElement(I,{src:M.tracedSVG,spreadProps:j,imageVariants:x,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(x),d.default.createElement(O,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:x}))}}))}if(g){var P=g,q=P[0],W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},z&&d.default.createElement(E,{title:t,style:(0,o.default)({backgroundColor:z,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},R&&C)}),q.base64&&d.default.createElement(I,{src:q.base64,spreadProps:j,imageVariants:P,generateSources:_}),q.tracedSVG&&d.default.createElement(I,{src:q.tracedSVG,spreadProps:j,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(P),d.default.createElement(O,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:P}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=k;t.default=z},261:function(e,t,a){"use strict";a(262)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},262:function(e,t,a){var r=a(3),i=a(17),n=a(50),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),i=a.n(r),n=a(120),s=a.n(n),l=a(27),o=a(70),d=(a(233),function(e){var t=e.node,a=Object(r.useState)(!1),n=a[0],d=a[1];return i.a.createElement("article",{className:"publication-card card card--left card--with-hover"},i.a.createElement("h3",{className:"publication-card__title"},i.a.createElement(o.a,{to:t.fields.slug,className:"publication-card__title-link"},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.frontmatter.title}}))),i.a.createElement("div",null,t.frontmatter.journal),i.a.createElement("nav",{className:"publication-card__links"},!!t.html&&i.a.createElement("button",{className:"link-button publication-card__link",onClick:function(){d(!n)}},i.a.createElement(l.b,{id:"common.abstract"})),i.a.createElement(o.a,{className:"publication-card__link",to:t.fields.slug},i.a.createElement(l.b,{id:"common.more-details"}))),i.a.createElement("aside",{className:s()("publication-card__abstract",{"publication-card__abstract--visible":n}),dangerouslySetInnerHTML:{__html:t.html}}))})}}]);
//# sourceMappingURL=component---src-templates-members-js-4f42928eb3c1944ed16c.js.map
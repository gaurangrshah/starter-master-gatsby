(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+5i3":function(e,n,t){},"3XHS":function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return d}));var o=t("q1tI"),a=t.n(o),i=t("4jWa"),r=t("AD0r"),l=t("Kvkj");n.default=function(e){var n=e.data.allStrapiSection.edges,t=n[0],o=n[1],d=n[2],c=d.node.block.cards,s=c[0],u=c.slice(1),m=Object(i.a)("hero",{});return a.a.createElement(r.a,{seo:{siteTitle:"About",siteTagline:"Penn Star"}},a.a.createElement(l.c,{fluid:!0,overflow:"hidden"},a.a.createElement(l.b,{sx:m.base}),a.a.createElement(l.o,{color:!0,sx:m.content},a.a.createElement(l.d,Object.assign({fluid:!0,shadow:!0,sx:m.block,alignItems:"flex-start",config:{tagline:{border:!0,fontSize:["md","xl"]},link:{colorScheme:"blue",isDefault:!1,isMoreLink:!0}}},t.node.block.block)))),a.a.createElement(l.c,{fluid:!0,pattern:!0,py:[12,null,null,36]},a.a.createElement(l.g,{bg:"background",color:"bg4",shadow:!0,rounded:!0,maxW:["5xl",null,null,null,"60%"],mx:"auto",py:6,px:4,textAlign:"center"},a.a.createElement(l.d,Object.assign({fluid:!0},o.node.block.block,{config:{heading:{my:12},lead:{mx:"auto",border:!0,borderColor:"red"},content:{color:"mode.light.text",textAlign:["left",null,"center"]}}}))),a.a.createElement(l.g,{bg:"background",color:"mode.light.text",shadow:!0,rounded:!0,maxW:["5xl",null,null,null,"60%"],mx:"auto",my:12,py:6,px:4},a.a.createElement(l.q,{w:["100%","25%"],color:"background",config:{link:{isDefault:!1,isEnabled:!1}}},a.a.createElement(l.n,s)),a.a.createElement(l.d,Object.assign({fluid:!0,py:12},d.node.block.block)))),a.a.createElement(l.c,{bg:!0,fluid:!0,color:"brand",py:12},a.a.createElement(l.o,{maxW:"5xl",responsive:!0,center:!0,justifyContent:["center",null,null,"space-around"]},a.a.createElement(l.s,{w:"25%",hideMobile:!0}),a.a.createElement(l.d,{flex:1,textAlign:"center",text:[{text:"Penn Star All-Stars",type:"heading"}],mx:"auto",config:{heading:{fontSize:["xl",null,"3xl"],textTransform:"uppercase",pt:10}}}),a.a.createElement(l.t,{w:"25%",hideMobile:!0})),a.a.createElement(l.g,{shadow:!0,rounded:!0,bg:"background",maxW:["5xl",null,null,null,"60%"],py:6,mb:12,textAlign:"center",color:"bg4"},a.a.createElement(l.o,{flexWrap:["wrap","nowrap"],color:"background",justifyContent:["space-between",null,"space-around"],alignItems:"center",order:8,my:12},null==u?void 0:u.map((function(e,n){return a.a.createElement(l.h,{key:n,minH:"180px",w:["100%","45%","30%"],flexGrow:0,m:[3],config:{link:{isEnabled:!1}}},a.a.createElement(l.n,e))}))))))};var d="180090696"},AD0r:function(e,n,t){"use strict";var o=t("zLVn"),a=t("q1tI"),i=t.n(a),r=t("+p43"),l=t("pEiv"),d=t("0x2G"),c=t("5+Am"),s=t("/2u0"),u=function(e){var n,t=e.children,o=e.colorModeManager,i=e.portalZIndex,u=e.resetCSS,m=void 0===u||u,b=e.theme,f=void 0===b?s.a:b;return a.createElement(c.c,{theme:f},a.createElement(r.b,{colorModeManager:o,useSystemColorMode:!!(null==(n=f.config)?void 0:n.useSystemColorMode)},m&&a.createElement(l.b,null),a.createElement(c.a,null),i?a.createElement(d.a,{zIndex:i},t):t))},m=t("v7Hm"),b=t("TZad"),f=t("MUpH"),v=t("qKvR");t("lfCk");function p(){var e=Object(f.a)(['\n        /*\n        This will hide the focus indicator if the element receives focus via the mouse,\n        but it will still show up on keyboard focus.\n        https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9\n      */\n        .js-focus-visible :focus:not([data-focus-visible-added]) {\n          outline: none;\n          box-shadow: none;\n        }\n        * {\n          border: 0;\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n          & :before {\n            box-sizing: border-box;\n          }\n        }\n\n        input:focus {\n          border: inherit;\n        }\n        input:focus:invalid {\n          background: rgba(255, 224, 224, 1);\n        }\n        input:valid,\n        input:focus:valid {\n          background: rgba(226, 250, 219, 1);\n        }\n        a:active,\n        a:focus,\n        a:visited {\n          outline: 0;\n          border: none;\n          outline-style: none;\n          -moz-outline-style: none;\n          text-decoration: none;\n          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;\n          -moz-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;\n          -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;\n        }\n        a:hover {\n          text-decoration: none;\n        }\n        a[aria-current="page"].nav-link {\n          color: #1a5eef;\n          background: #d9e4fd;\n          border-radius: 5px;\n          pointer-events: none;\n        }\n        a {\n          color: inherit;\n        }\n        html,\n        body {\n          font-size: 16px;\n          max-width: 100vw;\n          height: 100%;\n          box-sizing: border-box;\n          scroll-behavior: smooth;\n          font-family: "Encode Sans", sans-serif;\n        }\n        body {\n          margin: 0;\n          padding: 0;\n          line-height: 1.35em;\n          text-rendering: optimizeLegibility;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          -webkit-overflow-scrolling: touch;\n          max-width: 100%;\n          height: 100%;\n        }\n        #content-wrapper {\n          display: flex;\n          flex-direction: column;\n          max-width: 100%;\n          overflow-x: hidden;\n          z-index: 0;\n        }\n        header,\n        footer {\n          position: fixed;\n          width: 100%;\n          z-index: 1500;\n        }\n        header {\n          top: 0;\n        }\n        main {\n          flex: 1 0 auto;\n          overflow: auto;\n          max-width: 100%;\n          overflow-x: hidden;\n        }\n        footer {\n          bottom: 0;\n        }\n      ']);return p=function(){return e},e}var g=function(){return i.a.createElement(v.a,{styles:Object(v.c)(p())})},E=t("vrFN"),h=t("Kvkj"),x=t("TUDN"),w=t("RCw/"),y=t("6vW9");t("+5i3"),n.a=function(e){var n=e.header,t=void 0===n||n,a=e.prefooter,l=void 0===a||a,d=e.seo,c=e.allowPanelUpdate,s=void 0!==c&&c,f=e.children,v=Object(o.a)(e,["header","prefooter","seo","allowPanelUpdate","children"]),p=Object(r.c)().colorMode,L=Object(x.a)(),k=L.title,j=L.brandColors,T=Object.assign({},b.a,{colors:Object.assign({},b.a.colors,{brand:Object.assign({},b.a.colors.brand,j)})});return y.e&&console.log("⭕️themeUpdate",T),i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null),i.a.createElement(E.a,{seo:Object.assign({siteTitle:k},d)}),i.a.createElement(u,{resetCSS:!0,theme:T},i.a.createElement(h.l,null),i.a.createElement(w.b,{allowPanelUpdate:s},i.a.createElement(h.p,null,i.a.createElement(h.r,null)),i.a.createElement(m.a,{id:"content-wrapper",color:"mode."+p+".text",fontFamily:"body"},t&&i.a.createElement(h.j,{siteTitle:k,siteTagline:null==d?void 0:d.siteTagline}),i.a.createElement(m.a,Object.assign({as:"main"},v,{mt:10}),f))),l&&i.a.createElement(h.c,{className:"pre-footer",fluid:!0,bg:"bg",py:12,mb:[12,null,0]},i.a.createElement(h.m,null)),i.a.createElement(h.i,{siteTitle:k.toUpperCase(),siteTagline:""})))}},lfCk:function(e,n,t){!function(){"use strict";function e(e){var n=!0,t=!1,o=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function l(e){n=!1}function d(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(n=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(t){t.metaKey||t.altKey||t.ctrlKey||(i(e.activeElement)&&r(e.activeElement),n=!0)}),!0),document.addEventListener("mousedown",l,!0),document.addEventListener("pointerdown",l,!0),document.addEventListener("touchstart",l,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(t&&(n=!0),d())}),!0),d(),e.addEventListener("focus",(function(e){var t,o,l;i(e.target)&&(n||(t=e.target,o=t.type,"INPUT"===(l=t.tagName)&&a[o]&&!t.readOnly||"TEXTAREA"===l&&!t.readOnly||t.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var n;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(t=!0,window.clearTimeout(o),o=window.setTimeout((function(){t=!1}),100),(n=e.target).hasAttribute("data-focus-visible-added")&&(n.classList.remove("focus-visible"),n.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var n;window.applyFocusVisiblePolyfill=e;try{n=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(n)}"undefined"!=typeof document&&e(document)}()}}]);
//# sourceMappingURL=component---src-pages-about-js-415a01e6fc56b6476404.js.map
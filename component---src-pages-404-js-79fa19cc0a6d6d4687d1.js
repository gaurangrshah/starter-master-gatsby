(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+5i3":function(e,n,t){},AD0r:function(e,n,t){"use strict";var o=t("zLVn"),i=t("q1tI"),a=t.n(i),r=t("+p43"),d=t("pEiv"),s=t("0x2G"),c=t("5+Am"),l=t("/2u0"),u=function(e){var n,t=e.children,o=e.colorModeManager,a=e.portalZIndex,u=e.resetCSS,m=void 0===u||u,v=e.theme,b=void 0===v?l.a:v;return i.createElement(c.c,{theme:b},i.createElement(r.b,{colorModeManager:o,useSystemColorMode:!!(null==(n=b.config)?void 0:n.useSystemColorMode)},m&&i.createElement(d.b,null),i.createElement(c.a,null),a?i.createElement(s.a,{zIndex:a},t):t))},m=t("v7Hm"),v=t("TZad"),b=t("MUpH"),f=t("qKvR");t("lfCk");function p(){var e=Object(b.a)(['\n        /*\n        This will hide the focus indicator if the element receives focus via the mouse,\n        but it will still show up on keyboard focus.\n        https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9\n      */\n        .js-focus-visible :focus:not([data-focus-visible-added]) {\n          outline: none;\n          box-shadow: none;\n        }\n        * {\n          border: 0;\n          margin: 0;\n          padding: 0;\n          box-sizing: border-box;\n          & :before {\n            box-sizing: border-box;\n          }\n        }\n\n        input:focus {\n          border: inherit;\n        }\n        input:focus:invalid {\n          background: rgba(255, 224, 224, 1);\n        }\n        input:valid,\n        input:focus:valid {\n          background: rgba(226, 250, 219, 1);\n        }\n        a:active,\n        a:focus,\n        a:visited {\n          outline: 0;\n          border: none;\n          outline-style: none;\n          -moz-outline-style: none;\n          text-decoration: none;\n          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;\n          -moz-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;\n          -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;\n        }\n        a:hover {\n          text-decoration: none;\n        }\n        a[aria-current="page"].nav-link {\n          color: #1a5eef;\n          background: #d9e4fd;\n          border-radius: 5px;\n          pointer-events: none;\n        }\n        a {\n          color: inherit;\n        }\n        html,\n        body {\n          font-size: 16px;\n          max-width: 100vw;\n          height: 100%;\n          box-sizing: border-box;\n          scroll-behavior: smooth;\n          font-family: "Encode Sans", sans-serif;\n        }\n        body {\n          margin: 0;\n          padding: 0;\n          line-height: 1.35em;\n          text-rendering: optimizeLegibility;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n          -webkit-overflow-scrolling: touch;\n          max-width: 100%;\n          height: 100%;\n        }\n        #content-wrapper {\n          display: flex;\n          flex-direction: column;\n          max-width: 100%;\n          overflow-x: hidden;\n          z-index: 0;\n        }\n        header,\n        footer {\n          position: fixed;\n          width: 100%;\n          z-index: 1500;\n        }\n        header {\n          top: 0;\n        }\n        main {\n          flex: 1 0 auto;\n          overflow: auto;\n          max-width: 100%;\n          overflow-x: hidden;\n        }\n        footer {\n          bottom: 0;\n        }\n      ']);return p=function(){return e},e}var h=function(){return a.a.createElement(f.a,{styles:Object(f.c)(p())})},E=t("vrFN"),w=t("Kvkj"),g=t("TUDN"),x=t("RCw/"),y=t("6vW9");t("+5i3"),n.a=function(e){var n=e.header,t=void 0===n||n,i=e.prefooter,d=void 0===i||i,s=e.seo,c=e.allowPanelUpdate,l=void 0!==c&&c,b=e.children,f=Object(o.a)(e,["header","prefooter","seo","allowPanelUpdate","children"]),p=Object(r.c)().colorMode,L=Object(g.a)(),T=L.title,N=L.brandColors,O=Object.assign({},v.a,{colors:Object.assign({},v.a.colors,{brand:Object.assign({},v.a.colors.brand,N)})});return y.e&&console.log("⭕️themeUpdate",O),a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(E.a,{seo:Object.assign({siteTitle:T},s)}),a.a.createElement(u,{resetCSS:!0,theme:O},a.a.createElement(w.l,null),a.a.createElement(x.b,{allowPanelUpdate:l},a.a.createElement(w.p,null,a.a.createElement(w.r,null)),a.a.createElement(m.a,{id:"content-wrapper",color:"mode."+p+".text",fontFamily:"body"},t&&a.a.createElement(w.j,{siteTitle:T,siteTagline:null==s?void 0:s.siteTagline}),a.a.createElement(m.a,Object.assign({as:"main"},f,{mt:10}),b))),d&&a.a.createElement(w.c,{className:"pre-footer",fluid:!0,bg:"bg",py:12,mb:[12,null,0]},a.a.createElement(w.m,null)),a.a.createElement(w.i,{siteTitle:T.toUpperCase(),siteTagline:""})))}},lfCk:function(e,n,t){!function(){"use strict";function e(e){var n=!0,t=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){n=!1}function s(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(n=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(t){t.metaKey||t.altKey||t.ctrlKey||(a(e.activeElement)&&r(e.activeElement),n=!0)}),!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(t&&(n=!0),s())}),!0),s(),e.addEventListener("focus",(function(e){var t,o,d;a(e.target)&&(n||(t=e.target,o=t.type,"INPUT"===(d=t.tagName)&&i[o]&&!t.readOnly||"TEXTAREA"===d&&!t.readOnly||t.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var n;a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(t=!0,window.clearTimeout(o),o=window.setTimeout((function(){t=!1}),100),(n=e.target).hasAttribute("data-focus-visible-added")&&(n.classList.remove("focus-visible"),n.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var n;window.applyFocusVisiblePolyfill=e;try{n=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(n)}"undefined"!=typeof document&&e(document)}()},w2l6:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),i=t.n(o),a=t("AD0r");n.default=function(){return i.a.createElement(a.a,{seo:{siteTitle:"404",siteTagline:"Page Not Found"}},i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-79fa19cc0a6d6d4687d1.js.map
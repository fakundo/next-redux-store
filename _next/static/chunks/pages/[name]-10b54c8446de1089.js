(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{195:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},458:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[name]",function(){return i(7429)}])},3718:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(195).Z,a=i(4566).Z,o=i(9788).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,l=e.unoptimized,s=void 0!==l&&l,m=e.priority,p=void 0!==m&&m,w=e.loading,j=e.lazyRoot,_=void 0===j?null:j,E=e.lazyBoundary,I=e.className,L=e.quality,R=e.width,N=e.height,O=e.style,C=e.objectFit,q=e.objectPosition,P=e.onLoadingComplete,B=e.placeholder,M=void 0===B?"empty":B,W=e.blurDataURL,F=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),Z=d.useContext(h.ImageConfigContext),D=d.useMemo((function(){var e=y||Z||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:i})}),[Z]),G=F,H=i?"responsive":"intrinsic";"layout"in G&&(G.layout&&(H=G.layout),delete G.layout);var T=A;if("loader"in G){if(G.loader){var U=G.loader;T=function(e){e.config;var t=c(e,["config"]);return U(t)}}delete G.loader}var V="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var J=z(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,V=J.src,(!H||"fill"!==H)&&(N=N||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!p&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:V).startsWith("data:")||t.startsWith("blob:"))&&(s=!0,Q=!1);b.has(t)&&(Q=!1);D.unoptimized&&(s=!0);var X,K=a(d.useState(!1),2),Y=K[0],$=K[1],ee=a(g.useIntersection({rootRef:_,rootMargin:E||"200px",disabled:!Q}),3),te=ee[0],ie=ee[1],ne=ee[2],ae=!Q||ie,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},re={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:q},ce=x(R),de=x(N),ue=x(L);0;var fe=Object.assign({},O,se),ge="blur"!==M||Y?{}:{backgroundSize:C||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===H)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof de){var he=de/ce,me=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===H?(oe.display="block",oe.position="relative",le=!0,re.paddingTop=me):"intrinsic"===H?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",le=!0,re.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===H&&(oe.display="inline-block",oe.position="relative",oe.width=ce,oe.height=de)}else 0;var pe={src:v,srcSet:void 0,sizes:void 0};ae&&(pe=S({config:D,src:t,unoptimized:s,layout:H,width:ce,quality:ue,sizes:i,loader:T}));var ye=t;0;var be,ve="imagesrcset",we="imagesizes";ve="imageSrcSet",we="imageSizes";var ze=(n(be={},ve,pe.srcSet),n(be,we,pe.sizes),n(be,"crossOrigin",G.crossOrigin),be),Se=d.default.useLayoutEffect,xe=d.useRef(P),Ae=d.useRef(t);d.useEffect((function(){xe.current=P}),[P]),Se((function(){Ae.current!==t&&(ne(),Ae.current=t)}),[ne,t]);var je=r({isLazy:Q,imgAttributes:pe,heightInt:de,widthInt:ce,qualityInt:ue,layout:H,className:I,imgStyle:fe,blurStyle:ge,loading:w,config:D,unoptimized:s,placeholder:M,loader:T,srcString:ye,onLoadingCompleteRef:xe,setBlurComplete:$,setIntersection:te,isVisible:ae,noscriptSizes:i},G);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:oe},le?d.default.createElement("span",{style:re},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(k,Object.assign({},je))),p?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+pe.src+pe.srcSet+pe.sizes,rel:"preload",as:"image",href:pe.srcSet?void 0:pe.src},ze))):null)};var r=i(9419).Z,l=i(3903).Z,s=i(199).Z,c=i(5154).Z,d=s(i(2784)),u=l(i(5913)),f=i(8113),g=i(2030),h=i(1),m=(i(4750),i(583));function p(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next-redux-store/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,a=e.quality,o=new URL("".concat(t.path).concat(p(i))),r=o.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),a&&r.set("q",a.toString()),o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(n).concat(p(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,a=e.layout,r=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var a=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,o(c));return{widths:r.filter((function(e){return e>=a[0]*u})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:a,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,a,s),u=d.widths,f=d.kind,g=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({config:t,src:i,quality:l,width:u[g]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function j(e,t,i,n,a,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&o(!0),null==a?void 0:a.current)){var i=e.naturalWidth,r=e.naturalHeight;a.current({naturalWidth:i,naturalHeight:r})}})))}var k=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,a=e.layout,o=e.className,l=e.imgStyle,s=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,h=e.srcString,m=e.config,p=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,x=e.onError,A=(e.isVisible,e.noscriptSizes),k=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},k,t,{decoding:"async","data-nimg":a,className:o,style:r({},l,s),ref:d.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&j(e,h,0,f,b,v)}),[w,h,a,f,b,v]),onLoad:function(e){j(e.currentTarget,h,0,f,b,v),z&&z(e)},onError:function(e){"blur"===f&&v(!0),x&&x(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},k,S({config:m,src:h,unoptimized:p,layout:a,width:i,quality:n,sizes:A,loader:y}),{decoding:"async","data-nimg":a,style:l,className:o,loading:g}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7429:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return c},default:function(){return d}});var n=i(2322),a=i(9097),o=i.n(a),r=i(5986),l=i(6577),s=i.n(l),c=!0;function d(e){var t=e.name,i=r.Z.useGetPokemonByNameQuery({name:t});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Pokemon"}),(0,n.jsx)("hr",{}),(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("a",{children:"Go back"})}),(0,n.jsx)("hr",{}),i.isLoading&&(0,n.jsx)(n.Fragment,{children:"loading pokemon"}),i.isError&&(0,n.jsx)(n.Fragment,{children:"loading error"}),i.isSuccess&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:i.data.name}),(0,n.jsx)(s(),{src:i.data.sprites.front_default,alt:i.data.name,height:96,width:96})]}),(0,n.jsx)("hr",{}),"Check HTML of this page."]})}},6577:function(e,t,i){e.exports=i(3718)}},function(e){e.O(0,[97,774,888,179],(function(){return t=458,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5679],{8212:function(oe,T,i){"use strict";i.d(T,{Z:function(){return g}});var f=i(28991),C=i(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},le=r,F=i(27029),P=function(ie,se){return C.createElement(F.Z,(0,f.Z)((0,f.Z)({},ie),{},{ref:se,icon:le}))};P.displayName="EditOutlined";var g=C.forwardRef(P)},47828:function(){},8255:function(oe,T,i){"use strict";i.d(T,{Z:function(){return Qt}});var f=i(22122),C=i(96156),r=i(67294),le=i(94184),F=i.n(le),P=i(17799),g=i(65632),D=i(10899),ie=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},se=function(n,a){var t=n.prefixCls,o=n.component,u=o===void 0?"article":o,p=n.className,v=n["aria-label"],w=n.setContentRef,L=n.children,x=ie(n,["prefixCls","component","className","aria-label","setContentRef","children"]),A=r.useContext(g.E_),$=A.getPrefixCls,W=A.direction,S=a;w&&((0,D.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),S=(0,P.sQ)(a,w));var k=u,j=$("typography",t),E=F()(j,(0,C.Z)({},"".concat(j,"-rtl"),W==="rtl"),p);return r.createElement(k,(0,f.Z)({className:E,"aria-label":v,ref:S},x),L)},ne=r.forwardRef(se);ne.displayName="Typography";var X=ne,b=X,U=i(90484),ge=i(10366),d=i(28481),ve=i(5663),Le=i(37419),it=i(20640),st=i.n(it),ct=i(8212),ut=i(79508),dt=i(99165),ft=i(6925),Me=i(70526),vt=(0,Me.Z)()?r.useLayoutEffect:r.useEffect,Ee=vt,pt=i(42051),Ie=i(34952),De=function(n){if((0,Me.Z)()&&window.document.documentElement){var a=Array.isArray(n)?n:[n],t=window.document.documentElement;return a.some(function(o){return o in t.style})}return!1},yt=function(n,a){if(!De(n))return!1;var t=document.createElement("div"),o=t.style[n];return t.style[n]=a,t.style[n]!==o};function Ne(e,n){return!Array.isArray(e)&&n!==void 0?yt(e,n):De(e)}var Ze=i(61580),Ae=i(92389),$e=i(28991),mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},gt=mt,Et=i(27029),je=function(n,a){return r.createElement(Et.Z,(0,$e.Z)((0,$e.Z)({},n),{},{ref:a,icon:gt}))};je.displayName="EnterOutlined";var ht=r.forwardRef(je),Ct=i(94418),bt=i(96159),St=function(n){var a=n.prefixCls,t=n["aria-label"],o=n.className,u=n.style,p=n.direction,v=n.maxLength,w=n.autoSize,L=w===void 0?!0:w,x=n.value,A=n.onSave,$=n.onCancel,W=n.onEnd,S=n.component,k=n.enterIcon,j=k===void 0?r.createElement(ht,null):k,E=r.useRef(),M=r.useRef(!1),H=r.useRef(),O=r.useState(x),re=(0,d.Z)(O,2),J=re[0],ae=re[1];r.useEffect(function(){ae(x)},[x]),r.useEffect(function(){if(E.current&&E.current.resizableTextArea){var m=E.current.resizableTextArea.textArea;m.focus();var h=m.value.length;m.setSelectionRange(h,h)}},[]);var Y=function(h){var Z=h.target;ae(Z.value.replace(/[\n\r]/g,""))},y=function(){M.current=!0},z=function(){M.current=!1},B=function(h){var Z=h.keyCode;M.current||(H.current=Z)},_=function(){A(J.trim())},ce=function(h){var Z=h.keyCode,ye=h.ctrlKey,de=h.altKey,V=h.metaKey,K=h.shiftKey;H.current===Z&&!M.current&&!ye&&!de&&!V&&!K&&(Z===Ae.Z.ENTER?(_(),W==null||W()):Z===Ae.Z.ESC&&$())},q=function(){_()},ue=S?"".concat(a,"-").concat(S):"",R=F()(a,"".concat(a,"-edit-content"),(0,C.Z)({},"".concat(a,"-rtl"),p==="rtl"),o,ue);return r.createElement("div",{className:R,style:u},r.createElement(Ct.Z,{ref:E,maxLength:v,value:J,onChange:Y,onKeyDown:B,onKeyUp:ce,onCompositionStart:y,onCompositionEnd:z,onBlur:q,"aria-label":t,rows:1,autoSize:L}),j!==null?(0,bt.Tm)(j,{className:"".concat(a,"-edit-content-confirm")}):null)},xt=St;function Te(e,n){return r.useMemo(function(){var a=!!e;return[a,(0,f.Z)((0,f.Z)({},n),a&&(0,U.Z)(e)==="object"?e:null)]},[e])}var Ot=function(e,n){var a=r.useRef(!1);r.useEffect(function(){a.current?e():a.current=!0},n)};function Ke(e){var n=(0,U.Z)(e);return n==="string"||n==="number"}function Rt(e){var n=0;return e.forEach(function(a){Ke(a)?n+=String(a).length:n+=1}),n}function ke(e,n){for(var a=0,t=[],o=0;o<e.length;o+=1){if(a===n)return t;var u=e[o],p=Ke(u),v=p?String(u).length:1,w=a+v;if(w>n){var L=n-a;return t.push(String(u).slice(0,L)),t}t.push(u),a=w}return e}var Zt=0,he=1,ze=2,Pe=3,Be=4,Tt=function(n){var a=n.enabledMeasure,t=n.children,o=n.text,u=n.width,p=n.rows,v=n.onEllipsis,w=r.useState([0,0,0]),L=(0,d.Z)(w,2),x=L[0],A=L[1],$=r.useState(Zt),W=(0,d.Z)($,2),S=W[0],k=W[1],j=(0,d.Z)(x,3),E=j[0],M=j[1],H=j[2],O=r.useState(0),re=(0,d.Z)(O,2),J=re[0],ae=re[1],Y=r.useRef(null),y=r.useRef(null),z=r.useMemo(function(){return(0,Le.Z)(o)},[o]),B=r.useMemo(function(){return Rt(z)},[z]),_=r.useMemo(function(){return!a||S!==Pe?t(z,!1):t(ke(z,M),M<B)},[a,S,t,z,M,B]);Ee(function(){a&&u&&B&&(k(he),A([0,Math.ceil(B/2),B]))},[a,u,o,B,p]),Ee(function(){var R;S===he&&ae(((R=Y.current)===null||R===void 0?void 0:R.offsetHeight)||0)},[S]),Ee(function(){var R,m;if(J){if(S===he){var h=((R=y.current)===null||R===void 0?void 0:R.offsetHeight)||0,Z=p*J;h<=Z?(k(Be),v(!1)):k(ze)}else if(S===ze)if(E!==H){var ye=((m=y.current)===null||m===void 0?void 0:m.offsetHeight)||0,de=p*J,V=E,K=H;E===H-1?K=E:ye<=de?V=M:K=M;var we=Math.ceil((V+K)/2);A([V,we,K])}else k(Pe),v(!0)}},[S,E,H,p,J]);var ce={width:u,whiteSpace:"normal",margin:0,padding:0},q=function(m,h,Z){return r.createElement("span",{"aria-hidden":!0,ref:h,style:(0,f.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},Z)},m)},ue=function(m,h){var Z=ke(z,m);return q(t(Z,!0),h,ce)};return r.createElement(r.Fragment,null,_,a&&S!==Pe&&S!==Be&&r.createElement(r.Fragment,null,q("lg",Y,{wordBreak:"keep-all",whiteSpace:"nowrap"}),S===he?q(t(z,!1),y,ce):ue(M,y)))},Pt=Tt,wt=function(n){var a=n.title,t=n.enabledEllipsis,o=n.isEllipsis,u=n.children;return!a||!t?u:r.createElement(Ze.Z,{title:a,visible:o?void 0:!1},u)},Lt=wt,Mt=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};function It(e,n){var a=e.mark,t=e.code,o=e.underline,u=e.delete,p=e.strong,v=e.keyboard,w=e.italic,L=n;function x(A,$){!A||(L=r.createElement($,{},L))}return x(p,"strong"),x(o,"u"),x(u,"del"),x(t,"code"),x(a,"mark"),x(v,"kbd"),x(w,"i"),L}function Ce(e,n,a){return e===!0||e===void 0?n:e||a&&n}function Ue(e){return Array.isArray(e)?e:[e]}var Dt="...",Nt=r.forwardRef(function(e,n){var a=e.prefixCls,t=e.className,o=e.style,u=e.type,p=e.disabled,v=e.children,w=e.ellipsis,L=e.editable,x=e.copyable,A=e.component,$=e.title,W=Mt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),S=r.useContext(g.E_),k=S.getPrefixCls,j=S.direction,E=(0,pt.E)("Text")[0],M=r.useRef(null),H=r.useRef(null),O=k("typography",a),re=(0,ge.Z)(W,["mark","code","delete","underline","strong","keyboard","italic"]),J=Te(L),ae=(0,d.Z)(J,2),Y=ae[0],y=ae[1],z=(0,ve.Z)(!1,{value:y.editing}),B=(0,d.Z)(z,2),_=B[0],ce=B[1],q=y.triggerType,ue=q===void 0?["icon"]:q,R=function(l){var s;l&&((s=y.onStart)===null||s===void 0||s.call(y)),ce(l)};Ot(function(){var c;_||(c=H.current)===null||c===void 0||c.focus()},[_]);var m=function(l){l==null||l.preventDefault(),R(!0)},h=function(l){var s;(s=y.onChange)===null||s===void 0||s.call(y,l),R(!1)},Z=function(){var l;(l=y.onCancel)===null||l===void 0||l.call(y),R(!1)},ye=Te(x),de=(0,d.Z)(ye,2),V=de[0],K=de[1],we=r.useState(!1),We=(0,d.Z)(we,2),Se=We[0],He=We[1],Fe=r.useRef(),Je=function(){clearTimeout(Fe.current)},Gt=function(l){var s;l==null||l.preventDefault(),l==null||l.stopPropagation(),st()(K.text||String(v)||""),He(!0),Je(),Fe.current=setTimeout(function(){He(!1)},3e3),(s=K.onCopy)===null||s===void 0||s.call(K,l)};r.useEffect(function(){return Je},[]);var Xt=r.useState(!1),Ve=(0,d.Z)(Xt,2),Qe=Ve[0],Yt=Ve[1],_t=r.useState(!1),Ge=(0,d.Z)(_t,2),Xe=Ge[0],qt=Ge[1],en=r.useState(!1),Ye=(0,d.Z)(en,2),tn=Ye[0],nn=Ye[1],rn=r.useState(!1),_e=(0,d.Z)(rn,2),qe=_e[0],an=_e[1],on=r.useState(!1),et=(0,d.Z)(on,2),tt=et[0],ln=et[1],sn=Te(w,{expandable:!1}),nt=(0,d.Z)(sn,2),ee=nt[0],I=nt[1],Q=ee&&!tn,rt=I.rows,fe=rt===void 0?1:rt,xe=r.useMemo(function(){return!Q||I.suffix!==void 0||I.onEllipsis||I.expandable||Y||V},[Q,I,Y,V]);Ee(function(){ee&&!xe&&(Yt(Ne("webkitLineClamp")),qt(Ne("textOverflow")))},[xe,ee]);var G=r.useMemo(function(){return xe?!1:fe===1?Xe:Qe},[xe,Xe,Qe]),at=Q&&(G?tt:qe),cn=Q&&fe===1&&G,Oe=Q&&fe>1&&G,un=function(l){var s;nn(!0),(s=I.onExpand)===null||s===void 0||s.call(I,l)},dn=r.useState(0),ot=(0,d.Z)(dn,2),fn=ot[0],vn=ot[1],pn=function(l){var s=l.offsetWidth;vn(s)},yn=function(l){var s;an(l),qe!==l&&((s=I.onEllipsis)===null||s===void 0||s.call(I,l))};r.useEffect(function(){var c=M.current;if(ee&&G&&c){var l=Oe?c.offsetHeight<c.scrollHeight:c.offsetWidth<c.scrollWidth;tt!==l&&ln(l)}},[ee,G,v,Oe]);var Re=I.tooltip===!0?v:I.tooltip,lt=r.useMemo(function(){var c=function(s){return["string","number"].includes((0,U.Z)(s))};if(!(!ee||G)){if(c(v))return v;if(c($))return $;if(c(Re))return Re}},[ee,G,$,Re,at]);if(_)return r.createElement(xt,{value:typeof v=="string"?v:"",onSave:h,onCancel:Z,onEnd:y.onEnd,prefixCls:O,className:t,style:o,direction:j,component:A,maxLength:y.maxLength,autoSize:y.autoSize,enterIcon:y.enterIcon});var mn=function(){var l=I.expandable,s=I.symbol;if(!l)return null;var N;return s?N=s:N=E.expand,r.createElement("a",{key:"expand",className:"".concat(O,"-expand"),onClick:un,"aria-label":E.expand},N)},gn=function(){if(!!Y){var l=y.icon,s=y.tooltip,N=(0,Le.Z)(s)[0]||E.edit,te=typeof N=="string"?N:"";return ue.includes("icon")?r.createElement(Ze.Z,{key:"edit",title:s===!1?"":N},r.createElement(Ie.Z,{ref:H,className:"".concat(O,"-edit"),onClick:m,"aria-label":te},l||r.createElement(ct.Z,{role:"button"}))):null}},En=function(){if(!!V){var l=K.tooltips,s=K.icon,N=Ue(l),te=Ue(s),me=Se?Ce(N[1],E.copied):Ce(N[0],E.copy),bn=Se?E.copied:E.copy,Sn=typeof me=="string"?me:bn;return r.createElement(Ze.Z,{key:"copy",title:me},r.createElement(Ie.Z,{className:F()("".concat(O,"-copy"),Se&&"".concat(O,"-copy-success")),onClick:Gt,"aria-label":Sn},Se?Ce(te[1],r.createElement(ut.Z,null),!0):Ce(te[0],r.createElement(dt.Z,null),!0)))}},hn=function(l){return[l&&mn(),gn(),En()]},Cn=function(l){return[l&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Dt),I.suffix,hn(l)]};return r.createElement(ft.Z,{onResize:pn,disabled:!Q||G},function(c){var l;return r.createElement(Lt,{title:Re,enabledEllipsis:Q,isEllipsis:at},r.createElement(b,(0,f.Z)({className:F()((l={},(0,C.Z)(l,"".concat(O,"-").concat(u),u),(0,C.Z)(l,"".concat(O,"-disabled"),p),(0,C.Z)(l,"".concat(O,"-ellipsis"),ee),(0,C.Z)(l,"".concat(O,"-single-line"),Q&&fe===1),(0,C.Z)(l,"".concat(O,"-ellipsis-single-line"),cn),(0,C.Z)(l,"".concat(O,"-ellipsis-multiple-line"),Oe),l),t),style:(0,f.Z)((0,f.Z)({},o),{WebkitLineClamp:Oe?fe:void 0}),component:A,ref:(0,P.sQ)(c,M,n),direction:j,onClick:ue.includes("text")?m:null,"aria-label":lt,title:$},re),r.createElement(Pt,{enabledMeasure:Q&&!G,text:v,rows:fe,width:fn,onEllipsis:yn},function(s,N){var te=s;s.length&&N&&lt&&(te=r.createElement("span",{key:"show-content","aria-hidden":!0},te));var me=It(e,r.createElement(r.Fragment,null,te,Cn(N)));return me})))})}),be=Nt,At=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},$t=function(n,a){var t=n.ellipsis,o=At(n,["ellipsis"]),u=r.useMemo(function(){return t&&(0,U.Z)(t)==="object"?(0,ge.Z)(t,["expandable","rows"]):t},[t]);return(0,D.Z)((0,U.Z)(t)!=="object"||!t||!("expandable"in t)&&!("rows"in t),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),r.createElement(be,(0,f.Z)({ref:a},o,{ellipsis:u,component:"span"}))},jt=r.forwardRef($t),Kt=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},kt=function(n,a){var t=n.ellipsis,o=n.rel,u=Kt(n,["ellipsis","rel"]);(0,D.Z)((0,U.Z)(t)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var p=r.useRef(null);r.useImperativeHandle(a,function(){return p.current});var v=(0,f.Z)((0,f.Z)({},u),{rel:o===void 0&&u.target==="_blank"?"noopener noreferrer":o});return delete v.navigate,r.createElement(be,(0,f.Z)({},v,{ref:p,ellipsis:!!t,component:"a"}))},zt=r.forwardRef(kt),Bt=i(93355),Ut=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a},Wt=(0,Bt.a)(1,2,3,4,5),Ht=function(n,a){var t=n.level,o=t===void 0?1:t,u=Ut(n,["level"]),p;return Wt.indexOf(o)!==-1?p="h".concat(o):((0,D.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),p="h1"),r.createElement(be,(0,f.Z)({ref:a},u,{component:p}))},Ft=r.forwardRef(Ht),Jt=function(n,a){return r.createElement(be,(0,f.Z)({ref:a},n,{component:"div"}))},Vt=r.forwardRef(Jt),pe=b;pe.Text=jt,pe.Link=zt,pe.Title=Ft,pe.Paragraph=Vt;var Qt=pe},402:function(oe,T,i){"use strict";var f=i(38663),C=i.n(f),r=i(47828),le=i.n(r),F=i(22385),P=i(47673)},20640:function(oe,T,i){"use strict";var f=i(11742),C={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function le(P){var g=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return P.replace(/#{\s*key\s*}/g,g)}function F(P,g){var D,ie,se,ne,X,b,U=!1;g||(g={}),D=g.debug||!1;try{se=f(),ne=document.createRange(),X=document.getSelection(),b=document.createElement("span"),b.textContent=P,b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",function(d){if(d.stopPropagation(),g.format)if(d.preventDefault(),typeof d.clipboardData=="undefined"){D&&console.warn("unable to use e.clipboardData"),D&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ve=C[g.format]||C.default;window.clipboardData.setData(ve,P)}else d.clipboardData.clearData(),d.clipboardData.setData(g.format,P);g.onCopy&&(d.preventDefault(),g.onCopy(d.clipboardData))}),document.body.appendChild(b),ne.selectNodeContents(b),X.addRange(ne);var ge=document.execCommand("copy");if(!ge)throw new Error("copy command was unsuccessful");U=!0}catch(d){D&&console.error("unable to copy using execCommand: ",d),D&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(g.format||"text",P),g.onCopy&&g.onCopy(window.clipboardData),U=!0}catch(ve){D&&console.error("unable to copy using clipboardData: ",ve),D&&console.error("falling back to prompt"),ie=le("message"in g?g.message:r),window.prompt(ie,P)}}finally{X&&(typeof X.removeRange=="function"?X.removeRange(ne):X.removeAllRanges()),b&&document.body.removeChild(b),se()}return U}oe.exports=F},11742:function(oe){oe.exports=function(){var T=document.getSelection();if(!T.rangeCount)return function(){};for(var i=document.activeElement,f=[],C=0;C<T.rangeCount;C++)f.push(T.getRangeAt(C));switch(i.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":i.blur();break;default:i=null;break}return T.removeAllRanges(),function(){T.type==="Caret"&&T.removeAllRanges(),T.rangeCount||f.forEach(function(r){T.addRange(r)}),i&&i.focus()}}}}]);
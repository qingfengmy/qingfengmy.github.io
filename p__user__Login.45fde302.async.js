(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9531],{5966:function(ie,A,e){"use strict";var R=e(22122),h=e(81253),F=e(67294),t=e(7466),T=["fieldProps","proFieldProps"],v=["fieldProps","proFieldProps"],U="text",Fe=function(o){var a=o.fieldProps,b=o.proFieldProps,$=(0,h.Z)(o,T);return F.createElement(t.Z,(0,R.Z)({mode:"edit",valueType:U,fieldProps:a,filedConfig:{valueType:U},proFieldProps:b},$))},ce=function(o){var a=o.fieldProps,b=o.proFieldProps,$=(0,h.Z)(o,v);return F.createElement(t.Z,(0,R.Z)({mode:"edit",valueType:"password",fieldProps:a,proFieldProps:b,filedConfig:{valueType:U}},$))},G=Fe;G.Password=ce,G.displayName="ProFormComponent",A.Z=G},5894:function(ie,A,e){"use strict";e.d(A,{Z:function(){return ve}});var R=e(9715),h=e(93766),F=e(22122),t=e(67294),T=e(49111),v=e(19650),U=e(96156),Fe=e(84305),ce=e(39559),G=e(28481),f=e(28991),o=e(8812),a=e(66758),b=e(96138),$=e(56725),P=e(53621),ue=e(94184),te=e.n(ue),de=t.forwardRef(function(y,Le){var me=t.useContext(a.Z),X=me.groupProps,p=(0,f.Z)((0,f.Z)({},X),y),L=p.children,i=p.collapsible,C=p.defaultCollapsed,c=p.style,M=p.labelLayout,H=p.title,x=H===void 0?y.label:H,fe=p.tooltip,ae=p.align,w=ae===void 0?"start":ae,ne=p.direction,pe=p.size,Re=pe===void 0?32:pe,Ne=p.titleStyle,De=p.titleRender,ge=p.spaceProps,he=p.extra,Ie=p.autoFocus,Ke=(0,$.Z)(function(){return C||!1},{value:y.collapsed,onChange:y.onCollapse}),Se=(0,G.Z)(Ke,2),k=Se[0],$e=Se[1],be=(0,t.useContext)(ce.ZP.ConfigContext),re=be.getPrefixCls,se=re("pro-form-group"),Ce=i&&t.createElement(o.Z,{style:{marginRight:8},rotate:k?void 0:90}),Ee=t.createElement(P.Z,{label:Ce?t.createElement("div",null,Ce,x):x,tooltip:fe}),ze=De?De(Ee,y):Ee,Be=[],E=t.Children.toArray(L).map(function(D,je){var Ae;return t.isValidElement(D)&&(D==null||(Ae=D.props)===null||Ae===void 0?void 0:Ae.hidden)?(Be.push(D),null):je===0&&t.isValidElement(D)&&Ie?t.cloneElement(D,(0,f.Z)((0,f.Z)({},D.props),{},{autoFocus:Ie})):D});return t.createElement("div",{className:te()(se,(0,U.Z)({},"".concat(se,"-twoLine"),M==="twoLine")),style:c,ref:Le},Be.length>0&&t.createElement("div",{style:{display:"none"}},Be),(x||fe||he)&&t.createElement("div",{className:"".concat(se,"-title"),style:Ne,onClick:function(){$e(!k)}},he?t.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},ze,t.createElement("span",{onClick:function(je){return je.stopPropagation()}},he)):ze),i&&k?null:t.createElement(v.Z,(0,F.Z)({},ge,{className:"".concat(se,"-container"),size:Re,align:w,direction:ne,style:(0,f.Z)({rowGap:0},ge==null?void 0:ge.style)}),E))});de.displayName="ProForm-Group";var Te=de,K=e(52241),J=e(7525);function Q(y){return t.createElement(K.Z,(0,F.Z)({layout:"vertical",submitter:{render:function(me,X){return X.reverse()}},contentRender:function(me,X){return t.createElement(t.Fragment,null,me,X)}},y))}Q.Group=Te,Q.useForm=h.Z.useForm,Q.Item=J.Z;var ve=Q},53621:function(ie,A,e){"use strict";var R=e(22385),h=e(69713),F=e(96156),t=e(84305),T=e(39559),v=e(67294),U=e(68628),Fe=e(47369),ce=e.n(Fe),G=e(94184),f=e.n(G),o=function(b){var $=b.label,P=b.tooltip,ue=b.ellipsis,te=b.subTitle,de=(0,v.useContext)(T.ZP.ConfigContext),Te=de.getPrefixCls;if(!P&&!te)return v.createElement(v.Fragment,null,$);var K=Te("pro-core-label-tip"),J=typeof P=="string"||v.isValidElement(P)?{title:P}:P,Q=(J==null?void 0:J.icon)||v.createElement(U.Z,null);return v.createElement("div",{className:K,onMouseDown:function(y){return y.stopPropagation()},onMouseLeave:function(y){return y.stopPropagation()},onMouseMove:function(y){return y.stopPropagation()}},v.createElement("div",{className:f()("".concat(K,"-title"),(0,F.Z)({},"".concat(K,"-title-ellipsis"),ue))},$),te&&v.createElement("div",{className:"".concat(K,"-subtitle")},te),P&&v.createElement(h.Z,J,v.createElement("span",{className:"".concat(K,"-icon")},Q)))};A.Z=v.memo(o)},34687:function(ie){ie.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",icon:"icon___rzGKO"}},96138:function(){},32384:function(){},47369:function(){},3178:function(){},45038:function(ie,A,e){"use strict";e.r(A),e.d(A,{default:function(){return rt}});var R=e(18106),h=e(51752),F=e(34792),t=e(48086),T=e(11849),v=e(3182),U=e(2824),Fe=e(17462),ce=e(76772),G=e(94043),f=e.n(G),o=e(28991),a=e(67294),b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 00960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z"}}]},name:"alipay-circle",theme:"outlined"},$=b,P=e(27029),ue=function(l,d){return a.createElement(P.Z,(0,o.Z)((0,o.Z)({},l),{},{ref:d,icon:$}))};ue.displayName="AlipayCircleOutlined";var te=a.forwardRef(ue),de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 110-98.8zM366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5 32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2 23.8 23.9 20.7 56.8 6.7 100.1zm427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1 43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5 46.5-14.4 38.8 94.9-57.3 23.9-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8 6.8 10.8 24.2 12.6 35.3 13.1 1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2-10.9 4.4-22 9.2-33.6 14.2-11.2 14.3-24.2 29-38.7 43.5.5.8-50-28.4-50-28.4 52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7z"}}]},name:"taobao-circle",theme:"outlined"},Te=de,K=function(l,d){return a.createElement(P.Z,(0,o.Z)((0,o.Z)({},l),{},{ref:d,icon:Te}))};K.displayName="TaobaoCircleOutlined";var J=a.forwardRef(K),Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1.7 9.6 13.7 8.6 32.8-.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5.2 69.5-99.7 156.9-249.8 156.9zm207.3-290.8a34.9 34.9 0 00-7.2-34.1 34.68 34.68 0 00-33.1-10.7 18.24 18.24 0 01-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 01-22.9 11.7 18.18 18.18 0 01-11.8-22.9zm106 34.3s0 .1 0 0a21.1 21.1 0 01-26.6 13.7 21.19 21.19 0 01-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 00-98.9-32.1 21.14 21.14 0 01-25.1-16.3 21.07 21.07 0 0116.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2zm-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4zm80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5zm-93-32.2c-14.2-5.9-32.4.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zm34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z"}}]},name:"weibo-circle",theme:"outlined"},ve=Q,y=function(l,d){return a.createElement(P.Z,(0,o.Z)((0,o.Z)({},l),{},{ref:d,icon:ve}))};y.displayName="WeiboCircleOutlined";var Le=a.forwardRef(y),me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},X=me,p=function(l,d){return a.createElement(P.Z,(0,o.Z)((0,o.Z)({},l),{},{ref:d,icon:X}))};p.displayName="LockOutlined";var L=a.forwardRef(p),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},C=i,c=function(l,d){return a.createElement(P.Z,(0,o.Z)((0,o.Z)({},l),{},{ref:d,icon:C}))};c.displayName="MobileOutlined";var M=a.forwardRef(c),H=e(89366),x=e(22122),fe=e(84305),ae=e(39559),w=e(81253),ne=e(5894),pe=e(94237),Re=e(32384),Ne=["logo","message","title","subTitle","actions","children"];function De(r){var l=r.logo,d=r.message,I=r.title,z=r.subTitle,Pe=r.actions,ye=r.children,_=(0,w.Z)(r,Ne),Me=(0,pe.YB)(),Ze=(0,o.Z)({searchConfig:{submitText:Me.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(Ue,Oe){return Oe.pop()},submitButtonProps:{size:"large",style:{width:"100%"}}},_.submitter),xe=(0,a.useContext)(ae.ZP.ConfigContext),We=xe.getPrefixCls("pro-form-login"),m=function(Ue){return"".concat(We,"-").concat(Ue)},le=(0,a.useMemo)(function(){return l?typeof l=="string"?a.createElement("img",{src:l}):l:null},[l]);return a.createElement("div",{className:m("container")},a.createElement("div",{className:m("top")},I||le?a.createElement("div",{className:m("header")},le?a.createElement("span",{className:m("logo")},le):null,I?a.createElement("span",{className:m("title")},I):null):null,z?a.createElement("div",{className:m("desc")},z):null),a.createElement("div",{className:m("main")},a.createElement(ne.Z,(0,x.Z)({isKeyPressSubmit:!0,submitter:Ze},_),d,ye),Pe?a.createElement("div",{className:m("other")},Pe):null))}var ge=De,he=e(9715),Ie=e(93766),Ke=e(57663),Se=e(71577),k=e(47673),$e=e(4107),be=e(87757),re=e.n(be),se=e(92137),Ce=e(28481),Ee=e(64893),ze=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],Be=a.forwardRef(function(r,l){var d=(0,a.useState)(r.countDown||60),I=(0,Ce.Z)(d,2),z=I[0],Pe=I[1],ye=(0,a.useState)(!1),_=(0,Ce.Z)(ye,2),Me=_[0],Ze=_[1],xe=(0,a.useState)(),We=(0,Ce.Z)(xe,2),m=We[0],le=We[1],Ye=r.rules,Ue=r.name,Oe=r.phoneName,W=r.fieldProps,O=r.captchaTextRender,S=O===void 0?function(N,Y){return N?"".concat(Y," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:O,B=r.captchaProps,V=(0,w.Z)(r,ze),g=function(){var N=(0,se.Z)(re().mark(function Y(ee){return re().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,le(!0),s.next=4,V.onGetCaptcha(ee);case 4:le(!1),Ze(!0),s.next=13;break;case 8:s.prev=8,s.t0=s.catch(0),Ze(!1),le(!1),console.log(s.t0);case 13:case"end":return s.stop()}},Y,null,[[0,8]])}));return function(ee){return N.apply(this,arguments)}}();return(0,a.useEffect)(function(){var N=0,Y=r.countDown;return Me&&(N=window.setInterval(function(){Pe(function(ee){return ee<=1?(Ze(!1),clearInterval(N),Y||60):ee-1})},1e3)),function(){return clearInterval(N)}},[Me]),a.createElement(Ie.Z.Item,{noStyle:!0,shouldUpdate:!0},function(N){var Y=N.getFieldValue,ee=N.validateFields;return a.createElement("div",{style:(0,o.Z)((0,o.Z)({},W==null?void 0:W.style),{},{display:"flex",alignItems:"center"}),ref:l},a.createElement($e.Z,(0,x.Z)({},W,{style:{flex:1,transition:"width .3s",marginRight:8}})),a.createElement(Se.Z,(0,x.Z)({style:{display:"block"},disabled:Me,loading:m},B,{onClick:(0,se.Z)(re().mark(function ke(){var s;return re().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(j.prev=0,!Oe){j.next=9;break}return j.next=4,ee([Oe].flat(1));case 4:return s=Y([Oe].flat(1)),j.next=7,g(s);case 7:j.next=11;break;case 9:return j.next=11,g("");case 11:j.next=16;break;case 13:j.prev=13,j.t0=j.catch(0),console.log(j.t0);case 16:case"end":return j.stop()}},ke,null,[[0,13]])}))}),S(Me,z)))})}),E=(0,Ee.Z)(Be),D=e(63185),je=e(9676),Ae=e(7466),He=e(22270),Je=["options","fieldProps","proFieldProps","valueEnum"],Qe=a.forwardRef(function(r,l){var d=r.options,I=r.fieldProps,z=r.proFieldProps,Pe=r.valueEnum,ye=(0,w.Z)(r,Je);return a.createElement(Ae.Z,(0,x.Z)({ref:l,valueType:"checkbox",mode:"edit",valueEnum:(0,He.h)(Pe,void 0),fieldProps:(0,o.Z)({options:d},I),proFieldProps:z},ye))}),Ge=a.forwardRef(function(r,l){var d=r.fieldProps,I=r.children;return a.createElement(je.Z,(0,x.Z)({ref:l},d),I)}),Xe=(0,Ee.Z)(Ge,{valuePropName:"checked"}),Ve=Xe;Ve.Group=Qe;var oe=Ve,Z=e(5966),u=e(21010),_e=e(71390),et=e(36571);function tt(r,l){return we.apply(this,arguments)}function we(){return we=(0,v.Z)(f().mark(function r(l,d){return f().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.abrupt("return",(0,u.WY)("/api/login/captcha",(0,T.Z)({method:"GET",params:(0,T.Z)({},l)},d||{})));case 1:case"end":return z.stop()}},r)})),we.apply(this,arguments)}var at=e(34687),q=e.n(at),n=e(85893),qe=function(l){var d=l.content;return(0,n.jsx)(ce.Z,{style:{marginBottom:24},message:d,type:"error",showIcon:!0})},nt=function(){var l=(0,a.useState)({}),d=(0,U.Z)(l,2),I=d[0],z=d[1],Pe=(0,a.useState)("account"),ye=(0,U.Z)(Pe,2),_=ye[0],Me=ye[1],Ze=(0,u.tT)("@@initialState"),xe=Ze.initialState,We=Ze.setInitialState,m=(0,u.YB)(),le=function(){var W=(0,v.Z)(f().mark(function O(){var S,B;return f().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,xe==null||(S=xe.fetchUserInfo)===null||S===void 0?void 0:S.call(xe);case 2:if(B=g.sent,!B){g.next=6;break}return g.next=6,We(function(N){return(0,T.Z)((0,T.Z)({},N),{},{currentUser:B})});case 6:case"end":return g.stop()}},O)}));return function(){return W.apply(this,arguments)}}(),Ye=function(){var W=(0,v.Z)(f().mark(function O(S){var B,V,g,N,Y,ee;return f().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,(0,et.x4)((0,T.Z)((0,T.Z)({},S),{},{type:_}));case 3:if(B=s.sent,B.status!=="ok"){s.next=15;break}return V=m.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),t.default.success(V),s.next=9,le();case 9:if(u.m8){s.next=11;break}return s.abrupt("return");case 11:return g=u.m8.location.query,N=g,Y=N.redirect,u.m8.push(Y||"/"),s.abrupt("return");case 15:console.log(B),z(B),s.next=23;break;case 19:s.prev=19,s.t0=s.catch(0),ee=m.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),t.default.error(ee);case 23:case"end":return s.stop()}},O,null,[[0,19]])}));return function(S){return W.apply(this,arguments)}}(),Ue=I.status,Oe=I.type;return(0,n.jsxs)("div",{className:q().container,children:[(0,n.jsx)("div",{className:q().lang,"data-lang":!0,children:u.pD&&(0,n.jsx)(u.pD,{})}),(0,n.jsx)("div",{className:q().content,children:(0,n.jsxs)(ge,{logo:(0,n.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"Ant Design",subTitle:m.formatMessage({id:"pages.layouts.userLayout.title"}),initialValues:{autoLogin:!0},actions:[(0,n.jsx)(u._H,{id:"pages.login.loginWith",defaultMessage:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"},"loginWith"),(0,n.jsx)(te,{className:q().icon},"AlipayCircleOutlined"),(0,n.jsx)(J,{className:q().icon},"TaobaoCircleOutlined"),(0,n.jsx)(Le,{className:q().icon},"WeiboCircleOutlined")],onFinish:function(){var W=(0,v.Z)(f().mark(function O(S){return f().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,Ye(S);case 2:case"end":return V.stop()}},O)}));return function(O){return W.apply(this,arguments)}}(),children:[(0,n.jsxs)(h.Z,{activeKey:_,onChange:Me,children:[(0,n.jsx)(h.Z.TabPane,{tab:m.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account"),(0,n.jsx)(h.Z.TabPane,{tab:m.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u624B\u673A\u53F7\u767B\u5F55"})},"mobile")]}),Ue==="error"&&Oe==="account"&&(0,n.jsx)(qe,{content:m.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),_==="account"&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z.Z,{name:"username",fieldProps:{size:"large",prefix:(0,n.jsx)(H.Z,{className:q().prefixIcon})},placeholder:m.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,n.jsx)(u._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,n.jsx)(Z.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,n.jsx)(L,{className:q().prefixIcon})},placeholder:m.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:(0,n.jsx)(u._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),Ue==="error"&&Oe==="mobile"&&(0,n.jsx)(qe,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),_==="mobile"&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Z.Z,{fieldProps:{size:"large",prefix:(0,n.jsx)(M,{className:q().prefixIcon})},name:"mobile",placeholder:m.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:(0,n.jsx)(u._H,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:(0,n.jsx)(u._H,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,n.jsx)(E,{fieldProps:{size:"large",prefix:(0,n.jsx)(L,{className:q().prefixIcon})},captchaProps:{size:"large"},placeholder:m.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(O,S){return O?"".concat(S," ").concat(m.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):m.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:(0,n.jsx)(u._H,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var W=(0,v.Z)(f().mark(function O(S){var B;return f().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,tt({phone:S});case 2:if(B=g.sent,B!==!1){g.next=5;break}return g.abrupt("return");case 5:t.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return g.stop()}},O)}));return function(O){return W.apply(this,arguments)}}()})]}),(0,n.jsxs)("div",{style:{marginBottom:24},children:[(0,n.jsx)(oe,{noStyle:!0,name:"autoLogin",children:(0,n.jsx)(u._H,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,n.jsx)("a",{style:{float:"right"},children:(0,n.jsx)(u._H,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801"})})]})]})}),(0,n.jsx)(_e.Z,{})]})},rt=nt},76772:function(ie,A,e){"use strict";e.d(A,{Z:function(){return p}});var R=e(22122),h=e(96156),F=e(28481),t=e(67294),T=e(54549),v=e(15873),U=e(57119),Fe=e(68628),ce=e(73218),G=e(38819),f=e(68855),o=e(40847),a=e(43061),b=e(60444),$=e(94184),P=e.n($),ue=e(65632),te=e(5467),de=e(6610),Te=e(5991),K=e(10379),J=e(60446),Q=function(L){(0,K.Z)(C,L);var i=(0,J.Z)(C);function C(){var c;return(0,de.Z)(this,C),c=i.apply(this,arguments),c.state={error:void 0,info:{componentStack:""}},c}return(0,Te.Z)(C,[{key:"componentDidCatch",value:function(M,H){this.setState({error:M,info:H})}},{key:"render",value:function(){var M=this.props,H=M.message,x=M.description,fe=M.children,ae=this.state,w=ae.error,ne=ae.info,pe=ne&&ne.componentStack?ne.componentStack:null,Re=typeof H=="undefined"?(w||"").toString():H,Ne=typeof x=="undefined"?pe:x;return w?t.createElement(p,{type:"error",message:Re,description:t.createElement("pre",null,Ne)}):fe}}]),C}(t.Component),ve=e(96159),y=function(L,i){var C={};for(var c in L)Object.prototype.hasOwnProperty.call(L,c)&&i.indexOf(c)<0&&(C[c]=L[c]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,c=Object.getOwnPropertySymbols(L);M<c.length;M++)i.indexOf(c[M])<0&&Object.prototype.propertyIsEnumerable.call(L,c[M])&&(C[c[M]]=L[c[M]]);return C},Le={success:G.Z,info:o.Z,error:a.Z,warning:f.Z},me={success:v.Z,info:Fe.Z,error:ce.Z,warning:U.Z},X=function(i){var C,c=i.description,M=i.prefixCls,H=i.message,x=i.banner,fe=i.className,ae=fe===void 0?"":fe,w=i.style,ne=i.onMouseEnter,pe=i.onMouseLeave,Re=i.onClick,Ne=i.afterClose,De=i.showIcon,ge=i.closable,he=i.closeText,Ie=i.closeIcon,Ke=Ie===void 0?t.createElement(T.Z,null):Ie,Se=i.action,k=y(i,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),$e=t.useState(!1),be=(0,F.Z)($e,2),re=be[0],se=be[1],Ce=t.useRef(),Ee=t.useContext(ue.E_),ze=Ee.getPrefixCls,Be=Ee.direction,E=ze("alert",M),D=function(Z){var u;se(!0),(u=k.onClose)===null||u===void 0||u.call(k,Z)},je=function(){var Z=k.type;return Z!==void 0?Z:x?"warning":"info"},Ae=he?!0:ge,He=je(),Je=function(){var Z=k.icon,u=(c?me:Le)[He]||null;return Z?(0,ve.wm)(Z,t.createElement("span",{className:"".concat(E,"-icon")},Z),function(){return{className:P()("".concat(E,"-icon"),(0,h.Z)({},Z.props.className,Z.props.className))}}):t.createElement(u,{className:"".concat(E,"-icon")})},Qe=function(){return Ae?t.createElement("button",{type:"button",onClick:D,className:"".concat(E,"-close-icon"),tabIndex:0},he?t.createElement("span",{className:"".concat(E,"-close-text")},he):Ke):null},Ge=x&&De===void 0?!0:De,Xe=P()(E,"".concat(E,"-").concat(He),(C={},(0,h.Z)(C,"".concat(E,"-with-description"),!!c),(0,h.Z)(C,"".concat(E,"-no-icon"),!Ge),(0,h.Z)(C,"".concat(E,"-banner"),!!x),(0,h.Z)(C,"".concat(E,"-rtl"),Be==="rtl"),C),ae),Ve=(0,te.Z)(k);return t.createElement(b.Z,{visible:!re,motionName:"".concat(E,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(Z){return{maxHeight:Z.offsetHeight}},onLeaveEnd:Ne},function(oe){var Z=oe.className,u=oe.style;return t.createElement("div",(0,R.Z)({ref:Ce,"data-show":!re,className:P()(Xe,Z),style:(0,R.Z)((0,R.Z)({},w),u),onMouseEnter:ne,onMouseLeave:pe,onClick:Re,role:"alert"},Ve),Ge?Je():null,t.createElement("div",{className:"".concat(E,"-content")},H?t.createElement("div",{className:"".concat(E,"-message")},H):null,c?t.createElement("div",{className:"".concat(E,"-description")},c):null),Se?t.createElement("div",{className:"".concat(E,"-action")},Se):null,Qe())})};X.ErrorBoundary=Q;var p=X},17462:function(ie,A,e){"use strict";var R=e(38663),h=e.n(R),F=e(3178),t=e.n(F)},97435:function(ie,A){"use strict";function e(R,h){for(var F=Object.assign({},R),t=0;t<h.length;t+=1){var T=h[t];delete F[T]}return F}A.Z=e}}]);

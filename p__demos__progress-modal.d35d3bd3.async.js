(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9274],{31698:function(y){y.exports={dot:"dot___3cIjJ",itemContainer:"itemContainer___1ALno",text:"text___25ymZ",textContainer:"textContainer___1FaI1",action:"action___2XdNd",bubbleBottom:"bubbleBottom___3mM3U"}},5369:function(y,C,e){"use strict";e.r(C),e.d(C,{default:function(){return b}});var G=e(57663),Z=e(71577),S=e(2824),L=e(58363),P=e(21010),T=e(67294),J=e(71194),M=e(77272),V=e(20228),B=e(11382),X=e(34669),D=e(54458),j=e(3182),O=e(69610),$=e(54941),I=e(81306),W=e(59206),A=e(94043),m=e.n(A),F=e(67030),N=e(7085),E=e(15873),R=e(96486),U=function(){return new Promise(function(v){return setTimeout(v,2e3)})},z=e(31698),p=e.n(z),r=e(85893),Y=function(x){(0,I.Z)(f,x);var v=(0,W.Z)(f);function f(d){var t;return(0,O.Z)(this,f),t=v.call(this,d),t.init=function(){setTimeout(function(){t.handleReset();var n=document.querySelector(".ant-progress");t.setState({progressWidth:n==null?void 0:n.clientWidth})},0)},t.start=(0,j.Z)(m().mark(function n(){var s,a;return m().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:s=t.state.defaultTexts,a=0;case 2:if(!(a<s.length)){i.next=8;break}return i.next=5,t.handleItem(s[a]);case 5:a++,i.next=2;break;case 8:case"end":return i.stop()}},n)})),t.handleItem=function(){var n=(0,j.Z)(m().mark(function s(a){var o,i,l,u;return m().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:o=t.state,i=o.percent,l=o.defaultTexts,u=i,t.setState({texts:l.slice(0,a.id+1)});case 3:return c.next=5,t.handlePercent(a.duration/20);case 5:u=c.sent;case 6:if(u<(a.id+1)*20){c.next=3;break}case 7:case"end":return c.stop()}},s)}));return function(s){return n.apply(this,arguments)}}(),t.handlePercent=function(n){return new Promise(function(s){setTimeout(function(){var a=t.state.percent;t.setState({percent:a+1},function(){return s(a+1)})},n)})},t.handleReset=function(){var n=t.state.defaultTextList,s=n===void 0?[]:n,a=(10+Math.random()*5)*1e3,o=a/s.length,i=0,l=s.map(function(u,h){return h>=s.length-1?{text:u,duration:a-i,id:h,loading:!0}:(i+=o*(.8+.4*Math.random()),{text:u,duration:o*(.8+.4*Math.random()),id:h,loading:!0})});t.setState({defaultTexts:l,texts:[],percent:0},t.start)},t.handleClear=function(){t.setState({texts:[],percent:0,defaultTexts:[],progressWidth:0,loading:!1,defaultTextList:[]})},t.state={texts:[],percent:0,progressWidth:0,loading:!1,defaultTextList:[],defaultTexts:[]},t}return(0,$.Z)(f,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t){var n=this,s=this.props.visible;s&&!t.visible&&(this.setState({loading:!0}),U().then(function(){n.setState({defaultTextList:["\u6653\u770B\u5929\u8272\u66AE\u770B\u4E91\uFF0C\u884C\u4E5F\u601D\u541B\uFF0C\u5750\u4E5F\u601D\u541B\u3002","\u613F\u6211\u5982\u661F\u541B\u5982\u6708\uFF0C\u591C\u591C\u6D41\u5149\u76F8\u768E\u6D01\u3002","\u6211\u6709\u6240\u5FF5\u4EBA\uFF0C\u9694\u5728\u8FDC\u8FDC\u4E61\uFF0C\u6211\u6709\u6240\u611F\u4E8B\uFF0C\u7ED3\u5728\u6DF1\u6DF1\u80A0\u3002","\u8D4C\u4E66\u6D88\u5F97\u6CFC\u8336\u9999\uFF0C\u5F53\u65F6\u53EA\u9053\u662F\u5BFB\u5E38\u3002","\u751F\u5E74\u4E0D\u6EE1\u767E\uFF0C\u5E38\u6000\u5343\u5C81\u5FE7\u3002"]},n.init)}).catch().finally(function(){return n.setState({loading:!1})}))}},{key:"render",value:function(){var t=this.props,n=t.visible,s=t.onCancel,a=t.onOk,o=this.state,i=o.texts,l=o.percent,u=o.progressWidth,h=o.loading,c=o.defaultTextList;return(0,r.jsx)(M.Z,{title:"\u667A\u80FD\u5206\u6790",width:588,visible:n,okText:"\u521B\u5EFA",onOk:a,onCancel:s,afterClose:this.handleClear,forceRender:!0,centered:!0,children:(0,r.jsx)(B.Z,{spinning:h,children:(0,r.jsxs)("div",{children:[(0,r.jsx)(F.Z,{animConfig:[{opacity:[1,0],translateY:[0,50]},{opacity:[1,0],translateY:[0,-50]}],style:{display:"flex",flexDirection:"column"},children:i.map(function(g){return(0,r.jsxs)("div",{className:p().itemContainer,children:[(0,r.jsx)("span",{className:p().text,children:g.text}),l<(g.id+1)*20?(0,r.jsx)(N.Z,{style:{color:"#7975ff",fontSize:16}}):(0,r.jsx)(E.Z,{style:{color:"#7975ff",fontSize:16}})]},g.id)})}),(0,r.jsx)("div",{className:p().bubbleBottom,id:"bubble",style:{display:(0,R.isEmpty)(c)?"none":"",marginLeft:l/100*u-20},children:l}),(0,r.jsx)(D.Z,{strokeLinecap:"round",percent:l,strokeColor:"#7579ff",showInfo:!1})]})})})}}]),f}(T.Component);function b(){var x=(0,T.useState)(!1),v=(0,S.Z)(x,2),f=v[0],d=v[1];return(0,r.jsx)(L.ZP,{header:{style:{borderBottom:"1px solid #ddd"},title:"svg",onBack:function(){return P.m8.push("/")}},children:(0,r.jsxs)("div",{children:[(0,r.jsx)(Z.Z,{type:"primary",onClick:function(){return d(!0)},children:"\u6253\u5F00"}),(0,r.jsx)(Y,{visible:f,onCancel:function(){return d(!1)},onOk:function(){return d(!1)}})]})})}}}]);
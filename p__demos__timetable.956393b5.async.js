(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3229],{53696:function(K,C,d){"use strict";d.r(C),d.d(C,{default:function(){return W}});var S=d(2824),B=d(75362),o=d(67294),T=d(21010),N=d(11849),E=d(86582),k=d(96486),Z=d(67607),e=d(85893),L=function(t){var n=t.selectableRef,c=t.data,u=c===void 0?{}:c,h=t.isSelecting,j=t.isSelected,v="";return h?v="byted-schedule-calendar-hovered":(j||u.checked)&&(v="byted-schedule-calendar-selected"),(0,e.jsx)("td",{ref:n,"data-week":u.week,"data-time":u.time,className:"byted-schedule-calendar-atom-time ".concat(v)},u.time)},M=(0,Z.Lr)(L),D=function(t){return t.reduce(function(n,c){var u=n.length>0?n[n.length-1]:{},h=[c.time,c.time+1];if(u.week!==c.week){var j={week:c.week,weekLabel:["\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D","\u661F\u671F\u65E5"][c.week],time:[h]};n.push(j)}else{var v,g=u.time,m=g===void 0?[]:g,x=(v=m==null?void 0:m.findIndex(function(a){return c.time>=a[0]&&c.time<=a[1]}))!==null&&v!==void 0?v:-1;if(x>=0){var y=(0,S.Z)(m[x],2),F=y[0],R=y[1],w=Math.min(F,h[0]),s=Math.max(R,h[1]);m[x]=[w,s]}else m.push(h);var f=m.reduce(function(a,l){var i=a.length?a[a.length-1]:[];if((0,k.isEmpty)(i))a.push(l);else if(l[0]>i[1])a.push(l);else{var r=Math.min(l[0],i[0]),p=Math.max(l[1],i[1]);i=[r,p]}return a},[]);u.time=f}return n.map(function(a){var l;return(0,N.Z)((0,N.Z)({},a),{},{timeLabel:(l=a.time)===null||l===void 0?void 0:l.map(function(i){var r=(0,S.Z)(i,2),p=r[0],H=r[1];return"".concat(A(p),"~").concat(A(H))}).join("\u3001")})})},[])},A=function(t){var n=t;return t%2==0?(n=t/2,n<10?"0".concat(n,":00"):"".concat(n,":00")):(n=Math.floor(t/2),n<10?"0".concat(n,":30"):"".concat(n,":30"))},P=function(t){var n=t.value,c=t.style,u=t.className,h=t.onChange,j=(0,o.useRef)((0,E.Z)(Array(24).keys())),v=(0,o.useRef)((0,E.Z)(Array(2*24*7).keys()).map(function(){return 0}).join("")),g=(0,o.useRef)(["\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D","\u661F\u671F\u65E5"]),m=(0,o.useRef)(),x=(0,o.useRef)([]),y=(0,o.useRef)(null),F=(0,o.useMemo)(function(){var s=((0,k.isNil)(n)?v.current:n).split("").map(function(i){return Number(i)}),f=0,a=0,l=s.map(function(i){var r={checked:i,week:f,time:a};return a+=1,a===48&&(f+=1,a=0),r});return y.current=l,x.current=D(l.filter(function(i){return i.checked})),l},[n]),R=(0,o.useCallback)(function(){h&&h(v.current)},[h]),w=(0,o.useCallback)(function(s){var f;if(!(0,k.isEmpty)(s)){var a=s.map(function(r){return r.props.data}),l=t.onChange,i=(f=y.current)===null||f===void 0?void 0:f.map(function(r){return a.find(function(p){return p.week===r.week&&p.time===r.time})?(0,N.Z)((0,N.Z)({},r),{},{checked:r.checked?0:1}):r}).map(function(r){return r.checked}).join("");l&&(l(i),m.current.clearSelection())}},[t]);return(0,e.jsx)("div",{className:"byted-weektime ".concat(u),style:c,children:(0,e.jsxs)("div",{className:"byted-schedule byted-schedule-normal",children:[(0,e.jsx)("span",{}),(0,e.jsxs)("div",{className:"byted-schedule-calendar",children:[(0,e.jsxs)("div",{className:"tableWrap",children:[(0,e.jsx)(Z.kn,{onSelectionFinish:w,ref:m,children:(0,e.jsxs)("table",{className:"byted-schedule-calendar-table",children:[(0,e.jsxs)("thead",{children:[(0,e.jsxs)("tr",{className:"byted-schedule-calendar-time-all",children:[(0,e.jsx)("th",{rowSpan:8,className:"byted-schedule-week-td",children:"\u661F\u671F/\u65F6\u95F4"}),(0,e.jsx)("th",{colSpan:24,className:"byted-schedule-calendar-time",children:"00:00 - 12:00"}),(0,e.jsx)("th",{colSpan:24,className:"byted-schedule-calendar-time",children:"12:00 - 24:00"})]}),(0,e.jsx)("tr",{className:"byted-schedule-calendar-time-item",children:j.current.map(function(s){return(0,e.jsx)("td",{colSpan:2,children:s},s)})})]}),(0,e.jsx)("tbody",{children:g.current.map(function(s,f){return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:s}),F.filter(function(a){return a.week===f}).map(function(a){return(0,e.jsx)(M,{data:a},a.time)})]},s)})})]})}),(0,e.jsx)("div",{style:{padding:"0 12px 0 19px",marginTop:1},children:(0,e.jsxs)("div",{className:"byted-schedule-table-tip",children:[(0,e.jsx)("div",{className:"clearfix",style:{margin:"8px 0"},children:(0,k.isEmpty)(x.current)?(0,e.jsx)("p",{className:"byted-schedule-no-selected-time",children:"\u53EF\u62D6\u52A8\u9F20\u6807\u9009\u62E9\u65F6\u95F4\u6BB5"}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"pull-left byted-schedule-tip-text",children:"\u5DF2\u9009\u62E9\u65F6\u95F4\u6BB5"}),(0,e.jsx)("div",{className:"pull-right byted-link byted-link-md",onClick:R,children:"\u6E05\u7A7A"})]})}),(0,e.jsx)("div",{className:"byted-schedule-selected-time",children:(0,e.jsx)("div",{children:x.current.map(function(s){return(0,e.jsxs)("p",{children:[(0,e.jsx)("span",{className:"byted-schedule-tip-text",children:s.weekLabel}),(0,e.jsx)("span",{children:s.timeLabel})]},s.weekLabel)})})})]})})]}),(0,e.jsx)("div",{className:"bui-schedule-tooltip byted-popover-wrapper",children:(0,e.jsxs)("div",{className:"bui-popper byted-popover",style:{width:"auto",display:"none"},children:[(0,e.jsx)("div",{"x-arrow":"",className:"bui-popover-arrow",style:{left:68}}),(0,e.jsx)("div",{className:"bui-popover-panel",children:(0,e.jsx)("div",{className:"bui-popover-body"})})]})})]})]})})},V=P;function W(){var b=(0,o.useState)(null),t=(0,S.Z)(b,2),n=t[0],c=t[1];return(0,e.jsx)(B.ZP,{header:{style:{borderBottom:"1px solid #ddd"},title:"svg",onBack:function(){return T.m8.push("/")}},children:(0,e.jsx)(V,{value:n,onChange:c})})}}}]);

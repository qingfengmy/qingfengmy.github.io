(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7607],{50543:function(L,m,v){"use strict";var d=this&&this.__extends||function(){var p=function(o,l){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var n in i)i.hasOwnProperty(n)&&(r[n]=i[n])},p(o,l)};return function(o,l){p(o,l);function r(){this.constructor=o}o.prototype=l===null?Object.create(l):(r.prototype=l.prototype,new r)}}(),h=this&&this.__assign||function(){return h=Object.assign||function(p){for(var o,l=1,r=arguments.length;l<r;l++){o=arguments[l];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(p[i]=o[i])}return p},h.apply(this,arguments)},a=this&&this.__importStar||function(p){if(p&&p.__esModule)return p;var o={};if(p!=null)for(var l in p)Object.hasOwnProperty.call(p,l)&&(o[l]=p[l]);return o.default=p,o};Object.defineProperty(m,"__esModule",{value:!0});var S=a(v(67294)),y=v(36996),g=v(87346);m.createSelectable=function(p){var o;return o=function(l){d(r,l);function r(){var i=l!==null&&l.apply(this,arguments)||this;return i.state={isSelected:i.props.isSelected,isSelecting:!1},i.node=null,i.bounds=null,i.updateBounds=function(n){i.bounds=y.getBoundsForNode(i.node,n)},i.getSelectableRef=function(n){i.node=n},i}return r.prototype.componentDidMount=function(){this.updateBounds(),this.context.selectable.register(this)},r.prototype.componentWillUnmount=function(){this.context.selectable.unregister(this)},r.prototype.render=function(){return S.default.createElement(p,h({},this.props,this.state,{selectableRef:this.getSelectableRef}))},r}(S.Component),o.contextType=g.SelectableGroupContext,o.defaultProps={isSelected:!1},o}},14907:function(L,m,v){"use strict";var d=this&&this.__extends||function(){var o=function(l,r){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var u in n)n.hasOwnProperty(u)&&(i[u]=n[u])},o(l,r)};return function(l,r){o(l,r);function i(){this.constructor=l}l.prototype=r===null?Object.create(r):(i.prototype=r.prototype,new i)}}(),h=this&&this.__assign||function(){return h=Object.assign||function(o){for(var l,r=1,i=arguments.length;r<i;r++){l=arguments[r];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(o[n]=l[n])}return o},h.apply(this,arguments)},a=this&&this.__rest||function(o,l){var r={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&l.indexOf(i)<0&&(r[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(o);n<i.length;n++)l.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(o,i[n])&&(r[i[n]]=o[i[n]]);return r},S=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var l={};if(o!=null)for(var r in o)Object.hasOwnProperty.call(o,r)&&(l[r]=o[r]);return l.default=o,l};Object.defineProperty(m,"__esModule",{value:!0});var y=S(v(67294)),g=v(87346),p=function(o){d(l,o);function l(){var r=o!==null&&o.apply(this,arguments)||this;return r.root=null,r.getRootRef=function(i){r.root=i},r}return l.prototype.componentDidMount=function(){this.root.addEventListener("mousedown",function(r){return r.stopPropagation()})},l.prototype.render=function(){var r=this.props,i=r.component,n=i===void 0?"div":i,u=r.children,e=r.className,t=a(r,["component","children","className"]),s=n;return y.default.createElement(s,h({ref:this.getRootRef,className:"selectable-select-all "+e,onClick:this.context.selectable.clearSelection},t),u)},l.contextType=g.SelectableGroupContext,l}(y.Component);m.DeselectAll=p},4307:function(L,m,v){"use strict";var d=this&&this.__extends||function(){var o=function(l,r){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var u in n)n.hasOwnProperty(u)&&(i[u]=n[u])},o(l,r)};return function(l,r){o(l,r);function i(){this.constructor=l}l.prototype=r===null?Object.create(r):(i.prototype=r.prototype,new i)}}(),h=this&&this.__assign||function(){return h=Object.assign||function(o){for(var l,r=1,i=arguments.length;r<i;r++){l=arguments[r];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(o[n]=l[n])}return o},h.apply(this,arguments)},a=this&&this.__rest||function(o,l){var r={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&l.indexOf(i)<0&&(r[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(o);n<i.length;n++)l.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(o,i[n])&&(r[i[n]]=o[i[n]]);return r},S=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var l={};if(o!=null)for(var r in o)Object.hasOwnProperty.call(o,r)&&(l[r]=o[r]);return l.default=o,l};Object.defineProperty(m,"__esModule",{value:!0});var y=S(v(67294)),g=v(87346),p=function(o){d(l,o);function l(){var r=o!==null&&o.apply(this,arguments)||this;return r.root=null,r.getRootRef=function(i){r.root=i},r}return l.prototype.componentDidMount=function(){this.root.addEventListener("mousedown",function(r){return r.stopPropagation()})},l.prototype.render=function(){var r=this.props,i=r.component,n=i===void 0?"div":i,u=r.children,e=r.className,t=e===void 0?"":e,s=a(r,["component","children","className"]),c=n;return y.default.createElement(c,h({ref:this.getRootRef,className:"selectable-select-all "+t,onClick:this.context.selectable.selectAll},s),u)},l.contextType=g.SelectableGroupContext,l}(y.Component);m.SelectAll=p},87346:function(L,m,v){"use strict";var d=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(m,"__esModule",{value:!0});var h=d(v(67294)),a=v(36996);m.SelectableGroupContext=h.default.createContext({selectable:{register:function(S){},unregister:function(S){},selectAll:a.noop,clearSelection:a.noop,getScrolledContainer:function(){return null}}})},74262:function(L,m,v){"use strict";var d=this&&this.__extends||function(){var n=function(u,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var c in s)s.hasOwnProperty(c)&&(t[c]=s[c])},n(u,e)};return function(u,e){n(u,e);function t(){this.constructor=u}u.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}}(),h=this&&this.__assign||function(){return h=Object.assign||function(n){for(var u,e=1,t=arguments.length;e<t;e++){u=arguments[e];for(var s in u)Object.prototype.hasOwnProperty.call(u,s)&&(n[s]=u[s])}return n},h.apply(this,arguments)},a=this&&this.__values||function(n){var u=typeof Symbol=="function"&&Symbol.iterator,e=u&&n[u],t=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&t>=n.length&&(n=void 0),{value:n&&n[t++],done:!n}}};throw new TypeError(u?"Object is not iterable.":"Symbol.iterator is not defined.")},S=this&&this.__read||function(n,u){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var t=e.call(n),s,c=[],f;try{for(;(u===void 0||u-- >0)&&!(s=t.next()).done;)c.push(s.value)}catch(_){f={error:_}}finally{try{s&&!s.done&&(e=t.return)&&e.call(t)}finally{if(f)throw f.error}}return c},y=this&&this.__spread||function(){for(var n=[],u=0;u<arguments.length;u++)n=n.concat(S(arguments[u]));return n},g=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var u={};if(n!=null)for(var e in n)Object.hasOwnProperty.call(n,e)&&(u[e]=n[e]);return u.default=n,u};Object.defineProperty(m,"__esModule",{value:!0});var p=g(v(67294)),o=v(36996),l=v(87346),r=v(26181),i=function(n){d(u,n);function u(){var e=n!==null&&n.apply(this,arguments)||this;return e.state={selectionMode:!1},e.mouseDownStarted=!1,e.mouseMoveStarted=!1,e.mouseMoved=!1,e.mouseUpStarted=!1,e.selectionStarted=!1,e.deselectionStarted=!1,e.mouseDownData={selectboxY:0,selectboxX:0,target:null},e.registry=new Set,e.selectedItems=new Set,e.selectingItems=new Set,e.ignoreCheckCache=new Map,e.ignoreList=e.props.ignoreList.concat([".selectable-select-all",".selectable-deselect-all"]),e.ignoreListNodes=[],e.setSelectboxState=null,e.selectableGroup=null,e.scrollContainer=null,e.maxScrollTop=0,e.maxScrollLeft=0,e.scrollBounds=null,e.containerScroll={scrollTop:0,scrollLeft:0},e.documentScroll={scrollTop:0,scrollLeft:0},e.saveContainerScroll=function(){var t=e.scrollContainer,s=t.scrollTop,c=t.scrollLeft;e.containerScroll={scrollTop:s,scrollLeft:c}},e.saveDocumentScroll=function(){var t=o.getDocumentScroll(),s=t.documentScrollLeft,c=t.documentScrollTop;e.documentScroll={scrollTop:c,scrollLeft:s}},e.updateRegistry=function(){var t,s;try{for(var c=a(e.registry.values()),f=c.next();!f.done;f=c.next()){var _=f.value;_.updateBounds(e.containerDocumentScroll)}}catch(w){t={error:w}}finally{try{f&&!f.done&&(s=c.return)&&s.call(c)}finally{if(t)throw t.error}}},e.registerSelectable=function(t){e.registry.add(t),t.state.isSelected&&e.selectedItems.add(t)},e.unregisterSelectable=function(t){e.registry.delete(t);var s=e.selectedItems.has(t)||e.selectingItems.has(t);e.selectedItems.delete(t),e.selectingItems.delete(t),s&&e.props.onSelectedItemUnmount(t,y(e.selectedItems))},e.updateContainerScroll=function(t){var s=e.containerScroll,c=s.scrollTop,f=s.scrollLeft;e.checkScrollTop(t.clientY,c),e.checkScrollBottom(t.clientY,c),e.checkScrollLeft(t.clientX,f),e.checkScrollRight(t.clientX,f)},e.getScrollStep=function(t){var s=e.props,c=s.minimumSpeedFactor,f=s.scrollSpeed;return Math.max(t,c)*f},e.checkScrollTop=function(t,s){var c=e.scrollBounds.top-t;(c>0||t<0)&&(e.scrollContainer.scrollTop=s-e.getScrollStep(c))},e.checkScrollBottom=function(t,s){var c=t-e.scrollBounds.bottom;if(c>0||t>window.innerHeight){var f=s+e.getScrollStep(c);e.scrollContainer.scrollTop=Math.min(f,e.maxScrollTop)}},e.checkScrollLeft=function(t,s){var c=e.scrollBounds.left-t;if(c>0||t<0){var f=s-e.getScrollStep(c);e.scrollContainer.scrollLeft=f}},e.checkScrollRight=function(t,s){var c=t-e.scrollBounds.right;if(c>0||t>window.innerWidth){var f=s+e.getScrollStep(c);e.scrollContainer.scrollLeft=Math.min(f,e.maxScrollLeft)}},e.updateSelectBox=function(t){var s=o.castTouchToMouseEvent(t);if(e.updateContainerScroll(s),!e.mouseMoveStarted){e.mouseMoveStarted=!0,e.mouseMoved=!0;var c=e.mouseDownData,f=s.clientX,_=s.clientY,w=_-e.scrollBounds.top+e.containerScroll.scrollTop,x=Math.min(w,c.selectboxY),b=f-e.scrollBounds.left+e.containerScroll.scrollLeft,O=Math.min(b,c.selectboxX),C={x:O,y:x,width:Math.abs(b-c.selectboxX),height:Math.abs(w-c.selectboxY)};e.setSelectboxState(C);var M={top:C.y+e.scrollBounds.top+e.documentScroll.scrollTop,left:C.x+e.scrollBounds.left+e.documentScroll.scrollLeft,width:C.width,height:C.height,offsetWidth:C.width||1,offsetHeight:C.height||1};e.selectItems(M),e.props.duringSelection(y(e.selectingItems)),e.mouseMoveStarted=!1}},e.selectItems=function(t,s){var c,f;s===void 0&&(s={});var _=e.props,w=_.tolerance,x=_.enableDeselect,b=_.mixedDeselect;try{for(var O=a(e.registry.values()),C=O.next();!C.done;C=O.next()){var M=C.value;e.processItem({item:M,selectboxBounds:t,tolerance:w,mixedDeselect:b,enableDeselect:x,isFromClick:s&&s.isFromClick})}}catch(I){c={error:I}}finally{try{C&&!C.done&&(f=O.return)&&f.call(O)}finally{if(c)throw c.error}}},e.clearSelection=function(){var t,s;try{for(var c=a(e.selectedItems.values()),f=c.next();!f.done;f=c.next()){var _=f.value;_.setState({isSelected:!1}),e.selectedItems.delete(_)}}catch(w){t={error:w}}finally{try{f&&!f.done&&(s=c.return)&&s.call(c)}finally{if(t)throw t.error}}e.setState({selectionMode:!1}),e.props.onSelectionFinish(y(e.selectedItems)),e.props.onSelectionClear()},e.selectAll=function(){var t,s;e.removeIgnoredItemsFromRegistry();try{for(var c=a(e.registry.values()),f=c.next();!f.done;f=c.next()){var _=f.value;_.state.isSelected||(_.setState({isSelected:!0}),e.selectedItems.add(_))}}catch(w){t={error:w}}finally{try{f&&!f.done&&(s=c.return)&&s.call(c)}finally{if(t)throw t.error}}e.setState({selectionMode:!0}),e.props.onSelectionFinish(y(e.selectedItems))},e.mouseDown=function(t){var s=!t.type.includes("touch")&&!o.detectMouseButton(t,1,{allowAltClick:e.props.allowAltClick,allowCtrlClick:e.props.allowCtrlClick,allowMetaClick:e.props.allowMetaClick,allowShiftClick:e.props.allowShiftClick});if(!(e.mouseDownStarted||e.props.disabled||s)){if(e.removeIgnoredItemsFromRegistry(),e.isInIgnoreList(t.target)){e.mouseDownStarted=!1;return}e.props.resetOnStart&&e.clearSelection(),e.mouseDownStarted=!0,e.mouseUpStarted=!1;var c=o.castTouchToMouseEvent(t);if(!e.props.globalMouse&&!o.isNodeInRoot(c.target,e.selectableGroup)){var f=S(o.getBoundsForNode(e.selectableGroup,e.documentScroll),1),_=f[0],w=o.doObjectsCollide({top:_.top,left:_.left,width:0,height:0,offsetHeight:_.offsetHeight,offsetWidth:_.offsetWidth},{top:c.pageY,left:c.pageX,width:0,height:0,offsetWidth:0,offsetHeight:0});if(!w)return}e.updateRootBounds(),e.updateRegistry(),e.mouseDownData={target:c.target,selectboxY:c.clientY-e.scrollBounds.top+e.containerScroll.scrollTop,selectboxX:c.clientX-e.scrollBounds.left+e.containerScroll.scrollLeft},c.preventDefault(),document.addEventListener("mousemove",e.updateSelectBox),document.addEventListener("touchmove",e.updateSelectBox),document.addEventListener("mouseup",e.mouseUp),document.addEventListener("touchend",e.mouseUp)}},e.mouseUp=function(t){var s,c;if(!e.mouseUpStarted&&(e.mouseUpStarted=!0,e.mouseDownStarted=!1,e.removeTempEventListeners(),!!e.mouseDownData)){var f=o.castTouchToMouseEvent(t),_=f.pageX,w=f.pageY;if(!e.mouseMoved&&o.isNodeInRoot(f.target,e.selectableGroup))e.handleClick(f,w,_);else{try{for(var x=a(e.selectingItems.values()),b=x.next();!b.done;b=x.next()){var O=b.value;O.setState({isSelected:!0,isSelecting:!1})}}catch(C){s={error:C}}finally{try{b&&!b.done&&(c=x.return)&&c.call(x)}finally{if(s)throw s.error}}e.selectedItems=new Set(y(e.selectedItems,e.selectingItems)),e.selectingItems.clear(),f.which===1&&e.mouseDownData.target===f.target&&e.preventEvent(f.target,"click"),e.setSelectboxState({x:0,y:0,width:0,height:0}),e.props.onSelectionFinish(y(e.selectedItems))}e.toggleSelectionMode(),e.cleanUp(),e.mouseMoved=!1}},e.keyListener=function(t){t.keyCode===27&&e.clearSelection()},e.getGroupRef=function(t){e.selectableGroup=t},e.getSelectboxSetState=function(t){e.setSelectboxState=t},e.defaultContainerStyle={position:"relative"},e.contextValue={selectable:{register:e.registerSelectable,unregister:e.unregisterSelectable,selectAll:e.selectAll,clearSelection:e.clearSelection,getScrolledContainer:function(){return e.scrollContainer}}},e}return u.prototype.componentDidMount=function(){this.props.scrollContainer?this.scrollContainer=document.querySelector(this.props.scrollContainer):this.scrollContainer=this.selectableGroup,this.scrollContainer.addEventListener("scroll",this.saveContainerScroll),document.addEventListener("scroll",this.saveDocumentScroll),this.selectableGroup.addEventListener("mousedown",this.mouseDown),this.selectableGroup.addEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.addEventListener("keydown",this.keyListener),document.addEventListener("keyup",this.keyListener)),this.removeIgnoredItemsFromRegistry()},u.prototype.componentWillUnmount=function(){this.scrollContainer.removeEventListener("scroll",this.saveContainerScroll),document.removeEventListener("scroll",this.saveDocumentScroll),this.selectableGroup.removeEventListener("mousedown",this.mouseDown),this.selectableGroup.removeEventListener("touchstart",this.mouseDown),this.props.deselectOnEsc&&(document.removeEventListener("keydown",this.keyListener),document.removeEventListener("keyup",this.keyListener)),this.removeTempEventListeners(),this.selectedItems.clear(),this.selectingItems.clear()},Object.defineProperty(u.prototype,"containerDocumentScroll",{get:function(){return{scrollTop:this.containerScroll.scrollTop+this.documentScroll.scrollTop,scrollLeft:this.containerScroll.scrollLeft+this.documentScroll.scrollLeft}},enumerable:!0,configurable:!0}),u.prototype.removeTempEventListeners=function(){document.removeEventListener("mousemove",this.updateSelectBox),document.removeEventListener("touchmove",this.updateSelectBox),document.removeEventListener("mouseup",this.mouseUp),document.removeEventListener("touchend",this.mouseUp)},u.prototype.updateRootBounds=function(){this.scrollBounds=this.scrollContainer.getBoundingClientRect(),this.maxScrollTop=this.scrollContainer.scrollHeight-this.scrollContainer.clientHeight,this.maxScrollLeft=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth},u.prototype.toggleSelectionMode=function(){var e=this,t=e.selectedItems,s=e.state.selectionMode;t.size&&!s&&this.setState({selectionMode:!0}),!t.size&&s&&this.setState({selectionMode:!1})},u.prototype.processItem=function(e){var t=e.item,s=e.tolerance,c=e.selectboxBounds,f=e.enableDeselect,_=e.mixedDeselect,w=e.isFromClick,x=this.props.delta,b=o.doObjectsCollide(c,t.bounds,s,x),O=t.state,C=O.isSelecting,M=O.isSelected;if(w&&b)return M?this.selectedItems.delete(t):this.selectedItems.add(t),t.setState({isSelected:!M}),this.clickedItem=t,t;if(!w&&b){if(M&&f&&(!this.selectionStarted||_))return t.setState({isSelected:!1}),t.deselected=!0,this.deselectionStarted=!0,this.selectedItems.delete(t);var I=_?!t.deselected:!this.deselectionStarted;if(!C&&!M&&I)return t.setState({isSelecting:!0}),this.selectionStarted=!0,this.selectingItems.add(t),{updateSelecting:!0}}return!w&&!b&&C&&this.selectingItems.has(t)?(t.setState({isSelecting:!1}),this.selectingItems.delete(t),{updateSelecting:!0}):null},u.prototype.isInIgnoreList=function(e){if(!!e){if(this.ignoreCheckCache.get(e)!==void 0)return this.ignoreCheckCache.get(e);var t=this.ignoreListNodes.some(function(s){return e===s||s.contains(e)});return this.ignoreCheckCache.set(e,t),t}},u.prototype.removeIgnoredItemsFromRegistry=function(){var e=this;this.ignoreListNodes=Array.from(document.querySelectorAll(this.ignoreList.join(", "))),this.registry=new Set(y(this.registry).filter(function(t){return!e.isInIgnoreList(t.node)})),this.selectedItems=new Set(y(this.selectedItems).filter(function(t){return!e.isInIgnoreList(t.node)}))},u.prototype.preventEvent=function(e,t){var s=function(c){e.removeEventListener(t,s,!0),c.preventDefault(),c.stopPropagation()};e.addEventListener(t,s,!0)},u.prototype.cleanUp=function(){var e,t;if(this.deselectionStarted=!1,this.selectionStarted=!1,this.props.mixedDeselect)try{for(var s=a(this.registry.values()),c=s.next();!c.done;c=s.next()){var f=c.value;f.deselected=!1}}catch(_){e={error:_}}finally{try{c&&!c.done&&(t=s.return)&&t.call(s)}finally{if(e)throw e.error}}},u.prototype.handleClick=function(e,t,s){if(!!this.props.selectOnClick){var c=this.props,f=c.clickClassName,_=c.allowClickWithoutSelected,w=c.onSelectionFinish,x=e.target.classList||[],b=Array.from(x).includes(f);(_||this.selectedItems.size||b||e.ctrlKey)&&(this.selectItems({top:t,left:s,width:0,height:0,offsetWidth:0,offsetHeight:0},{isFromClick:!0}),w(y(this.selectedItems),this.clickedItem),e.which===1&&this.preventEvent(e.target,"click"),(e.which===2||e.which===3)&&this.preventEvent(e.target,"contextmenu"))}},u.prototype.render=function(){var e=this.state.selectionMode,t=this.props,s=t.component,c=s===void 0?"div":s,f=t.className,_=t.style,w=t.selectionModeClass,x=t.fixedPosition,b=t.selectboxClassName,O=t.children;return p.default.createElement(l.SelectableGroupContext.Provider,{value:this.contextValue},p.default.createElement(c,{ref:this.getGroupRef,style:h(h({},this.defaultContainerStyle),_),className:f+" "+(e?w:"")},O,p.default.createElement(r.Selectbox,{getSetState:this.getSelectboxSetState,className:b,fixedPosition:x})))},u.defaultProps={clickClassName:"",tolerance:0,globalMouse:!1,ignoreList:[],scrollSpeed:.25,minimumSpeedFactor:60,duringSelection:o.noop,onSelectionFinish:o.noop,onSelectionClear:o.noop,onSelectedItemUnmount:o.noop,allowClickWithoutSelected:!0,selectionModeClass:"in-selection-mode",resetOnStart:!1,disabled:!1,deselectOnEsc:!0,fixedPosition:!1,delta:1,allowAltClick:!1,allowCtrlClick:!1,allowMetaClick:!1,allowShiftClick:!1,selectOnClick:!0},u}(p.Component);m.SelectableGroup=i},26181:function(L,m,v){"use strict";var d=this&&this.__read||function(g,p){var o=typeof Symbol=="function"&&g[Symbol.iterator];if(!o)return g;var l=o.call(g),r,i=[],n;try{for(;(p===void 0||p-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(u){n={error:u}}finally{try{r&&!r.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return i},h=this&&this.__importStar||function(g){if(g&&g.__esModule)return g;var p={};if(g!=null)for(var o in g)Object.hasOwnProperty.call(g,o)&&(p[o]=g[o]);return p.default=g,p};Object.defineProperty(m,"__esModule",{value:!0});var a=h(v(67294)),S={y:0,x:0,width:0,height:0};function y(g){var p=g.fixedPosition,o=g.getSetState,l=g.className,r=d(a.useState(S),2),i=r[0],n=r[1];a.useEffect(function(){o(n)},[]);var u={left:i.x,top:i.y,width:i.width,height:i.height,zIndex:9e3,position:p?"fixed":"absolute",cursor:"default",willChange:"transform",transform:"translateZ(0)"};return a.default.createElement("div",{className:l,style:u})}m.Selectbox=y,y.defaultProps={className:"selectable-selectbox"}},67607:function(L,m,v){"use strict";var d;d={value:!0};var h=v(74262);m.kn=h.SelectableGroup;var a=v(50543);m.Lr=a.createSelectable;var S=v(4307);d=S.SelectAll;var y=v(14907);d=y.DeselectAll},72922:function(L,m){"use strict";Object.defineProperty(m,"__esModule",{value:!0});var v=["pageX","pageY","clientX","clientY"];function d(a,S){v.forEach(function(y){typeof a[y]=="undefined"&&(a[y]=a[S][0][y])})}function h(a){if(a.type.includes("mouse"))return a;try{a.type==="touchstart"?d(a,"targetTouches"):a.type==="touchmove"&&d(a,"changedTouches")}catch(S){console.error(S.message)}return a}m.castTouchToMouseEvent=h},24976:function(L,m){"use strict";Object.defineProperty(m,"__esModule",{value:!0});function v(d,h,a){return h===void 0&&(h=1),a===void 0&&(a={}),d.metaKey&&!a.allowMetaClick||d.ctrlKey&&!a.allowCtrlClick||d.altKey&&!a.allowAltClick||d.shiftKey&&!a.allowShiftClick?!1:"buttons"in d?d.buttons===h:"which"in d?d.which===h:d.button===h-1}m.detectMouseButton=v},68861:function(L,m){"use strict";Object.defineProperty(m,"__esModule",{value:!0});var v=function(a,S,y){var g=y.tolerance,p=g===void 0?0:g,o=y.useOffsetSize,l=o===void 0?!1:o,r=l?a.offsetHeight:a.height,i=l?S.offsetHeight:S.height,n=l?a.offsetWidth:a.width,u=l?S.offsetWidth:S.width;return!(a.top+r-p<S.top||a.top+p>S.top+i||a.left+n-p<S.left||a.left+p>S.left+u)};function d(a){return Array.isArray(a)?a:[a]}function h(a,S,y,g){y===void 0&&(y=0),g===void 0&&(g=1);for(var p=d(a),o=d(S),l=0;l<p.length;l++)for(var r=0;r<o.length;r++)return v(p[l],o[r],{tolerance:y,useOffsetSize:g===1})}m.doObjectsCollide=h},18538:function(L,m){"use strict";Object.defineProperty(m,"__esModule",{value:!0});function v(){var h=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),a=Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft);return{documentScrollTop:h,documentScrollLeft:a}}m.getDocumentScroll=v;function d(h,a){a===void 0&&(a={scrollTop:0,scrollLeft:0});var S=a.scrollTop,y=a.scrollLeft;return Array.from(h.getClientRects()).map(function(g){return{top:g.top+S,left:g.left+y,offsetWidth:h.offsetWidth,offsetHeight:h.offsetHeight,width:g.width,height:g.height}})}m.getBoundsForNode=d},36996:function(L,m,v){"use strict";function d(h){for(var a in h)m.hasOwnProperty(a)||(m[a]=h[a])}Object.defineProperty(m,"__esModule",{value:!0}),m.noop=function(){},d(v(72922)),d(v(24976)),d(v(68861)),d(v(18538)),d(v(98411))},98411:function(L,m){"use strict";Object.defineProperty(m,"__esModule",{value:!0});function v(d,h){for(;d;){if(d===h)return!0;d=d.parentNode}return!1}m.isNodeInRoot=v}}]);
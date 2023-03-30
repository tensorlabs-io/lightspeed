!function(){"use strict";var t,e,i,o,a,n={96779:function(t,e,i){i.r(e),i.d(e,{MsnActionsMenu:function(){return _}});var o=i(33940),a=i(21772),n=i(63070),r=i(8522),s=i(37627),l=i(27535);var d=i(28904),c=i(99452),p=i(42590),h=i(94537),g=i(37802),u=i(13400);class m extends d.H{constructor(){super(...arguments),this.useFastAnchoredRegion=!0,this.fixedPosition=!1,this.defaultVerticalPosition="bottom",this.defaultHorizontalPosition="end",this.autoFocus=!0,this.isUpdatingPosition=!1,this.isBingHp="bingHomepage"===u.jG.AppType,this.isViews="views"===u.jG.AppType,this.keyDownHandler=t=>(t.key===h.CX?(this.referrerButton&&this.referrerButton.focus(),this.$emit("dismiss-menu")):t.key===h.oM&&(this.customTabEventHandler?this.customTabEventHandler(this,t):this.tabEventHandler(t)),!0),this.updatePositionManually=()=>{this.updatePosition()},this.tabEventHandler=t=>{if(this.fluentMenu){const e=this.fluentMenu.children.length,i=t.target;Array.from(this.fluentMenu.children).map(((o,a)=>{if(o===i){const i=(a+(t.shiftKey?-1:1)+e)%e;this.fluentMenu.children[i].focus()}}))}},this.initMenuPositioning=()=>{this.setMenuPosition(),document.addEventListener("scroll",this.updatePosition),window.addEventListener("resize",this.updatePosition)},this.setMenuPosition=()=>{var t;const e=this.referrerButton.getBoundingClientRect(),i=(null===(t=this.offsetParent)||void 0===t?void 0:t.offsetTop)||0;let o=0;this.isBingHp&&(o=this.offsetParent.getBoundingClientRect().top+window.scrollY);let a=0;if(this.isViews&&(a=this.offsetParent.getBoundingClientRect().top+window.scrollY-i),this.fluentMenu){let t;t="top"===this.defaultVerticalPosition?`top:${e.top+window.scrollY-2-this.fluentMenu.clientHeight-i}px;`:e.bottom+this.fluentMenu.clientHeight>window.innerHeight?`top:${e.top+window.scrollY-2-this.fluentMenu.clientHeight-i-o-a}px;`:`top:${e.bottom+window.scrollY+1-i-o-a}px;`,this.setAttribute("style",`position:absolute;${t}${this.getHorizontalPosition(e)}`),this.isUpdatingPosition=!1}},this.updatePosition=(0,g.Z)((()=>{this.isUpdatingPosition||(window.requestAnimationFrame((()=>{this.setMenuPosition()})),this.isUpdatingPosition=!0)}),300)}connectedCallback(){super.connectedCallback(),this.fluentMenu&&(this.useFastAnchoredRegion||this.initMenuPositioning(),this.autoFocus&&this.fluentMenu&&(setTimeout((()=>{this.fluentMenu.children[0].focus()}),100),this.$emit("shown-menu")))}disconnectedCallback(){super.disconnectedCallback(),this.useFastAnchoredRegion||(document.removeEventListener("scroll",this.updatePosition),window.removeEventListener("resize",this.updatePosition))}useFastAnchoredRegionChanged(t,e){!1===e&&this.isConnected&&this.initMenuPositioning()}getHorizontalPosition(t){const e=document.documentElement.clientWidth;if("rtl"===document.dir||"start"===this.defaultHorizontalPosition){let i=0;if(this.isViews){const{left:t=0,width:o=0}=this.offsetParent.getBoundingClientRect()||{};i=e-t-o}return e-t.right+this.fluentMenu.clientWidth<=window.innerWidth?`right:${e-t.right-i}px`:`left:${t.left}px;`}let i=0;return this.isViews&&(i=this.offsetParent.getBoundingClientRect().left),t.left+this.fluentMenu.clientWidth<=window.innerWidth?`left:${t.left-i}px;`:`right:${e-t.right}px;`}}(0,o.gn)([c.LO],m.prototype,"menuItems",void 0),(0,o.gn)([c.LO],m.prototype,"referrerButton",void 0),(0,o.gn)([c.LO],m.prototype,"useFastAnchoredRegion",void 0),(0,o.gn)([(0,p.Lj)({mode:"boolean"})],m.prototype,"fixedPosition",void 0),(0,o.gn)([p.Lj],m.prototype,"defaultVerticalPosition",void 0),(0,o.gn)([p.Lj],m.prototype,"defaultHorizontalPosition",void 0),(0,o.gn)([(0,p.Lj)({mode:"boolean"})],m.prototype,"autoFocus",void 0),(0,o.gn)([(0,p.Lj)({mode:"boolean"})],m.prototype,"isWindowsDashboard",void 0);var f=i(67739),v=i(29717),b=i(22798),y=i(78923),x=i(28632);const w=new(i(28640).U)("menu-item-text-color","rgba(0, 0, 0, 0.6063)","rgba(255, 255, 255, 0.786)"),$=y.i` :host{z-index:var(--menu-z-index,700);--control-corner-radius:4}:host(:focus){outline:none}:host([isWindowsDashboard]){--control-corner-radius:8}fluent-menu{box-shadow:0 2.4px 7.2px rgba(0,0,0,0.18),0 12.8px 28.8px rgba(0,0,0,0.22);max-width:var(--menu-max-width,275px);min-width:var(--menu-min-width,240px)}fluent-anchored-region{z-index:700}svg{fill:currentColor}.icon{align-items:center;display:flex}.rotate-icon-down svg{-ms-transform:rotate(180deg);transform:rotate(180deg)}:host(:${f.b}){outline:none}fluent-menu-item::part(content){width:100%;overflow:none}.menu-item{grid-template-columns:minmax(32px,auto) 1fr minmax(32px,auto)}.menu-item-divider{margin-bottom:6px;border-top-color:${x.c1}}.menu-item-text{padding-inline-start:12px;color:${w};
        font-size: 12px;
    }
    `.withBehaviors((0,v.vF)(y.i` .menu-item[isNavigation]{color:${b.H.LinkText}}.menu-item[isNavigation]:hover{color:${b.H.HighlightText};
                }
            `));var C=i(49218),L=i(93703),k=i(41472),S=i(89150);const T=C.dy`
${(0,L.g)((t=>t.isDivider),C.dy`<fluent-divider class="menu-item-divider"></fluent-divider>`)}
${(0,L.g)((t=>t.isText),C.dy`<div class="menu-item-text" role="presentation">${t=>t.title}</div>`)}
${(0,L.g)((t=>!t.isDivider&&!t.isText),C.dy`<fluent-menu-item aria-label="${t=>t.ariaLabel?t.ariaLabel:t.title}" class="menu-item" part="menu-item" @change=${(t,e)=>t.onClick(e.event)} tabindex="0" role="menuitem" exportparts="start: actions-menu-start menu-item" id="${t=>t.id}" ?disabled="${t=>t.disabled}" isNavigation="${t=>t.isNavigation}" data-t="${t=>t.telemetryTag}" data-customhandled=${t=>t.dataCustomHandled||void 0}>${(0,L.g)((t=>t.glyph),C.dy`<span slot="start" class="icon" part="icon" aria-hidden="true">${t=>"string"==typeof t.glyph?C.dy`${C.dy.partial(t.glyph)}`:t.glyph}</span>`)} ${t=>t.title} ${(0,L.g)((t=>t.suffixGlyph),C.dy`<span slot="end" class="icon" aria-hidden="true">${t=>"string"==typeof t.suffixGlyph?C.dy`${C.dy.partial(t.suffixGlyph)}`:t.suffixGlyph}</span>`)}</fluent-menu-item>`)}
`,F=C.dy`<fluent-menu ${(0,k.i)("fluentMenu")} @keydown=${(t,e)=>t.keyDownHandler(e.event)} class="menu" part="menu">${(0,S.rx)((t=>t.menuItems),T)}</fluent-menu>`,A=C.dy`<template id="actions-menu">${(0,L.g)((t=>t.useFastAnchoredRegion),C.dy`<fluent-anchored-region part="menu-region" :anchorElement=${t=>t.referrerButton||document.body} fixed-placement="${t=>t.fixedPosition}" vertical-positioning-mode="dynamic" vertical-default-position="${t=>t.defaultVerticalPosition}" horizontal-positioning-mode="dynamic" horizontal-default-position="${t=>t.defaultHorizontalPosition}" horizontal-inset="true">${F}</fluent-anchored-region>`)} ${(0,L.g)((t=>!t.useFastAnchoredRegion),C.dy`${F}`)}</template>`;a.D.define(n.H.registry),r.D.define(n.H.registry),s.D.define(n.H.registry),l.D.define(n.H.registry);let _=class extends m{};_=(0,o.gn)([(0,d.M)({name:"msn-actions-menu",template:A,styles:$,shadowOptions:{delegatesFocus:!0}})],_)},63118:function(t,e,i){i.d(e,{J:function(){return v}});var o=i(33940),a=i(89781),n=i(63070),r=i(94352);var s=i(28904),l=i(42590);class d extends s.H{constructor(){super(...arguments),this.preText="",this.postText=""}connectedCallback(){super.connectedCallback(),this.spinnerCompleteTimer=setTimeout((()=>{this.spinnerCompletedCallback&&this.spinnerCompletedCallback()}),3e3)}disconnectedCallback(){clearTimeout(this.spinnerCompleteTimer),this.spinnerCompleteTimer=void 0}}(0,o.gn)([(0,l.Lj)({attribute:"pre-text"})],d.prototype,"preText",void 0),(0,o.gn)([(0,l.Lj)({attribute:"post-text"})],d.prototype,"postText",void 0);var c=i(26738),p=i(78923),h=i(92059);const g=p.i` .spinner-background{stroke:rgba(0,0,0,0.07)}.meter{stroke:${c.go}}.checkmark-background{fill:${c.go}}.checkmark{fill:white}`,u=p.i` .spinner-background{stroke:rgba(255,255,255,0.54)}.meter{stroke:white}.checkmark-background{fill:white}.checkmark{fill:black}`,m=p.i` :host{display:flex;flex-direction:column;align-items:center}:host([card-size="_1x_1y"]) .text{display:none}:host([card-size="_1x_1y"]) svg{height:30px;width:30px}:host(.check-icon[card-size="_1x_1y"]){padding-top:0;padding-bottom:11px}svg{height:48px;margin:auto;width:48px}.spinner-background{fill:none;stroke-width:2.5px}.meter{animation:spinner 3s linear;fill:none;stroke-dasharray:150;stroke-dashoffset:0;stroke-linecap:round;stroke-width:2.5px;transform:rotate(-90deg);transform-origin:50% 50%}@keyframes spinner{from{stroke-dashoffset:150}to{stroke-dashoffset:0}}.checkmark-background{animation:checkmark-background 4s linear;transform-origin:50% 50%}@keyframes checkmark-background{0%,75%{fill-opacity:0}78%{fill-opacity:1}}.checkmark{animation:checkmark 4s linear;animation-fill-mode:both;transform:translate(8px,8px);transform-origin:50% 50%}@keyframes checkmark{0%,75%{transform:scale(0) translate(8px,8px)}85%{transform:scale(1.25) translate(8px,8px)}100%{transform:scale(1) translate(8px,8px)}}span{display:block;font-size:var(--type-ramp-base-font-size);line-height:var(--type-ramp-base-line-height);overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap;width:236px}.text{height:20px;padding-top:8px;width:236px}.pre-text{animation:fadeout 1s;animation-delay:3s;animation-fill-mode:both}.post-text{animation:fadein 1s;animation-delay:3s;animation-fill-mode:both}@keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadeout{from{opacity:1}to{opacity:0}}`.withBehaviors(new h.Y(g,u));const f=i(49218).dy`<svg viewBox="0 0 48 48"><circle class="spinner-background" cx="24" cy="24" r="21.5" /><circle class="meter" cx="24" cy="24" r="21.5" /><circle class="checkmark-background" cx="24" cy="24" r="24"/><path class="checkmark" d="M11.3333 22.1144L6.27614 17.0572C5.75544 16.5365 4.91122 16.5365 4.39052 17.0572C3.86983 17.5779 3.86983 18.4221 4.39052 18.9428L10.3905 24.9428C10.9112 25.4635 11.7554 25.4635 12.2761 24.9428L26.9428 10.2761C27.4635 9.75545 27.4635 8.91122 26.9428 8.39052C26.4221 7.86983 25.5779 7.86983 25.0572 8.39052L11.3333 22.1144Z"/></svg><div class="text"><span class="pre-text" role="alert">${t=>t.preText}</span><span class="post-text">${t=>t.postText}</span></div>`;let v=class extends d{};v=(0,o.gn)([(0,s.M)({name:"msn-animated-done-spinner",template:f,styles:m})],v),a.D.define(n.H.registry),r.D.define(n.H.registry)},47195:function(t,e,i){i.d(e,{w:function(){return b}});var o=i(33940),a=i(28904),n=i(42590),r=i(99452),s=i(67121),l=i(84446);class d extends l.F{constructor(){super(...arguments),this.effectId="",this.isEnabled=!1,this.intersectionRootMargin="0px 0px 0px 0px",this.animationType="",this.showMultiTimes=!1,this.isAnimationValid=!1,this.updateAnimStatus=(t,e)=>{this.isAnimationValid!==t&&(this.isAnimationValid=t,t&&e&&setTimeout((()=>{e()}),this.animationConfig.duration))}}connectedCallback(){if(super.connectedCallback(),this.animationType){this.effectGroup=s.am.getEffectGroup();const t={root:this.intersectionRoot,rootMargin:this.intersectionRootMargin};this.effectGroup.register(this.effectId,this.animContainer,this.updateAnimStatus,t,this.showMultiTimes,this.animationConfig.delayTimeMs)}}disconnectedCallback(){super.disconnectedCallback(),this.animationType&&this.effectGroup.unregister(this.effectId)}}(0,o.gn)([n.Lj],d.prototype,"effectId",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean"})],d.prototype,"isEnabled",void 0),(0,o.gn)([n.Lj],d.prototype,"intersectionRoot",void 0),(0,o.gn)([n.Lj],d.prototype,"intersectionRootMargin",void 0),(0,o.gn)([n.Lj],d.prototype,"animationType",void 0),(0,o.gn)([n.Lj],d.prototype,"animationConfig",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean"})],d.prototype,"showMultiTimes",void 0),(0,o.gn)([r.LO],d.prototype,"isAnimationValid",void 0);var c=i(49218),p=i(93703),h=i(41472);const g={"scale-up":"animation1","scale-down":"animation1","scale-up-down":"animation2","opacity-up":"opacity-up-animation","move-up":"move-up-animation","move-up2":"move-up-animation2"},u=c.dy`<style>.anim-container { overflow: hidden; width: 100%; height: 100%; } .anim-container div { transform: scale(${t=>{var e;return(null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom)||1}}); } .anim-wrapper { animation: ${t=>g[t.animationType]} ${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.durationString}} forwards; } .anim-wrapper-initial { opacity: ${t=>{var e,i;return(null===(e=t.animationConfig)||void 0===e?void 0:e.initialOpacity)?null===(i=t.animationConfig)||void 0===i?void 0:i.initialOpacity:1}}; } @keyframes animation1 { 0% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}}); } 100% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleTo}}); } } @keyframes animation2 { 0% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}}); } 50% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleTo}}); } 100% { transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}}); } } @keyframes opacity-up-animation { 0% { opacity: 0; } 66% { opacity: 0; } 100% { opacity: 1; } } @keyframes move-up-animation { 0% { transform: translate(0px, 100%); opacity: 0; } 33% { transform: translate(0px, 0px); opacity: 1; } 66% { transform: translate(0px, 0px); opacity: 1; } 100% { transform: translate(0px, -100%); opacity: 0; } } @keyframes move-up-animation2 { 0% { transform: translate(0px, 100%); opacity: 0; } 66% { transform: translate(0px, 100%); opacity: 0; } 100% { transform: translate(0px, 0px); opacity: 1; } }</style><div class="anim-container">${(0,p.g)((t=>t.animationType&&t.animationConfig),c.dy`<div class=${t=>t.isAnimationValid?"anim-wrapper":"anim-wrapper-initial"} ${(0,h.i)("animContainer")}><span part="anim-content"><slot name="anim-content"></slot></span></div>`)} ${(0,p.g)((t=>!t.animationType),c.dy`<slot name="anim-content"></slot>`)}</div>`;var m=i(78923),f=i(41503);const v=m.i``.withBehaviors(new f.g("layoutStyle"));let b=class extends d{};b=(0,o.gn)([(0,a.M)({name:"msn-animation-decorator",template:u,styles:v})],b)},67121:function(t,e,i){i.d(e,{am:function(){return s}});var o,a=i(54433);class n{constructor({id:t,checkNewEffectInstance:e}){this.register=(t,e,i,o)=>{const a=`${this.effectItems.length}`,n={id:a,effectContainer:t,updateEffectStatus:e,showMultiTimes:o,isIntersecting:!1,isEffectShown:!1,observer:this.initIntersectionObserver(a,t,i)};this.effectItems.push(n)},this.unregister=()=>{this.effectItems.forEach((t=>{t.observer&&t.effectContainer&&t.observer.unobserve(t.effectContainer)})),this.effectItems=[]},this.initIntersectionObserver=(t,e,i)=>{if("function"!=typeof IntersectionObserver||!e)return null;const o={root:i&&i.root?document.getElementById(i.root):null,rootMargin:i&&i.rootMargin||"0px 0px 0px 0px"},a=new IntersectionObserver((e=>{e.forEach((e=>{this.handleIntersectingChange(t,e.isIntersecting)}))}),o);return a.observe(e),a},this.handleIntersectingChange=(t,e)=>{const i=(0,a.Z)(this.effectItems,(e=>e.id===t));-1!==i&&(this.effectItems[i].isIntersecting=e,e&&this.isAllEffectItemsIntersecting()?this.checkNewEffectInstance(!0):!e&&this.isAllEffectItemsNonIntersecting()&&this.updateEffectSeriesStatus(!1))},this.isAllEffectItemsIntersecting=()=>{let t=!0;return this.effectItems.forEach((e=>{e.isIntersecting||(t=!1)})),t},this.isAllEffectItemsNonIntersecting=()=>{let t=!0;return this.effectItems.forEach((e=>{e.isIntersecting&&(t=!1)})),t},this.isEffectValid=()=>{let t=!0;return this.effectItems.forEach((e=>{e.isIntersecting&&!e.isEffectShown||(t=!1)})),t},this.updateEffectSeriesStatus=(t,e)=>{this.effectItems.forEach((i=>{(i.showMultiTimes||t)&&(i.isEffectShown=t),i.updateEffectStatus(t,e)}))},this.id=t,this.effectItems=[],this.checkNewEffectInstance=e}}class r{constructor({id:t}){this.register=(t,e,i,o,r,s)=>{const l=(0,a.Z)(this.effectSequence,(e=>e.id===t));if(this.delayTimeMs=void 0===s?this.delayTimeMs:s,-1!==l)this.effectSequence[l].register(e,i,o,r);else{const a=new n({id:t,checkNewEffectInstance:this.checkNewEffectInstance});a.register(e,i,o,r),this.effectSequence.push(a)}},this.unregister=t=>{const e=(0,a.Z)(this.effectSequence,(e=>e.id===t));-1!==e&&(this.effectSequence[e].unregister(),this.effectSequence.splice(e,1))},this.notifyEffectCompleted=()=>{this.isPageShowingeffect=!1},this.checkNewEffectInstance=(t=!1)=>{t&&!this.isInitialState||setTimeout((()=>{const t=this.findFirstValidEffect();this.isPageScrolling||this.isPageShowingeffect||!t||(this.isPageShowingeffect=!0,t.updateEffectSeriesStatus(!0,this.notifyEffectCompleted))}),this.delayTimeMs)},this.handlePageScroll=()=>{this.isInitialState=!1,this.isPageScrolling||(this.isPageScrolling=!0),this.pageScrollingTimer&&window.clearTimeout(this.pageScrollingTimer),this.pageScrollingTimer=window.setTimeout((()=>{this.isPageScrolling=!1,this.checkNewEffectInstance()}),500)},this.findFirstValidEffect=()=>{const t=(0,a.Z)(this.effectSequence,(t=>t.isEffectValid()));return-1!==t?this.effectSequence[t]:null},this.id=t,this.effectSequence=[],this.pageScrollingTimer=-1,this.isPageScrolling=!1,this.isPageShowingeffect=!1,this.delayTimeMs=1e3,document.addEventListener("scroll",this.handlePageScroll),this.isInitialState=!0}}!function(t){t.default="default"}(o||(o={}));const s=new class{constructor(){this.getEffectGroup=t=>{const e=t||o.default,i=(0,a.Z)(this.effectGroups,(t=>t.id===e));if(-1!==i)return this.effectGroups[i];{const t=new r({id:e});return this.effectGroups.push(t),t}},this.effectGroups=[]}}},38454:function(t,e,i){i.d(e,{d:function(){return k}});var o=i(33940),a=i(28904),n=i(42590);class r extends a.H{toggleSelected(){this.selected=!this.selected,this.$emit("selected-state-changed",{selected:this.selected})}handleKeyPress(t){t&&"Enter"===t.key&&this.toggleSelected()}}(0,o.gn)([(0,n.Lj)({attribute:"img-src"})],r.prototype,"imgSrc",void 0),(0,o.gn)([n.Lj],r.prototype,"heading",void 0),(0,o.gn)([(0,n.Lj)({attribute:"follow-aria-label"})],r.prototype,"followAriaLabel",void 0),(0,o.gn)([(0,n.Lj)({attribute:"unfollow-aria-label"})],r.prototype,"unfollowAriaLabel",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"selected",void 0),(0,o.gn)([(0,n.Lj)({attribute:"select-telemetry-tag"})],r.prototype,"selectTelemetryTag",void 0),(0,o.gn)([(0,n.Lj)({attribute:"unselect-telemetry-tag"})],r.prototype,"unselectTelemetryTag",void 0);var s=i(62734),l=i(74449),d=i(42689),c=i(55135),p=i(958),h=i(67739),g=i(27186),u=i(92059),m=i(78923);const f=m.i` :host{background:rgba(255,255,255,0.65)}:host,:host *{user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}:host(:hover),:host(:${h.b}){--elevation:4;${s.XC};
    }

    :host(:hover),
    :host(:${h.b}),:host([selected]){background:white}.heading{color:${l.Q}
    }
`,v=m.i` :host{background:rgba(255,255,255,0.2)}:host(:hover){border-color:#F0F0EF}:host(:hover),:host([selected]),:host(:${h.b}){background:rgba(255,255,255,0.5)}.heading{color:${d.C}
    }
`,b=m.i`
    ${(0,g.j)("inline-flex")} :host{height:32px;padding-top:4px;padding-bottom:4px;padding-inline:4px 12px;border-radius:calc(${c.rS} * 5px);
        outline: none;
        cursor: pointer;
        align-items: center;
        border: 1px solid transparent;
        box-sizing: border-box;
    }

    :host([selected]),
    :host(:${h.b}),:host(:hover){padding-inline-start:6px}:host(:${h.b}){border-color:${p.Av}}.heading{max-width:82px;font-weight:600;font-size:var(--type-ramp-minus-1-font-size);line-height:var(--type-ramp-minus-1-line-height);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}.image{width:24px;height:24px;border-radius:50%;margin-inline-end:8px}:host(:hover) .image,:host(:${h.b}) .image{display:none}.icon{width:20px;height:20px;margin-inline-end:10px;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;border:1px solid transparent;box-sizing:border-box}.check-icon{background:${p.Av};
        border-color: ${p.Av};fill:white}.add-icon{background:#FFFFFF;border-color:rgba(0,0,0,0.25);fill:#212121;display:none}:host(:hover) .add-icon,:host(:${h.b}) .add-icon{display:flex}`.withBehaviors(new u.Y(f,v));var y=i(49218),x=i(93703),w=i(62512),$=i(68402),C=i(8686);const L=y.dy`<template tabindex="0" role="button" title="${t=>t.selected?(0,w.WU)(t.unfollowAriaLabel,t.heading):(0,w.WU)(t.followAriaLabel,t.heading)}" aria-label="${t=>t.selected?(0,w.WU)(t.unfollowAriaLabel,t.heading):(0,w.WU)(t.followAriaLabel,t.heading)}" aria-pressed="${t=>!!t.selected}" @click="${t=>t.toggleSelected&&t.toggleSelected()}" @keypress="${(t,e)=>t.handleKeyPress&&t.handleKeyPress(e.event)}" data-t="${t=>t.selected?t.unselectTelemetryTag:t.selectTelemetryTag}">${(0,x.g)((t=>t.selected),y.dy`<span class="icon check-icon">${y.dy.partial(C.Z)}</span>`)} ${(0,x.g)((t=>!t.selected),y.dy`<img class="image" src="${t=>t.imgSrc}"/><span class="icon add-icon">${y.dy.partial($.Z)}</span>`)}<span class="heading">${t=>t.heading}</span></template>`;let k=class extends r{};k=(0,o.gn)([(0,a.M)({name:"msn-follow-pill-button",template:L,styles:b})],k)},94836:function(t,e,i){i.d(e,{n:function(){return C}});var o=i(33940),a=i(28904),n=i(42590);class r extends a.H{toggleSelected(){this.selected=!this.selected,this.$emit("selected-state-changed",{selected:this.selected})}handleKeyPress(t){t&&"Enter"===t.key&&this.toggleSelected()}}(0,o.gn)([(0,n.Lj)({attribute:"img-src"})],r.prototype,"imgSrc",void 0),(0,o.gn)([n.Lj],r.prototype,"heading",void 0),(0,o.gn)([(0,n.Lj)({attribute:"follow-aria-label"})],r.prototype,"followAriaLabel",void 0),(0,o.gn)([(0,n.Lj)({attribute:"unfollow-aria-label"})],r.prototype,"unfollowAriaLabel",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"selected",void 0),(0,o.gn)([(0,n.Lj)({attribute:"select-telemetry-tag"})],r.prototype,"selectTelemetryTag",void 0),(0,o.gn)([(0,n.Lj)({attribute:"unselect-telemetry-tag"})],r.prototype,"unselectTelemetryTag",void 0);var s=i(23132),l=i(62734),d=i(958),c=i(27186),p=i(67739),h=i(29717),g=i(92059),u=i(22798),m=i(78923);const f=m.i` :host(:hover){outline:1px solid transparent;box-shadow:0 0 0 1px ${s.QO};
    }
`,v=m.i`
    ${(0,c.j)("flex")} :host{--elevation:4;cursor:pointer;overflow:hidden;${l.XC};width:var(--width,84px);height:var(--height,84px);border-radius:calc(var(--layer-corner-radius) * 1.5px);outline:none;align-items:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.check-icon{background:${d.Av};
        border: 1px solid ${d.Av};fill:white}.icon-container{width:100%;position:absolute;top:0px;display:flex;justify-content:flex-end}.icon{margin:6px;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;border-radius:100%}:host(:hover){--elevation:16}:host(:hover) .mask,:host(:${p.b}) .mask{background-image:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(29,29,29,0.65) 71.52%)}:host(:${p.b}){outline:1px solid transparent;box-shadow:0 0 0 1px ${d.Av}}.follow-icon{background:#FFFFFF;border:1px solid rgba(0,0,0,0.25);fill:#212121}.heading{width:85%;margin:8px 6px;color:white;text-align:start;overflow:hidden;text-overflow:ellipsis;font-weight:600;font-size:var(--type-ramp-minus-1-font-size);line-height:var(--type-ramp-minus-1-line-height);max-height:calc(var(--type-ramp-minus-1-line-height) * 2);position:absolute;bottom:0}.image{width:100%}.mask{position:absolute;top:30%;left:0;width:100%;height:70%;background-image:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(29,29,29,0.65) 71.52%)}`.withBehaviors((0,h.vF)(m.i` .icon > svg{fill:${u.H.ButtonFace}}.icon{background:${u.H.ButtonText};
                }
                
                :host(:hover) .icon,
                :host(:${p.b}) .icon{background:${u.H.HighlightText};
                }
                
                :host(:hover) .icon > svg,
                :host(:${p.b}) .icon > svg{fill:${u.H.Highlight};
                }
            `),new g.Y(m.i``,f));var b=i(68402),y=i(8686),x=i(62512),w=i(49218);const $=w.dy`<template tabindex="0" role="button" title="${t=>t.selected?t.unfollowAriaLabel&&(0,x.WU)(t.unfollowAriaLabel,t.heading):t.followAriaLabel&&(0,x.WU)(t.followAriaLabel,t.heading)}" aria-label="${t=>t.selected?t.unfollowAriaLabel&&(0,x.WU)(t.unfollowAriaLabel,t.heading):t.followAriaLabel&&(0,x.WU)(t.followAriaLabel,t.heading)}" @click="${t=>t.toggleSelected&&t.toggleSelected()}" @keypress="${(t,e)=>t.handleKeyPress&&t.handleKeyPress(e.event)}" data-t="${t=>t.selected?t.unselectTelemetryTag:t.selectTelemetryTag}"><img role="none" class="image" src="${t=>t.imgSrc}"/><div class="mask"></div><span role="presentation" class="heading" part="heading">${t=>t.heading}</span><div role="none" class="icon-container"><span class="icon${t=>t.selected?" check-icon":" follow-icon"}">${t=>t.selected?w.dy`${w.dy.partial(y.Z)}`:w.dy`${w.dy.partial(b.Z)}`}</span></div></template>`;let C=class extends r{};C=(0,o.gn)([(0,a.M)({name:"msn-follow-square-card",template:$,styles:v})],C)},10955:function(t,e,i){i.d(e,{N:function(){return P}});var o=i(33940),a=i(45900),n=i(63070),r=i(51576),s=i(28946),l=i(27535);var d=i(28904),c=i(42590),p=i(99452);class h extends d.H{constructor(){super(...arguments),this.actionAlignment="horizontal"}actionsSlottedNodesChanged(){var t;null===(t=this.actionsSlottedNodes[0])||void 0===t||t.focus()}}(0,o.gn)([(0,c.Lj)({attribute:"align-actions"})],h.prototype,"actionAlignment",void 0),(0,o.gn)([c.Lj],h.prototype,"hideStoryTitle",void 0),(0,o.gn)([c.Lj],h.prototype,"hideStorySubtitle",void 0),(0,o.gn)([p.LO],h.prototype,"actionsSlottedNodes",void 0);var g=i(78923),u=i(27186),m=i(29717),f=i(42689),v=i(32572),b=i(27782),y=i(22674),x=i(13400),w=i(64893),$=i(22798),C=i(92059),L=i(18544),k=i(97164),S=i(92531),T=i(89967),F=i(17533),A=i(22263);const _=g.i` :host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item#Undo){right:0}`,I=g.i` :host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item#Undo){left:0}`,j=g.i` :host{--hide-story-background:${(0,k.A4)((()=>L.dw))(S.ZP)};
        --button-color: ${(0,T.wF)((0,k.A4)((()=>L.dw)))(S.ZP)};
        --button-hover-color: ${(0,T.Xi)((0,k.A4)((()=>L.dw)))(S.ZP)};
        --stealth-button-color: ${(0,F.jq)((0,k.A4)((()=>L.dw)))(S.ZP)};
        --stealth-button-text-color: ${(0,A.Q)((0,k.A4)((()=>L.dw)))(S.ZP)}}:host(.hide-feedback.instant-hide){${(0,w.cN)(x.jG.CurrentMarket)?"--hide-story-background: linear-gradient(-90deg, #F6FAFF 2%, #F7FCFF 31.46%, #EAF6FF 97.33%);":"--hide-story-background: linear-gradient(90deg, #F6FAFF 2%, #F7FCFF 31.46%, #EAF6FF 97.33%);"}
    }
`,M=g.i` :host{--hide-story-background:${(0,k.l$)((()=>L.m0))(S.ZP)};
        --button-color: ${(0,T.wF)((0,k.l$)((()=>L.m0)))(S.ZP)};
        --button-hover-color: ${(0,T.Xi)((0,k.l$)((()=>L.m0)))(S.ZP)};
        --stealth-button-color: ${(0,F.jq)((0,k.l$)((()=>L.m0)))(S.ZP)};
        --stealth-button-text-color: ${(0,A.Q)((0,k.l$)((()=>L.m0)))(S.ZP)};
    }
`,E=g.i` :host{forced-color-adjust:auto}:host(.hide-feedback) ::slotted(fluent-menu-item){border-color:${$.H.ButtonText}}:host(.hide-feedback) ::slotted(fluent-menu-item:hover),:host(.hide-feedback) ::slotted(fluent-menu-item:focus){background-color:${$.H.Highlight};
        color: ${$.H.HighlightText}}:host(.hide-feedback) ::slotted(fluent-menu-item:focus),:host(.hide-feedback) ::slotted(fluent-button:focus){border-color:${$.H.ButtonText};
        box-shadow: 0 0 0 calc((var(--focus-stroke-width) - var(--stroke-width)) * 1px) ${$.H.ButtonText}}:host(.hide-feedback) ::slotted(.stealth-button:hover),:host(.hide-feedback) ::slotted(.stealth-button:focus){color:var(--stealth-button-text-color)}`,B=g.i`
        ${(0,u.j)("flex")} :host{--action-region-padding-top:0;--content-region-padding-top:16px;--content-region-width:236px;box-sizing:border-box;flex-direction:column;height:100%;position:relative;width:100%}:host(.hide-confirm[card-size="_1x_1y"]) .content-region{margin-inline:28px}:host(.hide-confirm[card-size="_1x_1y"]) ::slotted(fluent-button:hover),:host(.hide-feedback.hide-confirm[card-size="_1x_1y"]) ::slotted(fluent-button.stealth-button:hover){background:var(--button-hover-color)}:host(.hide-confirm[card-size="_1x_1y"]) ::slotted(fluent-button),:host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item),:host(.hide-feedback.instant-hide[card-size="_1x_1y"]) ::slotted(fluent-button.stealth-button){height:24px;font-size:var(--type-ramp-minus-1-font-size,12px);color:var(--neutral-foreground-rest);background:var(--button-color)}:host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item#Undo){position:absolute;height:18px;width:18px;top:0;margin-inline-end:8px;margin-top:8px;min-width:18px}:host([card-size="_1x_1y"]) .content-region{padding-top:20px;height:40px;width:232px}:host([card-size="_1x_1y"]) ::slotted(fluent-menu-item){height:24px}:host([card-size="_1x_1y"]) .action-region{padding-top:10px;padding-bottom:14px}.action-region{display:flex;position:absolute;padding:0 16px 16px;padding-top:var(--action-region-padding-top);justify-content:space-around;bottom:0;width:100%;box-sizing:border-box;align-items:center}:host([align-actions="vertical"]) .action-region{display:block;margin:auto;position:static}.content-region{display:inline-flex;flex-direction:column;align-items:center;padding:16px 16px 0 16px;padding-top:var(--content-region-padding-top);cursor:default}:host([align-actions="vertical"]) .content-region{display:block;margin:auto;text-align:center;width:var(--content-region-width)}.heading,::slotted(.heading){text-decoration:none;color:${f.C};
            font-size: var(--heading-font-size, ${v.P});
            line-height: var(--heading-line-height, ${v.b});font-weight:600;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:var(--heading-max-lines,2)}.subheading{font-size:var(--subheading-font-size,${b.c});
            line-height: var(--subheading-line-height, ${b.R});color:var(--stealth-button-text-color);display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:var(--heading-max-lines,2)}::slotted(fluent-button){margin-bottom:8px;width:48%}:host(.hide-feedback){background:var(--hide-story-background)}:host(.hide-feedback) ::slotted(fluent-menu-item),:host(.hide-confirm) ::slotted(fluent-button){background:var(--button-color);border:calc(var(--stroke-width) * 1px) solid transparent}:host(.hide-feedback) ::slotted(.stealth-button){background:var(--stealth-button-color);color:var(--stealth-button-text-color)}:host(.hide-feedback.instant-hide) ::slotted(.stealth-button){background:transparent}:host(.hide-feedback) ::slotted(fluent-menu-item:hover),:host(.hide-confirm) ::slotted(fluent-button:hover),:host(.hide-feedback.hide-confirm) ::slotted(.stealth-button:hover){background:var(--button-hover-color)}:host(.hide-feedback) ::slotted(fluent-menu-item:focus),:host(.hide-feedback) ::slotted(fluent-button:focus){border:calc(var(--stroke-width) * 1px) solid var(--focus-stroke-outer);box-shadow:0 0 0 calc((var(--focus-stroke-width) - var(--stroke-width)) * 1px) var(--focus-stroke-outer)}:host(.hide-feedback) ::slotted(.stealth-button:hover),:host(.hide-feedback) ::slotted(.stealth-button:focus){background:var(--stealth-button-color)}`.withBehaviors(new y.O(_,I),(0,m.vF)(E),new C.Y(j,M));var H=i(49218),z=i(93703),O=i(47548),D=i(95185);const R=H.dy`<div class="content-region" part="content-region"><slot name="heading"><span class="heading" part="heading">${t=>t.hideStoryTitle}</span></slot>${(0,z.g)((t=>t.hideStorySubtitle),H.dy`<span class="subheading" part="subheading">${t=>t.hideStorySubtitle}</span>`)}</div><div class="action-region" part="action-region"><slot name="actions" ${(0,O.Q)({property:"actionsSlottedNodes",filter:(0,D.R)("fluent-radio, fluent-button, fluent-anchor, fluent-menu-item")})}></slot></div>`;let P=class extends h{};P=(0,o.gn)([(0,d.M)({name:"msn-hide-story-card",template:R,styles:B,shadowOptions:{delegatesFocus:!0}})],P),a.D.define(n.H.registry),r.D.define(n.H.registry),s.D.define(n.H.registry),l.D.define(n.H.registry)},35099:function(t,e,i){i.d(e,{Ii:function(){return C},pB:function(){return L}});var o=i(33940),a=i(28904),n=i(42590);class r extends a.H{constructor(){super(...arguments),this.enabled=!1,this.isInfoPane=!1}}(0,o.gn)([n.Lj],r.prototype,"icon",void 0),(0,o.gn)([n.Lj],r.prototype,"text",void 0),(0,o.gn)([n.Lj],r.prototype,"extraBadgeStyle",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"enabled",void 0),(0,o.gn)([n.Lj],r.prototype,"layout",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean",attribute:"is-info-pane"})],r.prototype,"isInfoPane",void 0);var s=i(49218);const l=s.dy`<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 4H1V7.5C1 7.776 1.224 8 1.5 8H2.5C2.776 8 3 7.776 3 7.5V7H7V7.5C7 7.776 7.224 8 7.5 8H8.5C8.776 8 9 7.776 9 7.5V4H9.5C9.776 4 10 3.776 10 3.5C10 3.224 9.776 3 9.5 3H8.75L8.284 1.136C8.117 0.468 7.517 0 6.829 0H3.171C2.483 0 1.883 0.468 1.716 1.136L1.25 3H0.5C0.224 3 0 3.224 0 3.5C0 3.776 0.224 4 0.5 4ZM6 6H4C3.724 6 3.5 5.776 3.5 5.5C3.5 5.224 3.724 5 4 5H6C6.276 5 6.5 5.224 6.5 5.5C6.5 5.776 6.276 6 6 6ZM8.25 4.5C8.25 4.914 7.914 5.25 7.5 5.25C7.086 5.25 6.75 4.914 6.75 4.5C6.75 4.086 7.086 3.75 7.5 3.75C7.914 3.75 8.25 4.086 8.25 4.5ZM2.687 1.379C2.742 1.157 2.942 1 3.171 1H6.829C7.058 1 7.258 1.157 7.313 1.379L7.719 3H2.281L2.687 1.379ZM2.5 3.75C2.914 3.75 3.25 4.086 3.25 4.5C3.25 4.914 2.914 5.25 2.5 5.25C2.086 5.25 1.75 4.914 1.75 4.5C1.75 4.086 2.086 3.75 2.5 3.75ZM11.5 6H10.5C10.224 6 10 6.224 10 6.5V9H0.5C0.224 9 0 9.224 0 9.5C0 9.776 0.224 10 0.5 10H11.5C11.776 10 12 9.776 12 9.5V6.5C12 6.224 11.776 6 11.5 6Z" fill="black" fill-opacity="0.83"/>
</svg>
`,d=s.dy`<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.38909 11.6701L8.63932 12.4338C8.08675 12.9924 7.36969 13.7106 6.48803 14.5885C5.93704 15.1372 5.06295 15.1371 4.51208 14.5884L2.30692 12.3792C2.02977 12.0989 1.79778 11.8626 1.61091 11.6701C-0.536971 9.45796 -0.536971 5.87129 1.61091 3.65913C3.7588 1.44696 7.24121 1.44696 9.38909 3.65913C11.537 5.87129 11.537 9.45796 9.38909 11.6701ZM7.07926 7.84334C7.07926 6.94501 6.37218 6.21679 5.49999 6.21679C4.6278 6.21679 3.92074 6.94501 3.92074 7.84334C3.92074 8.74163 4.6278 9.46986 5.49999 9.46986C6.37218 9.46986 7.07926 8.74163 7.07926 7.84334Z" fill="#717171"/>
</svg>
`,c=s.dy`<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.06591 0.163636L0.156818 5.07273C-0.0522727 5.28182 -0.0522727 5.62727 0.156818 5.84545L4.15682 9.84545C4.36591 10.0545 4.71136 10.0545 4.92955 9.84545L9.83864 4.93636C9.93864 4.82727 9.99318 4.69091 9.99318 4.54545V0.545455C9.99318 0.245455 9.74773 0 9.44773 0H5.44773C5.30227 0 5.16591 0.0545455 5.06591 0.163636ZM8.52955 2.77273C8.475 2.89091 8.40227 3 8.31136 3.09091C8.22046 3.18182 8.12045 3.25455 7.99318 3.3C7.86591 3.34545 7.74773 3.38182 7.61136 3.38182C7.475 3.38182 7.33864 3.35455 7.22045 3.3C7.10227 3.25455 6.99318 3.18182 6.90227 3.09091C6.81136 3 6.73864 2.89091 6.69318 2.77273C6.63864 2.65455 6.61136 2.52727 6.61136 2.38182C6.61136 2.23636 6.63864 2.10909 6.69318 1.99091C6.73864 1.88182 6.81136 1.77273 6.90227 1.69091C6.99318 1.6 7.10227 1.52727 7.22045 1.47273C7.33864 1.41818 7.46591 1.39091 7.61136 1.39091C7.75682 1.39091 7.88409 1.41818 8.00227 1.47273C8.12046 1.52727 8.22955 1.6 8.31136 1.69091C8.40227 1.78182 8.475 1.88182 8.52955 2C8.58409 2.11818 8.61136 2.24545 8.61136 2.39091C8.61136 2.53636 8.575 2.65455 8.52955 2.77273Z" fill="white"/>
</svg>
`,p=s.dy`<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.60838 0.745943L0.244749 8.10958C-0.0688876 8.42322 -0.0688876 8.9414 0.244749 9.26867L6.24475 15.2687C6.55838 15.5823 7.07657 15.5823 7.40384 15.2687L14.7675 7.90503C14.9175 7.7414 14.9993 7.53685 14.9993 7.31867V1.31867C14.9993 0.86867 14.6311 0.500488 14.1811 0.500488H8.18111C7.96293 0.500488 7.75838 0.582306 7.60838 0.745943ZM12.8038 4.65958C12.722 4.83685 12.6129 5.00049 12.4766 5.13685C12.3402 5.27322 12.1902 5.38231 11.9993 5.45049C11.8084 5.51867 11.6311 5.57322 11.4266 5.57322C11.222 5.57322 11.0175 5.53231 10.8402 5.45049C10.6629 5.38231 10.4993 5.27322 10.3629 5.13685C10.2266 5.00049 10.1175 4.83685 10.0493 4.65958C9.96748 4.48231 9.92657 4.2914 9.92657 4.07322C9.92657 3.85503 9.96748 3.66412 10.0493 3.48685C10.1175 3.32322 10.2266 3.15958 10.3629 3.03685C10.4993 2.90049 10.6629 2.7914 10.8402 2.70958C11.0175 2.62776 11.2084 2.58685 11.4266 2.58685C11.6447 2.58685 11.8357 2.62776 12.0129 2.70958C12.1902 2.7914 12.3538 2.90049 12.4766 3.03685C12.6129 3.17322 12.722 3.32322 12.8038 3.50049C12.8857 3.67776 12.9266 3.86867 12.9266 4.08685C12.9266 4.30503 12.872 4.48231 12.8038 4.65958Z" fill="#717171"/>
</svg>
`,h=s.dy`<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.27351 0.971551C5.57068 0.342816 6.4293 0.342816 6.72646 0.971551L8.14149 3.96535L11.3055 4.44543C11.97 4.54625 12.2353 5.39895 11.7545 5.88833L9.46494 8.21866L10.0054 11.5092C10.1189 12.2002 9.42431 12.7272 8.82998 12.4009L5.99999 10.8474L3.17001 12.4009C2.57569 12.7272 1.88105 12.2002 1.99456 11.5092L2.53504 8.21866L0.245535 5.88833C-0.235291 5.39895 0.030035 4.54625 0.69452 4.44543L3.85854 3.96535L5.27351 0.971551Z" fill="#717171"/>
</svg>
`;class g extends r{constructor(){super()}badgeTypeChanged(){"CurbsidePickup"===this.badgeType?(this.icon=l,this.enabled=!0):"OnSale"===this.badgeType?(this.icon=c,this.enabled=!0):"PriceDrop"===this.badgeType?(this.icon=p,this.enabled=!0):"LocalInventory"===this.badgeType?(this.icon=d,this.enabled=!0):"NewProduct"===this.badgeType&&(this.icon=h,this.enabled=!0)}}(0,o.gn)([n.Lj],g.prototype,"badgeType",void 0),(0,o.gn)([n.Lj],g.prototype,"badgeStyle",void 0),(0,o.gn)([n.Lj],g.prototype,"text",void 0);var u=i(78923),m=i(81239);const f=u.i` .info-pane .image-badge,.river .image-badge{background:#0078D4}.info-pane .image-badge .badge-text,.river .image-badge .badge-text{position:static;width:auto;height:16px;left:22px;top:2px;font-style:normal;font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;color:#FFFFFF}.info-pane .badge-icon path,.river .badge-icon path{fill:#FFFFFF}`,v=u.i`.river .image-badge{background:rgba(0,0,0,0.54)}.river .image-badge .badge-text{position:static;width:auto;height:16px;left:22px;top:2px;font-style:normal;font-weight:500;font-size:12px;line-height:16px;text-transform:uppercase;color:#FFFFFF}.river .image-background-gradient{position:absolute;background:linear-gradient(to left top,rgba(180,180,180,0) 3.99%,rgba(180,180,180,0.05) 57.8%,rgba(180,180,180,0.15) 75.35%,rgba(180,180,180,0.3) 100%);width:100%;height:50px;z-index:1}.river .badge-icon path{fill:#FFFFFF}`,b=u.i` .image-badge-decorator{overflow:hidden;width:100%;height:100%}.image-badge{display:flex;flex-direction:row;align-items:center;padding:2px 8px 2px 4px;position:absolute;width:auto;height:20px;left:8px;top:8px;background:rgba(255,255,255,0.8);border-radius:4px;z-index:1}.badge-icon{line-height:14px;margin-left:4px}.badge-text{position:static;height:16px;right:12px;top:8.5px;font-size:12px;font-weight:600;line-height:14px;display:flex;align-items:center;text-align:right;flex:none;order:5;flex-grow:0;margin-left:8px;text-transform:uppercase}.image-badge-wrapper{z-index:1}.image-badge{background:rgba(43,43,43,0.7)}.badge-text{color:white}.badge-icon path{fill:white}${v}
`.withBehaviors(new m.w("_badgeStyle","standingOut",u.i`
            ${f}
        `),new m.w("_badgeStyle","blendedIn",u.i`
            ${v}
        `));var y=i(93703);const x=s.dy`<div class="image-badge-decorator" layout=${t=>t.layout}>${(0,y.g)((t=>t.enabled),s.dy`<div class="image-badge-wrapper ${t=>t.isInfoPane?"info-pane":"river"}" style=${t=>t.extraBadgeStyle}><div class="image-background-gradient"></div><div class="image-badge"><div class="badge-icon">${t=>t.icon}</div><div class="badge-text">${t=>t.text}</div></div></div><span part="image-with-badge"><slot name="image-with-badge"></slot></span>`)} ${(0,y.g)((t=>!t.enabled),s.dy`<slot name="image-with-badge"></slot>`)}</div>`,w=u.i` .image-badge-decorator{position:relative;filter:drop-shadow(rgba(0,0,0,0.25) 0px 0px 4px)}.image-badge-wrapper{height:var(--z-index-image-height);width:var(--z-index-image-width);position:absolute;margin:12px}@media (prefers-color-scheme:light){.image-badge-decorator[layout="imageAtBottom"]{.image-background-gradient{background:linear-gradient(120.95deg,rgba(34,34,34,0) 3.99%,rgba(34,34,34,0.05) 57.8%,rgba(34,34,34,0.15) 75.35%,rgba(34,34,34,0.35) 100%);transform:unset}}.river .image-background-gradient{height:100%}}.image-badge-decorator[layout="imageAtBottom"] .image-badge{display:flex;flex-direction:row;align-items:center;position:absolute;inset:auto 0 0 auto;border-radius:20px 0px 0px 0px}`;let $=class extends r{};$=(0,o.gn)([(0,a.M)({name:"msn-raw-image-badge-decorator",template:x,styles:b})],$);let C=class extends g{};C=(0,o.gn)([(0,a.M)({name:"msn-image-badge-decorator",template:x,styles:b})],C);let L=class extends g{};L=(0,o.gn)([(0,a.M)({name:"msn-z-index-image-badge-decorator",template:x,styles:[b,w]})],L)},58888:function(t,e,i){i.d(e,{$W:function(){return at}});var o,a,n=i(33940),r=i(28904),s=i(94537),l=i(97108),d=i(42590),c=i(99452),p=i(33379),h=i(66779);!function(t){t._1_column="1_column",t._2_column="2_column"}(o||(o={})),function(t){t.vertical="vertical",t.horizontal="horizontal"}(a||(a={}));class g extends r.H{constructor(){super(),this.slideKeyPressHandler=(t,e)=>{this.adjust(e),this.autoScrollHandler()},this.onPrevButtonClicked=()=>{this.adjust(-1),this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"),this.autoScrollHandler()},this.onNextButtonClicked=()=>{this.adjust(1),this.rotateDirection="forward",this.autoScrollHandler()},this.layout=o._2_column,this.freWelcomeAnimationRunning=!1,this.orientation=a.horizontal,this.activeindicator=!1,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.touchStart=!1,this.touchStartX=0,this.touchStartTabpanelLayoutX=0,this.touchDeltaX=0,this.touchStartTime=0,this.handleSwipeMove=t=>{this.touchDeltaX=t-this.touchStartX,0==this.activeTabIndex&&this.touchDeltaX>=0||this.activeTabIndex==this.tabIds.length-1&&this.touchDeltaX<=0?this.touchStart=!1:(this.touchStart=!0,this.tabpanelLayout.style.transform=`translateX(${this.touchStartTabpanelLayoutX+this.touchDeltaX}px)`)},this.handleSwipeEnd=t=>{if(!this.touchStart)return;const e=this.clientWidth,i=(this.touchStartX-t)/e,o=((new Date).getTime()-this.touchStartTime)/1e3;Math.abs(i)>.5||Math.abs(i)>.1&&o<.15?this.adjust(i>0?1:-1,!1):this.moveToTabpanelByIndex(this.activeTabIndex,!0),this.touchStart=!1,this.touchStartX=0,this.touchDeltaX=0,this.touchStartTime=0},this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach(((e,i)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const t=this.tabIds[i],o=this.tabpanelIds[i];e.setAttribute("id","string"!=typeof t?`tab-${i+1}`:t),e.setAttribute("aria-selected",this.activeTabIndex===i?"true":"false"),e.setAttribute("aria-controls","string"!=typeof o?`panel-${i+1}`:o),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===i?"0":"-1"),this.activeTabIndex===i&&(this.activetab=e)}else this.showActiveIndicator=!1;e.style[t]=`${i+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")})),this.tabsShowOrNot&&this.activeTabIndex>=0&&(this.tabsShowOrNot[this.activeTabIndex]=!0)},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds();const t=this.clientWidth;if(this.tabpanels.forEach(((e,i)=>{const o=this.tabIds[i],a=this.tabpanelIds[i];e.setAttribute("id","string"!=typeof a?`panel-${i+1}`:a),e.setAttribute("aria-labelledby","string"!=typeof o?`tab-${i+1}`:o),this.enableInfopaneSwipe?e.style.width=0==i&&0==t?"100%":`${t}px`:this.activeTabIndex!==i?e.setAttribute("hidden",""):e.removeAttribute("hidden")})),this.enableInfopaneSwipe){const t=1==Math.abs(this.prevActiveTabIndex-this.activeTabIndex);this.moveToTabpanelByIndex(this.activeTabIndex,t)}},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{const e=t.key;if(this.isHorizontal())switch(e){case s.BE:t.preventDefault(),this.adjustBackward(t),this.enableInfopaneRefactoring&&(this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"));break;case s.mr:t.preventDefault(),this.adjustForward(t),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}else switch(e){case s.SB:t.preventDefault(),this.adjustBackward(t),this.enableInfopaneRefactoring&&(this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"));break;case s.iF:t.preventDefault(),this.adjustForward(t),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}switch(e){case s.tU:t.preventDefault(),this.adjust(-this.activeTabIndex),this.enableInfopaneRefactoring&&(this.rotateDirection="forward");break;case s.Kh:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}},this.adjustForward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)+1:1,i===e.length&&(i=0);i<e.length&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}if(this.activetab&&i===e.indexOf(this.activetab))break;i+1>=e.length?i=0:i+=1}},this.adjustBackward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)-1:0,i=i<0?e.length-1:i;i>=0&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}i-1<0?i=e.length-1:i-=1}},this.moveToTabByIndex=(t,e)=>{const i=t[e];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,i.focus(),this.setComponent()},this.canAutoRotate=()=>this.enableInfopaneRefactoring?(this.enableRotateOnlyOnce&&!this.stopRotateDueShownAll&&0===this.activeTabIndex&&this.tabsShowOrNot&&this.tabsShowOrNot.every((t=>t))&&(this.stopRotateDueShownAll=!0),(!this.enableRotateAfterClick||!this.isFocusedOverAPeriodOfTime)&&(!this.stopRotateDueShownAll&&(!(!this.allowBlurScroll&&!this.isWindowFocused)&&(!(this.isFocused&&!this.enableRotateAfterClick)&&(!this.isMouseOver&&("visible"===document.visibilityState&&!!this.isInViewport)))))):!this.isFocused&&!this.isMouseOver&&(this.allowBlurScroll||!this.allowBlurScroll&&this.isWindowFocused)&&"visible"===document.visibilityState&&this.isInViewport,this.updateAutoRotateState=()=>{const t=this.canAutoRotate();t&&!this.timer?this.autoScrollHandler():!t&&this.timer&&this.clearAutoScrollHandler()},this.focusInHandler=(()=>{this.enableInfopaneRefactoring?(this.updateIsFocusedOverAPeriodOfTime(),this.isFocused=!0,this.updateAutoRotateState()):this.isFocused=!0}).bind(this),this.focusOutHandler=(()=>{this.enableInfopaneRefactoring?(this.clearIsFocusedOverAPeriodOfTime(),this.isFocused=!1,this.updateAutoRotateState()):(this.isFocused=!1,this.autoScrollHandler())}).bind(this),this.windowFocusHandler=(()=>{this.enableInfopaneRefactoring?(this.isWindowFocused=!0,this.updateAutoRotateState()):(this.isWindowFocused=!0,this.autoScrollHandler())}).bind(this),this.windowBlurHandler=(()=>{this.enableInfopaneRefactoring?(this.isWindowFocused=!1,this.updateAutoRotateState()):this.isWindowFocused=!1}).bind(this),this.mouseInHandler=(()=>{this.enableInfopaneRefactoring?(this.isMouseOver=!0,this.updateAutoRotateState()):(this.isMouseOver=!0,this.autoScrollHandler())}).bind(this),this.mouseOutHandler=(()=>{this.enableInfopaneRefactoring?(this.isMouseOver=!1,this.updateAutoRotateState()):(this.isMouseOver=!1,this.autoScrollHandler())}).bind(this),this.windowVisiabilityChange=(()=>{this.updateAutoRotateState()}).bind(this),this.touchStartHandler=(t=>{this.tabpanelLayout.classList.remove("tappanel-scroll-anim"),this.handleSwipeStart(t.touches[0].clientX)}).bind(this),this.touchMoveHandler=(t=>{t.preventDefault(),this.handleSwipeMove(t.touches[0].clientX)}).bind(this),this.touchEndHandler=(t=>{this.handleSwipeEnd(t.changedTouches[0].clientX)}).bind(this)}handleChange(){this.direction=h.o.getValueFor(this)}connectedCallback(){super.connectedCallback(),this.direction=h.o.getValueFor(this),(0,p.N)()&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.isFocused=!1,this.isWindowFocused=!0,this.isMouseOver=!1,this.rotateDirection="forward",h.o.subscribe(this),this.activeindicator||(this.activeindicator=!1),this.addEventListeners(),this.autoScrollHandler(),this.setIntersectionObserver())}disconnectedCallback(){this.enableInfopaneRefactoring?this.clearAutoScrollHandler():window.clearTimeout(this.timer),this.removeEventListeners(),this.unsetIntersectionObserver()}updateIsFocusedOverAPeriodOfTime(){this.isFocusedOverAPeriodOfTime=!0,this.focusTimer&&(window.clearTimeout(this.focusTimer),this.focusTimer=null),this.focusTimer=window.setTimeout((()=>{this.isFocusedOverAPeriodOfTime=!1,this.updateAutoRotateState(),this.focusTimer=null}),(this.rotateAfterClickIntervalMs||1e4)-(this.autoScrollIntervalMs||6e3))}clearIsFocusedOverAPeriodOfTime(){this.focusTimer&&(window.clearTimeout(this.focusTimer),this.focusTimer=null),this.isFocusedOverAPeriodOfTime=!1}clearAutoScrollHandler(){this.timer&&window.clearTimeout(this.timer),this.timer=null}autoScrollHandler(t=0){if(this.enableInfopaneRefactoring){if(this.disableAutoScroll||this.freWelcomeAnimationRunning)return void this.clearAutoScrollHandler();let e=0;e=t||(0===this.activeTabIndex&&void 0!==this.firstAutoScrollIntervalMs?this.firstAutoScrollIntervalMs:this.adTimerMap&&this.adTimerMap[this.activeTabIndex]?(this.autoScrollIntervalMs||6e3)+this.adTimerMap[this.activeTabIndex]:this.autoScrollIntervalMs||6e3),this.clearAutoScrollHandler(),this.timer=window.setTimeout((()=>{if(this.timer=null,this.canAutoRotate()){switch(this.rotateDirection){case"forward":this.adjust(1,!0);break;case"backward":this.adjust(-1,!0)}performance.mark("InfoPaneAR"),this.autoScrollHandler()}}),e)}else{if(this.disableAutoScroll||this.freWelcomeAnimationRunning)return void window.clearTimeout(this.timer);let t=0;t=0===this.activeTabIndex&&void 0!==this.firstAutoScrollIntervalMs?this.firstAutoScrollIntervalMs:this.adTimerMap&&this.adTimerMap[this.activeTabIndex]?(this.autoScrollIntervalMs||6e3)+this.adTimerMap[this.activeTabIndex]:this.autoScrollIntervalMs||6e3,this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout((()=>{this.canAutoRotate()&&(this.adjust(1,!0),performance.mark("InfoPaneAR")),this.autoScrollHandler()}),t)}}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition()),e&&(this.tabsShowOrNot=e.map((()=>!1)),this.stopRotateDueShownAll=!1)}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition(),this.activeid=this.tabIds[this.activeTabIndex])}getTabpanelLayoutX(){const t=this.tabpanelLayout.style.transform,e=parseInt(t.replace("translateX(","").replace("px",""));return isNaN(e)?0:e}handleSwipeStart(t){this.touchStartTime=(new Date).getTime(),this.touchStartX=t,this.touchStartTabpanelLayoutX=this.getTabpanelLayoutX(),this.touchDeltaX=0}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}moveToTabpanelByIndex(t,e){const i=this.clientWidth;e?this.tabpanelLayout.classList.add("tappanel-scroll-anim"):this.tabpanelLayout.classList.remove("tappanel-scroll-anim"),this.tabpanelLayout.style.transform=`translateX(${-i*t}px)`}getTabIds(){return this.tabs.map((t=>t.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((t=>t.getAttribute("id")))}setComponent(t){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.change(),this.setTabs(),this.handleActiveIndicatorPosition(),this.setTabPanels(),t||this.focusTab(),this.change())}isHorizontal(){return this.orientation===a.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const a=this.activeIndicatorRef[i]-o;0!=a&&(this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`),this.activeIndicatorRef.style.transform=`${e}(${a}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(t,e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,l.wt)(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent(e)}focusTab(){this.tabs[this.activeTabIndex].focus()}addEventListeners(){this.addEventListener("mouseenter",this.mouseInHandler,!0),this.addEventListener("focusin",this.focusInHandler,!0),this.addEventListener("focusout",this.focusOutHandler,!0),this.addEventListener("mouseleave",this.mouseOutHandler,!0),this.enableInfopaneSwipe&&(this.tabpanelLayout.addEventListener("touchstart",this.touchStartHandler,!0),this.tabpanelLayout.addEventListener("touchmove",this.touchMoveHandler,!0),this.tabpanelLayout.addEventListener("touchend",this.touchEndHandler,!0)),this.allowBlurScroll||(this.enableInfopaneRefactoring&&document.addEventListener("visibilitychange",this.windowVisiabilityChange,!0),window.addEventListener("focus",this.windowFocusHandler,!0),window.addEventListener("blur",this.windowBlurHandler,!0))}removeEventListeners(){this.removeEventListener("mouseenter",this.mouseInHandler),this.removeEventListener("focusin",this.focusInHandler),this.removeEventListener("focusout",this.focusOutHandler),this.removeEventListener("mouseleave",this.mouseOutHandler),this.enableInfopaneSwipe&&(this.tabpanelLayout.addEventListener("touchstart",this.touchStartHandler),this.tabpanelLayout.addEventListener("touchmove",this.touchMoveHandler),this.tabpanelLayout.addEventListener("touchend",this.touchEndHandler)),this.allowBlurScroll||(this.enableInfopaneRefactoring&&document.removeEventListener("visibilitychange",this.windowVisiabilityChange),window.removeEventListener("focus",this.windowFocusHandler),window.removeEventListener("blur",this.windowBlurHandler))}setIntersectionObserver(){if(this.intersectionObserver)return;this.intersectionObserver=new IntersectionObserver((t=>{this.isInViewport=t[0].intersectionRatio>0,this.enableInfopaneRefactoring&&this.updateAutoRotateState()}),{threshold:[0]}),this.intersectionObserver.observe(this)}unsetIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}}(0,n.gn)([d.Lj],g.prototype,"layout",void 0),(0,n.gn)([(0,d.Lj)({attribute:"auto-scroll",mode:"boolean"})],g.prototype,"autoScroll",void 0),(0,n.gn)([(0,d.Lj)({attribute:"disable-auto-scroll",mode:"boolean"})],g.prototype,"disableAutoScroll",void 0),(0,n.gn)([(0,d.Lj)({attribute:"enable-rotate-after-click",mode:"boolean"})],g.prototype,"enableRotateAfterClick",void 0),(0,n.gn)([d.Lj],g.prototype,"rotateAfterClickIntervalMs",void 0),(0,n.gn)([(0,d.Lj)({attribute:"auto-scroll-interval-ms"})],g.prototype,"autoScrollIntervalMs",void 0),(0,n.gn)([(0,d.Lj)({attribute:"first-auto-scroll-interval-ms"})],g.prototype,"firstAutoScrollIntervalMs",void 0),(0,n.gn)([(0,d.Lj)({attribute:"allow-blur-scroll",mode:"boolean"})],g.prototype,"allowBlurScroll",void 0),(0,n.gn)([(0,d.Lj)({attribute:"use-windows-styles",mode:"boolean"})],g.prototype,"useWindowsStyles",void 0),(0,n.gn)([(0,d.Lj)({attribute:"enable-rotate-only-once",mode:"boolean"})],g.prototype,"enableRotateOnlyOnce",void 0),(0,n.gn)([(0,d.Lj)({attribute:"enable-infopane-refactoring",mode:"boolean"})],g.prototype,"enableInfopaneRefactoring",void 0),(0,n.gn)([(0,d.Lj)({attribute:"enable-infopane-swipe",mode:"boolean"})],g.prototype,"enableInfopaneSwipe",void 0),(0,n.gn)([(0,d.Lj)({attribute:"rotate-prev-after-click-prev-button",mode:"boolean"})],g.prototype,"rotateBackAfterClickPrevButton",void 0),(0,n.gn)([(0,d.Lj)({attribute:"rotate-stop-after-click-prev-button",mode:"boolean"})],g.prototype,"rotateStopAfterClickPrevButton",void 0),(0,n.gn)([c.LO],g.prototype,"previousFlipperTitle",void 0),(0,n.gn)([c.LO],g.prototype,"nextFlipperTitle",void 0),(0,n.gn)([c.LO],g.prototype,"nextFlipperTelemetryTag",void 0),(0,n.gn)([c.LO],g.prototype,"previousFlipperTelemetryTag",void 0),(0,n.gn)([c.LO],g.prototype,"direction",void 0),(0,n.gn)([c.LO],g.prototype,"tabpanelLayout",void 0),(0,n.gn)([d.Lj],g.prototype,"orientation",void 0),(0,n.gn)([d.Lj],g.prototype,"activeid",void 0),(0,n.gn)([c.LO],g.prototype,"tabs",void 0),(0,n.gn)([c.LO],g.prototype,"tabpanels",void 0),(0,n.gn)([(0,d.Lj)({mode:"boolean"})],g.prototype,"activeindicator",void 0),(0,n.gn)([c.LO],g.prototype,"activeIndicatorRef",void 0),(0,n.gn)([c.LO],g.prototype,"showActiveIndicator",void 0);var u=i(82701),m=i(49218),f=i(93703),v=i(47548),b=i(41472),y=i(60577),x=i(34550),w=i(59997);const $=m.dy`<span part="next" class="next"><slot name="next"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z" /></svg></slot></span>`,C=m.dy`<span part="previous" class="previous"><slot name="previous"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z" /></svg></slot></span>`,L=m.dy`<slot name="previous-flipper"><button title="${t=>t.previousFlipperTitle}" part="previous-flipper" class="previous-flipper ${t=>t.useWindowsStyles?"windows":""}" tabIndex="0" @keypress="${(t,e)=>t.enableInfopaneRefactoring?t.onPrevButtonClicked():t.slideKeyPressHandler(e.event,-1)}" @click="${(t,e)=>t.enableInfopaneRefactoring?t.onPrevButtonClicked():t.slideKeyPressHandler(e.event,-1)}" data-t="${t=>t.previousFlipperTelemetryTag}">${(0,f.g)((t=>t.direction===w.N.rtl),m.dy` ${(0,f.g)((t=>t.useWindowsStyles),m.dy`${m.dy.partial(x.Z)}`)} ${(0,f.g)((t=>!t.useWindowsStyles),$)} `)} ${(0,f.g)((t=>t.direction===w.N.ltr),m.dy` ${(0,f.g)((t=>t.useWindowsStyles),m.dy`${m.dy.partial(y.Z)}`)} ${(0,f.g)((t=>!t.useWindowsStyles),C)} `)}</button></slot>${u.h}<div class="tablist ${t=>t.useWindowsStyles?"windows":""}" part="tablist" role="tablist"><slot class="tab" name="tab" part="tab" ${(0,v.Q)("tabs")}></slot>${(0,f.g)((t=>t.activeindicator),m.dy`<div ${(0,b.i)("activeIndicatorRef")} class="activeIndicator" part="activeIndicator"></div>`)}</div><slot name="next-flipper"><button title="${t=>t.nextFlipperTitle}" part="next-flipper" class="next-flipper ${t=>t.useWindowsStyles?"windows":""}" tabIndex="0" @keypress="${(t,e)=>t.enableInfopaneRefactoring?t.onNextButtonClicked():t.slideKeyPressHandler(e.event,1)}" @click="${(t,e)=>t.enableInfopaneRefactoring?t.onNextButtonClicked():t.slideKeyPressHandler(e.event,1)}" data-t="${t=>t.nextFlipperTelemetryTag}">${(0,f.g)((t=>t.direction===w.N.rtl),m.dy` ${(0,f.g)((t=>t.useWindowsStyles),m.dy`${y.Z}`)} ${(0,f.g)((t=>!t.useWindowsStyles),C)} `)} ${(0,f.g)((t=>t.direction===w.N.ltr),m.dy` ${(0,f.g)((t=>t.useWindowsStyles),m.dy`${x.Z}`)} ${(0,f.g)((t=>!t.useWindowsStyles),$)} `)}</button></slot>${u.z}<div class=${t=>t.enableInfopaneSwipe?"tabpanelscroll":"tabpanel"} ${(0,b.i)("tabpanelLayout")} @on-welcome-animation=${(t,e)=>{t.freWelcomeAnimationRunning=!0,t.autoScrollHandler()}} @after-welcome-animation=${(t,e)=>{t.freWelcomeAnimationRunning=!1,t.autoScrollHandler()}}><slot name="tabpanel" part="tabpanel" ${(0,v.Q)("tabpanels")}></slot></div>`;var k=i(53131),S=i(27782),T=i(42689),F=i(55135),A=i(62734),_=i(80260),I=i(958),j=i(22674),M=i(27186),E=i(29717),B=i(22798),H=i(78923),z=i(67739),O=i(9072);const D="M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z",R="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",P=H.i` .previous-flipper.windows:hover > svg > path,.previous-flipper.windows:focus-visible > svg > path{d:path("${D}")}.next-flipper.windows:hover > svg > path,.next-flipper.windows:focus-visible > svg > path{d:path("${R}");
    }
`,V=H.i` .previous-flipper.windows:hover > svg > path,.previous-flipper.windows:focus-visible > svg > path{d:path("${R}")}.next-flipper.windows:hover > svg > path,.next-flipper.windows:focus-visible > svg > path{d:path("${D}");
    }
`,Z=H.i`
    ${(0,M.j)("grid")} :host{--elevation:4;box-sizing:border-box;font-family:${k.S};
        font-size: ${S.c};
        line-height: ${S.R};
        color: ${T.C};
        background: ${O.A4};
        border-radius: calc(${F.rS} * 1px);
        ${A.XC};overflow:hidden;height:100%;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr;width:100%}:host(:hover) ::slotted([slot="previous-flipper"]),:host(:hover) .previous-flipper,:host(:hover) ::slotted([slot="next-flipper"]),:host(:hover) .next-flipper{opacity:1;transition:opacity 0.2s ease-in-out}.tappanel-scroll-anim{transition:transform .3s}.tablist{display:grid;grid-template-rows:auto auto;grid-template-columns:auto;position:absolute;bottom:6px;left:50%;transform:translate(-50%);width:max-content;align-self:center;justify-self:center;grid-row:1;grid-column:1 / span 3;z-index:3;cursor:pointer}.tablist.windows{display:none}.previous-flipper.windows,.next-flipper.windows{margin:0 8px;width:32px;height:32px;border-radius:16px;display:flex;align-items:center;justify-content:center;border:0px;--elevation:8;${A.XC};
        background: ${T.C};
        fill: ${_.jq}}.previous-flipper.windows:hover,.next-flipper.windows:hover,.previous-flipper.windows:focus-visible,.next-flipper.windows:focus-visible{--elevation:16}::slotted([slot="previous-flipper"]),.previous-flipper:not(.windows),::slotted([slot="next-flipper"]),.next-flipper:not(.windows){width:30px;height:56px;display:flex;justify-content:center;align-items:center;margin:0;position:relative;fill:${T.C};
        color: ${T.C};background:transparent;border:none;padding:0}::slotted([slot="previous-flipper"]),.previous-flipper{grid-column:1;grid-row:1 / span 2;align-self:center;z-index:2;opacity:0}::slotted([slot="next-flipper"]),.next-flipper{grid-column:3;grid-row:1 / span 2;align-self:center;z-index:2;opacity:0}::slotted([slot="previous-flipper"])::before,.previous-flipper:not(.windows)::before,::slotted([slot="next-flipper"])::before,.next-flipper:not(.windows)::before{content:"";opacity:0.3;background:${_.jq};position:absolute;top:0;right:0;left:0;bottom:0;transition:all 0.1s ease-in-out}.next,.previous{position:relative;${""} width:16px;height:16px}::slotted([slot="previous-flipper"]:hover),.previous-flipper:hover,::slotted([slot="next-flipper"]:hover),.next-flipper:hover{cursor:pointer}::slotted([slot="previous-flipper"]:${z.b}),
    .previous-flipper:${z.b},
    ::slotted([slot="next-flipper"]:${z.b}),
    .next-flipper:${z.b}{
        opacity: 1;
    }

    ::slotted([slot="previous-flipper"]:${z.b})::before,
    .previous-flipper:${z.b}::before,
    ::slotted([slot="next-flipper"]:${z.b})::before,
    .next-flipper:${z.b}::before{background:${_.Qp};opacity:1}::slotted([slot="previous-flipper"]:hover)::before,.previous-flipper:hover::before,::slotted([slot="next-flipper"]:hover)::before,.next-flipper:hover::before{background:${_.Qp};opacity:1}:host([layout="1-column"]){--heading-font-size:${S.c};
        --heading-line-height: ${S.R}}.activeIndicator{grid-row:2;grid-column:1;width:20px;height:3px;border-radius:calc(${F.UW} * 1px);
        justify-self: center;
        background: ${I.Av}}.activeIndicatorTransition{transition:transform 0.2s ease-in-out}.tabpanel{grid-row:1/3;grid-column-start:1;grid-column-end:4;position:relative}.tabpanelscroll{position:absolute;height:100%;display:flex}`.withBehaviors(new j.O(P,V),(0,E.Uu)(H.i` ::slotted([slot="previous-flipper"]),.previous-flipper:not(.windows),::slotted([slot="next-flipper"]),.next-flipper:not(.windows){fill:${_.jq};
                color: ${_.jq}}::slotted([slot="previous-flipper"])::before,.previous-flipper:not(.windows)::before,::slotted([slot="next-flipper"])::before,.next-flipper:not(.windows)::before{background:${T.C}}::slotted([slot="previous-flipper"]:hover)::before,.previous-flipper:hover::before,::slotted([slot="next-flipper"]:hover)::before,.next-flipper:hover::before{background:${T.C}}.previous-flipper.windows,.next-flipper.windows{fill:${T.C};
                background: ${O.A4}
            }

        `),(0,E.vF)(H.i` .activeIndicator{forced-color-adjust:none;background:${B.H.Highlight}}.previous-flipper.windows,.next-flipper.windows{background:${B.H.ButtonFace}}.previous-flipper.windows:hover,.next-flipper.windows:hover,.previous-flipper.windows:focus-visible,.next-flipper.windows:focus-visible{background:${B.H.Highlight};
                fill: ${B.H.HighlightText}
            }
        `));var N=i(49687);class U extends N.P{}var W=i(56758),G=i(16549);const q=H.i`
    ${(0,M.j)("flex")} :host{box-sizing:border-box;font-family:${k.S};
        font-size: ${G.s};
        line-height: ${G.v};
        height: 100%;
    }
`,X=U.compose({name:"msn-info-pane-panel",template:(0,W.o)(),styles:q});var J=i(31709);class Q extends J.g{}var Y=i(58245),K=i(26512),tt=i(17993);const et=H.i`
    ${(0,M.j)("inline-flex")} :host{box-sizing:border-box;font-family:${k.S};
        min-height: 6px;
        min-width: 6px;
        background-color: ${T.C};border-radius:20px;opacity:0.4;grid-row:1;z-index:1;margin:0px 2px}:host([aria-selected="true"]){z-index:2;opacity:1;min-width:30px}:host(:hover),:host(:active){background:${T.C};
        opacity: 1;
    }

    :host(:${z.b}){outline:none;box-shadow:0 0 0 calc((${K.vx} - ${K.H}) * 1px)
            rgba(0,0,0,1), 0 0 0 calc((${K.vx} + ${K.H}) * 1px)
            ${tt.yG}}:host(:focus){outline:none}`.withBehaviors((0,E.vF)(H.i` :host{forced-color-adjust:none;border-color:transparent;color:${B.H.ButtonText};
                fill: ${B.H.ButtonText}}:host(:hover),:host([aria-selected="true"]:hover){background:${B.H.Highlight};
                color: ${B.H.HighlightText};
                fill: ${B.H.HighlightText}}:host([aria-selected="true"]){background:${B.H.HighlightText};
                color: ${B.H.Highlight};
                fill: ${B.H.Highlight};
            }
            :host(:${z.b}){border-color:${B.H.ButtonText};
                box-shadow: none;
            }
        `)),it=Q.compose({name:"msn-info-pane-tab",template:(0,Y.O)(),styles:et});var ot=i(44475);let at=class extends g{};at=(0,n.gn)([(0,r.M)({name:"msn-info-pane",template:L,styles:Z})],at),X.define(ot.j.registry),it.define(ot.j.registry)},53357:function(t,e,i){i.d(e,{W:function(){return A}});var o=i(33940),a=i(28904),n=i(31699),r=i(99452),s=i(42590),l=i(84708),d=i(11935),c=i(9538),p=i(25193),h=i(54433),g=i(90351),u=i(26243);class m{constructor(t,e,i,o,a){this.childElements=this.getChildren(t,!1),this.visibleChildElements=this.getChildren(t,!0),this.containerElement=this.getContainerElement(t),this.parentElement=this.getParentElement(t),this.maxCount=e?(0,l.Z)(e):-1,this.maxHeight=i?(0,l.Z)(i):0,this.originalHeight=o?(0,l.Z)(o):0,this.onDecorationLinesExpanded=a}run(t){(0,d.Z)(t,(t=>{t(this)}))}getChildren(t,e){const i=e?t.querySelectorAll('div[name="inline-wrapper"]:not(.hidden)>*'):t.querySelectorAll('div[name="inline-wrapper"]>*'),o=[];i.forEach((t=>{const e=(0,l.Z)(t.getAttribute("priority"));o.push({item:t,priority:e})}));const a=(0,c.Z)(o,["priority"]);return(0,p.Z)(a,(t=>t.item))}getParentElement(t){return t.querySelector(".group-wrapper")}getContainerElement(t){return t.querySelector(".group-container")}hideElement(t){t.parentElement.className="hidden"}hideChildElements(t){for(;this.visibleChildElements.length>t;){const t=this.visibleChildElements.pop();if(t){if(!((0,l.Z)(t.getAttribute("priority"))>0)){this.childElements.push(t);break}this.hideElement(t)}}}showChildElementByIndex(t){this.childElements[t]&&this.childElements[t].parentElement.classList.remove("hidden")}hideChildElementByIndex(t){this.childElements[t]&&this.childElements[t].parentElement.classList.add("hidden")}}const f=t=>{let e=t.parentElement.getBoundingClientRect().width;if(t.visibleChildElements.length>0){const i=(0,h.Z)(t.visibleChildElements,(t=>{const i=t.getBoundingClientRect();return e-=(0,g.Z)(i,"width",0),(0,l.Z)(e)<0}));if(i>-1){const e=t.visibleChildElements.length;t.hideChildElements(i),e>0&&(0,u.O)(t.containerElement,"inlineGroup",`w,${e},${t.visibleChildElements.length}`,0)}}},v=t=>{if(t.maxCount>=0){const e=t.visibleChildElements.length;t.hideChildElements(t.maxCount),e>0&&(0,u.O)(t.containerElement,"inlineGroup",`c,${e},${t.visibleChildElements.length}`,0)}},b=t=>{let e=t.parentElement.getBoundingClientRect().height;if(t.originalHeight&&t.containerElement.setAttribute("style",`height: ${t.originalHeight}px;`),t.childElements.length>0){if(e<=t.maxHeight){let i=0;for(;e<=t.maxHeight&&i<=t.childElements.length-1;)t.showChildElementByIndex(i++),e=t.parentElement.getBoundingClientRect().height}if(e>t.maxHeight){const i=t.childElements.length;let o=i,a=t.childElements.length-1;for(;e>t.maxHeight&&a>=0;)t.hideChildElementByIndex(a--),o-=1,e=t.parentElement.getBoundingClientRect().height;i>0&&(0,u.O)(t.containerElement,"inlineGroup",`h,${i},${o}`,0)}}t.originalHeight&&t.originalHeight!==y(e)&&t.containerElement.setAttribute("style",`height: ${y(e)}px; transition: height 0.3s;`),t.onDecorationLinesExpanded&&x(e)&&t.onDecorationLinesExpanded(!0)},y=t=>t<25?25:t,x=t=>Math.ceil(t/25)>1;class w extends a.H{constructor(){super(...arguments),this.verticalMode=!1,this.onUpdate=()=>{((t,e,i,o,a,n)=>{const r=new m(t,e,o,a,n),s=[];i?s.push(b):(s.push(v),s.push(f)),r.run(s)})(this.shadowRoot,this.maxCount,this.verticalMode,this.maxHeight,this.originalHeight,this.onDecorationLinesExpanded)}}connectedCallback(){super.connectedCallback(),n.S.queueUpdate(this.onUpdate)}}(0,o.gn)([r.LO],w.prototype,"childElements",void 0),(0,o.gn)([s.Lj],w.prototype,"maxCount",void 0),(0,o.gn)([(0,s.Lj)({mode:"boolean"})],w.prototype,"verticalMode",void 0),(0,o.gn)([s.Lj],w.prototype,"originalHeight",void 0),(0,o.gn)([s.Lj],w.prototype,"maxHeight",void 0),(0,o.gn)([s.Lj],w.prototype,"onDecorationLinesExpanded",void 0);var $=i(49218),C=i(99026),L=i(95185),k=i(41472),S=i(89150);const T=$.dy`<template ${(0,C.N)({property:"childElements",filter:(0,L.R)()})}><div class="group-container" ${(0,k.i)("groupContainer")} part="group-container"><div class="group-wrapper" part="group-wrapper">${(0,S.rx)((t=>t.childElements),$.dy`<div name="inline-wrapper">${t=>$.dy`${t.outerHTML}`}</div>`)}</div></div></template>`;const F=i(78923).i` div[name="inline-wrapper"]{display:inline;white-space:normal}.group-container .group-wrapper div[name="inline-wrapper"].hidden{display:none}:host(:not(:defined)){display:none}`;let A=class extends w{};A=(0,o.gn)([(0,a.M)({name:"msn-inline-group",template:T,styles:F})],A)},85611:function(t,e,i){i.d(e,{w:function(){return x}});var o=i(14609),a=i(33940),n=i(28904),r=i(99452);class s extends n.H{}(0,a.gn)([r.LO],s.prototype,"nativeAdArticleData",void 0);var l=i(49218),d=i(89150),c=i(85574),p=i(25295);const h=l.dy`
    ${(0,d.rx)((t=>[t.nativeAdArticleData]),l.dy`
        <msft-article-card
            size="${t=>t.cardSize}"
            card-fill-color=${t=>t.adBackgroundColor}
        >
            <msft-article
                id="native_ad_${t=>t.id}"
                href=${t=>t.destinationUrl}
                target="_blank"
                title=${t=>t.title}
                ?image-priority=${t=>t.imagePriority}
                class="${t=>t.getArticleCardClassnames(t)}"
                data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
                :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
                ${(0,c.lq)()}
            >
                ${t=>t.createNativeAdFaviconWithProviderName}
                ${t=>t.renderTitle()}
                ${t=>t.videoProps?t.renderVideo("image",p.B._300x169,!0):t.renderImage("image",p.B._300x225)}
                ${t=>t.invertSlugPosition?t.renderStartSection("start-action",t.destinationUrl):t.renderStartSection("attribution",t.destinationUrl)}
                ${t=>t.renderEndSection("end-action")}
            </msft-article>
        </msft-article-card>
    `)}
`;var g=i(78923),u=i(53692),m=i(8006),f=i(24877),v=i(70193);const b=g.i` msft-article-card{height:100%;width:100%}msft-ad-label{margin-inline-end:8px}msft-article.native-ad,msft-article.${(0,v.lj)("native-ad")}{--article-native-ad-heading-margin-bottom:40px;--heading-max-lines:3}msft-article.nativeAdVideo-river::part(image){z-index:2}msft-article.native-ad.gradient,msft-article.${(0,v.lj)("native-ad")}.gradient{--article-native-ad-actions-height:33px;--article-native-ad-heading-margin-bottom:6px}msft-article.native-ad::part(heading),msft-article.${(0,v.lj)("native-ad")}::part(heading){margin-bottom:var(--article-native-ad-heading-margin-bottom);color:var(--msft-card-font-color)}msft-article.native-ad.long-gradient::part(gradient),msft-article.${(0,v.lj)("native-ad")}.long-gradient::part(gradient){top:-55px}msft-attribution{max-width:100%}msft-article.native-ad::part(actions),msft-article.${(0,v.lj)("native-ad")}::part(actions){height:var(--article-native-ad-actions-height);align-items:center}msft-article-card[size="_1x_2y"] msft-article.native-ad[class*="zoom-ratio"]:not(.no-image)::part(gradient):after,msft-article-card[size="_1x_2y"] msft-article.${(0,v.lj)("native-ad")}[class*="zoom-ratio"]:not(.no-image)::part(gradient):after{content:"";height:10px;width:100%;bottom:-5px;position:absolute;background:var(--gradient-mid-color)}@media (prefers-color-scheme:light){.white-gradient::part(article){background:#f7f7f7;--gradient-mid-color:#f7f7f7;--gradient-color:#f7f7f7;--msft-card-font-color:black}}@media (prefers-color-scheme:dark){.white-gradient::part(article){background:#242424;--gradient-mid-color:#242424;--gradient-color:#242424;--msft-card-font-color:white}}msft-article span.title_1x_2y,msft-article span.title_2x_2y{font-size:20px}msft-article.long-gradient::part(gradient){top:-55px}msft-article-card[size="_1x_2y"] msft-article[class*="zoom-ratio"]:not(.no-image)::part(gradient):after{content:"";height:10px;width:100%;bottom:-5px;position:absolute;background:var(--gradient-mid-color)}msft-attribution{position:relative;overflow:hidden}${f.T.getArticleCardHoverGradientStyle()}

`.withBehaviors(new u.j(["nativeAdArticleData"],(t=>{if(!t||!t.nativeAdArticleData)return g.i``;const e=t.nativeAdArticleData;let i="";return(e.isAdSlugV4NonDr||e.isTransparentAdSlugWithBorderV2NonDr)&&(i+=`msft-article.native-ad::part(heading), msft-article.${(0,v.lj)("native-ad")}::part(heading){--heading-max-lines:2}`),e.layoutGap&&(i+=`msft-article-card[size="_1x_2y"] msft-article::part(gradient){bottom:${67+e.layoutGap}px}msft-article-card[size="_2x_2y"] msft-article::part(gradient){bottom:0px}`),e.useTitleFontSize&&(i+=`msft-article-card msft-article.native-ad, msft-article-card msft-article.${(0,v.lj)("native-ad")}{--msft-article-heading-font-size:${e.useTitleFontSize}px;\n                    --msft-article-heading-line-height: 24px;\n                }\n            \n                msft-article-card msft-article.native-ad::part(attribution), msft-article-card msft-article.${(0,v.lj)("native-ad")}::part(attribution){height:28px}msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(heading),msft-article-card[size="_1x_2y"] msft-article.${(0,v.lj)("native-ad")}:not(.no-image)::part(heading){margin-bottom:11px}msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(gradient),msft-article-card[size="_1x_2y"] msft-article.${(0,v.lj)("native-ad")}:not(.no-image)::part(gradient){background:linear-gradient(180deg,transparent 0%,var(--gradient-mid-color) 46%,var(--gradient-color) 100%);top:5px}`),e.alignFooters&&(i+=`msft-article-card msft-article::part(heading):after{top:calc(100% - ${e.fixedCardHeight?304:292+(e.layoutGap||12)}px - 8px) !important}msft-article::part(text){margin-bottom:-8px}msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient){top:-29px;bottom:calc(${e.fixedCardHeight?79:67+(e.layoutGap||12)}px + 8px)}msft-article.no-image::part(actions){bottom:calc(var(--msft-article-padding) * 1px - 8px)}`),e.region===m.yp.rightRail&&e.renderFlattenedDesign&&(i+="msft-article-card{box-shadow:none}"),"Bierstadt"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Bierstadt,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Bierstadt,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--abstract-font-size:15px}msft-article-card msft-article msft-attribution::part(content){font-family:Bierstadt,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:calc(var(--type-ramp-minus-1-font-size) + 1px)}'),"Grandview"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Grandview,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Grandview,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif}msft-article-card msft-article msft-attribution::part(content){font-family:Grandview,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif}'),"Seaford"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Seaford,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Seaford,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--abstract-font-size:15px}msft-article-card msft-article msft-attribution::part(content){font-family:Seaford,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:calc(var(--type-ramp-minus-1-font-size) + 1px)}'),"Tenorite"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading){font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--msft-article-heading-line-height:24px;--heading-max-lines:3}msft-article-card msft-article p[slot="abstract"]{font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;--abstract-font-size:16px}msft-article-card msft-article msft-attribution::part(content){font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:calc(var(--type-ramp-minus-1-font-size) + 2px)}'),g.i` :host{grid-area:${e.grid_area}}msft-article-card msft-article::part(heading):after{top:calc(100% - ${e.fixedCardHeight?304:292+(e.layoutGap||12)}px)}msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient){bottom:${e.fixedCardHeight?77:65+(e.layoutGap||12)}px;
                }
                ${i}
            `})));class y extends s{}const x=(0,o.Z)((()=>{(0,n.M)({name:"msn-native-ad-article-card",template:h,styles:b})(y)}))},18179:function(t,e,i){i.d(e,{J0:function(){return o},Vy:function(){return a}});const o=t=>t.hoverState&&!t.hoverState.isHovered&&t.hoverState.isDecorationLinesExpanded?65:25,a=(t,e)=>{t.hoverState&&t.hoverState.isDecorationLinesExpanded!==e&&(t.hoverState.isDecorationLinesExpanded=e)}},792:function(t,e,i){i.d(e,{E2:function(){return $},E8:function(){return L},GZ:function(){return g},Lp:function(){return v},Ns:function(){return m},RV:function(){return x},eC:function(){return w},gx:function(){return u},pi:function(){return C},sV:function(){return y},zB:function(){return b}});var o=i(18179),a=i(29666),n=i(88875),r=i(13578),s=i(4935);const{RiverAnimatedImagery_9by16:l,RiverZIndex_9by16:d,RiverZIndex_3by4:c,ZIndex:p}=a.SI;var h;!function(t){t.LTR="leftToRight",t.RTL="rightToLeft"}(h||(h={}));const g=t=>{var e,i;if(t.hasAnyInlineDecoration)switch(null===(e=t.template)||void 0===e?void 0:e.templateType){case l:case c:case d:return"five-lines-heading";default:return"two-lines-heading"}else switch(null===(i=t.template)||void 0===i?void 0:i.templateType){case l:case c:case d:return"eight-lines-heading";default:return"three-lines-heading"}},u=(t,e)=>{var i;if([c,d,l].includes(null===(i=e.template)||void 0===i?void 0:i.templateType)){if("rtl"===t)return h.RTL;if("ltr"===t)return h.LTR}return""},m=t=>e=>{var i,a,n;const r=null===(i=null==e?void 0:e.hoverState)||void 0===i?void 0:i.isHovered,s=null===(a=null==e?void 0:e.template)||void 0===a?void 0:a.progressiveDisplay,p="call-to-action";switch(null===(n=e.template)||void 0===n?void 0:n.templateType){case l:case c:case d:return t(p,!1,s,65,r,!0,0,(t=>(0,o.Vy)(e,t)));default:return t(p,!1,s,r?65:25,r,!1,(0,o.J0)(e),(t=>(0,o.Vy)(e,t)))}};var f;!function(t){t.ImageAtTop="imageAtTop",t.ImageAtBottom="imageAtBottom",t.AnimatedImagery9by16="animatedImagery9by16",t.ImageAtRight9By16="imageAtRight9By16",t.ImageAtRight3By4="imageAtRight3By4"}(f||(f={}));const v=t=>{switch(t.template.templateType){case l:return f.AnimatedImagery9by16;case d:return f.ImageAtRight9By16;case c:return f.ImageAtRight3By4;case p:return t.template.flipZIndex?f.ImageAtTop:f.ImageAtBottom}},b=t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)||a.SI.Default},y=t=>{const{SpecialOfferNonDR:e,SpecialOfferNonDRWithExp:i,ComboSpecialOfferNonDR:o}=a.SI;return[e,i,o].includes(b(t))},x=t=>{const{SpecialOfferNonDRWithExp:e}=a.SI;return e===b(t)},w=t=>[a.SI.CallToActionV3,a.SI.CallToActionV3PA].includes(b(t)),$=t=>Boolean(b(t)===a.SI.ComboSaleHighlightNonDR),C=t=>{var e,i,o;t.disableRenderDecoration&&b(t)==a.SI.Default&&(t=>{if(t.assets&&!(0,r.Z)(t.assets)){const e=(0,s.Z)(t.assets,((t,e,i)=>(n.fs.includes(n.aT[i])&&(t[i]=e),t)),{});t.assets=e}})(t);const l=null===(e=t.template)||void 0===e?void 0:e.immersiveThemeColor,d=t.badge,c=t.videoProps,p=!!t.assets&&!(0,r.Z)(t.assets),h=(null===(i=t.template)||void 0===i?void 0:i.animatedImage)&&(null===(o=t.template)||void 0===o?void 0:o.animatedConfig),g=[a.SI.PseudoVideo,a.SI.Slideshow,a.SI.PatternOverlay,a.SI.AdCarousel,a.SI.ZIndex,a.SI.RiverAnimatedImagery_9by16,a.SI.RiverZIndex_9by16,a.SI.RiverZIndex_3by4,a.SI.CallToActionV3].includes(b(t));return!!(t.isTransparentAdSlugWithBorder||t.enableAdsColorBleed||t.isTransparentAdSlugWithBorderV2)||!c&&!!(d||p||h||g||l)},L=t=>{const e=!!t.assets&&!(0,r.Z)(t.assets),i=[a.SI.SpecialOfferNonDR,a.SI.SpecialOfferNonDRWithExp,a.SI.RatingHighlightRedNonDR,a.SI.RatingHighlightYellowNonDR,a.SI.RatingDefaultYellowNonDRStatic,a.SI.RatingHighlightYellowNonDRStatic,a.SI.FreeShippingPlainTextNonDR,a.SI.FreeShippingInlineNonDR,a.SI.FreeShippingTopLeftNonDR,a.SI.FreeShippingTopRightNonDR,a.SI.ConditionNonDR,a.SI.ReturnPolicyNonDR,a.SI.SoldNonDR,a.SI.ComboFreeShippingNonDR,a.SI.ComboRatingNonDR,a.SI.ComboSpecialOfferNonDR,a.SI.ComboSoldNonDR,a.SI.ComboReturnPolicyNonDR,a.SI.ComboConditionNonDR].includes(b(t));return!(e||!i)}},41678:function(t,e,i){i.d(e,{h:function(){return m}});var o=i(14609),a=i(33940),n=i(28904),r=i(99452);class s extends n.H{}(0,a.gn)([r.LO],s.prototype,"nativeAdHpStripeData",void 0);var l=i(49218),d=i(89150),c=i(85574),p=i(25295);const h=l.dy`
    ${(0,d.rx)((t=>[t.nativeAdHpStripeData]),l.dy`
        <msft-content-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,c.lq)()}
        >
            ${t=>t.title}
            ${t=>t.renderImageTag("media",p.B._300x200)}
            <msft-attribution slot="start-actions">
                ${t=>t.providerData.name}
            </msft-attribution>
            <div slot="end-actions"></div>
        </msft-content-card>
    `)}
`;const g=i(78923).i` msft-content-card{--heading-max-lines:3}msft-content-card msft-attribution{margin-inline-start:-13px}msft-content-card img[slot="media"]{width:306px;height:200px;object-fit:cover}`;class u extends s{}const m=(0,o.Z)((()=>{(0,n.M)({name:"msn-native-ad-hp-stripe-card",template:h,styles:g})(u)}))},2438:function(t,e,i){i.d(e,{f3:function(){return X}});var o=i(14609),a=i(33940),n=i(28904),r=i(99452);class s extends n.H{}(0,a.gn)([r.LO],s.prototype,"data",void 0);var l=i(49218),d=i(89150),c=i(792),p=i(13578),h=i(93703),g=i(90351),u=i(19628),m=i(85574);const f=l.dy`
    <style>
        :host {
            grid-area:${t=>t.grid_area};
        }
        .card-button {
            border-radius: 100%;
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="grid-area:${t=>t.grid_area};height: ${t=>t.ContentCardImageSizes._300x304.height}px;"
        class="${t=>t.cardSize}"
    >
        <msn-pattern-overlay-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
            layout=${t=>(0,g.Z)(t,"template.landscapeOverlay",!1)?"landscape":"default"}
            shopNowText=${t=>(0,g.Z)(t.localizedStrings,"nativeAdShopNowText")}
            price=${t=>(0,g.Z)(t,"assets.salePrice")||(0,g.Z)(t,"assets.price")}
        >
            ${l.dy`<span>${t=>t.title}</span>`}
            ${t=>(0,g.Z)(t,"template.landscapeOverlay",!1)?t.renderImage("media",t.ContentCardImageSizes._300x174,t.ContentCardImageSizes._300x174):t.renderImage("media",t.ContentCardImageSizes._300x225,t.ContentCardImageSizes._300x225)}
            ${l.dy`
    ${(0,h.g)((t=>t.template.landscapeOverlay),l.dy`
        <msft-attribution slot="${t=>t.hasAnyInlineDecoration?"call-to-action-two-lines":"call-to-action-one-line"}">
            <!-- price, when salePrice is present, use salePrice as the actual price -->
            ${(0,h.g)((t=>(0,g.Z)(t,"assets.salePrice")||(0,g.Z)(t,"assets.price")),l.dy`
                <decoration-price data=${t=>t.assets.salePrice||t.assets.price} largeFont="false"></decoration-price>
            `)}
            ${(0,h.g)((t=>t.hasAnyInlineDecoration),l.dy`
                <div>
                    ${t=>(t=>(0,g.Z)(t,"assets.installmentPrice")&&(0,g.Z)(t,"assets.price")?l.dy`
            <decoration-installment-price
                data="${t=>t.assets.installmentPrice}"
                price-format-now="${t=>(0,g.Z)(t.localizedStrings,"nativeAdInstallmentPriceFormatNow")}"
                price-format-plan="${t=>(0,g.Z)(t.localizedStrings,"nativeAdInstallmentPriceFormatPlan")}"
            ></decoration-installment-price>
        `:(0,g.Z)(t,"assets.rating")?l.dy`<decoration-rating rating="${t.assets.rating}" count="${t.assets.likes}" />`:(0,g.Z)(t,"assets.curbsidePickup")?l.dy`<decoration-curbside-pickup data="${t.localizedStrings.nativeAdCurbsidePickupText}" />`:(0,g.Z)(t,"assets.freeShipping")?l.dy`<decoration-free-shipping data="${t.localizedStrings.nativeAdFreeShippingText}" />`:(0,g.Z)(t,"assets.salePrice")&&(0,g.Z)(t,"assets.price")?l.dy`
            <div>
                <div style="display: inline-block;"><decoration-price-strike-through data="${t.assets.price}"/></div>
                <div style="display: inline-block;"><decoration-price-off data=" &bull; ${u.Ld.Format(t.localizedStrings.nativeAdOnSaleText,t.assets.discount)}" /></div>
            </div>
        `:l.dy`<div />`)(t)}
                </div>
            `)}
        </msft-attribution>
    `)}
    ${(0,h.g)((t=>!t.template.landscapeOverlay),l.dy`
        <!-- when it's not landscape layout, only show price on left bottom if price or sale price is available, otherwise show "Shop now" -->
        <msft-attribution slot="call-to-action-two-lines">
            <decoration-price data=${t=>(0,g.Z)(t,"assets.salePrice")||(0,g.Z)(t,"assets.price")||t.localizedStrings.nativeAdShopNowText} largeFont="false"/>
        </msft-attribution>
    `)}
`}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-pattern-overlay-card>
    </fluent-card>
`;var v=i(19636),b=i(28258),y=i(17579),x=i(29666);const w=252;function $(t){var e;const i=Number(t.template&&t.template.desiredWidth||t.imageData.imageWidth),o=Number(t.template&&t.template.desiredHeight||t.imageData.imageHeight),a=Math.floor(142*i/o),n=Math.floor(o*w/i);if(t.template&&t.template.templateType===x.SI.RiverZIndex_9by16)return{w:113,h:202};if(t.template&&t.template.templateType===x.SI.RiverZIndex_3by4)return{w:113,h:150};if((null===(e=t.template)||void 0===e?void 0:e.templateType)===x.SI.RiverAnimatedImagery_9by16)return{w:141,h:250};if(t.template&&t.template.desiredRatio){if(t.template.desiredRatio===x.hb._191by1)return{w,h:n};if(t.template.desiredRatio===x.hb._1by1||t.template.desiredRatio===x.hb._4by3||t.template.desiredRatio===x.hb._16by9)return{w:a,h:142}}return a>w?{w,h:n}:{w:a,h:142}}var C=i(35099);C.Ii,C.pB,b.MsnZIndexCard;const L=l.dy`
    <div slot="image-with-badge">
        <img
            src="${t=>t.imageData.source}"
            alt="${t=>t.imageData.altText}"
            style="
                background: white;
                border-top-right-radius: ${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)===x.SI.RiverAnimatedImagery_9by16?"calc(var(--layer-corner-radius) * 1px)":"unset"}};
                border: ${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)===x.SI.RiverAnimatedImagery_9by16?"unset":"10px solid #FFFFFF"}};
                filter: ${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)===x.SI.RiverAnimatedImagery_9by16?"unset":"drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))"}};
                width: ${t=>$(t).w}px;
                min-width: ${t=>$(t).w}px;
                height: ${t=>$(t).h}px;
                min-height: ${t=>$(t).h}px;
                object-fit: cover;
            "
        />
    </div>
`,k=l.dy`
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="
            background: unset;
            border-radius: unset;
            box-shadow: unset;
            grid-area:${t=>t.grid_area};
            height: ${t=>t.ContentCardImageSizes._300x304.height+16}px;
            left: -8px;
            position: relative;
            top: -8px;
            width: ${t=>t.ContentCardImageSizes._300x304.width+16}px;
        "
        class="${t=>t.cardSize}"
    >
        <msn-z-index-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            layout=${t=>(0,c.Lp)(t)}
            heading-max-lines=${t=>(0,c.GZ)(t)}
            document-direction=${t=>(0,c.gx)(document.dir,t)} 
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
        >
            ${t=>t.renderTitle()}
            <!--
                For now z-index only supports 1x_2y and with image data, here the assumption is that's the only configuration will be sent to z-index.
            -->
            <div slot="media">
                <style>
                    :host {
                        --z-index-image-width: ${t=>$(t).w}px;
                        --z-index-image-height: ${t=>$(t).h}px;
                        --heading-max-lines: ${t=>t.hasAnyInlineDecoration?2:3};
                    }
                </style>
                ${(0,h.g)((t=>t.badge),l.dy`
                    <msn-z-index-image-badge-decorator
                        badgeType=${t=>t.badge.type}
                        text=${t=>t.badge.text}
                        layout=${t=>(0,c.Lp)(t)}
                    >
                        <div slot="image-with-badge" part="image-with-badge">
                            ${L}
                        </div>
                    </msn-z-index-top-image-badge-decorator>
                `)}
                ${(0,h.g)((t=>!t.badge),l.dy`
                    ${L}
                `)}
            </div>
            ${t=>(0,c.Ns)(y.o)(t)}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-z-index-card>
    </fluent-card>
`,S=l.dy`
    <msn-ad-carousel-slide>
        <img slot="carousel-slide-content" class="carousel-item" src= ${t=>t.imageUrl} />
    </msn-ad-carousel-slide>
`,T=l.dy`
    .carousel-item {
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
    :host {
        border-radius: unset;
        box-shadow: unset;
        grid-area:${t=>t.grid_area};
        height: ${t=>t.ContentCardImageSizes._300x304.height+4}px;
        position: relative;
        width: ${t=>t.ContentCardImageSizes._300x304.width+4}px
    }
`,F=l.dy`
    <style>
        ${T}
    </style>
    <fluent-card 
        id="native_ad_${t=>t.id}"
        style="
            border-radius: unset;
            box-shadow: unset;
            grid-area:${t=>t.grid_area};
            height: ${t=>t.ContentCardImageSizes._300x304.height+4}px;
            position: relative;
            width: ${t=>t.ContentCardImageSizes._300x304.width+4}px
        "
        class="${t=>t.cardSize}"
    >
        <msn-ad-carousel-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
        >
            ${t=>t.renderTitle()}
            ${A="media",l.dy`
    <div slot="${A}" style="width: 300px;height: 180px;">
        <msn-ad-carousel 
            cardId=${t=>t.id} 
            visibleSlideCount = "3" 
            :updateActiveIndex=${t=>t.activeItemChangedHandler}
        >
            ${(0,d.rx)((t=>t.carouselData),S)}
        </msn-ad-carousel>
    </div>
`}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-ad-carousel-card>
    </fluent-card>
`;var A;const _=(t={})=>l.dy`
    <style>
        msn-animation-decorator img.crop {
            position: relative;
            left: -44px;
        }
    </style>
    <msn-animation-decorator
        effectId=${t=>t.id}
        showMultiTimes
        animationType=${t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.animatedImage}}
        :animationConfig=${t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.animatedConfig}}
        intersectionRootMargin="-160px 0px 0px 0px"
    >
        ${e=>e.renderImageTag("anim-content",t)}
    </msn-animation-decorator>
`,I=l.dy`
    <style>
        :host {
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
            grid-area: ${t=>t.grid_area};
        }
        .card-button:not(:hover) {
            background: transparent;
        }
        msft-content-card fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card.nativeAdVideo-river::part(media) {
            z-index: 2;
        }
        msft-content-card::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-content-card.wideIconMargin msft-ad-label {
            margin-right: 8px;
        }
        msft-attribution {
            position: relative;
            overflow: hidden;
        }
        /* override default call-to-action style from msft-content-card */
        msft-attribution.native-ad-river-card {
            z-index: unset;
            bottom: 42px;
            position: absolute;
        }
        msft-content-card span.title_1x_2y,
        msft-content-card span.title_1x_3y {
            font-size: 20px;
        }
        msft-content-card.native-ad-content-card::part(heading-container) {
            background: var(--fill-color);
        }
        msft-content-card.native-ad-content-card::part(media-wrapper) {
            height: 156px;
            transition: height  0.3s;
            overflow: hidden;
        }
        msft-content-card.two-lines-heading::part(heading) {
            --heading-max-lines: 2;
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="grid-area:${t=>t.grid_area}"
        class="${t=>t.cardSize}"
    >
        <msft-content-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            class="two-lines-heading ${t=>t.getContentCardClassnames(t)}"
            data-t="${t=>t.adTelemetryContext.nativeAdCard.getMetadataTag()}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
        >
            ${t=>t.renderTitle()}
            ${t=>t.videoProps?t.renderVideo("media",t.ContentCardImageSizes._300x156):((t,e,i={})=>l.dy`
    <!--
        Only use placeholder when the card size is 1x_2y
    -->
    ${(0,h.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&t.imageData),l.dy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
            ${_(i)}
        <div>
    `)}
    ${(0,h.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&!t.imageData),l.dy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;"></div>
    `)}
    ${(0,h.g)((t=>t.cardSize!==t.FeedLayoutCardSize._1x_2y&&t.imageData),l.dy`
        <div slot="${t}">
            ${_(i)}
        </div>
    `)}
`)("media",t.ContentCardImageSizes._300x156)}
            ${t=>t.renderStartSection(t.isProviderInHeader?"attribution":"start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msft-content-card>
    </fluent-card>
`,j=l.dy`
    <style>
        :host {
            grid-area:${t=>t.grid_area};
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
        "
        class="${t=>t.cardSize}"
    >
        <msn-slideshow
            :images="${t=>t.images}"
            :imageData="${t=>t.imageData}"
            :autoScroll="${t=>t.slideshowProps.autoScroll}"
            :autoScrollIntervalMs="${t=>t.slideshowProps.autoScrollIntervalMs}"
            :enableMediaControls="${t=>t.slideshowProps.enableSlideshowMediaControls}"
            :destinationUrl=${t=>t.destinationUrl}
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            :badge=${t=>t.badge}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            ${(0,m.lq)(!0,!0,!0)}
            title=${t=>t.title}
        >
            ${t=>t.renderTitle()}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-slideshow>
    </fluent-card>
`,{Default:M,ZIndex:E,RiverAnimatedImagery_9by16:B,RiverZIndex_9by16:H,RiverZIndex_3by4:z,PatternOverlay:O,AdCarousel:D,Slideshow:R,PseudoVideo:P,CallToActionV3:V}=x.SI,Z=l.dy`
    <template>
        <style>
            msft-content-card.native-ad-content-card:hover::part(media-wrapper) {
                transition: height  0.3s;
                overflow: hidden;
                height: ${t=>{var e;return(null===(e=t.data.hoverState)||void 0===e?void 0:e.isDecorationLinesExpanded)?"116px":""}}
            }
        </style>
        ${(0,d.rx)((t=>[t.data]),l.dy`
            ${t=>(t=>{var e,i,o;const a=(0,c.zB)(t)===E,n=(0,c.zB)(t)===B,r=(0,c.zB)(t)===H,s=(0,c.zB)(t)===z,l=(0,c.zB)(t)===R,d=(0,c.zB)(t)===P,h=(0,c.zB)(t)===O,g=(0,c.zB)(t)===D,u=!!t.assets&&!(0,p.Z)(t.assets),m=(0,c.zB)(t)===M&&(null===(e=t.template)||void 0===e?void 0:e.animatedImage)&&(null===(i=t.template)||void 0===i?void 0:i.animatedConfig),b=(0,c.zB)(t)===V,y=null===(o=t.template)||void 0===o?void 0:o.immersiveThemeColor;return h?f:u||y||b?v.zG:a||n||r||s?k:g?F:m?I:l||d?j:void 0})(t)}
        `)}
    </template>
`;var N=i(38492),U=i(78923),W=i(48072);const G=U.i` msft-content-card fluent-button::part(control){padding:0}msft-content-card.nativeAdVideo-river::part(media){z-index:2}msft-content-card::part(footer){padding:0 16px 4px;margin-bottom:0;height:40px}msft-content-card.wideIconMargin msft-ad-label{margin-inline-end:8px}msft-attribution{position:relative;overflow:hidden}msft-attribution.native-ad-river-card{bottom:42px;position:absolute;z-index:unset}msft-content-card span.title_1x_2y,msft-content-card span.title_1x_3y{font-size:20px}msft-content-card.native-ad-content-card::part(heading-container){background:${N.I}}msft-content-card.native-ad-content-card::part(media-wrapper){height:156px;transition:height 0.3s;overflow:hidden}msft-content-card.two-lines-heading::part(heading){--heading-max-lines:2}msft-content-card.three-lines-heading::part(heading){--heading-max-lines:3}msft-article msft-attribution[slot="attribution"].margin-5-decoration{margin-bottom:5px}`.withBehaviors(new W.i("data.template.nativeAdMode",x.di.Adult,U.i` .card-button:not(:hover){background:transparent}`));class q extends s{}const X=(0,o.Z)((()=>{(0,n.M)({name:"msn-native-ad-card-template-facade",template:Z,styles:G})(q)}))},19636:function(t,e,i){i.d(e,{kH:function(){return nt},zG:function(){return st}});var o=i(49218),a=i(93703),n=i(29666),r=i(33940),s=i(28904),l=i(42590),d=i(26415),c=i(92773),p=i(84446);let h=class extends p.F{constructor(){super(...arguments),this.badgeText="",this.badgeTextColor="#FFFFFF",this.badgeBackgroundColor="#0078D4",this.badgeTextSize="12",this.badgeTextLineHeight="16",this.badgeTextFontWeight="600",this.badgeBorderRadius="4",this.paddingTop="",this.paddingBottom="",this.paddingLeft="",this.paddingRight=""}};(0,r.gn)([(0,l.Lj)({attribute:"badge-text"})],h.prototype,"badgeText",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-color"})],h.prototype,"badgeTextColor",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-background-color"})],h.prototype,"badgeBackgroundColor",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-size"})],h.prototype,"badgeTextSize",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-line-height"})],h.prototype,"badgeTextLineHeight",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-font-weight"})],h.prototype,"badgeTextFontWeight",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-border-radius"})],h.prototype,"badgeBorderRadius",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-top"})],h.prototype,"paddingTop",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-bottom"})],h.prototype,"paddingBottom",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-left"})],h.prototype,"paddingLeft",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-right"})],h.prototype,"paddingRight",void 0),h=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-badge")],h);var g=i(78923),u=i(41503),m=i(53692);const f=g.i`


`.withBehaviors(new u.g("layoutStyle"),new m.j(["badgeTextSize","badgeTextLineHeight","badgeBackgroundColor","badgeBorderRadius","paddingTop","paddingBottom","paddingLeft","paddingRight","badgeTextColor","badgeTextFontWeight"],(t=>{const e=` .native-ad-badge{line-height:${t.badgeTextLineHeight}px;\n                font-size: ${t.badgeTextSize}px;\n                background-color: ${t.badgeBackgroundColor};\n                border-radius: ${t.badgeBorderRadius}px;\n                padding-top:${t.paddingTop}px;\n                padding-bottom:${t.paddingBottom}px;\n                padding-left:${t.paddingLeft}px;\n                padding-right:${t.paddingRight}px;\n                color:${t.badgeTextColor};\n                font-weight:${t.badgeTextFontWeight};\n            }\n        `;return g.i`${e}`}))),v=o.dy`<span class="native-ad-badge">${t=>t.badgeText}</span>`;let b=class extends h{};b=(0,r.gn)([(0,s.M)({name:"msn-native-ad-badge",template:v,styles:f})],b);var y=i(99452);let x=class extends p.F{constructor(){super(),this.text="",this.forInfopane=!0,this.backgroundColor="",this.defaultBackgroundColor="#FFFFFF",this.color="#2065C1",this.isHovered=!1,this.ctaMode="default",this.destinationUrl="",this.telemetryMetadata=void 0,this.darkModeQuery=window.matchMedia("(prefers-color-scheme:dark)"),this.darkMode=!!this.darkModeQuery.matches}themeChangeListener(t){this.darkMode=!!(null==t?void 0:t.matches)}connectedCallback(){super.connectedCallback(),this.darkModeQuery.addEventListener("change",this.themeChangeListener.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.darkModeQuery.removeEventListener("change",this.themeChangeListener.bind(this))}};(0,r.gn)([l.Lj],x.prototype,"text",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean",attribute:"for-infopane"})],x.prototype,"forInfopane",void 0),(0,r.gn)([(0,l.Lj)({attribute:"background-color"})],x.prototype,"backgroundColor",void 0),(0,r.gn)([(0,l.Lj)({attribute:"default-background-color"})],x.prototype,"defaultBackgroundColor",void 0),(0,r.gn)([l.Lj],x.prototype,"color",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-hovered"})],x.prototype,"isHovered",void 0),(0,r.gn)([(0,l.Lj)({attribute:"cta-mode"})],x.prototype,"ctaMode",void 0),(0,r.gn)([(0,l.Lj)({attribute:"destination-url"})],x.prototype,"destinationUrl",void 0),(0,r.gn)([(0,l.Lj)({attribute:"tel-metadata"})],x.prototype,"telemetryMetadata",void 0),(0,r.gn)([y.LO],x.prototype,"darkMode",void 0),x=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-call-to-action")],x);const w=g.i`
.call-to-action {
    background-color: #FFFFFF;
    color: #2065C1;
    font-size: 14px; 
    font-weight: 600;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
}

.call-to-action-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    opacity: 0.3;
}

.call-to-action-txt {
    position: relative;
    border-radius: 20px;
    padding-left: 12px;
    padding-right: 12px;
}

.call-to-action-icon-container {
    background-color: #C6C0BA;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: relative;
}

.call-to-action-icon-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.3;
}

.call-to-action-icon {
    width: 9px;
    height: 15px;
    left: 12px;
    top: 8px;
    position: absolute;
    display: flex;
}

.call-to-action-mask-container {
    background: linear-gradient(180deg, rgba(43, 43, 43, 0.9) 0%, rgba(43, 43, 43, 0.35) 100%);
    position: absolute;
    width: 100%;
    height: 304px;
    bottom: 0;
    left: 0;
    animation: fadeIn 0.1s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.call-to-action-mask-wrapper {
    width: fit-content;
    position: absolute;
    top: 113px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
}

.call-to-action-mask-text {
    font-size: 19px;
    font-weight: 600;
    display: inline-block;
}

.call-to-action-mask-icon{
    display: inline-block;
    width: 16px;
    height: 14px;
    margin-inline: 5px;
}

.txt-button-wrapper {
    display: inline-block;
    position: relative;
    padding: 4px 12px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 100px;
    font-weight: 400;
    text-decoration: none;
}

.txt-button-wrapper::before {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 50px;
    padding: 1px;
    -webkit-mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    -webkit-mask-composite: xor;
    pointer-events: none;
}
`.withBehaviors(new u.g("layoutStyle"),new m.j(["defaultBackgroundColor","backgroundColor","color","forInfopane","darkMode"],(t=>{let e=`\n                .call-to-action.dynamic-styles {\n                    background: ${t.defaultBackgroundColor};\n                }\n                .call-to-action-txt.dynamic-styles {\n                    color: ${t.color};\n                }\n                .call-to-action-bg.dynamic-styles {\n                    background: ${t.backgroundColor};\n                }\n                .call-to-action-icon-bg.dynamic-styles {\n                    background: ${t.backgroundColor};\n                }\n            `;return t.forInfopane||(e+="\n                    .txt-button-wrapper::before {\n                        background: linear-gradient(180deg, #EFEFEF 90%, #D6D6D6 100%);\n                    }\n                "),t.darkMode?e+="\n                    .txt-button-wrapper {\n                        background: linear-gradient(0deg, rgba(255, 255, 255, 0.0605), rgba(255, 255, 255, 0.0605));\n                        color: #FFFFFF;\n                    }\n                    .txt-button-wrapper::before {\n                        background: linear-gradient(180deg, rgba(255, 255, 255, 0.093) 0%, rgba(255, 255, 255, 0.0698) 9.57%);\n                    }\n                ":e+="\n                    .txt-button-wrapper {\n                        color: #1a1a1a;\n                        background: linear-gradient(0deg, #FFFFFF, #FFFFFF);\n                    }\n                    .txt-button-wrapper::before {\n                        background: linear-gradient(rgba(239, 239, 239, 0.7) 90%, rgba(214, 214, 214, 0.7) 100%);\n                    }\n                ",g.i`${e}`}))),$=o.dy`
<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.09854 16.6761L10.6426 9.25004C10.8715 9.05109 11 8.78131 11 8.5C11 8.2187 10.8715 7.94891 10.6426 7.74997L2.09854 0.323871C1.98594 0.222547 1.85126 0.141728 1.70234 0.0861287C1.55342 0.0305295 1.39326 0.0012641 1.23119 4.0055e-05C1.06912 -0.00118399 0.908396 0.0256578 0.758391 0.0789993C0.608386 0.132341 0.472105 0.211114 0.357501 0.310722C0.242897 0.41033 0.152265 0.528778 0.0908924 0.659155C0.0295204 0.789532 -0.00136224 0.929227 4.60857e-05 1.07009C0.00145442 1.21095 0.0351258 1.35016 0.0990954 1.47959C0.163065 1.60902 0.256052 1.72608 0.37263 1.82394L8.05377 8.5L0.37263 15.1761C0.256052 15.2739 0.163065 15.391 0.0990954 15.5204C0.0351258 15.6498 0.00145442 15.7891 4.60857e-05 15.9299C-0.00136224 16.0708 0.0295204 16.2105 0.0908924 16.3408C0.152265 16.4712 0.242897 16.5897 0.357501 16.6893C0.472105 16.7889 0.608386 16.8677 0.758391 16.921C0.908396 16.9743 1.06912 17.0012 1.23119 17C1.39326 16.9987 1.55342 16.9695 1.70234 16.9139C1.85126 16.8583 1.98594 16.7775 2.09854 16.6761Z" fill="black"/>
</svg>
`,C=o.dy`
<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 14C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13H13C14.1046 13 15 12.1046 15 11V3C15 1.89543 14.1046 1 13 1H6.5C6.22386 1 6 0.776142 6 0.5C6 0.223858 6.22386 0 6.5 0H13C14.6569 0 16 1.34315 16 3V11C16 12.6569 14.6569 14 13 14H6.5ZM6.64645 3.14645C6.84171 2.95118 7.15829 2.95118 7.35355 3.14645L10.8536 6.64645C11.0488 6.84171 11.0488 7.15829 10.8536 7.35355L7.35355 10.8536C7.15829 11.0488 6.84171 11.0488 6.64645 10.8536C6.45118 10.6583 6.45118 10.3417 6.64645 10.1464L9.29289 7.5H0.5C0.223858 7.5 0 7.27614 0 7C0 6.72386 0.223858 6.5 0.5 6.5H9.29289L6.64645 3.85355C6.45118 3.65829 6.45118 3.34171 6.64645 3.14645Z" fill="white"/>
</svg>
`,L=o.dy` ${(0,a.g)((t=>"arrow"===t.ctaMode),o.dy`<a class="call-to-action-click-wrapper" target = "_blank" href = ${t=>t.destinationUrl} data-t="${t=>t.telemetryMetadata}" aria-label=${t=>t.text}><div class="call-to-action-icon-container" title="${t=>t.text}"><div class="call-to-action-icon-bg dynamic-styles"></div><div class="call-to-action-icon dynamic-styles">${$}</div></div></a>`)} ${(0,a.g)((t=>"mask"===t.ctaMode),o.dy` ${(0,a.g)((t=>t.isHovered),o.dy`<div class="call-to-action-mask-container"><div class="call-to-action-mask-wrapper"><div class="call-to-action-mask-text">${t=>t.text}</div><div class="call-to-action-mask-icon">${C}</div></div></div>`)} `)} ${(0,a.g)((t=>"default"===t.ctaMode||"button"===t.ctaMode),o.dy`<a class="txt-button-wrapper" target = "_blank" href = ${t=>t.destinationUrl} data-t="${t=>t.telemetryMetadata}">${t=>t.text}</a>`)} ${(0,a.g)((t=>"text"===t.ctaMode),o.dy` ${t=>t.text} `)} `;let k=class extends x{};k=(0,r.gn)([(0,s.M)({name:"msn-native-ad-call-to-action",template:L,styles:w})],k);let S=class extends p.F{constructor(){super(...arguments),this.discountText=""}};(0,r.gn)([(0,l.Lj)({attribute:"discount-text"})],S.prototype,"discountText",void 0),S=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-sale-highlight-badge")],S);const T=o.dy`<svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.06591 0.163636L0.156818 5.07273C-0.0522727 5.28182 -0.0522727 5.62727 0.156818 5.84545L4.15682 9.84545C4.36591 10.0545 4.71136 10.0545 4.92955 9.84545L9.83864 4.93636C9.93864 4.82727 9.99318 4.69091 9.99318 4.54545V0.545455C9.99318 0.245455 9.74773 0 9.44773 0H5.44773C5.30227 0 5.16591 0.0545455 5.06591 0.163636ZM8.52955 2.77273C8.475 2.89091 8.40227 3 8.31136 3.09091C8.22046 3.18182 8.12045 3.25455 7.99318 3.3C7.86591 3.34545 7.74773 3.38182 7.61136 3.38182C7.475 3.38182 7.33864 3.35455 7.22045 3.3C7.10227 3.25455 6.99318 3.18182 6.90227 3.09091C6.81136 3 6.73864 2.89091 6.69318 2.77273C6.63864 2.65455 6.61136 2.52727 6.61136 2.38182C6.61136 2.23636 6.63864 2.10909 6.69318 1.99091C6.73864 1.88182 6.81136 1.77273 6.90227 1.69091C6.99318 1.6 7.10227 1.52727 7.22045 1.47273C7.33864 1.41818 7.46591 1.39091 7.61136 1.39091C7.75682 1.39091 7.88409 1.41818 8.00227 1.47273C8.12046 1.52727 8.22955 1.6 8.31136 1.69091C8.40227 1.78182 8.475 1.88182 8.52955 2C8.58409 2.11818 8.61136 2.24545 8.61136 2.39091C8.61136 2.53636 8.575 2.65455 8.52955 2.77273Z" fill="white"/></svg>`,F=o.dy`<a class="sale-highlight-badge" href="javascript:void 0;">${T}<span class="sale-highlight-badge-text">${t=>t.discountText}</span></a>`,A=g.i`
.sale-highlight-badge{background:#0078D4;border-radius:4px;display:flex;font-size:12px;color:#FFF;align-items:center;padding:2px 8px;line-height:16px;font-family:Segoe UI;box-sizing:border-box;text-decoration:none}.sale-highlight-badge .sale-highlight-badge-text{margin-left:5px;white-space:nowrap}`.withBehaviors(new u.g("layoutStyle"));let _=class extends S{};_=(0,r.gn)([(0,s.M)({name:"msn-native-ad-sale-highlight-badge",template:F,styles:A})],_);var I=i(13400);function j(t,e="",i="",o=""){if(0===t||1===t)return e;if(t>1&&t<=30)return i.replace("{0}",String(t));if(t>30){const e=(null===I.jG||void 0===I.jG?void 0:I.jG.CurrentMarket)||"en-us",i=new Date(Date.now());i.setDate(i.getDate()+t);const a=i.toLocaleDateString(e);return o.replace("{0}",a)}return""}let M=class extends p.F{constructor(){super(...arguments),this.show=!1,this.disableTimeout=!1,this.showToast=!1,this.arrowOffset="",this.duration=1e3,this.marginLeft="0",this.isDrConfig=!1,this.displayedText="",this.promotionalText="",this.redemptionCode="",this.daysFromExpiration="",this.destinationURL="",this.underneathPopUp=!1,this.displayExpirationDate=!1,this.timer=Date.now(),this.handleOnCopyClick=t=>()=>{this.showToast=!0,setTimeout((()=>this.showToast=!1),1e3)}}connectedCallback(){super.connectedCallback();const{nativeAdExpiresToday:t="",nativeAdExpiresInDays:e="",nativeAdExpiresOnCertainDay:i="",nativeAdExpiresTodayPopupWithCode:o="",nativeAdExpiresInDaysPopupWithCode:a="",nativeAdExpiresOnCertainDayPopupWithCode:n="",nativeAdExpiresTodayPopupWithoutCode:r="",nativeAdExpiresInDaysPopupWithoutCode:s="",nativeAdExpiresOnCertainDayPopupWithoutCode:l=""}=this.localizedStrings;this.expirationDate=j(Number(this.daysFromExpiration),t,e,i),this.expirationDatePopup=j(Number(this.daysFromExpiration),this.redemptionCode?o:r,this.redemptionCode?a:s,this.redemptionCode?n:l)}handlePopupWindowClick(t,e){"shop-btn"!==e.event.target.id&&e.event.stopPropagation()}onMouseEnter(t){var e,i,o;const a=null===(o=null===(i=null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector("decoration-special-offer"))||void 0===i?void 0:i.shadowRoot)||void 0===o?void 0:o.querySelector(".special-offer-btn-container"),n=(null==a?void 0:a.offsetWidth)/2,r=t.offsetLeft;this.arrowOffset=this.arrowOffset||n+r-8+"px",clearTimeout(this.timer),this.show=!0}onMouseLeave(){this.handleHide()}onPopupWindowMouseEnter(){clearTimeout(this.timer),this.disableTimeout=!0}onPopupWindowMouseLeave(){this.disableTimeout=!1,this.handleHide()}handleHide(){this.disableTimeout||(this.timer=window.setTimeout((()=>{this.show=!1}),this.duration))}};(0,r.gn)([y.LO],M.prototype,"show",void 0),(0,r.gn)([y.LO],M.prototype,"disableTimeout",void 0),(0,r.gn)([y.LO],M.prototype,"showToast",void 0),(0,r.gn)([y.LO],M.prototype,"arrowOffset",void 0),(0,r.gn)([l.Lj],M.prototype,"duration",void 0),(0,r.gn)([(0,l.Lj)({attribute:"margin-left"})],M.prototype,"marginLeft",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-dr-config"})],M.prototype,"isDrConfig",void 0),(0,r.gn)([(0,l.Lj)({attribute:"displayed-text"})],M.prototype,"displayedText",void 0),(0,r.gn)([(0,l.Lj)({attribute:"promotional-text"})],M.prototype,"promotionalText",void 0),(0,r.gn)([(0,l.Lj)({attribute:"redemption-code"})],M.prototype,"redemptionCode",void 0),(0,r.gn)([(0,l.Lj)({attribute:"days-from-expiration"})],M.prototype,"daysFromExpiration",void 0),(0,r.gn)([(0,l.Lj)({attribute:"destination-url"})],M.prototype,"destinationURL",void 0),(0,r.gn)([(0,l.Lj)({attribute:"underneath-pop-up",mode:"boolean"})],M.prototype,"underneathPopUp",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean",attribute:"display-expiration-date"})],M.prototype,"displayExpirationDate",void 0),(0,r.gn)([y.LO],M.prototype,"localizedStrings",void 0),(0,r.gn)([y.LO],M.prototype,"expirationDate",void 0),(0,r.gn)([y.LO],M.prototype,"expirationDatePopup",void 0),M=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-special-offer")],M);const E=g.i` :host{--accent-fill-rest:#0078D4;--accent-fill-hover:#006CBE;--accent-fill-active:#1683D8;--accent-fill-focus:#888888}.container{display:flex;flex-direction:column}.description{white-space:initial;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.text-section{display:flex;padding:12px 12px 0px 12px;flex-direction:column;font-size:12px}.action-section{display:flex;padding:12px;justify-content:space-between}.title{font-weight:bold;white-space:initial;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.shop-btn{background:var(--accent-fill-rest);color:#FFFFFF;width:68px;height:32px;border-radius:20px;font-size:12px;text-align:center;line-height:32px;cursor:pointer}.shop-btn:hover{background:var(--accent-fill-hover)}.shop-btn:active{background:var(--accent-fill-active)}.shop-btn:focus{background:var(--accent-fill-focus)}`.withBehaviors(new u.g("layoutStyle"),new m.j(["arrowOffset","marginLeft","isDrConfig"],(t=>g.i` .popup-window{margin-left:${t.marginLeft}px;color:#000000;cursor:default;z-index:1;background-color:#FFFFFF;border-radius:4px;margin-bottom:11px;width:276px;min-height:102px;max-height:140px;box-shadow:0px 0.6px 1.8px rgb(0 0 0 / 10%),0px 3.2px 7.2px rgb(0 0 0 / 13%)}.underneathPopUp{position:fixed;margin-top:32px}.popup-window::after{content:"";width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;${(t=>t.underneathPopUp?"border-bottom":"border-top")(t)}: 8px solid #FFFFFF;
                    position: absolute;
                    margin-inline-start: ${t.arrowOffset};
                    bottom: ${(t=>t.isDrConfig?"":t.underneathPopUp?"101":"26")(t)}px;
                }
            `)));let B=class extends s.H{constructor(){super(...arguments),this.code="",this.copyText=""}};(0,r.gn)([l.Lj],B.prototype,"code",void 0),(0,r.gn)([y.LO],B.prototype,"onCopyClick",void 0),(0,r.gn)([(0,l.Lj)({attribute:"copy-text"})],B.prototype,"copyText",void 0),B=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-copy-input")],B);const H=g.i` .input-container{display:flex;height:32px;width:172px;justify-content:space-between;background:#EDEDED;border-radius:4px;align-items:center;font-size:14px;cursor:initial}.promotion-code{margin-left:12px}.copy-icon{margin-right:12px;cursor:pointer}`,z=o.dy`
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.50293V14H3.42857V11.375H0V0H5.75223L8.32366 2.625H9.1808L12 5.50293ZM9.42857 5.25H10.5335L9.42857 4.12207V5.25ZM3.42857 2.625H7.10491L5.39062 0.875H0.857143V10.5H3.42857V2.625ZM11.1429 6.125H8.57143V3.5H4.28571V13.125H11.1429V6.125Z" fill="#0078D4"/>
    </svg>
`,O=o.dy`<div class="input-container"><div class="promotion-code">${t=>t.code}</div><div class="copy-icon" title=${t=>t.copyText} aria-label=${t=>t.copyText} @click=${t=>(navigator.clipboard.writeText(t.code),t.onCopyClick(),!0)}>${z}</div></div>`;let D=class extends B{};D=(0,r.gn)([(0,s.M)({name:"msn-native-ad-copy-input",template:O,styles:H})],D);var R=i(83529);let P=class extends s.H{constructor(){super(...arguments),this.duration=1e3,this.show=!1,this.message="Copied!"}};(0,r.gn)([l.Lj],P.prototype,"duration",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean"})],P.prototype,"show",void 0),(0,r.gn)([l.Lj],P.prototype,"message",void 0),(0,r.gn)([l.Lj],P.prototype,"position",void 0),(0,r.gn)([l.Lj],P.prototype,"top",void 0),(0,r.gn)([l.Lj],P.prototype,"left",void 0),P=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-toast")],P);const V=g.i` .toast{display:flex;width:81px;height:38px;background:#3B3B3B;border-radius:6px;justify-content:center;align-items:center;color:white;font-size:14px;font-weight:normal;box-shadow:0px 12.8px 28.8px rgba(0,0,0,0.13),0px 0px 9.2px rgba(0,0,0,0.11)}`.withBehaviors(new m.j(["position","top","left"],(t=>g.i` :host{position:${t.position};
                    top: ${t.top}px; 
                    left: ${t.left}px;
                }
            `))),Z=o.dy` ${(0,a.g)((t=>t.show),o.dy`<div class="toast">${t=>t.message}</div>`)}
`;let N=class extends P{};N=(0,r.gn)([(0,s.M)({name:"msn-native-ad-toast",template:Z,styles:V})],N),R.B;const U=o.dy` ${(0,a.g)((t=>t.show),o.dy`<msn-native-ad-toast show=${t=>t.showToast} position="fixed" top="7" left="110"></msn-native-ad-toast><div class="popup-window ${t=>t.underneathPopUp?"underneathPopUp":""}" @click=${(t,e)=>t.handlePopupWindowClick(t,e)} @mouseenter=${t=>t.onPopupWindowMouseEnter()} @mouseleave=${t=>t.onPopupWindowMouseLeave()}><div class="container"><div class="text-section"><div class="title">${t=>t.promotionalText}</div><div class="description">${t=>t.expirationDatePopup}${t=>{var e;return t.redemptionCode?null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferEnterCode:""}}</div></div><div class="action-section">${(0,a.g)((t=>t.redemptionCode),o.dy`<msn-native-ad-copy-input copy-text=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferCopy}} :onCopyClick=${t=>t.handleOnCopyClick(t)} code=${t=>t.redemptionCode}></msn-native-ad-copy-input>`)}<div id="shop-btn" class="shop-btn" title=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}} aria-label=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}}>${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}}</div></div></div></div>`)}<decoration-special-offer @mouseenter=${(t,e)=>t.onMouseEnter(t)} @mouseleave=${t=>t.onMouseLeave()} data=${t=>t.displayedText} expiration-date=${t=>t.expirationDate} display-expiration-date=${t=>t.displayExpirationDate}></decoration-special-offer>`;let W=class extends M{};W=(0,r.gn)([(0,s.M)({name:"msn-native-ad-special-offer",template:U,styles:E})],W);var G=i(85574),q=i(90351),X=i(19628),J=i(17579),Q=i(15059),Y=i(2864),K=i(42950),tt=i(18179),et=i(792),it=i(70193);const ot=t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.progressiveDisplay)&&t.hasAnyInlineDecoration?"native-ad-content-card":""},at=(t,e)=>{var i;(null===(i=t.template)||void 0===i?void 0:i.progressiveDisplay)&&t.hoverState&&t.hoverState.isHovered!==e&&(t.hoverState.isHovered=e)},nt=(t,e)=>{if((0,et.eC)(t))return o.dy`
        <div class="heading" part="heading" style="display: flex; align-items: center;">
            ${(0,a.g)((t=>e),o.dy`
                <h3 class="info-pane-slide-title" style="pointer-events: none; flex: 1;" part="info-pane-slide-title">
                    ${t=>t.title}
                </h3>
            `)}
            ${(0,a.g)((t=>!e),o.dy`
                <div class="cta-title" style="flex:1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient: vertical;">
                    <span style = "font-size: ${t=>t.feedFontSize}px; 
                        line-height: "28px";
                        "${t=>t.fontFamilyOnCardContent?`font-family:${t.fontFamilyOnCardContent}, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;`:""}"
                    ">
                        ${t=>t.title}
                    </span>
                </div>
            `)}
            <div class="cta-button" style="margin-inline-start: 4px; z-index: 2;">
                <msn-native-ad-call-to-action 
                    text=${t=>t.localizedStrings.nativeAdLearnMoreText||"learn more"}
                    default-background-color="#C6C0BA"
                    background-color="${t=>t.layoutColor}"
                    color="#000000"
                    is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
                    cta-mode="arrow"
                    destination-url=${t=>t.destinationUrl}
                    tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
                    ${(0,G.lq)(!0,!1)}
                >
                </msn-native-ad-call-to-action>
        </div>`;if((0,et.E2)(t))return o.dy`
            <div class="sale-highlight-badge" style="position: absolute; bottom: 268px;">
                <msn-native-ad-sale-highlight-badge
		            component-name="sale-highlight-badge"
                    discount-text="${t=>{var e,i;return X.Ld.Format((null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdOnSaleTextCapital)||"{0}% OFF",null===(i=t.assets)||void 0===i?void 0:i.discount)}}"
                >
                </msn-native-ad-sale-highlight-badge>
            </div>
        `;if((0,et.sV)(t)){const{displayedText:i="",promotionalText:n="",redemptionCode:r="",daysFromExpiration:s="",destinationURL:l=""}=t.assets.specialOffer;return o.dy`
            <style>
                ${(0,a.g)((t=>t.show&&e),o.dy`
                    msft-info-pane-slide msft-attribution[slot="attribution"] {
                        bottom: 159px;
                        position: absolute;
                        z-index: 2;
                    }
                `)}
                ${(0,a.g)((t=>!t.show&&e),o.dy`
                msft-info-pane-slide msft-attribution[slot="attribution"] {
                    bottom: 261px;
                    position: absolute;
                    z-index: 2;
                }
            `)}
            </style>
            <msft-attribution 
                slot="attribution"
                @click=${()=>t.destinationUrl&&window.open(t.destinationUrl)}
                ${(0,G.lq)(!0,!1)}
            >
                <msn-native-ad-special-offer
                    ${(0,G.lq)(!0,!1)}
                    :localizedStrings=${t=>t.localizedStrings}
                    displayed-text="${i}"
                    promotional-text="${n}"
                    redemption-code="${r}"
                    days-from-expiration="${s}"
                    destination-url="${l}"
                    margin-left="-6"
                    ${e?"underneath-pop-up":""}
                    display-expiration-date=${t=>(0,et.RV)(t)}
                ></msn-native-ad-special-offer>
            </msft-attribution>
        `}return(0,K.LX)(t)?o.dy`
            ${(0,a.g)((t=>!e),o.dy`
                <style>
                    ${(0,a.g)((t=>(0,K.jv)(t)),o.dy`
                        msft-attribution::part(content) {
                            width: 100%;
                        }
                    `)}
                    ${(0,a.g)((t=>(0,K.nT)(t)),o.dy`
                        msft-attribution[slot="attribution"] {
                            height: 64px;
                        }
                        msn-native-ad-highlight-rating {
                            position: absolute;
                            bottom: 0;
                        }
                    `)}
                </style>
                <msft-attribution slot="attribution">
                    ${(0,K.ae)()}
                </msft-attribution>
            `)}
            ${(0,a.g)((t=>e),o.dy`
            <msft-attribution slot="attribution">
                <decoration-rating
                    rating=${t=>t.assets.rating}
                    review-data=${t=>t.assets.review}
                    is-info-pane=${e}
                ></decoration-rating>
                </msft-attribution>
            `)}
        `:(0,Q.I7)(t)?o.dy`
            <div class="native-ad-free-shipping-badge" style="position: absolute; bottom: 268px;">
                <msn-native-ad-badge badge-text="${t=>(0,q.Z)(t.localizedStrings,"nativeAdFreeShippingText")}" padding-top="1" padding-bottom="3" padding-left="8" padding-right="8">
                </msn-native-ad-badge>
            </div>
        `:(0,Y.BR)(t)?o.dy`
            <msft-attribution slot="attribution" class="margin-5-decoration">
                ${(0,Y.HG)()}
            </msft-attribution>
        `:o.dy`${t=>{var e,i,o;return(0,J.o)("attribution",!1,null===(e=t.template)||void 0===e?void 0:e.progressiveDisplay,(null===(i=t.hoverState)||void 0===i?void 0:i.isHovered)?65:25,null===(o=t.hoverState)||void 0===o?void 0:o.isHovered,!1,(0,tt.J0)(t),(e=>(0,tt.Vy)(t,e)))}}`},rt=t=>((t,e,i={})=>o.dy`
    <!--
        Only use placeholder when the card size is 1x_2y
    -->
    ${(0,a.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&t.imageData),o.dy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
            ${t=>t.renderImageTag("anim-content",i)}
        <div>
    `)}
    ${(0,a.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&!t.imageData),o.dy`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;"></div>
    `)}
    ${(0,a.g)((t=>t.cardSize!==t.FeedLayoutCardSize._1x_2y&&t.imageData),o.dy`
        <div slot="${t}">
            ${t=>t.renderImageTag("anim-content",i)}
        </div>
    `)}
`)("image",t.ContentCardImageSizes._300x225),st=o.dy`
    <style>
        :host {
            --article-native-ad-heading-margin-bottom: -12px;
        }
        msft-ad-label {
            margin-inline-end: 8px;
        }

        ${(0,a.g)((t=>{var e;return!(null===(e=t.assets)||void 0===e?void 0:e.specialOffer)}),o.dy`
        msft-article msft-attribution[slot="attribution"] {
            display: flex;
            align-self: end;
        }
        `)}

        ${(0,a.g)((t=>{var e;return null===(e=t.assets)||void 0===e?void 0:e.specialOffer}),o.dy`
            msft-article msft-attribution[slot="attribution"] {
                cursor: pointer;
                display: flex;
                align-self: end;
                overflow: visible;
                max-width: 300px;
                z-index: 2;
                margin-bottom: 5px;
            }
            
            msft-article msft-attribution[slot="attribution"]::part(content) {
                overflow: visible;
            }
        `)}

        ${(0,a.g)((t=>{var e;return null===(e=t.assets)||void 0===e?void 0:e.rating}),o.dy`
            msft-article msft-attribution[slot="attribution"] {
                margin-bottom: 1px;
            }
        `)}

        msft-article span.title_1x_2y,
        msft-article span.title_2x_2y {
            font-size: 20px;
        }
        
        ${(0,a.g)((t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.nativeAdMode)===n.di.Adult}),o.dy`
            msft-article div[slot="end-action"] {
                --neutral-foreground-rest: white;
            }
        `)}
        msft-article div[slot="end-action"] {
            display: flex;
            align-items: center;
            --control-corner-radius: 100;
            position: relative;
            bottom: -8px;
        }

        msft-attribution[slot="start-action"] {
            margin-top: 15px;
        }
        

        msft-article a.ad-choice-icon {
            display: inline-flex;
            justify-content: center;
            min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px); 
        }

        msft-article.native-ad, msft-article.${(0,it.lj)("native-ad")} {
            --article-native-ad-heading-margin-bottom: -1px;
            --heading-max-lines: 2;
        }

        msft-article.nativeAdVideo-river::part(image) {
            z-index: 2;
        }

        msft-article.native-ad.gradient, msft-article.${(0,it.lj)("native-ad")}.gradient {
            --article-native-ad-actions-height: 33px;
            --article-native-ad-heading-margin-bottom: 6px;
        }

        msft-article.native-ad::part(heading), msft-article.${(0,it.lj)("native-ad")}::part(heading) {
            margin-bottom: var(--article-native-ad-heading-margin-bottom);
            color: var(--msft-card-font-color);
        }

        msft-article.native-ad.long-gradient::part(gradient), msft-article.${(0,it.lj)("native-ad")}.long-gradient::part(gradient) {
            top: -55px;
        }

        ${(0,a.g)((t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.immersiveThemeColor}),o.dy`
            @media (prefers-color-scheme: light) {
                msft-article::part(gradient) {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 45.83%, #FFFFFF 100%);
                }

                msft-article::part(article) {
                    background: #FFFFFF;
                }
                msft-article::part(heading) {
                    color: #000000;
                }
            }

            @media (prefers-color-scheme: dark) {
                msft-article::part(gradient) {
                    background: linear-gradient(180deg, transparent 0%, rgba(43, 43, 43, 0.8) 62.5%, #2E2E2E 100% );
                }

                msft-article::part(article) {
                    background: #2B2B2B;
                }
                msft-article::part(heading) {
                    color: #FFFFFF;
                }
            }
        `)}

        ${(0,a.g)((t=>t.layoutGap),o.dy`
            msft-article-card[size="_1x_2y"] msft-article::part(gradient) {
                bottom: ${t=>67+t.layoutGap}px;
            }

            msft-article-card[size="_2x_2y"] msft-article::part(gradient) {
                bottom: 0px;
            }
        `)}

        ${(0,a.g)((t=>"rtl"===document.dir),o.dy`
            msft-article-card msft-article msn-inline-group::part(inline-item) {
                padding-left: 12px;
                padding-right: unset;
            }
        `)}

        ${(0,a.g)((t=>["ltr",""].includes(document.dir)),o.dy`
            msft-article-card msft-article msn-inline-group::part(inline-item) {
                padding-right: 12px;
            }
        `)}

        :host {
            grid-area:${t=>t.grid_area};
        }

        msft-article-card[size="_1x_2y"],
        msft-article-card[size="_2x_2y"] {
            --card-width: auto;
            --card-height: auto;
        }

        ${(0,a.g)((t=>{var e;return!(null===(e=t.assets)||void 0===e?void 0:e.specialOffer)}),o.dy`
        msft-attribution {
            max-width: 100%;
        }
    `)}

        msft-article.native-ad::part(actions), msft-article.${(0,it.lj)("native-ad")}::part(actions) {
            height: var(--article-native-ad-actions-height);
            align-items: center;
        }
        
        msft-article.two-lines-heading::part(heading) {
            -webkit-line-clamp: 2;
        }

        msft-article.special-offer::part(heading),
        msft-article.deco-rating::part(heading),
        msft-article.deco-free-shipping::part(heading) {
            margin-bottom: -1px;
        }

        msft-article.three-lines-heading::part(heading) {
            -webkit-line-clamp: 3;
        }
        msft-article-card msft-article::part(heading):after {
            top: calc(100% - 304px - 8px);
        }

        ${(0,a.g)((t=>t.useTitleFontSize),o.dy`
            msft-article-card msft-article {
                --msft-article-heading-font-size: ${t=>t.useTitleFontSize}px;
                --msft-article-heading-line-height: 24px;
            }

            msft-article-card msft-article::part(attribution) {
                height: 28px;
            }

            msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(heading) {
                margin-bottom: -4px;
            }

            msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {
                background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 46%, var(--gradient-color) 100%);
                top: 5px;
            }
        `)}

        ${(0,a.g)((t=>t.useShorterGradient),o.dy`
            msft-article-card[size="_1x_2y"] msft-article[id="native_ad_${t=>t.id}"]::part(gradient) {
                top: 11px;
                bottom: 79px;
                background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 56%, var(--gradient-color) 100%);
            }
        `)}

        ${(0,a.g)((t=>t.enableNativeAdHoverContrast),o.dy`
            msft-article-card:hover msft-article[id="native_ad_${t=>t.id}"]::part(image) {
                opacity: 1;
            }
            msft-article-card msft-article[id="native_ad_${t=>t.id}"]:hover {
                filter: contrast(115%);
            }
        `)}
        

    </style>
    <msft-article-card
        style="
            grid-area:${t=>t.grid_area};
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
        "
        size="${t=>t.cardSize}"
        card-fill-color=${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.nativeAdMode)===n.di.Adult?"#2E2E2E":t.adBackgroundColor}}
    >
        <msft-article
            id="native_ad_${t=>t.id}"
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            class=${t=>(t=>{var e,i,o;const a=[ot(t)];return a.push("native-ad"),t.hasAnyInlineDecoration||t.adSlugGA?a.push("two-lines-heading"):a.push("three-lines-heading"),(null===(e=t.assets)||void 0===e?void 0:e.specialOffer)&&a.push("special-offer"),(null===(i=t.assets)||void 0===i?void 0:i.rating)&&a.push("deco-rating"),(null===(o=t.assets)||void 0===o?void 0:o.freeShipping)&&a.push("deco-free-shipping"),a.filter((t=>t)).join(" ")})(t)}
            data-t="${t=>t.id?t.adTelemetryContext.nativeAdCard.getMetadataTag():""}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,G.lq)()}
            @mouseenter=${t=>at(t,!0)}
            @mouseleave=${t=>at(t,!1)}
        >
            ${t=>(0,et.eC)(t)?"":t.renderTitle()}
            ${t=>rt(t)}
            ${t=>nt(t)}
            ${t=>t.renderStartSection("start-action",t.destinationUrl)}
            ${t=>t.renderEndSection("end-action")}
        </msft-article>
    </msft-article-card>
`},29837:function(t,e,i){i.d(e,{Zg:function(){return L}});var o=i(33940),a=i(42590),n=i(99452),r=i(26415),s=i(92773),l=i(84446);let d=class extends l.F{constructor(){super(...arguments),this.disclaimer="",this.disclaimerTooltip="Disclaimer",this.popupMargin=0,this.url="",this.isHovered=!1}updateDisclaimerHoverState(t){this.isHovered=t}connectedCallback(){super.connectedCallback()}};(0,o.gn)([(0,a.Lj)({attribute:"disclaimer"})],d.prototype,"disclaimer",void 0),(0,o.gn)([(0,a.Lj)({attribute:"disclaimer-tooltip"})],d.prototype,"disclaimerTooltip",void 0),(0,o.gn)([(0,a.Lj)({attribute:"popup-margin"})],d.prototype,"popupMargin",void 0),(0,o.gn)([(0,a.Lj)({attribute:"url"})],d.prototype,"url",void 0),(0,o.gn)([(0,a.Lj)({attribute:"tel-metadata"})],d.prototype,"telemetryMetadata",void 0),(0,o.gn)([n.LO],d.prototype,"isHovered",void 0),d=(0,o.gn)([(0,s.uj)(r.EoX,"msn-native-ad-disclaimer")],d);var c=i(28904),p=i(78923),h=i(53692),g=i(41503);const u=p.i`
.native-ad-disclaimer-container{width:32px;height:32px;cursor:pointer}.native-ad-disclaimer-container svg{position:absolute;margin-inline:9px;margin-top:9px}.disclaimer-popup-container{position:absolute;bottom:100%;width:32px;margin-inline:9px}.disclaimer-popup-container svg{margin-inline:0px;margin-top:0px}.disclaimer-popup{position:relative;color:var(--fill-color);background:var(--neutral-foreground-rest);padding:8px;font-size:12px;width:152px;max-width:152px;max-height:48px;bottom:7px;border-radius:2px;z-index:1}.disclaimer-popup-text{-webkit-line-clamp:2;text-overflow:ellipsis;overflow:hidden;white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;text-align:center;font-size:12px}.disclaimer-popup-arrow{height:15px;width:15px;position:absolute;bottom:0px}.disclaimer-popup-arrow svg rect{fill:var(--neutral-foreground-rest)}.native-ad-disclaimer-container svg path{fill:var(--neutral-foreground-rest)}@media (forced-colors:active){.disclaimer-popup{color:buttonface;background:buttontext}.disclaimer-popup-arrow svg rect{fill:buttontext}.native-ad-disclaimer-container svg path{fill:buttontext}}`.withBehaviors(new g.g("layoutStyle"),new h.j(["popupMargin"],(t=>{const e=(t.popupMargin?t.popupMargin-168-5:5)+"px";return p.i` .disclaimer-popup.disclaimer-popup-dynamic-style{margin-inline:${e};
            }
        `})));var m=i(49218),f=i(93703);const v=m.dy`
<svg width="15" height="15" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="12" width="16" height="16" transform="rotate(-45 0 12)" fill="white"/>
</svg>
`,b=m.dy`
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 15C6.80729 15 6.14323 14.9115 5.50781 14.7344C4.8724 14.5573 4.27344 14.3073 3.71094 13.9844C3.14844 13.6615 2.64323 13.2708 2.19531 12.8125C1.7474 12.3542 1.35677 11.8464 1.02344 11.2891C0.690104 10.7318 0.4375 10.1354 0.265625 9.5C0.09375 8.86458 0.00520833 8.19792 0 7.5C0 6.80729 0.0885417 6.14323 0.265625 5.50781C0.442708 4.8724 0.692708 4.27344 1.01562 3.71094C1.33854 3.14844 1.72917 2.64323 2.1875 2.19531C2.64583 1.7474 3.15365 1.35677 3.71094 1.02344C4.26823 0.690104 4.86458 0.4375 5.5 0.265625C6.13542 0.09375 6.80208 0.00520833 7.5 0C8.19271 0 8.85677 0.0885417 9.49219 0.265625C10.1276 0.442708 10.7266 0.692708 11.2891 1.01562C11.8516 1.33854 12.3568 1.72917 12.8047 2.1875C13.2526 2.64583 13.6432 3.15365 13.9766 3.71094C14.3099 4.26823 14.5625 4.86458 14.7344 5.5C14.9062 6.13542 14.9948 6.80208 15 7.5C15 8.19271 14.9115 8.85677 14.7344 9.49219C14.5573 10.1276 14.3073 10.7266 13.9844 11.2891C13.6615 11.8516 13.2708 12.3568 12.8125 12.8047C12.3542 13.2526 11.8464 13.6432 11.2891 13.9766C10.7318 14.3099 10.1354 14.5625 9.5 14.7344C8.86458 14.9062 8.19792 14.9948 7.5 15ZM7.5 1C6.90104 1 6.32552 1.07812 5.77344 1.23438C5.22135 1.39062 4.70573 1.60938 4.22656 1.89062C3.7474 2.17188 3.30729 2.51042 2.90625 2.90625C2.50521 3.30208 2.16667 3.73958 1.89062 4.21875C1.61458 4.69792 1.39583 5.21615 1.23438 5.77344C1.07292 6.33073 0.994792 6.90625 1 7.5C1 8.09375 1.07812 8.66667 1.23438 9.21875C1.39062 9.77083 1.60938 10.2891 1.89062 10.7734C2.17188 11.2578 2.51042 11.6979 2.90625 12.0938C3.30208 12.4896 3.73958 12.8281 4.21875 13.1094C4.69792 13.3906 5.21615 13.6094 5.77344 13.7656C6.33073 13.9219 6.90625 14 7.5 14C8.09375 14 8.66667 13.9219 9.21875 13.7656C9.77083 13.6094 10.2891 13.3906 10.7734 13.1094C11.2578 12.8281 11.6979 12.4896 12.0938 12.0938C12.4896 11.6979 12.8281 11.2604 13.1094 10.7812C13.3906 10.3021 13.6094 9.78385 13.7656 9.22656C13.9219 8.66927 14 8.09375 14 7.5C14 6.90625 13.9219 6.33333 13.7656 5.78125C13.6094 5.22917 13.3906 4.71094 13.1094 4.22656C12.8281 3.74219 12.4896 3.30208 12.0938 2.90625C11.6979 2.51042 11.2604 2.17188 10.7812 1.89062C10.3021 1.60938 9.78385 1.39062 9.22656 1.23438C8.66927 1.07812 8.09375 1 7.5 1ZM7 6H8V11H7V6ZM7 4H8V5H7V4Z" fill="white"/>
</svg>
`,y=m.dy`
${(0,f.g)((t=>t.disclaimer),m.dy`<a href=${t=>t.url} target="_blank" data-t="${t=>t.telemetryMetadata}"><div class="native-ad-disclaimer-container native-ad-disclaimer-container-dynamic-style">${(0,f.g)((t=>t.isHovered),m.dy`<div class="disclaimer-popup-container"><div class="disclaimer-popup disclaimer-popup-offset disclaimer-popup-dynamic-style"><span class="disclaimer-popup-text">${t=>t.disclaimer}</span></div><div class="disclaimer-popup-arrow">${v}</div></div>`)}<div title="${t=>t.disclaimerTooltip}" @mouseenter=${t=>t.updateDisclaimerHoverState(!0)} @mouseleave=${t=>t.updateDisclaimerHoverState(!1)}>${b}</div></div></a>`)}
`;let x=class extends d{};x=(0,o.gn)([(0,c.M)({name:"msn-native-ad-disclaimer",template:y,styles:u})],x);var w=i(90351),$=i(85574);const C=t=>{const e=null==t?void 0:t.adChoiceIconUrl,i=(null==t?void 0:t.isAdFeedbackV1Enabled)&&(null==t?void 0:t.feedbackUrl);return e||i?e&&i?2:1:0},L=t=>m.dy`
    <msn-native-ad-disclaimer 
        ${(0,$.lq)(!0,!1)}
        disclaimer=${t=>t.assets&&t.assets.disclaimer}
        disclaimer-tooltip=${t=>(0,w.Z)(t.localizedStrings,"nativeAdDisclaimerText")}
        popup-margin=${t=>(t=>2===C(t)?103:1===C(t)?70:35)(t)}
        :layoutConfig=${e=>null==t?void 0:t.layout}
        url=${t=>t.destinationUrl}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
		component-name="${e=>null==t?void 0:t.name}"
    >
    </msn-native-ad-disclaimer>
`},3590:function(t,e,i){i.d(e,{g:function(){return r}});var o=i(33940),a=i(42590),n=i(84446);class r extends n.F{constructor(){super(...arguments),this.customStyle=""}}(0,o.gn)([a.Lj],r.prototype,"data",void 0),(0,o.gn)([(0,a.Lj)({mode:"boolean",attribute:"is-info-pane"})],r.prototype,"isInfoPane",void 0),(0,o.gn)([a.Lj],r.prototype,"isExpanded",void 0),(0,o.gn)([(0,a.Lj)({attribute:"custom-style"})],r.prototype,"customStyle",void 0)},66286:function(t,e,i){i.d(e,{SQ:function(){return o},de:function(){return n},oA:function(){return a}});const o={defaultDarkThemeColor:"var(--neutral-foreground-rest)",defaultLightThemeColor:"var(--neutral-foreground-rest)",defaultInfoPaneColor:"var(--neutral-foreground-rest)"},a=t=>t?o.defaultInfoPaneColor:o.defaultDarkThemeColor,n=t=>t?o.defaultInfoPaneColor:o.defaultLightThemeColor},1418:function(t,e,i){i.d(e,{G:function(){return w}});var o=i(33940),a=i(28904),n=i(42590),r=i(26415),s=i(84446),l=i(92773);let d=class extends s.F{constructor(){super(...arguments),this.color="#036AC4",this.fontFamily="inherit"}};(0,o.gn)([n.Lj],d.prototype,"color",void 0),(0,o.gn)([(0,n.Lj)({attribute:"font-family"})],d.prototype,"fontFamily",void 0),(0,o.gn)([n.Lj],d.prototype,"icon",void 0),(0,o.gn)([n.Lj],d.prototype,"data",void 0),d=(0,o.gn)([(0,l.uj)(r.EoX,"decoration-free-shipping-button")],d);var c=i(49218),p=i(93703);let h=class extends a.H{constructor(){super(...arguments),this.color="#036AC4",this.paddingVertical="0px",this.paddingHorizontal="9px",this.borderRadius="4px"}};(0,o.gn)([n.Lj],h.prototype,"color",void 0),(0,o.gn)([n.Lj],h.prototype,"height",void 0),(0,o.gn)([(0,n.Lj)({attribute:"padding-vertical"})],h.prototype,"paddingVertical",void 0),(0,o.gn)([(0,n.Lj)({attribute:"padding-horizontal"})],h.prototype,"paddingHorizontal",void 0),(0,o.gn)([(0,n.Lj)({attribute:"border-radius"})],h.prototype,"borderRadius",void 0),h=(0,o.gn)([(0,l.uj)(r.EoX,"color-button")],h);var g=i(78923),u=i(53692);const m=g.i` .color-button-container{border-radius:4px;text-align:center;display:inline-block}`.withBehaviors(new u.j(["color","paddingVertical","paddingHorizontal","borderRadius","height"],(t=>g.i` .color-button-container{background:${t.color};
                    padding: ${t.paddingVertical} ${t.paddingHorizontal} ${t.paddingVertical} ${t.paddingHorizontal};
                    border-radius: ${t.borderRadius};
                    height: ${t.height};
                }
            `))),f=c.dy`<div class="color-button-container"><slot name="icon-section"></slot><slot name="text-section"></slot></div>`;let v=class extends h{};v=(0,o.gn)([(0,a.M)({name:"color-button",template:f,styles:m})],v);const b=c.dy`<color-button color="${t=>t.color}" height="22px">${(0,p.g)((t=>t.icon),c.dy`<span slot="icon-section" class="freeshipping-icon"><pure-icon icon-name="${t=>t.icon}" icon-width="16" icon-height="12" /></span>`)}<span slot="text-section"><pure-text content="${t=>t.data}" custom-style="height: 28px; line-height: 20px; font-weight: 600; font-size: 16px" font-family="${t=>t.fontFamily}" /></span></color-button>`;var y=i(41503);const x=g.i` .freeshipping-icon{margin-right:3px}`.withBehaviors(new y.g("layoutStyle"));let w=class extends d{};w=(0,o.gn)([(0,a.M)({name:"decoration-free-shipping-button",template:b,styles:x})],w)},22460:function(t,e,i){i.d(e,{o:function(){return c}});var o=i(33940),a=i(3590),n=i(28904),r=i(49218),s=i(74220),l=i(66286);s.L;const d=r.dy`<pure-text content="${t=>t.data}" custom-style="font-size: 16px" light-theme-color=${t=>(0,l.de)(t.isInfoPane)} dark-theme-color=${t=>(0,l.oA)(t.isInfoPane)} />`;let c=class extends a.g{};c=(0,o.gn)([(0,n.M)({name:"decoration-free-shipping",template:d})],c)},15027:function(t,e,i){i.d(e,{C:function(){return g}});var o=i(33940),a=i(26415),n=i(92773),r=i(3590);let s=class extends r.g{dataChanged(){this.plainText=JSON.parse(this.data)}};s=(0,o.gn)([(0,n.uj)(a.EoX,"decoration-plain-text")],s);var l=i(28904),d=i(49218),c=i(74220),p=i(66286);c.L;const h=d.dy`<pure-text content="${t=>t.plainText.displayedText}" font-size="16" font-weight="400" light-theme-color=${t=>(0,p.de)(t.isInfoPane)} dark-theme-color=${t=>(0,p.oA)(t.isInfoPane)} />`;let g=class extends s{};g=(0,o.gn)([(0,l.M)({name:"decoration-plain-text",template:h})],g)},83529:function(t,e,i){i.d(e,{B:function(){return u}});var o=i(33940),a=i(3590),n=i(42590),r=i(28904),s=i(49218),l=i(93703),d=i(74220),c=i(66286),p=i(51767);d.L,p.D;const h=s.dy`<div class="special-offer-btn-container"><pure-text content="${t=>t.data}" custom-style="font-size: 12px; font-weight: 600; line-height: 16px; height: 16px;" light-theme-color=${t=>(0,c.de)(t.isInfoPane)} dark-theme-color=${t=>(0,c.oA)(t.isInfoPane)}></pure-text><pure-icon icon-name="rightArrow" icon-width="4.5" icon-height="8"></pure-icon></div>${(0,l.g)((t=>t.displayExpirationDate),s.dy`<pure-text content="${t=>t.expirationDate}" custom-style="font-size: 16px; font-weight: 600; margin-left: 2px;" light-theme-color=${t=>(0,c.de)(t.isInfoPane)} dark-theme-color=${t=>(0,c.oA)(t.isInfoPane)}></pure-text>`)}
`;const g=i(78923).i` :host{cursor:pointer}.special-offer-btn-container{font-size:12px;background:#0078D4;padding:0 8px 2px;height:16px;line-height:16px;border-radius:4px;display:inline-block;text-align:center}pure-icon{margin-left:0px}`;let u=class extends a.g{constructor(){super(...arguments),this.expirationDate="",this.displayExpirationDate=!1}};(0,o.gn)([(0,n.Lj)({attribute:"expiration-date"})],u.prototype,"expirationDate",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean",attribute:"display-expiration-date"})],u.prototype,"displayExpirationDate",void 0),u=(0,o.gn)([(0,r.M)({name:"decoration-special-offer",template:h,styles:g})],u)},51767:function(t,e,i){i.d(e,{D:function(){return p}});var o=i(33940),a=i(28904),n=i(42590);class r extends a.H{constructor(){super(...arguments),this.iconName="",this.iconColor=""}}(0,o.gn)([n.Lj],r.prototype,"data",void 0),(0,o.gn)([(0,n.Lj)({attribute:"icon-name"})],r.prototype,"iconName",void 0),(0,o.gn)([(0,n.Lj)({attribute:"icon-width"})],r.prototype,"iconWidth",void 0),(0,o.gn)([(0,n.Lj)({attribute:"icon-height"})],r.prototype,"iconHeight",void 0),(0,o.gn)([(0,n.Lj)({attribute:"icon-color"})],r.prototype,"iconColor",void 0);const s=i(78923).i`
`;var l=i(49218),d=i(93703);const c=l.dy`<template id="pure-icon">${t=>{const{iconWidth:e,iconHeight:i,iconColor:o}=t;return l.dy` ${(0,d.g)((t=>"check"===t.iconName),((t,e,i)=>l.dy`
    <svg fill=${t} width=${e} height=${i} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xml:space="preserve">
        <path d="M6,0C2.686,0,0,2.686,0,6s2.686,6,6,6s6-2.686,6-6S9.314,0,6,0z M9.207,5.207l-3.5,3.5&#xA; c-0.39,0.39-1.023,0.39-1.414,0l-1.5-1.5C2.785,7.199,2.776,7.191,2.768,7.182c-0.384-0.397-0.373-1.03,0.025-1.414&#xA; c0.397-0.384,1.03-0.373,1.414,0.025L5,6.586l2.793-2.793c0.008-0.008,0.016-0.017,0.025-0.025c0.397-0.384,1.03-0.373,1.414,0.025&#xA; C9.615,4.19,9.604,4.823,9.207,5.207z" />
    </svg>
`)(o,e,i))} ${(0,d.g)((t=>"fullStar"===t.iconName),((t,e)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.52351 0.471551C5.82068 -0.157184 6.6793 -0.157184 6.97646 0.471551L8.39149 3.46535L11.5555 3.94543C12.22 4.04625 12.4853 4.89895 12.0045 5.38833L9.71494 7.71866L10.2554 11.0092C10.3689 11.7002 9.67431 12.2272 9.07998 11.9009L6.24999 10.3474L3.42001 11.9009C2.82569 12.2272 2.13105 11.7002 2.24456 11.0092L2.78504 7.71866L0.495535 5.38833C0.014709 4.89895 0.280035 4.04625 0.94452 3.94543L4.10854 3.46535L5.52351 0.471551Z" fill="url(#paint0_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="1.9375" y1="1.6875" x2="12.2493" y2="10.9867" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,d.g)((t=>"emptyStar"===t.iconName),((t,e)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 4 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.27351 4.47155C5.57068 3.84282 6.4293 3.84281 6.72646 4.47155L8.14149 7.46535L11.3055 7.94543C11.97 8.04625 12.2353 8.89895 11.7545 9.38834L9.46494 11.7187L10.0054 15.0091C10.1189 15.7002 9.42431 16.2272 8.82998 15.9009L5.99999 14.3474L3.17001 15.9009C2.57569 16.2272 1.88105 15.7002 1.99456 15.0091L2.53504 11.7187L0.245535 9.38834C-0.235291 8.89895 0.030035 8.04625 0.69452 7.94543L3.85854 7.46535L5.27351 4.47155ZM5.99999 5.05831L4.64478 7.92564C4.52678 8.17531 4.29867 8.34836 4.0348 8.3884L1.00445 8.84819L3.19723 11.0801C3.38817 11.2745 3.4753 11.5544 3.43023 11.8289L2.91258 14.9804L5.62301 13.4924C5.85903 13.3628 6.14095 13.3628 6.37697 13.4924L9.08742 14.9804L8.56978 11.8289C8.52471 11.5544 8.61184 11.2745 8.80273 11.0801L10.9955 8.84819L7.96518 8.3884C7.70132 8.34836 7.47322 8.17531 7.35524 7.92564L5.99999 5.05831Z" fill="url(#paint0_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="5.6875" x2="11.9993" y2="14.9867" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,d.g)((t=>"halfStar"===t.iconName),((t,e)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.27351 0.471548C5.57068 -0.15718 6.4293 -0.157186 6.72646 0.471548L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38834L9.46494 7.71866L10.0054 11.0091C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0091L2.53504 7.71866L0.245535 5.38834C-0.235291 4.89895 0.030035 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471548ZM5.99999 1.05831L4.64478 3.92564C4.52678 4.17531 4.29867 4.34836 4.0348 4.3884L1.00445 4.84819L3.19723 7.08007C3.38817 7.27445 3.4753 7.55442 3.43023 7.82888L2.91258 10.9804L5.62301 9.49242C5.85903 9.36284 6.14095 9.36284 6.37697 9.49242L9.08742 10.9804L8.56978 7.82888C8.52471 7.55442 8.61184 7.27445 8.80273 7.08007L10.9955 4.84819L7.96518 4.3884C7.70132 4.34836 7.47322 4.17531 7.35524 3.92564L5.99999 1.05831Z"
            fill="url(#paint0_linear)"></path>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="6" height="12">
            <rect width="6" height="12" fill="#C4C4C4"></rect>
        </mask>
        <g mask="url(#mask0)">
            <path
                d="M5.27351 0.471551C5.4221 0.157183 5.71104 -8.64667e-08 5.99999 0C6.28893 8.6463e-08 6.57788 0.157184 6.72646 0.471551L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38833L9.46494 7.71866L10.0054 11.0092C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0092L2.53504 7.71866L0.245535 5.38833C-0.235291 4.89895 0.0300351 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471551Z"
                fill="url(#paint1_linear)"></path>
        </g>
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,d.g)((t=>"halfStarRight"===t.iconName),((t,e)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 0C5.71105 -3.2871e-06 5.4221 0.15718 5.27351 0.471548L3.85854 3.46535L0.69452 3.94543C0.030035 4.04625 -0.235291 4.89895 0.245535 5.38834L2.53504 7.71866L1.99456 11.0091C1.88105 11.7002 2.57569 12.2272 3.17001 11.9009L5.99999 10.3474L6 10.3474V9.39523C5.87051 9.39523 5.74102 9.42763 5.62301 9.49242L2.91258 10.9804L3.43023 7.82888C3.4753 7.55442 3.38817 7.27445 3.19723 7.08007L1.00445 4.84819L4.0348 4.3884C4.29867 4.34836 4.52678 4.17531 4.64478 3.92564L5.99999 1.05831L6 1.05833V0Z"
            fill="url(#paint0_linear)" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 10.3474L8.82998 11.9009C9.42431 12.2272 10.1189 11.7002 10.0054 11.0092L9.46494 7.71866L11.7545 5.38833C12.2353 4.89895 11.97 4.04625 11.3055 3.94543L8.14149 3.46535L6.72646 0.471551C6.57788 0.157188 6.28894 4.04894e-06 6 0V10.3474Z"
            fill="url(#paint1_linear)" />
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900" />
                <stop offset="0.291667" stop-color="#FFB729" />
                <stop offset="1" stop-color="#FFE975" />
                <stop offset="1" stop-color="#FFE975" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1.6875" y1="1.68756" x2="11.9996" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900" />
                <stop offset="0.291667" stop-color="#FFB729" />
                <stop offset="1" stop-color="#FFE975" />
                <stop offset="1" stop-color="#FFE975" />
            </linearGradient>
        </defs>
    </svg>
`)(e,i))} ${(0,d.g)((t=>"fullStarDR"===t.iconName),((t,e,i)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M5.52351 0.471551C5.82068 -0.157184 6.6793 -0.157184 6.97646 0.471551L8.39149 3.46535L11.5555 3.94543C12.22 4.04625 12.4853 4.89895 12.0045 5.38833L9.71494 7.71866L10.2554 11.0092C10.3689 11.7002 9.67431 12.2272 9.07998 11.9009L6.24999 10.3474L3.42001 11.9009C2.82569 12.2272 2.13105 11.7002 2.24456 11.0092L2.78504 7.71866L0.495535 5.38833C0.014709 4.89895 0.280035 4.04625 0.94452 3.94543L4.10854 3.46535L5.52351 0.471551Z"></path>
    </svg>
`)(e,i,o))} ${(0,d.g)((t=>"emptyStarDR"===t.iconName),((t,e,i)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 4 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M5.27351 4.47155C5.57068 3.84282 6.4293 3.84281 6.72646 4.47155L8.14149 7.46535L11.3055 7.94543C11.97 8.04625 12.2353 8.89895 11.7545 9.38834L9.46494 11.7187L10.0054 15.0091C10.1189 15.7002 9.42431 16.2272 8.82998 15.9009L5.99999 14.3474L3.17001 15.9009C2.57569 16.2272 1.88105 15.7002 1.99456 15.0091L2.53504 11.7187L0.245535 9.38834C-0.235291 8.89895 0.030035 8.04625 0.69452 7.94543L3.85854 7.46535L5.27351 4.47155ZM5.99999 5.05831L4.64478 7.92564C4.52678 8.17531 4.29867 8.34836 4.0348 8.3884L1.00445 8.84819L3.19723 11.0801C3.38817 11.2745 3.4753 11.5544 3.43023 11.8289L2.91258 14.9804L5.62301 13.4924C5.85903 13.3628 6.14095 13.3628 6.37697 13.4924L9.08742 14.9804L8.56978 11.8289C8.52471 11.5544 8.61184 11.2745 8.80273 11.0801L10.9955 8.84819L7.96518 8.3884C7.70132 8.34836 7.47322 8.17531 7.35524 7.92564L5.99999 5.05831Z"></path>
    </svg>
`)(e,i,o))} ${(0,d.g)((t=>"halfStarDR"===t.iconName),((t,e,i)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.27351 0.471548C5.57068 -0.15718 6.4293 -0.157186 6.72646 0.471548L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38834L9.46494 7.71866L10.0054 11.0091C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0091L2.53504 7.71866L0.245535 5.38834C-0.235291 4.89895 0.030035 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471548ZM5.99999 1.05831L4.64478 3.92564C4.52678 4.17531 4.29867 4.34836 4.0348 4.3884L1.00445 4.84819L3.19723 7.08007C3.38817 7.27445 3.4753 7.55442 3.43023 7.82888L2.91258 10.9804L5.62301 9.49242C5.85903 9.36284 6.14095 9.36284 6.37697 9.49242L9.08742 10.9804L8.56978 7.82888C8.52471 7.55442 8.61184 7.27445 8.80273 7.08007L10.9955 4.84819L7.96518 4.3884C7.70132 4.34836 7.47322 4.17531 7.35524 3.92564L5.99999 1.05831Z"
            fill=${i}></path>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="6" height="12">
            <rect width="6" height="12" fill="#C4C4C4"></rect>
        </mask>
        <g mask="url(#mask0)">
            <path
                d="M5.27351 0.471551C5.4221 0.157183 5.71104 -8.64667e-08 5.99999 0C6.28893 8.6463e-08 6.57788 0.157184 6.72646 0.471551L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38833L9.46494 7.71866L10.0054 11.0092C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0092L2.53504 7.71866L0.245535 5.38833C-0.235291 4.89895 0.0300351 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471551Z"
                fill=${i}></path>
        </g>
    </svg>
`)(e,i,o))} ${(0,d.g)((t=>"halfStarRightDR"===t.iconName),((t,e,i)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 0C5.71105 -3.2871e-06 5.4221 0.15718 5.27351 0.471548L3.85854 3.46535L0.69452 3.94543C0.030035 4.04625 -0.235291 4.89895 0.245535 5.38834L2.53504 7.71866L1.99456 11.0091C1.88105 11.7002 2.57569 12.2272 3.17001 11.9009L5.99999 10.3474L6 10.3474V9.39523C5.87051 9.39523 5.74102 9.42763 5.62301 9.49242L2.91258 10.9804L3.43023 7.82888C3.4753 7.55442 3.38817 7.27445 3.19723 7.08007L1.00445 4.84819L4.0348 4.3884C4.29867 4.34836 4.52678 4.17531 4.64478 3.92564L5.99999 1.05831L6 1.05833V0Z"
            fill=${i} />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 10.3474L8.82998 11.9009C9.42431 12.2272 10.1189 11.7002 10.0054 11.0092L9.46494 7.71866L11.7545 5.38833C12.2353 4.89895 11.97 4.04625 11.3055 3.94543L8.14149 3.46535L6.72646 0.471551C6.57788 0.157188 6.28894 4.04894e-06 6 0V10.3474Z"
            fill=${i} />
    </svg>
`)(e,i,o))} ${(0,d.g)((t=>"shadowStar"===t.iconName),((t,e,i)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M16 1L12.459 12.459H0.999998L10.2705 19.541L6.72949 31L16 23.918L25.2493 31L21.7295 19.541L31 12.459H19.541L16 1Z" />
        <g opacity="0.25">
            <path d="M15.9639 17.5773V1L12.4611 12.4507L15.9639 17.5773L0.999998 12.4507L10.2493 19.5493L15.9639 17.5773L6.71045 31L16 23.9014L15.9639 17.5773L25.2493 31L21.7105 19.5493L15.9639 17.5773L31 12.4507H19.4987L15.9639 17.5773Z" fill="black"/>
            <path d="M15.9639 17.5773V1L12.4611 12.4507L15.9639 17.5773ZM15.9639 17.5773L6.71045 31L16 23.9014L15.9639 17.5773ZM15.9639 17.5773L0.999999 12.4507L10.2493 19.5493L15.9639 17.5773ZM15.9639 17.5773L25.2493 31L21.7105 19.5493L15.9639 17.5773ZM15.9639 17.5773L31 12.4507H19.4987L15.9639 17.5773Z" stroke="black" stroke-width="0.0841596"/>
        </g>
    </svg>
`)(e,i,o))} ${(0,d.g)((t=>"location"===t.iconName),((t,e,i,o,a)=>l.dy`
    <style>
        @media (prefers-color-scheme: dark) {
            path {
                fill: ${a};
            }
        }
        @media (prefers-color-scheme: light) {
            path {
                fill: ${o};
            }
        }
    </style>
    <svg width=${t} height=${e} viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M9.38909 11.6701L8.63932 12.4338C8.08675 12.9924 7.36969 13.7106 6.48803 14.5885C5.93704 15.1372 5.06295 15.1371 4.51208 14.5884L2.30692 12.3792C2.02977 12.0989 1.79778 11.8626 1.61091 11.6701C-0.536971 9.45796 -0.536971 5.87129 1.61091 3.65913C3.7588 1.44696 7.24121 1.44696 9.38909 3.65913C11.537 5.87129 11.537 9.45796 9.38909 11.6701ZM7.07926 7.84334C7.07926 6.94501 6.37218 6.21679 5.49999 6.21679C4.6278 6.21679 3.92074 6.94501 3.92074 7.84334C3.92074 8.74163 4.6278 9.46986 5.49999 9.46986C6.37218 9.46986 7.07926 8.74163 7.07926 7.84334Z" fill="white"></path>
    </svg>
`)(e,i,o,"#717171","white"))} ${(0,d.g)((t=>"rightArrow"===t.iconName),((t,e)=>l.dy`
    <svg width=${t} height=${e} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.35179 6L1.10623 1.63651C0.961802 1.48807 0.965054 1.25065 1.11349 1.10623C1.26193 0.961801 1.49935 0.965053 1.64377 1.11349L6.14377 5.73849C6.28541 5.88406 6.28541 6.11594 6.14377 6.26151L1.64377 10.8865C1.49935 11.0349 1.26193 11.0382 1.11349 10.8938C0.965054 10.7493 0.961802 10.5119 1.10623 10.3635L5.35179 6Z" fill="white" stroke="white" stroke-width="0.4"/>
    </svg>
`)(e,i))} ${(0,d.g)((t=>"cube"===t.iconName),((t,e,i)=>l.dy`
<svg width=${t} height=${e} viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill=${i} fill-rule="evenodd" clip-rule="evenodd" d="M36.2122 0.827427L56.9267 12.2204C57.2516 12.3991 57.5225 12.6618 57.7113 12.981C57.9 13.3001 57.9996 13.6641 57.9997 14.035V40.9637C57.9996 41.3345 57.9 41.6985 57.7113 42.0177C57.5225 42.3369 57.2516 42.5996 56.9267 42.7783L36.2122 54.1712C35.9065 54.3399 35.563 54.4283 35.2138 54.4283C34.8646 54.4283 34.5211 54.3399 34.2154 54.1712L24.8566 49.0237L26.8535 45.3966L33.1424 48.8559V26.6521L13.5009 15.8495C13.1762 15.6707 12.9053 15.408 12.7167 15.0888C12.5281 14.7697 12.4286 14.4057 12.4286 14.035C12.4286 13.6642 12.5281 13.3002 12.7167 12.9811C12.9053 12.6619 13.1762 12.3992 13.5009 12.2204L34.2154 0.827427C34.5212 0.659157 34.8647 0.570923 35.2138 0.570923C35.5629 0.570923 35.9064 0.659157 36.2122 0.827427ZM51.63 14.035L35.2138 5.0076L18.7976 14.035L35.2138 23.0623L51.63 14.035ZM37.2852 48.8538L53.8568 39.7395V17.5357L37.2852 26.65V48.8538ZM0 27.4995H16.5715V23.3566H0V27.4995ZM20.7144 44.071H4.14286V39.9281H20.7144V44.071ZM8.28571 35.7852H24.8573V31.6424H8.28571V35.7852Z"/>
</svg>
`)(e,i,"#FFFFFF"))} ${(0,d.g)((t=>"box"===t.iconName),((t,e,i)=>l.dy`
<svg width=${t} height=${e} viewBox="0 0 59 63" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6526 3.74097C27.5277 3.25501 28.5121 3 29.5131 3C30.514 3 31.4985 3.25501 32.3736 3.74097L54.512 16.0372C54.971 16.2924 55.3534 16.6657 55.6196 17.1184C55.8858 17.5711 56.0262 18.0867 56.0262 18.6119V42.8714C56.0259 43.922 55.7447 44.9535 55.2118 45.8589C54.6788 46.7643 53.9134 47.5107 52.9949 48.0208L32.3736 59.4803C31.4985 59.9663 30.514 60.2213 29.5131 60.2213C28.5121 60.2213 27.5277 59.9663 26.6526 59.4803L6.03133 48.0208C5.11326 47.5109 4.34814 46.765 3.81517 45.8601C3.28221 44.9553 3.00077 43.9244 3 42.8743V18.6119C2.99998 18.0867 3.14035 17.5711 3.40658 17.1184C3.67281 16.6657 4.05521 16.2924 4.51419 16.0372L26.6556 3.74097H26.6526Z" stroke=${i} stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.2549 9.5144L42.768 24.2439V34.5545" stroke=${i} stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.8369 32.5757L20.6746 37.5012" stroke=${i}" stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29.5131 31.6089V59.5949M3 16.8794L29.5131 31.6089L3 16.8794ZM29.5131 31.6089L56.0262 16.8794L29.5131 31.6089Z" stroke=${i} stroke-width="4.08717" stroke-linejoin="round"/>
</svg>
`)(e,i,"#FFFFFF"))} ${(0,d.g)((t=>"truck"===t.iconName),((t,e,i)=>l.dy`
<svg width=${t} height=${e} viewBox="0 0 62 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill=${i} d="M49.0667 9.2H42.9333V6.13333C42.9333 4.50667 42.2871 2.94663 41.1369 1.79641C39.9867 0.646188 38.4267 0 36.8 0H6.13333C4.50667 0 2.94663 0.646188 1.79641 1.79641C0.646188 2.94663 0 4.50667 0 6.13333V36.8H6.13333C6.13333 38.0082 6.3713 39.2045 6.83364 40.3207C7.29599 41.4369 7.97365 42.4511 8.82795 43.3054C9.68225 44.1597 10.6965 44.8373 11.8126 45.2997C12.9288 45.762 14.1252 46 15.3333 46C16.5415 46 17.7378 45.762 18.854 45.2997C19.9702 44.8373 20.9844 44.1597 21.8387 43.3054C22.693 42.4511 23.3707 41.4369 23.833 40.3207C24.2954 39.2045 24.5333 38.0082 24.5333 36.8H36.8C36.8 39.24 37.7693 41.58 39.4946 43.3054C41.22 45.0307 43.56 46 46 46C48.44 46 50.7801 45.0307 52.5054 43.3054C54.2307 41.58 55.2 39.24 55.2 36.8H61.3333V21.4667L49.0667 9.2ZM15.3333 41.4C14.7291 41.3998 14.1307 41.2806 13.5725 41.0491C13.0143 40.8177 12.5072 40.4786 12.08 40.0512C11.6529 39.6237 11.3141 39.1163 11.083 38.558C10.852 37.9996 10.7331 37.4012 10.7333 36.7969C10.7335 36.1927 10.8528 35.5943 11.0842 35.0361C11.3156 34.4779 11.6547 33.9708 12.0822 33.5436C12.5096 33.1165 13.017 32.7777 13.5754 32.5466C14.1337 32.3156 14.7321 32.1967 15.3364 32.1969C16.5568 32.1973 17.7271 32.6825 18.5897 33.5458C19.4524 34.409 19.9368 35.5796 19.9364 36.8C19.936 38.0204 19.4508 39.1907 18.5876 40.0533C17.7243 40.916 16.5537 41.4004 15.3333 41.4ZM6.13333 27.6V6.13333H36.8V27.6H6.13333ZM46 41.4C45.3957 41.3998 44.7974 41.2806 44.2392 41.0491C43.681 40.8177 43.1738 40.4786 42.7467 40.0512C42.3195 39.6237 41.9807 39.1163 41.7497 38.558C41.5186 37.9996 41.3998 37.4012 41.4 36.7969C41.4002 36.1927 41.5194 35.5943 41.7509 35.0361C41.9823 34.4779 42.3214 33.9708 42.7488 33.5436C43.1763 33.1165 43.6837 32.7777 44.242 32.5466C44.8004 32.3156 45.3988 32.1967 46.0031 32.1969C47.2235 32.1973 48.3937 32.6825 49.2564 33.5458C50.1191 34.409 50.6035 35.5796 50.6031 36.8C50.6027 38.0204 50.1175 39.1907 49.2542 40.0533C48.391 40.916 47.2204 41.4004 46 41.4Z"/>
</svg>
`)(e,i,"#FFFFFF"))} `}}</template>`;let p=class extends r{};p=(0,o.gn)([(0,a.M)({name:"pure-icon",template:c,styles:s})],p)},74220:function(t,e,i){i.d(e,{L:function(){return f}});var o=i(33940),a=i(28904),n=i(42590),r=i(26415),s=i(66286),l=i(92773);let d=class extends a.H{constructor(){super(...arguments),this.content="",this.customStyle="",this.fontFamily="inherit",this.fontSize="14",this.fontWeight="600",this.textColor="#FFFFFF",this.darkThemeColor=s.SQ.defaultDarkThemeColor,this.lightThemeColor=s.SQ.defaultLightThemeColor}};(0,o.gn)([n.Lj],d.prototype,"content",void 0),(0,o.gn)([(0,n.Lj)({attribute:"custom-style"})],d.prototype,"customStyle",void 0),(0,o.gn)([(0,n.Lj)({attribute:"font-family"})],d.prototype,"fontFamily",void 0),(0,o.gn)([(0,n.Lj)({attribute:"font-size"})],d.prototype,"fontSize",void 0),(0,o.gn)([(0,n.Lj)({attribute:"font-weight"})],d.prototype,"fontWeight",void 0),(0,o.gn)([(0,n.Lj)({attribute:"text-color"})],d.prototype,"textColor",void 0),(0,o.gn)([(0,n.Lj)({attribute:"dark-theme-color"})],d.prototype,"darkThemeColor",void 0),(0,o.gn)([(0,n.Lj)({attribute:"light-theme-color"})],d.prototype,"lightThemeColor",void 0),d=(0,o.gn)([(0,l.uj)(r.EoX,"pure-text")],d);var c=i(78923),p=i(53692);const h=c.i` .pure-text-container{display:inline-block;height:20px;line-height:20px}`.withBehaviors(new p.j(["fontFamily","fontSize","fontWeight","textColor"],(t=>c.i` .pure-text-container{font-family:${t.fontFamily};
                    font-size: ${t.fontSize}px;
                    font-weight: ${t.fontWeight};
                    color: ${t.textColor};
                }
            `)));var g=i(49218),u=i(93703);const m=g.dy` ${(0,u.g)((t=>t.darkThemeColor),g.dy`<style>@media (prefers-color-scheme: dark) { .pure-text-container { color: ${t=>t.darkThemeColor}; } }</style>`)} ${(0,u.g)((t=>t.lightThemeColor),g.dy`<style>@media (prefers-color-scheme: light) { .pure-text-container { color: ${t=>t.lightThemeColor}; } }</style>`)}<div class="pure-text-container" style=${t=>t.customStyle}>${t=>t.content}</div>`;let f=class extends d{};f=(0,o.gn)([(0,a.M)({name:"pure-text",template:m,styles:h})],f)},48912:function(t,e,i){i.d(e,{e:function(){return f}});var o=i(14609),a=i(33940),n=i(42590),r=i(84446),s=i(26415),l=i(92773);let d=class extends r.F{constructor(){super(...arguments),this.faviconText="",this.landingPage=""}};(0,a.gn)([(0,n.Lj)({attribute:"favicon-text"})],d.prototype,"faviconText",void 0),(0,a.gn)([(0,n.Lj)({attribute:"landing-page"})],d.prototype,"landingPage",void 0),(0,a.gn)([(0,n.Lj)({attribute:"tel-metadata"})],d.prototype,"telemetryMetadata",void 0),d=(0,a.gn)([(0,l.uj)(s.EoX,"msn-native-ad-favicon")],d);var c=i(28904),p=i(78923),h=i(41503);const g=p.i` .native-ad-favicon-wrapper{width:16px;height:16px;background:#F2F2F2;border-radius:4px;align-items:center;text-align:center;justify-content:center;display:flex}.native-ad-favicon-text{color:#4D1C3A;font-size:12px;width:100%;height:100%;text-decoration:none}`.withBehaviors(new h.g("layoutStyle"));const u=i(49218).dy`<div class="native-ad-favicon-wrapper"><a class="native-ad-favicon-text" href=${t=>t.landingPage} data-t="${t=>t.telemetryMetadata}">${t=>t.faviconText}</a></div>`;class m extends d{}const f=(0,o.Z)((()=>{(0,c.M)({name:"msn-native-ad-favicon",template:u,styles:g,shadowOptions:{delegatesFocus:!0}})(m)}))},64789:function(t,e,i){i.d(e,{A:function(){return $}});var o=i(33940),a=i(67121),n=i(42590),r=i(99452),s=i(84446),l=i(26415),d=i(92773);let c=class extends s.F{constructor(){super(...arguments),this.effectId="",this.intersectionRootMargin="-350px 0px -200px 0px",this.isAnimationValid=!1,this.starType="",this.isStaticMode=!1,this.updateAnimStatus=(t,e)=>{this.isAnimationValid!==t&&(this.isAnimationValid=t,t&&e&&setTimeout((()=>{e()}),0))}}connectedCallback(){if(super.connectedCallback(),!this.isStaticMode){this.effectGroup=a.am.getEffectGroup();const t={root:this.intersectionRoot,rootMargin:this.intersectionRootMargin};this.effectGroup.register(this.effectId,this.highlightingRatingContainer,this.updateAnimStatus,t,!0,0)}}disconnectedCallback(){super.disconnectedCallback(),this.effectGroup&&this.effectGroup.unregister(this.effectId)}};(0,o.gn)([(0,n.Lj)({attribute:"rating"})],c.prototype,"rating",void 0),(0,o.gn)([n.Lj],c.prototype,"effectId",void 0),(0,o.gn)([n.Lj],c.prototype,"intersectionRoot",void 0),(0,o.gn)([n.Lj],c.prototype,"intersectionRootMargin",void 0),(0,o.gn)([r.LO],c.prototype,"isAnimationValid",void 0),(0,o.gn)([n.Lj],c.prototype,"starType",void 0),(0,o.gn)([(0,n.Lj)({mode:"boolean",attribute:"isStaticMode"})],c.prototype,"isStaticMode",void 0),c=(0,o.gn)([(0,d.uj)(l.EoX,"msn-native-ad-highlight-rating")],c);var p=i(28904),h=i(78923),g=i(53692),u=i(41503);const m=h.i` .stars-container{display:flex;justify-content:center;gap:8px}.animated-star1{animation:fadeIn 300ms}.animated-star2{animation:fadeIn 360ms}.animated-star3{animation:fadeIn 420ms}.animated-star4{animation:fadeIn 480ms}.animated-star5{animation:fadeIn 540ms}.star1,.star2,.star3,.star4,.star5{opacity:1}@keyframes fadeIn{0%{opacity:0;-webkit-transform:translate(0,30px);transform:translate(0,30px)}80%{opacity:1;-webkit-transform:translate(0,-10px);transform:translate(0,-10px)}100%{opacity:1;-webkit-transform:translate(0,0px);transform:translate(0,0px)}}`.withBehaviors(new u.g("layoutStyle"),new g.j(["isStaticMode"],(t=>{let e="";return t.isStaticMode&&(e+=".star1, .star2, .star3, .star4, .star5{\n                    opacity: 1;\n                 }"),h.i`${e}`})));var f=i(49218),v=i(41472),b=i(93703),y=i(45560);const x=f.dy`<div class="stars-container" ${(0,v.i)("highlightingRatingContainer")}><div class="${t=>t.isAnimationValid?"animated-star1":"star1"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>w(t.rating,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star2":"star2"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>w(t.rating-2,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star3":"star3"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>w(t.rating-4,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star4":"star4"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>w(t.rating-6,t.starType)}</div><div class="${t=>t.isAnimationValid?"animated-star5":"star5"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}">${t=>w(t.rating-8,t.starType)}</div><div>`,w=(t,e)=>f.dy` ${(0,b.g)((e=>t-2>=0),(0,y.T7)(e))} ${(0,b.g)((e=>t-2<0),f.dy` ${(0,b.g)((e=>t-1>=0),(0,y.NP)(e))} ${(0,b.g)((e=>t-1<0),f.dy` ${(0,b.g)((e=>t-1<0),(0,y.IB)(e))} `)} `)} `;let $=class extends c{};$=(0,o.gn)([(0,p.M)({name:"msn-native-ad-highlight-rating",template:x,styles:m,shadowOptions:{delegatesFocus:!0}})],$)},45560:function(t,e,i){i.d(e,{fx:function(){return c},IB:function(){return g},NP:function(){return h},T7:function(){return p}});var o=i(49218);const a=o.dy`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0627 1.25747C14.8552 -0.419156 17.1448 -0.419156 17.9372 1.25747L21.7106 9.24093L30.148 10.5211C31.9199 10.79 32.6274 13.0639 31.3453 14.3689L25.2398 20.5831L26.6812 29.3579C26.9838 31.2006 25.1315 32.6059 23.5466 31.7359L16 27.593L8.45337 31.7359C6.8685 32.6059 5.01614 31.2006 5.31883 29.3579L6.76011 20.5831L0.65476 14.3689C-0.627443 13.0639 0.0800934 10.79 1.85205 10.5211L10.2894 9.24093L14.0627 1.25747Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>  
`,n=o.dy`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0014 4.79517e-07C15.2304 -0.000517523 14.4592 0.418646 14.0627 1.25746L10.2894 9.24092L1.85205 10.5211C0.0800935 10.79 -0.627443 13.0638 0.65476 14.3689L6.76011 20.5831L5.31883 29.3577C5.07924 30.8164 6.18983 32.0008 7.44924 32C7.78192 32.0002 8.12506 31.9178 8.45651 31.7358L16.0016 27.5938L23.5466 31.7358C25.1315 32.6059 26.9838 31.2006 26.6812 29.3577L25.2398 20.5831L31.3453 14.3689C32.6274 13.0638 31.9199 10.79 30.148 10.5211L21.7106 9.24092L17.9372 1.25746C17.5415 0.420067 16.7711 0.000919515 16.0014 4.79517e-07C16.0011 4.79517e-07 16.0017 4.79517e-07 16.0014 4.79517e-07ZM16.0025 25.0539V2.82752L19.614 10.4684C19.9286 11.1341 20.5368 11.5956 21.2405 11.7024L29.3214 12.9285L23.474 18.8802C22.9649 19.3985 22.7326 20.1451 22.8527 20.877L24.2331 29.281L17.0053 25.3131C16.6914 25.1408 16.3471 25.0544 16.0025 25.0539Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>
`,r=o.dy`
<svg width=32 height=32 viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.15,10.52,21.71,9.24l-3.77-8a2.12,2.12,0,0,0-3.88,0l-3.77,8L1.85,10.52a2.29,2.29,0,0,0-1.2,3.85l6.11,6.21L5.32,29.36A2.23,2.23,0,0,0,7.45,32a2.11,2.11,0,0,0,1-.26L16,27.59l7.55,4.15a2.18,2.18,0,0,0,3.13-2.38l-1.44-8.78,6.11-6.21A2.29,2.29,0,0,0,30.15,10.52Zm-6.68,8.36a2.33,2.33,0,0,0-.62,2l1.38,8.4-7.22-4a2.14,2.14,0,0,0-1-.26,2.1,2.1,0,0,0-1,.26l-7.23,4,1.38-8.4a2.33,2.33,0,0,0-.62-2L2.68,12.93l8.08-1.23a2.15,2.15,0,0,0,1.63-1.23L16,2.83l3.61,7.64a2.18,2.18,0,0,0,1.63,1.23l8.08,1.23Z" fill="url(#paint0_linear)"/>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>
`,s=o.dy`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3049 1.10028C12.9983 -0.366762 15.0017 -0.366762 15.6951 1.10028L18.9968 8.08581L26.3795 9.206C27.9299 9.44126 28.549 11.4309 27.4271 12.5728L22.0849 18.0102L23.346 25.6882C23.6108 27.3006 21.9901 28.5302 20.6033 27.7689L14 24.1439L7.3967 27.7689C6.00993 28.5302 4.38912 27.3006 4.65397 25.6882L5.9151 18.0102L0.572915 12.5728C-0.549012 11.4309 0.0700817 9.44126 1.62055 9.206L9.00326 8.08581L12.3049 1.10028Z" fill="url(#paint0_linear_75_17843)"/>
    <defs>
        <linearGradient id="paint0_linear_75_17843" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEF4D"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
    </defs>
</svg>
`,l=o.dy`
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5012 4.04593e-07C12.8507 -0.00043666 12.2 0.353233 11.8654 1.06098L8.68171 7.79703L1.56267 8.8772C0.0675789 9.10405 -0.529405 11.0226 0.552454 12.1237L5.70384 17.367L4.48776 24.7705C4.28561 26.0014 5.22267 27.0007 6.2853 27C6.56599 27.0001 6.85552 26.9306 7.13518 26.7771L13.5013 23.2823L19.8674 26.7771C21.2047 27.5112 22.7676 26.3255 22.5122 24.7705L21.2961 17.367L26.4476 12.1237C27.5294 11.0226 26.9324 9.10405 25.4374 8.8772L18.3183 7.79703L15.1345 1.06098C14.8006 0.354431 14.1506 0.000775841 13.5012 4.04593e-07C13.5009 4.04593e-07 13.5015 4.04593e-07 13.5012 4.04593e-07ZM13.5021 21.1392V2.38572L16.5493 8.83267C16.8148 9.39443 17.328 9.7838 17.9217 9.87389L24.74 10.9084L19.8061 15.9301C19.3766 16.3675 19.1806 16.9974 19.282 17.615L20.4467 24.7058L14.3482 21.3579C14.0834 21.2126 13.7928 21.1397 13.5021 21.1392Z" fill="url(#paint0_linear_75_17845)"/>
    <defs>
        <linearGradient id="paint0_linear_75_17845" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
    </defs>
</svg>
`,d=o.dy`
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0C13.5004 0 13.5008 -2.66365e-07 13.5012 0C14.1506 0.00077608 14.8006 0.354431 15.1345 1.06098L18.3183 7.79703L25.4373 8.8772C26.9324 9.10405 27.5294 11.0226 26.4476 12.1237L21.2961 17.367L22.5122 24.7705C22.7676 26.3255 21.2047 27.5112 19.8674 26.7771L13.5013 23.2823L13.5 23.283V0ZM13.5021 2.38572V21.1392C13.7928 21.1397 14.0834 21.2126 14.3482 21.3579L20.4467 24.7058L19.282 17.615C19.1806 16.9974 19.3766 16.3675 19.8061 15.9301L24.74 10.9084L17.9217 9.87389C17.328 9.78379 16.8147 9.39443 16.5493 8.83267L13.5021 2.38572Z" fill="url(#paint0_linear_75_17858)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0C13.4996 0 13.4992 -2.66298e-07 13.4988 0C12.8494 0.000775841 12.1994 0.354431 11.8655 1.06098L8.68165 7.79703L1.56265 8.8772C0.0675583 9.10405 -0.529369 11.0226 0.552422 12.1237L5.70389 17.367L4.48775 24.7705C4.23243 26.3255 5.7953 27.5112 7.13255 26.7771L13.4987 23.2823L13.5 23.283V0ZM13.5 0C13.5004 0 13.5008 -2.72162e-07 13.5012 0ZM13.4979 2.38572V21.1392C13.2072 21.1397 12.9166 21.2126 12.6518 21.3579L6.55331 24.7058L7.718 17.615C7.8194 16.9974 7.62335 16.3675 7.19385 15.9301L2.26004 10.9084L9.07834 9.87389C9.67203 9.78379 10.1852 9.39443 10.4507 8.83267L13.4979 2.38572Z" fill="url(#paint1_linear_75_17858)"/>
    <g clip-path="url(#clip0_75_17858)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.18459e-07C13.5004 1.18459e-07 13.5008 -1.48073e-07 13.5012 1.18459e-07C14.1506 0.00077608 14.8006 0.354431 15.1345 1.06098L18.3183 7.79703L25.4373 8.8772C26.9324 9.10405 27.5294 11.0226 26.4476 12.1237L21.2961 17.367L22.5122 24.7705C22.7676 26.3255 21.2047 27.5112 19.8674 26.7771L13.5013 23.2823L13.5 23.283V1.18459e-07ZM13.5021 2.38572V21.1392C13.7928 21.1397 14.0834 21.2126 14.3482 21.3579L20.4467 24.7058L19.282 17.615C19.1806 16.9974 19.3766 16.3675 19.8061 15.9301L24.74 10.9084L17.9217 9.87389C17.328 9.7838 16.8147 9.39443 16.5493 8.83267L13.5021 2.38572Z" fill="url(#paint2_linear_75_17858)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.20919e-07C13.4996 1.20919e-07 13.4992 -1.45474e-07 13.4988 1.20919e-07C12.8494 0.000775962 12.1994 0.354431 11.8655 1.06098L8.68165 7.79703L1.56265 8.8772C0.0675581 9.10405 -0.529371 11.0226 0.55242 12.1237L5.70389 17.367L4.48775 24.7705C4.23243 26.3255 5.7953 27.5112 7.13255 26.7771L13.4987 23.2823L13.5 23.283V1.20919e-07ZM13.5 1.20919e-07C13.5004 1.20919e-07 13.5008 -1.51148e-07 13.5012 1.20919e-07H13.5ZM13.4979 2.38572V21.1392C13.2072 21.1397 12.9166 21.2126 12.6518 21.3579L6.55331 24.7058L7.718 17.615C7.8194 16.9974 7.62335 16.3675 7.19385 15.9301L2.26003 10.9084L9.07834 9.87389C9.67203 9.78379 10.1853 9.39443 10.4507 8.83267L13.4979 2.38572Z" fill="url(#paint3_linear_75_17858)"/>
    </g>
    <defs>
        <linearGradient id="paint0_linear_75_17858" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
        <linearGradient id="paint1_linear_75_17858" x1="13.5012" y1="0" x2="13.5012" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
            <linearGradient id="paint2_linear_75_17858" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
        <linearGradient id="paint3_linear_75_17858" x1="13.5012" y1="0" x2="13.5012" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
            <clipPath id="clip0_75_17858">
            <rect width="27" height="27" fill="white"/>
        </clipPath>
    </defs>
</svg>
`,c={RED:"red",YELLOW:"yellow"},p=t=>{switch(t){case c.RED:return a;case c.YELLOW:return s;default:return a}},h=t=>{switch(t){case c.RED:return n;case c.YELLOW:return l;default:return n}},g=t=>{switch(t){case c.RED:return r;case c.YELLOW:return d;default:return r}}},84446:function(t,e,i){i.d(e,{F:function(){return d}});var o=i(33940),a=i(28904),n=i(78923),r=i(99452),s=i(33764);const l=new Map([["flex","MsnFlexLayout"],["pixel","MsnPixelLayout"],["block","MsnBlockLayout"]]);class d extends a.H{constructor(){super(...arguments),this._displayName="MsnUberLayout"}connectedCallback(){var t;super.connectedCallback();const e=null===(t=this.layoutConfig)||void 0===t?void 0:t.mode;if(l.has(e)&&l.get(e)!==this._displayName)return;const i=Object.keys(this.layoutConfig||{}).filter((t=>"mode"!==t)).map((t=>{var e;return(0,s._t)(t,null===(e=this.layoutConfig)||void 0===e?void 0:e[t])})).filter((t=>""!==t));this.layoutStyle=n.i`${i.length>0?`:host {${i.join(";")}}`:""}`}}(0,o.gn)([r.LO],d.prototype,"layoutConfig",void 0),(0,o.gn)([r.LO],d.prototype,"layoutStyle",void 0)},22866:function(t,e,i){i.d(e,{g:function(){return b}});var o=i(33940),a=i(89781),n=i(63070),r=i(94352);var s=i(28904),l=i(42590);class d extends s.H{}(0,o.gn)([l.Lj],d.prototype,"userSubscriptionData",void 0),(0,o.gn)([l.Lj],d.prototype,"cardSize",void 0);var c=i(78923),p=i(58958),h=i(79148);const g=c.i`
.badge{border-radius:4px;font-size:8px}.badge svg{margin-inline-end:6px}.true{background:linear-gradient(90deg,#5051D1 0%,#797AF5 100%);padding:2px 6px 3px 8px;color:#FFFFFF}.false{background:${(0,p.Y)()?"linear-gradient(90deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.78) 100%)":"linear-gradient(90deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.46) 100%)"};
    display: flex;
    padding: 2px 6px 3px 8px;
    color: ${h.RJ}}._1x_2y{display:inline-flex;margin-bottom:6px}._2x_2y{position:absolute;top:16px}`;var u=i(49218),m=i(93703);const f=u.dy`<svg width="8" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M3.874.816 4 .813c1.097 0 1.994.856 2.059 1.936l.003.126v.375h.563c.621 0 1.125.504 1.125 1.125v4.5C7.75 9.496 7.246 10 6.625 10h-5.25A1.125 1.125 0 0 1 .25 8.875v-4.5c0-.621.504-1.125 1.125-1.125h.563v-.375c0-1.097.856-1.994 1.936-2.059L4 .813l-.126.003ZM4 5.875a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm.096-3.933L4 1.938a.938.938 0 0 0-.933.841l-.005.096v.375h1.876v-.375a.938.938 0 0 0-.842-.933L4 1.938l.096.004Z" fill="currentColor"/></svg>`,v=u.dy`<div class="badge ${t=>t.userSubscriptionData.isSubscribed?"true":"false"} ${t=>"_1x_2y"==t.cardSize?"_1x_2y":"_2x_2y"}">${(0,m.g)((t=>!t.userSubscriptionData.isSubscribed),u.dy` ${f}<b>${t=>{var e,i;return null===(i=null===(e=t.userSubscriptionData)||void 0===e?void 0:e.subscribeToViewText)||void 0===i?void 0:i.toLocaleUpperCase()}}</b>`)} ${(0,m.g)((t=>t.userSubscriptionData.isSubscribed),u.dy`<b>${t=>{var e,i;return null===(i=null===(e=t.userSubscriptionData)||void 0===e?void 0:e.subscribedText)||void 0===i?void 0:i.toLocaleUpperCase()}}</b>`)}</div>`;let b=class extends d{};b=(0,o.gn)([(0,s.M)({name:"msn-subscription-badge",template:v,styles:g})],b),a.D.define(n.H.registry),r.D.define(n.H.registry)},14039:function(t,e,i){i.d(e,{t:function(){return C}});var o=i(33940),a=i(28904),n=i(49218),r=i(41472);const s=n.dy`<div class="${t=>t.overlay&&"overlay"}"></div><div id="${t=>t.id}" class="widget-host" ${(0,r.i)("widgetHost")} data-t="${t=>{var e;return null===(e=t.telemetryObject)||void 0===e?void 0:e.getMetadataTag()}}"></div>`;var l=i(78923),d=i(38492),c=i(42689),p=i(22798),h=i(29717);const g=l.i` .widget-host{--elevation:4;height:100%;background:${d.I};
        color: ${c.C};border-radius:calc(var(--layer-corner-radius) * 1px);box-shadow:0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0,0,0,calc(0.11 * (2 - var(--background-luminance,1)))),0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0,0,0,calc(0.13 * (2 - var(--background-luminance,1))))}.overlay{height:100%;width:100%;z-index:999;position:absolute}`.withBehaviors((0,h.vF)(l.i` .widget-host{forced-color-adjust:none;background:${p.H.Canvas};
                box-shadow: ${p.H.CanvasText} 0px 0px 0px 1px;
            }
        `));var u=i(42590),m=i(99452),f=i(26415),v=i(19388),b=i(65135),y=i(16339),x=i(63051),w=i(75361);class $ extends a.H{constructor(){super(...arguments),this.overlay=!1,this.widgetModelApi=window.__com_microsoft_dsh_widgetModelApiFactory,this.subscriptions=[],this.onDashboardVisibilityChange=async t=>{if(!this.widgetFrame||this.isInitialSubscription)return void(this.isInitialSubscription=!1);const e=t&&this.isInViewport();this.widgetFrame.onVisibleStateChanged(e)},this.sizeChangeHandler=(t,e)=>{"onSizeChangeEnd"===t&&this.widgetResizedCallback&&this.widgetResizedCallback(this.id,e)},this.attachIntersectionObserver=()=>{if(this.intersectionObserver||!this.widgetFrame)return;this.intersectionObserver=new IntersectionObserver((t=>{t&&t.forEach((t=>{this.widgetFrame&&this.widgetFrame.onVisibleStateChanged(y.gL.get(y.Iq.IsDashboardVisible)&&t.isIntersecting)}))}),{root:null,rootMargin:"0px",threshold:0}),this.intersectionObserver.observe(this.widgetHost)},this.isInViewport=()=>{if(!this.widgetHost)return!1;const t=this.widgetHost.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=document.documentElement.clientHeight&&t.right<=document.documentElement.clientWidth}}async connectedCallback(){super.connectedCallback(),this.isInitialSubscription=!0,this.subscriptions.push(y.gL.subscribe(y.Iq.IsDashboardVisible,this.onDashboardVisibilityChange)),this.attachIntersectionObserver(),this.addEventListeners();const t=x.h1[this.id]||{};let e=t.widgetId||this.id;if(!this.renderer&&this.widgetModelApi)try{this.renderer=this.widgetModelApi.tryGetApi("renderer",w.l1,w.l1)}catch(t){b.M0.sendAppErrorEvent(Object.assign(Object.assign({},f.F$$),{message:"Error calling renderer api on widgetModelApi",pb:Object.assign(Object.assign({},f.F$$.pb),{cardType:this.id,widgetId:e,error:JSON.stringify(t),customMessage:`Error message: ${t&&t.message}`})}))}if(!this.widgetInstance){const i=x.Yn.get(this.id);if(i&&!this.instanceId){const t=await this.createPinPreference(e,i);e=t&&t.widgetId}this.renderer&&this.renderer.renderWidget(this.widgetHost,e,this.instanceId,this.cardSize).then((e=>{e&&(this.widgetInstance=e.widgetInstance,this.widgetFrame=e);const{instanceId:i,widgetId:o,widgetDefinitionId:a}=this.widgetInstance||{};if(this.updateTelemetryObject(o),!this.widgetSizeApi&&this.widgetInstance&&(this.widgetSizeApi=this.widgetInstance.tryGetApi("sizes",w.l1,w.l1)),this.addEventListeners(),this.attachIntersectionObserver(),this.widgetRenderedCallback){const{experienceName:e}=t;e&&(0,v.o_)(e),this.widgetRenderedCallback(this.id,i,o,a)}})).catch((t=>{this.logExternalWidgetRenderError(`Error calling renderWidget api for widget ${e}`,t)}))}}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach((t=>t.unsubscribe())),this.unsetIntersectionObserver(),this.removeEventListeners()}addEventListeners(){this.widgetSizeApi&&this.widgetSizeApi.addEventListener(this.sizeChangeHandler)}removeEventListeners(){this.widgetSizeApi&&this.widgetSizeApi.removeEventListener(this.sizeChangeHandler)}unsetIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}async createPinPreference(t,e){try{this.widgetModel||(this.widgetModel=this.widgetModelApi.tryGetApi("model",w.l1,w.l1));const i=await this.widgetModel.createPinPreference(t,void 0);if(!i)throw new Error("Widget instance is undefined after calling createPinPreference");if(this.instanceId=i.instanceId,x.h1[this.id])return i;const o=i.widgetId;return x.Yn.set(o,Object.assign(Object.assign({},e),{id:o})),o!==this.id&&(x.Yn.delete(this.id),this.id=o),i}catch(e){this.logExternalWidgetRenderError(`Error calling createPinPreference API for widget ${t}`,e)}}updateTelemetryObject(t){y.gL.set(y.Iq.NonPeregrineWidgetTelemetryObject,Object.assign(Object.assign({},y.gL.get(y.Iq.NonPeregrineWidgetTelemetryObject)),{[t]:this.telemetryObject}))}logExternalWidgetRenderError(t,e){b.M0.sendAppErrorEvent(Object.assign(Object.assign({},f.OcW),{message:t,pb:Object.assign(Object.assign({},f.OcW.pb),{cardType:this.id,instanceId:this.instanceId,error:JSON.stringify(e),customMessage:`Error message: ${e&&e.message}`})}))}}(0,o.gn)([(0,u.Lj)({mode:"boolean"})],$.prototype,"overlay",void 0),(0,o.gn)([m.LO],$.prototype,"id",void 0),(0,o.gn)([m.LO],$.prototype,"cardSize",void 0),(0,o.gn)([m.LO],$.prototype,"instanceId",void 0),(0,o.gn)([m.LO],$.prototype,"telemetryObject",void 0);let C=class extends ${};C=(0,o.gn)([(0,a.M)({name:"msn-widget-host",template:s,styles:g})],C)},28258:function(t,e,i){i.r(e),i.d(e,{MsnZIndexCard:function(){return R}});var o,a=i(33940),n=i(29717),r=i(27186),s=i(67739),l=i(53131),d=i(16549),c=i(74449),p=i(42689),h=i(32572),g=i(55135),u=i(22798),m=i(28904),f=i(42590),v=i(99452);!function(t){t.imageAtBottom="imageAtBottom",t.imageAtTop="imageAtTop",t.imageAtRight9By16="imageAtRight9By16",t.imageAtRight3By4="imageAtRight3By4",t.animatedImagery9by16="animatedImagery9by16"}(o||(o={}));class b extends m.H{constructor(){super(...arguments),this.layout=o.imageAtTop,this.headingMaxLines=5,this.documentDirection="ltr",this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handleZIndexCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,a.gn)([f.Lj],b.prototype,"layout",void 0),(0,a.gn)([(0,f.Lj)({attribute:"heading-max-lines"})],b.prototype,"headingMaxLines",void 0),(0,a.gn)([(0,f.Lj)({attribute:"document-direction"})],b.prototype,"documentDirection",void 0),(0,a.gn)([(0,f.Lj)({attribute:"heading-level",mode:"fromView",converter:f.Id})],b.prototype,"headinglevel",void 0),(0,a.gn)([(0,f.Lj)({mode:"fromView"})],b.prototype,"href",void 0),(0,a.gn)([v.LO],b.prototype,"anchorTelemetryTag",void 0),(0,a.gn)([v.LO],b.prototype,"mediaNodes",void 0),(0,a.gn)([v.LO],b.prototype,"hasAbstract",void 0),(0,a.gn)([v.LO],b.prototype,"hasFooter",void 0),(0,a.gn)([v.LO],b.prototype,"abstract",void 0),(0,a.gn)([v.LO],b.prototype,"iconSlottedNodes",void 0),(0,a.gn)([(0,f.Lj)({attribute:"image-priority",mode:"boolean"})],b.prototype,"imagePriority",void 0),(0,a.gn)([f.Lj],b.prototype,"target",void 0),(0,a.gn)([v.LO],b.prototype,"hoverActionsSlottedNodes",void 0);var y=i(78923);const{imageAtBottom:x,imageAtTop:w,imageAtRight9By16:$,imageAtRight3By4:C,animatedImagery9by16:L}=o,k="#373737",S="white",T=t=>t.withBehaviors((0,n.vF)(y.i` .heading{color:${u.H.LinkText};
            background: ${u.H.ButtonFace}}.footer,.start-actions,.end-actions,::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){background:${u.H.ButtonFace};
            color: ${u.H.ButtonText};fill:currentcolor}::slotted(fluent-button[appearance="stealth"]:not(:hover)){background:${u.H.ButtonFace};
        }
    `)),F=T(y.i` :host span.title_1x_2y,:host span.title_1x_3y{font-size:20px}${(0,r.j)("flex")} :host{position:relative;width:auto;box-sizing:border-box;font-family:${l.S};flex-direction:column;outline:none;overflow:hidden;height:100%;width:100%}:host(:hover) .hover-actions{opacity:1;transition:opacity 0.2s ease-in-out}:host(:hover) .media{filter:brightness(0.98)}.body{display:grid;justify-content:center;row-gap:8px;column-gap:10px;grid-template-columns:1fr auto;grid-template-rows:auto}.footer{padding-inline-start:var(--footer-start-padding,16px);padding-inline-end:var(--footer-start-padding,16px);padding-top:var(--footer-padding-top,0);padding-bottom:var(--footer-padding-bottom,4px);margin-top:16px;font-size:var(--footer-font-size,${d.s});
        line-height: var(--footer-line-height, ${d.v})}.footer,.start-actions,.end-actions{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:${c.Q};
        fill: ${c.Q};
    }    

    :host([layout=${w}]) .footer{position:absolute;bottom:24px;padding:0 24px;margin-top:unset;width:268px;padding-inline-start:24px;padding-inline-end:24px}.footer__hidden{display:none}.heading-wrapper{grid-row:1;display:flex;flex-direction:column}.heading-wrapper a:after{content:"";height:304px;position:absolute;width:300px;z-index:1}:host([layout=${w}]) .heading-wrapper a:after{top:-52px}:host([layout=${x}]) .heading-wrapper a:after{top:-38px}.media{display:flex;flex-direction:row;position:absolute}:host([layout=${x}]) .media{bottom:4px}:host([layout=${w}]) .media{top:8px}:host([image-priority]) .body{grid-template-columns:1}:host([image-priority]) .media-wrapper{grid-row:1;grid-column:span 2;margin:0;display:flex;justify-content:center}:host([image-priority]) .heading-container{grid-row:2;grid-column:span 2;padding-inline-start:var(--heading-start-padding,16px);padding-inline-end:var(--heading-end-padding,16px)}:host([layout=${x}]) .heading-container{top:39px;position:absolute}::slotted([slot="start-actions"]),::slotted([slot="end-actions"]){z-index:2;display:grid;gap:5px;align-items:center;grid-auto-flow:column}:host([layout=${w}]) ::slotted([slot="call-to-action"]){top:230px}:host([layout=${x}]) ::slotted([slot="call-to-action"]){top:-40px}::slotted([slot="call-to-action"]){width:calc(100% - 32px);grid-row:3;grid-column:1 / span 2;margin:0 24px}::slotted(fluent-button[slot="start-actions"]),::slotted(fluent-button[slot="end-actions"]){color:${c.Q};
        fill: ${c.Q}}.heading{-webkit-box-orient:vertical;-webkit-line-clamp:var(--heading-max-lines,2);color:${p.C};
        display: -webkit-box;
        font-size: var(--heading-font-size, ${h.P});
        font-weight: 600;
        line-height: var(--heading-line-height, ${h.b});outline:none;overflow:hidden;text-decoration:none;white-space:initial}.mask{display:none}.heading:hover,.heading:${s.b}{text-decoration:underline}@media (prefers-color-scheme:dark){.heading-gradient-background{background:${k}}}@media (prefers-color-scheme:light){.heading-gradient-background{background:${S}}}.heading-gradient-background{border-radius:calc(${g.rS} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 252px;
        left: 8px;
        position: absolute;
        width: 300px;
    }

    :host([layout=${x}]) .heading-gradient-background{top:8px}:host([layout=${w}]) .heading-gradient-background{bottom:8px}:host([layout=${w}]) .heading-gradient-background .heading{padding-top:137px;padding-right:16px}.heading::after{bottom:0;content:"";left:0;position:absolute;right:0;top:0}`),A=T(y.i`
:host([layout=${C}]) span.title_1x_2y,
:host([layout=${C}]) span.title_1x_3y{font-size:20px}:host([layout=${C}]) .heading-wrapper{grid-row:1;display:flex;flex-direction:column}:host([layout=${C}]) .heading-wrapper a:after{content:"";height:304px;position:absolute;width:300px;z-index:1}:host([layout=${C}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${C}][document-direction="rightToLeft"]) .heading-wrapper a:after{
    left: 0px;
}

:host([layout=${C}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${C}][heading-max-lines="eight-lines-heading"]) .heading{
    --heading-max-lines: 8;
}

:host([layout=${C}][heading-max-lines="five-lines-heading"]) .heading{
    --heading-max-lines: 5;
}

:host([layout=${C}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;position:absolute}:host([layout=${C}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
    left: 16px;
}

:host([layout=${C}]) .media-wrapper{top:57px;left:162px;position:absolute;width:113px;height:202px}:host([layout=${C}][document-direction="rightToLeft"]) .media-wrapper{
    left: 178px;
}

:host([layout=${C}]) .heading:hover,
:host([layout=${C}]) .heading:${s.b}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${C}]) .heading-gradient-background{background:${k};
    }

    :host([layout=${C}]) ::slotted([slot="call-to-action"]),
    :host([layout=${C}]) ::slotted([slot="start-actions"]),
    :host([layout=${C}]) .heading{color:#ffffff}}@media (prefers-color-scheme:light){:host([layout=${C}]) .heading-gradient-background{background:${S};
    }  
    
    :host([layout=${C}]) ::slotted([slot="call-to-action"]),
    :host([layout=${C}]) ::slotted([slot="start-actions"]),
    :host([layout=${C}]) .heading{color:#222222}}:host([layout=${C}]) .heading-gradient-background{border-radius:calc(${g.rS} * 1px);
    box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
    height: 304px;
    left: 8px;
    position: absolute;
    width: 241px;
    top: 8px;
}

:host([layout=${C}][document-direction="rightToLeft"]) .heading-gradient-background{
    margin-left: 16px;
}


:host([layout=${C}]) .footer{display:flex;position:absolute;bottom:16px;width:209px;left:4px}:host([layout=${C}][document-direction="rightToLeft"]) .footer{
    right: 55px;
}

:host([layout=${C}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}:host([layout=${C}]) .start-actions{width:127px}`),_=T(y.i`
    :host([layout=${$}]) span.title_1x_2y,
    :host([layout=${$}]) span.title_1x_3y{font-size:20px}:host([layout=${$}]) .heading-wrapper{ 
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${$}][document-direction="rightToLeft"]) .heading-wrapper{
        left: 0px;
    }

    :host([layout=${$}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${$}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${$}][heading-max-lines="eight-lines-heading"]) .heading{
        --heading-max-lines: 8;
    }

    :host([layout=${$}][heading-max-lines="five-lines-heading"]) .heading{
        --heading-max-lines: 5;
    }

    :host([layout=${$}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;left:0px}:host([layout=${$}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
        left: 16px;
    }

    :host([layout=${$}]) .media-wrapper{top:31px;left:162px;position:absolute;width:113px;height:202px}:host([layout=${$}][document-direction="rightToLeft"]) .media-wrapper{
        left: 178px;
    }

    :host([layout=${$}]) .heading:hover,
    :host([layout=${$}]) .heading:${s.b}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${$}]) .heading-gradient-background{background:${k};
        }

        :host([layout=${$}]) ::slotted([slot="call-to-action"]),
        :host([layout=${$}]) ::slotted([slot="start-actions"]),
        :host([layout=${$}]) .heading{color:#ffffff}}@media (prefers-color-scheme:light){:host([layout=${$}]) .heading-gradient-background{background:${S};
        }  
        
        :host([layout=${$}]) ::slotted([slot="call-to-action"]),
        :host([layout=${$}]) ::slotted([slot="start-actions"]),
        :host([layout=${$}]) .heading{color:#222222}}:host([layout=${$}]) .heading-gradient-background{border-radius:calc(${g.rS} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 304px;
        left: 8px;
        position: absolute;
        width: 241px;
        top: 8px;
    }

    :host([layout=${$}][document-direction="rightToLeft"]) .heading-gradient-background{
        margin-left: 16px;
    }


    :host([layout=${$}]) .footer{display:flex;position:absolute;bottom:16px;left:8px;width:209px}:host([layout=${$}][document-direction="rightToLeft"]) .footer{
        right: 55px;
    }

    :host([layout=${$}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}:host([layout=${$}]) .start-actions{width:127px}`),I=T(y.i`
    :host([layout=${L}]) span.title_1x_2y,
    :host([layout=${L}]) span.title_1x_3y{font-size:20px}:host([layout=${L}]) .heading-wrapper{ 
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${L}][document-direction="rightToLeft"]) .heading-wrapper{
        left: 0px;
    }

    :host([layout=${L}][document-direction="rightToLeft"]) .heading{margin-right:179px}:host([layout=${L}]) .heading{overflow:hidden;text-decoration:none;font-size:20px;line-height:28px;width:121px;margin-top:14px;overflow-wrap:break-word}:host([layout=${L}][heading-max-lines="eight-lines-heading"]) .heading{
        --heading-max-lines: 8;
    }

    :host([layout=${L}][heading-max-lines="five-lines-heading"]) .heading{
        --heading-max-lines: 5;
    }

    :host([layout=${L}]) ::slotted([slot="call-to-action"]){width:102px;top:175px;left:0px}:host([layout=${L}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
        left: 16px;
    }

    :host([layout=${L}]) .media-wrapper{position:absolute;width:141px;height:250px;right:8px;top:8px}:host([layout=${L}][document-direction="rightToLeft"]) .media-wrapper{
        left: 178px;
    }

    :host([layout=${L}]) .heading:hover,
    :host([layout=${L}]) .heading:${s.b}{text-decoration:underline}@media (prefers-color-scheme:dark){:host([layout=${L}]) .heading-gradient-background{background:${k};
        }

        :host([layout=${L}]) ::slotted([slot="call-to-action"]),
        :host([layout=${L}]) ::slotted([slot="start-actions"]),
        :host([layout=${L}]) .heading{color:#ffffff}}@media (prefers-color-scheme:light){:host([layout=${L}]) .heading-gradient-background{background:${S};
        }  
        
        :host([layout=${L}]) ::slotted([slot="call-to-action"]),
        :host([layout=${L}]) ::slotted([slot="start-actions"]),
        :host([layout=${L}]) .heading{color:#222222}}:host([layout=${L}]) .heading-gradient-background{border-radius:calc(${g.rS} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 304px;
        left: 8px;
        position: absolute;
        width: 300px;
        top: 8px;
    }

    :host([layout=${L}][document-direction="rightToLeft"]) .heading-gradient-background{
        margin-left: 16px;
    }


    :host([layout=${L}]) .footer{display:flex;position:absolute;bottom:16px;left:8px;width:268px}:host([layout=${L}][document-direction="rightToLeft"]) .footer{
        right: 0px;
    }

    :host([layout=${L}][document-direction="rightToLeft"]) ::slotted([slot="end-actions"]){margin-left:8px}:host([layout=${L}]) ::slotted([slot="start-actions"]){position:unset;z-index:2;gap:8px;align-items:center;grid-auto-flow:column}`);var j=i(49218),M=i(41472),E=i(99026),B=i(95185),H=i(93703),z=i(47548);const O=j.dy`<div class="footer ${t=>t.hasAbstract?"has-abstract-footer":""} ${t=>t.hasFooter?"":"footer__hidden"}" part="footer"><span part="start-actions" ${(0,M.i)("startActionsContainer")}><slot name="start-actions" ${(0,M.i)("startActions")} @slotchange=${t=>t.handleStartActionsContentChange()}></slot></span><span part="end-actions" ${(0,M.i)("endActionsContainer")}><slot name="end-actions" ${(0,M.i)("endActions")} @slotchange=${t=>t.handleEndActionsContentChange()}></slot></span></div>`,D=j.dy`<template ${(0,E.N)({property:"mediaNodes",filter:(0,B.R)("[slot='media'], [slot='icon']")})}><span part="background-image" ${(0,M.i)("backgroundImageContainer")}><slot name="background-image" ${(0,M.i)("backgroundImage")} @slotchange=${t=>t.handleBackgroundImageContentChange()}></slot></span><div class="mask" part="mask"></div><div class="heading-gradient-background">${(0,H.g)((t=>t.layout===o.imageAtBottom),O)}<div class="heading-container" part="heading-container"><slot name="attribution"></slot><span class="heading-wrapper" part="heading-wrapper" role="heading" aria-level=${t=>t.headinglevel}><a class="heading" part="heading" href=${t=>t.href?t.href:void 0} target=${t=>t.target?t.target:void 0} @click=${(t,e)=>t.handleZIndexCardLinkClick(e.event)} data-t="${t=>t.anchorTelemetryTag}"><slot></slot></a></span></div></div><div class="body ${t=>t.hasAbstract?"has-abstract":""}" part="body">${(0,H.g)((t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0}),j.dy`<div class="media-wrapper" part="media-wrapper"><div part="media" ${(0,M.i)("mediaContainer")}><slot name="media" ${(0,M.i)("media")} @slotchange=${t=>t.handleMediaContentChange()}></slot><span part="icon" ${(0,M.i)("iconContainer")} class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon_hidden"}"><slot name="icon" ${(0,M.i)("icon")} ${(0,z.Q)("iconSlottedNodes")}></slot></span></div></div>`)}<div class="abstract"><slot name="abstract" ${(0,z.Q)("abstract")}></slot></div><slot name="call-to-action"></slot>${(0,H.g)((t=>t.layout!==o.imageAtBottom),O)}</div><span part="hover-actions" class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions_hidden"}"><slot name="hover-actions" ${(0,z.Q)("hoverActionsSlottedNodes")}></slot></span></template>`;let R=class extends b{};R=(0,a.gn)([(0,m.M)({name:"msn-z-index-card",template:D,styles:[F,_,A,I],shadowOptions:{delegatesFocus:!0}})],R)},26382:function(t,e,i){var o=i(33940),a=i(83227),n=i(53076),r=i(8158);r.n.registerExperience(a.x.bingHomepageFeed,(()=>Promise.resolve().then(i.bind(i,20469)))),r.n.registerExperience(a.x.cardActionWC,(()=>Promise.all([i.e("libs_icons-wc_icons_CloseButton_svg-web-components_action-dialog_dist_index_js-node_modules_c-584c75"),i.e("card-actions-wc")]).then(i.bind(i,53527)))),r.n.registerExperience(a.x.coldStartWC,(()=>i.e("cold-start-wc").then(i.bind(i,50058)))),r.n.registerExperience(a.x.esportsCard,(()=>i.e("esports-card").then(i.bind(i,36030)))),r.n.registerExperience(a.x.familyCard,(()=>i.e("family-card").then(i.bind(i,92771)))),r.n.registerExperience(a.x.moneyInfoCardWC,(()=>i.e("money-info-card-wc").then(i.bind(i,27529)))),r.n.registerExperience(a.x.socialBarWC,(()=>i.e("social-bar-wc").then(i.bind(i,51425)))),r.n.registerExperience(a.x.sportsCardWC,(()=>i.e("sports-card-wc").then(i.bind(i,43111)))),r.n.registerExperience(a.x.sportsOlympicCardWC,(()=>i.e("sports-olympic-card-wc").then(i.bind(i,97973)))),r.n.registerExperience(a.x.tipsCard,(()=>i.e("tips-card").then(i.bind(i,56540)))),r.n.registerExperience(a.x.toastWC,(()=>i.e("toast").then(i.bind(i,76846)))),r.n.registerExperience(a.x.trafficCardWC,(()=>Promise.all([i.e("experiences_sd-card-mask-wc_dist_SdCardMaskWC_js-libs_windows-widget-shared_dist_WidgetHelper-08fe4d"),i.e("traffic-card-wc")]).then(i.bind(i,78007)))),r.n.registerExperience(a.x.weatherCardWC,(()=>Promise.all([i.e("experiences_sd-card-mask-wc_dist_SdCardMaskWC_js-libs_windows-widget-shared_dist_WidgetHelper-08fe4d"),i.e("weather-card")]).then(i.bind(i,40593)))),r.n.registerExperience(a.x.weatherMinimapWC,(()=>i.e("weather-minimap-wc").then(i.bind(i,12580)))),r.n.registerExperience(a.x.shoppingCardWC,(()=>Promise.all([i.e("experiences_sd-card-mask-wc_dist_SdCardMaskWC_js-libs_windows-widget-shared_dist_WidgetHelper-08fe4d"),i.e("libs_icons-wc_icons_CloseButton_svg-web-components_action-dialog_dist_index_js-node_modules_c-584c75"),i.e("shopping-card-wce")]).then(i.bind(i,62057)))),r.n.registerExperience(n.z.SportsData,(()=>i.e("sports-data-service").then(i.bind(i,29323)))),r.n.registerExperience(n.z.TopicData,(()=>i.e("topic-data-connector").then(i.bind(i,21064)))),r.n.registerExperience(n.z.WeatherData,(()=>Promise.all([i.e("libs_core_dist_utilities_getFetchImpl_js-libs_location-service_dist_AutoSuggestService_index_-444324"),i.e("weather-card-connector")]).then(i.bind(i,6970))));var s=i(97134),l=i(68364),d=i(26415),c=i(95527),p=i(52704),h=i(3138),g=i(79159),u=i(66850),m=i(13400),f=i(9730),v=i(16078),b=i(40715),y=i(85245),x=i(51399),w=i(65135),$=i(59230),C=i(66779),L=i(15231),k=i(75816),S=i(95084),T=i(12108),F=i(7282),A=i(98797),_=i(64550),I=i(58155);function j(t,e){const i=f.Al&&f.Al.ClientSettings&&f.Al.ClientSettings.audienceMode===T.F.Enterprise,o=S.h.getAppTypeTrackingSystemConfig(i);o.push({type:k.G.Debug,mapper:new F.k,transporterConfig:{callback:_.A}}),(0,w.uZ)(new A.o({anonCookieName:m.jG.AuthCookieName,trackingSystems:o,autoCaptureContentView:!1,disableAutoCalculateDwellTime:!0}));const a=function(t,e){const{telemetry:i=null}=m.jG.WidgetAttributes||{},o=i&&i.ocid||I.c.getQueryParameterByName("ocid",t)||c.Pp,a=f.Al&&f.Al.ClientSettings||{},n=a.pagetype?a.pagetype:c.WF,r=n===c.uO?"No results page - Search":"",s={pageCanvas:"Browser",pageConfiguration:64,pageName:c.jM,pageOcid:o,pageProduct:c.J5,pageContentCategory:c.D$,pageContentDomainId:"",pageContentId:"",pageContentVertical:"homepage",userSignInStatus:!1,userSsoStatus:!1},l={singleColSupported:!0,fiveColSupported:!0},d={pageContentTitle:r,pageType:n,pageUrl:t};return S.h.getAppTypeTelemetryContract(s,e,l,d)}(t,e);S.h.initPage(a),w.M0.disableTrackingSystem(k.G.Comscore),w.M0.internalErrors&&w.M0.internalErrors.forEach((t=>{(0,l.OO)(t.error,d.voe,t.message)}))}const{end:M}=(0,s.m)();(0,o.mG)(void 0,void 0,void 0,(function*(){try{p.L.registerDefaultStyleTarget(),C.o.withDefault(document.dir),(0,$.Z)();const{requestContext:t,initEndMeasure:e,locationHref:i,app:{store:o,rootReducer:a}}=u.wf;j(i,t),m.jG.TrackInfo={sitePage:{page_product:c.J5,page_type:f.Al.ClientSettings.pagetype}},u.wf.stampTmplForExperimentation();const r=u.wf.parseWidgetDataAttribute();(0,L.Q)(r&&r.cc),(0,y._)({sharedStateConnector:!0});const s=new h.g(n.z.ExperienceTrackerWidgets,"",a,new g.P,o,{},t);function k(t){(0,x.c)({experienceTracker:s,widgetBindInfo:t}),s.registerMarkersIfNecessary(),s.registerVisuallyReadyObserver()}w.M0.sendPageView(null,!1),yield u.wf.renderWidgets(u.wf.getWidgetElements(),{preRenderCallback:k}),e&&e(),M()}catch(S){(0,l.OO)(S,d.VBu,"Error during bingHomepage app initialization."),M(!0)}finally{(0,v.D)(w.M0.sendAppErrorEvent),(0,b.g)(w.M0.sendAppErrorEvent)}}))},14771:function(t,e,i){function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}i.d(e,{Z:function(){return o}})},17692:function(t,e,i){function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},o.apply(this,arguments)}i.d(e,{Z:function(){return o}})},74289:function(t,e,i){i.d(e,{Z:function(){return a}});var o=i(80374);function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,o.Z)(t,e)}},71972:function(t,e,i){function o(t,e){if(null==t)return{};var i,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)i=n[o],e.indexOf(i)>=0||(a[i]=t[i]);return a}i.d(e,{Z:function(){return o}})},80374:function(t,e,i){function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}i.d(e,{Z:function(){return o}})},50937:function(t,e,i){function o(t){return t.split("-")[0]}function a(t){return t.split("-")[1]}function n(t){return["top","bottom"].includes(o(t))?"x":"y"}function r(t){return"y"===t?"height":"width"}function s(t,e,i){let{reference:s,floating:l}=t;const d=s.x+s.width/2-l.width/2,c=s.y+s.height/2-l.height/2,p=n(e),h=r(p),g=s[h]/2-l[h]/2,u="x"===p;let m;switch(o(e)){case"top":m={x:d,y:s.y-l.height};break;case"bottom":m={x:d,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:c};break;case"left":m={x:s.x-l.width,y:c};break;default:m={x:s.x,y:s.y}}switch(a(e)){case"start":m[p]-=g*(i&&u?-1:1);break;case"end":m[p]+=g*(i&&u?-1:1)}return m}i.d(e,{Cp:function(){return L},JB:function(){return c},RR:function(){return w},dp:function(){return T},oo:function(){return l},uY:function(){return S}});const l=async(t,e,i)=>{const{placement:o="bottom",strategy:a="absolute",middleware:n=[],platform:r}=i,l=n.filter(Boolean),d=await(null==r.isRTL?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:a}),{x:p,y:h}=s(c,o,d),g=o,u={},m=0;for(let i=0;i<l.length;i++){const{name:n,fn:f}=l[i],{x:v,y:b,data:y,reset:x}=await f({x:p,y:h,initialPlacement:o,placement:g,strategy:a,middlewareData:u,rects:c,platform:r,elements:{reference:t,floating:e}});p=null!=v?v:p,h=null!=b?b:h,u={...u,[n]:{...u[n],...y}},x&&m<=50&&(m++,"object"==typeof x&&(x.placement&&(g=x.placement),x.rects&&(c=!0===x.rects?await r.getElementRects({reference:t,floating:e,strategy:a}):x.rects),({x:p,y:h}=s(c,g,d))),i=-1)}return{x:p,y:h,placement:g,strategy:a,middlewareData:u}};function d(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function c(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function p(t,e){var i;void 0===e&&(e={});const{x:o,y:a,platform:n,rects:r,elements:s,strategy:l}=t,{boundary:p="clippingAncestors",rootBoundary:h="viewport",elementContext:g="floating",altBoundary:u=!1,padding:m=0}=e,f=d(m),v=s[u?"floating"===g?"reference":"floating":g],b=c(await n.getClippingRect({element:null==(i=await(null==n.isElement?void 0:n.isElement(v)))||i?v:v.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(s.floating)),boundary:p,rootBoundary:h,strategy:l})),y=c(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===g?{...r.floating,x:o,y:a}:r.reference,offsetParent:await(null==n.getOffsetParent?void 0:n.getOffsetParent(s.floating)),strategy:l}):r[g]);return{top:b.top-y.top+f.top,bottom:y.bottom-b.bottom+f.bottom,left:b.left-y.left+f.left,right:y.right-b.right+f.right}}const h=Math.min,g=Math.max;function u(t,e,i){return g(t,h(e,i))}const m={left:"right",right:"left",bottom:"top",top:"bottom"};function f(t){return t.replace(/left|right|bottom|top/g,(t=>m[t]))}function v(t,e,i){void 0===i&&(i=!1);const o=a(t),s=n(t),l=r(s);let d="x"===s?o===(i?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[l]>e.floating[l]&&(d=f(d)),{main:d,cross:f(d)}}const b={start:"end",end:"start"};function y(t){return t.replace(/start|end/g,(t=>b[t]))}const x=["top","right","bottom","left"],w=(x.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i;const{placement:a,middlewareData:n,rects:r,initialPlacement:s,platform:l,elements:d}=e,{mainAxis:c=!0,crossAxis:h=!0,fallbackPlacements:g,fallbackStrategy:u="bestFit",flipAlignment:m=!0,...b}=t,x=o(a),w=g||(x!==s&&m?function(t){const e=f(t);return[y(t),e,y(e)]}(s):[f(s)]),$=[s,...w],C=await p(e,b),L=[];let k=(null==(i=n.flip)?void 0:i.overflows)||[];if(c&&L.push(C[x]),h){const{main:t,cross:e}=v(a,r,await(null==l.isRTL?void 0:l.isRTL(d.floating)));L.push(C[t],C[e])}if(k=[...k,{placement:a,overflows:L}],!L.every((t=>t<=0))){var S,T;const t=(null!=(S=null==(T=n.flip)?void 0:T.index)?S:0)+1,e=$[t];if(e)return{data:{index:t,overflows:k},reset:{placement:e}};let i="bottom";switch(u){case"bestFit":{var F;const t=null==(F=k.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:F[0].placement;t&&(i=t);break}case"initialPlacement":i=s}if(a!==i)return{reset:{placement:i}}}return{}}}});function $(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function C(t){return x.some((e=>t[e]>=0))}const L=function(t){let{strategy:e="referenceHidden",...i}=void 0===t?{}:t;return{name:"hide",async fn(t){const{rects:o}=t;switch(e){case"referenceHidden":{const e=$(await p(t,{...i,elementContext:"reference"}),o.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:C(e)}}}case"escaped":{const e=$(await p(t,{...i,altBoundary:!0}),o.floating);return{data:{escapedOffsets:e,escaped:C(e)}}}default:return{}}}}};function k(t){return"x"===t?"y":"x"}const S=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:a,placement:r}=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:d={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...c}=t,h={x:i,y:a},g=await p(e,c),m=n(o(r)),f=k(m);let v=h[m],b=h[f];if(s){const t="y"===m?"bottom":"right";v=u(v+g["y"===m?"top":"left"],v,v-g[t])}if(l){const t="y"===f?"bottom":"right";b=u(b+g["y"===f?"top":"left"],b,b-g[t])}const y=d.fn({...e,[m]:v,[f]:b});return{...y,data:{x:y.x-i,y:y.y-a}}}}},T=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:i,rects:n,platform:r,elements:s}=e,{apply:l=(()=>{}),...d}=t,c=await p(e,d),h=o(i),u=a(i);let m,f;"top"===h||"bottom"===h?(m=h,f=u===(await(null==r.isRTL?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(f=h,m="end"===u?"top":"bottom");const v=g(c.left,0),b=g(c.right,0),y=g(c.top,0),x=g(c.bottom,0),w={availableHeight:n.floating.height-(["left","right"].includes(i)?2*(0!==y||0!==x?y+x:g(c.top,c.bottom)):c[m]),availableWidth:n.floating.width-(["top","bottom"].includes(i)?2*(0!==v||0!==b?v+b:g(c.left,c.right)):c[f])};await l({...e,...w});const $=await r.getDimensions(s.floating);return n.floating.width!==$.width||n.floating.height!==$.height?{reset:{rects:!0}}:{}}}}},50123:function(t,e,i){i.d(e,{Me:function(){return M},oo:function(){return E}});var o=i(50937);function a(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function n(t){if(null==t)return window;if(!a(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function r(t){return n(t).getComputedStyle(t)}function s(t){return a(t)?"":t?(t.nodeName||"").toLowerCase():""}function l(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function d(t){return t instanceof n(t).HTMLElement}function c(t){return t instanceof n(t).Element}function p(t){return"undefined"!=typeof ShadowRoot&&(t instanceof n(t).ShadowRoot||t instanceof ShadowRoot)}function h(t){const{overflow:e,overflowX:i,overflowY:o,display:a}=r(t);return/auto|scroll|overlay|hidden/.test(e+o+i)&&!["inline","contents"].includes(a)}function g(t){return["table","td","th"].includes(s(t))}function u(t){const e=/firefox/i.test(l()),i=r(t),o=i.backdropFilter||i.WebkitBackdropFilter;return"none"!==i.transform||"none"!==i.perspective||!!o&&"none"!==o||e&&"filter"===i.willChange||e&&!!i.filter&&"none"!==i.filter||["transform","perspective"].some((t=>i.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=i.contain;return null!=e&&e.includes(t)}))}function m(){return!/^((?!chrome|android).)*safari/i.test(l())}function f(t){return["html","body","#document"].includes(s(t))}const v=Math.min,b=Math.max,y=Math.round;function x(t,e,i){var o,a,r,s;void 0===e&&(e=!1),void 0===i&&(i=!1);const l=t.getBoundingClientRect();let p=1,h=1;e&&d(t)&&(p=t.offsetWidth>0&&y(l.width)/t.offsetWidth||1,h=t.offsetHeight>0&&y(l.height)/t.offsetHeight||1);const g=c(t)?n(t):window,u=!m()&&i,f=(l.left+(u&&null!=(o=null==(a=g.visualViewport)?void 0:a.offsetLeft)?o:0))/p,v=(l.top+(u&&null!=(r=null==(s=g.visualViewport)?void 0:s.offsetTop)?r:0))/h,b=l.width/p,x=l.height/h;return{width:b,height:x,top:v,right:f+b,bottom:v+x,left:f,x:f,y:v}}function w(t){return(e=t,(e instanceof n(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function $(t){return c(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function C(t){return x(w(t)).left+$(t).scrollLeft}function L(t,e,i){const o=d(e),a=w(e),n=x(t,o&&function(t){const e=x(t);return y(e.width)!==t.offsetWidth||y(e.height)!==t.offsetHeight}(e),"fixed"===i);let r={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(o||!o&&"fixed"!==i)if(("body"!==s(e)||h(a))&&(r=$(e)),d(e)){const t=x(e,!0);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else a&&(l.x=C(a));return{x:n.left+r.scrollLeft-l.x,y:n.top+r.scrollTop-l.y,width:n.width,height:n.height}}function k(t){if("html"===s(t))return t;const e=t.assignedSlot||t.parentNode||(p(t)?t.host:null)||w(t);return p(e)?e.host:e}function S(t){return d(t)&&"fixed"!==r(t).position?t.offsetParent:null}function T(t){const e=n(t);let i=S(t);for(;i&&g(i)&&"static"===r(i).position;)i=S(i);return i&&("html"===s(i)||"body"===s(i)&&"static"===r(i).position&&!u(i))?e:i||function(t){let e=k(t);for(;d(e)&&!f(e);){if(u(e))return e;e=k(e)}return null}(t)||e}function F(t){if(d(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=x(t);return{width:e.width,height:e.height}}function A(t){const e=k(t);return f(e)?t.ownerDocument.body:d(e)&&h(e)?e:A(e)}function _(t,e){var i;void 0===e&&(e=[]);const o=A(t),a=o===(null==(i=t.ownerDocument)?void 0:i.body),r=n(o),s=a?[r].concat(r.visualViewport||[],h(o)?o:[]):o,l=e.concat(s);return a?l:l.concat(_(s))}function I(t,e,i){return"viewport"===e?(0,o.JB)(function(t,e){const i=n(t),o=w(t),a=i.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,d=0;if(a){r=a.width,s=a.height;const t=m();(t||!t&&"fixed"===e)&&(l=a.offsetLeft,d=a.offsetTop)}return{width:r,height:s,x:l,y:d}}(t,i)):c(e)?function(t,e){const i=x(t,!1,"fixed"===e),o=i.top+t.clientTop,a=i.left+t.clientLeft;return{top:o,left:a,x:a,y:o,right:a+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,i):(0,o.JB)(function(t){var e;const i=w(t),o=$(t),a=null==(e=t.ownerDocument)?void 0:e.body,n=b(i.scrollWidth,i.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),s=b(i.scrollHeight,i.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0);let l=-o.scrollLeft+C(t);const d=-o.scrollTop;return"rtl"===r(a||i).direction&&(l+=b(i.clientWidth,a?a.clientWidth:0)-n),{width:n,height:s,x:l,y:d}}(w(t)))}const j={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:o,strategy:a}=t;const n="clippingAncestors"===i?function(t){let e=_(t).filter((t=>c(t)&&"body"!==s(t))),i=t,o=null;for(;c(i)&&!f(i);){const t=r(i);"static"===t.position&&o&&["absolute","fixed"].includes(o.position)&&!u(i)?e=e.filter((t=>t!==i)):o=t,i=k(i)}return e}(e):[].concat(i),l=[...n,o],d=l[0],p=l.reduce(((t,i)=>{const o=I(e,i,a);return t.top=b(o.top,t.top),t.right=v(o.right,t.right),t.bottom=v(o.bottom,t.bottom),t.left=b(o.left,t.left),t}),I(e,d,a));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:o}=t;const a=d(i),n=w(i);if(i===n)return e;let r={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((a||!a&&"fixed"!==o)&&(("body"!==s(i)||h(n))&&(r=$(i)),d(i))){const t=x(i,!0);l.x=t.x+i.clientLeft,l.y=t.y+i.clientTop}return{...e,x:e.x-r.scrollLeft+l.x,y:e.y-r.scrollTop+l.y}},isElement:c,getDimensions:F,getOffsetParent:T,getDocumentElement:w,getElementRects:t=>{let{reference:e,floating:i,strategy:o}=t;return{reference:L(e,T(i),o),floating:{...F(i),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===r(t).direction};function M(t,e,i,o){void 0===o&&(o={});const{ancestorScroll:a=!0,ancestorResize:n=!0,elementResize:r=!0,animationFrame:s=!1}=o,l=a&&!s,d=l||n?[...c(t)?_(t):t.contextElement?_(t.contextElement):[],..._(e)]:[];d.forEach((t=>{l&&t.addEventListener("scroll",i,{passive:!0}),n&&t.addEventListener("resize",i)}));let p,h=null;if(r){let o=!0;h=new ResizeObserver((()=>{o||i(),o=!1})),c(t)&&!s&&h.observe(t),c(t)||!t.contextElement||s||h.observe(t.contextElement),h.observe(e)}let g=s?x(t):null;return s&&function e(){const o=x(t);!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||i(),g=o,p=requestAnimationFrame(e)}(),i(),()=>{var t;d.forEach((t=>{l&&t.removeEventListener("scroll",i),n&&t.removeEventListener("resize",i)})),null==(t=h)||t.disconnect(),h=null,s&&cancelAnimationFrame(p)}}const E=(t,e,i)=>(0,o.oo)(t,e,{platform:j,...i})},29768:function(t,e,i){i.d(e,{m4:function(){return a}});function o(t){const e=t;return void 0!==e.clientValue?e.clientValue:Object.keys(t).reduce(((e,i)=>Object.assign(Object.assign({},e),{[i]:o(t[i])})),{})}class a{constructor(t,e){this.spec=t,this.qspPrefix=e||"rd"}get verParam(){return`${this.qspPrefix}.ver`}get data(){return void 0===this.memo&&(this.memo=o(this.spec.spec)),this.memo}loadQueryParams(t){if(void 0!==this.memo)throw"overwriting existing query string parameters.";const e=t.get([this.qspPrefix,"ver"].join("."));if(e!==this.spec.ver)throw`unmatched spec version: expected "${this.spec.ver}" but got ${e}.`;this.memo={},t.forEach(((t,e)=>{if(!e.startsWith(this.qspPrefix))return;if(e===this.verParam)return;const i=e.split(".").slice(1);let o=this.memo;i.forEach(((e,a)=>{let n={};if(a===i.length-1)try{n=()=>JSON.parse(t)}catch(t){throw this.memo=void 0,t}Object.prototype.hasOwnProperty.call(o,e)||(o[e]=n),"object"!=typeof n||(o=o[e])}))}))}getURLSearchParams(){const t=new URLSearchParams,e=(i,o)=>{Object.keys(i).forEach((a=>{const n=i[a],r=[...o,a];"object"!=typeof n?t.append(r.join("."),JSON.stringify(n())):e(n,r)}))};return e(this.data,[this.qspPrefix]),t.sort(),t.append(this.verParam,this.spec.ver),t}getSerializedData(){return this.getURLSearchParams().toString()}}var n;!function(t){t.JSON="application/json;charset=UTF-8",t.HTML="text/html;charset=UTF-8"}(n=n||(n={}))},85574:function(t,e,i){i.d(e,{lq:function(){return w}});var o=i(33940),a=i(59833),n=i(85594),r=i(36159),s=i(18769),l=i(18536),d=i(21616),c=i(13400),p=i(36e3),h=i(92530),g=i(89035),u=i(16339);const m="ClickedBeaconAttached",f="ViewedBeaconAttached",v="UserActionBeaconAttached",b=new WeakSet;class y{constructor(t){this.options=t}createHTML(t){return a.Lu.attribute(t(this))}createBehavior(){return new x(this.options,this.targetNodeId)}}class x{constructor(t,e){this.options=t,this.targetNodeId=e,this.beaconService=null,this.nativeAdBeaconsSetAttribute="nab",this.adsFlights="",this.onClick=(t,e)=>i=>{var o,a;if(i.target===i.currentTarget){const t=i.composedPath();for(let e=0;e<7&&e<t.length;e++){const i=t[e];if(i.className&&("control icon-only"===i.className||"menu"===i.className))return}return this.fireClickedBeacon(),void this.handleClickUserAction(i)}if(!this.isTelemetryWc(i.currentTarget))return;const n=this.getImmediateChildFromTelemetryWc(i.currentTarget);i.target===n&&(i.currentTarget.clickedBeacon&&(this.fireTelemetryWcClickedBeacon(i),null===(a=(o=this.userActionLog).fireClickLog)||void 0===a||a.call(o,t,e,i)),i.currentTarget.clickedUserAction&&this.handleClickUserAction(i),i.currentTarget.clickedTelemetry&&this.handleClickTelemetry(i))},this.fireTelemetryWcClickedBeacon=t=>{const e=t.composedPath();let i=!1;for(let o=e.length-1;o>=0;o--)if(t.currentTarget!==e[o]){if(i&&this.isTelemetryWc(e[o]))return}else i=!0;this.fireClickedBeacon()},this.fireClickedBeacon=()=>{this.beaconService.fireClickTrackingCall(this.clickBeacons,this.beaconsJson),this.options.isClarityEnabled&&g.V.writeCustomTag("NativeAdHasBeenClicked",!0)},this.getImmediateChildFromTelemetryWc=t=>{if(this.isTelemetryWc(t)&&t.children.length>0)return t.children[0]},this.getUserActionBeacons=t=>{const e=JSON.parse(t),i=e&&e.trb;if(this.userActionBeacons=new Array,i)for(let t=0;t<i.length;t++)if(i[t].includes("srtb.msn.com")){const e=new URL(i[t]);e.pathname=e.pathname.replace("served","useraction"),this.userActionBeacons.push(e)}},this.onUserActionEvt=t=>{t.stopPropagation();const{eventType:e,dur:i,message:o,element:a}=t.detail;this.onUserActionCore(e,i,o,a)},this.onUserActionCore=(t,e,i,o)=>{if(this.userActionBeacons)for(let a=0;a<this.userActionBeacons.length;a++){for(const t of Object.values(r.Cw))this.userActionBeacons[a].searchParams.delete(t);if(t){this.userActionBeacons[a].searchParams.set(r.Cw.EventType,t),this.userActionBeacons[a].searchParams.set(r.Cw.Timestamp,(this.start?(new Date).getTime()-this.start:0).toString()),this.userActionBeacons[a].searchParams.set(r.Cw.Duration,e||0);const n={m:i,f:this.adsFlights};this.userActionBeacons[a].searchParams.set(r.Cw.Message,JSON.stringify(n)),this.userActionBeacons[a].searchParams.set(r.Cw.Element,o||"")}this.beaconService.fireUserActionBeacon(this.userActionBeacons[a].href)}},this.isTelemetryWc=t=>t.tagName&&"msn-native-ad-telemetry"===t.tagName.toLowerCase(),this.handleClickUserAction=t=>{var e,i,o;const a=this.getClickTarget(t),n=[];(null===(e=null==a?void 0:a.tagName)||void 0===e?void 0:e.toLowerCase)&&n.push(null==a?void 0:a.tagName.toLowerCase()),(null===(i=null==a?void 0:a.className)||void 0===i?void 0:i.toLowerCase)&&n.push(null==a?void 0:a.className.toLowerCase()),(null===(o=null==a?void 0:a.id)||void 0===o?void 0:o.toLowerCase)&&n.push(null==a?void 0:a.id.toLowerCase())},this.handleClickTelemetry=t=>{const e=this.getClickTarget(t);t.currentTarget.dataset.t&&(e.dataset.t=t.currentTarget.dataset.t,delete t.currentTarget.dataset.t,l.u.addElement(e))},this.getBindingSource=t=>{var e,i;return t instanceof HTMLElement?["native-ad-wc","msn-native-ad-title-mask"].includes(null===(e=null==t?void 0:t.tagName)||void 0===e?void 0:e.toLocaleLowerCase())?t.adData:["boost-ad-card"].includes(null===(i=null==t?void 0:t.tagName)||void 0===i?void 0:i.toLocaleLowerCase())?t.boostAdMetadata:t.data:t}}bind(t){var e,i;const{context:a,source:n,targets:r}=t;Array.isArray(null===(e=null===c.jG||void 0===c.jG?void 0:c.jG.CurrentRequestTargetScope)||void 0===e?void 0:e.pageExperiments)&&(this.adsFlights=(0,h.Z)(d.N,null===(i=null===c.jG||void 0===c.jG?void 0:c.jG.CurrentRequestTargetScope)||void 0===i?void 0:i.pageExperiments).join(";")),this.target=r[this.targetNodeId];const{beaconsJson:l,adBeaconServiceConfig:p,clickBeacons:g,geminiViewabilityDataJson:y,bingTrackerUrls:x,items:w,videoViewabilityData:$,isClarityEnabled:C,isProng2Promotion:L}=this.getBindingSource(n);if(l&&g&&(this.start=(new Date).getTime(),this.options.isClarityEnabled=C,this.beaconsJson=l,this.clickBeacons=g,this.geminiViewabilityDataJson=y,this.beaconService=new s.A(p),L&&u.gL.subscribe(u.Iq.IsDashboardVisible,(t=>(0,o.mG)(this,void 0,void 0,(function*(){t&&this.options.shouldCallVisibilityBeacon&&(this.beaconService.elementVisibilityObserver(this.target,l,y,w&&w[0]?w[0].uniqueId:void 0,x,$,n,a),this.target[f]=!0)})))),this.options.shouldCallClickBeacon&&(this.target.addEventListener("click",this.onClick(n,a)),this.target[m]=!0),this.options.shouldWatchCustomEvent&&(this.getUserActionBeacons(l),this.target.addEventListener("NativeAdUserAction",this.onUserActionEvt),this.target[v]=!0),this.options.shouldCallVisibilityBeacon&&!L)){if($){if(b.has(this.target))return;b.add(this.target)}this.beaconService.elementVisibilityObserver(this.target,l,y,w&&w[0]?w[0].uniqueId:void 0,x,$,n,a),this.target[f]=!0}}unbind(){}getClickTarget(t){if("adChoice"===t.currentTarget.telemetryMetadata&&t.composedPath&&"function"==typeof t.composedPath){const e=t.composedPath();for(let t=0;t<e.length;++t){const i=e[t];if(i.tagName&&"a"===i.tagName.toLowerCase()&&"native-ad-ad-choice"===i.className.toLowerCase())return i}}if(!t.composedPath||"function"!=typeof t.composedPath)return t.target;{const e=t.composedPath();if(e.length>0)return e[0]}}}function w(t=!0,e=!0,i=!1){return new y({shouldCallClickBeacon:t,shouldCallVisibilityBeacon:e,shouldWatchCustomEvent:i})}(0,o.gn)([(0,p.f3)(r.Km)],x.prototype,"userActionLog",void 0),n.m0.define(y)},89035:function(t,e,i){i.d(e,{V:function(){return a}});const o={adCarousel:"NativeAdCarouselEnabled",allowedAssets:"NativeAdAllowedAssets",animatedImage:"NativeAdAnimatedImageType",landscapeOverlay:"NativeAdLandscapeOverlayEnabled",progressiveDisplay:"NativeAdProgressiveDisplayEnabled",templateType:"NativeAdTemplateType"},a=new class{constructor(){this.loggedTags={}}writeCustomTag(t,e){if(window.clarity&&null!=e){const i=e.toString();this.loggedTags[t]&&this.loggedTags[t][i]||(window.clarity("set",t,i),this.loggedTags[t]=this.loggedTags[t]||{},this.loggedTags[t][i]=!0)}}logAdTemplateConfig(t){t&&Object.keys(o).forEach((e=>{this.writeCustomTag(o[e],t[e])}))}}},26243:function(t,e,i){i.d(e,{O:function(){return l},_:function(){return d}});var o=i(18769),a=i(36159),n=i(13400),r=i(92530),s=i(21616);const l=(t,e,i,o=0)=>{t&&t.dispatchEvent(new CustomEvent("NativeAdUserAction",{bubbles:!0,cancelable:!0,composed:!0,detail:{eventType:e,dur:o,message:i,element:t.tagName.toLowerCase()}}))},d=(t,e,i,l=0,d)=>{var c,p;const h=new a.Km,g=new o.A;let u="";Array.isArray(null===(c=null===n.jG||void 0===n.jG?void 0:n.jG.CurrentRequestTargetScope)||void 0===c?void 0:c.pageExperiments)&&(u=(0,r.Z)(s.N,null===(p=null===n.jG||void 0===n.jG?void 0:n.jG.CurrentRequestTargetScope)||void 0===p?void 0:p.pageExperiments).join(";"));const m=h.populateBeaconUrl(t,u,e,i,l,d);g.fireUserActionBeacon(null==m?void 0:m.href)}},36936:function(t,e,i){i.d(e,{bS:function(){return Me}});var o=i(33940),a=i(36e3),n=i(11593),r=i(9791);const s=(0,r.Z)(((t,e,i)=>Object.assign(Object.assign({},t),{config:e,strings:i})));var l=i(42590),d=i(26415),c=i(92773),p=i(84446);let h=class extends p.F{constructor(){super(...arguments),this.destinationUrl="",this.title="",this.telemetryMetadata=void 0}connectedCallback(){super.connectedCallback()}};(0,o.gn)([(0,l.Lj)({attribute:"destination-url"})],h.prototype,"destinationUrl",void 0),(0,o.gn)([(0,l.Lj)({attribute:"title"})],h.prototype,"title",void 0),(0,o.gn)([l.Lj],h.prototype,"id",void 0),(0,o.gn)([(0,l.Lj)({attribute:"tel-metadata"})],h.prototype,"telemetryMetadata",void 0),h=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-ad-title-mask")],h);var g=i(28904),u=i(78923),m=i(41503);const f=u.i` .native-ad-title-mask a:after{bottom:0;content:"";height:100%;left:0;position:absolute;right:0;top:0;width:100%}`.withBehaviors(new m.g("layoutStyle"));var v=i(49218);const b=v.dy`<div class="native-ad-title-mask" title = ${t=>t.title}><a target = "_blank" href = ${t=>t.destinationUrl} class="heading" id="heading" data-t="${t=>t.telemetryMetadata}"></a></div>`;let y=class extends h{};y=(0,o.gn)([(0,g.M)({name:"msn-native-ad-title-mask",template:b,styles:f})],y);var x=i(85574);var w=i(93703),$=i(99452);let C=class extends p.F{constructor(){super(...arguments),this.src="",this.rlink="",this.id="",this.altText="",this.width="300px",this.height="225px",this.isHovered=!1,this.imageMaskOn="off",this.imageMaskOpacity="0.5",this.trimBottom=!1,this.objectFit="",this.useDropShadow=!1,this.useTransparentBackground=!1,this.imageMaskLeft="",this.imageMaskTop="",this.imageMaskWidth="",this.imageMaskHeight="",this.enableNativeAdHoverContrast=!1,this.patternMode="",this.darkThemeMediaQuery=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"),this.isDarkMode=this.darkThemeMediaQuery.matches,this.themeModeSwitchHandler=()=>{this.isDarkMode=!this.isDarkMode}}disconnectedCallback(){this.patternMode&&this.darkThemeMediaQuery.removeEventListener("change",this.themeModeSwitchHandler)}connectedCallback(){super.connectedCallback(),this.patternMode&&this.darkThemeMediaQuery.addEventListener("change",this.themeModeSwitchHandler)}};(0,o.gn)([l.Lj],C.prototype,"src",void 0),(0,o.gn)([l.Lj],C.prototype,"rlink",void 0),(0,o.gn)([l.Lj],C.prototype,"id",void 0),(0,o.gn)([(0,l.Lj)({attribute:"alt-text"})],C.prototype,"altText",void 0),(0,o.gn)([l.Lj],C.prototype,"width",void 0),(0,o.gn)([l.Lj],C.prototype,"height",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-hovered"})],C.prototype,"isHovered",void 0),(0,o.gn)([(0,l.Lj)({attribute:"image-mask-on"})],C.prototype,"imageMaskOn",void 0),(0,o.gn)([(0,l.Lj)({attribute:"image-mask-opacity"})],C.prototype,"imageMaskOpacity",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"trim-bottom"})],C.prototype,"trimBottom",void 0),(0,o.gn)([(0,l.Lj)({attribute:"object-fit"})],C.prototype,"objectFit",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"use-drop-shadow"})],C.prototype,"useDropShadow",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"use-transparent-background"})],C.prototype,"useTransparentBackground",void 0),(0,o.gn)([(0,l.Lj)({attribute:"image-mask-left"})],C.prototype,"imageMaskLeft",void 0),(0,o.gn)([(0,l.Lj)({attribute:"image-mask-top"})],C.prototype,"imageMaskTop",void 0),(0,o.gn)([(0,l.Lj)({attribute:"image-mask-width"})],C.prototype,"imageMaskWidth",void 0),(0,o.gn)([(0,l.Lj)({attribute:"image-mask-height"})],C.prototype,"imageMaskHeight",void 0),(0,o.gn)([(0,l.Lj)({attribute:"enable-native-ad-hover-contrast",mode:"boolean"})],C.prototype,"enableNativeAdHoverContrast",void 0),(0,o.gn)([(0,l.Lj)({attribute:"pattern-mode"})],C.prototype,"patternMode",void 0),(0,o.gn)([$.LO],C.prototype,"isDarkMode",void 0),C=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-ad-product-image")],C);var L=i(53692),k=i(29717),S=i(62319),T=i(17525),F=i(64262),A=i(65503);const _=u.i`
.native-ad-product-image{display:block;width:100%;height:100%;object-fit:cover}.enable-hover-effect{filter:contrast(115%)}.native-ad-product-image-trim-bottom{width:100%;height:100%;object-fit:cover;object-position:top}.off{display:none}.drop-shadow{filter:drop-shadow(0px 4.8px 14.4px rgba(0,0,0,0.18)) drop-shadow(0px 4px 18px rgba(0,0,0,0.15))}`.withBehaviors(new m.g("layoutStyle"),new L.j(["objectFit","isHovered","imageMaskLeft","imageMaskTop","imageMaskOpacity","useTransparentBackground","enableNativeAdHoverContrast"],(t=>{const e="undefined"===t.imageMaskOpacity||null==t.imageMaskOpacity?"0.5":t.imageMaskOpacity;let i="";if("on"===t.imageMaskOn&&t.isHovered&&!t.enableNativeAdHoverContrast){i=` :host::before{content:"";position:fixed;left:${t.imageMaskLeft?`${t.imageMaskLeft}px`:0};\n                        top: ${t.imageMaskTop?`${t.imageMaskTop}px`:0};\n                        width: ${t.imageMaskWidth?`${t.imageMaskWidth}px`:"100%"};\n                        height: ${t.imageMaskHeight?`${t.imageMaskHeight}px`:"100%"};\n                        opacity: ${e};\n                        background: var(--ad-background-color);\n                        animation: fadeIn 0.1s linear;\n                        transition: opacity 0.1s linear;\n                        z-index: 1;\n                    }\n                `}"off"!==t.imageMaskOn&&t.isHovered||(i=" :host::before{opacity:0}");let o="";return t.patternMode&&("patternMode1"===t.patternMode?o=` :host{background-image:url(${t.isDarkMode?F:S});\n                            background-position: 0 0;\n                            background-size: 100% 100%;\n                        }\n                    `:"patternMode2"===t.patternMode&&(o=` :host{background-image:url(${t.isDarkMode?A:T});\n                            background-position: 0 0;\n                            background-size: 100% 100%;\n                        }\n                    `)),u.i` :host img{background:${t.useTransparentBackground?"unset":"#2E2E2E"};
                }

                ${i}

                ${o} .object-fit{object-fit:${t.objectFit}}@keyframes fadeIn{from{opacity:0}to{opacity:${e};
                    }
                }
            `})),(0,k.vF)(u.i` :host::after{background:buttonface}`)),I=v.dy` ${(0,w.g)((t=>!t.patternMode),v.dy`<img src="${t=>t.src}" alt="${t=>t.altText}" class="object-fit ${t=>(t=>{const e=[];return t.useDropShadow&&e.push("drop-shadow"),t.isHovered&&t.enableNativeAdHoverContrast&&e.push("enable-hover-effect"),t.trimBottom?e.push("native-ad-product-image-trim-bottom"):e.push("native-ad-product-image"),e.join(" ")})(t)}" @load=${t=>t.visualReadinessCallback&&t.visualReadinessCallback()} @error=${(t,e)=>{t.visualReadinessCallback&&t.visualReadinessCallback(e.event)}} />`)}
`;let j=class extends C{};j=(0,o.gn)([(0,g.M)({name:"msn-native-ad-product-image",template:I,styles:_,shadowOptions:{delegatesFocus:!0}})],j);let M=class extends p.F{constructor(){super(...arguments),this.color="",this.paddingTop="78",this.paddingBottom="53",this.isRadialMask="false",this.isFullGradient="false",this.height="",this.useDynamicStyle="",this.useShorterGradient=!1,this.background="",this.peSeasonalColorMode=""}connectedCallback(){super.connectedCallback()}};(0,o.gn)([l.Lj],M.prototype,"color",void 0),(0,o.gn)([l.Lj],M.prototype,"paddingTop",void 0),(0,o.gn)([l.Lj],M.prototype,"paddingBottom",void 0),(0,o.gn)([(0,l.Lj)({attribute:"is-radial-mask"})],M.prototype,"isRadialMask",void 0),(0,o.gn)([(0,l.Lj)({attribute:"is-full-gradient"})],M.prototype,"isFullGradient",void 0),(0,o.gn)([l.Lj],M.prototype,"height",void 0),(0,o.gn)([(0,l.Lj)({attribute:"use-dynamic-style"})],M.prototype,"useDynamicStyle",void 0),(0,o.gn)([(0,l.Lj)({attribute:"use-short-gradient",mode:"boolean"})],M.prototype,"useShorterGradient",void 0),(0,o.gn)([l.Lj],M.prototype,"background",void 0),(0,o.gn)([(0,l.Lj)({attribute:"pe-seasonal-color-mode"})],M.prototype,"peSeasonalColorMode",void 0),M=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-gradient-mask")],M);const E=u.i` .native-ad-mask{cursor:pointer;padding-bottom:45px;padding-top:78px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.use-short-gradient{cursor:pointer;padding-bottom:45px;padding-top:45px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 23%,var(--ad-background-color) 34%,var(--ad-background-color) 100%)}.padding-top-30{padding-top:30px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-top-10{padding-top:10px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-top-90{padding-top:90px;padding-bottom:50px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 50%,var(--ad-background-color) 60%,var(--ad-background-color) 100%)}.padding-top-120{padding-top:120px;padding-bottom:70px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 30%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-top-100{padding-top:100px;padding-bottom:70px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 30%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.padding-bottom-0{padding-bottom:0px;padding-top:60px;background:linear-gradient(var(--gradient-end-color) 0%,var(--gradient-mid-color) 40%,var(--ad-background-color) 50%,var(--ad-background-color) 100%)}.native-ad-radial-mask{background:radial-gradient(500px 150px ellipse at 50% 0%,var(--gradient-end-color) 0%,var(--gradient-end-color) 30%,var(--gradient-mid-color) 70%,var(--ad-background-color) 100%)}.native-ad-full-gradient{height:100%;background:linear-gradient(var(--gradient-end-color) 0%,var(--ad-background-color) 100%)}@media (prefers-color-scheme:light){.peSeasonalColorMode1{background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 23%,rgba(255,255,255,0.8) 34%,#FFFFFF 100%)}.peSeasonalColorMode2{background:linear-gradient(180deg,rgba(107,193,210,0) 0%,rgba(177,224,233,0.8) 23%,#B1E0E9 34%,#FFFFFF 70%,#EEDEBF 100%)}.peSeasonalColorMode3{background:linear-gradient(180deg,rgba(255,233,176,0) 0%,rgba(255,233,176,0.8) 23%,#FFE9B0 34%,#FFE9B0 100%)}.peSeasonalColorMode4{background:linear-gradient(180deg,rgba(206,159,166,0) 0%,rgba(227,202,206,0.8) 23%,#E3CACE 34%,#FFE9E8 100%)}}@media (prefers-color-scheme:dark){.peSeasonalColorMode1{background:linear-gradient(180deg,rgba(43,43,43,0) 0%,rgba(43,43,43,0.8) 23%,#2B2B2B 34%,#2B2B2B 100%)}.peSeasonalColorMode2{background:linear-gradient(180deg,rgba(11,35,63,0) 0%,rgba(11,35,63,0.8) 23%,#0B233F 34%,#040D17 100%)}.peSeasonalColorMode3{background:linear-gradient(180deg,rgba(58,35,0,0) 0%,rgba(58,35,0,0.8) 23%,#3A2300 34%,#1F1200 100%)}.peSeasonalColorMode4{background:linear-gradient(180deg,rgba(56,0,31,0) 0%,rgba(56,0,31,0.8) 23%,#38001F 34%,#2F0007 100%)}}`.withBehaviors(new m.g("layoutStyle"),new L.j(["height","paddingTop","paddingBottom","background"],(t=>{const e=(null==t?void 0:t.background)&&"undefined"!==(null==t?void 0:t.background)?t.background:"linear-gradient(var(--gradient-end-color) 0%, var(--ad-background-color) 100%)";return u.i` .native-ad-dynamic-style{height:${t.height}px;
                    padding-top: ${t.paddingTop}px;
                    padding-bottom: ${t.paddingBottom}px;
                    background: ${e};
                }

            `})),(0,k.vF)(u.i` .native-ad-mask,.padding-top-30,.padding-top-10,.padding-top-90,.padding-top-120,.padding-top-100,.padding-bottom-0{background:linear-gradient(transparent 0%,buttonface 50%,buttonface 100%)}.native-ad-dynamic-style{display:none}`)),B=v.dy`<div class=" native-ad-mask ${t=>"true"===t.useDynamicStyle?"native-ad-dynamic-style":""} ${t=>"undefined"!==t.paddingTop?`padding-top-${t.paddingTop}`:""} ${t=>"undefined"!==t.paddingBottom?`padding-bottom-${t.paddingBottom}`:""} ${t=>"true"===t.isRadialMask?"native-ad-radial-mask":""} ${t=>"true"===t.isFullGradient?"native-ad-full-gradient":""} ${t=>t.useShorterGradient?"use-short-gradient":""} ${t=>t.peSeasonalColorMode} "><slot></slot></div>`;let H=class extends M{};H=(0,o.gn)([(0,g.M)({name:"msn-native-gradient-mask",template:B,styles:E,shadowOptions:{delegatesFocus:!0}})],H);var z=i(29666),O=i(35772);let D=class extends p.F{constructor(){super(...arguments),this.title="",this.destinationUrl="",this.isHovered=!1,this.enableTitleClickableOnly=!1,this.isAnaheimDesign=!1,this.useSmallFontSize=!0,this.animationOn=!1,this.fontSize="",this.fontColor="black",this.customStyle="",this.customStyleHovered="",this.lineHeight="",this.fontWeight="",this.fontFamily="inherit",this.isFeedV2=!1,this.isRiverRegion=!1,this.telemetryMetadata=void 0}connectedCallback(){super.connectedCallback(),(0,O.Q)(this.fontFamily)}};(0,o.gn)([l.Lj],D.prototype,"title",void 0),(0,o.gn)([(0,l.Lj)({attribute:"destination-url"})],D.prototype,"destinationUrl",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-hovered"})],D.prototype,"isHovered",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"enable-title-clickable-only"})],D.prototype,"enableTitleClickableOnly",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-anaheim-design"})],D.prototype,"isAnaheimDesign",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"use-small-font-size"})],D.prototype,"useSmallFontSize",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"animation-on"})],D.prototype,"animationOn",void 0),(0,o.gn)([(0,l.Lj)({attribute:"font-size"})],D.prototype,"fontSize",void 0),(0,o.gn)([(0,l.Lj)({attribute:"font-color"})],D.prototype,"fontColor",void 0),(0,o.gn)([(0,l.Lj)({attribute:"custom-style"})],D.prototype,"customStyle",void 0),(0,o.gn)([(0,l.Lj)({attribute:"custom-style-hovered"})],D.prototype,"customStyleHovered",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"two-lines-title"})],D.prototype,"twoLinesTitle",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"one-line-title"})],D.prototype,"oneLineTitle",void 0),(0,o.gn)([(0,l.Lj)({attribute:"line-height"})],D.prototype,"lineHeight",void 0),(0,o.gn)([(0,l.Lj)({attribute:"font-weight"})],D.prototype,"fontWeight",void 0),(0,o.gn)([(0,l.Lj)({attribute:"font-family"})],D.prototype,"fontFamily",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],D.prototype,"isFeedV2",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-river-region"})],D.prototype,"isRiverRegion",void 0),(0,o.gn)([(0,l.Lj)({attribute:"tel-metadata"})],D.prototype,"telemetryMetadata",void 0),D=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-ad-title")],D);const R=u.i`
a{padding:0 16px;font-size:20px;font-weight:600}a:focus{outline:0}a::after{content:"";text-overflow:ellipsis;position:fixed;width:100%;height:100%;left:0;right:0;top:0;bottom:0;z-index:4}.native-ad-title{color:var(--neutral-foreground-rest);text-decoration:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;word-break:break-word}.is-river-region{margin-bottom:2px}.native-ad-title-hovered{color:var(--neutral-foreground-rest);overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-decoration:underline;word-break:break-word}.animation-on{transition:max-height .365s;-webkit-line-clamp:3}.two-lines-title{-webkit-line-clamp:2}.one-line-title{-webkit-line-clamp:1}.is-feed-v2{color:#1A1A1A;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;text-decoration:none;word-break:break-word;line-height:24px}@media (prefers-color-scheme:dark){.is-feed-v2{color:#FFFFFF}}@media (forced-colors:active){.native-ad-title,.native-ad-title-hovered{color:linktext;background:buttonface}}`.withBehaviors(new m.g("layoutStyle"),new L.j(["lineHeight","fontSize","fontWeight","fontFamily"],(t=>{const e=` .ad-title{line-height:${t.lineHeight}px;\n                    font-size: ${t.fontSize}px;\n                    font-weight: ${t.fontWeight};\n                    font-family: ${t.fontFamily}}a{font-size:${t.fontSize}px; }\n            `;return u.i`${e}`}))),P=v.dy`<a class="${t=>(t=>{let e="ad-title";return t.isFeedV2?(e="is-feed-v2",e):(t.isHovered?e+=" native-ad-title-hovered":e+=" native-ad-title",t.animationOn&&(e+=" animation-on"),t.twoLinesTitle&&(e+=" two-lines-title"),t.oneLineTitle&&(e+=" one-line-title"),t.isRiverRegion&&(e+=" is-river-region"),e)})(t)}" style="${t=>t.isHovered?t.customStyleHovered:t.customStyle}" href=${t=>t.destinationUrl} target="_blank" data-t="${t=>t.telemetryMetadata}">${(0,w.g)((t=>!t.isAnaheimDesign),v.dy`${t=>t.title}`)} ${(0,w.g)((t=>t.isAnaheimDesign&&t.fontSize),v.dy`${t=>t.title}`)} ${(0,w.g)((t=>t.isAnaheimDesign&&!t.fontSize),v.dy` ${(0,w.g)((t=>!t.useSmallFontSize),v.dy`<span class="title">${t=>t.title}</span>`)} ${(0,w.g)((t=>t.useSmallFontSize),v.dy`${t=>t.title}`)} `)}</a>`;let V=class extends D{};V=(0,o.gn)([(0,g.M)({name:"msn-native-ad-title",template:P,styles:R})],V);const{ShortTitle:Z,CallToActionShortTitle:N}=z.SI;let U=class extends p.F{constructor(){super(...arguments),this.privacyUrl="",this.id="",this.adLabelText="Ad",this.nativeAdAdLabelText="",this.type="greenLabel",this.isDynamicRendering=!0,this.shouldAdjustGap=!1,this.cardLayout="default",this.telemetryMetadata="",this.adLabelTextOpacity="0.7",this.color="var(--neutral-foreground-rest)",this.isFeedV2=!1,this.isSeasonal=!1,this.isMsnHPAdSlug=!1,this.adLabelFontSize="var(--type-ramp-minus-2-font-size)",this.enableSafeAds=!1}connectedCallback(){super.connectedCallback()}};(0,o.gn)([(0,l.Lj)({attribute:"privacy-url"})],U.prototype,"privacyUrl",void 0),(0,o.gn)([l.Lj],U.prototype,"id",void 0),(0,o.gn)([(0,l.Lj)({attribute:"ad-label-text"})],U.prototype,"adLabelText",void 0),(0,o.gn)([(0,l.Lj)({attribute:"native-ad-ad-label-text"})],U.prototype,"nativeAdAdLabelText",void 0),(0,o.gn)([(0,l.Lj)({attribute:"type"})],U.prototype,"type",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-dynamic-rendering"})],U.prototype,"isDynamicRendering",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"should-adjust-gap"})],U.prototype,"shouldAdjustGap",void 0),(0,o.gn)([(0,l.Lj)({attribute:"layout"})],U.prototype,"layout",void 0),(0,o.gn)([(0,l.Lj)({attribute:"card-layout"})],U.prototype,"cardLayout",void 0),(0,o.gn)([(0,l.Lj)({attribute:"tel-metadata"})],U.prototype,"telemetryMetadata",void 0),(0,o.gn)([(0,l.Lj)({attribute:"ad-label-text-opacity"})],U.prototype,"adLabelTextOpacity",void 0),(0,o.gn)([(0,l.Lj)({attribute:"color"})],U.prototype,"color",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],U.prototype,"isFeedV2",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-seasonal"})],U.prototype,"isSeasonal",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-msn-hp-ad-slug"})],U.prototype,"isMsnHPAdSlug",void 0),(0,o.gn)([(0,l.Lj)({attribute:"ad-label-font-size"})],U.prototype,"adLabelFontSize",void 0),(0,o.gn)([(0,l.Lj)({attribute:"enable-safe-ads"})],U.prototype,"enableSafeAds",void 0),U=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-ad-ad-label")],U);var W=i(70193);const G=u.i`
    .native-ad-label-dr-wrapper, .${(0,W.lj)("native-ad-label-dr-wrapper")}{--ad-label-fill-grey:#595959;--ad-label-color-grey:#FFF;--ad-label-fill-green:#1E6525;--ad-label-color-white:#FFF;--outline-width:1;--control-corner-radius:2;outline:none;pointer-events:auto;font-family:var(--body-font);font-size:var(--type-ramp-minus-2-font-size);display:flex}.ndr,.gap{margin-inline-end:8px}.native-ad-label-dr,.${(0,W.lj)("native-ad-label-dr")}{box-sizing:border-box;padding:0 6px;display:inline-block;line-height:14px;border-radius:calc(var(--control-corner-radius) * 1px);text-decoration:none;border:calc(var(--stroke-width) * 1px) solid transparent}.grey{background:var(--ad-label-fill-grey);color:var(--ad-label-color-grey)}.green{background:var(--ad-label-fill-green);color:var(--ad-label-color-white)}.white{background:white;color:lightgrey;border:calc(var(--stroke-width) * 1px) solid white}.transparent-infopane{color:white;border:calc(var(--stroke-width) * 1px) solid white}.transparent-river{color:lightgrey;border:calc(var(--stroke-width) * 1px) solid lightgrey}.ad-label-topsite{box-sizing:border-box;display:inline-block;text-decoration:none;color:var(--top-site-color)}.ad-txt-small{font-size:9px;line-height:18px}.ad-slug1{color:var(--neutral-foreground-rest);border:0.5px solid var(--neutral-foreground-rest)}.ad-slug2{color:transparent;opacity:0.3;border:0.5px solid var(--neutral-foreground-rest);position:absolute}.ad-slug2-text.is-feed-v2-text::before{border-color:#292929}.ad-slug2-text.is-feed-v2-text{color:#292929}.ad-slug2-text.is-seasonal-style::before{border-color:#000000;opacity:1}.ad-slug2-text.is-seasonal-style{color:#000000}@media (prefers-color-scheme:dark){.ad-slug2-text.is-feed-v2-text::before{border-color:#FFFFFF}.ad-slug2-text.is-feed-v2-text{color:#FFFFFF}.ad-slug2-text.is-seasonal-style::before{border-color:#FFFFFF;opacity:1}.ad-slug2-text.is-seasonal-style{color:#FFFFFF}}`.withBehaviors(new m.g("layoutStyle"),new L.j(["adLabelTextOpacity","color","adLabelFontSize"],(t=>u.i` .ad-slug2-text{--control-corner-radius:4;position:relative;padding:1px 5px;text-decoration:none;line-height:16px;opacity:${t.adLabelTextOpacity};
                color: ${t.color};
                font-size: ${t.adLabelFontSize}px}.ad-slug2-text::before{content:"";width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.3;box-sizing:border-box;border-radius:calc(var(--control-corner-radius) * 1px);border:0.5px solid ${t.color}}.is-msn-hp-style{color:#2b2b2b;font-weight:400;font-size:11px;margin-inline-end:6px}.is-msn-hp-style::before{border:0.5px solid #2b2b2b}@media (forced-colors:active){.ad-slug2-text::before{border:0.5px solid buttontext;opacity:1}.ad-slug2-text{color:buttontext;opacity:1;background:buttonface}}`)));var q;!function(t){t.default="default",t.condensed="condensed",t.infoPane="infoPane",t.infoPane1x3y="infoPane1x3y",t.infoPaneSplitVertical="infoPaneSplitVertical",t.infoPaneSplitHorizontal="infoPaneSplitHorizontal"}(q||(q={}));const X=v.dy` ${(0,w.g)((t=>t.type),v.dy` ${(0,w.g)((t=>"greyLabel"===t.type),v.dy`<div class="${t=>(0,W.$H)(t.enableSafeAds,"native-ad-label-dr-wrapper")}"><a class="${t=>(0,W.$H)(t.enableSafeAds,"native-ad-label-dr")} grey ${t=>t.shouldAdjustGap?"gap":""}" href="${t=>t.privacyUrl}" target="_blank" title="${t=>t.nativeAdAdLabelText}" data-t="${t=>t.telemetryMetadata}">${t=>t.adLabelText}</a></div>`)} ${(0,w.g)((t=>"greenLabel"===t.type),v.dy`<div class="${t=>(0,W.$H)(t.enableSafeAds,"native-ad-label-dr-wrapper")}"><a class="${t=>(0,W.$H)(t.enableSafeAds,"native-ad-label-dr")} green ${t=>t.shouldAdjustGap?"gap":""}" href="${t=>t.privacyUrl}" target="_blank" title="${t=>t.nativeAdAdLabelText}" data-t="${t=>t.telemetryMetadata}">${t=>t.adLabelText}</a></div>`)} ${(0,w.g)((t=>"defaultLabel"===t.type),v.dy`<div class="${t=>(0,W.$H)(t.enableSafeAds,"native-ad-label-dr-wrapper")}"><a class="ad-slug2-text ${t=>t.isMsnHPAdSlug?"is-msn-hp-style":""} ${t=>t.isSeasonal?"is-seasonal-style":""} ${t=>t.shouldAdjustGap?"gap":""} ${t=>t.isFeedV2?"is-feed-v2-text":""}" href="${t=>t.privacyUrl}" target="_blank" title="${t=>t.nativeAdAdLabelText}" data-t="${t=>t.telemetryMetadata}">${t=>t.adLabelText}</a></div>`)} ${(0,w.g)((t=>"topSiteAdTxtSmall"===t.type),v.dy`<div class="${t=>(0,W.$H)(t.enableSafeAds,"native-ad-label-dr-wrapper")}"><a class="ad-label-topsite ad-txt-small" href="${t=>t.privacyUrl}" target="_blank" title="${t=>t.nativeAdAdLabelText}" data-t="${t=>t.telemetryMetadata}">${t=>t.adLabelText}</a></div>`)} `)}
`;let J=class extends U{};J=(0,o.gn)([(0,g.M)({name:"msn-native-ad-ad-label",template:X,styles:G})],J);const Q=(t,e)=>e&&null!=e.adLabelType?e.adLabelType:t.isGreyAdsLabelEnabled?"greyLabel":t.adSlugGA?"defaultLabel":"greenLabel";let Y=class extends p.F{constructor(){super(...arguments),this.url="",this.providerName="",this.whiteProviderName="",this.isNewAdSlugV2=!1,this.isNewAdSlugV2NonDr=!1,this.fontFamily="inherit",this.adSlugGA=!1,this.hasEliteBadge=!1,this.adLabelTextOpacity="0.7",this.fontSize="",this.lineHeight="",this.isFeedV2=!1,this.isMsnHPAdSlug=!1,this.color="var(--neutral-foreground-rest)",this.fontWeight="normal",this.isSeasonal=!1,this.eliteBadgeTitle=""}connectedCallback(){var t;super.connectedCallback(),(0,O.Q)(this.fontFamily),this.eliteBadgeTitle=null===(t=this.localizedStrings)||void 0===t?void 0:t.eliteBadgeTitle}};(0,o.gn)([l.Lj],Y.prototype,"url",void 0),(0,o.gn)([(0,l.Lj)({attribute:"provider-name"})],Y.prototype,"providerName",void 0),(0,o.gn)([(0,l.Lj)({attribute:"white-provider-name"})],Y.prototype,"whiteProviderName",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-new-ad-slug-v2"})],Y.prototype,"isNewAdSlugV2",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-new-ad-slug-v2-non-dr"})],Y.prototype,"isNewAdSlugV2NonDr",void 0),(0,o.gn)([(0,l.Lj)({attribute:"custom-style-class"})],Y.prototype,"customStyleClass",void 0),(0,o.gn)([(0,l.Lj)({attribute:"tel-metadata"})],Y.prototype,"telemetryMetadata",void 0),(0,o.gn)([(0,l.Lj)({attribute:"font-family"})],Y.prototype,"fontFamily",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"ad-slug-ga"})],Y.prototype,"adSlugGA",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"has-elite-badge"})],Y.prototype,"hasEliteBadge",void 0),(0,o.gn)([(0,l.Lj)({attribute:"ad-label-text-opacity"})],Y.prototype,"adLabelTextOpacity",void 0),(0,o.gn)([(0,l.Lj)({attribute:"font-size"})],Y.prototype,"fontSize",void 0),(0,o.gn)([(0,l.Lj)({attribute:"line-height"})],Y.prototype,"lineHeight",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],Y.prototype,"isFeedV2",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-msn-hp-ad-slug"})],Y.prototype,"isMsnHPAdSlug",void 0),(0,o.gn)([l.Lj],Y.prototype,"color",void 0),(0,o.gn)([(0,l.Lj)({attribute:"font-weight"})],Y.prototype,"fontWeight",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-seasonal"})],Y.prototype,"isSeasonal",void 0),(0,o.gn)([$.LO],Y.prototype,"eliteBadgeTitle",void 0),(0,o.gn)([$.LO],Y.prototype,"localizedStrings",void 0),Y=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-ad-provider-name")],Y);const K=u.i`
.provider-name-with-elite-badge-wrapper{display:flex;flex-direction:row;align-items:center}.provider-name-with-elite-badge-wrapper .elite-badge-icon{margin-inline-end:4px;display:flex}.white{color:white;text-decoration:inherit}.white-12-flex-layout{color:var(--neutral-foreground-rest);width:100%;font-size:12px;text-overflow:ellipsis;height:24px;line-height:24px}.with-opacity-70{opacity:0.7}.with-opacity-70-non-dr{color:unset;opacity:1}.font-tenorite{font-family:Tenorite,Segoe UI,Segoe UI Midlevel,Arial,Sans-Serif;font-size:14px;position:relative;top:2px}`.withBehaviors(new m.g("layoutStyle"),new L.j(["adLabelTextOpacity","lineHight","fontSize"],(t=>u.i` .provider-name-hyper-link,.provider-name{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:bottom;opacity:${t.adLabelTextOpacity};
                font-size: ${t.fontSize}px;
                line-height: ${t.lineHeight}px;
                text-decoration: inherit;
                color: ${t.color&&"undefined"!==t.color?t.color:"var(--neutral-foreground-rest)"};
                font-weight: ${t.fontWeight&&"undefined"!==t.fontWeight?t.fontWeight:"normal"}}@media (forced-colors:active){.provider-name-hyper-link,.provider-name{color:buttontext;opacity:1;background:buttonface}}.is-feed-v2{color:#292929}.is-seasonal-style{color:#000000}.is-msn-hp-style{color:#2b2b2b}@media (prefers-color-scheme:dark){.is-feed-v2{color:#FFFFFF}.is-seasonal-style{color:#FFFFFF}}`))),tt=v.dy`<a href="${t=>t.url}" target="_blank" title="${t=>t.eliteBadgeTitle}" class="elite-badge-icon"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none"><path d="M6.5 0C7.05078 0 7.58203 0.0703125 8.09375 0.210938C8.60547 0.351562 9.08203 0.554688 9.52344 0.820312C9.96484 1.08594 10.3691 1.39844 10.7363 1.75781C11.1035 2.11719 11.418 2.52148 11.6797 2.9707C11.9414 3.41992 12.1426 3.89844 12.2832 4.40625C12.4238 4.91406 12.4961 5.44531 12.5 6C12.5 6.55078 12.4297 7.08203 12.2891 7.59375C12.1484 8.10547 11.9453 8.58203 11.6797 9.02344C11.4141 9.46484 11.1016 9.86914 10.7422 10.2363C10.3828 10.6035 9.97852 10.918 9.5293 11.1797C9.08008 11.4414 8.60156 11.6426 8.09375 11.7832C7.58594 11.9238 7.05469 11.9961 6.5 12C5.94922 12 5.41797 11.9297 4.90625 11.7891C4.39453 11.6484 3.91797 11.4453 3.47656 11.1797C3.03516 10.9141 2.63086 10.6016 2.26367 10.2422C1.89648 9.88281 1.58203 9.47852 1.32031 9.0293C1.05859 8.58008 0.857422 8.10156 0.716797 7.59375C0.576172 7.08594 0.503906 6.55469 0.5 6C0.5 5.44922 0.570312 4.91797 0.710938 4.40625C0.851562 3.89453 1.05469 3.41797 1.32031 2.97656C1.58594 2.53516 1.89844 2.13086 2.25781 1.76367C2.61719 1.39648 3.02148 1.08203 3.4707 0.820312C3.91992 0.558594 4.39844 0.357422 4.90625 0.216797C5.41406 0.0761719 5.94531 0.00390625 6.5 0ZM5.81445 7.89258C5.90039 7.89258 5.98242 7.87695 6.06055 7.8457C6.13867 7.81445 6.20703 7.76758 6.26562 7.70508L8.7793 5.19141C8.83789 5.13281 8.88281 5.06445 8.91406 4.98633C8.94531 4.9082 8.96094 4.82812 8.96094 4.74609C8.96094 4.66016 8.94531 4.57812 8.91406 4.5C8.88281 4.42188 8.83789 4.35547 8.7793 4.30078C8.7207 4.24609 8.65234 4.20117 8.57422 4.16602C8.49609 4.13086 8.41406 4.11328 8.32812 4.11328C8.24609 4.11328 8.16602 4.12891 8.08789 4.16016C8.00977 4.19141 7.93945 4.23633 7.87695 4.29492L5.81445 6.35742L5.12305 5.66602C4.99805 5.54102 4.84766 5.47852 4.67188 5.47852C4.58594 5.47852 4.50391 5.49414 4.42578 5.52539C4.34766 5.55664 4.2793 5.60352 4.2207 5.66602C4.16211 5.72852 4.11719 5.79492 4.08594 5.86523C4.05469 5.93555 4.03711 6.01758 4.0332 6.11133C4.0332 6.19336 4.04883 6.27344 4.08008 6.35156C4.11133 6.42969 4.1582 6.5 4.2207 6.5625L5.36328 7.70508C5.42188 7.76367 5.49023 7.80859 5.56836 7.83984C5.64648 7.87109 5.72852 7.88867 5.81445 7.89258Z" fill="white"/></svg></a>`,et=v.dy`<a href="${t=>t.url}" class="${t=>"Tenorite"===t.fontFamily?"font-tenorite":""} ${t=>"true"===t.whiteProviderName?"white":`provider-name-hyper-link ${t.customStyleClass||""} ${t.isNewAdSlugV2&&!t.keepOpacity?"with-opacity-70":""} ${t.isNewAdSlugV2NonDr||!t.adSlugGA?"with-opacity-70-non-dr":""}`} ${t=>t.isFeedV2?"is-feed-v2":""} ${t=>t.isMsnHPAdSlug?"is-msn-hp-style":""} ${t=>t.isSeasonal?"is-seasonal-style":""}" target="_blank" title=" ${t=>t.providerName}" data-t="${t=>t.telemetryMetadata}">${t=>t.providerName}</a>`,it=v.dy` ${(0,w.g)((t=>t.hasEliteBadge),v.dy`<span class="provider-name-with-elite-badge-wrapper">${tt} ${et}</span>`)} ${(0,w.g)((t=>!t.hasEliteBadge),et)}
`;let ot=class extends Y{};ot=(0,o.gn)([(0,g.M)({name:"msn-native-ad-provider-name",template:it,styles:K})],ot);var at=i(29837),nt=i(33764);let rt=class extends p.F{constructor(){super(...arguments),this.adChoiceIconUrl="",this.nativeAdAdChoiceText="",this.telemetryMetadata="",this.isFeedV2=!1}connectedCallback(){super.connectedCallback();const{iconStyles:t}=this,e=[];t&&Object.keys(t).forEach((i=>{e.push((0,nt._t)(i,t[i]))})),this.iconStyleStr=u.i`:host .native-ad-ad-choice {${e.length?e.join(";"):""}}`}};(0,o.gn)([(0,l.Lj)({attribute:"ad-choice-icon-url"})],rt.prototype,"adChoiceIconUrl",void 0),(0,o.gn)([(0,l.Lj)({attribute:"native-ad-ad-choice-text"})],rt.prototype,"nativeAdAdChoiceText",void 0),(0,o.gn)([(0,l.Lj)({attribute:"tel-metadata"})],rt.prototype,"telemetryMetadata",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],rt.prototype,"isFeedV2",void 0),(0,o.gn)([$.LO],rt.prototype,"iconStyles",void 0),(0,o.gn)([$.LO],rt.prototype,"iconStyleStr",void 0),rt=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-ad-ad-choice")],rt);const st=u.i`
@media (forced-colors:active){.native-ad-ad-choice{background:buttonface}}.native-ad-ad-choice{width:32px;height:32px;display:inline-flex}.native-ad-ad-choice svg{margin:auto}`.withBehaviors(new m.g("layoutStyle"),new m.g("iconStyleStr")),lt=v.dy`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3845 -1.21037e-07C2.22828 -1.94803e-07 2.819 0.40029 3.40971 0.719747C3.91584 0.959663 4.42266 1.27977 5.01337 1.51968C7.71388 2.87964 10.4144 4.31978 13.1142 5.75992C13.958 6.16021 15.0548 6.55986 15.6455 7.28025C15.814 7.52017 16.0678 7.84027 15.9832 8.24056C15.7301 9.12068 14.5487 9.44079 13.7895 9.84043C11.9328 10.8007 9.99215 11.8406 8.13543 12.8003C7.46013 13.2005 6.44787 13.9203 5.60409 13.3603C5.26644 13.2005 5.09795 13.0402 5.01337 12.8003C4.92879 12.4802 5.01337 12.0805 5.01337 11.7604L5.01337 9.20023C5.01337 8.48048 4.92879 7.92046 5.4356 7.60035C5.60409 7.52017 5.94173 7.44063 6.1948 7.52017C7.03858 7.84027 6.78552 9.28041 6.78552 10.4005L6.78552 11.2799C8.22001 10.5602 9.6545 9.83979 11.089 9.20022C11.5951 8.96031 12.4389 8.72039 12.6081 8.08019C12.7766 7.36044 11.1736 6.80042 10.6675 6.55986L4.84489 3.43966C4.42266 3.19974 3.32581 2.3998 2.6512 2.63972C2.39813 2.71991 2.22897 2.95982 2.22897 3.11955C2.14438 3.43966 2.14438 3.91949 2.14438 4.31978L2.14438 6.87996L2.14438 11.1997C2.14438 11.8399 2.0598 12.6399 2.31287 13.0395C2.90358 13.8395 4.25349 12.3993 4.67572 13.6797C4.76031 13.9998 4.59114 14.3199 4.42266 14.4797C4.08501 14.9601 2.56593 15.6799 1.97522 15.8403C1.80674 15.9198 1.3845 16 1.13144 16C-0.303057 15.7601 0.0345918 13.6002 0.0345916 11.9997L0.0345909 4.07986C0.0345908 2.87964 -0.133892 1.27977 0.372239 0.560019C0.625305 0.159727 0.878371 0.159728 1.3845 -1.21037e-07ZM5.77257 5.1999C7.03858 5.1999 7.12248 6.72023 5.94105 6.96015C5.26576 7.04034 4.75962 6.40013 4.92811 5.84011C5.09727 5.43982 5.35034 5.35963 5.77257 5.1999Z" fill="#00AECD"/>
</svg>
`,dt=v.dy`
<svg width="20" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.52344 5.69531C4.70573 5.69531 4.86198 5.63542 4.99219 5.51562C5.1224 5.39062 5.1875 5.24219 5.1875 5.07031C5.1875 4.89844 5.1224 4.7526 4.99219 4.63281C4.86198 4.50781 4.70573 4.44531 4.52344 4.44531C4.33594 4.44531 4.17708 4.50781 4.04688 4.63281C3.91667 4.7526 3.85156 4.89844 3.85156 5.07031C3.85156 5.24219 3.91667 5.39062 4.04688 5.51562C4.17708 5.63542 4.33594 5.69531 4.52344 5.69531ZM1.44531 0.921875V0.929688C1.33594 0.861979 1.21875 0.828125 1.09375 0.828125C0.90625 0.828125 0.747396 0.890625 0.617188 1.01562C0.486979 1.13542 0.421875 1.28125 0.421875 1.45312V11.375C0.421875 11.5469 0.486979 11.6953 0.617188 11.8203C0.747396 11.9401 0.90625 12 1.09375 12C1.19271 12 1.28906 11.9792 1.38281 11.9375H1.39062L1.40625 11.9219L3.20312 11.0625C3.48958 10.9635 3.63281 10.7708 3.63281 10.4844C3.63281 10.3073 3.56771 10.1589 3.4375 10.0391C3.30729 9.91406 3.15104 9.85156 2.96875 9.85156C2.85417 9.85156 2.74479 9.8776 2.64062 9.92969C2.63542 9.9401 2.61979 9.95052 2.59375 9.96094C2.51042 10.0026 2.42188 10.0234 2.32812 10.0234C2.17188 10.0234 2.03906 9.97396 1.92969 9.875C1.82031 9.77083 1.76302 9.64844 1.75781 9.50781V3.375C1.76302 3.22917 1.82031 3.10677 1.92969 3.00781C2.03906 2.90365 2.17188 2.85156 2.32812 2.85156C2.41667 2.85156 2.5 2.8724 2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L8.53906 5.92188L8.64844 5.97656C8.8099 6.08594 8.89062 6.23177 8.89062 6.41406C8.89062 6.60677 8.80469 6.75521 8.63281 6.85938L8.5625 6.89844L5.1875 8.60938V6.67969C5.1875 6.5026 5.1224 6.35417 4.99219 6.23438C4.86198 6.11458 4.70573 6.05469 4.52344 6.05469C4.33594 6.05469 4.17708 6.11458 4.04688 6.23438C3.91667 6.35417 3.85156 6.5026 3.85156 6.67969V9.65625C3.85156 9.83333 3.91667 9.98177 4.04688 10.1016C4.17708 10.2214 4.33594 10.2812 4.52344 10.2812C4.65885 10.2812 4.78385 10.2448 4.89844 10.1719L11.125 7.00781C11.4271 6.90885 11.5781 6.71094 11.5781 6.41406C11.5781 6.14844 11.4453 5.95833 11.1797 5.84375L1.44531 0.921875ZM2.59375 9.96094C2.61979 9.95052 2.63542 9.9401 2.64062 9.92969L2.59375 9.96094ZM2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L2.57812 2.91406Z" fill="#00aecd"/>
</svg>
`,ct=v.dy`
${(0,w.g)((t=>t.adChoiceIconUrl),v.dy`<a class="native-ad-ad-choice" href="${t=>t.adChoiceIconUrl}" target="_blank" title="${t=>t.nativeAdAdChoiceText}" data-t="${t=>t.telemetryMetadata}" aria-label="${t=>t.nativeAdAdChoiceText}">${(0,w.g)((t=>!t.isFeedV2),v.dy`${dt}`)} ${(0,w.g)((t=>t.isFeedV2),v.dy` ${lt} `)}</a>`)}
`;let pt=class extends rt{};pt=(0,o.gn)([(0,g.M)({name:"msn-native-ad-ad-choice",template:ct,styles:st})],pt);let ht=class extends p.F{constructor(){super(...arguments),this.cardActionsTooltips=""}connectedCallback(){super.connectedCallback()}};(0,o.gn)([(0,l.Lj)({attribute:"card-actions-tooltips"})],ht.prototype,"cardActionsTooltips",void 0),(0,o.gn)([(0,l.Lj)({attribute:"data"})],ht.prototype,"data",void 0),ht=(0,o.gn)([(0,c.uj)(d.EoX,"msn-native-ad-see-more")],ht);const gt=u.i` .card-button{border-radius:100%}.card-button:not(:hover){background:transparent}.card-see-more{align-items:center;background-color:rgb(255,255,255);border-radius:100%;border:1px solid rgb(229,229,229);cursor:pointer;display:flex;height:32px;justify-content:center;outline:none;margin-right:2px;width:32px}.card-see-more svg{fill:inherit}`.withBehaviors(new m.g("layoutStyle"),new L.j(["data"],(t=>{let e="";return t.data&&(t.data.isInfopane||t.data.enableFilledIconOnHover&&(!t.data.enableFilledIconOnHover||t.data.optedOutOfReactions)||(e+="dynamic-styles{display:inline-flex}")),u.i`${e}`})));var ut=i(46943),mt=i(51873),ft=i(89150),vt=i(40565),bt=i(82479);class yt extends g.H{toggleSelected(){this.internalToggle&&(this.selected=!this.selected),this.$emit("selected-state-changed")}connectedCallback(){super.connectedCallback(),this.button&&(this.button.control.title=this.selectTitle||"")}}(0,o.gn)([(0,l.Lj)({attribute:"data-icon"})],yt.prototype,"dataIcon",void 0),(0,o.gn)([(0,l.Lj)({attribute:"layout"})],yt.prototype,"layout",void 0),(0,o.gn)([(0,l.Lj)({attribute:"fill-color-selected"})],yt.prototype,"fillColorSelected",void 0),(0,o.gn)([(0,l.Lj)({attribute:"filled-icon-path"})],yt.prototype,"filledIconPath",void 0),(0,o.gn)([(0,l.Lj)({attribute:"select-icon"})],yt.prototype,"selectIcon",void 0),(0,o.gn)([(0,l.Lj)({attribute:"unselect-icon"})],yt.prototype,"unselectIcon",void 0),(0,o.gn)([(0,l.Lj)({attribute:"select-title"})],yt.prototype,"selectTitle",void 0),(0,o.gn)([(0,l.Lj)({attribute:"unselect-title"})],yt.prototype,"unselectTitle",void 0),(0,o.gn)([(0,l.Lj)({attribute:"animation-text"})],yt.prototype,"animationText",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean"})],yt.prototype,"selected",void 0),(0,o.gn)([(0,l.Lj)({attribute:"select-telemetry-tag"})],yt.prototype,"selectTelemetryTag",void 0),(0,o.gn)([(0,l.Lj)({attribute:"unselect-telemetry-tag"})],yt.prototype,"unselectTelemetryTag",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean"})],yt.prototype,"internalToggle",void 0);const xt=u.i` fluent-button{border-radius:100px}fluent-button.fill-color-selected svg{fill:var(--fill-color-selected)}fluent-button.filled-icon-hover{background:transparent;min-width:20px;height:20px}fluent-button.filled-icon-hover::part(control){width:20px}fluent-button.filled-icon-hover svg{width:20px;height:20px}fluent-button.filled-icon-hover:hover > svg > path{transition:all 0.5s;d:path(var(--filled-path))}fluent-button.filled-icon-hover,fluent-button.no-backplate:not(:hover){background:transparent}fluent-button.expand::part(control){padding:0}.button-content{display:flex;flex-direction:row;align-items:center;padding-inline-start:8px;animation:padding-icon 0.3s linear 2s 1 forwards}.button-content > span{font-size:var(--type-ramp-minus-1-font-size);padding-inline-start:6px;padding-inline-end:10px;display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.button-content > svg{max-height:16px}.disappear{animation:disappear 0.3s ease-out 2s forwards;max-width:165px}.expand{border-radius:100px;max-width:210px}@keyframes disappear{to{width:0;padding-inline:0;overflow:hidden;opacity:0;display:none}}@keyframes padding-icon{to{padding-inline-start:0}}`;var wt=i(41472);const $t=v.dy`<fluent-button class=${t=>`${"fillediconhover"===t.layout?"filled-icon-hover":""} ${"nobackplate"===t.layout?"no-backplate":""} ${t.fillColorSelected&&t.selected?" fill-color-selected":""}`} data-icon=${t=>t.dataIcon} appearance="neutral" style="--filled-path: '${t=>t.filledIconPath}'; --fill-color-selected: ${t=>t.fillColorSelected};" aria-label=${t=>t.selectTitle} aria-pressed=${t=>t.selected} title=${t=>t.selected?t.unselectTitle:t.selectTitle} @click=${t=>t.toggleSelected&&t.toggleSelected()} data-t="${t=>t.selected?t.unselectTelemetryTag:t.selectTelemetryTag}" ${(0,wt.i)("button")}>${(0,w.g)((t=>t.selected),v.dy` ${(0,w.g)((t=>"animated"!==t.layout),v.dy` ${t=>v.dy`${v.dy.partial(t.selectIcon||"")}`} `)} ${(0,w.g)((t=>"animated"===t.layout),v.dy`<span class="button-content">${t=>v.dy`${v.dy.partial(t.selectIcon||"")}`}<span class="disappear">${t=>t.animationText}</span></span>`)} `)} ${(0,w.g)((t=>!t.selected),v.dy`${t=>v.dy`${v.dy.partial(t.unselectIcon||"")}`}`)}</fluent-button>`;let Ct=class extends yt{};Ct=(0,o.gn)([(0,g.M)({name:"msn-card-button",template:$t,styles:xt,shadowOptions:{delegatesFocus:!0}})],Ct);const Lt=v.dy`<button class="card-see-more" title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore} @click=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)} data-t="${t=>{var e,i;return null===(i=null===(e=t.telemetryContext)||void 0===e?void 0:e.seeMore)||void 0===i?void 0:i.getMetadataTag()}}">${v.dy.partial(bt.Z)}</button>`,kt=v.dy` ${(0,ft.rx)((t=>[t.data]),v.dy` ${(0,w.g)((t=>t.isAdFeedbackV1Enabled&&!!t.feedbackUrl),v.dy` ${(0,w.g)((t=>!t.isFeedV2),v.dy`<msn-card-button class="card-button dynamic-styles" select-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore} unselect-icon=${vt.Z} filled-icon-path=${ut.Cp} layout=${t=>(0,mt.Q8)(t)} @selected-state-changed=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)} select-telemetry-tag=${t=>{var e,i;return null===(i=null===(e=t.telemetryContext)||void 0===e?void 0:e.seeMore)||void 0===i?void 0:i.getMetadataTag()}}></msn-card-button>`)} ${(0,w.g)((t=>t.isFeedV2&&t.isHovered),v.dy`${Lt}`)} `)} `)}
`;let St=class extends ht{};St=(0,o.gn)([(0,g.M)({name:"msn-native-ad-see-more",template:kt,styles:gt})],St);var Tt=i(19628),Ft=i(90351);const At=t=>{var e;const i=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdTrendingTitleText)||"More than {0} people have viewed this product",o=(0,Ft.Z)(_t((0,Ft.Z)(t,"assets.viewed","")),"viewed","");return Tt.Ld.Format(i,o)},_t=(0,c.Et)(d.Evv,"parseViewedStringToJSON")((t=>{if(!t)return"";let e={};try{e=JSON.parse(t)}catch(t){return""}return e&&e.viewed&&e.comparisonDays?e:""})),It=t=>{var e,i;const o=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSaleHighlightTitleText)||"SALE {0}% OFF";return Tt.Ld.Format(o,null===(i=t.assets)||void 0===i?void 0:i.discount)},jt=t=>{var e,i;const o=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSaleHighlightTitleText)||"SALE {0}% OFF",a=o.split("{0}%"),n=Tt.Ld.Format(o,null===(i=t.assets)||void 0===i?void 0:i.discount),[r,s]=a,l=n.slice(r.length,n.length-s.length);return{prefix:r.trim(),suffix:s.trim(),highlightText:l.trim()}};class Mt{chain(t){this.nextBuilder=t}build(t,e){const i=this.doBuild(t,e);return this.nextBuilder?this.nextBuilder.build(t,i):i}}(0,o.gn)([(0,c.Et)(d.iJb,"BaseBuilder.Chain")],Mt.prototype,"chain",null),(0,o.gn)([(0,c.Et)(d.iJb,"BaseBuilder.Build")],Mt.prototype,"build",null);class Et extends Mt{constructor(){super(),this.creatorMap=new Map}registerCreator(t,e){this.creatorMap.set(t,e)}doBuild(t,e){if(this.creatorMap.has(t.name)){return this.creatorMap.get(t.name)(t,e)}return e?v.dy`${e}`:v.dy`<div></div>`}}(0,o.gn)([(0,c.Et)(d.iJb,"ComponentBuilder.RegisterCreator")],Et.prototype,"registerCreator",null),(0,o.gn)([(0,c.Et)(d.iJb,"ComponentBuilder.DoBuild")],Et.prototype,"doBuild",null);class Bt extends Mt{doBuild(t,e){if(Array.isArray(t.children)&&t.children.length>0){const e=t.children.map((t=>this.build(t,null))),i=Array(e.length+1).fill("");return i.raw=i,v.dy`
                ${(0,ft.rx)((e=>t.children),v.dy`
                    ${t=>this.build(t,null)}
                `)}
            `,v._H.create(i,e)}return null}}(0,o.gn)([(0,c.Et)(d.iJb,"ChildrenBuilder.DoBuild")],Bt.prototype,"doBuild",null);class Ht extends p.F{constructor(){super(...arguments),this._displayName="MsnBlockLayout"}connectedCallback(){super.connectedCallback()}}(0,o.gn)([$.LO],Ht.prototype,"layoutConfig",void 0);const zt=v.dy`<slot></slot>`,Ot=u.i` 
    :host{
        display: block;
    }
`.withBehaviors(new m.g("layoutStyle"));class Dt extends p.F{constructor(){super(...arguments),this._displayName="MsnFlexLayout"}connectedCallback(){super.connectedCallback()}}(0,o.gn)([$.LO],Dt.prototype,"layoutConfig",void 0),(0,o.gn)([$.LO],Dt.prototype,"layoutStyle",void 0);const Rt=v.dy`<slot></slot>`,Pt=u.i` :host{display:flex}`.withBehaviors(new m.g("layoutStyle"));class Vt extends p.F{constructor(){super(...arguments),this._displayName="MsnPixelLayout"}connectedCallback(){super.connectedCallback()}}(0,o.gn)([$.LO],Vt.prototype,"layoutConfig",void 0);const Zt=v.dy`<slot></slot>`,Nt=u.i` :host{position:absolute}`.withBehaviors(new m.g("layoutStyle")),Ut=v.dy`<slot></slot>`,Wt=u.i``.withBehaviors(new m.g("layoutStyle"));let Gt=class extends Vt{};Gt=(0,o.gn)([(0,g.M)({name:"msn-pixel-layout",template:Zt,styles:Nt})],Gt);let qt=class extends Dt{};qt=(0,o.gn)([(0,g.M)({name:"msn-flex-layout",template:Rt,styles:Pt})],qt);let Xt=class extends Ht{};Xt=(0,o.gn)([(0,g.M)({name:"msn-block-layout",template:zt,styles:Ot})],Xt);let Jt=class extends p.F{};Jt=(0,o.gn)([(0,g.M)({name:"msn-uber-layout",template:Ut,styles:Wt})],Jt);class Qt extends Mt{doBuild(t,e){if(!t.layout)return e;const i=t.layout;if(!i.mode)return e;switch(i.mode){case"pixel":return function(t,e){return v.dy`
        <msn-pixel-layout 
            :layoutConfig=${e=>t}
        >
            ${e}
        </msn-pixel-layout>
    `}(i,e);case"flex":return function(t,e){return v.dy`
        <msn-flex-layout 
            :layoutConfig=${e=>t}
        >
            ${e}
        </msn-flex-layout>
    `}(i,e);case"block":return function(t,e){return v.dy`
        <msn-block-layout
            :layoutConfig=${()=>t}
        >
            ${e}
        </msn-block-layout>
    `}(i,e);default:return e}}}(0,o.gn)([(0,c.Et)(d.iJb,"LayoutBuilder.DoBuild")],Qt.prototype,"doBuild",null);const Yt=u.i` :host{display:block;height:100%;width:100%}`,Kt=v.dy`<template id="native-ad-telemetry"><slot></slot></template>`;let te=class extends g.H{constructor(){super(...arguments),this.clickedBeacon=!1,this.clickedTelemetry=!1,this.clickedUserAction=!1,this.telemetryMetadata=""}};(0,o.gn)([(0,l.Lj)({mode:"boolean"})],te.prototype,"clickedBeacon",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean"})],te.prototype,"clickedTelemetry",void 0),(0,o.gn)([(0,l.Lj)({mode:"boolean"})],te.prototype,"clickedUserAction",void 0),(0,o.gn)([l.Lj],te.prototype,"telemetryMetadata",void 0),te=(0,o.gn)([(0,g.M)({name:"msn-native-ad-telemetry",template:Kt,styles:Yt})],te);var ee=i(36159),ie=i(26243),oe={impressionLog:(t,e,i)=>{var o,a,n,r,s,l;const d=null===(l=null===(s=null===(r=null===(n=null===(a=null===(o=null==e?void 0:e.parent)||void 0===o?void 0:o.shadowRoot)||void 0===a?void 0:a.querySelector("msn-native-ad-title"))||void 0===n?void 0:n.shadowRoot)||void 0===r?void 0:r.querySelector(".native-ad-title-wrapper"))||void 0===s?void 0:s.children)||void 0===l?void 0:l[0],c=null==d?void 0:d.scrollHeight,p=null==d?void 0:d.clientHeight;c&&p&&(0,ie._)(t.id,"nativeAdCardImpression",`${c},${p}`,0,i)},clickLog:(t,e,i)=>{var o,a,n,r,s,l;const d=null===(l=null===(s=null===(r=null===(n=null===(a=null===(o=null==e?void 0:e.parent)||void 0===o?void 0:o.shadowRoot)||void 0===a?void 0:a.querySelector("msn-native-ad-title"))||void 0===n?void 0:n.shadowRoot)||void 0===r?void 0:r.querySelector(".native-ad-title-wrapper"))||void 0===s?void 0:s.children)||void 0===l?void 0:l[0],c=null==d?void 0:d.scrollHeight,p=null==d?void 0:d.clientHeight;c&&p&&(0,ie._)(t.id,"nativeAdCardClick",`${c},${p}`,0,null==i?void 0:i.target)}};var ae,ne={PrgTitle2:oe,PrgTitle2C:oe};!function(t){t[t.adChoice=0]="adChoice",t[t.destination=1]="destination",t[t.nativeAdCard=2]="nativeAdCard"}(ae||(ae={}));class re extends Mt{doBuild(t,e){if(t.userActionLogger){const{impressionLog:e,clickLog:i}=ne[t.userActionLogger]||{};!ee.Km.clickLog&&i&&(ee.Km.clickLog=i),!ee.Km.impressionLog&&e&&(ee.Km.impressionLog=e)}if(!t.telemetry)return e;const i=t.telemetry,o=!!i.metadata;return v.dy`
            <msn-native-ad-telemetry
                data-t="${t=>o?((t,e)=>{if(t&&t.adTelemetryContext&&e in ae)return t.adTelemetryContext[e].getMetadataTag()})(t,i.metadata):""}"
                ${(0,x.lq)(!!i.clickedBeacon||!!i.clickedTelemetry||!!i.clickedUserAction,!!i.viewedBeacon,!!i.customEvent)}
                clickedBeacon=${!!i.clickedBeacon}
                clickedUserAction=${!!i.clickedUserAction}
                clickedTelemetry=${!!i.clickedTelemetry}
                telemetryMetadata=${i.metadata}
            >
                ${e}
            </msn-native-ad-telemetry>`}}(0,o.gn)([(0,c.Et)(d.iJb,"TelemetryBuilder.doBuild")],re.prototype,"doBuild",null);const se=new class{constructor(){this.create=(0,r.Z)(this.createInternal),this.layoutBuilder=new Qt,this.telemetryBuilder=new re,this.telemetryBuilder.chain(this.layoutBuilder),this.componentBuilder=new Et,this.componentBuilder.chain(this.telemetryBuilder),this.rootBuilder=new Bt,this.rootBuilder.chain(this.componentBuilder)}registerCreator(t,e){this.componentBuilder.registerCreator(t,e)}createInternal(t){return this.rootBuilder.build(t,null)}};se.registerCreator("ad-title-mask",(t=>v.dy`
    <msn-native-ad-title-mask
        :layoutConfig=${e=>null==t?void 0:t.layout}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-mask"
        destination-url=${t=>t.destinationUrl}
        title=${t=>t.title}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${(0,x.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-title-mask>
`)),se.registerCreator("product-image",(t=>v.dy`
    ${(0,w.g)((t=>t.imageData),v.dy`
        <msn-native-ad-product-image 
            :layoutConfig=${()=>null==t?void 0:t.layout}
            src=${e=>((t,e)=>{var i,o;return t&&(null===(o=null===(i=e.assets)||void 0===i?void 0:i.transparentImage)||void 0===o?void 0:o.url)?e.assets.transparentImage.url:e.imageData&&e.imageData.source})(null==t?void 0:t.useTransparentImage,e)}
            alt-text=${t=>t.imageData&&t.imageData.altText}
            is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
            image-mask-on=${()=>(null==t?void 0:t.imageMaskOn)?"on":"off"}
            image-mask-opacity=${()=>null==t?void 0:t.imageMaskOpacity}
            trim-bottom=${()=>null==t?void 0:t.trimBottom}
            object-fit=${()=>(null==t?void 0:t.useTransparentImage)?"contain":"cover"}
            use-drop-shadow=${()=>(null==t?void 0:t.useTransparentImage)&&!(null==t?void 0:t.noDropShadow)}
            use-transparent-background=${()=>null==t?void 0:t.useTransparentImage}
            image-mask-left=${()=>null==t?void 0:t.imageMaskLeft}
            image-mask-top=${()=>null==t?void 0:t.imageMaskTop}
            image-mask-width=${()=>null==t?void 0:t.imageMaskWidth}
            image-mask-height=${()=>null==t?void 0:t.imageMaskHeight}
            id="${t=>t.id}-product-image"
            rlink=${t=>t.destionationUrl}
			component-name=${null==t?void 0:t.name}
            :visualReadinessCallback=${t=>t.visualReadinessCallback}
            enable-native-ad-hover-contrast=${t=>t.enableNativeAdHoverContrast}
            pattern-mode=${()=>null==t?void 0:t.patternMode}
        >
        </msn-native-ad-product-image>
    `)}
`)),se.registerCreator("gradient-mask",((t,e)=>v.dy`
    ${(0,w.g)((t=>t.destinationUrl),v.dy`
        <msn-native-gradient-mask
            :layoutConfig=${e=>null==t?void 0:t.layout}
            paddingTop=${t&&t.paddingTop}
            paddingBottom=${t&&t.paddingBottom}
            is-radial-mask=${t&&t.isRadialMask}
            is-full-gradient=${t&&t.isFullGradient}
            use-dynamic-style=${t&&t.useDynamicStyle}
            height=${t&&t.height}
            background="${t&&t.background}"
            @click=${t=>t.destinationUrl&&window.open(t.destinationUrl)}
            ${t&&t.setClickBeacon?(0,x.lq)(!0,!1):""}
			component-name="${null==t?void 0:t.name}"
            use-short-gradient=${t=>t.useShorterGradient}
            pe-seasonal-color-mode=${t&&t.peSeasonalColorMode}
        >
            ${(0,w.g)((()=>e),e)}
        </msn-native-gradient-mask>
    `)}
`)),se.registerCreator("ad-title",(t=>v.dy`
    <msn-native-ad-title
        :layoutConfig=${e=>null==t?void 0:t.layout}
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-title"
        title=${t=>(t=>{var e,i,o;return((null===(e=t.template)||void 0===e?void 0:e.templateType)===Z||(null===(i=t.template)||void 0===i?void 0:i.templateType)===N)&&(null===(o=t.assets)||void 0===o?void 0:o.shortTitle)||t.title})(t)}
        destination-url=${t=>t.destinationUrl}
        custom-style=${t&&t.customStyle}
        custom-style-hovered=${null==t?void 0:t.customStyleHovered}
        animation-on=${t=>t.template&&t.template.templateType===z.SI.ContentReveal}
        line-height=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?28:e&&e.lineHeight)(e,t)}
        font-weight=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?400:e&&e.fontWeight)(e,t)}
        two-lines-title=${e=>{var i;return(null==t?void 0:t.twoLine)||e.hasAnyInlineDecoration&&!(null==t?void 0:t.oneLineTitle)||(null===(i=e.template)||void 0===i?void 0:i.templateType)===z.SI.TitleMaxLine2||e.adSlugGA}}
        one-line-title=${e=>null==t?void 0:t.oneLineTitle}
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
        font-size=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?20:e&&e.titleFontSize)(e,t)||e.feedFontSize}
        is-anaheim-design=${t=>t.isAnaheimDesign}
        is-river-region=${t=>"river"===t.region||"resriver"===t.region||"rightRail"===t.region||"rightrail"===t.region}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${(0,x.lq)(!0,!1)}
        ${(null==t?void 0:t.isFeedV2)?"is-feed-v2":""}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-title>
`)),se.registerCreator("ad-label",(t=>{var e;return v.dy`
    ${(0,w.g)((t=>t.privacyUrl),v.dy`
        <msn-native-ad-ad-label 
            :layoutConfig=${e=>null==t?void 0:t.layout}
            privacy-url="${t=>t.privacyUrl}"
            ad-label-text-opacity="${null!==(e=null==t?void 0:t.adLabelTextOpacity)&&void 0!==e?e:"0.7"}"
            ad-label-text="${t=>t.adLabelText}"
            type="${e=>Q(e,t)}"
            native-ad-ad-label-text="${t=>t.strings&&t.strings.nativeAdAdLabelText}"
            tel-metadata="${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.adLabel)||void 0===i?void 0:i.getMetadataTag()}}"
            id="${t=>t.id}-ad-label"
            ${(null==t?void 0:t.isFeedV2)?"is-feed-v2":""}
            ${(null==t?void 0:t.isSeasonal)?"is-seasonal":""}
			component-name="${null==t?void 0:t.name}"
        >
        </msn-native-ad-ad-label>
    `)}
`})),se.registerCreator("provider-name",(t=>{var e;return v.dy`
<msn-native-ad-provider-name
    ${(0,x.lq)(!0,!1)}
    id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-provider-name"
    url=${t=>t.destinationUrl}
    provider-name=${t=>t.providerData&&t.providerData.name}
    custom-style-class=${t&&t.customStyleClass}
    ad-slug-ga=${t=>t.adSlugGA}
    tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
    font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
    has-elite-badge=${t=>{var e;return!!(null===(e=t.assets)||void 0===e?void 0:e.eliteBadge)}}
    ad-label-text-opacity="${null!==(e=null==t?void 0:t.adLabelTextOpacity)&&void 0!==e?e:"0.7"}"
    ${(null==t?void 0:t.isFeedV2)?"is-feed-v2":""}
    font-size=${null==t?void 0:t.fontSize}
    line-height=${null==t?void 0:t.lineHeight}
    :layoutConfig=${e=>null==t?void 0:t.layout}
    :localizedStrings=${t=>t.localizedStrings}
    color="${null==t?void 0:t.color}"
    font-weight="${null==t?void 0:t.fontWeight}"
	component-name="${null==t?void 0:t.name}"
    ${(null==t?void 0:t.isSeasonal)?"is-seasonal":""}
>
</msn-native-ad-provider-name>
`})),se.registerCreator("disclaimer",at.Zg),se.registerCreator("ad-choice",(t=>v.dy`
    <msn-native-ad-ad-choice 
        :layoutConfig=${e=>null==t?void 0:t.layout}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-choice"
        ad-choice-icon-url=${t=>t.adChoiceIconUrl}
        native-ad-ad-choice-text=${t=>t.strings&&t.strings.nativeAdAdChoiceText}
        ${t.isFeedV2?"is-feed-v2":""}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.adChoice)||void 0===i?void 0:i.getMetadataTag()}}
		:iconStyles=${()=>t.iconStyles}
		component-name="${null==t?void 0:t.name}"
        id="${t=>t.id}-ad-choice"
    >
    </msn-native-ad-ad-choice>
`)),se.registerCreator("see-more",(t=>v.dy`
    <msn-native-ad-see-more
        :layoutConfig=${e=>null==t?void 0:t.layout}
        :data=${e=>Object.assign(Object.assign({},e),{isFeedV2:t&&t.isFeedV2,isHovered:e.hoverState&&e.hoverState.isHovered})}
        data-t="${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.seeMore)||void 0===i?void 0:i.getMetadataTag()}}"
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-see-more>
`)),se.registerCreator("like-button",(t=>v.dy`
    <msn-native-ad-like-button
        :layoutConfig=${e=>null==t?void 0:t.layout}
        native-ad-like-text=${t=>t.strings&&t.strings.nativeAdLikeText}
        native-ad-unlike-text=${t=>t.strings&&t.strings.nativeAdUnLikeText}
        beaconsJson=${t=>t.beaconsJson}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-like-button>
`)),se.registerCreator("call-to-action",(t=>v.dy`
    <msn-native-ad-call-to-action 
        text="${t=>(t=>t.template&&t.strings?"prg-ad-cta"===t.template.configType?t.strings.nativeAdBuyNowText:t.strings.nativeAdLearnMoreText:"")(t)}"
        default-background-color="${t&&t.backgroundColor}"
        background-color="${t=>(t=>t.template&&t.layoutColor?"prg-ad-cta"===t.template.configType||"prg-ad-cta-lm"===t.template.configType?"":t.layoutColor:"")(t)}"
        color="${t&&t.color}"
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        cta-mode=${t&&t.ctaMode||"default"}
        destination-url=${t=>t.destinationUrl}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${t&&"arrow"===t.ctaMode&&(0,x.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    
    </msn-native-ad-call-to-action>
    `)),se.registerCreator("trending",(t=>v.dy`
    <msn-native-ad-trending
        :layoutConfig=${e=>null==t?void 0:t.layout}
        destination-url="${t=>t.destinationUrl}" 
        title="${t=>t.title}"
        trending-title-text=${At}
        trending-text="${t=>(0,Ft.Z)(t,"localizedStrings.nativeAdTrendingText","Trending")}"
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${(0,x.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-trending>
`)),se.registerCreator("color-mask",(t=>v.dy`
<msn-native-ad-color-mask
    opacity=${t&&t.opacity}
    color=${e=>t.feedV2?e.dynamicBackground:e.layoutColor}
    is-show=${e=>t&&t.alwaysPresent||e.hoverState&&e.hoverState.isHovered}
    ${(null==t?void 0:t.feedV2)?"feed-v2":""}
	component-name="${null==t?void 0:t.name}"
    :layoutConfig=${e=>null==t?void 0:t.layout}
>
</msn-native-ad-color-mask>
`)),se.registerCreator("sale-highlight-badge",(t=>v.dy`
    <msn-native-ad-sale-highlight-badge
        :layoutConfig=${e=>null==t?void 0:t.layout}
		component-name="${null==t?void 0:t.name}"
        discount-text="${t=>{var e,i;const o=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdOnSaleTextCapital)||"{0}% OFF";return Tt.Ld.Format(o,null===(i=t.assets)||void 0===i?void 0:i.discount)}}"
    >
    </msn-native-ad-sale-highlight-badge>
`)),se.registerCreator("sale-highlight-title",(t=>v.dy`
    <msn-native-ad-text
        font-size="60px"
        letter-spacing="-0.015em"
        line-height="100.5%"
        font-family="Segoe UI"
        font-weight="200"
        text="${It}"
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    />
`)),se.registerCreator("sale-highlight-horizontal-title",(t=>v.dy`
    <msn-native-ad-text
        font-size="18px"
        letter-spacing="0.5em"
        line-height="100.5%"
        font-family="Segoe UI"
        font-weight="600"
        has-highlight-text="true"
        highlight-text="${t=>jt(t).highlightText}"
        highlight-text-prefix="${t=>jt(t).prefix}"
        highlight-text-suffix="${t=>jt(t).suffix}"
        highlight-text-style="font-size: 48px; letter-spacing: 0.05em; margin-inline-start: 9px; margin-inline-end: 14px;"
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    />
`)),se.registerCreator("div-wrapper",((t,e)=>v.dy`
    <msn-native-ad-div-wrapper
        marginLeft=${t&&t.marginLeft}
        marginRight=${t&&t.marginRight}
        marginTop=${t&&t.marginTop}
        marginBottom=${t&&t.marginBottom}
        width=${t&&t.width}
        marginInline=${t&&t.marginInline}
        ${t&&t.setClickBeacon?(0,x.lq)(!0,!1):""}
		component-name="${null==t?void 0:t.name}"
    >
        ${e}
    </msn-native-ad-div-wrapper>
`)),se.registerCreator("free-shipping",(t=>v.dy`
    <decoration-free-shipping-button
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
        color=${t.color}
        icon=${t.icon}
        data=${t=>(0,Ft.Z)(t.localizedStrings,"nativeAdFreeShippingText")}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </decoration-free-shipping-button>
`)),se.registerCreator("rating",(t=>v.dy`
    <decoration-rating
        color=${t.color}
        elementStyle=${()=>t.elementStyle}
        elementSize=${t.elementSize}
        rating=${t=>t.assets&&t.assets.rating}
        review-data=${t=>t.assets.review}
        is-show-review=${t.displayReviewCount}
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </decoration-rating>
`)),se.registerCreator("special-offer",(t=>v.dy`
    <msn-native-ad-special-offer
        :localizedStrings=${t=>t.localizedStrings}
        displayed-text="${t=>t.assets.specialOffer.displayedText}"
        promotional-text="${t=>t.assets.specialOffer.promotionalText}"
        redemption-code="${t=>t.assets.specialOffer.redemptionCode}"
        days-from-expiration="${t=>t.assets.specialOffer.daysFromExpiration}"
        destination-url="${t=>t.assets.specialOffer.destinationURL}"
        margin-left="-6"
        is-dr-config=${t&&t.isDrConfig}
        ${(0,x.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </msn-native-ad-special-offer>
`)),se.registerCreator("ad-full-card-gradient",((t,e)=>v.dy`
    <msn-native-ad-full-card-gradient 
        pattern-mode="${null==t?void 0:t.patternMode}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
        ${(0,w.g)((()=>e),e)}
    </msn-native-ad-full-card-gradient>
`));var le=i(18335),de=i(13400),ce=i(63045);const pe=a.DI.getOrCreateDOMContainer(),he=window.matchMedia("(prefers-color-scheme: dark)");let ge,ue;function me(){pe.register(a.YM.instance(n.l,Object.assign(Object.assign({},this.strings),ge))),this.adBackgroundColor=(null==he?void 0:he.matches)?"#2E2E2E":"#FFFFFF",null==he||he.addEventListener("change",this.themeModeSwitchHandler)}class fe extends g.H{constructor(){super(),this.adBackgroundColor="",this.hoverState={isHovered:!1,isDecorationLinesExpanded:!1},(0,$.LO)(this.hoverState,"isHovered"),(0,$.LO)(this.hoverState,"isDecorationLinesExpanded")}get componentFactory(){return se}themeModeSwitchHandler(){this.adBackgroundColor=(null==he?void 0:he.matches)?"#2E2E2E":"#FFFFFF"}connectedCallback(){var t,e;if(this.configRef&&!ge){const i=null===(t=le.U.getInstance())||void 0===t?void 0:t.getConfigResolver(),o=null===(e=null==i?void 0:i.tryGetConfigSync)||void 0===e?void 0:e.call(i,this.configRef);de.jG.ConfigOrigins.feature===ce.w.Local&&le.U.getConfig(this.configRef).then((t=>{ue=null==t?void 0:t.properties,ge=null==ue?void 0:ue.localizedStrings})),ue=null==o?void 0:o.properties,ge=null==ue?void 0:ue.localizedStrings}super.connectedCallback(),me.call(this)}get wcData(){if(this.adData&&this.adData.adLabelText){const t=Object.assign(Object.assign({},this.config),ue),e=Object.assign(Object.assign(Object.assign({},this.localizedStrings),this.strings),ge);return s(this.adData,t,e)}return null}disconnectedCallback(){null==he||he.removeEventListener("change",this.themeModeSwitchHandler)}}(0,o.gn)([$.LO],fe.prototype,"adData",void 0),(0,o.gn)([$.LO],fe.prototype,"isInfopane",void 0),(0,o.gn)([$.LO],fe.prototype,"adBackgroundColor",void 0),(0,o.gn)([$.LO],fe.prototype,"localizedStrings",void 0),(0,o.gn)([$.LO],fe.prototype,"configRef",void 0);var ve=i(88087),be=i(64553);const ye=t=>{var e;return(null===(e=null==t?void 0:t.template)||void 0===e?void 0:e.dynamicRenderingConfig)||ve.$},xe=(t,e)=>{const i=parseInt((null!=e?e:"#2E2E2E").slice(1),16);return`rgba(${i>>16&255},${i>>8&255},${255&i},${t})`},we=(0,r.Z)((t=>xe(.8,t))),$e=(0,r.Z)((t=>xe(0,t))),Ce=t=>ye(t.wcData).cardStyles||{};var Le,ke=i(55135);!function(t){t.defaultRiverGradient="#2E2E2E",t.defaultRiverBackground="#FFFFFF",t.defaultInfopaneGradient="#000000",t.defaultInfopaneBackground="#FFFFFF",t.zIndexV2OriginalBackground="transparent"}(Le||(Le={}));const Se=t=>{var e;return(null===(e=t.adData)||void 0===e?void 0:e.enableAdsColorBleed)?t.adData.adBackgroundColor:Te(t)},Te=t=>{var e,i,o,a,n;const r=ye(t.wcData);if(r.layoutColor)return r.layoutColor;const s=null===(i=null===(e=t.adData)||void 0===e?void 0:e.template)||void 0===i?void 0:i.templateType;return(s===z.SI.ZIndexV2Polygon||s===z.SI.ZIndexV2Original||s===z.SI.SaleHighlightV3||s===z.SI.SaleHighlightV4)&&(null===(o=t.adData)||void 0===o?void 0:o.layoutColor)&&(null===(n=null===(a=t.adData)||void 0===a?void 0:a.assets)||void 0===n?void 0:n.transparentImage)?t.adData.layoutColor:[z.SI.PESeasonalAds,z.SI.PESeasonalAdsV1,z.SI.PESeasonalAdsV1P].includes(s)?t.adBackgroundColor:""},Fe=v.dy`<style>:host { height: 304px; width: 100%; position: relative; overflow: hidden; border-radius: calc(${ke.rS} * 1px); box-shadow: 0 0 3px lightgrey; } :host(msn-native-ad-dr), :host(native-ad-wc) { ${t=>(t=>{const e=Ce(t),i=[];null==e.borderColor&&null==e.borderWidth||i.push("border-style:solid");const o=["backgroundColor","borderColor","borderWidth","height","boxShadow","borderRadius","fontFamily"];return Object.keys(e).forEach((t=>{null!=e[t]&&o.includes(t)&&i.push((0,nt._t)(t,e[t]))})),i.length?`${i.join(";")};`:""})(t)} } @media (prefers-color-scheme: dark) { :host{ box-shadow: 0 0 3px black; } }</style><fluent-card @mouseenter=${t=>t.hoverState.isHovered=!0} @mouseleave=${t=>t.hoverState.isHovered=!1} style=" background-color: ${t=>(t=>{var e,i;return(null===(i=null===(e=t.adData)||void 0===e?void 0:e.template)||void 0===i?void 0:i.templateType)===z.SI.ZIndexV2Original?Le.zIndexV2OriginalBackground:Le.defaultRiverBackground})(t)}; grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.grid_area}}; --ad-background-color: ${t=>Se(t)||Le.defaultRiverGradient}; --gradient-mid-color: ${t=>we(Se(t)||Le.defaultRiverGradient)}; --gradient-end-color: ${t=>$e(Se(t)||Le.defaultRiverGradient)}; ${t=>(t=>{const e=Ce(t);let i="";return null==e.borderRadius&&null==e.borderWidth||(i+="border-radius: 0;"),null!=e.backgroundColor&&(i+=`background-color: ${e.backgroundColor};`),i})(t)} " class="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.cardSize}}" card-fill-color="${t=>{var e;return Te(t)||(null===(e=t.adData)||void 0===e?void 0:e.adBackgroundColor)}}">${(0,ft.rx)((t=>{var e;return[Object.assign(Object.assign({},t.wcData),{visualReadinessCallback:null===(e=t.adData)||void 0===e?void 0:e.visualReadinessCallback,hoverState:t.hoverState,componentFactory:t.componentFactory})]}),v.dy` ${t=>t.componentFactory.create(ye(t))} `)}</fluent-card>`,Ae=v.dy`<div @mouseenter=${t=>t.hoverState.isHovered=!0} @mouseleave=${t=>t.hoverState.isHovered=!1} style=" contain: content; height: 100%; background-color: ${t=>Le.defaultInfopaneBackground}; grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.grid_area}}; --ad-background-color: ${t=>Le.defaultInfopaneGradient}; --gradient-mid-color: ${t=>we(Le.defaultInfopaneGradient)}; --gradient-end-color: ${t=>$e(Le.defaultInfopaneGradient)}; --neutral-foreground-rest: ${t=>Le.defaultInfopaneBackground}; " class="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.cardSize}}" card-fill-color="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.adBackgroundColor}}">${(0,ft.rx)((t=>[Object.assign(Object.assign({},t.wcData),{hoverState:t.hoverState,componentFactory:t.componentFactory})]),v.dy` ${t=>t.componentFactory.create((t=>{var e;return(null===(e=null==t?void 0:t.template)||void 0===e?void 0:e.dynamicRenderingConfig)||be.v})(t))} `)}</div>`,_e=v.dy`<style>:host { grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.grid_area}}; border-radius: 6px; box-shadow: 0 0 3px lightgrey; background-color: ${Le.defaultRiverGradient}; } @media (prefers-color-scheme: dark) { :host{ box-shadow: 0 0 3px black; } }</style><div></div>`,Ie=v.dy` ${(0,w.g)((t=>t.wcData),(t=>t.isInfopane?Ae:Fe))} ${(0,w.g)((t=>!t.wcData),_e)}
`,je=u.i`
`;let Me=class extends fe{};Me=(0,o.gn)([(0,g.M)({name:"msn-native-ad-wc",template:Ie,styles:je}),(0,c.uj)(d.EoX,"msn-native-ad-wc")],Me)}},r={};function s(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={id:t,loaded:!1,exports:{}};return n[t].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=n,t=[],s.O=function(e,i,o,a){if(!i){var n=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],a=t[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&a||n>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(r=!1,a<n&&(n=a));if(r){t.splice(c--,1);var d=o();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,o,a]},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,{a:e}),e},i=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},s.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var a=Object.create(null);s.r(a);var n={};e=e||[null,i({}),i([]),i(i)];for(var r=2&o&&t;"object"==typeof r&&!~e.indexOf(r);r=i(r))Object.getOwnPropertyNames(r).forEach((function(e){n[e]=function(){return t[e]}}));return n.default=function(){return t},s.d(a,n),a},s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))},s.u=function(t){return t+"."+{"libs_icons-wc_icons_CloseButton_svg-web-components_action-dialog_dist_index_js-node_modules_c-584c75":"7fbc2fbc2f995f1a3b3c","card-actions-wc":"f7d7397bdabe756c92e4","cold-start-wc":"f9c2125bdbf6689f199a","esports-card":"7d1438990c09786ae989","family-card":"7b37a713641404c2f076","money-info-card-wc":"39db1787c67f10e64c08","social-bar-wc":"aeaa9d6d332ca39bb69e","sports-card-wc":"5921f5fc826042a837c2","sports-olympic-card-wc":"3a70e4b18c53a303788f","tips-card":"bc1b9b53ebb1441ccaba",toast:"3fe8c148164c3c0a62aa","experiences_sd-card-mask-wc_dist_SdCardMaskWC_js-libs_windows-widget-shared_dist_WidgetHelper-08fe4d":"295b397b09275e2cc32f","traffic-card-wc":"da0cdb8a49c9edf82c06","weather-card":"17296166a734281dad84","weather-minimap-wc":"746aacbdf25c7b1e4281","shopping-card-wce":"2c094d972fe7bdc87b26","sports-data-service":"c587e9873deccf9d6282","topic-data-connector":"7cde67a9cc45cf25558b","libs_core_dist_utilities_getFetchImpl_js-libs_location-service_dist_AutoSuggestService_index_-444324":"a1a1788bfd9548fe4d63","weather-card-connector":"1be15fe11d5c0cce9d0e","msnews/publishers-service-client":"c82e9d9ea5eef7687668","node_modules_intersection-observer_intersection-observer_js":"7ed8a4e215d160c64db4","web-components_native-ad-video_dist_index_js":"74e08d94a7a43f27c32b",nativeadsdecorations:"a9ca76c5c78d66fa5211",nativeadstemplates:"ef107712e0fdd97d7930","cold-start-gif":"05ea6cc30c2f0977775a","money-card-default":"e437a774b05c8cb5968c","money-card-dynamic-tabs":"f294a0f426bec25993c4","experiences_sports-card-wc_dist_components_sports-action-menu_index_js":"f32b233a79a6cd534b81","libs_sports-data-service_src_SportsDataResources_ts":"599315d931ff049645ee","experiences_sports-card-wc_dist_components_sports-match_index_js":"ac8af4e5318800631a55","experiences_sports-card-wc_dist_components_sports-leaderboard_index_js":"f55e38c7de2c4337aa6d","experiences_sports-card-wc_dist_components_sports-match-video_index_js":"bd84b0ca3cc8e3539bdd","experiences_sports-card-wc_dist_components_sports-superbowl_index_js":"749721bd394201eb22f0","experiences_sports-card-wc_dist_components_sports-marchmadness_index_js":"79b0c6438124a2885acd","experiences_sports-card-wc_dist_components_sports-article_index_js":"97020ccc616dd7ed2e0e","experiences_sports-card-wc_dist_components_sports-series-finals_index_js":"9c89c225da82f2110c53","experiences_sports-card-wc_dist_components_sports-match-overview_index_js":"b197349bde8c47267d3d","experiences_sports-card-wc_dist_components_sports-search_index_js":"e2932d8121a068eaf6f0","experiences_sports-card-wc_dist_components_sports-hidepopup_index_js":"e875ee388b82fc499b9d","experiences_sports-card-wc_dist_components_sports-hidereminder_index_js":"631e8cf805dcfdf29bc8","experiences_sports-card-wc_dist_components_sports-feedback_index_js":"30619f3d2766d5051e78","experiences_sports-card-wc_dist_components_sports-reminder_index_js":"95339c0e0a8764a993cc","experiences_sports-card-wc_dist_components_sports-dropdown-list_index_js":"897c333a98e100b98185","experiences_sports-card-wc_dist_components_sports-coldstart_index_js":"874de661c5597c3c9f1f","libs_sports-data-service_src_SportsTelemetry_ts":"73b1f583e0d0ec54432d","libs_sports-shared-wc_src_sports-card-followicon_index_ts":"eb8aa44231114f879268","web-components_traffic-card_dist_index_js":"0cdec74add793d1243be","web-components_traffic-location-settings_dist_index_js":"5940755a79cc2249798d","experiences_weather-card-wc_dist_components_weather-hide-dialog_index_js":"e3c30a676c57fdc6c293","experiences_weather-card-wc_dist_components_weather-hide-remind_index_js":"48cae898c41b3bae0e0a","experiences_weather-card-wc_dist_components_weather-report-issue_index_js":"f81ef49010604cb8ac24","libs_weather-shared-wc_dist_index_js":"59edac4f5f54fd2906dd","experiences_weather-card-wc_dist_helper_DataServiceClients_js":"3f93ab8b299c8ed1176f","weather-data-lazy-services":"a8dbb362f7249c0c1af0","libs_video-card-plugin-factory_dist_xandr_XandrAdManager_js":"2617c490d2a6fa83f9ae","libs_sports-data-service_dist_index_js":"e4f6c610b3a486449ef5"}[t]+".js"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.hmd=function(t){return(t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o={},a="@msnews/msnews-experiences:",s.l=function(t,e,i,n){if(o[t])o[t].push(e);else{var r,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==a+i){r=p;break}}r||(l=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",a+i),r.src=t,0!==r.src.indexOf(window.location.origin+"/")&&(r.crossOrigin="anonymous")),o[t]=[e];var h=function(e,i){r.onerror=r.onload=null,clearTimeout(g);var a=o[t];if(delete o[t],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(i)})),e)return e(i)},g=setTimeout(h.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=h.bind(null,r.onerror),r.onload=h.bind(null,r.onload),l&&document.head.appendChild(r)}},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.p="/bundles/v1/bingHomepage/buildNumber/",function(){{const t=s.e,e={};s.e=function(i){return t(i).catch((function(t){const o=e.hasOwnProperty(i)?e[i]:2;if(o<1)throw t;return new Promise((function(t){setTimeout((function(){e[i]=o-1,t(s.e(i))}),100)}))}))}}}(),function(){var t={experience:0};s.f.j=function(e,i){var o=s.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(i,a){o=t[e]=[i,a]}));i.push(o[2]=a);var n=s.p+s.u(e),r=new Error;s.l(n,(function(i){if(s.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",r.name="ChunkLoadError",r.type=a,r.request=n,o[1](r)}}),"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,a,n=i[0],r=i[1],l=i[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var c=l(s)}for(e&&e(i);d<n.length;d++)a=n[d],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(c)},i=self.webpackChunk_msnews_msnews_experiences=self.webpackChunk_msnews_msnews_experiences||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var l=s.O(void 0,["common","vendors","microsoft"],(function(){return s(26382)}));l=s.O(l)}();
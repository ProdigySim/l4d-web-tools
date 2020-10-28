(this["webpackJsonpl4d2-glow-picker"]=this["webpackJsonpl4d2-glow-picker"]||[]).push([[0],{103:function(e){e.exports=JSON.parse('[{"name":"cl_glow_ability","r":"1.0","g":"0.0","b":"0.0","description":"Infected Dominating Survivor"},{"name":"cl_glow_ability_colorblind","r":"0.3","g":"1.0","b":"1.0","description":"Infected Dominating Survivor"},{"name":"cl_glow_ghost_infected","r":"0.3","g":"0.4","b":"1.0","description":"Special Infected Ghost"},{"name":"cl_glow_infected","r":"0.3","g":"0.4","b":"1.0","description":"Special Infected"},{"name":"cl_glow_infected_vomit","r":"0.79","g":"0.07","b":"0.72","description":"Puked Survivors (as Infected)"},{"name":"cl_glow_item","r":"0.7","g":"0.7","b":"1.0","description":"Items / Buttons"},{"name":"cl_glow_item_far","r":"0.3","g":"0.4","b":"1.0","description":"Items / Buttons (Far)"},{"name":"cl_glow_survivor","r":"0.3","g":"0.4","b":"1.0","description":"Survivor Teammate"},{"name":"cl_glow_survivor_health_crit","r":"0.63","g":"0.098","b":"0.098","description":"Critical Health Survivor (1HP)"},{"name":"cl_glow_survivor_health_crit_colorblind","r":"0.047","g":"0.807","b":"0.807","description":"Critical Health Survivor (1HP) (Colorblind)"},{"name":"cl_glow_survivor_health_high","r":"0.039","g":"0.69","b":"0.196","description":"High Health Survivor (40+)"},{"name":"cl_glow_survivor_health_high_colorblind","r":"0.047","g":"0.694","b":"0.392","description":"High Health Survivor (40+) (Colorblind)"},{"name":"cl_glow_survivor_health_low","r":"0.70","g":"0.25","b":"0.0","description":"Low Health Survivor (<25)"},{"name":"cl_glow_survivor_health_low_colorblind","r":"0.047","g":"0.807","b":"0.807","description":"Low Health Survivor (<25) (Colorblind)"},{"name":"cl_glow_survivor_health_med","r":"0.59","g":"0.48","b":"0.032","description":"Medium Health Survivor (25-39)"},{"name":"cl_glow_survivor_health_med_colorblind","r":"0.694","g":"0.573","b":"0.098","description":"Medium Health Survivor (25-39) (Colorblind)"},{"name":"cl_glow_survivor_hurt","r":"1.0","g":"0.4","b":"0.0","description":"Incapped Survivor Teammate"},{"name":"cl_glow_survivor_vomit","r":"1.0","g":"0.4","b":"0.0","description":"Puked Survivor Teammate"},{"name":"cl_glow_thirdstrike_item","r":"1.0","g":"0.0","b":"0.0","description":"Items / Buttons (Black&White)"},{"name":"cl_glow_thirdstrike_item_colorblind","r":"0.3","g":"1.0","b":"1.0","description":"Items / Buttons (Black&White) (Colorblind)"},{"name":"cl_witch_glow_idle","r":"0.2","g":"0.4","b":"0.2","description":"Idle Witch (broken?)"},{"name":"cl_witch_glow_angry","r":"1.0","g":"0.0","b":"0.0","description":"Angry Witch (broken?)"}]')},105:function(e,n,r){e.exports=r(281)},114:function(e,n,r){},115:function(e,n,r){},281:function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),a=r(38),l=r.n(a),i=r(11),c=(r(114),r(115),r(4)),u=r(16),d=r(5),s=r(102);function v(){var e=Object(c.a)(["\n  appearance: none;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n"]);return v=function(){return e},e}var g=d.a.button(v()),b=r(12),f=["cl_glow_survivor_health_high","cl_glow_survivor_health_med","cl_glow_survivor_health_low","cl_glow_survivor_health_crit","cl_glow_survivor_health_high_colorblind","cl_glow_survivor_health_med_colorblind","cl_glow_survivor_health_low_colorblind","cl_glow_survivor_health_crit_colorblind","cl_glow_survivor","cl_glow_ability","cl_glow_survivor_hurt","cl_glow_survivor_vomit","cl_glow_item","cl_glow_item_far","cl_glow_thirdstrike_item","cl_glow_infected_vomit","cl_glow_ghost_infected","cl_glow_infected","cl_glow_ability_colorblind","cl_glow_thirdstrike_item_colorblind"],_=Object(b.a)((function(e){return e.glows.cvars}),(function(e){return e.glows.flags.cloneToColorblind}),(function(e,n){return f.map((function(n){return e.byId[n]})).filter((function(e){return!(n&&e.isColorblind)}))})),p=r(39),m=r(40),h=r(19),w=r(21);function j(e){return e.replace(/['"]/g,"")}var k=r(103);function x(e){return y(parseFloat(e))}function y(e){return Math.floor(255*e)}var E,O,C=(E=k.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{r:x(e.r),g:x(e.g),b:x(e.b),isColorblind:e.name.endsWith("colorblind")})})),O=function(e){return e.name},{byId:w.PojoMap.fromIndexing(E,O),orderedIds:E.map(O)}),I=Object(h.b)({name:"glows",initialState:{cvars:C,flags:{cloneToColorblind:!0}},reducers:{setGlowColor:function(e,n){var r=e.cvars.byId[n.payload.name],t=n.payload.value,o=t.r,a=t.g,l=t.b;if(r){r.r=o,r.g=a,r.b=l;var i=e.cvars.byId["".concat(r.name,"_colorblind")];e.flags.cloneToColorblind&&i&&(i.r=o,i.g=a,i.b=l)}},setCloneToColorblind:function(e,n){e.flags.cloneToColorblind=n.payload}}}),S=I.actions,T=S.setGlowColor,H=S.setCloneToColorblind,P=function(e){return function(n,r){var t=e.replace(/\/\/.*$/g,"").split(/;|(\r?\n)/g).filter((function(e){return!!e})).map((function(e){return e.split(/\s+/)})).filter((function(e){return 2===e.length})).map((function(e){var n=Object(u.a)(e,2),r=n[0],t=n[1];return{cvar:j(r),value:j(t)}})).filter((function(e){var n=e.value;return/^[\d.]+$/.test(n)})).map((function(e){var n=e.cvar,r=e.value;return{cvar:n,value:parseFloat(r)}})).filter((function(e){var n=e.value;return!isNaN(n)})),o=r().glows.cvars.byId;t.flatMap((function(e){var n=e.cvar,r=e.value,t=/^(.*)_([rgb])$/i.exec(n);if(!t)return[];var a=Object(u.a)(t,3),l=a[1],i=a[2];return w.PojoMap.has(o,l)?{name:l,value:Object(p.a)({},i,y(r))}:[]})).forEach((function(e){var t=e.name,o=e.value,a=w.PojoMap.get(r().glows.cvars.byId,t);a&&n(T({name:t,value:Object(m.a)({r:a.r,g:a.g,b:a.b},o)}))}))}},B=I.reducer;function M(e){return"".concat(e/255)}var G=Object(b.a)((function(e){return e.glows.cvars}),(function(e){return e.glows.flags.cloneToColorblind}),(function(e,n){return e.orderedIds.flatMap((function(r){var t=n?r.replace(/_colorblind$/,""):r,o=e.byId[t];return["".concat(r,'_r "').concat(M(o.r),'";'),"".concat(r,'_g "').concat(M(o.g),'";'),"".concat(r,'_b "').concat(M(o.b),'";')]})).join("\n")+"\n"}));function D(){var e=Object(c.a)(["\n  border: 2px dotted white;\n  background-color: #4a505a;\n  border-radius: 8px;\n  padding: 8px;\n"]);return D=function(){return e},e}var W=d.a.pre(D()),F=function(){var e=Object(t.useState)(!1),n=Object(u.a)(e,2),r=n[0],a=n[1],l=Object(i.c)(G);return Object(t.useEffect)((function(){a(!1)}),[l]),o.a.createElement("div",null,o.a.createElement("h2",null,"Generated Glows"),o.a.createElement("p",null,"Copy paste these into your autoexec."),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(l),a(!0)}},r?"Copied!":"Copy to Clipboard")),o.a.createElement(W,null,l))},$=r(27),L=r.n($),N=r(62),A=r(104);function J(){var e=Object(c.a)(["\n  width: 320px;\n  height: 320px;\n  border: 4px dashed grey;\n  background-color: white;\n  border-radius: 16px;\n  text-align: center;\n  padding: 16px;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  color: black;\n"]);return J=function(){return e},e}function z(){var e=Object(c.a)(["\n  display: none;\n  .file-drop-dragging-over-frame & {\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(255, 255, 255, 0.6);\n  }\n"]);return z=function(){return e},e}function R(){var e=Object(c.a)(["\n  display: none;\n"]);return R=function(){return e},e}function U(){var e=Object(c.a)(["\n  .file-drop {\n    display: inline-block;\n    padding-right: 8px;\n  }\n  .file-drop-target {\n    display: inline-block;\n  }\n"]);return U=function(){return e},e}var q=d.a.div(U()),K=d.a.input(R()),Q=d.a.div(z()),V=d.a.div(J()),X=function(){var e=Object(t.useRef)(null),n=Object(i.b)(),r=function(){var e=Object(N.a)(L.a.mark((function e(n){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.target.files,a(r);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),a=function(){var e=Object(N.a)(L.a.mark((function e(r){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r&&r.length>0)){e.next=5;break}return e.next=3,r[0].text();case 3:t=e.sent,n(P(t));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return o.a.createElement(q,null,o.a.createElement("div",null,o.a.createElement(A.FileDrop,{onTargetClick:function(){var n;null===(n=e.current)||void 0===n||n.click()},onDrop:a},o.a.createElement("button",null,"Browse"),o.a.createElement(Q,null,o.a.createElement(V,null,"Drop a CFG file anywhere to load your glows."))),"for a .cfg file or drag one here."),o.a.createElement(K,{onChange:r,ref:e,type:"file"}))};function Y(){var e=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 16px auto;\n\n  > div {\n    flex: 0 0 25%;\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(c.a)(["\n  width: 50px;\n  height: 50px;\n  display: block;\n  background-color: ",";\n  box-shadow: 0 0 6px 4px ",";\n"]);return Z=function(){return e},e}function ee(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  padding: 16px 0;\n"]);return ee=function(){return e},e}function ne(){var e=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return ne=function(){return e},e}function re(){var e=Object(c.a)(["\n  position: absolute;\n"]);return re=function(){return e},e}var te=function(e){var n=e.glow,r=Object(i.b)(),a=Object(t.useState)(!1),l=Object(u.a)(a,2),c=l[0],d=l[1],v=n.r,b=n.g,f=n.b;return o.a.createElement(ie,null,o.a.createElement("div",null,o.a.createElement(g,{onClick:function(){return d(!c)}},o.a.createElement(ce,n)),c&&o.a.createElement(ae,null,o.a.createElement(le,{onClick:function(){return d(!1)}}),o.a.createElement(s.SketchPicker,{disableAlpha:!0,color:{r:v,g:b,b:f},onChange:function(e){return r(T({name:n.name,value:e.rgb}))}}))),o.a.createElement("pre",null,n.name),o.a.createElement("span",null,n.description))};function oe(e){return"rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")")}var ae=d.a.div(re()),le=d.a.div(ne()),ie=d.a.div(ee()),ce=Object(d.a)("div")(Z(),(function(e){return oe(e)}),(function(e){return oe(e)}));function ue(){var e=Object(i.c)(_),n=Object(i.c)((function(e){return e.glows.flags.cloneToColorblind})),r=Object(i.b)();return o.a.createElement("div",null,o.a.createElement(X,null),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){var n=e.currentTarget.checked;return r(H(!!n))}}),"Clone colors to colorblind cvars."),o.a.createElement(de,null,e.map((function(e){return o.a.createElement(te,{glow:e,key:e.name})}))),o.a.createElement(F,null))}var de=d.a.div(Y());var se=function(){return Object(t.useEffect)((function(){document.title="L4D2 Glow Picker"}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"L4D2 Glow Picker"),o.a.createElement("p",null,"Upload a cfg file to import glows, or start customizing from the default glows."),o.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=r(10),ge=Object(ve.c)({glows:B}),be=Object(h.a)({reducer:ge});l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:be},o.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.9864a409.chunk.js.map
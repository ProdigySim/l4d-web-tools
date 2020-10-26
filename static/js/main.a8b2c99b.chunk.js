(this["webpackJsonpl4d-web-tools"]=this["webpackJsonpl4d-web-tools"]||[]).push([[0],{100:function(e){e.exports=JSON.parse('[{"name":"cl_glow_ability","r":"1.0","g":"0.0","b":"0.0","description":"Infected Dominating Survivor"},{"name":"cl_glow_ability_colorblind","r":"0.3","g":"1.0","b":"1.0","description":"Infected Dominating Survivor"},{"name":"cl_glow_ghost_infected","r":"0.3","g":"0.4","b":"1.0","description":"Special Infected Ghost"},{"name":"cl_glow_infected","r":"0.3","g":"0.4","b":"1.0","description":"Special Infected"},{"name":"cl_glow_infected_vomit","r":"0.79","g":"0.07","b":"0.72","description":"Puked Survivors (as Infected)"},{"name":"cl_glow_item","r":"0.7","g":"0.7","b":"1.0","description":"Items / Buttons"},{"name":"cl_glow_item_far","r":"0.3","g":"0.4","b":"1.0","description":"Items / Buttons (Far)"},{"name":"cl_glow_survivor","r":"0.3","g":"0.4","b":"1.0","description":"Survivor Teammate"},{"name":"cl_glow_survivor_health_crit","r":"0.63","g":"0.098","b":"0.098","description":"Critical Health Survivor (1HP)"},{"name":"cl_glow_survivor_health_crit_colorblind","r":"0.047","g":"0.807","b":"0.807","description":"Critical Health Survivor (1HP) (Colorblind)"},{"name":"cl_glow_survivor_health_high","r":"0.039","g":"0.69","b":"0.196","description":"High Health Survivor (40+)"},{"name":"cl_glow_survivor_health_high_colorblind","r":"0.047","g":"0.694","b":"0.392","description":"High Health Survivor (40+) (Colorblind)"},{"name":"cl_glow_survivor_health_low","r":"0.70","g":"0.25","b":"0.0","description":"Low Health Survivor (<25)"},{"name":"cl_glow_survivor_health_low_colorblind","r":"0.047","g":"0.807","b":"0.807","description":"Low Health Survivor (<25) (Colorblind)"},{"name":"cl_glow_survivor_health_med","r":"0.59","g":"0.48","b":"0.032","description":"Medium Health Survivor (25-39)"},{"name":"cl_glow_survivor_health_med_colorblind","r":"0.694","g":"0.573","b":"0.098","description":"Medium Health Survivor (25-39) (Colorblind)"},{"name":"cl_glow_survivor_hurt","r":"1.0","g":"0.4","b":"0.0","description":"Incapped Survivor Teammate"},{"name":"cl_glow_survivor_vomit","r":"1.0","g":"0.4","b":"0.0","description":"Puked Survivor Teammate"},{"name":"cl_glow_thirdstrike_item","r":"1.0","g":"0.0","b":"0.0","description":"Items / Buttons (Black&White)"},{"name":"cl_glow_thirdstrike_item_colorblind","r":"0.3","g":"1.0","b":"1.0","description":"Items / Buttons (Black&White) (Colorblind)"},{"name":"cl_witch_glow_idle","r":"0.2","g":"0.4","b":"0.2","description":"Idle Witch (broken?)"},{"name":"cl_witch_glow_angry","r":"1.0","g":"0.0","b":"0.0","description":"Angry Witch (broken?)"}]')},101:function(e,n,r){e.exports=r(276)},110:function(e,n,r){},111:function(e,n,r){},276:function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),l=r(35),c=r.n(l),i=r(14),a=(r(110),r(111),r(12)),u=r(36),_=r(13),d=r(99);function s(){var e=Object(a.a)(["\n  appearance: none;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n"]);return s=function(){return e},e}var b=_.a.button(s()),v=r(9),g=["cl_glow_survivor_health_high","cl_glow_survivor_health_med","cl_glow_survivor_health_low","cl_glow_survivor_health_crit","cl_glow_survivor_health_high_colorblind","cl_glow_survivor_health_med_colorblind","cl_glow_survivor_health_low_colorblind","cl_glow_survivor_health_crit_colorblind","cl_glow_survivor","cl_glow_ability","cl_glow_survivor_hurt","cl_glow_survivor_vomit","cl_glow_item","cl_glow_item_far","cl_glow_thirdstrike_item","cl_glow_infected_vomit","cl_glow_ghost_infected","cl_glow_infected","cl_glow_ability_colorblind","cl_glow_thirdstrike_item_colorblind"],m=Object(v.a)((function(e){return e.glows.cvars}),(function(e){return e.glows.flags.cloneToColorblind}),(function(e,n){return g.map((function(n){return e.byId[n]})).filter((function(e){return!(n&&e.isColorblind)}))})),h=r(59),f=r(19),p=r(58);var w=r(100);function C(e){return Math.floor(255*parseFloat(e))}var E,j,k=Object(f.a)({name:"glows",initialState:{cvars:(E=w.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{r:C(e.r),g:C(e.g),b:C(e.b),isColorblind:e.name.endsWith("colorblind")})})),j=function(e){return e.name},{byId:p.PojoMap.fromIndexing(E,j),orderedIds:E.map(j)}),flags:{cloneToColorblind:!0}},reducers:{setGlowColor:function(e,n){var r=e.cvars.byId[n.payload.name],t=n.payload.value,o=t.r,l=t.g,c=t.b;if(r){r.r=o,r.g=l,r.b=c;var i=e.cvars.byId["".concat(r.name,"_colorblind")];e.flags.cloneToColorblind&&i&&(i.r=o,i.g=l,i.b=c)}},setCloneToColorblind:function(e,n){e.flags.cloneToColorblind=n.payload}}}),O=k.actions,y=O.setGlowColor,x=O.setCloneToColorblind,S=k.reducer;function I(e){return"".concat(e/255)}var T=Object(v.a)((function(e){return e.glows.cvars}),(function(e){return e.glows.flags.cloneToColorblind}),(function(e,n){return e.orderedIds.flatMap((function(r){var t=n?r.replace(/_colorblind$/,""):r,o=e.byId[t];return["".concat(r,'_r "').concat(I(o.r),'";'),"".concat(r,'_g "').concat(I(o.g),'";'),"".concat(r,'_b "').concat(I(o.b),'";')]})).join("\n")+"\n"}));function H(){var e=Object(a.a)(["\n  border: 2px dotted white;\n  background-color: #4a505a;\n  border-radius: 8px;\n  padding: 8px;\n"]);return H=function(){return e},e}var B=_.a.pre(H()),P=function(){var e=Object(t.useState)(!1),n=Object(u.a)(e,2),r=n[0],l=n[1],c=Object(i.c)(T);return Object(t.useEffect)((function(){l(!1)}),[c]),o.a.createElement("div",null,o.a.createElement("h2",null,"Generated Glows"),o.a.createElement("p",null,"Copy paste these into your autoexec."),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){navigator.clipboard.writeText(c),l(!0)}},r?"Copied!":"Copy to Clipboard")),o.a.createElement(B,null,c))};function G(){var e=Object(a.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 16px auto;\n\n  > div {\n    flex: 0 0 25%;\n  }\n"]);return G=function(){return e},e}function W(){var e=Object(a.a)(["\n  width: 50px;\n  height: 50px;\n  display: block;\n  background-color: ",";\n  box-shadow: 0 0 6px 4px ",";\n"]);return W=function(){return e},e}function M(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  padding: 16px 0;\n"]);return M=function(){return e},e}function D(){var e=Object(a.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return D=function(){return e},e}function L(){var e=Object(a.a)(["\n  position: absolute;\n"]);return L=function(){return e},e}var A=function(e){var n=e.glow,r=Object(i.b)(),l=Object(t.useState)(!1),c=Object(u.a)(l,2),a=c[0],_=c[1],s=n.r,v=n.g,g=n.b;return o.a.createElement($,null,o.a.createElement("div",null,o.a.createElement(b,{onClick:function(){return _(!a)}},o.a.createElement(q,n)),a&&o.a.createElement(F,null,o.a.createElement(N,{onClick:function(){return _(!1)}}),o.a.createElement(d.SketchPicker,{disableAlpha:!0,color:{r:s,g:v,b:g},onChange:function(e){return r(y({name:n.name,value:e.rgb}))}}))),o.a.createElement("pre",null,n.name),o.a.createElement("span",null,n.description))};function J(e){return"rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")")}var F=_.a.div(L()),N=_.a.div(D()),$=_.a.div(M()),q=Object(_.a)("div")(W(),(function(e){return J(e)}),(function(e){return J(e)}));function z(){var e=Object(i.c)(m),n=Object(i.c)((function(e){return e.glows.flags.cloneToColorblind})),r=Object(i.b)();return o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){var n=e.currentTarget.checked;return r(x(!!n))}}),"Clone colors to colorblind cvars."),o.a.createElement(K,null,e.map((function(e){return o.a.createElement(A,{glow:e,key:e.name})}))),o.a.createElement(P,null))}var K=_.a.div(G());var Q=function(){return Object(t.useEffect)((function(){document.title="L4D2 Glow Picker"}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"L4D2 Glow Picker"),o.a.createElement("p",null,"Select some glow colors here."),o.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=r(8),U=Object(R.c)({glows:S}),V=Object(R.e)(U);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:V},o.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.a8b2c99b.chunk.js.map
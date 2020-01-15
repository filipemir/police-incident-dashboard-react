(window["webpackJsonpbos-criminal-incidence"]=window["webpackJsonpbos-criminal-incidence"]||[]).push([[0],{121:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),O=a.n(i),o=a(12),s=a(11),c=a.n(s),N=a(59),l=a.n(N),E=a(10),R=a(180),u=a(182),V=a(181),I=(a(74),a(183)),L=a(184),T=a(27),d=a.n(T),P=a(35),G=new Set;Object.values(P).forEach((function(e){var t=e.GROUP;G.add(t)}));var U=Object(I.a)(L.a).domain(G);function m(e){var t=parseInt(e.OFFENSE_CODE,10),a=P[t];return a?a.GROUP:"Other"}var p={A1:{name:"Downtown"},A7:{name:"East Boston"},A15:{name:"Charlestown"},B2:{name:"Roxbury"},B3:{name:"Mattapan"},C6:{name:"South Boston"},C11:{name:"Dorchester"},D4:{name:"South End"},D14:{name:"Brighton"},E5:{name:"West Roxbury"},E13:{name:"Jamaica Plain"},E18:{name:"Hyde Park"}};function f(e){var t=function(e){var t=e.districtCode;if(d()(t))return;return p[t.toUpperCase()]}({districtCode:e.districtCode});return t&&t.name}var b="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",g='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',h=[42.32390487760298,-71.07416152954103],y=[[42.393518,-71.00516847],[42.24042076,-71.16843346]];function v(e,t){var a=m(e.properties);return E.circleMarker(t,{radius:4,color:U(a),weight:1,opacity:.5,fillOpacity:.25})}function A(e,t){var a=e.properties;t.bindPopup('<table class="map-popup"><tbody>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">Description:</th>\n            <td class="map-popup__field-val">'.concat(a.OFFENSE_DESCRIPTION||"N/A",'</td>\n        </tr>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">Shooting:</th>\n            <td class="map-popup__field-val">').concat("1"===a.SHOOTING?"Yes":"No",'</td>\n        </tr>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">Date:</th>\n            <td class="map-popup__field-val">').concat(a.OCCURRED_ON_DATE?c()(a.OCCURRED_ON_DATE).format("ll"):"N/A",'</td>\n        </tr>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">Time:</th>\n            <td class="map-popup__field-val">').concat(a.OCCURRED_ON_DATE?c()(a.OCCURRED_ON_DATE).format("hh:mma"):"N/A",'</td>\n        </tr>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">Street:</th>\n            <td class="map-popup__field-val">').concat(a.STREET||"N/A",'</td>\n        </tr>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">District:</th>\n            <td class="map-popup__field-val">').concat(a.DISTRICT?f({districtCode:a.DISTRICT})+" ("+a.DISTRICT+")":"N/A",'</td>\n        </tr>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">Reporting Area:</th>\n            <td class="map-popup__field-val">').concat(a.REPORTING_AREA||"N/A",'</td>\n        </tr>\n        <tr class="map-popup__field">\n            <th class="map-popup__field-name">Incident Number:</th>\n            <td class="map-popup__field-val">').concat(a.INCIDENT_NUMBER||"N/A","</td>\n        </tr>\n    </tbody></table>"))}function S(e){var t=e.incidents,a=l.a.parse(t,{Point:["Lat","Long"]});return r.a.createElement("div",{className:"map-root"},r.a.createElement(R.a,{center:h,bounds:y},r.a.createElement(u.a,{url:b,attribution:g}),r.a.createElement(V.a,{key:Math.random(),data:a,pointToLayer:v,onEachFeature:A})))}var Y=a(62),D=a(19),_=a(32),C=a.n(_),w=a(65),M=a.n(w),x=(a(121),a(9)),F=a(68),k=a(66),j=a.n(k),B=(a(167),{value:7,unit:"days"}),H=[{value:1,unit:"day"},B,{value:30,unit:"days"}],W=H.map((function(e){return{value:e,label:"".concat(e.value," ").concat(e.unit)}}));function z(e){var t=e.timeframe,a=e.onTimeframeChange,n=H.findIndex((function(e){return j()(e,t)}));return r.a.createElement("div",{className:"timeframe-picker"},r.a.createElement(F.a,{className:"timeframe-picker__selector",classNamePrefix:"react-select",value:W[n],onChange:function(e){return a(e.value)},options:W,theme:function(e){return Object(x.a)({},e,{borderRadius:0,colors:Object(x.a)({},e.colors,{primary:"#fefffe",primary75:"#1086ff",primary25:"#1086ff",neutral0:"#33323c"}),spacing:Object(x.a)({},e.spacing,{menuGutter:0,controlHeight:30})})}}))}var q=a(44),J=a.n(q),$=(a(168),"load-incidents"),K="load-incidents-and-reset-filters",Q="toggle-group",X="toggle-district",Z="hide-all-groups",ee="hide-all-districts",te="show-all-groups",ae="show-all-districts",ne="reset-filters";function re(e){return{type:Q,payload:{group:e}}}function ie(e){return{type:X,payload:{district:e}}}function Oe(){return{type:Z}}function oe(){return{type:ee}}function se(e){return e.sort((function(e,t){var a=c()(e.OCCURRED_ON_DATE),n=c()(t.OCCURRED_ON_DATE);return a.isValid()&&n.isValid()?n.diff(a):-1}))}var ce={incidents:{map:{},sortedByDate:[],visibleIds:new Set,hiddenIds:new Set},counts:{total:0,totalVisible:0,perGroup:{},perDistrict:{}},filters:{visibleGroups:new Set,groupsChanged:!1,visibleDistricts:new Set,districtsChanged:!1}};function Ne(e){var t=e.incident,a=e.filters,n=a.visibleGroups,r=a.visibleDistricts;return n.has(m(t))&&r.has(t.DISTRICT)}function le(e,t){var a=t.incidents,n=new Set,r=e.filters.groupsChanged,i=e.filters.districtsChanged,O=r?e.filters.visibleGroups:new Set,o=i?e.filters.visibleDistricts:new Set,s={},c={},N={},l=function(e){var t=0,a=0,n=e.filter((function(e){if(!e.Lat||!e.Long)return t+=1,!1;var n=parseInt(e.Lat,10),r=parseInt(e.Long,10);return 0!==n&&0!==r||(a+=1,!1)}));return t&&console.log("Omitting ".concat(t," incidents with null lat/longs")),a&&console.log("Omitting ".concat(a," incidents with 0s for lat/longs")),n}(a),E=0,R=0;return function(e){var t={};e.forEach((function(e){var a=parseInt(e.OFFENSE_CODE,10);P[a]||(!t[e.OFFENSE_CODE]&&(t[e.OFFENSE_CODE]=new Set),t[e.OFFENSE_CODE].add(e.OFFENSE_DESCRIPTION))})),d()(t)||(console.log("Unknown code groups found:"),console.log(t))}(l),l.forEach((function(e){var t=m(e),a=e.DISTRICT;s[e._clientSideId]=e,E+=1,!c[t]&&(c[t]=0),c[t]+=1,!r&&O.add(t),!N[a]&&(N[a]=0),N[a]+=1,!i&&o.add(a)})),l.forEach((function(e){Ne({incident:e,filters:{visibleDistricts:o,visibleGroups:O}})&&(n.add(e._clientSideId),R+=1)})),{incidents:{map:s,hiddenIds:new Set,visibleIds:n,sortedByDate:se(l)},counts:{total:E,totalVisible:R,perGroup:c,perDistrict:N},filters:{visibleGroups:O,visibleDistricts:o}}}function Ee(e,t){var a=e.incidents,n=e.counts,r=new Set,i=new Set,O=0;return Object.values(a.map).forEach((function(e){Ne({incident:e,filters:t})?(r.add(e._clientSideId),O+=1):i.add(e._clientSideId)})),Object(x.a)({},e,{incidents:Object(x.a)({},a,{visibleIds:r,hiddenIds:i}),counts:Object(x.a)({},n,{totalVisible:O}),filters:t})}function Re(e){return Object(x.a)({},e,{filters:{visibleGroups:new Set(Object.keys(e.counts.perGroup)),groupsChanged:!1,visibleDistricts:new Set(Object.keys(e.counts.perDistrict)),districtsChanged:!1}})}function ue(e,t){var a=t.type,n=t.payload;switch(a){case $:return le(e,n);case K:return le(Re(e),n);case Q:case X:return function(e,t){var a=t.group,n=t.district,r=Object(x.a)({},e.filters);return a&&(r.groupsChanged=!0,r.visibleGroups.has(a)?r.visibleGroups.delete(a):r.visibleGroups.add(a)),n&&(r.districtsChanged=!0,r.visibleDistricts.has(n)?r.visibleDistricts.delete(n):r.visibleDistricts.add(n)),Ee(e,r)}(e,n);case te:return function(e){var t=e.filters,a=e.counts;return Ee(e,Object(x.a)({},t,{visibleGroups:new Set(Object.keys(a.perGroup)),groupsChanged:!0}))}(e);case ae:return function(e){var t=e.filters,a=e.counts;return Ee(e,Object(x.a)({},t,{visibleDistricts:new Set(Object.keys(a.perDistrict)),districtsChanged:!0}))}(e);case Z:return function(e){var t=e.filters;return Ee(e,Object(x.a)({},t,{visibleGroups:new Set,groupsChanged:!0}))}(e);case ee:return function(e){var t=e.filters;return Ee(e,Object(x.a)({},t,{visibleDistricts:new Set,districtsChanged:!0}))}(e);case ne:return Re(e);default:throw Error("Invalid incidents reducer action: ".concat(a))}}function Ve(e){var t=e.incidents,a=t.visibleIds,n=t.map,r=[];return a.forEach((function(e){r.push(n[e])})),r}var Ie=function(){return Object(n.useReducer)(ue,ce)};a(169);function Le(e){var t=e.title,a=e.summary,i=e.children,O=e.onSelectAll,s=e.onUnselectAll,c=Object(n.useState)(!1),N=Object(o.a)(c,2),l=N[0],E=N[1];return r.a.createElement("div",{className:"filterer ".concat(l?"filterer__expanded":"")},r.a.createElement("div",{className:"filterer-header",onClick:function(){return E(!l)}},r.a.createElement("span",{className:"filterer-title"},t),r.a.createElement("div",{className:"filterer-header-arrows ".concat(l?"filterer-header-arrows__point-up":"")},r.a.createElement(D.a,{src:C.a}))),!l&&a&&r.a.createElement("div",{className:"filterer-summary",onClick:function(){return E(!l)}},a),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"filterer-items"},i),r.a.createElement("div",{className:"filterer-controls"},r.a.createElement("div",{className:"filterer-bulk-actions"},r.a.createElement("div",{className:"filterer-bulk-action",onClick:O},r.a.createElement("span",null,"Select All")),r.a.createElement("div",{className:"filterer-bulk-action",onClick:s},r.a.createElement("span",null,"Unselect All"))))))}var Te="en-US";function de(e){var t=e.incidentsState,a=e.dispatchIncidentsAction,n=function(e){var t=e.counts.perGroup,a=Object.keys(t);return a.sort((function(e,a){return"Other"===e?1:"Other"===a?-1:t[a]-t[e]})),a}(t),i=t.filters.visibleGroups,O=n.length.toLocaleString(Te),o=i.size.toLocaleString(Te);return r.a.createElement("div",{className:"incident-group-filter"},r.a.createElement(Le,{title:"Incident Groups",summary:i.size===n.length?"Showing all ".concat(O," incident groups"):"Showing ".concat(o," of ").concat(O," incident groups"),onSelectAll:function(){return a({type:te})},onUnselectAll:function(){return a(Oe())}},n.map((function(e,n){var O=function(e,t){var a=t.group;return e.counts.perGroup[a]}(t,{group:e}).toLocaleString(Te),o=i.has(e),s=U(e);return r.a.createElement("div",{key:"input-group-".concat(n),className:"incident-group ".concat(o?"":"inactive"),onClick:function(){return a(re(e))},onDoubleClick:function(){a(Oe()),a(re(e))}},r.a.createElement("div",{className:"incident-group__dot",style:{backgroundColor:o?J()(s,.5):null,borderColor:o?J()(s,1):"#d3d3d3"}}),r.a.createElement("span",{className:"incident-group__name"},e),r.a.createElement("span",{className:"incident-group__count"},O))}))))}a(170);function Pe(e){var t=e.incidentsState,a=e.dispatchIncidentsAction,n=function(e){var t=e.counts.perDistrict,a=Object.keys(t);return a.sort((function(e,a){return t[a]-t[e]})),a}(t).filter((function(e){return!!e})),i=t.filters.visibleDistricts,O=n.length.toLocaleString(Te),o=i.size.toLocaleString(Te);return r.a.createElement("div",{className:"district-filter"},r.a.createElement(Le,{title:"Districts",summary:i.size===n.length?"Showing all ".concat(O," districts"):"Showing ".concat(o," of ").concat(O," districts"),onSelectAll:function(){return a({type:ae})},onUnselectAll:function(){return a(oe())}},n.map((function(e,n){var O=function(e,t){var a=t.district;return e.counts.perDistrict[a]}(t,{district:e}).toLocaleString(Te),o=i.has(e),s=f({districtCode:e});return s?r.a.createElement("div",{key:"district-".concat(n),className:"district ".concat(o?"":"inactive"),onClick:function(){return a(ie(e))},onDoubleClick:function(){a(oe()),a(ie(e))}},r.a.createElement("div",{className:"district__marker"}),r.a.createElement("span",{className:"district__name"},s),r.a.createElement("span",{className:"district__count"},O)):null}))))}function Ge(e){var t=e.timeframe,a=e.dates,i=e.onTimeframeChange,O=e.isLoadingIncidents,s=e.incidentsState,c=e.dispatchIncidentsAction,N=a.startDate,l=a.endDate,E=s.counts.total,R=function(e){return e.counts.totalVisible}(s),u=E>0,V=Object(n.useState)(!1),I=Object(o.a)(V,2),L=I[0],T=I[1];return r.a.createElement("div",{className:"menu-root ".concat(L?"collapsed":"")},r.a.createElement("div",{className:"menu-title"},L&&r.a.createElement("h1",null,"BPI"),!L&&r.a.createElement("h1",null,"Boston ",r.a.createElement("br",null)," Police Incidents")),L&&r.a.createElement("div",{className:"menu-content menu-controls-icon",onClick:function(){return T(!1)}},r.a.createElement(D.a,{src:M.a})),!L&&r.a.createElement("div",{className:"menu-content"},r.a.createElement("div",{className:"menu-section menu-date-section"},r.a.createElement("h2",{className:"menu-section-title"},"Date Range"),r.a.createElement("span",{className:"menu-dates"},"".concat(N.format(N.year===l.year?"MMM D":"MMM D, YYYY")," \u2013 ").concat(l.format("MMM D, YYYY"))),r.a.createElement(z,{timeframe:t,dates:a,onTimeframeChange:i})),O&&r.a.createElement("div",{className:"menu-loader"},r.a.createElement(Y.BarLoader,{size:50,color:"#98ff98",loading:!0})),!O&&!u&&r.a.createElement("div",{className:"menu-summary"},"Oops. We couldn't find any incidents with location data for this date range"),!O&&u&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu-section"},r.a.createElement("div",{className:"menu-summary"},"Showing ".concat(R===E?"".concat(E.toLocaleString(Te)):"".concat(R.toLocaleString(Te)," of ").concat(E.toLocaleString(Te))," incidents"))),r.a.createElement("div",{className:"menu-section menu-picker"},r.a.createElement(de,{incidentsState:s,dispatchIncidentsAction:c})),r.a.createElement("div",{className:"menu-section menu-picker"},r.a.createElement(Pe,{incidentsState:s,dispatchIncidentsAction:c})))),r.a.createElement("div",{className:"menu-footer"},r.a.createElement("div",{className:"menu-collapser",onClick:function(){return T(!L)}},r.a.createElement("div",{className:"menu-arrows"},r.a.createElement(D.a,{src:C.a}))),L&&r.a.createElement("div",{className:"menu-attribution"},r.a.createElement("a",{href:"https://www.codeforboston.org/",target:"_blank",rel:"noopener noreferrer"},"C4B")),!L&&r.a.createElement("div",{className:"menu-attribution"},"Made with \u2665 by"," ",r.a.createElement("a",{href:"https://www.codeforboston.org/",target:"_blank",rel:"noopener noreferrer"},"Code for Boston"),r.a.createElement("br",null),"Data from"," ",r.a.createElement("a",{href:"https://data.boston.gov/dataset/crime-incident-reports-august-2015-to-date-source-new-system/resource/12cb3883-56f5-47de-afa5-3b1cf61b257b",target:"_blank",rel:"noopener noreferrer"},"boston.data.gov"))))}a(171);function Ue(e){var t=e.timeframe,a=e.endDate,n=void 0===a?c()():a,r=t.value,i=t.unit;return{startDate:c()(n).subtract(r,i),endDate:n}}var me=a(36),pe=a.n(me),fe="https://data.boston.gov/api/3/action/datastore_search_sql?sql=",be="YYYY-MM-DD hh:mm",ge=0;function he(e){var t,a,n,r,i;return pe.a.async((function(O){for(;;)switch(O.prev=O.next){case 0:return t=e.startDate,a=e.endDate,n='SELECT * \n        FROM "12cb3883-56f5-47de-afa5-3b1cf61b257b" \n        WHERE "OCCURRED_ON_DATE" BETWEEN \''.concat(t.format(be),"' AND '").concat(a.format(be),"'\n    "),O.next=4,pe.a.awrap(fetch(fe+n));case 4:return r=O.sent,O.next=7,pe.a.awrap(r.json());case 7:return i=O.sent,O.abrupt("return",i.result.records.map((function(e){return ge+=1,Object(x.a)({},e,{_clientSideId:"_i".concat(ge)})})));case 9:case"end":return O.stop()}}))}var ye=a(67),ve=a.n(ye);a(174),a(175);function Ae(e){var t=e.incident,a=m(t),n=U(a);return r.a.createElement("div",{className:"incident-card",style:{borderColor:n}},r.a.createElement("div",{className:"incident-time"},c()(t.OCCURRED_ON_DATE).format("llll")),r.a.createElement("div",{className:"incident-description"},r.a.createElement("span",{className:"incident-group-name"},a),r.a.createElement("span",{className:"incident-description-full"},t.OFFENSE_DESCRIPTION)),r.a.createElement("div",{className:"incident-location"},r.a.createElement("span",{className:"incident-district"},f({districtCode:t.DISTRICT})),t.STREET&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,", "),r.a.createElement("span",{className:"incident-street"},t.STREET))))}var Se=30;function Ye(e){var t=e.incidents,a=e.onIncidentClick,i=Object(n.useState)([]),O=Object(o.a)(i,2),s=O[0],c=O[1],N=Object(n.useState)(Se),l=Object(o.a)(N,2),E=l[0],R=l[1];if(Object(n.useEffect)((function(){c(t.slice(0,E))}),[t,E]),!t||0===t.length)return null;var u=s.map((function(e){return r.a.createElement(Ae,{key:"incident-card-".concat(e._clientSideId),incident:e,onIncidentClick:a})}));return r.a.createElement("div",{className:"incident-feed"},r.a.createElement("h2",{className:"incident-feed-title"},"Most Recent Incidents"),r.a.createElement("div",{className:"incident-feed-content"},r.a.createElement(ve.a,{pageStart:1,loadMore:function(e){R(e*Se)},hasMore:E<=t.length,loader:r.a.createElement("div",{className:"incident-feed-loading",key:"loading-".concat(E)},"Loading more..."),useWindow:!1},u)))}var De=c()();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));O.a.render(r.a.createElement((function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],O=Object(n.useState)(B),s=Object(o.a)(O,2),c=s[0],N=s[1],l=Object(n.useState)(Ue({timeframe:c,endDate:De})),E=Object(o.a)(l,2),R=E[0],u=E[1],V=Ie(),I=Object(o.a)(V,2),L=I[0],T=I[1];return Object(n.useEffect)((function(){var e=Ue({timeframe:c,endDate:De}),t=e.startDate,a=e.endDate;u({startDate:t,endDate:a}),he({startDate:t,endDate:a}).then((function(e){T(function(e){return{type:K,payload:{incidents:e}}}(e)),i(!1)}));var n=setInterval((function(){he({startDate:t,endDate:a}).then((function(e){T(function(e){return{type:$,payload:{incidents:e}}}(e)),i(!1)}))}),3e5);return function(){return clearInterval(n)}}),[c,T]),r.a.createElement("div",{id:"app-root"},r.a.createElement(Ge,{timeframe:c,dates:R,onTimeframeChange:function(e){i(!0),N(e)},isLoadingIncidents:a,incidentsState:L,dispatchIncidentsAction:T}),r.a.createElement(S,{incidents:Ve(L)}),r.a.createElement(Ye,{incidents:Ve(L)}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,a){e.exports=a.p+"static/media/arrows.6820edc8.svg"},35:function(e){e.exports=JSON.parse('{"111":{"GROUP":"Homicide","VIOLENT":"Y"},"112":{"GROUP":"Manslaughter","VIOLENT":"Y"},"113":{"GROUP":"Manslaughter","VIOLENT":"Y"},"114":{"GROUP":"Manslaughter","VIOLENT":"Y"},"121":{"GROUP":"Manslaughter","VIOLENT":"Y"},"122":{"GROUP":"Manslaughter","VIOLENT":"Y"},"123":{"GROUP":"Manslaughter","VIOLENT":"Y"},"124":{"GROUP":"Manslaughter","VIOLENT":"Y"},"125":{"GROUP":"Manslaughter","VIOLENT":"Y"},"211":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"212":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"213":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"222":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"223":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"224":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"230":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"231":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"232":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"233":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"234":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"235":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"236":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"237":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"241":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"242":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"243":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"244":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"251":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"252":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"253":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"254":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"261":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"271":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"301":{"GROUP":"Robbery","VIOLENT":"Y"},"302":{"GROUP":"Robbery","VIOLENT":"Y"},"303":{"GROUP":"Robbery","VIOLENT":"Y"},"304":{"GROUP":"Robbery","VIOLENT":"Y"},"305":{"GROUP":"Robbery","VIOLENT":"Y"},"306":{"GROUP":"Robbery","VIOLENT":"Y"},"307":{"GROUP":"Robbery","VIOLENT":"Y"},"308":{"GROUP":"Robbery","VIOLENT":"Y"},"309":{"GROUP":"Robbery","VIOLENT":"Y"},"310":{"GROUP":"Robbery","VIOLENT":"Y"},"311":{"GROUP":"Robbery","VIOLENT":"Y"},"312":{"GROUP":"Robbery","VIOLENT":"Y"},"313":{"GROUP":"Robbery","VIOLENT":"Y"},"314":{"GROUP":"Robbery","VIOLENT":"Y"},"315":{"GROUP":"Robbery","VIOLENT":"Y"},"316":{"GROUP":"Robbery","VIOLENT":"Y"},"317":{"GROUP":"Robbery","VIOLENT":"Y"},"318":{"GROUP":"Robbery","VIOLENT":"Y"},"319":{"GROUP":"Robbery","VIOLENT":"Y"},"320":{"GROUP":"Robbery","VIOLENT":"Y"},"321":{"GROUP":"Robbery","VIOLENT":"Y"},"322":{"GROUP":"Robbery","VIOLENT":"Y"},"323":{"GROUP":"Robbery","VIOLENT":"Y"},"324":{"GROUP":"Robbery","VIOLENT":"Y"},"333":{"GROUP":"Robbery","VIOLENT":"Y"},"334":{"GROUP":"Robbery","VIOLENT":"Y"},"335":{"GROUP":"Robbery","VIOLENT":"Y"},"336":{"GROUP":"Robbery","VIOLENT":"Y"},"337":{"GROUP":"Robbery","VIOLENT":"Y"},"338":{"GROUP":"Robbery","VIOLENT":"Y"},"339":{"GROUP":"Robbery","VIOLENT":"Y"},"340":{"GROUP":"Robbery","VIOLENT":"Y"},"341":{"GROUP":"Robbery","VIOLENT":"Y"},"342":{"GROUP":"Robbery","VIOLENT":"Y"},"343":{"GROUP":"Robbery","VIOLENT":"Y"},"344":{"GROUP":"Robbery","VIOLENT":"Y"},"345":{"GROUP":"Robbery","VIOLENT":"Y"},"346":{"GROUP":"Robbery","VIOLENT":"Y"},"347":{"GROUP":"Robbery","VIOLENT":"Y"},"348":{"GROUP":"Robbery","VIOLENT":"Y"},"349":{"GROUP":"Robbery","VIOLENT":"Y"},"350":{"GROUP":"Robbery","VIOLENT":"Y"},"351":{"GROUP":"Robbery","VIOLENT":"Y"},"352":{"GROUP":"Robbery","VIOLENT":"Y"},"353":{"GROUP":"Robbery","VIOLENT":"Y"},"354":{"GROUP":"Robbery","VIOLENT":"Y"},"355":{"GROUP":"Robbery","VIOLENT":"Y"},"356":{"GROUP":"Robbery","VIOLENT":"Y"},"357":{"GROUP":"Robbery","VIOLENT":"Y"},"358":{"GROUP":"Robbery","VIOLENT":"Y"},"359":{"GROUP":"Robbery","VIOLENT":"Y"},"360":{"GROUP":"Robbery","VIOLENT":"Y"},"361":{"GROUP":"Robbery","VIOLENT":"Y"},"362":{"GROUP":"Robbery","VIOLENT":"Y"},"363":{"GROUP":"Robbery","VIOLENT":"Y"},"364":{"GROUP":"Robbery","VIOLENT":"Y"},"371":{"GROUP":"Robbery","VIOLENT":"N"},"373":{"GROUP":"Robbery","VIOLENT":"N"},"374":{"GROUP":"Robbery","VIOLENT":"N"},"375":{"GROUP":"Robbery","VIOLENT":"N"},"376":{"GROUP":"Robbery","VIOLENT":"N"},"377":{"GROUP":"Robbery","VIOLENT":"N"},"378":{"GROUP":"Robbery","VIOLENT":"N"},"379":{"GROUP":"Robbery","VIOLENT":"N"},"380":{"GROUP":"Robbery","VIOLENT":"N"},"381":{"GROUP":"Robbery","VIOLENT":"N"},"401":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"402":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"403":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"404":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"411":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"412":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"413":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"421":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"422":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"423":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"424":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"431":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"432":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"433":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"510":{"GROUP":"Residential Burglary","VIOLENT":"N"},"511":{"GROUP":"Residential Burglary","VIOLENT":"N"},"512":{"GROUP":"Residential Burglary","VIOLENT":"N"},"517":{"GROUP":"Residential Burglary","VIOLENT":"N"},"520":{"GROUP":"Residential Burglary","VIOLENT":"N"},"521":{"GROUP":"Residential Burglary","VIOLENT":"N"},"522":{"GROUP":"Residential Burglary","VIOLENT":"N"},"527":{"GROUP":"Residential Burglary","VIOLENT":"N"},"530":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"531":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"532":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"537":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"540":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"541":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"542":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"543":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"547":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"560":{"GROUP":"Other Burglary","VIOLENT":"N"},"561":{"GROUP":"Other Burglary","VIOLENT":"N"},"562":{"GROUP":"Other Burglary","VIOLENT":"N"},"611":{"GROUP":"Larceny","VIOLENT":"N"},"612":{"GROUP":"Larceny","VIOLENT":"N"},"613":{"GROUP":"Larceny","VIOLENT":"N"},"614":{"GROUP":"Larceny","VIOLENT":"N"},"615":{"GROUP":"Larceny","VIOLENT":"N"},"616":{"GROUP":"Larceny","VIOLENT":"N"},"617":{"GROUP":"Larceny","VIOLENT":"N"},"618":{"GROUP":"Larceny","VIOLENT":"N"},"619":{"GROUP":"Larceny","VIOLENT":"N"},"621":{"GROUP":"Larceny","VIOLENT":"N"},"622":{"GROUP":"Larceny","VIOLENT":"N"},"623":{"GROUP":"Larceny","VIOLENT":"N"},"624":{"GROUP":"Larceny","VIOLENT":"N"},"625":{"GROUP":"Larceny","VIOLENT":"N"},"626":{"GROUP":"Larceny","VIOLENT":"N"},"627":{"GROUP":"Larceny","VIOLENT":"N"},"628":{"GROUP":"Larceny","VIOLENT":"N"},"629":{"GROUP":"Larceny","VIOLENT":"N"},"631":{"GROUP":"Larceny","VIOLENT":"N"},"632":{"GROUP":"Larceny","VIOLENT":"N"},"633":{"GROUP":"Larceny","VIOLENT":"N"},"634":{"GROUP":"Larceny","VIOLENT":"N"},"635":{"GROUP":"Larceny","VIOLENT":"N"},"636":{"GROUP":"Larceny","VIOLENT":"N"},"637":{"GROUP":"Larceny","VIOLENT":"N"},"638":{"GROUP":"Larceny","VIOLENT":"N"},"639":{"GROUP":"Larceny","VIOLENT":"N"},"641":{"GROUP":"Larceny From Motor Vehicle","VIOLENT":"N"},"649":{"GROUP":"Larceny","VIOLENT":"N"},"670":{"GROUP":"Larceny","VIOLENT":"N"},"701":{"GROUP":"Auto Theft","VIOLENT":"N"},"702":{"GROUP":"Auto Theft","VIOLENT":"N"},"704":{"GROUP":"Auto Theft","VIOLENT":"N"},"706":{"GROUP":"Auto Theft","VIOLENT":"N"},"711":{"GROUP":"Auto Theft","VIOLENT":"N"},"712":{"GROUP":"Auto Theft","VIOLENT":"N"},"713":{"GROUP":"Auto Theft","VIOLENT":"N"},"714":{"GROUP":"Auto Theft","VIOLENT":"N"},"715":{"GROUP":"Auto Theft","VIOLENT":"N"},"723":{"GROUP":"Auto Theft","VIOLENT":"N"},"724":{"GROUP":"Auto Theft","VIOLENT":"N"},"727":{"GROUP":"Auto Theft","VIOLENT":"N"},"735":{"GROUP":"Auto Theft","VIOLENT":"N"},"770":{"GROUP":"Auto Theft","VIOLENT":"N"},"780":{"GROUP":"Auto Theft","VIOLENT":"N"},"790":{"GROUP":"Auto Theft","VIOLENT":"N"},"801":{"GROUP":"Simple Assault","VIOLENT":"Y"},"802":{"GROUP":"Simple Assault","VIOLENT":"Y"},"803":{"GROUP":"Simple Assault","VIOLENT":"Y"},"804":{"GROUP":"Harassment","VIOLENT":"N"},"900":{"GROUP":"Arson","VIOLENT":"N"},"901":{"GROUP":"Arson","VIOLENT":"N"},"902":{"GROUP":"Arson","VIOLENT":"N"},"905":{"GROUP":"Arson","VIOLENT":"N"},"906":{"GROUP":"Arson","VIOLENT":"N"},"907":{"GROUP":"Arson","VIOLENT":"N"},"920":{"GROUP":"Arson","VIOLENT":"N"},"930":{"GROUP":"Arson","VIOLENT":"N"},"1001":{"GROUP":"Counterfeiting","VIOLENT":"N"},"1002":{"GROUP":"Counterfeiting","VIOLENT":"N"},"1101":{"GROUP":"Fraud","VIOLENT":"N"},"1102":{"GROUP":"Fraud","VIOLENT":"N"},"1103":{"GROUP":"Fraud","VIOLENT":"N"},"1105":{"GROUP":"Fraud","VIOLENT":"N"},"1106":{"GROUP":"Fraud","VIOLENT":"N"},"1107":{"GROUP":"Fraud","VIOLENT":"N"},"1108":{"GROUP":"Fraud","VIOLENT":"N"},"1109":{"GROUP":"Fraud","VIOLENT":"N"},"1201":{"GROUP":"Embezzlement","VIOLENT":"N"},"1300":{"GROUP":"Recovered Stolen Property","VIOLENT":"N"},"1301":{"GROUP":"Larceny","VIOLENT":"N"},"1302":{"GROUP":"Larceny","VIOLENT":"N"},"1304":{"GROUP":"Recovered Stolen Property","VIOLENT":"N"},"1401":{"GROUP":"Vandalism","VIOLENT":"N"},"1402":{"GROUP":"Vandalism","VIOLENT":"N"},"1415":{"GROUP":"Vandalism","VIOLENT":"N"},"1501":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1502":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1503":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1504":{"GROUP":"Other","VIOLENT":"N"},"1510":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1601":{"GROUP":"Prostitution","VIOLENT":"N"},"1602":{"GROUP":"Prostitution","VIOLENT":"N"},"1603":{"GROUP":"Prostitution","VIOLENT":"N"},"1605":{"GROUP":"Prostitution","VIOLENT":"N"},"1607":{"GROUP":"Prostitution","VIOLENT":"N"},"1610":{"GROUP":"Human Trafficking","VIOLENT":"N"},"1620":{"GROUP":"Human Trafficking","VIOLENT":"N"},"1702":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1703":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1704":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1710":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1711":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1720":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1721":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1722":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1723":{"GROUP":"Sexual Assault","VIOLENT":"N"},"1725":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1726":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1727":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1730":{"GROUP":"Sexual Assault","VIOLENT":"N"},"1731":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1805":{"GROUP":"Drug Violation","VIOLENT":"N"},"1806":{"GROUP":"Drug Violation","VIOLENT":"N"},"1807":{"GROUP":"Drug Violation","VIOLENT":"N"},"1810":{"GROUP":"Drug Violation","VIOLENT":"N"},"1815":{"GROUP":"Drug Violation","VIOLENT":"N"},"1825":{"GROUP":"Drug Violation","VIOLENT":"N"},"1830":{"GROUP":"Drug Violation","VIOLENT":"N"},"1831":{"GROUP":"Drug Violation","VIOLENT":"N"},"1832":{"GROUP":"Drug Violation","VIOLENT":"N"},"1840":{"GROUP":"Drug Violation","VIOLENT":"N"},"1841":{"GROUP":"Drug Violation","VIOLENT":"N"},"1842":{"GROUP":"Drug Violation","VIOLENT":"N"},"1843":{"GROUP":"Drug Violation","VIOLENT":"N"},"1844":{"GROUP":"Drug Violation","VIOLENT":"N"},"1845":{"GROUP":"Drug Violation","VIOLENT":"N"},"1846":{"GROUP":"Drug Violation","VIOLENT":"N"},"1847":{"GROUP":"Drug Violation","VIOLENT":"N"},"1848":{"GROUP":"Drug Violation","VIOLENT":"N"},"1849":{"GROUP":"Drug Violation","VIOLENT":"N"},"1850":{"GROUP":"Drug Violation","VIOLENT":"N"},"1855":{"GROUP":"Drug Violation","VIOLENT":"N"},"1858":{"GROUP":"Drug Violation","VIOLENT":"N"},"1863":{"GROUP":"Drug Violation","VIOLENT":"N"},"1864":{"GROUP":"Drug Violation","VIOLENT":"N"},"1866":{"GROUP":"Drug Violation","VIOLENT":"N"},"1868":{"GROUP":"Drug Violation","VIOLENT":"N"},"1870":{"GROUP":"Drug Violation","VIOLENT":"N"},"1873":{"GROUP":"Drug Violation","VIOLENT":"N"},"1874":{"GROUP":"Drug Violation","VIOLENT":"N"},"1875":{"GROUP":"Drug Violation","VIOLENT":"N"},"1901":{"GROUP":"Gambling","VIOLENT":"N"},"1902":{"GROUP":"Gambling","VIOLENT":"N"},"1903":{"GROUP":"Gambling","VIOLENT":"N"},"1904":{"GROUP":"Gambling","VIOLENT":"N"},"1921":{"GROUP":"Gambling","VIOLENT":"N"},"2003":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2004":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2005":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2006":{"GROUP":"Restraining Order Violations","VIOLENT":"N"},"2007":{"GROUP":"Restraining Order Violations","VIOLENT":"N"},"2010":{"GROUP":"Home Invasion","VIOLENT":"N"},"2101":{"GROUP":"Operating Under the Influence","VIOLENT":"N"},"2102":{"GROUP":"Operating Under the Influence","VIOLENT":"N"},"2201":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2202":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2204":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2401":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2403":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2405":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2407":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2511":{"GROUP":"Other","VIOLENT":"N"},"2604":{"GROUP":"Other","VIOLENT":"N"},"2605":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2606":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2608":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2609":{"GROUP":"Drug Violation","VIOLENT":"N"},"2610":{"GROUP":"Other","VIOLENT":"N"},"2611":{"GROUP":"Other","VIOLENT":"N"},"2612":{"GROUP":"Fire Related Reports","VIOLENT":"N"},"2613":{"GROUP":"Other","VIOLENT":"Y"},"2616":{"GROUP":"Other","VIOLENT":"N"},"2617":{"GROUP":"Drug Violation","VIOLENT":"N"},"2618":{"GROUP":"Explosives","VIOLENT":"N"},"2619":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2622":{"GROUP":"Other","VIOLENT":"N"},"2623":{"GROUP":"Other","VIOLENT":"N"},"2624":{"GROUP":"Operating Under the Influence","VIOLENT":"N"},"2628":{"GROUP":"Phone Call Complaints","VIOLENT":"N"},"2629":{"GROUP":"Harassment","VIOLENT":"N"},"2631":{"GROUP":"Other","VIOLENT":"N"},"2632":{"GROUP":"Evading Fare","VIOLENT":"N"},"2633":{"GROUP":"Other","VIOLENT":"N"},"2636":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2641":{"GROUP":"Other","VIOLENT":"N"},"2642":{"GROUP":"Missing Person Reported","VIOLENT":"N"},"2646":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2647":{"GROUP":"Other","VIOLENT":"N"},"2648":{"GROUP":"Bomb Hoax","VIOLENT":"N"},"2650":{"GROUP":"Other","VIOLENT":"N"},"2651":{"GROUP":"Other","VIOLENT":"N"},"2657":{"GROUP":"Other","VIOLENT":"N"},"2658":{"GROUP":"Other","VIOLENT":"N"},"2660":{"GROUP":"Other","VIOLENT":"N"},"2662":{"GROUP":"Ballistics","VIOLENT":"N"},"2663":{"GROUP":"Other","VIOLENT":"N"},"2664":{"GROUP":"Other","VIOLENT":"N"},"2665":{"GROUP":"Other","VIOLENT":"N"},"2667":{"GROUP":"Prisoner Related Incidents","VIOLENT":"Y"},"2668":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2670":{"GROUP":"Criminal Harassment","VIOLENT":"N"},"2671":{"GROUP":"Harassment","VIOLENT":""},"2672":{"GROUP":"Biological Threat","VIOLENT":"N"},"2801":{"GROUP":"Other","VIOLENT":"N"},"2900":{"GROUP":"Violations","VIOLENT":"N"},"2901":{"GROUP":"Violations","VIOLENT":"N"},"2902":{"GROUP":"Violations","VIOLENT":"N"},"2903":{"GROUP":"Violations","VIOLENT":"N"},"2904":{"GROUP":"Violations","VIOLENT":"N"},"2905":{"GROUP":"Violations","VIOLENT":"N"},"2906":{"GROUP":"Violations","VIOLENT":"N"},"2907":{"GROUP":"Violations","VIOLENT":"N"},"2908":{"GROUP":"Violations","VIOLENT":"N"},"2909":{"GROUP":"Violations","VIOLENT":"N"},"2910":{"GROUP":"Violations","VIOLENT":"N"},"2911":{"GROUP":"Violations","VIOLENT":"N"},"2912":{"GROUP":"Violations","VIOLENT":"N"},"2913":{"GROUP":"Violations","VIOLENT":"N"},"2914":{"GROUP":"Violations","VIOLENT":"N"},"2915":{"GROUP":"Violations","VIOLENT":"N"},"2916":{"GROUP":"Violations","VIOLENT":"N"},"2917":{"GROUP":"Violations","VIOLENT":"N"},"3001":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3002":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3004":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3005":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3006":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3007":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3008":{"GROUP":"Suicide","VIOLENT":"Y"},"3009":{"GROUP":"Suicide","VIOLENT":"Y"},"3016":{"GROUP":"Medical Assistance","VIOLENT":"Y"},"3017":{"GROUP":"Medical Assistance","VIOLENT":"Y"},"3018":{"GROUP":"Other","VIOLENT":"N"},"3021":{"GROUP":"Drug Violation","VIOLENT":"N"},"3022":{"GROUP":"Drug Violation","VIOLENT":"N"},"3023":{"GROUP":"Drug Violation","VIOLENT":"N"},"3029":{"GROUP":"Suicide","VIOLENT":"Y"},"3040":{"GROUP":"Other","VIOLENT":"N"},"3102":{"GROUP":"Other","VIOLENT":"N"},"3106":{"GROUP":"Property Related Damage","VIOLENT":"N"},"3107":{"GROUP":"Explosives","VIOLENT":"N"},"3108":{"GROUP":"Fire Related Reports","VIOLENT":"N"},"3109":{"GROUP":"Other","VIOLENT":"N"},"3110":{"GROUP":"Other","VIOLENT":"N"},"3111":{"GROUP":"Other","VIOLENT":"N"},"3112":{"GROUP":"Other","VIOLENT":"N"},"3114":{"GROUP":"Other","VIOLENT":"N"},"3115":{"GROUP":"Other","VIOLENT":"N"},"3116":{"GROUP":"Harbor Related Incidents","VIOLENT":"N"},"3117":{"GROUP":"Other","VIOLENT":"N"},"3119":{"GROUP":"Firearm Discovery","VIOLENT":"N"},"3122":{"GROUP":"Aircraft","VIOLENT":"N"},"3123":{"GROUP":"Explosives","VIOLENT":"N"},"3125":{"GROUP":"Warrant Arrests","VIOLENT":"N"},"3126":{"GROUP":"Warrant Arrests","VIOLENT":"N"},"3130":{"GROUP":"Search Warrants","VIOLENT":"N"},"3151":{"GROUP":"Harassment","VIOLENT":"N"},"3152":{"GROUP":"Other","VIOLENT":"N"},"3160":{"GROUP":"Fire Related Reports","VIOLENT":"N"},"3170":{"GROUP":"Harassment","VIOLENT":"N"},"3201":{"GROUP":"Property Lost","VIOLENT":"N"},"3202":{"GROUP":"Property Found","VIOLENT":"N"},"3203":{"GROUP":"Other","VIOLENT":"N"},"3204":{"GROUP":"Firearm Discovery","VIOLENT":"N"},"3205":{"GROUP":"License Plate Related Incidents","VIOLENT":"N"},"3206":{"GROUP":"License Plate Related Incidents","VIOLENT":"N"},"3207":{"GROUP":"Property Found","VIOLENT":"N"},"3208":{"GROUP":"Property Lost","VIOLENT":"N"},"3209":{"GROUP":"Property Found","VIOLENT":"N"},"3210":{"GROUP":"Property Found","VIOLENT":"N"},"3301":{"GROUP":"Verbal Disputes","VIOLENT":"N"},"3302":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3303":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3304":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3305":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3402":{"GROUP":"Other","VIOLENT":"N"},"3403":{"GROUP":"Police Service Incidents","VIOLENT":"N"},"3404":{"GROUP":"Other","VIOLENT":"N"},"3408":{"GROUP":"Other","VIOLENT":"N"},"3410":{"GROUP":"Other","VIOLENT":"N"},"3412":{"GROUP":"Other","VIOLENT":"N"},"3414":{"GROUP":"Other","VIOLENT":"N"},"3501":{"GROUP":"Missing Person Reported","VIOLENT":"N"},"3502":{"GROUP":"Missing Person Located","VIOLENT":"N"},"3503":{"GROUP":"Missing Person Located","VIOLENT":"N"},"3612":{"GROUP":"Harassment","VIOLENT":"N"},"3620":{"GROUP":"Other","VIOLENT":"N"},"3625":{"GROUP":"Other","VIOLENT":"N"},"3701":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3702":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3704":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3706":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3709":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3712":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3801":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3802":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3803":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3805":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3807":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3810":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3811":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3820":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3821":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3830":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3831":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"}}')},65:function(e,t,a){e.exports=a.p+"static/media/controls.8fd6a55e.svg"},69:function(e,t,a){e.exports=a(176)},74:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.005398b1.chunk.js.map
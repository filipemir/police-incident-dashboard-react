(window["webpackJsonpbos-criminal-incidence"]=window["webpackJsonpbos-criminal-incidence"]||[]).push([[0],{158:function(e,O,t){},161:function(e,O,t){},162:function(e,O,t){},164:function(e,O,t){"use strict";t.r(O);var r=t(1),a=t.n(r),n=t(14),N=t.n(n),o=t(9),i=t(18),s=t.n(i),R=t(49),l=t.n(R),V=t(8),c=t(168),G=t(170),E=t(169),u=(t(63),t(171)),L=t(172),P=Object(u.a)(L.a).domain(["Firearm Violations","Confidence Games","Larceny From Motor Vehicle","Towed","Property Related Damage","Missing Person Located","Auto Theft Recovery","INVESTIGATE PERSON","Harbor Related Incidents","Service","Harassment","Landlord / Tenant Disputes","Property Found","HUMAN TRAFFICKING","Vandalism","License Violation","Robbery","License Plate Related Incidents","Counterfeiting","Warrant Arrests","Disorderly Conduct","Motor Vehicle Accident Response","Biological Threat","Embezzlement","Ballistics","Prisoner Related Incidents","Other Burglary","Verbal Disputes","Auto Theft","Medical Assistance","Restraining Order Violations","Manslaughter","Larceny","Evading Fare","Aircraft","Drug Violation","Bomb Hoax","Fire Related Reports","HUMAN TRAFFICKING - INVOLUNTARY SERVITUDE","Criminal Harassment","HOME INVASION","Search Warrants","Homicide","Fraud","Prostitution","Explosives","Residential Burglary","Operating Under the Influence","Recovered Stolen Property","Other","Liquor Violation","Commercial Burglary","Gambling","Investigate Person","Aggravated Assault","Simple Assault","Property Lost","Phone Call Complaints","Missing Person Reported","Burglary - No Property Taken","Arson","Firearm Discovery","Assembly or Gathering Violations","Police Service Incidents","Violations","Offenses Against Child / Family","Investigate Property"]);var I="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",T='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',U=[42.32390487760298,-71.07416152954103],d=[[42.393518,-71.00516847],[42.24042076,-71.16843346]];function b(e,O){var t=e.properties.OFFENSE_CODE_GROUP;return V.circleMarker(O,{radius:4,color:P(t),weight:1,opacity:.5,fillOpacity:.25})}function y(e,O){var t=Object.keys(e.properties).filter((function(e){return!e.startsWith("_")})).map((function(O){return"<tr><th>".concat(O.replace(/_/g," "),"</th><td>").concat(e.properties[O],"<td></tr>")}));O.bindPopup("<table><tbody>".concat(t,"</tbody></table>"))}function p(e){var O=e.incidents,t=l.a.parse(O,{Point:["Lat","Long"]});return a.a.createElement("div",{className:"map-root"},a.a.createElement(c.a,{center:U,bounds:d},a.a.createElement(G.a,{url:I,attribution:T}),a.a.createElement(E.a,{key:Math.random(),data:t,pointToLayer:b,onEachFeature:y})))}var m=t(52),g=(t(89),t(12)),h=t(56),f=t(54),A=t.n(f),v=(t(158),{value:1,unit:"day"}),Y=[{value:1,unit:"hour"},v,{value:7,unit:"days"},{value:30,unit:"days"},{value:3,unit:"months"},{value:6,unit:"months"},{value:1,unit:"year"}],D=Y.map((function(e){return{value:e,label:"".concat(e.value," ").concat(e.unit)}}));function S(e){var O=e.timeframe,t=e.onTimeframeChange,r=Y.findIndex((function(e){return A()(e,O)}));return a.a.createElement("div",{className:"timeframe-picker"},a.a.createElement(h.a,{className:"timeframe-picker__selector",classNamePrefix:"react-select",value:D[r],onChange:function(e){return t(e.value)},options:D,theme:function(e){return Object(g.a)({},e,{borderRadius:0,colors:Object(g.a)({},e.colors,{primary:"#fefffe",primary75:"#1086ff",primary25:"#1086ff",neutral0:"#33323c"}),spacing:Object(g.a)({},e.spacing,{menuGutter:0,controlHeight:30})})}}))}var M=t(36),B=t.n(M),C=(t(161),5);function x(e){var O=e.onGroupToggled,t=e.incidentsByGroup,n=e.visibleGroups,N=e.onShowAllGroups,i=e.onHideAllGroups,s=Object(r.useState)(!1),R=Object(o.a)(s,2),l=R[0],V=R[1],c=function(e){var O=e.incidentsByGroup,t=[];return Object.entries(O).forEach((function(e){var O=Object(o.a)(e,2),r=O[0],a=O[1];t.push({name:r,count:a.length})})),t.sort((function(e,O){return"Other"===e.name?1:"Other"===O.name?-1:O.count-e.count})),t}({incidentsByGroup:t}),G=c.length;return l||(c=c.slice(0,C)),a.a.createElement("div",{className:"incident-group-picker"},c.map((function(e,t){var r=e.name,N=e.count,o=n.has(r),i=P(r);return a.a.createElement("label",{key:"input-group-".concat(t),className:"group-checkbox ".concat(o?"":"inactive")},a.a.createElement("div",{className:"input-group__circle",style:{backgroundColor:o?B()(i,.5):null,borderColor:o?B()(i,1):"#d3d3d3"}}),a.a.createElement("input",{type:"checkbox",checked:o,onChange:function(){V(!0),O(r)}}),a.a.createElement("span",{className:"input-group__name"},r),a.a.createElement("span",{className:"input-group__count"},N))})),l&&a.a.createElement("div",{className:"incident-group-bulk-actions"},a.a.createElement("div",{className:"incident-group-bulk-action",onClick:function(){return N()}},a.a.createElement("span",null,"Select All")),a.a.createElement("div",{className:"incident-group-bulk-action",onClick:function(){return i()}},a.a.createElement("span",null,"Unselect All"))),a.a.createElement("div",{className:"incident-group-expander",onClick:function(){return V(!l)}},a.a.createElement("span",null,l?"Collapse":"".concat(G-C," More Groups"))))}function F(e){var O=e.isLoadingIncidents,t=e.incidentCount,r=e.timeframe,n=e.dates,N=e.onTimeframeChange,o=e.onGroupToggled,i=e.incidentsByGroup,s=e.visibleGroups,R=e.onShowAllGroups,l=e.onHideAllGroups,V=n.startDate,c=n.endDate,G=t.total,E=t.visible,u=G>0;return a.a.createElement("div",{className:"menu-root"},a.a.createElement("div",{className:"menu-title"},a.a.createElement("h1",null,"Boston ",a.a.createElement("br",null)," Police Incidents")),a.a.createElement("div",{className:"menu-content"},a.a.createElement("div",{className:"menu-section"},a.a.createElement("h2",{className:"menu-section-title"},"Date Range"),a.a.createElement("span",{className:"menu-dates"},"".concat(V.format(V.year===c.year?"MMM D":"MMM D, YYYY")," \u2013 ").concat(c.format("MMM D, YYYY"))),a.a.createElement(S,{timeframe:r,dates:n,onTimeframeChange:N})),O&&a.a.createElement("div",{className:"menu-loader"},a.a.createElement(m.BarLoader,{size:50,color:"#98ff98",loading:!0})),!O&&u&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"menu-section"},a.a.createElement("div",null,"Showing ".concat(E===G?"all ".concat(G):"".concat(E," out of ").concat(G)," incidents"))),a.a.createElement("div",{className:"menu-section"},a.a.createElement("h2",{className:"menu-section-title"},"Incident Groups"),a.a.createElement(x,{incidentsByGroup:i,visibleGroups:s,onGroupToggled:o,onShowAllGroups:R,onHideAllGroups:l})))))}t(162);function w(e){var O=e.timeframe,t=e.endDate,r=void 0===t?s()():t,a=O.value,n=O.unit;return{startDate:s()(r).subtract(a,n),endDate:r}}var j=t(30),k=t.n(j),H=t(55),_="https://data.boston.gov/api/3/action/datastore_search_sql?sql=",W="YYYY-MM-DD hh:mm";var q=t(57),z={incidentsByGroup:{},visibleGroups:new Set,visibleIncidents:[],incidentCount:{total:0,visible:0}},J="load-incidents",K="toggle-group",$="hide-all-groups",Q="show-all-groups";function X(e){var O=e.incidentsByGroup,t=e.visibleGroups,r=[];return Object.entries(O).forEach((function(e){var O=Object(o.a)(e,2),a=O[0],n=O[1];t.has(a)&&r.push.apply(r,Object(q.a)(n))})),r}function Z(e){var O=e.incidentsByGroup,t=e.visibleGroups,r=0,a=0;return Object.entries(O).forEach((function(e){var O=Object(o.a)(e,2),n=O[0],N=O[1].length;r+=N,t.has(n)&&(a+=N)})),{total:r,visible:a}}function ee(e,O){var t=O.type,r=O.payload;switch(t){case J:return function(e,O){var t=O.incidentsByGroup,r=e.visibleGroups;return 0===e.visibleGroups.size&&(r=new Set(Object.keys(t))),Object(g.a)({},e,{incidentsByGroup:t,visibleGroups:r,visibleIncidents:X({incidentsByGroup:t,visibleGroups:r}),incidentCount:Z({incidentsByGroup:t,visibleGroups:r})})}(e,r);case K:return function(e,O){var t=O.group,r=e.incidentsByGroup,a=e.visibleGroups;return a.has(t)?a.delete(t):a.add(t),Object(g.a)({},e,{visibleGroups:a,visibleIncidents:X({incidentsByGroup:r,visibleGroups:a}),incidentCount:Z({incidentsByGroup:r,visibleGroups:a})})}(e,r);case Q:return function(e){var O=e.incidentsByGroup,t=new Set(Object.keys(O));return Object(g.a)({},e,{visibleGroups:t,visibleIncidents:X({incidentsByGroup:O,visibleGroups:t}),incidentCount:Z({incidentsByGroup:O,visibleGroups:t})})}(e);case $:return function(e){var O=e.incidentsByGroup,t=new Set;return Object(g.a)({},e,{visibleGroups:t,visibleIncidents:X({incidentsByGroup:O,visibleGroups:t}),incidentCount:Z({incidentsByGroup:O,visibleGroups:t})})}(e);default:throw Error("Invalid incidents reducer action: ".concat(t))}}var Oe=s()("2019-09-20");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));N.a.render(a.a.createElement((function(){var e=Object(r.useState)(!0),O=Object(o.a)(e,2),t=O[0],n=O[1],N=Object(r.useState)(v),i=Object(o.a)(N,2),s=i[0],R=i[1],l=Object(r.useState)(w({timeframe:s,endDate:Oe})),V=Object(o.a)(l,2),c=V[0],G=V[1],E=Object(r.useReducer)(ee,z),u=Object(o.a)(E,2),L=u[0],P=u[1],I=L.incidentsByGroup,T=L.visibleGroups,U=L.visibleIncidents,d=L.incidentCount;return Object(r.useEffect)((function(){var e=w({timeframe:s,endDate:Oe}),O=e.startDate,t=e.endDate,r=function(){n(!0),function(e){var O,t,r,a,n,N;return k.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return O=e.startDate,t=e.endDate,r='SELECT * \n        FROM "12cb3883-56f5-47de-afa5-3b1cf61b257b" \n        WHERE "OCCURRED_ON_DATE" BETWEEN \''.concat(O.format(W),"' AND '").concat(t.format(W),"'\n    "),o.next=4,k.a.awrap(fetch(_+r));case 4:return a=o.sent,o.next=7,k.a.awrap(a.json());case 7:return n=o.sent,N={},n.result.records.forEach((function(e){var O=parseInt(e.OFFENSE_CODE,10),t=H[O];t||(console.log("Incident with unknown group code found: ".concat(t,'. Assigning to "Other"')),console.log(e));var r=t?t.GROUP:"Other";!N[r]&&(N[r]=[]),N[r].push(e)})),o.abrupt("return",N);case 11:case"end":return o.stop()}}))}({startDate:O,endDate:t}).then((function(e){P(function(e){return{type:J,payload:{incidentsByGroup:e}}}(e)),n(!1)}))};G({startDate:O,endDate:t}),r();var a=setInterval(r,6e4);return function(){return clearInterval(a)}}),[s,P]),a.a.createElement("div",{id:"app-root"},a.a.createElement(F,{isLoadingIncidents:t,incidentCount:d,incidentsByGroup:I,visibleGroups:T,timeframe:s,dates:c,onTimeframeChange:R,onGroupToggled:function(e){return P(function(e){return{type:K,payload:{group:e}}}(e))},onShowAllGroups:function(){return P({type:Q})},onHideAllGroups:function(){return P({type:$})}}),a.a.createElement(p,{incidents:U}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e){e.exports=JSON.parse('{"111":{"GROUP":"Homicide","VIOLENT":"Y"},"112":{"GROUP":"Manslaughter","VIOLENT":"Y"},"113":{"GROUP":"Manslaughter","VIOLENT":"Y"},"114":{"GROUP":"Manslaughter","VIOLENT":"Y"},"121":{"GROUP":"Manslaughter","VIOLENT":"Y"},"122":{"GROUP":"Manslaughter","VIOLENT":"Y"},"123":{"GROUP":"Manslaughter","VIOLENT":"Y"},"124":{"GROUP":"Manslaughter","VIOLENT":"Y"},"125":{"GROUP":"Manslaughter","VIOLENT":"Y"},"211":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"212":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"213":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"222":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"223":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"224":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"230":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"231":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"232":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"233":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"234":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"235":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"236":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"237":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"241":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"242":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"243":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"244":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"251":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"252":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"253":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"254":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"261":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"271":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"301":{"GROUP":"Robbery","VIOLENT":"Y"},"302":{"GROUP":"Robbery","VIOLENT":"Y"},"303":{"GROUP":"Robbery","VIOLENT":"Y"},"304":{"GROUP":"Robbery","VIOLENT":"Y"},"305":{"GROUP":"Robbery","VIOLENT":"Y"},"306":{"GROUP":"Robbery","VIOLENT":"Y"},"307":{"GROUP":"Robbery","VIOLENT":"Y"},"308":{"GROUP":"Robbery","VIOLENT":"Y"},"309":{"GROUP":"Robbery","VIOLENT":"Y"},"310":{"GROUP":"Robbery","VIOLENT":"Y"},"311":{"GROUP":"Robbery","VIOLENT":"Y"},"312":{"GROUP":"Robbery","VIOLENT":"Y"},"313":{"GROUP":"Robbery","VIOLENT":"Y"},"314":{"GROUP":"Robbery","VIOLENT":"Y"},"315":{"GROUP":"Robbery","VIOLENT":"Y"},"316":{"GROUP":"Robbery","VIOLENT":"Y"},"317":{"GROUP":"Robbery","VIOLENT":"Y"},"318":{"GROUP":"Robbery","VIOLENT":"Y"},"319":{"GROUP":"Robbery","VIOLENT":"Y"},"320":{"GROUP":"Robbery","VIOLENT":"Y"},"321":{"GROUP":"Robbery","VIOLENT":"Y"},"322":{"GROUP":"Robbery","VIOLENT":"Y"},"323":{"GROUP":"Robbery","VIOLENT":"Y"},"324":{"GROUP":"Robbery","VIOLENT":"Y"},"333":{"GROUP":"Robbery","VIOLENT":"Y"},"334":{"GROUP":"Robbery","VIOLENT":"Y"},"335":{"GROUP":"Robbery","VIOLENT":"Y"},"336":{"GROUP":"Robbery","VIOLENT":"Y"},"337":{"GROUP":"Robbery","VIOLENT":"Y"},"338":{"GROUP":"Robbery","VIOLENT":"Y"},"339":{"GROUP":"Robbery","VIOLENT":"Y"},"340":{"GROUP":"Robbery","VIOLENT":"Y"},"341":{"GROUP":"Robbery","VIOLENT":"Y"},"342":{"GROUP":"Robbery","VIOLENT":"Y"},"343":{"GROUP":"Robbery","VIOLENT":"Y"},"344":{"GROUP":"Robbery","VIOLENT":"Y"},"345":{"GROUP":"Robbery","VIOLENT":"Y"},"346":{"GROUP":"Robbery","VIOLENT":"Y"},"347":{"GROUP":"Robbery","VIOLENT":"Y"},"348":{"GROUP":"Robbery","VIOLENT":"Y"},"349":{"GROUP":"Robbery","VIOLENT":"Y"},"350":{"GROUP":"Robbery","VIOLENT":"Y"},"351":{"GROUP":"Robbery","VIOLENT":"Y"},"352":{"GROUP":"Robbery","VIOLENT":"Y"},"353":{"GROUP":"Robbery","VIOLENT":"Y"},"354":{"GROUP":"Robbery","VIOLENT":"Y"},"355":{"GROUP":"Robbery","VIOLENT":"Y"},"356":{"GROUP":"Robbery","VIOLENT":"Y"},"357":{"GROUP":"Robbery","VIOLENT":"Y"},"358":{"GROUP":"Robbery","VIOLENT":"Y"},"359":{"GROUP":"Robbery","VIOLENT":"Y"},"360":{"GROUP":"Robbery","VIOLENT":"Y"},"361":{"GROUP":"Robbery","VIOLENT":"Y"},"362":{"GROUP":"Robbery","VIOLENT":"Y"},"363":{"GROUP":"Robbery","VIOLENT":"Y"},"364":{"GROUP":"Robbery","VIOLENT":"Y"},"371":{"GROUP":"Robbery","VIOLENT":"N"},"373":{"GROUP":"Robbery","VIOLENT":"N"},"374":{"GROUP":"Robbery","VIOLENT":"N"},"375":{"GROUP":"Robbery","VIOLENT":"N"},"376":{"GROUP":"Robbery","VIOLENT":"N"},"377":{"GROUP":"Robbery","VIOLENT":"N"},"378":{"GROUP":"Robbery","VIOLENT":"N"},"379":{"GROUP":"Robbery","VIOLENT":"N"},"380":{"GROUP":"Robbery","VIOLENT":"N"},"381":{"GROUP":"Robbery","VIOLENT":"N"},"401":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"402":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"403":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"404":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"411":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"412":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"413":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"421":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"422":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"423":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"424":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"431":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"432":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"433":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"510":{"GROUP":"Residential Burglary","VIOLENT":"N"},"511":{"GROUP":"Residential Burglary","VIOLENT":"N"},"512":{"GROUP":"Residential Burglary","VIOLENT":"N"},"517":{"GROUP":"Residential Burglary","VIOLENT":"N"},"520":{"GROUP":"Residential Burglary","VIOLENT":"N"},"521":{"GROUP":"Residential Burglary","VIOLENT":"N"},"522":{"GROUP":"Residential Burglary","VIOLENT":"N"},"527":{"GROUP":"Residential Burglary","VIOLENT":"N"},"530":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"531":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"532":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"537":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"540":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"541":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"542":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"543":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"547":{"GROUP":"Commercial Burglary","VIOLENT":"N"},"560":{"GROUP":"Other Burglary","VIOLENT":"N"},"561":{"GROUP":"Other Burglary","VIOLENT":"N"},"562":{"GROUP":"Other Burglary","VIOLENT":"N"},"611":{"GROUP":"Larceny","VIOLENT":"N"},"612":{"GROUP":"Larceny","VIOLENT":"N"},"613":{"GROUP":"Larceny","VIOLENT":"N"},"614":{"GROUP":"Larceny","VIOLENT":"N"},"615":{"GROUP":"Larceny","VIOLENT":"N"},"616":{"GROUP":"Larceny","VIOLENT":"N"},"617":{"GROUP":"Larceny","VIOLENT":"N"},"618":{"GROUP":"Larceny","VIOLENT":"N"},"619":{"GROUP":"Larceny","VIOLENT":"N"},"621":{"GROUP":"Larceny","VIOLENT":"N"},"622":{"GROUP":"Larceny","VIOLENT":"N"},"623":{"GROUP":"Larceny","VIOLENT":"N"},"624":{"GROUP":"Larceny","VIOLENT":"N"},"625":{"GROUP":"Larceny","VIOLENT":"N"},"626":{"GROUP":"Larceny","VIOLENT":"N"},"627":{"GROUP":"Larceny","VIOLENT":"N"},"628":{"GROUP":"Larceny","VIOLENT":"N"},"629":{"GROUP":"Larceny","VIOLENT":"N"},"631":{"GROUP":"Larceny","VIOLENT":"N"},"632":{"GROUP":"Larceny","VIOLENT":"N"},"633":{"GROUP":"Larceny","VIOLENT":"N"},"634":{"GROUP":"Larceny","VIOLENT":"N"},"635":{"GROUP":"Larceny","VIOLENT":"N"},"636":{"GROUP":"Larceny","VIOLENT":"N"},"637":{"GROUP":"Larceny","VIOLENT":"N"},"638":{"GROUP":"Larceny","VIOLENT":"N"},"639":{"GROUP":"Larceny","VIOLENT":"N"},"649":{"GROUP":"Larceny","VIOLENT":"N"},"670":{"GROUP":"Larceny","VIOLENT":"N"},"701":{"GROUP":"Auto Theft","VIOLENT":"N"},"702":{"GROUP":"Auto Theft","VIOLENT":"N"},"704":{"GROUP":"Auto Theft","VIOLENT":"N"},"706":{"GROUP":"Auto Theft","VIOLENT":"N"},"711":{"GROUP":"Auto Theft","VIOLENT":"N"},"712":{"GROUP":"Auto Theft","VIOLENT":"N"},"713":{"GROUP":"Auto Theft","VIOLENT":"N"},"714":{"GROUP":"Auto Theft","VIOLENT":"N"},"715":{"GROUP":"Auto Theft","VIOLENT":"N"},"723":{"GROUP":"Auto Theft","VIOLENT":"N"},"724":{"GROUP":"Auto Theft","VIOLENT":"N"},"727":{"GROUP":"Auto Theft","VIOLENT":"N"},"735":{"GROUP":"Auto Theft","VIOLENT":"N"},"770":{"GROUP":"Auto Theft","VIOLENT":"N"},"780":{"GROUP":"Auto Theft","VIOLENT":"N"},"790":{"GROUP":"Auto Theft","VIOLENT":"N"},"801":{"GROUP":"Simple Assault","VIOLENT":"Y"},"802":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"803":{"GROUP":"Aggravated Assault","VIOLENT":"Y"},"804":{"GROUP":"Harassment","VIOLENT":"N"},"900":{"GROUP":"Arson","VIOLENT":"N"},"901":{"GROUP":"Arson","VIOLENT":"N"},"902":{"GROUP":"Arson","VIOLENT":"N"},"905":{"GROUP":"Arson","VIOLENT":"N"},"906":{"GROUP":"Arson","VIOLENT":"N"},"907":{"GROUP":"Arson","VIOLENT":"N"},"920":{"GROUP":"Arson","VIOLENT":"N"},"930":{"GROUP":"Arson","VIOLENT":"N"},"1001":{"GROUP":"Counterfeiting","VIOLENT":"N"},"1002":{"GROUP":"Counterfeiting","VIOLENT":"N"},"1101":{"GROUP":"Fraud","VIOLENT":"N"},"1102":{"GROUP":"Fraud","VIOLENT":"N"},"1103":{"GROUP":"Fraud","VIOLENT":"N"},"1105":{"GROUP":"Fraud","VIOLENT":"N"},"1106":{"GROUP":"Fraud","VIOLENT":"N"},"1107":{"GROUP":"Fraud","VIOLENT":"N"},"1108":{"GROUP":"Fraud","VIOLENT":"N"},"1109":{"GROUP":"Fraud","VIOLENT":"N"},"1201":{"GROUP":"Embezzlement","VIOLENT":"N"},"1300":{"GROUP":"Recovered Stolen Property","VIOLENT":"N"},"1301":{"GROUP":"Larceny","VIOLENT":"N"},"1302":{"GROUP":"Larceny","VIOLENT":"N"},"1304":{"GROUP":"Recovered Stolen Property","VIOLENT":"N"},"1401":{"GROUP":"Vandalism","VIOLENT":"N"},"1402":{"GROUP":"Vandalism","VIOLENT":"N"},"1415":{"GROUP":"Vandalism","VIOLENT":"N"},"1501":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1502":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1503":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1504":{"GROUP":"Other","VIOLENT":"N"},"1510":{"GROUP":"Firearm Violations","VIOLENT":"N"},"1601":{"GROUP":"Prostitution","VIOLENT":"N"},"1602":{"GROUP":"Prostitution","VIOLENT":"N"},"1603":{"GROUP":"Prostitution","VIOLENT":"N"},"1605":{"GROUP":"Prostitution","VIOLENT":"N"},"1607":{"GROUP":"Prostitution","VIOLENT":"N"},"1610":{"GROUP":"Human Trafficking","VIOLENT":"N"},"1620":{"GROUP":"Human Trafficking","VIOLENT":"N"},"1702":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1703":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1704":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1710":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1711":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1720":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1721":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1723":{"GROUP":"Sexual Assault","VIOLENT":"N"},"1725":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1726":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1727":{"GROUP":"Sexual Assault","VIOLENT":"Y"},"1730":{"GROUP":"Sexual Assault","VIOLENT":"N"},"1731":{"GROUP":"Sexual Offense","VIOLENT":"N"},"1805":{"GROUP":"Drug Violation","VIOLENT":"N"},"1806":{"GROUP":"Drug Violation","VIOLENT":"N"},"1807":{"GROUP":"Drug Violation","VIOLENT":"N"},"1810":{"GROUP":"Drug Violation","VIOLENT":"N"},"1815":{"GROUP":"Drug Violation","VIOLENT":"N"},"1825":{"GROUP":"Drug Violation","VIOLENT":"N"},"1830":{"GROUP":"Drug Violation","VIOLENT":"N"},"1831":{"GROUP":"Drug Violation","VIOLENT":"N"},"1832":{"GROUP":"Drug Violation","VIOLENT":"N"},"1840":{"GROUP":"Drug Violation","VIOLENT":"N"},"1841":{"GROUP":"Drug Violation","VIOLENT":"N"},"1842":{"GROUP":"Drug Violation","VIOLENT":"N"},"1843":{"GROUP":"Drug Violation","VIOLENT":"N"},"1844":{"GROUP":"Drug Violation","VIOLENT":"N"},"1845":{"GROUP":"Drug Violation","VIOLENT":"N"},"1846":{"GROUP":"Drug Violation","VIOLENT":"N"},"1847":{"GROUP":"Drug Violation","VIOLENT":"N"},"1848":{"GROUP":"Drug Violation","VIOLENT":"N"},"1849":{"GROUP":"Drug Violation","VIOLENT":"N"},"1850":{"GROUP":"Drug Violation","VIOLENT":"N"},"1855":{"GROUP":"Drug Violation","VIOLENT":"N"},"1858":{"GROUP":"Drug Violation","VIOLENT":"N"},"1863":{"GROUP":"Drug Violation","VIOLENT":"N"},"1864":{"GROUP":"Drug Violation","VIOLENT":"N"},"1866":{"GROUP":"Drug Violation","VIOLENT":"N"},"1868":{"GROUP":"Drug Violation","VIOLENT":"N"},"1870":{"GROUP":"Drug Violation","VIOLENT":"N"},"1873":{"GROUP":"Drug Violation","VIOLENT":"N"},"1874":{"GROUP":"Drug Violation","VIOLENT":"N"},"1875":{"GROUP":"Drug Violation","VIOLENT":"N"},"1901":{"GROUP":"Gambling","VIOLENT":"N"},"1902":{"GROUP":"Gambling","VIOLENT":"N"},"1903":{"GROUP":"Gambling","VIOLENT":"N"},"1904":{"GROUP":"Gambling","VIOLENT":"N"},"1921":{"GROUP":"Gambling","VIOLENT":"N"},"2003":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2004":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2005":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2006":{"GROUP":"Restraining Order Violations","VIOLENT":"N"},"2007":{"GROUP":"Restraining Order Violations","VIOLENT":"N"},"2010":{"GROUP":"Home Invasion","VIOLENT":"N"},"2101":{"GROUP":"Operating Under the Influence","VIOLENT":"N"},"2102":{"GROUP":"Operating Under the Influence","VIOLENT":"N"},"2201":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2202":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2204":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2401":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2403":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2405":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2407":{"GROUP":"Disorderly Conduct","VIOLENT":"N"},"2511":{"GROUP":"Other","VIOLENT":"N"},"2604":{"GROUP":"Other","VIOLENT":"N"},"2605":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2606":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2608":{"GROUP":"Offenses Against Child / Family","VIOLENT":"N"},"2609":{"GROUP":"Drug Violation","VIOLENT":"N"},"2610":{"GROUP":"Other","VIOLENT":"N"},"2611":{"GROUP":"Other","VIOLENT":"N"},"2612":{"GROUP":"Fire Related Reports","VIOLENT":"N"},"2613":{"GROUP":"Other","VIOLENT":"Y"},"2616":{"GROUP":"Other","VIOLENT":"N"},"2617":{"GROUP":"Drug Violation","VIOLENT":"N"},"2618":{"GROUP":"Explosives","VIOLENT":"N"},"2619":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2622":{"GROUP":"Other","VIOLENT":"N"},"2623":{"GROUP":"Other","VIOLENT":"N"},"2624":{"GROUP":"Operating Under the Influence","VIOLENT":"N"},"2628":{"GROUP":"Phone Call Complaints","VIOLENT":"N"},"2629":{"GROUP":"Harassment","VIOLENT":"N"},"2631":{"GROUP":"Other","VIOLENT":"N"},"2632":{"GROUP":"Evading Fare","VIOLENT":"N"},"2633":{"GROUP":"Other","VIOLENT":"N"},"2636":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2641":{"GROUP":"Other","VIOLENT":"N"},"2642":{"GROUP":"Missing Person Reported","VIOLENT":"N"},"2646":{"GROUP":"Liquor Violation","VIOLENT":"N"},"2647":{"GROUP":"Other","VIOLENT":"N"},"2648":{"GROUP":"Bomb Hoax","VIOLENT":"N"},"2650":{"GROUP":"Other","VIOLENT":"N"},"2651":{"GROUP":"Other","VIOLENT":"N"},"2657":{"GROUP":"Other","VIOLENT":"N"},"2658":{"GROUP":"Other","VIOLENT":"N"},"2660":{"GROUP":"Other","VIOLENT":"N"},"2662":{"GROUP":"Ballistics","VIOLENT":"N"},"2663":{"GROUP":"Other","VIOLENT":"N"},"2664":{"GROUP":"Other","VIOLENT":"N"},"2665":{"GROUP":"Other","VIOLENT":"N"},"2667":{"GROUP":"Prisoner Related Incidents","VIOLENT":"Y"},"2668":{"GROUP":"Prisoner Related Incidents","VIOLENT":"N"},"2670":{"GROUP":"Criminal Harassment","VIOLENT":"N"},"2672":{"GROUP":"Biological Threat","VIOLENT":"N"},"2801":{"GROUP":"Other","VIOLENT":"N"},"2900":{"GROUP":"Violations","VIOLENT":"N"},"2901":{"GROUP":"Violations","VIOLENT":"N"},"2902":{"GROUP":"Violations","VIOLENT":"N"},"2903":{"GROUP":"Violations","VIOLENT":"N"},"2904":{"GROUP":"Violations","VIOLENT":"N"},"2905":{"GROUP":"Violations","VIOLENT":"N"},"2906":{"GROUP":"Violations","VIOLENT":"N"},"2907":{"GROUP":"Violations","VIOLENT":"N"},"2908":{"GROUP":"Violations","VIOLENT":"N"},"2909":{"GROUP":"Violations","VIOLENT":"N"},"2910":{"GROUP":"Violations","VIOLENT":"N"},"2911":{"GROUP":"Violations","VIOLENT":"N"},"2912":{"GROUP":"Violations","VIOLENT":"N"},"2913":{"GROUP":"Violations","VIOLENT":"N"},"2914":{"GROUP":"Violations","VIOLENT":"N"},"2915":{"GROUP":"Violations","VIOLENT":"N"},"2916":{"GROUP":"Violations","VIOLENT":"N"},"2917":{"GROUP":"Violations","VIOLENT":"N"},"3001":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3002":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3004":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3006":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3007":{"GROUP":"Medical Assistance","VIOLENT":"N"},"3008":{"GROUP":"Suicide","VIOLENT":"Y"},"3009":{"GROUP":"Suicide","VIOLENT":"Y"},"3016":{"GROUP":"Medical Assistance","VIOLENT":"Y"},"3017":{"GROUP":"Medical Assistance","VIOLENT":"Y"},"3018":{"GROUP":"Other","VIOLENT":"N"},"3021":{"GROUP":"Drug Violation","VIOLENT":"N"},"3022":{"GROUP":"Drug Violation","VIOLENT":"N"},"3023":{"GROUP":"Drug Violation","VIOLENT":"N"},"3029":{"GROUP":"Suicide","VIOLENT":"Y"},"3040":{"GROUP":"Other","VIOLENT":"N"},"3102":{"GROUP":"Other","VIOLENT":"N"},"3106":{"GROUP":"Property Related Damage","VIOLENT":"N"},"3107":{"GROUP":"Explosives","VIOLENT":"N"},"3108":{"GROUP":"Fire Related Reports","VIOLENT":"N"},"3109":{"GROUP":"Other","VIOLENT":"N"},"3110":{"GROUP":"Other","VIOLENT":"N"},"3111":{"GROUP":"Other","VIOLENT":"N"},"3112":{"GROUP":"Other","VIOLENT":"N"},"3114":{"GROUP":"Other","VIOLENT":"N"},"3115":{"GROUP":"Other","VIOLENT":"N"},"3116":{"GROUP":"Harbor Related Incidents","VIOLENT":"N"},"3117":{"GROUP":"Other","VIOLENT":"N"},"3119":{"GROUP":"Firearm Discovery","VIOLENT":"N"},"3122":{"GROUP":"Aircraft","VIOLENT":"N"},"3123":{"GROUP":"Explosives","VIOLENT":"N"},"3125":{"GROUP":"Warrant Arrests","VIOLENT":"N"},"3130":{"GROUP":"Search Warrants","VIOLENT":"N"},"3151":{"GROUP":"Harassment","VIOLENT":"N"},"3152":{"GROUP":"Other","VIOLENT":"N"},"3160":{"GROUP":"Fire Related Reports","VIOLENT":"N"},"3170":{"GROUP":"Harassment","VIOLENT":"N"},"3201":{"GROUP":"Property Lost","VIOLENT":"N"},"3202":{"GROUP":"Property Found","VIOLENT":"N"},"3203":{"GROUP":"Other","VIOLENT":"N"},"3204":{"GROUP":"Firearm Discovery","VIOLENT":"N"},"3205":{"GROUP":"License Plate Related Incidents","VIOLENT":"N"},"3206":{"GROUP":"License Plate Related Incidents","VIOLENT":"N"},"3207":{"GROUP":"Property Found","VIOLENT":"N"},"3208":{"GROUP":"Property Lost","VIOLENT":"N"},"3209":{"GROUP":"Property Found","VIOLENT":"N"},"3210":{"GROUP":"Property Found","VIOLENT":"N"},"3301":{"GROUP":"Verbal Disputes","VIOLENT":"N"},"3302":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3303":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3304":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3305":{"GROUP":"Assembly or Gathering Violations","VIOLENT":"N"},"3402":{"GROUP":"Other","VIOLENT":"N"},"3403":{"GROUP":"Police Service Incidents","VIOLENT":"N"},"3404":{"GROUP":"Other","VIOLENT":"N"},"3408":{"GROUP":"Other","VIOLENT":"N"},"3410":{"GROUP":"Other","VIOLENT":"N"},"3412":{"GROUP":"Other","VIOLENT":"N"},"3414":{"GROUP":"Other","VIOLENT":"N"},"3501":{"GROUP":"Missing Person Reported","VIOLENT":"N"},"3502":{"GROUP":"Missing Person Located","VIOLENT":"N"},"3503":{"GROUP":"Missing Person Located","VIOLENT":"N"},"3612":{"GROUP":"Harassment","VIOLENT":"N"},"3620":{"GROUP":"Other","VIOLENT":"N"},"3625":{"GROUP":"Other","VIOLENT":"N"},"3701":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3702":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3704":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3706":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3709":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3712":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3801":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3802":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3803":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3805":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3807":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3810":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3811":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3820":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3821":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3830":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"},"3831":{"GROUP":"Motor Vehicle Accident Response","VIOLENT":"N"}}')},58:function(e,O,t){e.exports=t(164)},63:function(e,O,t){},89:function(e,O,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.2b177efc.chunk.js.map
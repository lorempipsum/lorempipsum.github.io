(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+66b":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),I=a("VsWU"),i=a.n(I);t.a=function(e){var t=e.variables,a=function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("code",null,e,": ",t),"\n")},n=[];if(t)for(var I=0,c=Object.entries(t);I<c.length;I++){var o=c[I],r=o[0],g=o[1];n.push(a(r,g))}return l.a.createElement("div",{className:i.a.container},l.a.createElement("div",{className:i.a.codeBox},l.a.createElement("pre",null,l.a.createElement("span",null,"State variables:"),"\n","\n",n.map((function(e,t){return n[t]})))))}},"5W7g":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),I=a("Y3iX"),i=a.n(I);t.a=function(e){var t=e.children;return l.a.createElement("div",{className:i.a.buttonContainer},t)}},"5Wrh":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),I=a("Pvz/"),i=a.n(I);t.a=function(e){var t=e.id,a=e.onClick,n=e.label;return l.a.createElement("button",{className:i.a.flexButton,onClick:a,id:t},n)}},"6sdT":function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),l=a("q1tI"),I=a.n(l),i=a("7oih"),c=a("+66b"),o=a("tUjs"),r=a.n(o),g=a("5W7g"),u=a("5Wrh");t.default=function(){var e=new Array(50).fill(0);e[Math.floor(25)]=1;var t=Object(l.useState)(e),a=t[0],o=t[1],C=Object(l.useState)([e]),m=C[0],d=C[1],s=Object(l.useState)(0),A=s[0],b=s[1],v=Object(l.useState)(1e3),N=v[0],Z=v[1],Y=Object(l.useState)(0),p=Y[0],j=(Y[1],{lastInterval:p,time:A,timeStep:N});Object(l.useEffect)((function(){var e=setInterval((function(){if(b((function(e){return e+1})),A<25){var e=function(e){for(var t=new Array(50).fill(0),a=1;a<e.length-1;a++){var n=e[a-1],l=e[a],I=e[a+1],i=n^(l||I);t[a]=i}return t}(a);o(e),d((function(t){return[].concat(Object(n.a)(t),[e])}))}}),N);return function(){return clearInterval(e)}}),[a,A,N]);return I.a.createElement(i.a,{title:"Experiments - Rule 30"},I.a.createElement(c.a,{variables:j}),I.a.createElement(g.a,null,I.a.createElement(u.a,{onClick:function(){Z((function(e){return e/2}))},id:"speedUpButton",label:"Speed Up"}),I.a.createElement(u.a,{onClick:function(){Z((function(e){return 1.5*e}))},id:"slowDownButton",label:"Slow Down"}),I.a.createElement(u.a,{onClick:function(){return Z((function(e){return 1e3})),b(0),o(e),void d([e])},id:"resetUpButton",label:"Reset"})),I.a.createElement("p",null,I.a.createElement("span",null,"Rule 30 running on one row: ")),I.a.createElement("div",{className:r.a.oneRowGridContainer},a.map((function(e,t){return 0===a[t]?I.a.createElement("div",{className:""+r.a.flexBox}):1===a[t]?I.a.createElement("div",{className:r.a.flexBox+" + ' ' + "+r.a.blackBox}):void 0}))),I.a.createElement("p",null,I.a.createElement("span",null,"Rule 30 running with the time increasing each row: ")),I.a.createElement("div",{className:r.a.gridContainer},m.map((function(e){return e.map((function(t,a){return 0===e[a]?I.a.createElement("div",{className:""+r.a.flexBox}):1===e[a]?I.a.createElement("div",{className:r.a.flexBox+" + ' ' + "+r.a.blackBox}):I.a.createElement("div",{className:r.a.flexBox+" + ' ' + "+r.a.redBox})}))}))))}},"7oih":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),I=a("Wbzz"),i=a("Cj5n"),c=a.n(i),o=a("kzbP"),r=a.n(o),g=function(e){var t=e.title;return n.createElement("div",null,n.createElement("title",null,t),n.createElement(I.a,{className:c.a.headingStyles,to:"/"},n.createElement("div",null,n.createElement("div",{className:c.a.logoWithCss},n.createElement("img",{src:r.a,className:c.a.logo}))),t),n.createElement("p",null,n.createElement(I.a,{to:"/about",className:c.a.subtitleText},"About"),n.createElement(I.a,{to:"/friends",className:c.a.subtitleText},"Friends"),n.createElement("a",{href:"https://instagram.com/sandroid_dreams",className:c.a.subtitleText},"Instagram")))},u=a("G86H"),C=a.n(u);a("WvRm"),t.a=function(e){var t=e.children,a=e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:C.a.main},l.a.createElement("div",{className:C.a.header},l.a.createElement(g,{title:"sandroid.dev"})),l.a.createElement("div",{className:C.a.content},l.a.createElement("div",{className:C.a.dividerUpper}),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,a)," ",l.a.createElement("div",{className:C.a.divider})),l.a.createElement("div",{className:"fadeIn"},t))))}},Cj5n:function(e,t,a){e.exports={subtitleText:"Title-module--subtitleText--3jFUU",logoWithCss:"Title-module--logoWithCss--3wEIC",logo:"Title-module--logo--3JMg9",squareB:"Title-module--squareB--1Ox5x",squareW:"Title-module--squareW--3laYP",headingStyles:"Title-module--headingStyles--1RN0_"}},G86H:function(e,t,a){e.exports={main:"Layout-module--main--3NgEk",header:"Layout-module--header--3zaAq",content:"Layout-module--content--nwbxQ",divider:"Layout-module--divider--3g3SL",dividerUpper:"Layout-module--dividerUpper--3NEoI",date:"Layout-module--date--v4T4_"}},"Pvz/":function(e,t,a){e.exports={flexButton:"Button-module--flexButton--35QpC"}},VsWU:function(e,t,a){e.exports={container:"StateVariables-module--container--2sbRO",codeBox:"StateVariables-module--codeBox--2y7Nm"}},WvRm:function(e,t,a){},Y3iX:function(e,t,a){e.exports={buttonContainer:"ButtonContainer-module--buttonContainer--20YhE"}},kzbP:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjI0IgogICBoZWlnaHQ9IjI0IgogICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2Zzg0NSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibG9nby5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4xICgzYmMyZTgxM2Y1LCAyMDIwLTA5LTA3KSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhODUxIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzODQ5IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlkPSJuYW1lZHZpZXc4NDciCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjExLjMxMzcwOSIKICAgICBpbmtzY2FwZTpjeD0iLTE2LjM3MTUwNCIKICAgICBpbmtzY2FwZTpjeT0iLTMuMTMwMTkzMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnODQ1IiAvPgogIDxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2Q0NTUwMDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTU5MDYiCiAgICAgaWQ9InJlY3Q4NzUiCiAgICAgd2lkdGg9IjYuNzExNTY2NCIKICAgICBoZWlnaHQ9IjkuMTcxMzAyOCIKICAgICB4PSI4LjY0NDIxNjUiCiAgICAgeT0iNi40MzAwMjU2IiAvPgogIDxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2Q0NTUwMDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTU5MDYiCiAgICAgaWQ9InJlY3Q4NzkiCiAgICAgd2lkdGg9IjIuNDk0ODc1NCIKICAgICBoZWlnaHQ9IjYuODUyMTIyOCIKICAgICB4PSI4LjY0ODc4MjciCiAgICAgeT0iMTUuMjY5MzU2IiAvPgogIDxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2Q0NTUwMDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTU5MDYiCiAgICAgaWQ9InJlY3Q4NzktMiIKICAgICB3aWR0aD0iMi40OTQ4NzU0IgogICAgIGhlaWdodD0iNi44NTIxMjI4IgogICAgIHg9IjEyLjg2NTQ3NSIKICAgICB5PSIxNS4yNjkzNTYiIC8+CiAgPHJlY3QKICAgICBzdHlsZT0iZmlsbDojZDQ1NTAwO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjc1NTkwNiIKICAgICBpZD0icmVjdDg3OS0yLTAiCiAgICAgd2lkdGg9IjIuNDk0ODc1NCIKICAgICBoZWlnaHQ9IjYuODUyMTIyOCIKICAgICB4PSItOC45NDkxOTk3IgogICAgIHk9IjE1LjE2ODY5MSIKICAgICB0cmFuc2Zvcm09InJvdGF0ZSgtOTAuMDkxNzUpIiAvPgogIDxyZWN0CiAgICAgc3R5bGU9ImZpbGw6I2Q0NTUwMDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTU5MDYiCiAgICAgaWQ9InJlY3Q4NzktMi0wLTIiCiAgICAgd2lkdGg9IjIuNDk0ODc1NCIKICAgICBoZWlnaHQ9IjYuODUyMTIyOCIKICAgICB4PSItOC44OTM4MjkzIgogICAgIHk9IjEuODQ3OTU1MiIKICAgICB0cmFuc2Zvcm09InJvdGF0ZSgtODkuODIwODk0KSIgLz4KICA8Y2lyY2xlCiAgICAgc3R5bGU9ImZpbGw6I2Q0NTUwMDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTU5MDYiCiAgICAgaWQ9InBhdGg5MjYiCiAgICAgY3g9IjEyIgogICAgIGN5PSIzLjE1ODAzOTYiCiAgICAgcj0iMi4yNjEwODUzIiAvPgo8L3N2Zz4K"},tUjs:function(e,t,a){e.exports={noBorder:"rule30-module--noBorder--3-uoO",flexContainer:"rule30-module--flexContainer--MLAgj",gridContainer:"rule30-module--gridContainer--V91E-",oneRowGridContainer:"rule30-module--oneRowGridContainer--1k_lp",justifyCenter:"rule30-module--justifyCenter--3oL8D",justifySpaceEvenly:"rule30-module--justifySpaceEvenly--Jp7Bv",flexBox:"rule30-module--flexBox--108sq",blackBox:"rule30-module--blackBox--1sE72",redBox:"rule30-module--redBox--XTDet",columnFlex:"rule30-module--columnFlex--u6Jx5"}}}]);
//# sourceMappingURL=component---src-pages-experiments-rule-30-js-964c28568914ac02ad81.js.map
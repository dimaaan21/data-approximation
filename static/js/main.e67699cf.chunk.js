(this["webpackJsonpdata-approximation"]=this["webpackJsonpdata-approximation"]||[]).push([[0],{134:function(t,e){},151:function(t,e,n){},160:function(t,e){},161:function(t,e){},162:function(t,e,n){},168:function(t,e,n){},169:function(t,e,n){},171:function(t,e,n){"use strict";n.r(e);var a=n(26),r=n(27),o=n.n(r),c=n(136),i=n.n(c),u=(n(151),n(92)),s=n.n(u),l=n(123),p=n(105),b=n(40),f=n(124),j=(n(153),n(128)),d=n.n(j);function m(t){return new Promise((function(e,n){var a=new FileReader;a.onload=function(t){var n=t.target.result,a=d.a.read(n,{type:"binary"}),r=[];a.SheetNames.forEach((function(t){var e=d.a.utils.sheet_to_row_object_array(a.Sheets[t]);r.push(e)})),e(r)},a.onerror=function(t){n(t)},a.readAsBinaryString(t)}))}function x(t,e,n){for(var a=t.length,r=[[a]],o=[],c=0;c<=Math.pow(n,2);++c){for(var i=0,u=0;u<a;++u)i+=Math.pow(t[u],c+1);o.push(i)}for(var s=0;s<n;++s)r[0].push(o[s]);for(var l=1;l<=n;++l){r[l]=[];for(var p=0;p<=n;++p)r[l].push(o[l+p-1])}for(var b=0;b<=n;++b){for(var f=0,j=0;j<a;++j)f+=Math.pow(t[j],b)*e[j];r[b].push(f)}return r}function h(t,e,n){return function(t,e){return(t+e)%2===0?1:-1}(e,n)*function(t,e,n){return O(t.filter((function(t,n){return n!==e})).map((function(t){return t.filter((function(t,e){return e!==n}))})))}(t,e,n)}function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=0,n=t.length;if(n&&n===t[0].length){if(1===n)return t[0][0];t[0].forEach((function(n,a){e+=n*h(t,0,a)}))}return e}function _(t,e){var n=[],a=O(t);if(0!==a)for(var r=function(r){var o=t.map((function(t,n){return t.map((function(t,a){return a===r?e[n]:t}))}));n.push(O(o)/a)},o=0;o<t.length;++o)r(o);return n}function g(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,a=x(t,e,n),r=a.map((function(t){return t.slice(0,-1)})),o=a[0].length-1,c=a.map((function(t){return t[o]})),i=_(r,c);return i.reverse(),i}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(t*Math.pow(10,e))/Math.pow(10,e)}n(162);var C=n(170),w=function(t){var e=t.chartRef;return Object(a.jsx)("div",{className:"chart",children:Object(a.jsx)("div",{ref:e,className:"chart__chart"})})},N=function(t){var e=t.option,n=Object(r.useRef)(null),o=Object(r.useRef)(null);return Object(r.useEffect)((function(){n.current=C.init(o.current)}),[o]),Object(r.useEffect)((function(){n.current.setOption(e)}),[e]),Object(a.jsx)(w,{chartRef:o})},y=(n(163),n(145)),S=(n(168),function(t){var e=t.cellsEditable,n=t.cols,r=t.colsWidth,o=t.onCellChange,c=t.rows,i=t.textAlign,u=void 0===i?"center":i,s=t.title,l=t.width;return Object(a.jsxs)("div",{className:"table",children:[Object(a.jsx)("p",{className:"table__title",children:s}),Object(a.jsxs)("table",{className:"table__table",style:{width:l},children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{className:"table__table-tr",children:n.map((function(t){return Object(a.jsx)("th",{className:"table__table-th table__table-th_align_"+u+(r?"":" table__table-th_width_"+n.length),children:t.name},"col-"+t.id)}))})}),Object(a.jsx)("tbody",{children:c.map((function(t,c){return Object(a.jsx)("tr",{className:"table__table-tr",children:n.map((function(i,s){return Object(a.jsx)("td",{className:"table__table-td table__table-th_align_"+u+(r?"":" table__table-td_width_"+n.length),children:e?Object(a.jsx)("input",{className:"table__table-input table__table-input_align_"+u,onChange:function(t){return o({rowIndex:c,colId:i.id,colIndex:s,value:t.target.value})},value:t[i.id]}):"tex"===i._syntax?Object(a.jsx)(y.InlineMath,{children:t[i.id]}):t[i.id]},"col-"+i.id)}))},"row"+c)}))})]})]})}),k=(n(169),function(t){var e=t.approximationCoefsRounding,n=t.approximationCoefsRoundingMax,o=t.approximationCoefsRoundingMin,c=t.arePointsLoaded,i=t.chartOption,u=t.fileLoaderRef,s=t.onButtonBackClick,l=t.onButtonExcelClick,p=t.onButtonGetPointsDataExcelClick,b=t.onButtonGetPointsDataServerClick,f=t.onCellPointChange,j=t.onInputApproximationCoefsRoundingChange,d=t.pointsSource,m=t.tableApproximationCols,x=t.tableApproximationRows,h=t.tablePointsCols,O=t.tablePointsRows;return Object(a.jsx)("div",{className:"approximator",children:c?Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)("div",{className:"approximator__group",children:Object(a.jsx)("button",{className:"approximator__group-button",onClick:s,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435"})}),Object(a.jsxs)("div",{className:"approximator__group",children:[Object(a.jsxs)("div",{className:"approximator__group-header",children:[Object(a.jsx)("p",{className:"approximator__group-title",children:"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(a.jsx)("p",{className:"approximator__group-subtitle",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044f\u0447\u0435\u0435\u043a \u0434\u043b\u044f X \u0438 Y \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c. \u041f\u0440\u0438 \u0438\u0445 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0440\u0430\u0441\u0447\u0435\u0442."})]}),Object(a.jsx)(S,{cellsEditable:!0,cols:h,onCellChange:f,rows:O,width:"100%"})]}),Object(a.jsxs)("div",{className:"approximator__group",children:[Object(a.jsxs)("div",{className:"approximator__group-header",children:[Object(a.jsx)("p",{className:"approximator__group-title",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438"}),Object(a.jsx)("p",{className:"approximator__group-subtitle",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043f\u0440\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0438:"}),Object(a.jsx)("input",{type:"number",step:1,min:o,max:n,value:e,onChange:function(t){return j(t.target.value)}})]}),Object(a.jsx)(S,{cols:m,rows:x,width:"100%"})]}),Object(a.jsxs)("div",{className:"approximator__group",children:[Object(a.jsxs)("div",{className:"approximator__group-header",children:[Object(a.jsx)("p",{className:"approximator__group-title",children:"\u0413\u0440\u0430\u0444\u0438\u043a\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0439"}),Object(a.jsx)("p",{className:"approximator__group-subtitle",children:"\u041a\u043b\u0438\u043a \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043b\u0435\u0433\u0435\u043d\u0434\u044b \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0441\u043a\u0440\u044b\u0442\u0438\u044e/\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0433\u0440\u0430\u0444\u0438\u043a\u0430."}),Object(a.jsx)("p",{className:"approximator__group-subtitle",children:"\u0413\u0440\u0430\u0444\u0438\u043a \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 - \u043f\u0440\u0438 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0438 \u043c\u044b\u0448\u044c\u044e \u043f\u043e \u043d\u0435\u043c\u0443 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0445."})]}),Object(a.jsx)(N,{option:i})]})]}):Object(a.jsxs)("div",{className:"approximator__group",children:[Object(a.jsxs)("div",{className:"approximator__group-header",children:[Object(a.jsx)("p",{className:"approximator__group-title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438"}),Object(a.jsx)("p",{className:"approximator__group-subtitle",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"})]}),Object(a.jsxs)("div",{className:"approximator__group-buttons",children:[Object(a.jsx)("div",{className:"approximator__group-buttons-row",children:Object(a.jsx)("button",{className:"approximator__group-button",onClick:b,children:"\u0421\u0435\u0440\u0432\u0435\u0440"})}),Object(a.jsxs)("div",{className:"approximator__group-buttons-row",children:[Object(a.jsx)("button",{className:"approximator__group-button",onClick:l,children:"Excel"}),"excel"===d&&Object(a.jsxs)("div",{className:"approximator__group-buttons-row",children:[Object(a.jsx)("input",{ref:u,type:"file",className:"approximator__group-file-loader"}),Object(a.jsx)("button",{className:"approximator__group-button",onClick:p,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})]})]})]})]})})}),M=function(){var t=Object(r.useState)([]),e=Object(b.a)(t,2),n=e[0],o=e[1],c=Object(r.useMemo)((function(){return n.map((function(t){return t.x}))}),[n]),i=Object(r.useMemo)((function(){return n.map((function(t){return t.y}))}),[n]),u=Object(r.useState)({}),j=Object(b.a)(u,2),d=j[0],h=j[1],O=Object(r.useState)(0),C=Object(b.a)(O,2),w=C[0],N=C[1],y=Object(r.useState)(3),S=Object(b.a)(y,2),M=S[0],E=S[1],P=Object(r.useState)(6),R=Object(b.a)(P,1)[0],A=Object(r.useState)(1),I=Object(b.a)(A,1)[0],B=Object(r.useState)("std"),F=Object(b.a)(B,1)[0],L=Object(r.useState)({}),D=Object(b.a)(L,2),G=D[0],T=D[1],z=Object(r.useState)([]),J=Object(b.a)(z,2),X=J[0],U=J[1],W=Object(r.useState)(.1),Z=Object(b.a)(W,2),q=Z[0],K=Z[1],V=Object(r.useState)({}),Y=Object(b.a)(V,2),H=Y[0],Q=Y[1],$=Object(r.useState)(["exponential","linear","polynomial2","power"]),tt=Object(b.a)($,1)[0],et=Object(r.useState)({exponential:function(t,e,n){return e*Math.exp(n*t)},linear:function(t,e,n){return e*t+n},polynomial2:function(t,e,n,a){return e*Math.pow(t,2)+n*t+a},power:function(t,e,n){return e*Math.pow(t,n)}}),nt=Object(b.a)(et,1)[0],at=Object(r.useMemo)((function(){return{exponential:function(){return function(t,e){var n=x(t,e.map((function(t){return Math.log(t)})),1),a=n.map((function(t){return t.slice(0,-1)})),r=n[0].length-1,o=_(a,n.map((function(t){return t[r]})));return[Math.exp(o[0]),o[1]]}(c,i)},linear:function(){return g(c,i,1)},polynomial2:function(){return g(c,i,2)},power:function(){return function(t,e){var n=x(t.map((function(t){return Math.log(t)})),e.map((function(t){return Math.log(t)})),1),a=n.map((function(t){return t.slice(0,-1)})),r=n[0].length-1,o=_(a,n.map((function(t){return t[r]})));return[Math.exp(o[0]),o[1]]}(c,i)}}}),[c,i]),rt=Object(r.useState)({exponential:"ae ^ {bx}",linear:"ax + b",polynomial2:"ax ^ 2 + bx + c",power:"ax ^ b"}),ot=Object(b.a)(rt,1)[0],ct=Object(r.useState)({exponential:"\u042d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f",linear:"\u041b\u0438\u043d\u0435\u0439\u043d\u0430\u044f",polynomial2:"\u041f\u043e\u043b\u0438\u043d\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u0430\u044f (\u0441\u0442\u0435\u043f\u0435\u043d\u044c 2)",power:"\u0421\u0442\u0435\u043f\u0435\u043d\u043d\u0430\u044f"}),it=Object(b.a)(ct,1)[0],ut=Object(r.useState)(!1),st=Object(b.a)(ut,2),lt=st[0],pt=st[1],bt=Object(r.useState)({}),ft=Object(b.a)(bt,2),jt=ft[0],dt=ft[1],mt=Object(r.useRef)(null),xt=Object(r.useState)(null),ht=Object(b.a)(xt,2),Ot=ht[0],_t=ht[1],gt=Object(r.useState)([]),vt=Object(b.a)(gt,2),Ct=vt[0],wt=vt[1],Nt=Object(r.useState)([]),yt=Object(b.a)(Nt,2),St=yt[0],kt=yt[1],Mt=Object(r.useState)([]),Et=Object(b.a)(Mt,2),Pt=Et[0],Rt=Et[1],At=Object(r.useState)([]),It=Object(b.a)(At,2),Bt=It[0],Ft=It[1],Lt=Object(r.useCallback)((function(t){o(t),U(t.map((function(t){return t.x}))),K(v(Math.abs(t[1].x-t[0].x),1)),pt(!0)}),[]);Object(r.useEffect)((function(){if(!f.a.apps.length){f.a.initializeApp({apiKey:"AIzaSyCGJlVdf6WnA4NZPMBr3CZ8g5mel6lJh1U",authDomain:"data-approximation.firebaseapp.com",databaseURL:"https://data-approximation-default-rtdb.firebaseio.com",projectId:"data-approximation",storageBucket:"data-approximation.appspot.com",messagingSenderId:"782751732208",appId:"1:782751732208:web:890c565a3f68e4c0d74d35"})}}),[]),Object(r.useEffect)((function(){var t=[{},{}];n.forEach((function(e,n){var a=(n+1).toString();t[0][a]=e.x,t[1][a]=e.y})),Ft(t),Rt(n.map((function(t,e){var n=(e+1).toString();return{id:n,name:n}})))}),[n]),Object(r.useEffect)((function(){var t={},e={},n={};tt.forEach((function(a){var r=nt[a];t[a]=at[a](),e[a]=(X||[]).map((function(e){return r.apply(void 0,[e].concat(Object(p.a)(t[a])))})),n[a]=function(t,e){var n=0;if("std"===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"std")){for(var a=t.length,r=0;r<a;++r)n+=Math.pow(t[r]-e[r],2);n=Math.sqrt(n/a)}return n}(i,e[a],F)})),h(t),Q(e),T(n)}),[F,X,tt,nt,at,i]),Object(r.useEffect)((function(){var t=0;for(var e in d){var n=d[e];n&&n.length>t&&(t=n.length)}N(t)}),[d]),Object(r.useEffect)((function(){var t=function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:26,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"array",n=97,a=Object(p.a)(Array(t)).map((function(t,e){return String.fromCharCode(e+n)}));return"array"===e?a:a.join("")}("eng",w,"array"),e=[{id:"approximationType",name:"\u0422\u0438\u043f \u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438"},{id:"approximationTypeFunction",name:"\u0412\u0438\u0434 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",_syntax:"tex"},{id:"approximationError",name:"\u041f\u043e\u0433\u0440\u0435\u0448\u043d\u043e\u0441\u0442\u044c"}].concat(Object(p.a)(t.map((function(t){return{id:"coef-"+t,name:t}}))));wt(e)}),[w]),Object(r.useEffect)((function(){var t=[],e=function(e){var n=d[e],a={};Ct.forEach((function(t,r){a[t.id]=r>2?v(n[r-3],M)||"":"approximationError"===t.id?v(G[e],M)||"":"approximationTypeFunction"===t.id?ot[e]:it[e]})),t.push(a)};for(var n in d)e(n);!function(t){var e=arguments.length>2?arguments[2]:void 0;"object"===typeof t[0]||isNaN(parseFloat(t[0]))?t.sort((function(t,n){return t[e]<n[e]?-1:t[e]==n[e]?0:1})):t.sort((function(t,e){return t-e}))}(t,"asc","approximationError"),kt(t)}),[d,M,G,ot,it,Ct]);var Dt=Object(r.useCallback)((function(t){return'<table class="approximator__chart-tooltip-table" border="1">\n      <thead>\n        <tr>\n            '.concat(t.map((function(t){return'<th class="approximator__chart-tooltip-th">'.concat(t.seriesName,"</th>")})).join(""),"\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n            ").concat(t.map((function(t){return'<td class="approximator__chart-tooltip-td">'.concat(v(t.value,M),"</td>")})).join(""),"\n        </tr>\n      </tbody>\n    </table>")}),[M]);Object(r.useEffect)((function(){var t=[{symbolSize:8,data:i,type:"scatter",name:"\u0418\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}];for(var e in H)t.push({symbolSize:3,data:H[e],type:"line",smooth:!0,name:it[e]});dt({tooltip:{trigger:"axis",formatter:Dt,axisPointer:{type:"cross"}},legend:{legend:{data:t.map((function(t){return t.name}))}},xAxis:{type:"category",data:c,nameLocation:"middle"},yAxis:{type:"value"},series:t})}),[H,it,Dt,c,i]);var Gt=Object(r.useCallback)((function(){return new Promise(function(){var t=Object(l.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!mt.current){t.next=10;break}if(!(n=mt.current.files[0])){t.next=9;break}return t.next=5,m(n);case 5:a=t.sent,e(a[0]),t.next=10;break;case 9:alert("\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b \u0435\u0449\u0435 \u0440\u0430\u0437.");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[mt]),Tt=Object(r.useCallback)((function(){return new Promise((function(t){f.a.database().ref("/points").on("value",(function(e){return t(e.val())}))}))}),[]),zt=Object(r.useCallback)((function(){pt(!1)}),[pt]),Jt=Object(r.useCallback)((function(t){var e=t.rowIndex,n=t.colIndex,a=t.value;o((function(t){return t.map((function(t,r){return r===n?0===e?{x:a,y:t.y}:{x:t.x,y:a}:t}))}))}),[]),Xt=Object(r.useCallback)((function(t){E(parseInt(t)||I)}),[I]),Ut=Object(r.useCallback)((function(t){K(parseFloat(t)||.1)}),[]),Wt=Object(r.useCallback)((function(){_t("excel")}),[_t]),Zt=Object(r.useCallback)(Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Lt,t.next=3,Gt();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),[Gt,Lt]),qt=Object(r.useCallback)(Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Lt,t.next=3,Tt();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),[Tt,Lt]);return Object(a.jsx)(k,{approximationCoefsRounding:M,approximationCoefsRoundingMax:R,approximationCoefsRoundingMin:I,approximationPointsXStep:q,arePointsLoaded:lt,chartOption:jt,fileLoaderRef:mt,onButtonBackClick:zt,onButtonExcelClick:Wt,onButtonGetPointsDataExcelClick:Zt,onButtonGetPointsDataServerClick:qt,onCellPointChange:Jt,onInputApproximationCoefsRoundingChange:Xt,onInputApproximationPointsXStepChange:Ut,pointsSource:Ot,tableApproximationCols:Ct,tableApproximationRows:St,tablePointsCols:Pt,tablePointsRows:Bt})},E=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(M,{})})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),o(t),c(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),P()}},[[171,1,2]]]);
//# sourceMappingURL=main.e67699cf.chunk.js.map
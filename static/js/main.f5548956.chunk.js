(this["webpackJsonpgame-minesweeper"]=this["webpackJsonpgame-minesweeper"]||[]).push([[0],{23:function(n,e,t){n.exports=t(36)},28:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(9),c=t.n(i),o=(t(28),t(3)),u=t.n(o),s=t(6),l=t(5),f=t(1),p=t(2);function d(){var n=Object(f.a)(["\n  margin-top: 20px;\n"]);return d=function(){return n},n}function g(){var n=Object(f.a)(["\n  text-align: center;\n"]);return g=function(){return n},n}var v=p.b.div(g()),b=p.b.h1(d());function m(){var n=Object(f.a)(["\n  padding: 5px 20px;\n  cursor: pointer;\n  border-radius: 5px;\n"]);return m=function(){return n},n}var h=p.b.button(m());function E(){var n=Object(f.a)(["\n  margin-top: 20px;\n"]);return E=function(){return n},n}function O(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  margin: 0 auto;\n"]);return O=function(){return n},n}var y=p.b.div(O()),S=Object(p.b)(h)(E());var x=Object(l.b)((function(n){return{isStarting:n.isSetting}}))((function(n){var e=n.onPlayGame,t=n.isStarting,i=Object(r.useState)(9),c=Object(s.a)(i,2),o=c[0],u=c[1];return a.a.createElement(y,null,a.a.createElement("select",{onChange:function(n){return u(parseInt(n.target.value))}},a.a.createElement("option",{value:9},"Beginner"),a.a.createElement("option",{value:16},"Advantage")),a.a.createElement(S,{onClick:function(){return e(o)},"data-testid":"button-play-game"},t?"Please wait":"Play game"))})),w=function(n){return{type:"SET_DATA_SUCCESS",payload:n}};function j(){var n=Object(f.a)(["\n    background-color: #cccccc ;\n    color: ",";\n    cursor: inherit;\n  "]);return j=function(){return n},n}function _(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #aaaaaa;\n  border-radius: 3px;\n  margin: 1px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  font-weight: 700;\n\n  ","\n  ","\n"]);return _=function(){return n},n}function k(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return k=function(){return n},n}function T(){var n=Object(f.a)(["\n  width: max-content;\n  margin: 0 auto;\n  border: 1px solid #aaaaaa;\n  display: flex;\n  flex-direction: column;\n"]);return T=function(){return n},n}var D=p.b.div(T()),A=p.b.div(k()),P=p.b.div(_(),(function(n){return n.isOpen&&Object(p.a)(j(),(function(n){return function(n){switch(parseInt(n)){case 1:return"#0000ff";case 2:return"#cc33ff";case 3:return"#009900";case 4:return"#ffaa00";case 5:return"#8000ff";case 6:return"#b3b300";case 7:return"#206020";case 8:return"#4ce600";default:return"#cccccc"}}(n.density)}))}),(function(n){return n.isOpen&&n.isMine&&"background-color: red;"}));function M(){var n=Object(f.a)(["\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 300px;\n"]);return M=function(){return n},n}function G(){var n=Object(f.a)(["\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.4);\n"]);return G=function(){return n},n}var R=p.b.div(G()),I=p.b.div(M());function C(n,e,t){var r=[];return n>0&&e>0&&r.push(t[n-1][e-1]),n>0&&r.push(t[n-1][e]),n>0&&e<t.length-1&&r.push(t[n-1][e+1]),e<t.length-1&&r.push(t[n][e+1]),n<t.length-1&&e<t.length-1&&r.push(t[n+1][e+1]),n<t.length-1&&r.push(t[n+1][e]),n<t.length-1&&e>0&&r.push(t[n+1][e-1]),e>0&&r.push(t[n][e-1]),r}var N=function(n,e){for(var t=[],r=0;r<n;r++){t.push([]);for(var a=0;a<n;a++)t[r][a]={x:r,y:a,isMine:!1,isOpen:!1}}e.forEach((function(n){var e=n.x,r=n.y;t[e][r].isMine=!0}));for(var i=0;i<t.length;i++)for(var c=0;c<t.length;c++)!0!==t[i][c].isMine&&function(){var n=0;C(t[i][c].x,t[i][c].y,t).forEach((function(e){e.isMine&&n++})),n>0&&(t[i][c].density=n)}();return t},L=function n(e,t,r){return C(e,t,r).forEach((function(e){e.isOpen||0!==e.density&&e.isMine||(r[e.x][e.y].isOpen=!0,e.density||n(e.x,e.y,r))})),r},U=function(n,e){for(var t=0,r=0;r<n.length;r++)for(var a=0;a<n.length;a++)!1===n[r][a].isOpen&&t++;return t===e},X=function(n){function e(n){return(n<10?"0":"")+n}var t=(n=(n-n%1e3)/1e3)%60,r=(n=(n-t)/60)%60;return e((n-r)/60)+":"+e(r)+":"+e(t)};function B(){var n=Object(f.a)(["\n  margin: 20px auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n"]);return B=function(){return n},n}var Y=p.b.div(B());var z=Object(l.b)((function(n){return{dataGrid:n.data,isSetting:n.isSetting}}),(function(n){return{onSetDataSuccess:function(e){return n(w(e))},onResetGame:function(){return n({type:"RESET_GAME"})}}}))((function(n){var e=n.dataGrid,t=n.onSetDataSuccess,i=n.onResetGame,c=n.onPlayGame,o=n.isSetting,l=n.mines,f=Object(r.useState)(null),p=Object(s.a)(f,2),d=p[0],g=p[1],v=Object(r.useState)(0),b=Object(s.a)(v,2),m=b[0],E=b[1],O=Object(r.useState)(0),y=Object(s.a)(O,2),S=y[0],x=y[1];function w(n){if(!n.isOpen){0===m&&E(performance.now());var r=n.x,a=n.y;if(n.isMine)x(performance.now()),g("lost"),function(){for(var n=0;n<e.length;n++)for(var r=0;r<e.length;r++)!e[n][r].isOpen&&e[n][r].isMine&&(e[n][r].isOpen=!0);t(e)}();else{var i=e;i[r][a].isOpen=!0,U(e,l)&&(x(performance.now()),g("won")),i[r][a].density||(i=L(r,a,i)),t(i)}}}return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{"data-testid":"grid-mines"},e.map((function(n,e){return a.a.createElement(A,{key:e},n.map((function(n,e){return a.a.createElement(P,{key:e,isOpen:n.isOpen,isMine:n.isMine,density:n.density,onClick:function(){return w(n)}},n.isOpen?n.isMine?"\ud83d\udca3":n.density:"")})))}))),d&&a.a.createElement(R,null,a.a.createElement(I,null,a.a.createElement("p",null,"You ".concat(d," the game in ").concat(X(S-m))),a.a.createElement(Y,null,a.a.createElement(h,{onClick:function(){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(c(e.length));case 2:g(null),E(0);case 4:case"end":return n.stop()}}))}},o?"Please wait":"New Game"),a.a.createElement(h,{onClick:function(){return i()&&g(null)}},"Home Page")))))})),J=function(n){var e,t,r,a;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=9===n?10:40,i.prev=1,i.next=4,u.a.awrap(fetch("https://tiki-minesweeper.herokuapp.com/getMines?size=".concat(n,"&mines=").concat(e)));case 4:if(!(t=i.sent)){i.next=14;break}return i.next=8,u.a.awrap(t.json());case 8:if(r=i.sent,a=r.data,"success"!==r.msg){i.next=12;break}return i.abrupt("return",a);case 12:i.next=15;break;case 14:throw new Error("Error");case 15:i.next=20;break;case 17:throw i.prev=17,i.t0=i.catch(1),i.t0;case 20:case"end":return i.stop()}}),null,null,[[1,17]])};var V=Object(l.b)((function(n){return{isPlaying:n.isPlaying}}),(function(n){return{onSetData:function(){return n({type:"SET_DATA"})},onSetDataSuccess:function(e){return n(w(e))},onSetDataError:function(e){return n(function(n){return{type:"SET_DATA_ERROR",payload:n}}(e))},onSetIsPlaying:function(){return n({type:"SET_IS_PLAYING"})}}}))((function(n){var e=n.onSetData,t=n.onSetDataSuccess,i=n.onSetDataError,c=n.onSetIsPlaying,o=n.isPlaying,l=Object(r.useState)(10),f=Object(s.a)(l,2),p=f[0],d=f[1];function g(n){var r,a;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return d(9===n?10:40),e(),o.prev=3,o.next=6,u.a.awrap(J(n));case 6:r=o.sent,a=N(n,r),t(a),c(),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(3),i(o.t0);case 15:case"end":return o.stop()}}),null,null,[[3,12]])}return a.a.createElement(v,null,a.a.createElement(b,null,"Mini Minesweeper"),o?a.a.createElement(z,{onPlayGame:g,mines:p}):a.a.createElement(x,{onPlayGame:g}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(10),F=t(20),H=t(11),$={data:[],isSetting:!1,error:!1,isPlaying:!1},q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_DATA":return Object(H.a)({},n,{isSetting:!0});case"SET_DATA_SUCCESS":return Object(H.a)({},n,{isSetting:!1,data:Object(F.a)(e.payload)});case"SET_DATA_ERROR":return{isSetting:!1,data:[],error:e.payload};case"SET_IS_PLAYING":return Object(H.a)({},n,{isPlaying:!0});case"RESET_GAME":return $;default:return n}},K=Object(W.b)(q,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(a.a.createElement(l.a,{store:K},a.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f5548956.chunk.js.map
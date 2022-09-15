(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{19:function(n,e,t){},20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,c=t(0),o=t(11),i=t.n(o),d=(t(19),t(2)),a=(t(20),t(3)),s=t(1),b=a.c.div(r||(r=Object(d.a)(["\n  position: relative;\n  width: 500px;\n  height: 768px;\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);\n"]))),u=function(n){var e=n.children;return Object(s.jsx)(b,{children:e})},l=t(4),j=t(10),x=[{id:1,text:"\uc544\uce68 \uc694\uac00 \ub2e4\ub140\uc624\uae30",done:"true"},{id:2,text:"React \uacf5\ubd80\ud558\uae30",done:"true"}];function p(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(j.a)(Object(j.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type : ".concat(e.type))}}var f,O=Object(c.createContext)(),h=Object(c.createContext)(),g=Object(c.createContext)(),v=function(n){var e=n.children,t=Object(c.useReducer)(p,x),r=Object(l.a)(t,2),o=r[0],i=r[1],d=Object(c.useRef)(3);return Object(s.jsx)(O.Provider,{value:o,children:Object(s.jsx)(h.Provider,{value:i,children:Object(s.jsx)(g.Provider,{value:d,children:e})})})};function m(){return Object(c.useContext)(O)}function y(){return Object(c.useContext)(h)}var k,w,E,C,z,R,S,D,G,L,T,P,A,F=a.c.div(f||(f=Object(d.a)(["\n  padding: 20px 32px;\n  border-bottom: 1px solid #e9ecef;\n\n  h1 {\n    margin: 0;\n    font-size: 30px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 10px;\n    color: #868e96;\n    font-size: 19px;\n  }\n  .tasks-left {\n    color: #9f75c1;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n"]))),J=function(){var n=m().filter((function(n){return!n.done})),e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),r=e.toLocaleDateString("ko-Kr",{weekday:"long"});return Object(s.jsxs)(F,{children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("div",{className:"day",children:r}),Object(s.jsxs)("div",{className:"tasks-left",children:["\ud560 \uc77c ",n.length,"\uac1c \ub0a8\uc74c"]})]})},K=t(5),M=a.c.div(k||(k=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    color: #9f75c1;\n  }\n  display: none;\n"]))),N=a.c.div(w||(w=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),M),V=a.c.div(E||(E=Object(d.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 12px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n\n  ","\n"])),(function(n){return n.done&&Object(a.b)(C||(C=Object(d.a)(["\n      border: 1px solid #9f75c1;\n      color: #9f75c1;\n    "])))})),B=a.c.div(z||(z=Object(d.a)(["\n  flex: 1;\n  font-size: 18px;\n  color: #666666;\n  ","\n"])),(function(n){return n.done&&Object(a.b)(R||(R=Object(d.a)(["\n      color: #ced4da;\n    "])))})),I=function(n){var e=n.done,t=n.id,r=n.text,c=y();return Object(s.jsxs)(N,{children:[Object(s.jsx)(V,{done:e,onClick:function(){return c({type:"TOGGLE",id:t})},children:e&&Object(s.jsx)(K.c,{})}),Object(s.jsx)(B,{done:e,children:r}),Object(s.jsx)(M,{onClick:function(){return c({type:"REMOVE",id:t})},children:Object(s.jsx)(K.b,{})})]})},U=a.c.div(S||(S=Object(d.a)(["\n  flex: 1;\n  padding: 20px 32px 48px;\n  overflow-y: auto;\n  color: #777777;\n"]))),q=function(){var n=m();return Object(s.jsx)(U,{children:n.map((function(n){return Object(s.jsx)(I,{id:n.id,text:n.text,done:n.done},n.id)}))})},H=a.c.button(D||(D=Object(d.a)(["\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: block;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f4a660;\n  transition: 0.125s all ease-in;\n  &:hover {\n    background: #ef9952;\n  }\n  &:active {\n    background: #9f75c1;\n  }\n  ","\n"])),(function(n){return n.open&&Object(a.b)(G||(G=Object(d.a)(["\n      background: #966dc2;\n      &:hover {\n        background: #bb8bbe;\n      }\n      &:active {\n        background: #f4a660;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "])))})),Q=a.c.div(L||(L=Object(d.a)(["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"]))),W=a.c.form(T||(T=Object(d.a)(["\n  background: #f8f9fa;\n  padding: 32px 32px 72px;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  border-top: 1px solid #e9ecef;\n"]))),X=a.c.input(P||(P=Object(d.a)(["\n  padding: 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n"]))),Y=function(){var n=Object(c.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),d=i[0],a=i[1],b=y(),u=Object(c.useContext)(g);return Object(s.jsxs)(s.Fragment,{children:[t&&Object(s.jsx)(Q,{children:Object(s.jsx)(W,{onSubmit:function(n){n.preventDefault(),b({type:"CREATE",todo:{id:u.current,text:d,done:!1}}),a(""),r(!1),u.current+=1},children:Object(s.jsx)(X,{autoFocus:!0,placeholder:"\ud560 \uc77c \uc785\ub825 \ud6c4, Enter\ub97c \ub204\ub974\uc138\uc694",onChange:function(n){return a(n.target.value)},value:d})})}),Object(s.jsx)(H,{onClick:function(){return r(!t)},open:t,children:Object(s.jsx)(K.a,{})})]})},Z=Object(a.a)(A||(A=Object(d.a)(["\n  body {\n    background-color: pink;\n  }\n"])));var $=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(v,{children:[Object(s.jsx)(Z,{}),Object(s.jsxs)(u,{children:[Object(s.jsx)(J,{}),Object(s.jsx)(q,{}),Object(s.jsx)(Y,{})]})]})})};i.a.render(Object(s.jsx)($,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.47a89a86.chunk.js.map
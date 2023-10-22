"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[546],{546:function(n,e,t){t.r(e),t.d(e,{default:function(){return fn}});var r=t(2791),i=t(9434),o=t(6907),a=t(4942),u=t(1413),s=t(9439),l=t(3634),c="NOT_FOUND";var d=function(n,e){return n===e};function f(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?d:r,o=t.maxSize,a=void 0===o?1:o,u=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return c}return{get:r,put:function(e,i){r(e)===c&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,s);function f(){var e=l.get(arguments);if(e===c){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return f.clearCache=function(){return l.clear()},f}function p(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function m(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=u,c=l.memoizeOptions,d=void 0===c?t:c,f=Array.isArray(d)?d:[d],m=p(r),h=n.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(f)),x=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(x,{resultFunc:s,memoizedResultFunc:h,dependencies:m,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return i}var h,x,y,b,v,g,Z,j,w,C=m(f),k=function(n){return n.contacts},A=function(n){return n.contacts.isLoading},L=function(n){return n.contacts.error},z=function(n){return n.filter},P=C([k,z],(function(n,e){return n.list.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),N=t(168),I=t(6487),S=I.ZP.form(h||(h=(0,N.Z)(["\n  width: 100%;\n  border-radius: 4px;\n  border: 2px solid #a2b4fb;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),_=(I.ZP.label(x||(x=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n"]))),I.ZP.button(y||(y=(0,N.Z)(["\n  font-weight: bold;\n  &:hover {\n    background-color: #a2b4fb;\n    color: white;\n  }\n"]))),t(8382)),q=t(9657),E=t(930),F=t(6336),G=t(9055),O=t(184),R=function(){var n=(0,_.p)({position:"top"}),e=(0,i.I0)(),t=(0,i.v9)(k),o=(0,r.useState)({name:"",number:""}),c=(0,s.Z)(o,2),d=c[0],f=c[1],p=function(n){var e=n.target,t=e.name,r=e.value;f((function(n){return(0,u.Z)((0,u.Z)({},n),{},(0,a.Z)({},t,r))}))},m=d.name,h=d.number;return(0,O.jsxs)(S,{onSubmit:function(r){var i;r.preventDefault(),i=(0,u.Z)({},d),t.list.some((function(n){return n.name.toLowerCase()===i.name.toLowerCase()||n.number===i.number}))?n({title:"".concat(m," or ").concat(h," is already in contacts."),status:"warning",isClosable:!0}):e((0,l.uK)((0,u.Z)({},d))),f({name:"",number:""})},children:[(0,O.jsxs)(q.NI,{isRequired:!0,children:[(0,O.jsx)(E.l,{children:"Name "}),(0,O.jsx)(F.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:p,value:m,border:"1px",borderColor:" #a2b4fb",required:!0})]}),(0,O.jsxs)(q.NI,{isRequired:!0,children:[(0,O.jsx)(E.l,{children:"Number "}),(0,O.jsx)(F.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:p,value:h,border:"1px",borderColor:" #a2b4fb",required:!0})]}),(0,O.jsx)(G.z,{type:"submit",bgGradient:"linear(to-r, #a2b4fb, yellow.100)",children:"Add contact"})]})},T=(I.ZP.ul(b||(b=(0,N.Z)(["\n  margin-top: 30px;\n  margin-left: 20px;\n  flex-wrap: wrap;\n"]))),I.ZP.div(v||(v=(0,N.Z)(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  font-weight: bold;\n  border: 1px solid #a2b4fb;\n  padding: 8px;\n  border-radius: 4px;\n"])))),B=(I.ZP.li(g||(g=(0,N.Z)(["\n  font-size: 1em;\n  font-weight: bold;\n"]))),I.ZP.button(Z||(Z=(0,N.Z)(["\n  display: flex;\n  height: 17px;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n  border-radius: 4px;\n  border: 1px solid #a2b4fb;\n  margin-left: auto;\n  padding: 10px;\n\n  &:hover {\n    background-color: #a2b4fb;\n    color: white;\n  }\n"])))),D=I.ZP.h2(j||(j=(0,N.Z)(["\n  font-weight: bold;\n"]))),J=I.ZP.div(w||(w=(0,N.Z)(["\n  display: flex;\n  margin-top: 20px;\n"]))),M=t(4925),$=t(9640),K=t(9886);var U=t(5597),V=t(2481),Y=t(2996),H=t(5113),Q=["children","styleType","stylePosition","spacing"],W=["as"],X=["as"],nn=(0,K.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),en=(0,s.Z)(nn,2),tn=en[0],rn=en[1],on=(0,U.G)((function(n,e){var t=(0,V.jC)("List",n),i=(0,Y.Lr)(n),o=i.children,s=i.styleType,l=void 0===s?"none":s,c=i.stylePosition,d=i.spacing,f=(0,M.Z)(i,Q),p=function(n){return r.Children.toArray(n).filter((function(n){return(0,r.isValidElement)(n)}))}(o),m=d?(0,a.Z)({},"& > *:not(style) ~ *:not(style)",{mt:d}):{};return(0,O.jsx)(tn,{value:t,children:(0,O.jsx)(H.m.ul,(0,u.Z)((0,u.Z)({ref:e,listStyleType:l,listStylePosition:c,role:"list",__css:(0,u.Z)((0,u.Z)({},t.container),m)},f),{},{children:p}))})}));on.displayName="List",(0,U.G)((function(n,e){n.as;var t=(0,M.Z)(n,W);return(0,O.jsx)(on,(0,u.Z)({ref:e,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,U.G)((function(n,e){n.as;var t=(0,M.Z)(n,X);return(0,O.jsx)(on,(0,u.Z)({ref:e,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var an=(0,U.G)((function(n,e){var t=rn();return(0,O.jsx)(H.m.li,(0,u.Z)((0,u.Z)({ref:e},n),{},{__css:t.item}))}));an.displayName="ListItem",(0,U.G)((function(n,e){var t=rn();return(0,O.jsx)($.J,(0,u.Z)((0,u.Z)({ref:e,role:"presentation"},n),{},{__css:t.icon}))})).displayName="ListIcon";var un,sn=function(){var n=(0,i.I0)(),e=(0,i.v9)(P);return(0,O.jsxs)(J,{children:[(0,O.jsx)(D,{children:"Contacts"}),(0,O.jsx)(on,{marginLeft:"110px",children:e.map((function(e){return(0,O.jsxs)(T,{children:[(0,O.jsxs)(an,{children:[e.name," : ",e.number]}),(0,O.jsx)(B,{onClick:function(){return n((0,l.GK)(e.id))},children:"Delete"})]},e.id)}))})]})},ln=t(4808),cn=I.ZP.div(un||(un=(0,N.Z)(["\n  display: flex;\n  gap: 30px;\n  font-weight: bold;\n  margin-top: 20px;\n"]))),dn=function(){var n=(0,i.v9)(z),e=(0,i.I0)();return(0,O.jsxs)(cn,{children:["Find contact by name",(0,O.jsx)(F.I,{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:function(n){e((0,ln.$)(n.target.value))},border:"1px",borderColor:" #a2b4fb",required:!0})]})};function fn(){var n=(0,i.I0)(),e=(0,i.v9)(A),t=(0,i.v9)(L);return(0,r.useEffect)((function(){n((0,l.yF)())}),[n]),(0,O.jsxs)(o.B6,{children:[(0,O.jsx)(o.ql,{children:(0,O.jsx)("title",{children:"Your contacts"})}),(0,O.jsx)("h1",{children:"Phonebook"}),(0,O.jsx)(R,{}),(0,O.jsx)(dn,{}),(0,O.jsxs)("div",{children:[" ",e&&!t&&(0,O.jsx)("b",{children:"Request in progress..."})]}),(0,O.jsx)(sn,{})]})}}}]);
//# sourceMappingURL=546.2a164be5.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{5329:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,a,o,i,s,c,l,d,u=t(2791),p=t(9434),h=t(4270),x=t(4942),f=t(1413),m=t(9439),Z=t(3634),b=t(6916),g=function(n){return n.contacts},j=function(n){return n.contacts.isLoading},v=function(n){return n.filter},w=(0,b.P1)([g,v],(function(n,e){return n.list.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=t(168),C=t(5867),k=C.ZP.form(r||(r=(0,y.Z)(["\n  width: 40%;\n  border-radius: 4px;\n  border: 2px solid black;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),A=C.ZP.label(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n"]))),P=C.ZP.button(o||(o=(0,y.Z)(["\n  font-weight: bold;\n  &:hover {\n    background-color: #a580d5;\n    color: white;\n  }\n"]))),z=t(184),q=function(){var n=(0,p.I0)(),e=(0,p.v9)(g),t=(0,u.useState)({name:"",phone:""}),r=(0,m.Z)(t,2),a=r[0],o=r[1],i=function(n){var e=n.target,t=e.name,r=e.value;o((function(n){return(0,f.Z)((0,f.Z)({},n),{},(0,x.Z)({},t,r))}))},s=a.name,c=a.phone;return(0,z.jsxs)(k,{onSubmit:function(t){var r;t.preventDefault(),r=(0,f.Z)({},a),e.list.some((function(n){return n.name.toLowerCase()===r.name.toLowerCase()||n.phone===r.phone}))?alert("".concat(s," or ").concat(c," is already in contacts.")):n((0,Z.uK)((0,f.Z)({},a))),o({name:"",phone:""})},children:[(0,z.jsxs)(A,{children:["Name",(0,z.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:i,value:s,required:!0})]}),(0,z.jsxs)(A,{children:["Number",(0,z.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:i,value:c,required:!0})]}),(0,z.jsx)(P,{type:"submit",children:"Add contact"})]})},F=C.ZP.ul(i||(i=(0,y.Z)(["\n  margin-top: 30px;\n  margin-left: 20px;\n  flex-wrap: wrap;\n"]))),L=C.ZP.div(s||(s=(0,y.Z)(["\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),I=C.ZP.li(c||(c=(0,y.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n"]))),N=C.ZP.button(l||(l=(0,y.Z)(["\n  display: flex;\n  height: 17px;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8em;\n  border-radius: 4px;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: #a580d5;\n    color: white;\n  }\n"]))),_=function(){var n=(0,p.I0)(),e=(0,p.v9)(w);return(0,z.jsx)(F,{children:e.map((function(e){return(0,z.jsxs)(L,{children:[(0,z.jsxs)(I,{children:[e.name,":",e.phone]}),(0,z.jsx)(N,{onClick:function(){return n((0,Z.GK)(e.id))},children:"Delete"})]},e.id)}))})},$=t(4808),B=C.ZP.div(d||(d=(0,y.Z)(["\n  display: flex;\n  gap: 30px;\n  font-weight: bold;\n"]))),D=function(){var n=(0,p.v9)(v),e=(0,p.I0)();return(0,z.jsxs)(B,{children:["Find contact by name",(0,z.jsx)("input",{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:function(n){e((0,$.$)(n.target.value))},required:!0})]})};function J(){var n=(0,p.I0)(),e=(0,p.v9)(j);return(0,u.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(h.q,{children:(0,z.jsx)("title",{children:"Your contacts"})}),(0,z.jsx)("h1",{children:"Phonebook"}),(0,z.jsx)(q,{}),(0,z.jsx)("h2",{children:"Contacts"}),(0,z.jsx)(D,{}),(0,z.jsx)("div",{children:e&&(0,z.jsx)("b",{children:"Request in progress..."})}),(0,z.jsx)(_,{})]})}}}]);
//# sourceMappingURL=329.692975ed.chunk.js.map
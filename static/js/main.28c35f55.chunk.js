(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(17),n(12)),s=n(2),l=n(3),u=n(5),b=n(4),d=n(6),h=(n(18),n(11)),m=(n(19),n(8),n(9),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){console.log(t.target.value),console.log(t.target.name);var n=t.target,a=n.name,r=n.value;e.props.onChange({value:r,name:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.labelName,n=e.value,a=e.id,r=e.type,c=e.name,i=e.pattern,o=e.title;return Object(m.jsxs)("label",{className:"label",htmlFor:a,children:[t,Object(m.jsx)("input",{className:"input",value:n,onChange:this.handleChange,id:a,type:r,name:c,pattern:i,title:o,required:!0})]})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).inputId=Object(d.a)(),e.state={name:"",number:""},e.handleChange=function(t){var n=t.name,a=t.value;e.setState(Object(h.a)({},n,a)),console.log(e.state)},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(m.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(m.jsx)(j,{labelName:t,value:t,onChange:this.handleChange,type:"text",id:this.inputId,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(m.jsx)(j,{labelName:n,value:n,onChange:this.handleChange,type:"tel",id:this.inputId,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(m.jsx)("button",{type:"submit",className:"btn",children:"Add contact"})]})}}]),n}(a.Component),f=(n(21),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:"contact__list",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(m.jsxs)("li",{className:"contact__item",children:[a,": ",r,Object(m.jsx)("button",{type:"button",className:"btn",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}}]),n}(a.Component)),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("label",{className:"label filter__label",children:["Find contacts by name",Object(m.jsx)("input",{className:"input",value:this.props.value,onChange:this.props.onChange,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addSubmitData=function(t){var n=t.name,a=t.number,r=n;if(e.state.contacts.some((function(e){return e.name===r})))alert("".concat(n," is already in contact"));else{var c={id:Object(d.a)(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(o.a)(t),[c])}}))}},e.changeFilter=function(t){console.log(t),e.setState({filter:t.target.value})},e.getFilterSearch=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteContact=function(t){console.log(t),e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getFilterSearch();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"title",children:"Phonebook"}),Object(m.jsx)(p,{onSubmit:this.addSubmitData}),Object(m.jsx)("h2",{className:"title",children:"Contacts"}),Object(m.jsx)(O,{value:e,onChange:this.changeFilter}),Object(m.jsx)(f,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),g=v;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.28c35f55.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,n){e.exports=n(196)},110:function(e,t,n){},194:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(10),o=n.n(s),c=(n(110),n(16)),i=n.n(c),u=n(36),l=n(19),d=n(26),p=n(58),h=n(30),m=n(29),f=n(104),v=n(9),b=new function e(){Object(l.a)(this,e),Object(v.h)(this,{loading:!0,isLoggedIn:!1,username:"",diary:[]})},y=n(100),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),n}(r.a.Component),j=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text))}}]),n}(r.a.Component),E=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1,diary:null},a}return Object(d.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(y.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1,diary:null})}},{key:"doLogin",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(b.isLoggedIn=!0,b.username=n.username):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:return e.prev=19,e.next=22,fetch("http://aneurinj.com:3000/logindata");case 22:return a=e.sent,e.next=25,a.json();case 25:r=e.sent,this.state.diary=r,e.next=33;break;case 29:e.prev=29,e.t1=e.catch(19),console.log(e.t1),this.resetForm();case 33:case"end":return e.stop()}}),e,this,[[5,15],[19,29]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},"Log in",r.a.createElement(g,{type:"text",placeholder:"username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(g,{type:"password",placeholder:"password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement(j,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}}))}}]),n}(r.a.Component),k=n(103),x=(n(194),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={diary:[],isLoaded:!1,diaryid:"",diarynote:""},a.renderPerson=a.renderPerson.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(b.loading=!1,b.isLoggedIn=!0,b.result=n.username):(b.loading=!1,b.isLoggedIn=!1),fetch("http://aneurinj.com:3000/logindata").then((function(e){return e.json()})).then((function(e){a.setState({isLoaded:!0,diary:e}),b.diary=a.state.diary})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),b.loading=!1,b.isLoggedIn=!1;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(b.isLoggedIn=!1,b.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doDelete",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.password=t,console.log(t),e.prev=2,e.next=5,fetch("/delete",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({diaryid:t})});case 5:return n=e.sent,e.next=8,n.json();case 8:(a=e.sent)&&a.success||a&&!1===a.success&&(this.resetForm(),alert(a.msg)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),this.resetForm();case 16:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"addNote",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.diarynote){e.next=2;break}return e.abrupt("return");case 2:return this.setState({buttonDisabled:!0}),e.prev=3,e.next=6,fetch("/addnote",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({diarynote:this.state.diarynote,username:this.state.username})});case 6:return t=e.sent,e.next=9,t.json();case 9:e.sent,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),this.resetForm();case 16:case"end":return e.stop()}}),e,this,[[3,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderPerson",value:function(e,t){var n=this;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.user),r.a.createElement("td",null,e.note),r.a.createElement("td",null,e.date),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){n.doDelete(e.id)}},"Delete")))}},{key:"render",value:function(){var e=this,t=this.state,n=(t.isLoaded,t.diary);return b.loading?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Loading, please wait...")):b.isLoggedIn?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Hello ",b.username,r.a.createElement(j,{text:"Logout",disabled:!1,onClick:function(){return e.doLogout()}}),r.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Note"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,n.map(this.renderPerson))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Add New Diary"),r.a.createElement(g,{type:"text",placeholder:"Add Note",value:this.diarynote?this.diarynote:"",onChange:function(t){return e.setInputValue("diarynote",t)}}),r.a.createElement(j,{text:"Add",disabled:!1,onClick:function(){return e.addNote()}}))):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement(E,null)))}}]),n}(r.a.Component)),w=Object(f.a)(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(195);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.765b88c4.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,n){e.exports=n(195)},109:function(e,t,n){},193:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(10),c=n.n(r),s=(n(109),n(30)),i=n.n(s),l=n(49),u=n(18),p=n(25),d=n(29),h=n(28),m=n(103),g=n(9),f=new function e(){Object(u.a)(this,e),Object(g.h)(this,{loading:!0,isLoggedIn:!1,username:"",diary:""})},v=n(99),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"inputField"},o.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),n}(o.a.Component),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"submitButton"},o.a.createElement("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text))}}]),n}(o.a.Component),y=(o.a.Component,n(102)),E=(n(193),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(f.loading=!1,f.isLoggedIn=!0,f.result=n.username):(f.loading=!1,f.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),f.loading=!1,f.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.isLoggedIn=!1,f.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return f.loading?o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"container"},"Loading, please wait...")):(f.isLoggedIn&&(fetch("http://aneurinj.com:3000/logindata").then((function(e){return e.json()})).then((function(t){e.state.diary=t,console.log(e.state.diary)})),console.log("End do Login data")),o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"container"},"Hello ",f.username,"Hello ",f.diary,o.a.createElement(j,{text:"Logout",disabled:!1,onClick:function(){return e.doLogout()}}),o.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Username"),o.a.createElement("th",null,"Note"),o.a.createElement("th",null,"Date"))),o.a.createElement("tbody",null,f.diary)))))}}]),n}(o.a.Component)),O=Object(m.a)(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(194);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[104,1,2]]]);
//# sourceMappingURL=main.560be1f5.chunk.js.map
(this.webpackJsonpformapp=this.webpackJsonpformapp||[]).push([[0],{26:function(e,a,t){e.exports=t(46)},31:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(23),l=t.n(o),s=(t(31),t(20)),c=t(15),i=t(12),m=t(3),u=t(4),d=t(6),p=t(5),v=(t(32),t(33),t(34),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.data,t=a.name,n=a.surname,o=a.pass,l=a.repeatpass,s=a.gender,c=e.errorsdata,i=e.onStatusChanged;return r.a.createElement("form",{id:"form-wrapper"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",className:c.name?"form-control invalid":"form-control",id:"name",value:t,placeholder:"Enter your name",onChange:i}),c.name&&r.a.createElement("div",{className:"invalid-feedback"},c.name)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"surname"},"Surname"),r.a.createElement("input",{type:"text",name:"surname",className:c.surname?"form-control invalid":"form-control",id:"surname",value:n,placeholder:"Enter your surname",onChange:i}),c.surname&&r.a.createElement("div",{className:"invalid-feedback"},c.surname)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"pass"},"Password"),r.a.createElement("input",{type:"password",name:"pass",className:c.pass?"form-control invalid":"form-control",id:"pass",value:o,placeholder:"Enter password",onChange:i}),c.pass&&r.a.createElement("div",{className:"invalid-feedback"},c.pass)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"repeatpass"},"Repeat Password"),r.a.createElement("input",{type:"password",name:"repeatpass",className:c.repeatpass?"form-control invalid":"form-control",id:"repeatpass",value:l,placeholder:"Enter email",onChange:i}),c.repeatpass&&r.a.createElement("div",{className:"invalid-feedback"},c.repeatpass)),r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Gender"),r.a.createElement("div",{className:"form-check radio"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"male",id:"male",value:"male",onChange:i,checked:"male"==s}),r.a.createElement("label",{className:"form-check-label",htmlFor:"male"},"Male")),r.a.createElement("div",{className:"form-check radio"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"female",id:"female",value:"female",onChange:i,checked:"female"==s}),r.a.createElement("label",{className:"form-check-label",htmlFor:"female"},"Female"))))}}]),t}(n.Component)),h=(t(35),[{id:1,name:"Ukraine"},{id:2,name:"Germany"},{id:3,name:"France"},{id:4,name:"UK"},{id:5,name:"USA"}]),f={1:{country:1,name:"Kyiv"},2:{country:1,name:"Lviv"},3:{country:1,name:"Odessa"},4:{country:1,name:"Dnipro"},5:{country:1,name:"Kharkiv"},6:{country:2,name:"Berlin"},7:{country:2,name:"Dortmund"},8:{country:2,name:"Drezden"},9:{country:2,name:"Hamburg"},10:{country:2,name:"Koln"},11:{country:3,name:"Paris"},12:{country:3,name:"Lyon"},13:{country:3,name:"Toulouse"},14:{country:3,name:"Marseille"},15:{country:3,name:"Bordeaux"},16:{country:4,name:"London"},17:{country:4,name:"Liverpool"},18:{country:4,name:"Manchester"},19:{country:4,name:"Birmingham"},20:{country:4,name:"Newcastle"},21:{country:5,name:"Washington"},22:{country:5,name:"San-Francisco"},23:{country:5,name:"New-York"},24:{country:5,name:"Las-Vegas"},25:{country:5,name:"Miami"}},g=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).getCities=function(e){var a=[];for(var t in f)f[t].country===Number(e)&&a.push({id:t,name:f[t].name});return a},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.data,t=a.email,n=a.mobile,o=a.country,l=a.city,s=e.errorsdata,c=e.onStatusChanged,i=this.getCities(o);return console.log(i),r.a.createElement("form",{id:"form-wrapper"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",className:s.email?"form-control invalid":"form-control",id:"email",name:"email",value:t,placeholder:"Enter email",onChange:c}),s.email&&r.a.createElement("div",{className:"invalid-feedback"},s.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"mobile"},"Mobile"),r.a.createElement("input",{type:"tel",className:s.mobile?"form-control invalid":"form-control",id:"mobile",name:"mobile",value:n,placeholder:"Enter mobile",onChange:c}),s.mobile&&r.a.createElement("div",{className:"invalid-feedback"},s.mobile)),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{htmlFor:"country"},"Select country"),r.a.createElement("select",{className:"form-control",name:"country",id:"country",value:o,onChange:c},h.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{htmlFor:"city"},"Select City"),r.a.createElement("select",{className:s.city?"form-control invalid":"form-control",name:"city",id:"city",value:l,onChange:c},r.a.createElement("option",{value:""},"Select city"),i.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),s.city&&r.a.createElement("div",{className:"invalid-feedback"},s.city)))}}]),t}(n.Component),b=(t(36),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).selectImage=function(a){var t=new FileReader;t.onload=function(a){e.props.onStatusChanged({target:{name:"image",value:a.target.result}})},t.readAsDataURL(a.target.files[0])},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.errorsdata,t=e.data.image;e.onStatusChanged;return r.a.createElement("form",{className:"image-form"},t?r.a.createElement("img",{src:t}):r.a.createElement("div",{className:"hidden"}),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{htmlFor:"image"},"Choose your photo"),r.a.createElement("input",{type:"file",class:"form-control-file",name:"image",id:"image",onChange:this.selectImage}),a.image&&r.a.createElement("div",{className:"invalid-feedback"},a.image)))}}]),t}(n.Component)),E=(t(37),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=(e.loading,e.data),t=a.name,n=a.surname,o=a.gender,l=a.country,s=a.city,c=a.email,i=a.mobile,m=a.image,u=h.find((function(e){return e.id===+l})).name,d=f[s].name;return console.log(t),r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{className:"finish"},r.a.createElement("img",{src:m}),r.a.createElement("ul",null,r.a.createElement("li",null,"User: ",t," ",n),r.a.createElement("li",null,"Gender: ",o),r.a.createElement("li",null,"Location: ",u," ",d),r.a.createElement("li",null,"Email: ",c," "),r.a.createElement("li",null,"Phone number: ",i))):null)}}]),t}(n.Component)),y=t(25),N=(t(38),t(10)),O=(t(39),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-css"},r.a.createElement("div",{className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null)))}}]),t}(n.Component)),j=function(e,a){var t={};switch(e){case 0:a.name?a.name.charAt(0)!==a.name.charAt(0).toLowerCase()&&isNaN(a.name.charAt(0))?/\d/.test(a.name)?t.name="Your name shouldn't consist of letters!":a.name.length>=12?t.name="Your name should be no more 12 charachters, please try again":a.name.length<3&&(t.name="Enter valid name (fullname)!",console.log(typeof a.name.slice(0))):t.name="Your first name's letter should be Capitalized!":(t.name="Required",console.log(typeof a.name)),a.surname?a.surname.charAt(0)!==a.surname.charAt(0).toLowerCase()&&isNaN(a.surname.charAt(0))?/\d/.test(a.surname)?t.surname="Your name shouldn't consist of letters!":a.surname.length>=12?t.surname="Your surname should be no more 12 charachters, please try again":a.surname.length<3&&(t.surname="Enter valid name (fullname)!"):t.surname="Your first surname's letter should be Capitalized!":t.surname="Required",a.pass?a.pass.charAt(0)!==a.pass.charAt(0).toLowerCase()&&isNaN(a.pass.charAt(0))?a.pass.length>=10?t.pass="Your password should be no more 10 charachters, please try again":a.pass.length<5&&(t.pass="Enter valid password!"):(t.pass="Your password's first letter should be Capitalized and not a digit",console.log(isNaN(a.pass.charAt(0)))):(t.pass="Required",console.log(a.pass==a.pass.charAt(0).toLowerCase())),a.repeatpass?a.repeatpass!==a.pass&&(t.repeatpass="Passwords didn't match, try again!"):t.repeatpass="Required";break;case 1:a.email.length?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(a.email)||(t.email="Invalid email"):t.email="Required",a.mobile?/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i.test(a.mobile)||(t.mobile="Invalid mobile"):t.mobile="Required",a.city||(t.city="Required");break;case 2:a.image||(t.image="Required")}return t},C=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).StepsStatusNext=function(){for(var a=e.props,t=a.steps,n=a.activeStep,r=a.usersdata,o=j(n,r),l=0;l<t.length;l++)if(n===l&&0===Object.keys(o).length)var s=t[l+1].route;return s},e.StepsStatusPrev=function(){for(var a=e.props,t=a.steps,n=a.activeStep,r=0;r<t.length;r++)if(n===r)var o=t[r-1].route;return o},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=(e.activeStep,e.onNextPage),t=e.onPreviousPage,n=(e.NavigationUp,e.steps),o=e.onRefreshPage,l=e.onReloadBasic,s=(e.loading,Object(y.a)(n,1)[0]),c=(s.route,s.id,!!n[0].active);return r.a.createElement("div",{className:"btn-group",role:"group"},n[3].active&&r.a.createElement(N.b,{to:l},r.a.createElement("span",{onClick:o,className:"btn btn-light"},"Reset")),!n[3].active&&r.a.createElement(r.a.Fragment,null,n[0].active?r.a.createElement(N.b,{to:"/"},r.a.createElement("span",{onClick:function(e){return e.preventDefault()},type:"button",className:n[0].active?"btn btn-light disabled":"btn btn-light",disabled:c},"Previous")):r.a.createElement(N.b,{to:this.StepsStatusPrev},r.a.createElement("span",{onClick:t,type:"button",className:"btn btn-light"},"Previous")),r.a.createElement(N.b,{to:this.StepsStatusNext},r.a.createElement("span",{onClick:a,type:"button",className:"btn btn-info"},"Next"))))}}]),t}(n.Component),S=(t(45),function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).StepView=function(e){return e.map((function(e){return r.a.createElement("div",{key:e.id,className:e.active?"step active rounded-circle":e.done?"step done rounded-circle":"step rounded-circle"},r.a.createElement("span",null,e.id),r.a.createElement("span",null,e.name))}))},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,a=e.steps,t=(e.activeStep,this.StepView(a));return console.log(a),r.a.createElement("div",{className:"steps-container"},t)}}]),t}(n.Component)),k=t(1),w=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={activeStep:0,steps:[{name:"Basic",route:"/",id:0,active:!0,done:!1},{name:"Contacts",route:"/contacts",id:1,active:!1,done:!1},{name:"Image",route:"/image",id:2,active:!1,done:!1},{name:"Finish",route:"/finish",id:3,active:!1,done:!1}],usersdata:{name:"",surname:"",pass:"",repeatpass:"",gender:"male",email:"",mobile:"",country:"1",city:"",image:""},errorsdata:{name:!1,surname:!1,pass:!1,repeatpass:!1,gender:!1,email:!1,mobile:!1,country:!1,city:!1,image:!1},loading:!1},e.onStatusChanged=function(a){var t=Object(i.a)(Object(i.a)({},e.state.usersdata),{},Object(c.a)({},a.target.name,a.target.value)),n=Object(i.a)(Object(i.a)({},e.state.errorsdata),{},Object(c.a)({},a.target.name,!1));"male"===a.target.name?t.gender="male":t.gender="female","country"===a.target.name&&(t.city="",n.city=!1),e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{usersdata:t,errorsdata:n})}))},e.onNextPage=function(){var a=e.state,t=a.activeStep,n=a.steps,r=a.usersdata,o=(a.errorsdata,j(t,r));if(console.log(Object.keys(o).length),0===Object.keys(o).length){var l=t+1,c=Object(s.a)(n);c[l].active=!0,c[t].active=!1,console.log(n[l]),c[t].done=!0,e.setState({activeStep:l,steps:c})}else e.setState({errorsdata:o})},e.onPreviousPage=function(){var a=e.state,t=a.activeStep,n=a.steps,r=t-1,o=Object(s.a)(n);o[r].active=!0,o[r].done=!1,o[t].active=!1,o[t].done=!1,e.setState({activeStep:r,steps:o})},e.onRefreshPage=function(){var a={};e.setState({loading:!0}),setTimeout((function(){for(var t in e.state.usersdata)a[t]=e.state.usersdata[t],a[t]="";e.setState({usersdata:a,loading:!1}),console.log(e.state.loading)}),2e3),setTimeout((function(){window.location.reload(),console.log("reload")}),2500)},e.onReloadBasic=function(){var e="";return setTimeout((function(){e="/basic",console.log("item")}),2500),e},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.activeStep,n=a.usersdata,o=a.errorsdata,l=a.steps,s=a.loading;return console.log(Object.values(n).some((function(e){return null==e||""==e}))),r.a.createElement(r.a.Fragment,null,l[3].active&&Object.values(n).some((function(e){return null==e||""==e}))?null:r.a.createElement("div",{className:"container components-container"},r.a.createElement(N.a,null,s?r.a.createElement(O,null):r.a.createElement("div",{className:s?"d-none":"card"},l[3].active&&!n.length?null:r.a.createElement(S,{steps:l,activeStep:t}),l[0].active&&r.a.createElement(k.a,{path:l[0].route,exact:!0,render:function(){return r.a.createElement(v,{data:n,errorsdata:o,onStatusChanged:e.onStatusChanged})}}),l[1].active&&r.a.createElement(k.a,{path:l[1].route,render:function(){return r.a.createElement(g,{data:n,errorsdata:o,onStatusChanged:e.onStatusChanged})}}),l[2].active&&r.a.createElement(k.a,{path:l[2].route,render:function(){return r.a.createElement(b,{data:n,errorsdata:o,onStatusChanged:e.onStatusChanged})}}),l[3].active&&r.a.createElement(k.a,{path:l[3].route,render:function(){return r.a.createElement(E,{data:n,loading:s})}}),l[3].active&&Object.values(n).some((function(e){return null==e||""==e}))?null:r.a.createElement(C,{activeStep:t,steps:l,onRefreshPage:this.onRefreshPage,onReloadBasic:this.onReloadBasic,onNextPage:this.onNextPage,NavigationUp:this.NavigationUp,usersdata:n,onPreviousPage:this.onPreviousPage,loading:s})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.fda72b55.chunk.js.map
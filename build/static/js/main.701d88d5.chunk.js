(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/matter_empty_avatar.8064744b.svg"},105:function(e,t,a){e.exports=a(298)},110:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},297:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(102),s=a.n(n),l=(a(110),a(15)),i=a.n(l),c=a(39),m=a(17),h=a(18),u=a(20),d=a(19),f=a(37),p=a.n(f),v=a(11),b=(a(129),a(103)),C=a.n(b),E=(a(130),a(38)),y=a(26),N=(a(131),a(104)),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).handleClick=function(e){r.node.contains(e.target)||r.hideColorPicker()},r.validateUrl=function(e){return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)},r.handleValidation=function(e){var t=!0,a={};return""!==r.state.userData.firstName&&r.state.userData.firstName?r.state.userData.firstName.match(/^[a-zA-Z]+$/)||(t=!1,a.firstName="Only letters"):(t=!1,a.firstName="Add a first name."),""!==r.state.userData.lastName&&r.state.userData.lastName?r.state.userData.lastName.match(/^[a-zA-Z]+$/)||(t=!1,a.lastName="Only letters"):(t=!1,a.lastName="Add a last name."),""!==r.state.userData.title&&r.state.userData.title||(t=!1,a.title="Add your job title."),""!==r.state.userData.story&&r.state.userData.story||(t=!1,a.story="Add a short description. Even if it's just one letter."),""!==r.state.userData.favoriteColor&&r.state.userData.favoriteColor||(t=!1,a.favoriteColor="Choose a color."),""!==r.state.userData.photoUrl&&r.state.userData.photoUrl?r.validateUrl(r.state.userData.photoUrl)||(r.setState({photoUrlError:!0}),t=!1,a.photoUrl="The link added is broken."):(t=!1,a.photoUrl="Grab a photo link."),r.setState({errors:a}),t},r.handleChange=function(e){var t=e.target.name,a=e.target.value;r.setState(function(e){return{userData:Object(y.a)(Object(y.a)({},e.userData),{},Object(E.a)({},t,a))}})},r.handleSubmit=r.handleSubmit.bind(Object(v.a)(r)),r.showColorPicker=r.showColorPicker.bind(Object(v.a)(r)),r.hideColorPicker=r.hideColorPicker.bind(Object(v.a)(r)),r.validateUrl=r.validateUrl.bind(Object(v.a)(r)),r.handleChangeComplete=r.handleChangeComplete.bind(Object(v.a)(r)),r.state={showPicker:!1,userData:{firstName:"",lastName:"",title:"",story:"",favoriteColor:"#999999",photoUrl:""},errors:{}},r}return Object(h.a)(a,[{key:"showColorPicker",value:function(){this.setState({showPicker:!0})}},{key:"componentWillMount",value:function(){document.addEventListener("mousedown",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClick,!1)}},{key:"hideColorPicker",value:function(){this.setState({showPicker:!1})}},{key:"handleChangeComplete",value:function(e){var t=e.hex;this.setState(function(e){return{userData:Object(y.a)(Object(y.a)({},e.userData),{},{favoriteColor:t})}}),this.setState({showPicker:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.userData;this.handleValidation()&&p.a.post("http://localhost:3001/team",{dataFinal:t},{headers:{"Content-Type":"application/json"}}).then(function(e){console.log(e.status),200===e.status?(window.location="/",alert("Successfully added your info.")):alert("Failed to submit form. Try again.")})}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:"joinForm",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-body"},o.a.createElement("div",{className:"form-field"},o.a.createElement("label",{htmlFor:"firstName"},"First Name: "),o.a.createElement("input",{type:"text",title:"add first name",name:"firstName",onChange:this.handleChange.bind(this),value:this.state.userData.firstName,autoComplete:"off"}),this.state.errors.firstName?o.a.createElement("span",{style:{color:"red"}},this.state.errors.firstName):null),o.a.createElement("div",{className:"form-field"},o.a.createElement("label",{htmlFor:"lastName"},"Last Name: "),o.a.createElement("input",{type:"text",title:"add last name",name:"lastName",onChange:this.handleChange.bind(this),value:this.state.userData.lastName,autoComplete:"off"}),this.state.errors.lastName?o.a.createElement("span",{style:{color:"red"}},this.state.errors.lastName):null),o.a.createElement("div",{className:"form-field"},o.a.createElement("label",{htmlFor:"title"},"Title: "),o.a.createElement("input",{type:"text",title:"add title",name:"title",onChange:this.handleChange.bind(this),value:this.state.userData.title,autoComplete:"off"}),this.state.errors.title?o.a.createElement("span",{style:{color:"red"}},this.state.errors.title):null),o.a.createElement("div",{className:"form-field"},o.a.createElement("label",{htmlFor:"story"},"About you: "),o.a.createElement("textarea",{type:"text",name:"story",rows:"4",cols:"50",onChange:this.handleChange.bind(this),value:this.state.userData.story}),this.state.errors.story?o.a.createElement("span",{style:{color:"red"}},this.state.errors.story):null),o.a.createElement("div",{className:"form-field",ref:function(t){return e.node=t}},o.a.createElement("label",{htmlFor:"favoriteColor"},"Choose a favorite color: "),o.a.createElement("input",{readOnly:!0,onClick:this.showColorPicker,type:"text",name:"favoriteColor",value:this.state.userData.favoriteColor,autoComplete:"off",placeholder:"Click here to choose a color."}),o.a.createElement(N.SwatchesPicker,{className:this.state.showPicker?"display-block":"display-none",onChangeComplete:this.handleChangeComplete}),this.state.errors.favoriteColor?o.a.createElement("span",{style:{color:"red"}},this.state.errors.favoriteColor):null),o.a.createElement("div",{className:"form-field"},o.a.createElement("label",{htmlFor:"photoUrl"},"Link to your photo: "),o.a.createElement("input",{type:"url",name:"photoUrl",autoComplete:"off",onChange:this.handleChange.bind(this),value:this.state.userData.photoUrl}),this.state.errors.photoUrl?o.a.createElement("span",{style:{color:"red"}},this.state.errors.photoUrl):null)),o.a.createElement("button",{className:"submit-btn",type:"Submit"},"Submit"))}}]),a}(o.a.PureComponent);var k=function(e){var t=e.show,a=e.handleClose,r=t?"modal display-block":"modal display-none";return o.a.createElement("div",{className:r},o.a.createElement("div",{className:"form-container"},o.a.createElement("div",{className:"form-header"},o.a.createElement("h2",{className:"title"},"Join the Team"),o.a.createElement("p",null,"Fill out this form with information about you and then press Submit when you're done to add your info the team page."),o.a.createElement("button",{className:"close-btn",type:"button",onClick:a,title:"Close form"},"x")),o.a.createElement(w,{handleClose:a})))},g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).hideForm=function(){r.setState({showJoinForm:!1})},r.showForm=r.showForm.bind(Object(v.a)(r)),r.state={showJoinForm:!1},r}return Object(h.a)(a,[{key:"showForm",value:function(){this.setState({showJoinForm:!0})}},{key:"render",value:function(){var e;"New Teammate"===this.props.title&&(e=o.a.createElement("button",{className:"join-btn",onClick:this.showForm},"Join the team!"));var t=o.a.createElement(k,{show:this.state.showJoinForm,handleClose:this.hideForm});return o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("div",{className:"avatar-container"},o.a.createElement("img",{className:"avatar",src:this.props.photoUrl,alt:this.props.name})),o.a.createElement("h2",{className:"title"},this.props.title),o.a.createElement("h1",{className:"name"},this.props.name),e),o.a.createElement("div",{className:"body"},o.a.createElement("p",null,this.props.story)),o.a.createElement("footer",{style:{backgroundColor:this.props.favoriteColor}},o.a.createElement("div",{className:"full-width-flex-box"},o.a.createElement("div",{className:"one-third-flex-box stat"},"9.0"),o.a.createElement("div",{className:"one-third-flex-box stat bordered"},"9.0"),o.a.createElement("div",{className:"one-third-flex-box stat"},"9.0")),o.a.createElement("div",{className:"full-width-flex-box"},o.a.createElement("div",{className:"one-third-flex-box"},"CANDID"),o.a.createElement("div",{className:"one-third-flex-box"},"LEARNING"),o.a.createElement("div",{className:"one-third-flex-box"},"GRIT"))),t)}}]),a}(o.a.PureComponent);g.defaultProps={photoUrl:C.a,story:null,favoriteColor:"#3466F2"};var x=g,D=(a(297),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).state={team:[],loading:!0},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark(function e(){var t=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetchInitialData();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("retrying initial data request..."),setTimeout(Object(c.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchInitialData();case 2:case"end":return e.stop()}},e)})),500);case 9:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},{key:"fetchInitialData",value:function(){var e=Object(c.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/team");case 2:t=e.sent,this.setState({team:t.data,loading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?o.a.createElement("h1",null,"Loading..."):o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"team-grid"}),this.state.team.map(function(e){return o.a.createElement(x,{key:e.id,name:"".concat(e.firstName," ").concat(e.lastName),title:e.title,photoUrl:e.photoUrl,story:e.story,favoriteColor:e.favoriteColor})}),o.a.createElement(x,{id:"new",name:"Join us!",title:"New Teammate"}))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,1,2]]]);
//# sourceMappingURL=main.701d88d5.chunk.js.map
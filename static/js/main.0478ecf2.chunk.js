(this["webpackJsonpphoto-search-app"]=this["webpackJsonpphoto-search-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hangar_logo_small.95143775.svg"},function(e,t,a){e.exports=a.p+"static/media/icons8-facebook-f.2d58e4a6.svg"},function(e,t,a){e.exports=a.p+"static/media/icons8-linkedin-2.1ab390b7.svg"},function(e,t,a){e.exports=a.p+"static/media/noresults.c042dbb0.png"},function(e,t,a){e.exports=a.p+"static/media/arrow.bd3df00f.svg"},function(e,t,a){e.exports=a.p+"static/media/hangar_logo_large.5f1cfe60.svg"},function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=(a(25),a(1)),s=a(2),l=a(4),m=a(3),u=a(6),d=a(5),h=a(9),p=a(8),f=(a(32),a(33),a(14)),g=a.n(f),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-center footerWrap"},r.a.createElement("a",{href:"https://www.hangarworldwide.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:g.a,alt:""})),r.a.createElement("div",{className:"fontFooter"},r.a.createElement("div",null,"\xa92020 Hangar Worldwide."),r.a.createElement("div",null,"All Rights Reserved. Privacy Policy")))}}]),a}(n.Component),v=(a(34),a(15)),E=a.n(v),w=a(16),y=a.n(w);var j=function(e){return r.a.createElement("div",{className:"descriptionCard-wrapper"},r.a.createElement("div",{className:"descriptionCard row shadow-sm bg-white"},r.a.createElement("div",{className:"col-10 p-0"},r.a.createElement("div",{className:"heading"},"Image History")),r.a.createElement("div",{className:"col-2 d-flex justify-content-end p-0"},r.a.createElement("div",{className:"descriptionClose",onClick:e.toggleDescription},"\xd7")),r.a.createElement("p",null,e.itemDescription),r.a.createElement("div",{className:"w-100 d-flex justify-content-end socialIconsWrapper"},r.a.createElement("a",{href:"https://www.facebook.com/hangarworldwide/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:E.a,alt:"facebookLogo",className:"socialIcons first"})),r.a.createElement("a",{href:"https://www.linkedin.com/organization-guest/company/hangarworldwide",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:y.a,alt:"linkedLogo",className:"socialIcons"})))))},k=(a(35),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).showDescriptionCallback=function(t){e.props.showDescription(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.items,n=t.isInActive,c=t.searchFor,i=r.a.createElement("div",null,"search result",a.length>1?"s":""," for ",r.a.createElement("em",null,c," ..."));return r.a.createElement("div",{id:"searchResults"},r.a.createElement("div",{id:"searchResultText",className:"text-uppercase"},""===c?"all results":i),r.a.createElement("div",{className:"row justify-content-between imgResultWrap"},a.map((function(t){return r.a.createElement("div",{className:"item col-6 col-sm-4 \n                  ".concat(!0===n?"inActive":"","\n                  ").concat(t.isDescription?"active":""),key:t.id,"data-itemkey":t.id,onClick:function(){return e.showDescriptionCallback(t.id)}},r.a.createElement("img",{className:"img-fluid",src:"."+t.image,alt:t.title}),t.isDescription&&r.a.createElement("div",{className:"fadeIn"},r.a.createElement("div",{style:{position:"absolute",left:0}},r.a.createElement(j,{onClick:function(){return e.showDescriptionCallback(t.id)},itemDescription:t.description})),r.a.createElement("div",{id:"dummy-descriptionCard"},r.a.createElement(j,{itemDescription:t.description}))))})),r.a.createElement("div",{className:"item col-6 col-sm-4",style:{cursor:"auto",pointerEvents:"none"}})))}}]),a}(n.Component)),O=(a(36),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmitCallback=function(t){e.props.onSubmit(t)},e.handleChangeCallback=function(t){e.props.onChange(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmitCallback,className:"row bg-white"},r.a.createElement("label",{htmlFor:"searchInput"},r.a.createElement("h2",{id:"searchLabel"},"Search"),r.a.createElement("input",{type:"search",name:"searchInput",id:"searchInput",placeholder:"Photos ...",autoFocus:!0,required:!0,value:this.props.searchQuery,onChange:this.handleChangeCallback})))}}]),a}(n.Component)),C=a(17),N=a.n(C),D=a(18),S=a.n(D),I=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchQuery:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.setState({searchFor:n.state.searchQuery});var t="".concat(n.state.baseUrl,"?q=").concat(encodeURI(n.state.searchQuery));console.log(t),n.getData(t)},n.showDescription=function(e){n.setState(Object(h.a)({isInActive:!1},"isInActive",!n.state.isInActive));var t=n.state.items.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{isDescription:!n.state.isInActive}):Object(d.a)(Object(d.a)({},t),{},{isDescription:!1})}));n.setState({items:t})},n.state={error:null,isLoaded:!1,items:[],baseUrl:"http://localhost:4001/items",searchQuery:"",isInActive:null,itemDescription:"",searchFor:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"getData",value:function(e){var t=this;console.log("Requesting API..."),fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,items:e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isDescription:!1})}))}),e.length}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"componentDidMount",value:function(){this.getData(this.state.baseUrl)}},{key:"render",value:function(){var e={background:"url('".concat("./","images/bgs/bg-start.jpg') no-repeat"),backgroundSize:"auto",backgroundPositionX:"right",backgroundPositionY:"bottom"},t=this.state,a=t.error,n=t.isLoaded,c=t.items,i=t.searchQuery,o=t.searchFor,s=t.isInActive;return a?r.a.createElement("div",null,"Error: ",a.message):n?r.a.createElement("div",{id:"searchWrapper",className:"row justify-content-center m-0",style:{searchWrapperBg:e}},r.a.createElement("div",{className:"contentWrapper"},r.a.createElement(u.a,{to:"./"},r.a.createElement("div",{id:"goBack"},r.a.createElement("img",{src:S.a,alt:""}))),r.a.createElement(O,{onSubmit:this.handleSubmit,onChange:this.handleChange,searchQuery:i}),0===c.length?r.a.createElement("div",{id:"loader"},r.a.createElement("img",{src:N.a,alt:"loading ...",className:"img-fluid"})):r.a.createElement(k,{searchFor:o,items:c,isInActive:s,showDescription:this.showDescription}),r.a.createElement(b,null))):r.a.createElement("div",{id:"loader"},r.a.createElement("img",{src:"https://tinyurl.com/y633wao2",alt:"loading ...",className:"img-fluid"}))}}]),a}(n.Component),A=(a(37),a(19)),x=a.n(A),W=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"startWrapper"},r.a.createElement(u.a,{to:"/components/Search"},r.a.createElement("img",{src:x.a,alt:"hangar_logo_large",className:"img-fluid"})))}}]),a}(n.Component),_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(u.b,null,r.a.createElement(W,{path:"./"}),r.a.createElement(I,{path:"components/Search"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.0478ecf2.chunk.js.map
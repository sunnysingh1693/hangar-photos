(this["webpackJsonpphoto-search-app"]=this["webpackJsonpphoto-search-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hangar_logo_small.95143775.svg"},function(e,t,a){e.exports=a.p+"static/media/icons8-facebook-f.2d58e4a6.svg"},function(e,t,a){e.exports=a.p+"static/media/icons8-linkedin-2.1ab390b7.svg"},function(e,t,a){e.exports=a.p+"static/media/noresults.c042dbb0.png"},function(e,t,a){e.exports=a.p+"static/media/arrow.bd3df00f.svg"},function(e,t,a){e.exports=a.p+"static/media/hangar_logo_large.5f1cfe60.svg"},function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=(a(24),a(1)),s=a(2),l=a(4),m=a(3),u=a(6),d=a(5),p=a(8),h=(a(31),a(32),a(13)),g=a.n(h),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-center footerWrap"},r.a.createElement("a",{href:"https://www.hangarworldwide.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:g.a,alt:""})),r.a.createElement("div",{className:"fontFooter"},r.a.createElement("div",null,"\xa92020 Hangar Worldwide."),r.a.createElement("div",null,"All Rights Reserved. Privacy Policy")))}}]),a}(n.Component),v=(a(33),a(14)),b=a.n(v),E=a(15),w=a.n(E);var j=function(e){return r.a.createElement("div",{className:"descriptionCard-wrapper"},r.a.createElement("div",{className:"descriptionCard row shadow-sm bg-white"},r.a.createElement("div",{className:"row m-0 w-100"},r.a.createElement("div",{className:"col-10 p-0"},r.a.createElement("div",{className:"heading"},"Image History")),r.a.createElement("div",{className:"col-2 d-flex justify-content-end p-0"},r.a.createElement("div",{className:"descriptionClose",onClick:e.toggleDescription},"\xd7"))),r.a.createElement("p",null,e.itemDescription),r.a.createElement("div",{className:"w-100 d-flex justify-content-end sIconsWrapper"},r.a.createElement("a",{href:"https://www.facebook.com/hangarworldwide/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:b.a,alt:"facebookLogo",className:"sIcons first"})),r.a.createElement("a",{href:"https://www.linkedin.com/organization-guest/company/hangarworldwide",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{src:w.a,alt:"linkedLogo",className:"sIcons"})))))},y=(a(34),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).toggleDescriptionCallback=function(t,a){e.props.toggleDescription(t,a)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.items,n=t.searchFor,c=r.a.createElement("div",null,"search result",a.length>1?"s":""," for ",r.a.createElement("em",null,n," ..."));return r.a.createElement("div",{id:"searchResults"},r.a.createElement("div",{id:"searchResultText",className:"text-uppercase"},""===n?"all results":c),r.a.createElement("div",{className:"row imgResultWrap"},a.map((function(t){return r.a.createElement("div",{className:"item col-6 col-sm-4 ".concat(!1===t.isDescription?"inActive":""," ").concat(!0===t.isDescription?"active":""),key:t.id,onClick:function(){return e.toggleDescriptionCallback(t.id)}},r.a.createElement("img",{className:"img-fluid",src:"/hangar-photos"+t.image,alt:t.title}),t.isDescription&&r.a.createElement("div",{className:"fadeIn"},r.a.createElement("div",{id:"real-descriptionCard"},r.a.createElement(j,{onClick:function(){return e.toggleDescriptionCallback(t.id,!0)},itemDescription:t.description})),r.a.createElement("div",{id:"dummy-descriptionCard"},r.a.createElement(j,{itemDescription:t.description}))))}))))}}]),a}(n.Component)),O=(a(35),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmitCallback=function(t){e.props.onSubmit(t)},e.handleChangeCallback=function(t){e.props.onChange(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmitCallback,className:"row bg-white"},r.a.createElement("label",{htmlFor:"searchInput"},r.a.createElement("h2",{id:"searchLabel"},"Search"),r.a.createElement("input",{type:"search",name:"searchInput",id:"searchInput",placeholder:"Photos ...",autoFocus:!0,required:!0,value:this.props.searchQuery,onChange:this.handleChangeCallback})))}}]),a}(n.Component)),k=a(16),C=a.n(k),D=a(17),N=a.n(D),S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchQuery:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.setState({searchFor:n.state.searchQuery});var t="".concat(n.state.baseUrl,"?q=").concat(encodeURI(n.state.searchQuery));n.getData(t)},n.prevId="",n.toggleDescription=function(e,t){if(t||e===n.prevId)return n.prevId="",n.setState({items:n.state.items.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isDescription:null})}))}),!1;n.prevId=e;var a=n.state.items.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{isDescription:!t.isDescription}):Object(d.a)(Object(d.a)({},t),{},{isDescription:!1})}));n.setState({items:a})},n.state={error:null,isLoaded:!1,items:[],baseUrl:"http://localhost:4001/items",searchQuery:"",itemDescription:"",searchFor:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(s.a)(a,[{key:"getData",value:function(e){var t=this;console.log("Requesting API..."),fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,items:e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{isDescription:null})}))})}),(function(e){t.setState({isLoaded:!0,error:e})}))}},{key:"componentDidMount",value:function(){this.getData(this.state.baseUrl)}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items,c=e.searchQuery,i=e.searchFor;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{id:"searchWrapper",className:"row justify-content-center m-0"},r.a.createElement("div",{className:"contentWrapper"},r.a.createElement(u.a,{to:"/hangar-photos/"},r.a.createElement("div",{id:"goBack"},r.a.createElement("img",{src:N.a,alt:""}))),r.a.createElement(O,{onSubmit:this.handleSubmit,onChange:this.handleChange,searchQuery:c}),0===n.length?r.a.createElement("div",{id:"loader"},r.a.createElement("img",{src:C.a,alt:"loading ...",className:"img-fluid"})):r.a.createElement(y,{searchFor:i,items:n,toggleDescription:this.toggleDescription}),r.a.createElement(f,null))):r.a.createElement("div",{id:"loader"},r.a.createElement("img",{src:"https://tinyurl.com/y633wao2",alt:"loading ...",className:"img-fluid"}))}}]),a}(n.Component),I=(a(36),a(18)),x=a.n(I),W=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"startWrapper"},r.a.createElement(u.a,{to:"/components/Search"},r.a.createElement("img",{src:x.a,alt:"hangar_logo_large",className:"img-fluid"})))}}]),a}(n.Component),_=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(u.b,null,r.a.createElement(W,{path:"/hangar-photos/"}),r.a.createElement(S,{path:"components/Search"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.eef5bc8a.chunk.js.map
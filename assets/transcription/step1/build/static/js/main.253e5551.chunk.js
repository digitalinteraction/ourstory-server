(this["webpackJsonpindaba-transcription"]=this["webpackJsonpindaba-transcription"]||[]).push([[0],{118:function(e,t,a){e.exports=a(168)},123:function(e,t,a){},124:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),o=a.n(i),l=(a(123),a(124),a(100)),s=a(101),c=a(111),u=a(102),p=a(112),m=a(41),h=a(6),d=a(210),f=a(211),k=a(203),E=a(207),y=a(206),g=a(208),v=a(209);function b(e){var t=~~e%60,a="";return a+=~~(e%3600/60)+":"+(t<10?"0":""),a+=""+t}var w=Object(h.a)({root:{display:"flex",flexWrap:"nowrap",justifyContent:"space-around",overflow:"hidden"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)",spacing:10},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}})((function(e){var t=e.classes,a=e.chunks,i=Object(n.useRef)(null);return r.a.createElement("div",{className:t.root},r.a.createElement("div",{ref:i,style:{overflowX:"auto",width:"100%",whiteSpace:"nowrap"}},a.map((function(t){return r.a.createElement(k.a,{onClick:function(){return e.onPlay(t.starttime)},style:{display:"inline-block",margin:"0.2em"}},r.a.createElement(y.a,null,r.a.createElement(E.a,null,r.a.createElement("h2",{style:{textAlign:"center"}},b(t.starttime)," - ",b(t.endtime)))),r.a.createElement(g.a,{disableSpacing:!0},r.a.createElement(v.a,{size:"small",color:"primary",onClick:function(){return e.onPlay(t.starttime)}},r.a.createElement(d.a,null)),r.a.createElement(v.a,{size:"small",color:"primary",onClick:function(){return e.onDelete(t.starttime,t.endtime)}},r.a.createElement(f.a,null))))}))))})),C=a(222),S=a(213),B=a(224),O=a(214),x=a(215),j=a(220),I=a(106),D=a.n(I),P=a(107),T=a.n(P),W=a(108),N=a.n(W),M=a(212),z={avatar:{backgroundColor:M.a[100],color:M.a[600]}};var R=Object(h.a)(z)((function(e){var t=e.classes,a=e.open,n=e.options;return r.a.createElement(j.a,{onClose:e.onClose,"aria-labelledby":"simple-dialog-title",open:a},r.a.createElement(S.a,null,n.map((function(a){return r.a.createElement(B.a,{button:!0,onClick:function(){return e.onClose(a)},key:a},r.a.createElement(O.a,null,r.a.createElement(C.a,{className:t.avatar},function(e){switch(e){case 0:return r.a.createElement(D.a,null);case 1:return r.a.createElement(T.a,null);case 2:return r.a.createElement(N.a,null)}}(n.indexOf(a)))),r.a.createElement(x.a,{primary:a}))}))))})),A=a(59),H=a.n(A),J=a(216),$=a(217),q=a(110),F=a.n(q),L=a(109),V=a.n(L),X=a(221),Z=a(218),G=function(e){function t(e,a){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e,a))).handlePlay=function(e){n.player.seek(e),n.player.play()},n.skipBack=function(){var e=n.player.getState().player;n.player.seek(e.currentTime-2)},n.backButton=function(){window.history.back()},n.handleDelete=function(e,t){var a=n.state.original,r=a.transcription.chunks.filter((function(t){return t.starttime!==e})),i=n.state.original.transcription.chunks.findIndex((function(e){return e.starttime===t}));i>=1&&(r[--i].starttime=e),a.transcription.chunks=r,n.setState({original:a}),n.saveEdit()},n.handleClickOpen=function(){n.handleConfirm()},n.handleClose=function(e){switch(n.setState({open:!1}),e){case n.state.options[0]:var t=n.player.getState().player;n.player.seek(t.currentTime-2);break;case n.state.options[1]:n.handleConfirm()}},n.closeError=function(){n.setState({erroropen:!1})},n.state={original:{transcription:{chunks:[]}},source:e.src,open:!1,options:["Backward 2 Seconds","Add New Breakpoint","Discard Setting"],erroropen:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.player.subscribeToStateChange(this.handleStateChange.bind(this)),this.serverRequest=H.a.get("/api/watch/edit/"+this.props.id).then(function(e){e.data.transcription||(e.data.transcription={chunks:[]}),e.data.transcription.chunks.forEach((function(e){e.starttime=K(e.starttime),e.endtime=K(e.endtime)})),console.log(e.data),this.setState({original:e.data})}.bind(this))}},{key:"handleStateChange",value:function(e){this.setState({player:e})}},{key:"saveEdit",value:function(){var e=this.state.original;e.transcription.chunks.forEach((function(e){e.starttime=Q(e.starttime),e.endtime=Q(e.endtime)})),H.a.post("/api/watch/savedit/"+this.props.id+"?apikey="+this.props.apikey,e).then((function(e){console.log(e)}))}},{key:"handleConfirm",value:function(){var e=this.state.player.currentTime,t=this.state.original,a={endtime:e},n=this.state.original.transcription.chunks.findIndex((function(t){return e>=t.starttime&&e<=t.endtime}));if(0!=e){if(n>=1)t.transcription.chunks[n].starttime=e,a.starttime=t.transcription.chunks[--n].endtime,t.transcription.chunks.splice(++n,0,a);else if(0===n)t.transcription.chunks[n].starttime=e,a.starttime=0,t.transcription.chunks.splice(n,0,a);else{var r=t.transcription.chunks.slice(-1)[0];a.starttime=r?r.endtime:0,t.transcription.chunks.push(a)}console.log(t),this.setState({original:t}),this.saveEdit()}else this.setState({erroropen:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h2",{style:{position:"absolute",width:"15%",right:"1em",top:"3em"}},"Create a breakpoint when someone stops talking"),r.a.createElement(J.a,{style:{maxWidth:"800px"}},r.a.createElement(m.Player,{ref:function(t){e.player=t}},r.a.createElement("source",{src:this.state.source}),r.a.createElement(m.BigPlayButton,{position:"center"}),r.a.createElement(m.Shortcut,{clickable:!0}),r.a.createElement(m.ControlBar,{autoHide:!1}))),r.a.createElement("br",null),r.a.createElement(w,{style:{width:"100%"},onPlay:this.handlePlay,onDelete:this.handleDelete,chunks:this.state.original.transcription.chunks}),r.a.createElement(R,{open:this.state.open,options:this.state.options,onClose:this.handleClose}),r.a.createElement("div",{id:"output"}),r.a.createElement($.a,{color:"primary",onClick:this.skipBack,"aria-label":"left",style:{position:"absolute",left:"2em",top:"45%"}},r.a.createElement(V.a,null)),r.a.createElement($.a,{color:"primary",onClick:this.handleClickOpen,"aria-label":"add",style:{position:"absolute",right:"1em",top:"45%"}},r.a.createElement(F.a,null)),r.a.createElement(v.a,{onClick:this.backButton,style:{position:"absolute",left:"0",top:"1em"}},r.a.createElement(Z.a,null)),r.a.createElement(X.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.erroropen,autoHideDuration:1e3,onClose:this.closeError,message:"Cannot add breakpoint here"}))}}]),t}(n.Component);function K(e){if(console.log("timestamp : "+e),!isNaN(e))return e;var t=e.match(/^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/);if(!t)throw new Error('Invalid SRT or VTT time format: "'+e+'"');return(t[1]?36e5*parseInt(t[1],10):0)+6e4*parseInt(t[2],10)+1e3*parseInt(t[3],10)+parseInt(t[4],10)}function Q(e){console.log("duration: "+e);var t=1e3*e,a=parseInt(parseFloat(t)%1e3/100),n=Math.floor(t/1e3%60),r=Math.floor(t/6e4%60),i=Math.floor(t/36e5%24);return(i=i<10?"0"+i:i)+":"+(r=r<10?"0"+r:r)+":"+(n=n<10?"0"+n:n)+","+a}var U=a(223);var Y=function(){var e=window.location.href.split("/")[5].split("?")[0],t=window.location.href.split("apikey=")[1];return r.a.createElement("main",null,r.a.createElement(J.a,{maxWidth:"lg"},r.a.createElement(U.a,null),r.a.createElement(G,{src:"/api/watch/getvideo/"+e,id:e,apikey:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(167);o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[118,1,2]]]);
//# sourceMappingURL=main.253e5551.chunk.js.map
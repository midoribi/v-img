!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" *[data-v-0d2552ba] { -webkit-box-sizing: border-box; box-sizing: border-box; } .fullscreen-v-img[data-v-0d2552ba] { z-index: 9999; height: 100%; width: 100%; position: fixed; top: 0; left: 0; overflow: hidden; background-color: rgba(0, 0, 0, 0.7); -ms-touch-action: none; touch-action: none; } .content-v-img img[data-v-0d2552ba] { width: auto; height: auto; max-width: 100%; max-height: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .header-v-img[data-v-0d2552ba], .footer-v-img[data-v-0d2552ba] { position: absolute; width: 100%; background-color: rgba(0, 0, 0, 0.3); height: 50px; z-index: 9999; display: flex; align-items: center; } .header-v-img[data-v-0d2552ba] { justify-content: space-between; } .footer-v-img[data-v-0d2552ba] { bottom: 0; justify-content: center; height: 70px; /* scrolling thumbnails on mobile */ overflow-x: auto; } .footer-v-img img[data-v-0d2552ba] { width: 60px; height: 60px; cursor: pointer; -webkit-transition: transform 0.2s ease-out; transition: transform 0.2s ease-out; object-fit: cover; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .footer-v-img img.is-selected[data-v-0d2552ba] { transform: scale(1.1); } .footer-v-img img[data-v-0d2552ba]:not(:last-child) { margin-right: 7px; } .title-v-img[data-v-0d2552ba] { font-family: 'Avenir', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; color: white; text-align: center; max-height: 100%; overflow: auto; } .count-v-img[data-v-0d2552ba], .buttons-v-img[data-v-0d2552ba] { width: 80px; font-family: 'Avenir', Helvetica, Arial, sans-serif; } .count-v-img[data-v-0d2552ba] { font-size: 15px; color: white; margin-left: 10px; } .buttons-v-img[data-v-0d2552ba] { margin-right: 10px; text-align: right; } .buttons-v-img span path[data-v-0d2552ba] { fill: #e5e6eb; -webkit-transition: fill 0.4s ease-in-out; transition: fill 0.4s ease-in-out; } .buttons-v-img span[data-v-0d2552ba] { cursor: pointer; color: #e5e6eb; font-size: 30px; -webkit-transition: color 0.4s ease-in-out; transition: color 0.4s ease-in-out; text-decoration: none; text-align: center; } .buttons-v-img span[data-v-0d2552ba]:not(:last-child) { margin-right: 8px; } .buttons-v-img span svg[data-v-0d2552ba] { height: 20px; width: 15px; } .buttons-v-img span:hover svg path[data-v-0d2552ba] { fill: white; } .buttons-v-img span[data-v-0d2552ba]:hover { color: white; } .prev-v-img svg[data-v-0d2552ba], .next-v-img svg[data-v-0d2552ba] { margin: 5px auto; } .prev-v-img[data-v-0d2552ba], .next-v-img[data-v-0d2552ba] { color: white; width: 35px; height: 35px; position: absolute; top: 50%; margin-top: -12.5px; font-size: 15px; font-family: 'Avenir', Helvetica, Arial, sans-serif; text-align: center; background-color: rgba(0, 0, 0, 0.3); z-index: 1000; opacity: 0.3; -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; cursor: pointer; } .prev-v-img[data-v-0d2552ba]:hover, .next-v-img[data-v-0d2552ba]:hover { opacity: 1; } .prev-v-img[data-v-0d2552ba] { left: 10px; } .next-v-img[data-v-0d2552ba] { right: 10px; } .v-img-fade-enter[data-v-0d2552ba], .v-img-fade-leave-to[data-v-0d2552ba] { opacity: 0; } .v-img-fade-enter-active[data-v-0d2552ba], .v-img-fade-leave-active[data-v-0d2552ba] { -webkit-transition: opacity 0.3s ease-in-out; transition: opacity 0.3s ease-in-out; } @media screen and (max-width: 767px) { .remove-arrows-mob[data-v-0d2552ba]{ display: none !important; } } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var ImgScreen={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"",name:"v-img-fade"}},[t.closed?t._e():n("div",{staticClass:"fullscreen-v-img",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.close(e)}}},[n("div",{staticClass:"header-v-img"},[n("span",{staticClass:"count-v-img"},[t.images.length>1?n("span",[t._v(t._s(t.currentImageIndex+1)+"/"+t._s(t.images.length)+" ")]):t._e()]),n("span",{staticClass:"title-v-img"},[t._v(t._s(t.titles[t.currentImageIndex]))]),n("div",{staticClass:"buttons-v-img"},[t.sourceButtons[t.currentImageIndex]?n("span",[n("a",{attrs:{href:t.images[t.currentImageIndex],target:"_blank"}},[n("svg",{staticStyle:{"enable-background":"new 0 0 475.078 475.077"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 475.078 475.077","xml:space":"preserve"}},[n("path",{attrs:{d:"M467.083,318.627c-5.324-5.328-11.8-7.994-19.41-7.994H315.195l-38.828,38.827c-11.04,10.657-23.982,15.988-38.828,15.988    c-14.843,0-27.789-5.324-38.828-15.988l-38.543-38.827H27.408c-7.612,0-14.083,2.669-19.414,7.994    C2.664,323.955,0,330.427,0,338.044v91.358c0,7.614,2.664,14.085,7.994,19.414c5.33,5.328,11.801,7.99,19.414,7.99h420.266    c7.61,0,14.086-2.662,19.41-7.99c5.332-5.329,7.994-11.8,7.994-19.414v-91.358C475.078,330.427,472.416,323.955,467.083,318.627z     M360.025,414.841c-3.621,3.617-7.905,5.424-12.854,5.424s-9.227-1.807-12.847-5.424c-3.614-3.617-5.421-7.898-5.421-12.844    c0-4.948,1.807-9.236,5.421-12.847c3.62-3.62,7.898-5.431,12.847-5.431s9.232,1.811,12.854,5.431    c3.613,3.61,5.421,7.898,5.421,12.847C365.446,406.942,363.638,411.224,360.025,414.841z M433.109,414.841    c-3.614,3.617-7.898,5.424-12.848,5.424c-4.948,0-9.229-1.807-12.847-5.424c-3.613-3.617-5.42-7.898-5.42-12.844    c0-4.948,1.807-9.236,5.42-12.847c3.617-3.62,7.898-5.431,12.847-5.431c4.949,0,9.233,1.811,12.848,5.431    c3.617,3.61,5.427,7.898,5.427,12.847C438.536,406.942,436.729,411.224,433.109,414.841z",fill:"#FFFFFF"}}),n("path",{attrs:{d:"M224.692,323.479c3.428,3.613,7.71,5.421,12.847,5.421c5.141,0,9.418-1.808,12.847-5.421l127.907-127.908    c5.899-5.519,7.234-12.182,3.997-19.986c-3.23-7.421-8.847-11.132-16.844-11.136h-73.091V36.543c0-4.948-1.811-9.231-5.421-12.847    c-3.62-3.617-7.901-5.426-12.847-5.426h-73.096c-4.946,0-9.229,1.809-12.847,5.426c-3.615,3.616-5.424,7.898-5.424,12.847V164.45    h-73.089c-7.998,0-13.61,3.715-16.846,11.136c-3.234,7.801-1.903,14.467,3.999,19.986L224.692,323.479z",fill:"#FFFFFF"}})])])]):t._e(),n("span",{on:{click:t.close}},[t._v("×")])])]),n("transition",{attrs:{appear:"",name:"v-img-fade"}},[t.visibleUI&&1!==t.images.length?n("span",{staticClass:"prev-v-img remove-arrows-mob",on:{click:t.prev}},[n("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1664 896v128q0 53-32.5 90.5t-84.5 37.5h-704l293 294q38 36 38 90t-38 90l-75 76q-37 37-90 37-52 0-91-37l-651-652q-37-37-37-90 0-52 37-91l651-650q38-38 91-38 52 0 90 38l75 74q38 38 38 91t-38 91l-293 293h704q52 0 84.5 37.5t32.5 90.5z",fill:"#fff"}})])]):t._e()]),n("transition",{attrs:{appear:"",name:"v-img-fade"}},[t.visibleUI&&1!==t.images.length?n("span",{staticClass:"next-v-img remove-arrows-mob",on:{click:t.next}},[n("svg",{attrs:{width:"25",height:"25",viewBox:"0 0 1792 1915",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293h-704q-52 0-84.5-37.5t-32.5-90.5v-128q0-53 32.5-90.5t84.5-37.5h704l-293-294q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z",fill:"#fff"}})])]):t._e()]),t.thumbnails&&t.images.length>1?n("div",{staticClass:"footer-v-img"},t._l(t.images,function(e,a){return n("img",{key:a,class:{"is-selected":t.currentImageIndex==a},attrs:{src:e},on:{click:function(e){t.select(a)}}})})):t._e(),n("div",{staticClass:"content-v-img"},[n("img",{attrs:{src:t.images[t.currentImageIndex]},on:{click:t.next}})])],1)])},staticRenderFns:[],_scopeId:"data-v-0d2552ba",data:function(){return{images:[],titles:[],sourceButtons:[],visibleUI:!0,currentImageIndex:0,closed:!0,uiTimeout:null,handlers:{},thumbnails:!1,swipedir:null,startX:null,startY:null,distX:null,distY:null,threshold:150,restraint:100,allowedTime:300,elapsedTime:null,startTime:null}},watch:{closed:function(t){t&&this.handlers.closed&&this.handlers.closed(),!t&&this.handlers.opened&&this.handlers.opened()}},methods:{fireChangeEvent:function(){this.handlers.changed&&this.handlers.changed(this.currentImageIndex)},close:function(){this.closed||(document.querySelector("body").classList.remove("body-fs-v-img"),this.images=[],this.currentImageIndex=0,this.closed=!0)},next:function(){!this.closed&&this.images.length>1&&(this.currentImageIndex+1<this.images.length?this.currentImageIndex++:this.currentImageIndex=0,this.fireChangeEvent())},select:function(t){this.currentImageIndex=t},prev:function(){!this.closed&&this.images.length>1&&(this.currentImageIndex>0?this.currentImageIndex--:this.currentImageIndex=this.images.length-1,this.fireChangeEvent())},showUI:function(){var t=this;this.closed||(clearTimeout(this.uiTimeout),this.visibleUI=!0,this.uiTimeout=setTimeout(function(){t.visibleUI=!1},3500))},handleswipe:function(t){if(console.log("Direction",t),"right"==t)this.next();else if("left"==t)this.prev();else if("up"==t||"down"==t)return}},created:function(){var t=this;window.addEventListener("keyup",function(e){27!==e.keyCode&&81!==e.keyCode||t.close(),39!==e.keyCode&&76!==e.keyCode||t.next(),37!==e.keyCode&&72!==e.keyCode||t.prev()}),window.addEventListener("scroll",function(){t.close()}),window.addEventListener("mousemove",function(){t.showUI()}),window.addEventListener("touchstart",function(e){var n=e.changedTouches[0];t.swipedir="none",t.dist=0,t.startX=n.pageX,t.startY=n.pageY,t.startTime=(new Date).getTime()}),window.addEventListener("touchmove",function(t){}),window.addEventListener("touchend",function(e){var n=e.changedTouches[0];t.distX=n.pageX-t.startX,t.distY=n.pageY-t.startY,t.elapsedTime=(new Date).getTime()-t.startTime,t.elapsedTime<=t.allowedTime&&(Math.abs(t.distX)>=t.threshold&&Math.abs(t.distY)<=t.restraint?t.swipedir=t.distX<0?"left":"right":Math.abs(t.distY)>=t.threshold&&Math.abs(t.distX)<=t.restraint&&(t.swipedir=t.distY<0?"up":"down")),t.handleswipe(t.swipedir)})}},babelHelpers={},asyncGenerator=function(){function t(t){this.value=t}function e(e){function n(i,s){try{var r=e[i](s),o=r.value;o instanceof t?Promise.resolve(o.value).then(function(t){n("next",t)},function(t){n("throw",t)}):a(r.done?"return":"normal",r.value)}catch(t){a("throw",t)}}function a(t,e){switch(t){case"return":i.resolve({value:e,done:!0});break;case"throw":i.reject(e);break;default:i.resolve({value:e,done:!1})}(i=i.next)?n(i.key,i.arg):s=null}var i,s;this._invoke=function(t,e){return new Promise(function(a,r){var o={key:t,arg:e,resolve:a,reject:r,next:null};s?s=s.next=o:(i=s=o,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)},{wrap:function(t){return function(){return new e(t.apply(this,arguments))}},await:function(e){return new t(e)}}}(),_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},toConsumableArray=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},addPluginAttributes=function(t,e,n){var a="pointer",i=e.arg||null,s=void 0,r=void 0,o=t.src,d=void 0,l=void 0,c={};return n.altAsTitle&&(d=t.alt),s=n.openOn,r=n.sourceButton,l=n.thumbnails,void 0!==e.value&&(a=e.value.cursor||a,i=e.value.group||i,s=e.value.openOn||s,o=e.value.src||o,d=e.value.title||d,c.opened=e.value.opened,c.closed=e.value.closed,c.changed=e.value.changed,void 0!==e.value.sourceButton&&(r=e.value.sourceButton),void 0!==e.value.thumbnails&&(l=e.value.thumbnails)),t.setAttribute("data-vue-img-src",o),i&&t.setAttribute("data-vue-img-group",i),d&&t.setAttribute("data-vue-img-title",d),r&&t.setAttribute("data-vue-img-source-button",r),l&&t.setAttribute("data-vue-img-thumbnails",l),o||console.error("v-img element missing src parameter."),t.style.cursor=a,{cursor:a,src:o,group:i,title:d,events:c,sourceButton:r,openOn:s,thumbnails:l}},install=function(t,e){var n=t.extend(ImgScreen);e=_extends({altAsTitle:!1,sourceButton:!1,thumbnails:!1,openOn:"click"},e),t.directive("img",{update:function(t,n,a,i){var s=void 0,r=void 0;i.data.attrs&&a.data.attrs&&(r=i.data.attrs.src!==a.data.attrs.src,e.altAsTitle&&(s=i.data.attrs.alt!==a.data.attrs.alt));var o=n.oldValue!==n.value;(r||s||o)&&addPluginAttributes(t,n,e)},bind:function(a,i){var s=addPluginAttributes(a,i,e),r=window.vueImg;if(!r){var o=document.createElement("div");o.setAttribute("id","imageScreen"),document.querySelector("body").appendChild(o),r=window.vueImg=(new n).$mount("#imageScreen")}a.addEventListener(s.openOn,function(){var e=void 0;e=a.dataset.vueImgGroup?[].concat(toConsumableArray(document.querySelectorAll('img[data-vue-img-group="'+a.dataset.vueImgGroup+'"]'))):[a],t.set(r,"images",e.map(function(t){return t.dataset.vueImgSrc})),t.set(r,"titles",e.map(function(t){return t.dataset.vueImgTitle})),t.set(r,"sourceButtons",e.map(function(t){return"true"===t.dataset.vueImgSourceButton})),t.set(r,"thumbnails","true"===a.dataset.vueImgThumbnails),t.set(r,"currentImageIndex",e.indexOf(a)),t.set(r,"handlers",s.events),t.set(r,"closed",!1)})}})};"undefined"!=typeof window&&window.Vue&&window.Vue.use(install);export default install;
//# sourceMappingURL=v-img.mjs.map

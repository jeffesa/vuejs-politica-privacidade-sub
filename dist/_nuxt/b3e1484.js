(window.webpackJsonp=window.webpackJsonp||[]).push([[6,16,18,24,25],{244:function(t,e,r){"use strict";r.r(e);var l={props:{sources:{type:Array,required:!0},alt:{type:String,required:!0},title:{type:String,requered:!0},imgClass:{type:String,required:!1},lazyload:{type:Boolean,required:!1,default:!0},role:{type:String,required:!1}},methods:{loaded:function(t){var e=t.currentTarget.src;this.$emit("img-load",e)}}},o=r(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{staticClass:"responsive-image",class:t.lazyload?"lazyload":""},[t._l(t.sources,(function(source,e){return r("source",{key:e,attrs:{"data-srcset":t.lazyload?source.src:null,srcset:t.lazyload?null:source.src,media:source.query,type:source.type}})})),t._v(" "),t.lazyload?r("img",{staticClass:"lazyload",class:t.imgClass,attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-srcset":"data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",typeof:"foaf:Image",loading:"lazy",alt:t.alt,title:t.title,role:t.role},on:{lazyloaded:t.loaded}}):r("img",{staticClass:"hide-on-noscript",class:t.imgClass,attrs:{src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,title:t.title,role:t.role},on:{load:t.loaded}}),t._v(" "),t.lazyload?r("no-script-span",[r("img",{staticClass:"is-hidden-desktop",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,role:t.role}}),t._v(" "),r("img",{staticClass:"is-hidden-touch",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[1]?t.sources[1].src.split(",")[0]:t.sources[0].src.split(",")[0],srcset:t.sources[1]?t.sources[1].src:t.sources[0].src,alt:t.alt,role:t.role}})]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,r){t.exports={}},246:function(t,e,r){"use strict";r.r(e);var l={components:{},props:{content:{type:String,required:!0}}},o=(r(247),r(43)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t._t("default")],2)}),[],!1,null,"5e5f59de",null);e.default=component.exports},247:function(t,e,r){"use strict";r(245)},258:function(t,e,r){t.exports={}},284:function(t,e,r){"use strict";r(258)},317:function(t,e,r){"use strict";r.r(e);var l=r(246),o={components:{ResponsiveImage:r(244).default,Card:l.default},props:{content:{type:Object,required:!0}}},n=(r(284),r(43)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"benefits-program"},[r("div",{staticClass:"flex flex-col w-full"},[r("div",{staticClass:"benefits-program__title"},[r("h1",{domProps:{innerHTML:t._s(t.content.title)}})]),t._v(" "),r("div",{staticClass:"benefits-program__container"},[r("div",{staticClass:"benefits-program__container__content"},[r("div",{staticClass:"benefits-program__grid grid grid-cols-1 lg:grid-cols-2 relative"},[r("div",{staticClass:"order-2 lg:order-1"},[r("div",{staticClass:"flex flex-col lg:flex-row overflow-hidden lg:overflow-visible"},[r("Card",{staticClass:"benefits-program__card relative z-10",attrs:{content:t.content.card.text}},[r("svg",{staticClass:"benefits-program__grid__svg",attrs:{width:"110",height:"24",viewBox:"0 0 110 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M1.75525 10.5C0.926822 10.5 0.255249 11.1716 0.255249 12C0.255249 12.8284 0.926822 13.5 1.75525 13.5L1.75525 10.5ZM64.992 12L64.992 10.5L64.992 12ZM108.963 13.0607C109.549 12.4749 109.549 11.5251 108.963 10.9393L99.4174 1.39341C98.8316 0.80762 97.8818 0.80762 97.296 1.39341C96.7103 1.97919 96.7103 2.92894 97.296 3.51473L105.781 12L97.296 20.4853C96.7103 21.0711 96.7103 22.0208 97.296 22.6066C97.8818 23.1924 98.8316 23.1924 99.4174 22.6066L108.963 13.0607ZM1.75525 13.5L64.992 13.5L64.992 10.5L1.75525 10.5L1.75525 13.5ZM64.992 13.5L107.903 13.5L107.903 10.5L64.992 10.5L64.992 13.5Z",fill:"#0A00B4"}})])]),t._v(" "),r("p",{staticClass:"benefits-program__card__information text-center lg:text-left",domProps:{innerHTML:t._s(t.content.card.information)}})],1),t._v(" "),r("p",{staticClass:"benefits-program__description",domProps:{innerHTML:t._s(t.content.description)}})]),t._v(" "),r("ResponsiveImage",{staticClass:"benefits-program__image order-1 lg:order-2 flex justify-end",attrs:{lazyload:!1,sources:t.content.image.src,alt:t.content.image.alt}})],1),t._v(" "),r("ul",{staticClass:"benefits-program__list grid grid-cols-1 lg:grid-cols-4"},t._l(t.content.list,(function(e,i){return r("li",{key:i,staticClass:"benefits-program__list__item flex items-center",domProps:{innerHTML:t._s(e)}})})),0)])])])])}),[],!1,null,"60ce30c1",null);e.default=component.exports;installComponents(component,{ResponsiveImage:r(244).default})}}]);
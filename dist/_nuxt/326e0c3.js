(window.webpackJsonp=window.webpackJsonp||[]).push([[23,16,18,24,25],{244:function(t,e,l){"use strict";l.r(e);var r={props:{sources:{type:Array,required:!0},alt:{type:String,required:!0},title:{type:String,requered:!0},imgClass:{type:String,required:!1},lazyload:{type:Boolean,required:!1,default:!0},role:{type:String,required:!1}},methods:{loaded:function(t){var e=t.currentTarget.src;this.$emit("img-load",e)}}},o=l(43),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("picture",{staticClass:"responsive-image",class:t.lazyload?"lazyload":""},[t._l(t.sources,(function(source,e){return l("source",{key:e,attrs:{"data-srcset":t.lazyload?source.src:null,srcset:t.lazyload?null:source.src,media:source.query,type:source.type}})})),t._v(" "),t.lazyload?l("img",{staticClass:"lazyload",class:t.imgClass,attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-srcset":"data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",typeof:"foaf:Image",loading:"lazy",alt:t.alt,title:t.title,role:t.role},on:{lazyloaded:t.loaded}}):l("img",{staticClass:"hide-on-noscript",class:t.imgClass,attrs:{src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,title:t.title,role:t.role},on:{load:t.loaded}}),t._v(" "),t.lazyload?l("no-script-span",[l("img",{staticClass:"is-hidden-desktop",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,role:t.role}}),t._v(" "),l("img",{staticClass:"is-hidden-touch",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[1]?t.sources[1].src.split(",")[0]:t.sources[0].src.split(",")[0],srcset:t.sources[1]?t.sources[1].src:t.sources[0].src,alt:t.alt,role:t.role}})]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,l){t.exports={}},246:function(t,e,l){"use strict";l.r(e);var r={components:{},props:{content:{type:String,required:!0}}},o=(l(247),l(43)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card"},[l("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t._t("default")],2)}),[],!1,null,"5e5f59de",null);e.default=component.exports},247:function(t,e,l){"use strict";l(245)},253:function(t,e,l){t.exports={}},279:function(t,e,l){"use strict";l(253)},298:function(t,e,l){"use strict";l.r(e);var r=l(244),o=l(246),c={components:{ResponsiveImage:r.default,Card:o.default},props:{content:{type:Object,required:!0}}},n=(l(279),l(43)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"privacy-policy"},[l("div",{staticClass:"flex flex-col w-full"},[l("div",{staticClass:"privacy-policy__title"},[l("h1",{domProps:{innerHTML:t._s(t.content.title)}})]),t._v(" "),l("div",{staticClass:"privacy-policy__container"},[l("div",{staticClass:"privacy-policy__container__content"},[l("div",{staticClass:"grid grid-cols-1 lg:grid-cols-2"},[l("div",{staticClass:"privacy-policy__information order-2 lg:order-1"},[l("p",{staticClass:"privacy-policy__information__text",domProps:{innerHTML:t._s(t.content.informations[0])}}),t._v(" "),l("ul",{staticClass:"privacy-policy__list flex flex-col m-auto"},t._l(t.content.list,(function(e,i){return l("li",{key:i,staticClass:"privacy-policy__item grid grid-cols-1 lg:grid-cols-2 items-center"},[l("ResponsiveImage",{staticClass:"privacy-policy__list__icon",attrs:{lazyload:!1,sources:e.icon.src,alt:e.icon.alt}}),t._v(" "),l("p",{staticClass:"text-center lg:text-left",domProps:{innerHTML:t._s(e.text)}})],1)})),0),t._v(" "),l("p",{staticClass:"mb-6 privacy-policy__information__description",domProps:{innerHTML:t._s(t.content.informations[1])}}),t._v(" "),l("Card",{staticClass:"privacy-policy__information__card",attrs:{content:t.content.card}}),t._v(" "),l("p",{staticClass:"mb-8 lg:mb-0",domProps:{innerHTML:t._s(t.content.informations[2])}})],1),t._v(" "),l("ResponsiveImage",{staticClass:"privacy-policy__image pt-4 lg:pt-0 pb-6 lg:pb-0 order-1 lg:order-2",attrs:{lazyload:!1,sources:t.content.image.src,alt:t.content.image.alt}})],1)])])])])}),[],!1,null,"3eafdac2",null);e.default=component.exports;installComponents(component,{ResponsiveImage:l(244).default})}}]);
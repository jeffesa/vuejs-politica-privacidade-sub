(window.webpackJsonp=window.webpackJsonp||[]).push([[11,16,18,24],{244:function(t,e,l){"use strict";l.r(e);var r={props:{sources:{type:Array,required:!0},alt:{type:String,required:!0},title:{type:String,requered:!0},imgClass:{type:String,required:!1},lazyload:{type:Boolean,required:!1,default:!0},role:{type:String,required:!1}},methods:{loaded:function(t){var e=t.currentTarget.src;this.$emit("img-load",e)}}},o=l(43),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("picture",{staticClass:"responsive-image",class:t.lazyload?"lazyload":""},[t._l(t.sources,(function(source,e){return l("source",{key:e,attrs:{"data-srcset":t.lazyload?source.src:null,srcset:t.lazyload?null:source.src,media:source.query,type:source.type}})})),t._v(" "),t.lazyload?l("img",{staticClass:"lazyload",class:t.imgClass,attrs:{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-srcset":"data:image/gif;base64, R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",typeof:"foaf:Image",loading:"lazy",alt:t.alt,title:t.title,role:t.role},on:{lazyloaded:t.loaded}}):l("img",{staticClass:"hide-on-noscript",class:t.imgClass,attrs:{src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,title:t.title,role:t.role},on:{load:t.loaded}}),t._v(" "),t.lazyload?l("no-script-span",[l("img",{staticClass:"is-hidden-desktop",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[0].src.split(",")[0],srcset:t.sources[0].src,alt:t.alt,role:t.role}}),t._v(" "),l("img",{staticClass:"is-hidden-touch",class:t.imgClass,attrs:{loading:"lazy",src:t.sources[1]?t.sources[1].src.split(",")[0]:t.sources[0].src.split(",")[0],srcset:t.sources[1]?t.sources[1].src:t.sources[0].src,alt:t.alt,role:t.role}})]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,l){t.exports={}},287:function(t,e,l){"use strict";l(262)},302:function(t,e,l){"use strict";l.r(e);var r={component:{ResponsiveImage:l(244).default},props:{content:{type:Object,required:!0}}},o=(l(287),l(43)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"data-stored"},[l("div",{staticClass:"flex flex-col w-full"},[l("div",{staticClass:"data-stored__title"},[l("h1",{domProps:{innerHTML:t._s(t.content.title)}})]),t._v(" "),l("div",{staticClass:"data-stored__container"},[l("div",{staticClass:"data-stored__container__content"},[l("div",{staticClass:"data-stored__grid grid grid-cols-1 lg:grid-cols-2"},[l("ResponsiveImage",{staticClass:"data-stored__image",attrs:{lazyload:!1,sources:t.content.image.src,alt:t.content.image.alt}}),t._v(" "),l("div",{staticClass:"data-stored__grid__content flex flex-col"},[l("p",{domProps:{innerHTML:t._s(t.content.information)}}),t._v(" "),l("div",{staticClass:"data-stored__grid__content__bag grid grid-cols-1 lg:grid-cols-2"},[l("ResponsiveImage",{staticClass:"data-stored__image__small",attrs:{lazyload:!1,sources:t.content.icon.src,alt:t.content.icon.alt}}),t._v(" "),l("ul",{staticClass:"data-stored__list"},t._l(t.content.list.items,(function(e,i){return l("li",{key:i,staticClass:"data-stored__list__item",domProps:{innerHTML:t._s(e)}})})),0)],1),t._v(" "),l("p",{domProps:{innerHTML:t._s(t.content.description)}})])],1)])])])])}),[],!1,null,"e878de9a",null);e.default=component.exports;installComponents(component,{ResponsiveImage:l(244).default})}}]);
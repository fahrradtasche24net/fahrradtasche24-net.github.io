(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15],{256:function(t,e,r){var content=r(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("268f718a",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(70),l=r(140),c=r(260),d={name:"productItem",props:{product:Object},data:function(){var t=this,e=o.find((function(e){return e.name===t.product.category})),r=l.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:e,brandData:r}},methods:{decode:function(t){return c.decode(t)}}},f=(r(258),r(18)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumbs[0],alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(parseFloat(t.product.price).toFixed(2))+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"1e708522",null);e.default=component.exports},258:function(t,e,r){"use strict";r(256)},259:function(t,e,r){var n=r(68)(!1);n.push([t.i,".course-item[data-v-1e708522]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-1e708522]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-1e708522]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=n},278:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(109).a.products.getFeaturedProducts(),l={name:"popularProducts",data:function(){return{config:n,products:o}}},c=r(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),r("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return r("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[r("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(257).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{189:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"三、默认配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、默认配置项","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、默认配置项")]),a._v(" "),t("p",[a._v("文件路径 default.js")]),a._v(" "),t("p",[a._v("该文件导出defalut对象，该对象主要包括以下内容：")]),a._v(" "),t("h3",{attrs:{id:"adapter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adapter","aria-hidden":"true"}},[a._v("#")]),a._v(" adapter")]),a._v(" "),t("p",[a._v("该选项决定了 axios 根据何种方式处理 ajax 请求，它是可写的，允许用户自定义处理请求。默认情况下会检查当前环境，如果浏览器环境会引入 ./adapters/xhr 文件处理，如果为 node 环境会引入 ./adapter/http 文件处理。（line 16 - 26）")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  function getDefaultAdapter() {\n    var adapter;\n    // 判断 XMLHttpRequest 对象是否存在\n    if (typeof XMLHttpRequest !== 'undefined') {\n      // For browsers use XHR adapter\n      adapter = require('./adapters/xhr');\n    } else if (typeof process !== 'undefined' && \n    // node 环境判断process全局变量\n    Object.prototype.toString.call(process) === '[object process]') {\n      // For node use HTTP adapter\n      adapter = require('./adapters/http');\n    }\n    return adapter;\n  }\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("h3",{attrs:{id:"transformrequest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transformrequest","aria-hidden":"true"}},[a._v("#")]),a._v(" transformRequest")]),a._v(" "),t("p",[a._v("该选项的默认值是一个数组，数组只有一个 transformRequest(data, headers) 函数，该函数对不同的 Request data 执行相应的数据转换处理，同时设置对应的 Content-type，最后返回转化后的 data。它也是可写的，允许用户在发送请求数据前修改请求数据。")]),a._v(" "),t("p",[a._v("data 主要有以下几种类型：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("formData | blob | file | stream | buffer | arrayBuffer (不做任何转化处理，直接返回data)")])]),a._v(" "),t("li",[t("p",[a._v("arrayBufferView (返回data.buffer)")])]),a._v(" "),t("li",[t("p",[a._v("URLSearchParams (返回 data.toString, 设置请求头 ContentType 为 application/x-www-form-urlencoded;charset=utf-8)")])]),a._v(" "),t("li",[t("p",[a._v("object (返回JSON.stringfy(data)), 设置请求头 ContentType 为 application/json;charset=utf-8")])])]),a._v(" "),t("h3",{attrs:{id:"transformresponse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transformresponse","aria-hidden":"true"}},[a._v("#")]),a._v(" transformResponse")]),a._v(" "),t("p",[a._v("同 transformRequest，它针对的是返回的数据，同时也支持用户自定义。")]),a._v(" "),t("h3",{attrs:{id:"timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timeout","aria-hidden":"true"}},[a._v("#")]),a._v(" timeout")]),a._v(" "),t("p",[a._v("超时时间，以毫秒为单位，默认为0")]),a._v(" "),t("h3",{attrs:{id:"xsrfcookiename"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xsrfcookiename","aria-hidden":"true"}},[a._v("#")]),a._v(" xsrfCookieName")]),a._v(" "),t("p",[a._v("用作 xsrf token 的值的cookie的名称，默认为 'XSRF-TOKEN'")]),a._v(" "),t("h3",{attrs:{id:"xsrfheadername"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xsrfheadername","aria-hidden":"true"}},[a._v("#")]),a._v(" xsrfHeaderName")]),a._v(" "),t("p",[a._v("用作 xsrf token 的值的Header的名称，默认为 'X-XSRF-TOKEN'")]),a._v(" "),t("h3",{attrs:{id:"maxcontentlength"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxcontentlength","aria-hidden":"true"}},[a._v("#")]),a._v(" maxContentLength")]),a._v(" "),t("p",[a._v("定义允许的响应内容的最大尺寸, 默认为 -1")]),a._v(" "),t("h3",{attrs:{id:"validatestatus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validatestatus","aria-hidden":"true"}},[a._v("#")]),a._v(" validateStatus")]),a._v(" "),t("p",[a._v("验证响应状态，status 在200-300之间返回 true")]),a._v(" "),t("h3",{attrs:{id:"headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#headers","aria-hidden":"true"}},[a._v("#")]),a._v(" headers")]),a._v(" "),t("h4",{attrs:{id:"common"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common","aria-hidden":"true"}},[a._v("#")]),a._v(" common")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h4",{attrs:{id:"delete-get-head"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-get-head","aria-hidden":"true"}},[a._v("#")]),a._v(" delete | get | head")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  [methods]: {}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"post-put-patch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#post-put-patch","aria-hidden":"true"}},[a._v("#")]),a._v(" post | put | patch")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  [methods]: { 'Content-Type': 'application/x-www-form-urlencoded' }\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}],!1,null,null,null);r.options.__file="config.md";e.default=r.exports}}]);
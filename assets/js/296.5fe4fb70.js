(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{639:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#纯函数"}},[t._v("纯函数")])]),s("li",[s("a",{attrs:{href:"#高阶函数"}},[t._v("高阶函数")])]),s("li",[s("a",{attrs:{href:"#函数的柯里化"}},[t._v("函数的柯里化")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"纯函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#纯函数"}},[t._v("#")]),t._v(" 纯函数")]),t._v(" "),s("p",[t._v("一类特别的函数: 只要是同样的输入（实参），必定得到同样的输出（返回）。")]),t._v(" "),s("p",[t._v("必须遵守以下一些约束 ：")]),t._v(" "),s("ul",[s("li",[t._v("不得改写参数数据")]),t._v(" "),s("li",[t._v("不会产生任何副作用，例如网络请求，输入和输出设备")]),t._v(" "),s("li",[t._v("不能调用 "),s("code",[t._v("Date.now()")]),t._v(" 或者 "),s("code",[t._v("Math.random()")]),t._v(" 等不纯的方法")])]),t._v(" "),s("p",[t._v("Redux 的 reducer 函数必须是一个纯函数。")]),t._v(" "),s("h3",{attrs:{id:"高阶函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数"}},[t._v("#")]),t._v(" 高阶函数")]),t._v(" "),s("p",[t._v("一类特别的函数：")]),t._v(" "),s("ul",[s("li",[t._v("情况 1: 参数是函数")]),t._v(" "),s("li",[t._v("情况 2: 返回是函数")])]),t._v(" "),s("p",[t._v("常见的高阶函数:")]),t._v(" "),s("ul",[s("li",[t._v("定时器设置函数")]),t._v(" "),s("li",[t._v("数组的 "),s("code",[t._v("forEach()/map()/filter()/reduce()/find()/bind()")])]),t._v(" "),s("li",[t._v("promise")]),t._v(" "),s("li",[t._v("react-redux 中的 connect 函数")]),t._v(" "),s("li",[t._v("作用: 能实现更加动态，更加可扩展的功能")])]),t._v(" "),s("h3",{attrs:{id:"函数的柯里化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数的柯里化"}},[t._v("#")]),t._v(" 函数的柯里化")]),t._v(" "),s("p",[t._v("概念：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("c\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{503:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("笔记")]),s._v(" "),t("p",[s._v("随着 Redis 版本的增加，Redis 又出现了三个特殊的数据类型。")]),s._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[s._v("2021-12-26 @Gavin")])])]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#bitmaps"}},[s._v("Bitmaps")]),t("ul",[t("li",[t("a",{attrs:{href:"#指令"}},[s._v("指令")])]),t("li",[t("a",{attrs:{href:"#bitmaps-与-set-对比"}},[s._v("Bitmaps 与 Set 对比")])])])]),t("li",[t("a",{attrs:{href:"#hyperloglog-hll"}},[s._v("HyperLogLog(HLL)")])]),t("li",[t("a",{attrs:{href:"#geospatial"}},[s._v("Geospatial")])]),t("li",[t("a",{attrs:{href:"#指令总结"}},[s._v("指令总结")]),t("ul",[t("li",[t("a",{attrs:{href:"#bitmaps"}},[s._v("Bitmaps")])]),t("li",[t("a",{attrs:{href:"#hyperloglog-hll"}},[s._v("HyperLogLog(HLL)")])]),t("li",[t("a",{attrs:{href:"#geospatial"}},[s._v("Geospatial")])])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"bitmaps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps"}},[s._v("#")]),s._v(" Bitmaps")]),s._v(" "),t("p",[s._v("在开发中，可能会遇到这种情况：需要统计用户的某些信息，如活跃或不活跃，登录或者不登录；又如需要记录用户一年的打卡情况，打卡了是 1，没有打卡是0，如果使用普通的 key-value 存储，则要记录 365 条记录，如果用户量很大，需要的空间也会很大，所以 Redis 提供了 Bitmap 位图这中数据结构。")]),s._v(" "),t("p",[s._v("Bitmap 就是通过操作二进制位来进行记录，即只有为 0 和 1；如果要记录 365 天的打卡情况，使用 Bitmap 表示的形式大概如下：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("0101000111000111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样有什么好处呢？当然就是节约内存了，365 天相当于 365 bit，又 1 字节 = 8 bit，所以相当于使用 46 个字节即可。")]),s._v(" "),t("p",[s._v("BitMap 就是通过一个 bit 位来表示某个元素对应的值或者状态，其中的 key 就是对应元素本身，实际上底层也是通过对字符串的操作来实现。Redis 从 2.2 版本之后新增了 setbit，getbit，bitcount 等几个 bitmap 相关命令。")]),s._v(" "),t("p",[s._v("Bitmaps 本身不是一种数据类型， 实际上它就是字符串（key-value），但是它可以对字符串的位进行操作。")]),s._v(" "),t("h3",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[s._v("#")]),s._v(" 指令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("给偏移量设值(0 或 1)")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("setbit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("实例：每个独立用户是否访问过网站存放在 Bitmaps 中，将访问的用户记做 1，没有访问的用户记做 0，用偏移量作为用户的 id。假设现在有 20 个用户，userid=1，6，11，15，19 的用户对网站进行了访问")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("setbit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsetbit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsetbit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsetbit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsetbit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他则为 0，代表未访问")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("根据偏移量获取值")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("getbit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("示例：获取 id=8 的用户是否在 2020-11-06 这天访问过，返回 0 说明没有访问过")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("getbit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("统计字符串从 start 字节到 end 字节比特值为 1 的数量，start 和 end 代表起始和结束字节数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("bitcount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("start end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("bitop 是一个复合操作，它可以做多个 Bitmaps 的 and（交集）、or（并集）、not（非）、xor（异或）操作并将结果保存在 destkey 中")]),s._v(" "),t("p",[t("code",[s._v("operation")]),s._v("：and（交集）、or（并集）、not（非）、xor（异或）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("bitop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("operation"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("destkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("案例：计算出两天都访问过网站的用户数量")]),s._v(" "),t("ul",[t("li",[s._v("user:lastday：昨天用户数量的 key")]),s._v(" "),t("li",[s._v("user:today：今天用户数量的 key")]),s._v(" "),t("li",[s._v("users:and：存储昨天用户数量的 key 和今天用户数量的 key 之和")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("bittop and users:and user:lastday user:today\ngetbit "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"users:and"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"bitmaps-与-set-对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps-与-set-对比"}},[s._v("#")]),s._v(" Bitmaps 与 Set 对比")]),s._v(" "),t("p",[t("strong",[s._v("Set 和 Bitmaps 存储一天活跃用户对比")])]),s._v(" "),t("p",[s._v("假设网站有 1 亿用户，每天独立访问的用户有 5 千万，如果每天用集合类型和 Bitmaps 分别存储活跃用户可以得到表")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("数据类型")]),s._v(" "),t("th",[s._v("每个用户 id 占用空间")]),s._v(" "),t("th",[s._v("需要存储的用户量")]),s._v(" "),t("th",[s._v("全部内存量")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("集合 Set")]),s._v(" "),t("td",[s._v("64 位")]),s._v(" "),t("td",[s._v("50000000")]),s._v(" "),t("td",[s._v("64 位 * 50000000 = 400MB")])]),s._v(" "),t("tr",[t("td",[s._v("Bitmaps")]),s._v(" "),t("td",[s._v("1 位")]),s._v(" "),t("td",[s._v("100000000")]),s._v(" "),t("td",[s._v("1 位 * 100000000 = 12.5MB")])])])]),s._v(" "),t("p",[t("strong",[s._v("Set 和 Bitmaps 存储独立用户空间对比")])]),s._v(" "),t("p",[s._v("很明显，这种情况下使用 Bitmaps 能节省很多的内存空间，尤其是随着时间推移节省的内存还是非常可观的。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("数据类型")]),s._v(" "),t("th",[s._v("一天")]),s._v(" "),t("th",[s._v("一个月")]),s._v(" "),t("th",[s._v("一年")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("集合 Set")]),s._v(" "),t("td",[s._v("400MB")]),s._v(" "),t("td",[s._v("12GB")]),s._v(" "),t("td",[s._v("144GB")])]),s._v(" "),t("tr",[t("td",[s._v("Bitmaps")]),s._v(" "),t("td",[s._v("12.5MB")]),s._v(" "),t("td",[s._v("375MB")]),s._v(" "),t("td",[s._v("4.5GB")])])])]),s._v(" "),t("p",[t("strong",[s._v("Set 和 Bitmaps 存储一天活跃用户对比（独立用户比较少）")])]),s._v(" "),t("p",[s._v("但 Bitmaps 并不是万金油，假如该网站每天的独立访问用户很少，例如只有 10 万（大量的僵尸用户），那么两者的对比如下表所示，很显然，这时候使用 Bitmaps 就不太合适了，因为基本上大部分位都是 0")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("数据类型")]),s._v(" "),t("th",[s._v("每个 userid 占用空间")]),s._v(" "),t("th",[s._v("需要存储的用户量")]),s._v(" "),t("th",[s._v("全部内存量")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("集合 Set")]),s._v(" "),t("td",[s._v("64 位")]),s._v(" "),t("td",[s._v("100000")]),s._v(" "),t("td",[s._v("64 位 * 100000 = 800KB")])]),s._v(" "),t("tr",[t("td",[s._v("Bitmaps")]),s._v(" "),t("td",[s._v("1 位")]),s._v(" "),t("td",[s._v("100000000")]),s._v(" "),t("td",[s._v("1 位 * 100000000 = 12.5MB")])])])]),s._v(" "),t("h2",{attrs:{id:"hyperloglog-hll"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog-hll"}},[s._v("#")]),s._v(" HyperLogLog(HLL)")]),s._v(" "),t("p",[s._v("Redis 在 2.8.9 版本添加了 HyperLogLog 结构。")]),s._v(" "),t("p",[s._v("Redis HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定的、并且是很小的。")]),s._v(" "),t("p",[s._v("在 Redis 里面，每个 HyperLogLog 键只需要花费 12KB 内存，就可以计算接近 2^64 个不同元素的基数。这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。")]),s._v(" "),t("p",[s._v("HyperLogLog 是一种算法，它提供了不精确的去重计数方案。")]),s._v(" "),t("p",[s._v("举个栗子：假如我要统计网页的 UV（浏览用户数量，一天内同一个用户多次访问只能算一次），传统的解决方案是使用 Set 来保存用户 id，然后统计 Set 中的元素数量来获取页面 UV。但这种方案只能承载少量用户，一旦用户数量大起来就需要消耗大量的空间来存储用户 id。我的目的是统计用户数量而不是保存用户，这简直是个吃力不讨好的方案。而使用 Redis 的 HyperLogLog 最多需要 12k 就可以统计大量的用户数，尽管它大概有 0.81% 的错误率，但对于统计 UV 这种不需要很精确的数据是可以忽略不计的。")]),s._v(" "),t("p",[s._v("HyperLogLog 根据输入元素来计算基数，而不会储存输入元素本身（相比较 Set），只储存数，不存元素本身，只存储值。")]),s._v(" "),t("p",[s._v("比如数据集 {1, 3, 5, 7, 5, 7, 8}， 那么这个数据集的基数集为 {1, 3, 5 ,7, 8},  基数（不重复元素总数）为 5。基数估计就是在误差可接受的范围内，快速计算基数。")]),s._v(" "),t("p",[t("strong",[s._v("总结就是去掉重复的元素，只存储不重复元素的个数，不会储存元素本身。")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("添加指定元素（可添加多个）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pfadd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("element"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("element"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("计算 HLL 的近似基数（可计算多个）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pfcount "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将一个或多个 HLL 合并后的结果存 储在另一个 HLL 中")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pfmerge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("newKey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("otherKey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("otherKey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("otherKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pfadd hll1 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reids"')]),s._v("\npfcount hll1   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结果 2，因为 redis 重复了")]),s._v("\n\npfadd hll2 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oracle"')]),s._v("\npfmerge hll3 hll1 hll2\npfcount hll3  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结果 3，因为 hll1 与 hll2 合并的结果给 hll3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])]),s._v(" "),t("p",[s._v("案例：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" pfadd mykey a b c d e f g h i j\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" pfcount mykey\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" pfadd mykey2 i j z x c "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" b n m\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" pfmerge mykey3 mykey mykey2\nOK\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" pfcount mykey3\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"geospatial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geospatial"}},[s._v("#")]),s._v(" Geospatial")]),s._v(" "),t("p",[s._v("Redis 3.2 中增加了对 GEO 类型的支持。GEO 即 Geographic，地理信息的缩写。该类型，就是元素的二维坐标，在地图上就是经纬度。redis 基于该类型，提供了经纬度设置、查询、范围查询、距离查询、经纬度 Hash 等常见操作。GEO 的数据类型为 zset。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("添加地理位置（经度，纬度，名称）（可添加多个）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("geoadd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("经度"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("维度"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("geoadd china:city "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("121.47")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31.23")]),s._v(" 上海\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次性添加多个地理位置")]),s._v("\ngeoadd china:city "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.50")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.53")]),s._v(" 广西 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.05")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.52")]),s._v(" 深圳 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("116.38")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("39.90")]),s._v(" 北京\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("注意：两极无法添加，有效的经度从 -180 度到 180 度。有效的纬度从 -85.05112878 度到 85.05112878 度，当坐标位置超出指定范围时，该命令将会返回一个错误。已经添加的数据，是无法再次往里面添加的。")])]),s._v(" "),t("li",[t("p",[s._v("获得指定地区的坐标值")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("geopos "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("geopos china:city 北京 上海 重庆\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回经度和纬度")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("获取两个位置之间的直线距离")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("geodist "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("名称"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("km"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ft"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("mi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("geodist china:city 北京 上海 km \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结果：1087.4816")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("单位：m 表示单位为米[默认值]。km 表示单位为千米。mi 表示单位为英里。ft 表示单位为英尺")])]),s._v(" "),t("li",[t("p",[s._v("以给定的经纬度为中心，找出某一半径内的元素")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("georadius "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("经度"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("维度"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 距离 m"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("km"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ft"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("mi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("georadius china:city "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" km\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回结果：chongqing  shenzheng")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"指令总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令总结"}},[s._v("#")]),s._v(" 指令总结")]),s._v(" "),t("p",[s._v("虽然看了三个数据类型的 API 和例子，但是两者混为一起，难免心生抵触，不想看例子，这里以表格形式总结 API，不参杂任何例子。")]),s._v(" "),t("h3",{attrs:{id:"bitmaps-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitmaps-2"}},[s._v("#")]),s._v(" Bitmaps")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("指令")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("setbit <key> <offset> <value>")]),s._v(" "),t("td",[s._v("给偏移量设值(0 或 1)")])]),s._v(" "),t("tr",[t("td",[s._v("getbit <key> <offset>")]),s._v(" "),t("td",[s._v("根据偏移量获取值")])]),s._v(" "),t("tr",[t("td",[s._v("bitcount <key> [start end]")]),s._v(" "),t("td",[s._v("统计字符串从 start 字节到 end 字节比特值为 1 的数量，start 和 end 代表起始和结束字节数")])]),s._v(" "),t("tr",[t("td",[s._v("bitop <operation> <key1> <key2> ...")]),s._v(" "),t("td",[s._v("bitop 是一个复合操作，operation 是 and（交集）、or（并集）、not（非）、xor（异或），可以将结果保存在 destkey 中")])])])]),s._v(" "),t("h3",{attrs:{id:"hyperloglog-hll-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hyperloglog-hll-2"}},[s._v("#")]),s._v(" HyperLogLog(HLL)")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("指令")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("pfadd <key> <element> [element] ...")]),s._v(" "),t("td",[s._v("添加指定元素（可添加多个）")])]),s._v(" "),t("tr",[t("td",[s._v("pfcount <key> [key] ...")]),s._v(" "),t("td",[s._v("计算 HLL 的近似基数（可计算多个）")])]),s._v(" "),t("tr",[t("td",[s._v("pfmerge <newKey> <otherKey> <otherKey> [otherKey] ...")]),s._v(" "),t("td",[s._v("将一个或多个 HLL 合并后的结果存 储在另一个 HLL 中")])])])]),s._v(" "),t("h3",{attrs:{id:"geospatial-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geospatial-2"}},[s._v("#")]),s._v(" Geospatial")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("指令")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("geoadd <key> <经度> <维度> <名称> ...")]),s._v(" "),t("td",[s._v("获得指定地区的坐标值")])]),s._v(" "),t("tr",[t("td",[s._v("geodist <key> <名称1> <名称2> [m|km|ft|mi]")]),s._v(" "),t("td",[s._v("获取两个位置之间的直线距离")])]),s._v(" "),t("tr",[t("td",[s._v("georadius <key> <经度> <维度> 距离 m|km|ft|mi")]),s._v(" "),t("td",[s._v("以给定的经纬度为中心，找出某一半径内的元素")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
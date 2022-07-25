(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{466:function(a,t,s){"use strict";s.r(t);var v=s(1),r=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#概念"}},[a._v("概念")])]),t("li",[t("a",{attrs:{href:"#什么是垃圾"}},[a._v("什么是垃圾")]),t("ul",[t("li",[t("a",{attrs:{href:"#什么是垃圾"}},[a._v("什么是垃圾？")])]),t("li",[t("a",{attrs:{href:"#磁盘碎片整理"}},[a._v("磁盘碎片整理")])]),t("li",[t("a",{attrs:{href:"#大厂面试题"}},[a._v("大厂面试题")])])])]),t("li",[t("a",{attrs:{href:"#为什么需要gc"}},[a._v("为什么需要GC")])]),t("li",[t("a",{attrs:{href:"#早期垃圾回收"}},[a._v("早期垃圾回收")])]),t("li",[t("a",{attrs:{href:"#java垃圾回收机制"}},[a._v("Java垃圾回收机制")]),t("ul",[t("li",[t("a",{attrs:{href:"#优点"}},[a._v("优点")])]),t("li",[t("a",{attrs:{href:"#担忧"}},[a._v("担忧")])]),t("li",[t("a",{attrs:{href:"#gc主要关注的区域"}},[a._v("GC主要关注的区域")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("p",[a._v("这次我们主要关注的是黄色部分，内存的分配与回收")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116162327.png",alt:"image-20200712084539884"}})]),a._v(" "),t("h2",{attrs:{id:"什么是垃圾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是垃圾"}},[a._v("#")]),a._v(" 什么是垃圾")]),a._v(" "),t("p",[a._v("在提到什么是垃圾之前，我们先看下面一张图")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116162329.png",alt:"image-20200712085456113"}})]),a._v(" "),t("p",[a._v("从上图我们可以很明确的知道，Java 和 C++ 语言的区别，就在于垃圾收集技术和内存动态分配上，C 语言没有垃圾收集技术，需要我们手动的收集。")]),a._v(" "),t("p",[a._v("垃圾收集，不是 Java 语言的伴生产物。早在 1960 年，第一门开始使用内存动态分配和垃圾收集技术的 Lisp 语言诞生。")]),a._v(" "),t("p",[a._v("关于垃圾收集有三个经典问题：")]),a._v(" "),t("ul",[t("li",[a._v("哪些内存需要回收？")]),a._v(" "),t("li",[a._v("什么时候回收？")]),a._v(" "),t("li",[a._v("如何回收？")])]),a._v(" "),t("p",[a._v("垃圾收集机制是 Java 的招牌能力，极大地提高了开发效率。如今，垃圾收集几乎成为现代语言的标配，即使经过如此长时间的发展，Java 的垃圾收集机制仍然在不断的演进中，不同大小的设备、不同特征的应用场景，对垃圾收集提出了新的挑战，这当然也是 "),t("strong",[a._v("面试的热点")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"什么是垃圾-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是垃圾-2"}},[a._v("#")]),a._v(" 什么是垃圾？")]),a._v(" "),t("p",[a._v("垃圾是指在 "),t("strong",[a._v("运行程序中没有任何指针指向的对象")]),a._v("，这个对象就是需要被回收的垃圾。")]),a._v(" "),t("p",[a._v("如果不及时对内存中的垃圾进行清理，那么，这些垃圾对象所占的内存空间会一直保留到应用程序的结束，被保留的空间无法被其它对象使用，甚至可能导致内存溢出。")]),a._v(" "),t("h3",{attrs:{id:"磁盘碎片整理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#磁盘碎片整理"}},[a._v("#")]),a._v(" 磁盘碎片整理")]),a._v(" "),t("p",[a._v("机械硬盘需要进行磁盘整理，同时还有坏道")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116162356.png",alt:"image-20200712090848669"}})]),a._v(" "),t("h3",{attrs:{id:"大厂面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大厂面试题"}},[a._v("#")]),a._v(" 大厂面试题")]),a._v(" "),t("h4",{attrs:{id:"蚂蚁金服"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#蚂蚁金服"}},[a._v("#")]),a._v(" 蚂蚁金服")]),a._v(" "),t("ul",[t("li",[a._v("你知道哪几种垃圾回收器，各自的优缺点，重点讲一下 CMS 和G1？")]),a._v(" "),t("li",[a._v("JVM GC 算法有哪些，目前的 JDK 版本采用什么回收算法？")]),a._v(" "),t("li",[a._v("G1 回收器讲下回收过程 GC 是什么？为什么要有 GC？")]),a._v(" "),t("li",[a._v("GC 的两种判定方法？CMS 收集器与 G1 收集器的特点")])]),a._v(" "),t("h4",{attrs:{id:"百度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#百度"}},[a._v("#")]),a._v(" 百度")]),a._v(" "),t("ul",[t("li",[a._v("说一下 GC 算法，分代回收说下")]),a._v(" "),t("li",[a._v("垃圾收集策略和算法")])]),a._v(" "),t("h4",{attrs:{id:"天猫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#天猫"}},[a._v("#")]),a._v(" 天猫")]),a._v(" "),t("ul",[t("li",[a._v("JVM GC 原理，JVM 怎么回收内存")]),a._v(" "),t("li",[a._v("CMS 特点，垃圾回收算法有哪些？各自的优缺点，他们共同的缺点是什么？")])]),a._v(" "),t("h4",{attrs:{id:"滴滴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滴滴"}},[a._v("#")]),a._v(" 滴滴")]),a._v(" "),t("p",[a._v("Java 的垃圾回收器都有哪些，说下 G1 的应用场景，平时你是如何搭配使用垃圾回收器的")]),a._v(" "),t("h4",{attrs:{id:"京东"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#京东"}},[a._v("#")]),a._v(" 京东")]),a._v(" "),t("ul",[t("li",[a._v("你知道哪几种垃圾收集器，各自的优缺点，重点讲下 CMS 和 G1")]),a._v(" "),t("li",[a._v("包括原理，流程，优缺点。垃圾回收算法的实现原理")])]),a._v(" "),t("h4",{attrs:{id:"阿里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里"}},[a._v("#")]),a._v(" 阿里")]),a._v(" "),t("ul",[t("li",[a._v("讲一讲垃圾回收算法。")]),a._v(" "),t("li",[a._v("什么情况下触发垃圾回收？")]),a._v(" "),t("li",[a._v("如何选择合适的垃圾收集算法？")]),a._v(" "),t("li",[a._v("JVM 有哪三种垃圾回收器？")])]),a._v(" "),t("h4",{attrs:{id:"字节跳动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字节跳动"}},[a._v("#")]),a._v(" 字节跳动")]),a._v(" "),t("ul",[t("li",[a._v("常见的垃圾回收器算法有哪些，各有什么优劣？")]),a._v(" "),t("li",[a._v("System.gc() 和 Runtime.gc() 会做什么事情？")]),a._v(" "),t("li",[a._v("Java GC 机制？GC Roots 有哪些？")]),a._v(" "),t("li",[a._v("Java 对象的回收方式，回收算法。")]),a._v(" "),t("li",[a._v("CMS 和 G1 了解么，CMS 解决什么问题，说一下回收的过程。")]),a._v(" "),t("li",[a._v("CMS 回收停顿了几次，为什么要停顿两次?")])]),a._v(" "),t("h2",{attrs:{id:"为什么需要gc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要gc"}},[a._v("#")]),a._v(" 为什么需要GC")]),a._v(" "),t("p",[a._v("对于高级语言来说，一个基本认知是如果不进行垃圾回收，"),t("strong",[a._v("内存迟早都会被消耗完")]),a._v("，因为不断地分配内存空间而不进行回收，就好像不停地生产生活垃圾而从来不打扫一样。")]),a._v(" "),t("p",[a._v("除了释放没用的对象，垃圾回收也可以清除内存里的记录碎片。碎片整理将所占用的堆内存移到堆的一端，以便 "),t("strong",[a._v("JVM 将整理出的内存分配给新的对象")]),a._v("。")]),a._v(" "),t("p",[a._v("随着应用程序所应付的业务越来越庞大、复杂，用户越来越多，"),t("strong",[a._v("没有 GC 就不能保证应用程序的正常进行")]),a._v("。而经常造成 STW 的 GC 又跟不上实际的需求，所以才会不断地尝试对 GC 进行优化。")]),a._v(" "),t("h2",{attrs:{id:"早期垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#早期垃圾回收"}},[a._v("#")]),a._v(" 早期垃圾回收")]),a._v(" "),t("p",[a._v("在早期的 C/C++ 时代，垃圾回收基本上是手工进行的。开发人员可以使用 new 关键字进行内存申请，并使用 delete 关键字进行内存释放。比如以下代码：")]),a._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[a._v("MibBridge "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("pBridge "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" new cmBaseGroupBridge（）；\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 如果注册失败，使用 Delete 释放该对象所占内存区域")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v("（pBridge"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("kDestroy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" NO ERROR）\n\tdelete pBridge；\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("这种方式可以灵活控制内存释放的时间，但是会给开发人员带来 "),t("strong",[a._v("频繁申请和释放内存的管理负担")]),a._v("。倘若有一处内存区间由于程序员编码的问题忘记被回收，那么就会产生 "),t("strong",[a._v("内存泄漏")]),a._v("，垃圾对象永远无法被清除，随着系统运行时间的不断增长，垃圾对象所耗内存可能持续上升，直到出现内存溢出并造成应 "),t("strong",[a._v("用程序崩溃")]),a._v("。")]),a._v(" "),t("p",[a._v("有了垃圾回收机制后，上述代码极有可能变成这样：")]),a._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[a._v("MibBridge "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("pBridge "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" new "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cmBaseGroupBridge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \npBridge"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("Register")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("kDestroy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("现在，除了 Java 以外，C#、Python、Ruby 等语言都使用了自动垃圾回收的思想，也是未来发展趋势，可以说这种自动化的内存分配和来及回收方式已经成为了线代开发语言必备的标准。")]),a._v(" "),t("h2",{attrs:{id:"java垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java垃圾回收机制"}},[a._v("#")]),a._v(" Java垃圾回收机制")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("官网介绍")]),a._v("："),t("code",[a._v("https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/toc.html")])])]),a._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),t("p",[a._v("自动内存管理，无需开发人员手动参与内存的分配与回收，这样降低内存泄漏和内存溢出的风险。")]),a._v(" "),t("p",[a._v("没有垃圾回收器，Java 也会和 cpp 一样，各种悬垂指针，野指针，泄露问题让你头疼不已。")]),a._v(" "),t("p",[a._v("自动内存管理机制，将程序员从繁重的内存管理中释放出来，可以 "),t("strong",[a._v("更专心地专注于业务开发")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"担忧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#担忧"}},[a._v("#")]),a._v(" 担忧")]),a._v(" "),t("p",[a._v("对于 Java 开发人员而言，自动内存管理就像是一个黑匣子，如果过度依赖于「自动」，那么这将会是一场灾难，最严重的就会 "),t("strong",[a._v("弱化 Java 开发人员在程序出现内存溢出时定位问题和解决问题的能力")]),a._v("。")]),a._v(" "),t("p",[a._v("此时，了解 JVM 的自动内存分配和内存回收原理就显得非常重要，只有在真正了解 JVM 是如何管理内存后，我们才能够在遇见 "),t("code",[a._v("OutofMemoryError")]),a._v(" 时，快速地根据错误异常日志定位问题和解决问题。")]),a._v(" "),t("p",[a._v("当需要排查各种内存溢出、内存泄漏问题时，当垃圾收集成为系统达到更高并发量的瓶颈时，我们就必须对这些「自动化」的技术 "),t("strong",[a._v("实施必要的监控和调节")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"gc主要关注的区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc主要关注的区域"}},[a._v("#")]),a._v(" GC主要关注的区域")]),a._v(" "),t("p",[a._v("GC 主要关注于方法区和堆中的垃圾收集，如图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://fastly.jsdelivr.net/gh/Kele-Bingtang/static/img/Java/20220116162637.png",alt:"image-20200712092427246"}})]),a._v(" "),t("p",[a._v("垃圾收集器可以对年轻代回收，也可以对老年代回收，甚至是全栈和方法区的回收")]),a._v(" "),t("p",[a._v("其中，Java 堆是垃圾收集器的工作重点。")]),a._v(" "),t("p",[a._v("从次数上讲：")]),a._v(" "),t("ul",[t("li",[a._v("频繁收集 Young 区")]),a._v(" "),t("li",[a._v("较少收集 Old 区")]),a._v(" "),t("li",[a._v("基本不收集 Perm 区（JDK8 后改为元空间）")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
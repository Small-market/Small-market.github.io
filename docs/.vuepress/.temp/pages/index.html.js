export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"/logo.svg\",\"heroText\":\"Gavin Blog\",\"heroFullScreen\":true,\"tagline\":\"如果一个人把生活兴趣全部建立在爱情那样暴风雨般的感情冲动上,那是会令人失望的。 —— 来自 Maria Curie\",\"projects\":[{\"icon\":\"project\",\"name\":\"项目名称\",\"desc\":\"项目详细描述\",\"link\":\"https://你的项目链接\"},{\"icon\":\"link\",\"name\":\"链接名称\",\"desc\":\"链接详细描述\",\"link\":\"https://链接地址\"},{\"icon\":\"book\",\"name\":\"书籍名称\",\"desc\":\"书籍详细描述\",\"link\":\"https://你的书籍链接\"},{\"icon\":\"article\",\"name\":\"文章名称\",\"desc\":\"文章详细描述\",\"link\":\"https://你的文章链接\"},{\"icon\":\"friend\",\"name\":\"伙伴名称\",\"desc\":\"伙伴详细介绍\",\"link\":\"https://你的伙伴链接\"},{\"icon\":\"/logo.svg\",\"name\":\"自定义项目\",\"desc\":\"自定义详细介绍\",\"link\":\"https://你的自定义链接\"}],\"footer\":\"自定义你的页脚文字\",\"summary\":\"这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://www.gavinwish.xyz/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Gavin blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.85,\"words\":256},\"copyright\":\"著作权归Gavin所有\\n基于https://github.com/Small-market/Small-market.github.io/LICENSE协议\\n原文链接：http://www.gavinwish.xyz/\",\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

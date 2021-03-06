import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
	hostname: 'http://www.gavinwish.xyz',

	author: {
		name: 'Gavin',
		url: 'http://www.gavinwish.xyz'
	},

	iconAssets: 'iconfont',

	logo: '/logo.svg',

	repo: 'Small-market/Small-market.github.io',

	docsDir: 'docs',

	// navbar
	navbar,

	// sidebar
	sidebar,
	themeColor: {
		blue: '#2196f3',
		red: '#f26d6d',
		green: '#3eaf7c',
		orange: '#fb9b5f'
	},
	fullscreen: true,
	footer: '默认页脚',

	displayFooter: true,

	pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

	blog: {
		description: '编程之八字真言：1、专2、静3、谦4、筹5、悟6、慎7、透8、恒。',
		intro: '/intro.html',
		medias: {
			Baidu: 'https://example.com',
			Bitbucket: 'https://example.com',
			Dingding: 'https://example.com',
			Discord: 'https://example.com',
			Dribbble: 'https://example.com',
			Email: 'https://example.com',
			Evernote: 'https://example.com',
			Facebook: 'https://example.com',
			Flipboard: 'https://example.com',
			Gitee: 'https://example.com',
			GitHub: 'https://example.com',
			Gitlab: 'https://example.com',
			Gmail: 'https://example.com',
			Instagram: 'https://example.com',
			Lines: 'https://example.com',
			Linkedin: 'https://example.com',
			Pinterest: 'https://example.com',
			Pocket: 'https://example.com',
			QQ: 'https://example.com',
			Qzone: 'https://example.com',
			Reddit: 'https://example.com',
			Rss: 'https://example.com',
			Steam: 'https://example.com',
			Twitter: 'https://example.com',
			Wechat: 'https://example.com',
			Weibo: 'https://example.com',
			Whatsapp: 'https://example.com',
			Youtube: 'https://example.com',
			Zhihu: 'https://example.com'
		}
	},

	encrypt: {
		config: {
			'/guide/encrypt.html': ['1234']
		}
	},

	plugins: {
		blog: {
			autoExcerpt: true
		},

		// 如果你不需要评论，可以直接删除 comment 配置，
		// 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
		// 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
		comment: {
			/**
			 * Using Giscus
			 */
			// provider: "Giscus",
			// repo: "vuepress-theme-hope/giscus-discussions",
			// repoId: "R_kgDOG_Pt2A",
			// category: "Announcements",
			// categoryId: "DIC_kwDOG_Pt2M4COD69",

			/**
			 * Using Twikoo
			 */
			provider: 'Twikoo',
			envId: 'https://small-market.vercel.app'

			/**
			 * Using Waline
			 */
			// provider: "Waline",
			// serverURL: "https://vuepress-theme-hope-comment.vercel.app",
		},
		//版权信息插件配置
		copyright: {
			author: 'Gavin',
			triggerWords: 1,
			global: true,
			license: 'https://github.com/Small-market/Small-market.github.io/LICENSE'
		},
		mdEnhance: {
			enableAll: true,
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
			}
		}
	}
})

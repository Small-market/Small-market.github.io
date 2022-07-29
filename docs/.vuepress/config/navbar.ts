import { navbar } from 'vuepress-theme-hope'

export default navbar([
	'/',
	{
		text: '导航',
		icon: 'selection',
		link: '/resource/'
	},
	{
		text: 'Java',
		icon: 'java',
		link: '/java/'
		// children: [
		// 	{
		// 		text: 'java基础',
		// 		icon: 'java',
		// 		children: [
		// 			{ text: 'java-基础', icon: 'edit', link: 'base/01.md' }
		// 			// { text: 'java-集合', icon: 'edit', link: 'base/01.md' },
		// 			// { text: 'java-并发', icon: 'edit', link: 'base/01.md' },
		// 			// { text: 'java-IO', icon: 'edit', link: 'base/01.md' },
		// 			// { text: 'java-新特性', icon: 'edit', link: 'base/01.md' },
		// 			// { text: 'java-JVM', icon: 'edit', link: 'base/01.md' }
		// 		]
		// 	},
		// 	{
		// 		text: 'Spring生态',
		// 		icon: 'java',
		// 		children: [
		// 			{ text: 'Spring-Framework', icon: 'edit', link: 'spring/01.md' }
		// 			// { text: 'SpringBoot', icon: 'edit', link: 'base/01' },
		// 			// { text: 'SpringCloud', icon: 'edit', link: 'base/01' }
		// 		]
		// 	}
		// ]
	},
	{
		text: '数据库',
		icon: 'mysql',
		link: '/database/'
	},
	{
		text: '开发',
		icon: 'code',
		link: '/develop/'
	},
	{
		text: '框架',
		icon: 'generic',
		link: '/framework/'
	},
	{
		text: '工具',
		icon: 'tool',
		link: '/tool/'
	},
	{
		text: '前端',
		icon: 'template',
		link: '/front/'
	},
	{
		text: '更多',
		icon: 'more',
		link: '/more/'
	},
	{
		text: '关于',
		icon: 'people',
		link: '/about/'
	}
])

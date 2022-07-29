import { searchPlugin } from '@vuepress/plugin-search'
// import { dynamicTitlePlugin } from "@vuepress-denaro/vuepress-plugin-dynamic-title";
// import { cursorEffects } from "@anyfork/vuepress-plugin-cursor-effects-next";

import { defineUserConfig } from 'vuepress'
import head from './config/head'
import theme from './config/theme'

export default defineUserConfig({
	// 多语言配置
	locales: {
		'/': {
			// 设置正在使用的语言
			lang: 'zh-CN'
		},
		'/en/': {
			// 设置正在使用的语言
			lang: 'en-US'
		}
	},
	// 插件
	plugins: [
		// 搜索插件
		searchPlugin({
			// 你的选项
			locales: {
				'/': {
					placeholder: '搜索'
				},
				'/en/': {
					placeholder: 'Search'
				}
			}
		})
		// dynamicTitlePlugin({
		//   showIcon: '/favicon.ico',
		//   showText: 'ヾ(≧▽≦*)o欢迎回来！',
		//   hideIcon: '/favicon.ico',
		//   hideText: 'ಥ_ಥ不要走呀！',
		//   recoverTime: 2000,   //  持续时间
		// }),
		// cursorEffects({
		//   size: 2, // 粒子的大小，默认值：2
		//   shape: 'star', // 粒子的形状，star：星形，circle：圆形。默认值：star
		//   zIndex: 999999999, // 页面的索引属性，默认值：99999999，
		// }),
	],
	title: 'Gavin blog',
	description:
		'Gavin个人博客, VuePress搭建, 使用了 Vdoing 主题, 学习Java, Web, 框架, 微服务, 工具, 前端等相关知识, 记录生活和技术路程, 同时分享编程技巧。',
	base: '/',
	head,
	theme
})

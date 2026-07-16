import type { SidebarLayoutConfig } from "../types/sidebarConfig";

/**
 * 初版只保留个人资料、分类、标签和文章目录。
 * 音乐、公告、动态、广告及外部服务均保持关闭。
 */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "left",
	tabletSidebar: "left",
	hideSidebarOnPostPage: false,
	showBothSidebarsOnPostPage: true,
	leftComponents: [
		{
			type: "profile",
			enable: true,
			showTitle: false,
			position: "top",
			showOnPostPage: true,
		},
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			specificConfig: { collapseThreshold: 5 },
		},
		{
			type: "tags",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			specificConfig: { collapseThreshold: 10 },
		},
	],
	rightComponents: [
		{
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			hideOnNonPostPage: true,
		},
	],
	mobileBottomComponents: [
		{
			type: "profile",
			enable: true,
			showTitle: false,
			showOnPostPage: true,
		},
	],
};

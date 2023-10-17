import React from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import styles from './gutenmateThemes.module.css';

export const themes = {
	qrten: {
		title: "Qrten",
		description: "Qrten - Full site customizable WordPress block theme with WooCommerce for multipurpose blog and online shop",
		imgSidebar: "theme-qrten-preview.png",
		demoUrl: "https://demo.gutenmate.com/demo-a/qrten/landing",
		itemUrl: "https://themeforest.net/item/qrten-blockbased-wordpress-theme-for-blog-magazine-and-woocommerce-shop-with-adsense-optimized/48706915",
	},
	breadly: {
		title: "Breadly",
		description: "Breadly - Adsense Optimized Minimal Blog WordPress Block Theme with WooCommerce support",
		imgSidebar: "theme-breadly-preview.png",
		demoUrl: "https://demo.gutenmate.com/demo-a/breadly-main/",
		itemUrl: "https://themeforest.net/item/breadly-adsense-optimized-minimal-blog-wordpress-block-theme-with-woocommerce-support/45833289",
	},
	guzine: {
		title: "Guzine",
		description: "Adsense Ready Magazine WordPress Theme for Food Blogging",
		imgSidebar: "theme-guzine-preview.png",
		demoUrl: "https://demo.gutenmate.com/guzine/",
		itemUrl: "https://themeforest.net/item/guzine-recipe-blogging-wordpress-theme/40657122",
	},
};

export function getGtmThemeConfig() {
	const sidebar = useDocsSidebar();
	const theme = sidebar?.name.replace(/sidebar/i, "").toLowerCase();

	return themes[theme];
}

export function ThemeSidebarHeader() {
	const theme = getGtmThemeConfig();

	return (
		<div className={styles.sidebarHero}>
			{theme.imgSidebar && <img src={require(`@site/static/img/${theme.imgSidebar}`).default}></img>}
			<div className="gtm-theme-sidebar-hero__inner">
				{theme.demoUrl && <a href={theme.demoUrl} className={styles.sidebarHeroButton} target="_blank">▶ Demo</a>}
				{theme.itemUrl && <a href={theme.itemUrl} className={styles.sidebarHeroButton} target="_blank">🛒 Purchase</a>}
			</div>
		</div>
	);
}

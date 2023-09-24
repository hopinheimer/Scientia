export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Scientia",
	description: "Decentised Peer Review",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Whitepaper",
			href: "/whitepaper",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Terms",
			href: "/terms",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
	},
};

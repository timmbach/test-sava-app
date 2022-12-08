import { GalleryIcon, CategoriesIcon, BinIcon, ArchiveIcon } from "../../../assets/svg";

export const navData = [
	{
		id: 1,
		Icon: GalleryIcon,
		title: "All pictures",
		status: "inactive",
		href: "/dashboard",
	},
	{
		id: 2,
		Icon: CategoriesIcon,
		title: "Categories",
		status: "inactive",
		href: "/dashboard/categories",
		subnav: true,
	},
	{
		id: 3,
		Icon: ArchiveIcon,
		title: "Archives",
		status: "inactive",
		href: "/dashboard/archive",
	},
	{
		id: 4,
		Icon: BinIcon,
		title: "Bin",
		status: "inactive",
		href: "/dashboard/bin",
	},
];

export const categoriesData = [
	{
		id: 5,
		title: "Just You",
		status: "active",
		href: "/dashboard/categories/just-you",
	},
	{
		id: 6,
		title: "You and friends",
		status: "inactive",
		href: "/dashboard/categories/you-and-friends",
	},
	{
		id: 7,
		title: "You and pets",
		status: "inactive",
		href: "/dashboard/categories/you-and-pets",
	},
	{
		id: 8,
		title: "Happy Moments",
		status: "inactive",
		href: "/dashboard/categories/happy-moments",
	},
];

import {
	GalleryIcon,
	CategoriesIcon,
	BinIcon,
	ArchiveIcon,
} from "../../../assets/svg";

export const navData = [
	{
		id: 1,
		Icon: GalleryIcon,
		title: "All pictures",
		status: "active",
		href: "/dashboard",
	},
	{
		id: 2,
		Icon: CategoriesIcon,
		title: "Categories",
		status: "inactive",
		href: "/categories",
	},
	{
		id: 3,
		Icon: ArchiveIcon,
		title: "Archives",
		status: "inactive",
		href: "/archive",
	},
	{
		id: 4,
		Icon: BinIcon,
		title: "Bin",
		status: "inactive",
		href: "/bin",
	},
];

export const categoriesData = [
	{
		id: 1,
		title: "Just You",
		status: "active",
		href: "/",
	},
	{
		id: 2,
		title: "You and friends",
		status: "inactive",
		href: "/",
	},
	{
		id: 3,
		title: "You and pets",
		status: "inactive",
		href: "/",
	},
	{
		id: 4,
		title: "Happy Moments",
		status: "inactive",
		href: "/",
	},
];
import JustYou from "../../assets/categories/just-you.png";
import AllPictures from "../../assets/categories/all.png";
import HappyMoment from "../../assets/categories/happy-moment.png";
import YouAndPets from "../../assets/categories/you-and-pets.png";
import YouAndFriends from "../../assets/categories/you-and-friends.png";

export const categoriesData = [
	{
		id: 1,
		title: "All Pictures",
		// href: "/dashboard/categories",
		href: "/dashboard/categories",
		image: AllPictures,
	},
	{
		id: 2,
		title: "You and friends",
		// href: "/dashboard/categories/you-and-friends",
		href: "/dashboard/categories/WithFriends",
		image: YouAndFriends,
	},
	{
		id: 3,
		title: "You and pets",
		// href: "/dashboard/categories/you-and-pets",
		href: "/dashboard/categories/WithPets",
		image: YouAndPets,
	},
	{
		id: 4,
		title: "Happy Moments",
		href: "/dashboard/categories/HappyMoments",
		// href: "/dashboard/categories/happy-moments",
		image: HappyMoment,
	},
	{
		id: 5,
		title: "Just you",
		href: "/dashboard/categories/SelfImage",
		image: JustYou,
	},
];

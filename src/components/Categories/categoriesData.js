import JustYou from '../../assets/categories/just-you.png';
import AllPictures from '../../assets/categories/all.png';
import HappyMoment from '../../assets/categories/happy-moment.png';
import YouAndPets from '../../assets/categories/you-and-pets.png';
import YouAndFriends from '../../assets/categories/you-and-friends.png';

export const categoriesData = [
  {
    id: 1,
    title: 'All Pictures',
    href: '/',
    image: AllPictures,
  },
  {
    id: 2,
    title: 'You and friends',
    href: '/category/you-and-friends',
    image: YouAndFriends,
  },
  {
    id: 3,
    title: 'You and pets',
    href: '/category/you-and-pets',
    image: YouAndPets,
  },
  {
    id: 4,
    title: 'Happy Moments',
    href: '/category/happy-moments',
    image: HappyMoment,
  },
  {
    id: 5,
    title: 'Just you',
    href: '/category/just-you',
    image: JustYou,
  },
];

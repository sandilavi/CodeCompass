// assets
import { IconHome, IconBookFilled, IconCalendarExclamation, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconHome,
  IconBookFilled,
  IconCalendarExclamation,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Menu',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Home',
      type: 'item',
      url: '/menu/home',
      icon: icons.IconHome,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'My Learning Plans',
      type: 'item',
      url: '/menu/courses',
      icon: icons.IconBookFilled,
    },
    {
      id: 'util-shadow',
      title: 'My Goals',
      type: 'item',
      url: '/menu/goals',
      icon: icons.IconCalendarExclamation,
    },
    {
      id: 'icons',
      title: 'About Us',
      type: 'item',
      url: '/menu/aboutus',
      icon: icons.IconWindmill
    }
  ]
};

export default utilities;

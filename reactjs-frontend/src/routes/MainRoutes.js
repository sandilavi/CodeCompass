import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const MyLearningPlan = Loadable(lazy(() => import('views/options/myLearningPlan')));
const MyGoals = Loadable(lazy(() => import('views/options/GoalSection/MyGoals')));
const AboutUs = Loadable(lazy(() => import('views/options/aboutUs')));

// sample page routing
const HomePage = Loadable(lazy(() => import('views/home-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = [{
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: 'menu',
      children: [
        {
          path: 'home',
          element: <HomePage />
        }
      ]
    },
    {
      path: 'menu',
      children: [
        {
          path: 'courses',
          element: <MyLearningPlan />
        }
      ]
    },
    {
      path: 'menu',
      children: [
        {
          path: 'goals',
          element: <MyGoals />
        }
      ]
    },
    {
      path: 'menu',
      children: [
        {
          path: 'aboutus',
          element: <AboutUs />
        }
      ]
    }
  ]
}];

export default MainRoutes;

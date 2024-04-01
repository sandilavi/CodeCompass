import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import { Login } from 'Login';
import CourseContentPlayer from 'views/content-player/ContentPlayer';
import Quiz from 'components/userEvaluate/Quiz';
import AccountSettings from 'views/options/AccountSettings/AccountSettings';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {

  const login = { path: '/fgf', element: <Login /> }
  const player = { path: '/player', element: <CourseContentPlayer /> }
  const quiz = { path: '/quiz', element: <Quiz /> }
  const accountSettings = { path: ' ', element: <AccountSettings /> }
  return useRoutes([login, player, quiz, accountSettings, ...MainRoutes]);
}

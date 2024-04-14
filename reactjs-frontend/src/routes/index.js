import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import { Login } from 'Login';
import CourseContentPlayer from 'views/content-player/ContentPlayer';
import Quiz from 'components/userEvaluate/Quiz';
import AccountSettings from 'views/options/AccountSettings/AccountSettings';
import LevelQuiz from 'views/content-player/LevelQuiz';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {

  const login = { path: '', element: <Login /> }
  const player = { path: '/player', element: <CourseContentPlayer /> }
  const quiz = { path: '/quiz', element: <Quiz /> }
  const accountSettings = { path: '/accountSettings', element: <AccountSettings /> }
  const levelQuiz = { path: '/lc', element: <LevelQuiz /> }
  return useRoutes([login, player, quiz, accountSettings, levelQuiz, ...MainRoutes]);
}

import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import { Login } from 'Login';
import CourseContentPlayer from 'views/content-player/ContentPlayer';
import Quiz from 'components/userEvaluate/Quiz';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {

  const login = { path: '', element: <Login /> }
  const player = { path: '/player', element: <CourseContentPlayer /> }
  const quiz = { path: '/quiz', element: <Quiz /> }

  return useRoutes([login, player, quiz, ...MainRoutes]);
}

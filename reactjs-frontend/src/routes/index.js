import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import { Login } from 'Login';
import CourseContentPlayer from 'views/content-player/ContentPlayer';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {

  const login = { path: '/login', element: <Login /> }
  const player = { path: '/player', element: <CourseContentPlayer /> }

  return useRoutes([...MainRoutes, login, player]);
}

import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import { Login } from 'Login';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {

  const login = { path: '/login', element: <Login /> }

  return useRoutes([...MainRoutes, login]);
}

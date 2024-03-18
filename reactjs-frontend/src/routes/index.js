import { Route, useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import Login from 'Login';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([...MainRoutes], <Route path="/login" element={<Login />} />);
}

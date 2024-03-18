import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([...MainRoutes]);
}
// import React from 'react';
// import { useRoutes } from 'react-router-dom';

// // Import your AccountSettings component
// import AccountSettings from 'views/options/AccountSettings/AccountSettings';

// // Import other necessary routes from MainRoutes
// import MainRoutes from './MainRoutes';


// export default function ThemeRoutes() {
//   return useRoutes([
//     // Include AccountSettings route with a clear path (e.g., '/account-settings')
//     { path: '/account-settings', element: <AccountSettings /> },

//     // Add other routes from MainRoutes here (assuming they are default exports)
//     ...MainRoutes,
//   ]);
// }

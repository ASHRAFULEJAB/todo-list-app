import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard';
import Login from '../components/registration/Login'
import Register from '../components/registration/Register'
import Main from '../layouts/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
]);
export default router

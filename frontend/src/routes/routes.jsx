import { Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

export const routesLists = [
  {
    path: '/',
    exact: true,
    element: <Home />, // Halaman Home
  },
  {
    path: '/login',
    exact: true,
    element: <Login />, // Halaman login
  },
  {
    path: '/register',
    element: <Register />, // Halaman register
  },
  {
    path: '*',
    element: <Navigate to="/login" />, // Redirect ke halaman login jika rute tidak ditemukan
  },
];

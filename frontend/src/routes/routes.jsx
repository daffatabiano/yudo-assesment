import { Navigate } from 'react-router-dom';
import { Login, Register } from '../pages/auth';
import Home from '../pages/home';

export const routesLists = [
  {
    path: '/',
    element: <Home />, // Halaman Home
  },
  {
    path: '/login',
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

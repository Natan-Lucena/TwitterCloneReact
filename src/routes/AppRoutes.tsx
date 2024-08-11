import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../components/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);
const AppRoutes = () => {
    return <RouterProvider router={router} />;
};
export default AppRoutes;

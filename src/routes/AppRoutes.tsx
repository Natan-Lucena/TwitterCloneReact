import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
    },
]);
const AppRoutes = () => {
    return <RouterProvider router={router} />;
};
export default AppRoutes;

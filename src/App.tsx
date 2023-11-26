import { type FC } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from './Pages/Home';
import Layout from './Component/layout';
import About from './Pages/about';
import LayoutAuth from './Component/layoutAuth';
import RegisterPage from './Pages/register';
import LoginPage from './Pages/login';

const App:FC = () => {
    return <RouterProvider router={
        createBrowserRouter([
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <HomePage />
                    },
                    {
                        path: '/about',
                        element: <About />
                    }
                ]
            },
            {
                path: '/auth',
                element: <LayoutAuth />,
                children: [
                    {
                        path: '/auth/register',
                        element: <RegisterPage />
                    },
                    {
                        path: '/auth/login',
                        element: <LoginPage />
                    }
                ]
            }
        ])
    } /> 
}

export default App;
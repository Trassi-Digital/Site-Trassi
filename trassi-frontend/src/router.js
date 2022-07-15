import React from 'react';
import Home from './page/Home';


const routes = [
    {
        path: '/',
        exact: true,
        element: <Home />
    },
    {
        path: '/outro',
        exact: true,
        element: <h1>page1</h1> 
    }
 
]

export default routes

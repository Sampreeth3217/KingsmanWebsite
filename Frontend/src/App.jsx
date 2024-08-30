import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/login/Login';
import Region from './Components/region/Region';
import Home from './Components/home/Home';
import RootLayout from './RootLayout';
import RoutingError from './RoutingError';
import About from './Components/aboutus/About';
import Map from './Components/map/Map';
import Realtimedata from './Components/realtimedata/Realtimedata'; // Correct import path

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/region',
          element: <Region />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/map',
          element: <Map />,
        },
        {
          path: '/realtimedata',
          element: <Realtimedata />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={browserRouter} />
  );
}

export default App;

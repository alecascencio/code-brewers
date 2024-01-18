import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    exact: true,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
    exact: true,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

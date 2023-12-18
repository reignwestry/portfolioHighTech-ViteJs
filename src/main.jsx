import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home';
import AboutPage from './pages/about'
import GalleryPage from './pages/gallery'
import ContactPage from './pages/contact'
import ResumePage from './pages/resume'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './scss/App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/gallery",
    element: <GalleryPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/resume",
    element: <ResumePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

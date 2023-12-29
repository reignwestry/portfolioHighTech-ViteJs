import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home';
import AboutPage from './pages/about'
import GalleryPage from './pages/gallery'
import ContactPage from './pages/contact'
import ResumePage from './pages/resume'

//Projects
// import SOCsconce from './projects/09-SOC-Scones/index.html';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './scss/App.scss';
const root = ReactDOM.createRoot(document.getElementById('root'))

// const SOCsconceRedirect = () => {
//   window.location.href="./projects/09-SOC-Scones/index.html"
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  // {
  //   path: "/projects/sconce",
  //   element: root.render(<SOCsconceRedirect />)
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './assets/css/output.css'
import Profile from './pages/Profile'
import DetailExperience from './pages/DetailExperience'
import DetailEducation from './pages/DetailEducation'
import Dashboard from './pages/apps/Dashboard'
import NotFound from './pages/NotFound'
import Productive from './pages/apps/productive/Productive'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },{
    path: "/experience",
    element: <DetailExperience/>,
  },{
    path: "/education",
    element: <DetailEducation/>,
  },{
    path: "/dashboard",
    element: <Dashboard/>,
  },{
    path: "/productive",
    element: <Productive/>,
  },{
    path: "/courses",
    element: <NotFound/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

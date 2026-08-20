import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './index.css'
import RootLaout from './RootLaout'
import Home from './components/Home'
import Pages from './components/Pages'
import Add from './components/Add'
import Analytics from './components/Analytics'
import NotFound from './components/notFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLaout />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "add",
        element: <Add />, 
      },
      {
        path: "analytics",
        element: <Analytics />, 
      },
        { path:"*",
      element:<NotFound/>
    }
    ],
    
   
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import App from './App.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },{
        path:"github",
        element:<Github/>
      },{
        path:"user/:userid",
        element:<User/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>

  </StrictMode>,
)

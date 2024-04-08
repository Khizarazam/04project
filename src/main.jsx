import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route path='' element={<Home />}/>
       <Route path='/Blog' element={<Services />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/about' element={<About />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

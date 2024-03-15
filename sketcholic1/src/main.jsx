import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './assets/components/Home/home.jsx'
import About from './assets/components/About/about.jsx'
import Contact from './assets/components/Contacts/Contacts.jsx'
import Github, { githubInfoLoader } from './assets/components/Github/Github.jsx'
import User from './assets/components/User/User.jsx'
import Login from './assets/components/login/login.jsx'
import Signup from './assets/components/Signup/Signup.jsx'
// const router= createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//          path:"",
//          element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"Contacts",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User/>} />
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
       {/* <Route path='login' element={<Login />} />  */}
       {/* <Route path='login' element={<Login/>} /> */}
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {createBrowserRouter,RouterProvider } from "react-router-dom"
import App from "./App"
import "./index.css"
import Home from './pages/Home'
import About from './pages/About'
import Destinations from './pages/Destinations'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import MainLayout from "./layouts/MainLayout"
import ScrollToTop from "react-scroll-to-top";

const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
     {index:true, element:<Home/>},
     {path:"about", element:<About/>},
     {path:"destinations", element:<Destinations/>},
     {path:"blog", element:<Blog/>},
     {path:"contact", element:<Contact/>},
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ScrollToTop smooth  color='white' style={{backgroundColor:'#EF4444', display:'flex', alignItems:'center', justifyContent:'center'}}/>
  </StrictMode>
)

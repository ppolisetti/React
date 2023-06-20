import React from 'react'
import {Routes, Route ,Link} from "react-router-dom";
import Home from './Routercomponents/Home';
import Contact from './Routercomponents/Contact';
import Blog from './Routercomponents/Blog';
import Navbar from "./Routercomponents/Navbar";

function Router() {
  return (
    <>
    <Navbar/>
    
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='blog' element={<Blog/>}/>
    </Routes>
    <nav >
    <Link to='contact'>Contact</Link>
    </nav>
    </>
  )
}

export default Router
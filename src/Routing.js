import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Header from '../src/components/Header'
import About from './pages/About'
import Career from './pages/Career'
import Home from './pages/Home'
import Products from './pages/Products'

const Routing = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/careers' element={<Career />} />
    </Routes>
    </>
  )
}

export default Routing

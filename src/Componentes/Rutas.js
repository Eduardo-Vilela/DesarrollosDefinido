import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from '../Componentes/scrollToTop'
import Home from './Pages/Home/Home'
import Nosotros from './Pages/Nosotros/Nosotros'


function Rutas() {
  return (
    <>
     <HashRouter>
      <ScrollToTop>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Nosotros' element={<Nosotros/>} />
        </Routes>
      </ScrollToTop>
     </HashRouter>
    </>
  )
}

export default Rutas
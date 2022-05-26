import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from '../Componentes/scrollToTop'
import Home from './Pages/Home/Home'
import Nosotros from './Pages/Nosotros/Nosotros'
import Desarrollos from './Pages/Desarrollos/Desarrollos'
import PlanCanje from './Pages/PlanCanje/PlanCanje'


function Rutas() {
  return (
    <>
     <HashRouter>
      <ScrollToTop>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Nosotros' element={<Nosotros/>} />
            <Route path='/Desarrollos' element={<Desarrollos/>} />
            <Route path='/Plancanje' element={<PlanCanje/>} />
        </Routes>
      </ScrollToTop>
     </HashRouter>
    </>
  )
}

export default Rutas
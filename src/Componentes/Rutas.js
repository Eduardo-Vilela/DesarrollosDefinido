import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from '../Componentes/scrollToTop'
import Home from './Pages/Home/Home'


function Rutas() {
  return (
    <>
     <HashRouter>
      <ScrollToTop>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </ScrollToTop>
     </HashRouter>
    </>
  )
}

export default Rutas
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from '../Componentes/scrollToTop'
import Home from './Pages/Home/Home'
import Nosotros from './Pages/Nosotros/Nosotros'
import Desarrollos from './Pages/Desarrollos/Desarrollos'
import PlanCanje from './Pages/PlanCanje/PlanCanje'
import Contacto from './Pages/Contacto/Contacto'
import Formulario1 from './Pages/PlanCanje/Formulario1'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'
import LasVictorias from './Pages/Desarrollos/Lotes/LasVictorias/LasVictorias'
import Eljuncal from './Pages/Desarrollos/Lotes/Eljuncal/Eljuncal'

function Rutas() {
  return (
    <>
     <HashRouter>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
        />
        {/* Same as */}
      <ToastContainer />
      <ScrollToTop>
        <Routes>
            /*COMPONENTES*/ 
            <Route path='/' element={<Home/>} />
            <Route path='/Nosotros' element={<Nosotros/>} />
            <Route path='/Desarrollos' element={<Desarrollos/>} />
            <Route path='/Plancanje' element={<PlanCanje/>} />
            <Route path='/Contacto' element={<Contacto/>} />
            /* DESARROLLOS */
            <Route path='/Lasvictorias' element={<LasVictorias/>} />
            <Route path='/Eljuncal' element={<Eljuncal/>} />
             /* FORMULARIOS*/
            <Route path='/FormularioDesarrollo/Eljuncal' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Lasorianas' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Lacampiña' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Latitud34' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Lasvictorias' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Laescondida' element={<Formulario1/>} />
            /* ENRUTADO DESARROLLOS INTERNO*/
            {/* <Route path='/' element={<Formulario1/>} />
            <Route path='/' element={<Formulario1/>} />
            <Route path='/' element={<Formulario1/>} />
            <Route path='/' element={<Formulario1/>} /> */}
        </Routes>
        <Footer/>
      </ScrollToTop>
     </HashRouter>
    </>
  )
}

export default Rutas
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
import Latitud34 from './Pages/Desarrollos/Lotes/Latitud34/Latitud34'
import Laescondida from './Pages/Desarrollos/Lotes/Laescondida/Laescondida'
import Lacampiña from './Pages/Desarrollos/Lotes/Lacampiña/Lacampiña'
import Lasorianas from './Pages/Desarrollos/Lotes/Lasorianas/Lasorianas'
import Icono from './Icono'

function Rutas() {
  return (
    <>
     <HashRouter data-aos="zoom-in" >
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

            <Route path='/' element={<Home/>} />
            <Route path='/Nosotros' element={<Nosotros/>} />
            <Route path='/Desarrollos' element={<Desarrollos/>} />
            <Route path='/Plancanje' element={<PlanCanje/>} />
            <Route path='/Contacto' element={<Contacto/>} />

            <Route path='/Lasvictorias' element={<LasVictorias/>} />
            <Route path='/Eljuncal' element={<Eljuncal/>} />
            <Route path='/Latitud34' element={<Latitud34/>} />
            <Route path='/Laescondida' element={<Laescondida/>} />
            <Route path='/Lacampina' element={<Lacampiña/>} />
            <Route path='/Lasorianas' element={<Lasorianas/>} />
            {/* <Route path='/Lascatalinas' element={<Lascatalinas/>} /> */}

            <Route path='/FormularioDesarrollo/Eljuncal' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Lasorianas' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Lacampiña' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Latitud34' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Lasvictorias' element={<Formulario1/>} />
            <Route path='/FormularioDesarrollo/Laescondida' element={<Formulario1/>} />


        </Routes>
        <Footer/>
        <Icono/>
      </ScrollToTop>
     </HashRouter>
    </>
  )
}

export default Rutas
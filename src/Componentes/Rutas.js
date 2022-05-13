import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

/*Pagesssssss*/
import Intro from '../Componentes/Pages/Inicio/intro'
// import Icono from './Icono'
import Nosotros from '../Componentes/Pages/Nosotros/Nosotros'
import Desarrollos from '../Componentes/Pages/Desarrollos/Desarrollos'
import Contacto from '../Componentes/Pages/Contacto/Contacto'
import IntroPlan from './Pages/Plancanje/IntroPlan'
import ScrollToTop from './scrollToTop'

/***SUBRUTAS***/
import Eljuncal from '../Componentes/Pages/Desarrollos/Loteos/Eljuncal/Eljuncal'
import Lacampiña from '../Componentes/Pages/Desarrollos/Loteos/LaCampiña/Lacampiña'
import Lasvictorias from '../Componentes/Pages/Desarrollos/Loteos/LasVictorias/Lasvictorias'
import Latitud34 from '../Componentes/Pages/Desarrollos/Loteos/Latitud34/Latitud34'
import Lasorianas from '../Componentes/Pages/Desarrollos/Loteos/Lasorianas/Lasorianas'
import FormularioPlanCanje from './Pages/Plancanje/FormularioPlanCanje'
import Laescondida from './Pages/Desarrollos/Loteos/LaEscondida/Laescondida'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Rutas() {
  return (
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
          
          <Route path='/' element={<Intro/>} />
          <Route path='/Nosotros' element={<Nosotros/>} />
          <Route path='/Desarrollos' element={<Desarrollos/>}/>
          <Route path='/Plancanje' element={<IntroPlan/>}/>
          <Route path='/Contacto' element={<Contacto/>} />

            
          <Route path='/Eljuncal' element={<Eljuncal/>} />
          <Route path='/Lacampina' element={<Lacampiña/>} />
          <Route path='/Lasvictorias' element={<Lasvictorias/>} />
          <Route path='/Latitud34' element={<Latitud34/>} />
          <Route path='/Lasorianas' element={<Lasorianas/>} />
          <Route path='/Laescondida' element={<Laescondida/>} />
          {/* <Route path='/informacionAuto' element={<InformacionAuto/>} /> */}
          {/* <Route path='/informacionUsuario' element={<InformacionUsuario/>} /> */}
          {/* <Route path='/finPlanCanje' element={<FinPlanCanje/>} /> */}
          <Route path='/FormularioPlanCanje' element={<FormularioPlanCanje/>} />
        </Routes>
        </ScrollToTop> 
      </HashRouter>
  )
}

export default Rutas
import React from 'react';


//COMPONENTS
import NavbarHeader from '../../../Componentes/Navbar'
import Inicio from '../Inicio/Inicio';
import Seccion1 from '../Inicio/Seccion1'
import Seccion2 from '../Inicio/Seccion2'
import Seccion3 from '../Inicio/Seccion3'
import Seccion4 from '../Inicio/Seccion4';
import Seccion5 from '../Inicio/Seccion5';
import Seccion6 from '../Inicio/Seccion6';
import Seccion7 from '../Inicio/Seccion7';
import Seccion8 from '../Inicio/Seccion8';
import Seccion9 from '../Inicio/Seccion9';
import Seccion10 from '../Inicio/Seccion10';
import Footer from'../../Footer';
import Icono from '../../Icono'
import ModalInicio from './ModalInicio';

function App() {
  return (
      <>
         <ModalInicio/>     
           <NavbarHeader/>
          <Inicio />
          <Seccion1/>
          <Seccion2/>
          <Seccion3/>
          <Seccion4/>
          <Seccion5/>
          <Seccion6/>
          <Seccion7/>
          <Seccion8/>
          <Seccion9/>
          <Seccion10/>
          <Footer/>
          <Icono/>
      </>
 
  );
}

export default App;
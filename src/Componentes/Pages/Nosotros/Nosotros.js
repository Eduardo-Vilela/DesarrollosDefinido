import React from 'react'
import 'rsuite/styles/index.less';
import Navbar2 from '../../../Componentes/Navbar2';
import Seccion1 from '../Nosotros/Seccion1';
import Seccion2 from '../Nosotros/Seccion2';
import Seccion3 from '../Nosotros/Seccion3';
import Seccion4 from '../Nosotros/Seccion4';
import Seccion5 from '../Nosotros/Seccion5';
import Seccion6 from '../Nosotros/Seccion6';
import Seccion9 from '../Inicio/Seccion9';
import Seccion10 from '../Inicio/Seccion10';
import Footer from '../../Footer';

function Nosotros() {
  return (
    <>
      <Navbar2/>
     <Seccion1/>
     <Seccion2/>
     <Seccion3/>
     <Seccion4/>
     <Seccion5/>
     <Seccion6/>
     <Seccion9/>
     <Seccion10/>
     <Footer/>
    </>
  )
}

export default Nosotros
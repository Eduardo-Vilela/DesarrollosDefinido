import React from 'react'
import { Box3,NavItems,ContenedorSubNavbar,OcultarBorderIframe} from '../LasVictorias/LasVictoriasElements'
import {Navbar} from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';

function Seccion3Lasorianas() {
  return (
    <>
    <Box3>
      <OcultarBorderIframe>
      <div style={{width: '54%',borderBottom:'1px solid #E0E0E0',borderTop:'1px solid #E0E0E0'}}>
          {/* ASDSDsa */}
        </div>
        <ContenedorSubNavbar style={{width: '50%',borderBottom:'1px solid #E0E0E0 ',borderTop:'1px solid #E0E0E0'}}>
          <Navbar  as="ul">
            <NavItems >
            <HashLink style={{color: 'grey', fontWeight: '500'}}  to="#1-ubicacion">1. Ubicación</HashLink>
            </NavItems>
            <NavItems >
              <HashLink style={{color: 'grey', fontWeight: '500'}}  to="#2-proyecto">2. Proyecto</HashLink>
            </NavItems>
            <NavItems >
              <HashLink style={{color: 'grey', fontWeight: '500'}}  to="#3-servicios">3. Servicios</HashLink>
            </NavItems>
            <NavItems >
              <HashLink style={{color: 'grey', fontWeight: '500'}}  to="#4-formadepago">4. Forma de pago</HashLink>
            </NavItems>
          </Navbar>
        </ContenedorSubNavbar>
      </OcultarBorderIframe>
     </Box3>
    </>
  )
}

export default Seccion3Lasorianas
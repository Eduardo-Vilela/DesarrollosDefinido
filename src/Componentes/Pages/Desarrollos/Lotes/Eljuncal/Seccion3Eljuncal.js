import React from 'react'
import { Box3,NavItems,ContenedorSubNavbar,OcultarBorderIframe}from '../LasVictorias/LasVictoriasElements'
import {Navbar} from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';

function Seccion3Eljuncal() {
  return (
    <>
     <Box3>
      <OcultarBorderIframe>
      <div style={{width: '50%',borderBottom:'1px solid #E0E0E0',borderTop:'1px solid #E0E0E0'}}>
          {/* ASDSDsa */}
        </div>
        <ContenedorSubNavbar style={{width: '52%',borderBottom:'1px solid #E0E0E0 ',borderTop:'1px solid #E0E0E0'}}>
          <Navbar className='navbarDesarrollos box3' as="ul" style={{paddingBottom: '0px !important'}} >
            <NavItems >
            <HashLink style={{color: 'grey', fontWeight: '500', textDecoration: 'none'}}  to="#1-ubicacion">1. Ubicación</HashLink>
            </NavItems>
            <NavItems >
              <HashLink style={{color: 'grey', fontWeight: '500', textDecoration: 'none'}}  to="#2-proyecto">2. Proyecto</HashLink>
            </NavItems>
            <NavItems >
              <HashLink style={{color: 'grey', fontWeight: '500', textDecoration: 'none'}}  to="#3-servicios">3. Servicios</HashLink>
            </NavItems>
            <NavItems >
              <HashLink style={{color: 'grey', fontWeight: '500', textDecoration: 'none'}}  to="#4-formadepago">4. Forma de pago</HashLink>
            </NavItems>
          </Navbar>
        </ContenedorSubNavbar>
      </OcultarBorderIframe>
     </Box3>
   </>
  )
}

export default Seccion3Eljuncal
import React from 'react'
import { Box3,} from '../LasVictorias/LasVictoriasElements'
import {Nav} from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';

function Seccion3Latitud34() {
  return (
    <>
     <Box3>
     <div style={{width: '50%'}}>
        {/* ASDSDsa */}
      </div>
      <div style={{width: '50%'}}>
        <Nav  as="ul">
          <Nav.Item as="li">
           <HashLink  to="#1-ubicacion">1. Ubicación</HashLink>
          </Nav.Item>
          <Nav.Item >
            <HashLink  to="#2-proyecto">2. Proyecto</HashLink>
          </Nav.Item>
          <Nav.Item >
            <HashLink  to="#3-servicios">3. Servicios</HashLink>
          </Nav.Item>
          <Nav.Item >
            <HashLink  to="#4-formadepago">4. Forma de pago</HashLink>
          </Nav.Item>
        </Nav>
      </div>
     </Box3>
    </>
  )
}

export default Seccion3Latitud34
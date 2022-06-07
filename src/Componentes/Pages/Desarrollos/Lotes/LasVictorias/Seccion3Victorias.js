import React from 'react'
import { Box3,} from './LasVictoriasElements'
import {Nav} from 'react-bootstrap'

function Seccion3Victorias() {
  return (
    <>
     <Box3>
     <div style={{width: '50%'}}>
        {/* ASDSDsa */}
      </div>
      <div style={{width: '50%'}}>
        <Nav  defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link  href="">1. Ubicación</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  eventKey="link-1">2. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  eventKey="link-2">3. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  eventKey="link-2">4. Forma de pago</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
     </Box3>
    </>
  )
}

export default Seccion3Victorias
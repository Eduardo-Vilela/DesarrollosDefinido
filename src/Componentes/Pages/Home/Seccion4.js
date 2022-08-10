import React from 'react'
import { BoxIntermedio } from './Seccion3Elements'
import {
BoxPrincipal,
Box1,
Box2,
Titulo,
LogosRedes,
BordesRedondos,
BoxContent,
}
from './Seccion4Elements'
import cargarArchivos from './Files'

function Seccion3() {
  return (
    <>
     <BoxPrincipal>
      <BoxContent>
        <Box1>
          <Titulo>¡Estamos para asesorarte!</Titulo>
        </Box1>
        <Box2 >
          <a target="_blank" className='BordesRedondos' href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><LogosRedes className='seccion3-redes' id='iconface' alt='facebook' src=''/></a>
          <a target="_blank" className='BordesRedondos' href='https://www.instagram.com/desarrollos.delsud/' ><LogosRedes className='seccion3-redes' id='iconinsta' alt='instagram' src=''/></a>
          <a target="_blank" className='BordesRedondos' href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' ><LogosRedes id='whatsapp'className='seccion3-redes' alt='whatsapp' src=''/></a>
        </Box2>
       </BoxContent>
     </BoxPrincipal>
    </>
  )
}

export default Seccion3
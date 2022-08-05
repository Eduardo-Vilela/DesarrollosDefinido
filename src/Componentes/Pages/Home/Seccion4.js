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


function Seccion3() {
  return (
    <>
     <BoxPrincipal>
      <BoxContent>
        <Box1>
          <Titulo>¡Estamos para asesorarte!</Titulo>
        </Box1>
        <Box2 >
          <a target="_blank" className='BordesRedondos' href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><LogosRedes className='seccion3-redes' alt='facebook' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658166853/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/face_zhvnbt.webp'/></a>
          <a target="_blank" className='BordesRedondos' href='https://www.instagram.com/desarrollos.delsud/' ><LogosRedes className='seccion3-redes' alt='instagram' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658166853/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/insta_wlh145.webp'/></a>
          <a target="_blank" className='BordesRedondos' href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' ><LogosRedes className='seccion3-redes' alt='whatsapp' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658166898/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/wsp_gyatf7.webp'/></a>
        </Box2>
       </BoxContent>
     </BoxPrincipal>
    </>
  )
}

export default Seccion3
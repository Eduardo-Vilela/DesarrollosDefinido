import React from 'react'
import{
BoxHomeJuncal,BoxTitulo,LetrasLasVictorias,BoxTitulo2,BoxTituloJuncal
} from '../LasVictorias/LasVictoriasElements'


function LasVictorias() {
  return (
    <>
     <BoxHomeJuncal>
       <BoxTitulo>
        <BoxTituloJuncal >
          <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715487/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/eljuncalLetras_xlttzf_kp4bnu.webp'/>
        </BoxTituloJuncal>
       </BoxTitulo>
     </BoxHomeJuncal>
    </>
  )
}

export default LasVictorias
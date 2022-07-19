import React from 'react'
import{
BoxHomeVictorias,BoxTitulo,BoxTitulo2,LetrasLasVictorias,BoxTituloJuncal
} from './LasVictoriasElements'


function LasVictorias() {
  return (
    <>
     <BoxHomeVictorias>
       <BoxTitulo>
        <BoxTituloJuncal>
          <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715502/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_184_j7j7rc_fkyrds.webp'/>
        </BoxTituloJuncal>
       </BoxTitulo>
     </BoxHomeVictorias>
    </>
  )
}

export default LasVictorias
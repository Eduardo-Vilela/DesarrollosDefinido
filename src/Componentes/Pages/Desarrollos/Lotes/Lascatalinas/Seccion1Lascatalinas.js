import React from 'react'
import{
BoxHomeVictorias,BoxTitulo,LetrasLasVictorias,BoxTitulo2
} from './LasVictoriasElements'


function LasVictorias() {
  return (
    <>
     <BoxHomeVictorias data-aos="fade-down" data-aos-duration="2000">
       <BoxTitulo>
        <BoxTituloJuncal>
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src=''/>
        </BoxTituloJuncal>
       </BoxTitulo>
     </BoxHomeVictorias>
    </>
  )
}

export default LasVictorias
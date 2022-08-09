import React from 'react'
import{
BoxHomeJuncal,BoxTitulo,LetrasLasVictorias,BoxTitulo2,BoxTituloJuncal
} from '../LasVictorias/LasVictoriasElements'
import cargarArchivos from './Files'
function LasVictorias() {
  cargarArchivos();
  return (
    <>
     <BoxHomeJuncal data-aos="fade-down" data-aos-duration="2000">
       <BoxTitulo>
        <BoxTituloJuncal >
          <LetrasLasVictorias id='imagenInicioLasVictorias' className='imagenInicioLasVictorias' alt='letras-' src=''/>
        </BoxTituloJuncal>
       </BoxTitulo>
     </BoxHomeJuncal>
    </>
  )
}

export default LasVictorias
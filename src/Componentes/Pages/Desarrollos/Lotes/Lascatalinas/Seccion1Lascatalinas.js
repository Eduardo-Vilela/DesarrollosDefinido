import React from 'react'
import{
BoxHomeVictorias,BoxTitulo,LetrasLasVictorias,BoxTitulo2
} from './LasVictoriasElements'


function LasVictorias() {
  return (
    <>
     <BoxHomeVictorias>
       <BoxTitulo>
       <div style={{width:'60%'}}>
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src=''/>
         </div>
       </BoxTitulo>
       <BoxTitulo2>

       </BoxTitulo2>
     </BoxHomeVictorias>
    </>
  )
}

export default LasVictorias
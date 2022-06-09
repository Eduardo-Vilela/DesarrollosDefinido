import React from 'react'
import{
BoxHomeVictorias,BoxTitulo,BoxTitulo2,LetrasLasVictorias
} from './LasVictoriasElements'


function LasVictorias() {
  return (
    <>
     <BoxHomeVictorias>
       <BoxTitulo>
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649626460/DESARROLLOSGRUPODELSUD/Group_184_j7j7rc.svg'/>
       </BoxTitulo>
       <BoxTitulo2>

       </BoxTitulo2>
     </BoxHomeVictorias>
    </>
  )
}

export default LasVictorias
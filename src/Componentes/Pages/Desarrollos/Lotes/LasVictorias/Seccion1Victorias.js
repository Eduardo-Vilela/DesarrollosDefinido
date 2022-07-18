import React from 'react'
import{
BoxHomeVictorias,BoxTitulo,BoxTitulo2,LetrasLasVictorias
} from './LasVictoriasElements'


function LasVictorias() {
  return (
    <>
     <BoxHomeVictorias>
       <BoxTitulo>
        <div style={{width:'60%'}}>
        <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715502/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_184_j7j7rc_fkyrds.webp'/>
        </div>
       </BoxTitulo>
       <BoxTitulo2>

       </BoxTitulo2>
     </BoxHomeVictorias>
    </>
  )
}

export default LasVictorias
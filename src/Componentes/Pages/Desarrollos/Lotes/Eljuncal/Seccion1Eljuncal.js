import React from 'react'
import{
BoxHomeJuncal,BoxTitulo,LetrasLasVictorias,BoxTitulo2
} from '../LasVictorias/LasVictoriasElements'


function LasVictorias() {
  return (
    <>
     <BoxHomeJuncal>
       <BoxTitulo>
       <div style={{width:'60%'}}>
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715487/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/eljuncalLetras_xlttzf_kp4bnu.webp'/>
       </div>
       </BoxTitulo>
       <BoxTitulo2>

       </BoxTitulo2>
     </BoxHomeJuncal>
    </>
  )
}

export default LasVictorias
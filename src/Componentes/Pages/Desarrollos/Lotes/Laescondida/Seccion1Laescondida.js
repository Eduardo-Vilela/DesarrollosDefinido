import React from 'react'
import{
BoxHomeLaescondida,BoxTitulo,LetrasLasVictorias,BoxTitulo2,BoxTituloJuncal
} from '../LasVictorias/LasVictoriasElements'


function Seccion1Laescondida() {
  return (
    <>
     <BoxHomeLaescondida data-aos="fade-down" data-aos-duration="2000">
       <BoxTitulo>
       <BoxTituloJuncal>
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715434/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/Logo-La-Escondida-fondo-transparente-con-sombra-17-1024x1024_uj96z1_n7zhlv.webp'/>
       </BoxTituloJuncal>  
       </BoxTitulo>
     </BoxHomeLaescondida>
    </>
  )
}

export default Seccion1Laescondida
import React from 'react'
import{
BoxHomeLasorianas,BoxTitulo,LetrasLasVictorias,BoxTitulo2
} from '../LasVictorias/LasVictoriasElements'


function Seccion1Lasorianas() {
  return (
    <>
     <BoxHomeLasorianas>
       <BoxTitulo>
       <div style={{width:'60%'}}>
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715451/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/melchore-romero-las-orianas_oxmzw1_yis4w6.webp'/>
       </div>  
       </BoxTitulo>
       <BoxTitulo2>

       </BoxTitulo2>
     </BoxHomeLasorianas>
    </>
  )
}

export default Seccion1Lasorianas
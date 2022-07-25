import React from 'react'
import{
BoxHomeLasorianas,BoxTitulo,LetrasLasVictorias,BoxTitulo2,BoxTituloJuncal,BoxVideoOrianas
} from '../LasVictorias/LasVictoriasElements'


function Seccion1Lasorianas() {
  return (
    <>
     <BoxHomeLasorianas ddata-aos="fade-down" data-aos-duration="2000">
       <BoxTitulo>
       <BoxTituloJuncal>
       <BoxVideoOrianas data-aos="fade-down" data-aos-duration="2000"  loop autoPlay muted  className='videoInicio'>
            <source
                src="https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1658771371/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/Las_Orianas_-_web_1_xez9sn.mp4"
                type="video/mp4"
            />
        </BoxVideoOrianas>
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658781051/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/melchore-romero-las-orianas_fyusq7.svg'/>
       </BoxTituloJuncal>  
       </BoxTitulo>
     </BoxHomeLasorianas>
    </>
  )
}

export default Seccion1Lasorianas
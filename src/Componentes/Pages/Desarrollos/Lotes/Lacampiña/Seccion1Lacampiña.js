import React from 'react'
import{
  BoxHomeLacampiña,BoxTitulo,LetrasLasVictorias,BoxTitulo2,BoxTituloJuncal,BoxVideoLaCampiña,
} from '../LasVictorias/LasVictoriasElements'


function Seccion1Lacampiña() {
  return (
    <>
     <BoxHomeLacampiña data-aos="fade-down" data-aos-duration="2000">
       <BoxTitulo>
       <BoxTituloJuncal>
       {/* <BoxVideoLaCampiña data-aos="fade-down" data-aos-duration="2000"  loop autoPlay muted  className='videoInicio'>
            <source
                src="https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1658770925/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Banner_-_Home_-_Campi%C3%B1a_y_Latitud_yp89nc.mp4"
                type="video/mp4"
            />
        </BoxVideoLaCampiña> */}
         <LetrasLasVictorias className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715436/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a_hdxe5y_qzvlhe.webp'/>
      </BoxTituloJuncal>
       </BoxTitulo>
     </BoxHomeLacampiña>
    </>
  )
}

export default Seccion1Lacampiña
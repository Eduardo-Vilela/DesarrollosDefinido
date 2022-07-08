import React from 'react'

/* style */
import{ 
BoxHome,
BoxVideo,
BoxTitulo,
TituloPrincipal,
Container,
SubtituloPrincipal,
} from '../Home/Seccion1Elements'


function Seccion1() {
  return (
    <>
     <Container>   
      <BoxHome>
        <BoxVideo  loop autoPlay muted  className='videoInicio'>
            <source
                src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649776409/DESARROLLOSGRUPODELSUD/Portada_Desarrollos_yecj66.mp4"
                type="video/mp4"
            />
        </BoxVideo>
        <BoxTitulo>
            <TituloPrincipal>  Tenemos el terreno ideal  para vos y tu familia  </TituloPrincipal>
            <SubtituloPrincipal>Contamos con una amplia variedad de terrenos para que <br/> encuentres el que mejor se adapte a tus necesidades.</SubtituloPrincipal>
        </BoxTitulo>
      </BoxHome>
     </Container>
    </>
  )
}

export default Seccion1
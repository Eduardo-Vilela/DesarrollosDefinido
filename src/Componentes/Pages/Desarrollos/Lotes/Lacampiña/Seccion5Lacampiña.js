import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,BoxMaps1Lacampiña, 
    SubBoxUbicacion,
    Numero2,TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    BoxTarjeton,
    NumerosAzules,
    TextoGris,
    Imagen2,
} from '../LasVictorias/LasVictoriasElements'

function Seccion5Lacampiña() {
  return (
    <>
     <Box2 id='2-proyecto'>
         <SubBox2>
             <BoxMaps1Lacampiña>
              {/* <Imagen2 alt='fotoPlano' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649432360/DESARROLLOSGRUPODELSUD/La_Campi%C3%B1a_unmfp3.svg'  ></Imagen2> */}
             </BoxMaps1Lacampiña>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div >
                    <Numero2 >2.</Numero2>
                  </div>  
                  <div>
                    <TituloDerecha>Proyecto</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    La Campiña cuenta con 168 desarrollos de variadas<br/>
                     medidas, que llegan hasta los 450 m², conectados <br/>
                     entre sí por calles internas.<br/>
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                  </div>
                  <BoxTarjeton>
                   <NumerosAzules>168</NumerosAzules>
                   <TextoGris>Unidades</TextoGris>
                   <TextoGris>/</TextoGris>
                   <TextoGris>desde</TextoGris>
                   <NumerosAzules>280m²</NumerosAzules>
                  </BoxTarjeton>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion5Lacampiña
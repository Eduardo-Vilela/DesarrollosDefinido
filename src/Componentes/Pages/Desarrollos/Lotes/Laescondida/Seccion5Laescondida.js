import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,BoxMaps1Laescondida, 
    SubBoxUbicacion,
    Numero2,TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    BoxTarjeton,
    NumerosAzules,
    TextoGris,
    Imagen2,
} from '../LasVictorias/LasVictoriasElements'

function Seccion5Laescondida() {
  return (
    <>
     <Box2 id='2-proyecto'>
         <SubBox2>
             <BoxMaps1Laescondida>
              {/* <Imagen2 alt='fotoPlano' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/444-948x1024_wefged.png'  ></Imagen2> */}
             </BoxMaps1Laescondida>
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
                    La Escondida ubicado sobre la calle 84 entre <br/>
                    las calles 161 y 167, cuenta con un rápido <br/>
                    acceso desde Av. 66 y Av. 167 o Av. 161.<br/>
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                  </div>
                  <BoxTarjeton>
                   <NumerosAzules>148</NumerosAzules>
                   <TextoGris>Unidades</TextoGris>
                   <TextoGris>/</TextoGris>
                   <TextoGris>desde</TextoGris>
                   <NumerosAzules>251m²</NumerosAzules>
                  </BoxTarjeton>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion5Laescondida
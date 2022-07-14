import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,BoxMaps, 
    SubBoxUbicacion,
    Numero2,TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    BoxTarjeton,
    NumerosAzules,
    TextoGris,
    Imagen2,
} from '../LasVictorias/LasVictoriasElements'

function Seccion5Lasorianas() {
  return (
    <>
     <Box2 id='2-proyecto'>
         <SubBox2>
             <BoxMaps>
              <Imagen2 alt='fotoPlano' width='100%' height='100%' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715453/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/planoOrianas-1-scaled_ricuel_zngmwj.webp'  ></Imagen2>
             </BoxMaps>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div >
                    <Numero2>2.</Numero2>
                  </div>  
                  <div>
                    <TituloDerecha>Proyecto</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    El Juncal cuenta con 437 terrenos de variadas medidas, <br/>
                    conectados entre sí por calles internas, convirtiéndolo<br/>
                     en el barrio ideal para llevar a cabo tu rutina diaria. <br/>
                     Es una zona en constante evolución y desarrollo.<br/>
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                  </div>
                  <BoxTarjeton>
                   <NumerosAzules>437</NumerosAzules>
                   <TextoGris>Unidades</TextoGris>
                   <TextoGris>/</TextoGris>
                   <TextoGris>desde</TextoGris>
                   <NumerosAzules>222m²</NumerosAzules>
                  </BoxTarjeton>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion5Lasorianas
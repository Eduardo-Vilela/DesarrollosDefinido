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

function Seccion5Latitud34() {
  return (
    <>
     <Box2>
         <SubBox2>
             <BoxMaps>
              <Imagen2 alt='fotoPlano' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649627419/DESARROLLOSGRUPODELSUD/Las_Victorias_landing-05_1_dpjkk9.jpg'  ></Imagen2>
             </BoxMaps>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div >
                    <Numero2 id='#2-proyecto'>2.</Numero2>
                  </div>  
                  <div>
                    <TituloDerecha>Proyecto</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                        Latitud 34° cuenta con 112 terrenos de variadas medidas, <br/>
                        que llegan hasta los 361 m² convirtiéndolo en el barrio <br/>
                        perfecto para llevar una vida en tranquilidad. <br/>
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                  </div>
                  <BoxTarjeton>
                   <NumerosAzules>122</NumerosAzules>
                   <TextoGris>Unidades</TextoGris>
                   <TextoGris>/</TextoGris>
                   <TextoGris>desde</TextoGris>
                   <NumerosAzules>300m²</NumerosAzules>
                  </BoxTarjeton>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion5Latitud34
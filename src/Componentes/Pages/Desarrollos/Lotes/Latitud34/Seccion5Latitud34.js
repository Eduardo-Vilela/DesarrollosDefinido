import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,BoxMaps1Latitud, 
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
     <Box2 id='2-proyecto'>
         <SubBox2>
             <BoxMaps1Latitud>
             <Imagen2 alt='fotoFormadepago' width='100%' height='100%' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715438/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Latitud_pup3rf_rfxez1.webp'  ></Imagen2>
             </BoxMaps1Latitud>
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
                        Latitud 34° cuenta con 112 terrenos
                        de variadas medidas,que llegan hasta
                        los 361 m² convirtiéndolo en el barrio
                        perfecto para llevar
                        una vida en tranquilidad.
                    </ParrafoDerecha>
                  </div>
                  <BoxTarjeton>
                   <NumerosAzules>122</NumerosAzules>
                   <TextoGris>unidades</TextoGris>
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
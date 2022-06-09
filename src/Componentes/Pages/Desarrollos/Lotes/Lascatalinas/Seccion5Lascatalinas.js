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
} from './LasVictoriasElements'

function Seccion5Victorias() {
  return (
    <>
     <Box2 id='2-proyecto'>
         <SubBox2>
             <BoxMaps>
              <Imagen2 alt='fotoPlano' width='100%' height='100%' src=''  ></Imagen2>
             </BoxMaps>
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
                    Las Victorias cuenta con 72 terrenos<br/> 
                    de 251m², ofreciendote un lugar amplio <br/> 
                    y verde para que cambies tu estilo de vida.<br/> 
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                  </div>
                  <BoxTarjeton>
                   <NumerosAzules>72</NumerosAzules>
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

export default Seccion5Victorias
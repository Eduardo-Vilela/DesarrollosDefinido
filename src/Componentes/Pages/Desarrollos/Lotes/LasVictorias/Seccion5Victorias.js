import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,BoxMaps1Victorias, 
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
     <Box2  id='2-proyecto'>
         <SubBox2>
             <BoxMaps1Victorias>
              <Imagen2 alt='fotoPlano' width='100%' height='100%' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715437/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Las_Victorias_landing-05_1_dpjkk9_ia6okn.webp'  ></Imagen2>
             </BoxMaps1Victorias>
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
                    Las Victorias cuenta con 72 terrenos
                    de 251m², ofreciendote un lugar amplio
                    y verde para que cambies tu estilo de vida.
                    </ParrafoDerecha>
                  </div>
                  <BoxTarjeton>
                   <NumerosAzules>72</NumerosAzules>
                   <TextoGris>unidades</TextoGris>
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
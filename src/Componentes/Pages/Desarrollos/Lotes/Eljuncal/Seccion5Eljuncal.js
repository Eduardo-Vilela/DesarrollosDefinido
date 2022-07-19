import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,BoxMaps1Eljuncal, 
    SubBoxUbicacion,
    Numero2,TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    BoxTarjeton,
    NumerosAzules,
    TextoGris,
    Imagen2,
    ButtonArmaTuPago,
} from '../LasVictorias/LasVictoriasElements'

function Seccion5Eljuncal() {
  return (
    <>
     <Box2 id='2-proyecto'>
         <SubBox2>
             <BoxMaps1Eljuncal>
              {/* <Imagen2 alt='fotoPlano' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649076431/DESARROLLOSGRUPODELSUD/Juncal_gtamen.jpg'  ></Imagen2> */}
             </BoxMaps1Eljuncal>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div >
                    <Numero2 >2.</Numero2>
                  </div>  
                  <div>
                    <TituloDerecha>Proyecto</TituloDerecha>
                  </div> 
                  <div style={{width:'70%'}}>
                    <ParrafoDerecha>
                    El Juncal cuenta con 437 terrenos de variadas medidas, 
                    conectados entre sí por calles internas, convirtiéndolo
                     en el barrio ideal para llevar a cabo tu rutina diaria. 
                     Es una zona en constante evolución y desarrollo.
                    </ParrafoDerecha>
                  </div>
                  
                  <BoxTarjeton >
                   <NumerosAzules>437</NumerosAzules>
                   <TextoGris>unidades</TextoGris>
                   <TextoGris>/</TextoGris>
                   <TextoGris>desde</TextoGris>
                   <NumerosAzules>222m²</NumerosAzules>
                  </BoxTarjeton>
                  {/* <ButtonArmaTuPago href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!">Arma tu plan de pagos  → </ButtonArmaTuPago> */}
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion5Eljuncal
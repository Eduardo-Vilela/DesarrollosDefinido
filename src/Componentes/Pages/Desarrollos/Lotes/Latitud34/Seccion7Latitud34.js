import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps3Latitud, 
    SubBoxUbicacion,
    Numero4,
    TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    ItemListaDerecha,
    Imagen2,
    ContenedorLista,
    ItemListaDerecha3,
    ButtonArmaTuPago,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion7Latitud34() {
  return (
    <>
     <Box2 id='4-formadepago'>
         <SubBox2>
             <BoxMaps3Latitud>
             {/* <Imagen2 alt='fotoFormadepago' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654704292/DESARROLLOSGRUPODELSUD/businessman-handshaking-businesswoman-showing-respect-closeup-view-of-hands-shaking-1_yteozo.jpg'  ></Imagen2> */}
             </BoxMaps3Latitud>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero4 >4.</Numero4>
                  </div>  
                  <div>
                    <TituloDerecha>Forma de pago</TituloDerecha>
                  </div> 
                  <div style={{width:'60%'}}>
                    <ParrafoDerecha>
                    Contamos con la posibilidad de ofrecer 
                    una financiación propia, bajo requisitos  
                    mínimos y con planes realmente a medida. 
                    </ParrafoDerecha>
                  </div>

                  <div style={{paddingTop:'80px'}}>
                  <ButtonArmaTuPago href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!">Arma tu plan de pagos  → </ButtonArmaTuPago>
                  </div>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion7Latitud34
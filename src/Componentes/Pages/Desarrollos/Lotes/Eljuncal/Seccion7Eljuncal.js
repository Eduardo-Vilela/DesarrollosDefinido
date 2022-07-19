import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps3Eljuncal, 
    SubBoxUbicacion,
    Numero4,
    TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    ItemListaDerecha,
    Imagen2,
    ItemListaDerecha3,
    ButtonArmaTuPago,
    ContenedorLista,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion7Eljuncal() {
  return (
    <>
     <Box2 id='4-formadepago'>
         <SubBox2>
             <BoxMaps3Eljuncal>
             {/* <Imagen2 alt='fotoFormadepago' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649075284/DESARROLLOSGRUPODELSUD/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng.jpg'  ></Imagen2> */}
             </BoxMaps3Eljuncal>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero4 >4.</Numero4>
                  </div>  
                  <div>
                    <TituloDerecha>Forma de pago</TituloDerecha>
                  </div> 
                  <div style={{width:'70%'}}>
                    <ParrafoDerecha>
                    Contamos con la posibilidad de ofrecer 
                    una financiación propia, bajo requisitos  
                    mínimos y con planes realmente a medida. 
                    </ParrafoDerecha>
                  </div>
                  <div>
                  <ButtonArmaTuPago href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!">Arma tu plan de pagos</ButtonArmaTuPago>
                  </div>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion7Eljuncal
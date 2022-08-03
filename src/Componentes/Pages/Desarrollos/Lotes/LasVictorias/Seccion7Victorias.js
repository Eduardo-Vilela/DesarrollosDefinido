import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps3Victorias, 
    SubBoxUbicacion,
    Numero4,
    TituloDerecha ,
    ParrafoDerecha,
Imagen2,
    ButtonArmaTuPago,

}  from './LasVictoriasElements'

function Seccion7Victorias() {
  return (
    <>
     <Box2 id='4-formadepago'>
         <SubBox2>
             <BoxMaps3Victorias>
             <Imagen2 alt='fotoFormadepago' width='100%' height='100%' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715448/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng_ck6w5r.webp'  ></Imagen2>
             </BoxMaps3Victorias>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero4 >4.</Numero4>
                  </div>  
                  <div>
                    <TituloDerecha>Forma de pago</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    Contamos con la posibilidad de ofrecer
                    una financiación propia, bajo requisitos 
                    mínimos y con planes realmente a medida. 
                    </ParrafoDerecha>
                  </div>

                  <div>
                    <ButtonArmaTuPago to='/dds' href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!">Arma tu plan de pagos</ButtonArmaTuPago>
                  </div>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion7Victorias
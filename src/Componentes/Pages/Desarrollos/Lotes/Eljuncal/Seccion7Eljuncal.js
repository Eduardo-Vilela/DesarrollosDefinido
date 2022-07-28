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
             <Imagen2 alt='fotoFormadepago' width='100%' height='100%' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715448/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_2_1_cle5ng_ck6w5r.webp'  ></Imagen2>
             </BoxMaps3Eljuncal>
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
                  <ButtonArmaTuPago to='/dds'  target="_blank" >Arma tu plan de pagos</ButtonArmaTuPago>
                  </div>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion7Eljuncal
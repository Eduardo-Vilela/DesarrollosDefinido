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
import cargarArchivos from './Files'

function Seccion7Eljuncal() {
  cargarArchivos()
  return (
    <>
     <Box2 id='4-formadepago'>
         <SubBox2>
             <BoxMaps3Eljuncal>
             <Imagen2 id='fotoFormadepago'alt='fotoFormadepago' width='100%' height='100%' src=''  ></Imagen2>
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
                  <ButtonArmaTuPago to='/dds' >Arma tu plan de pagos</ButtonArmaTuPago>
                  </div>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion7Eljuncal
import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps3Lacampiña, 
    SubBoxUbicacion,
    Numero4,
    TituloDerecha ,
    ParrafoDerecha,
    Imagen2,
    ItemListaDerecha3,
    ButtonArmaTuPago,
    ContenedorLista,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion7Lacampiña() {
  return (
    <>
     <Box2 id='4-formadepago'>
         <SubBox2>
             <BoxMaps3Lacampiña>
             <Imagen2 alt='fotoFormadepago' width='100%' height='100%' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715477/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/business-men-sitting-at-the-lawyers-s-desk-people-signing-important-documents_1_tzem1u_bquphb.webp'  ></Imagen2>
             </BoxMaps3Lacampiña>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero4>4.</Numero4>
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
                  {/* <ContenedorLista>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3 style={{border:'0',margin:'0'}}><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/></span>Accedé desde un 50% de anticipo</ItemListaDerecha3>
                        <ItemListaDerecha3 style={{border:'0',margin:'0'}}><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/></span>El resto financialo hasta en 60 cuotas fijas</ItemListaDerecha3>
                    </ul>
                  </ContenedorLista> */}
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

export default Seccion7Lacampiña
import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps, 
    SubBoxUbicacion,
    Numero4,
    TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    ItemListaDerecha,
    Imagen2,
    ItemListaDerecha3,
    ButtonArmaTuPago,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion7Latitud34() {
  return (
    <>
     <Box2>
         <SubBox2>
             <BoxMaps>
             <Imagen2 alt='fotoFormadepago' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654704292/DESARROLLOSGRUPODELSUD/businessman-handshaking-businesswoman-showing-respect-closeup-view-of-hands-shaking-1_yteozo.jpg'  ></Imagen2>
             </BoxMaps>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero4 id='#4-formadepago'>4.</Numero4>
                  </div>  
                  <div>
                    <TituloDerecha>Forma de pago</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    Contamos con la posibilidad de ofrecer<br/> 
                    una financiación propia, bajo requisitos <br/> 
                    mínimos y con planes realmente a medida.<br/> 
                    </ParrafoDerecha>
                  </div>
                  <div style={{width:'75%'}}>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/></span>Accedé desde un 50% de anticipo</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/></span>El resto financialo hasta en 60 cuotas fijas</ItemListaDerecha3>
                    </ul>
                  </div>
                  <div>
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
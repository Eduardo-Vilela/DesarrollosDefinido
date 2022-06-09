import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps2Laescondida, 
    SubBoxUbicacion,
    Numero3,
    TituloDerecha ,
    ParrafoDerecha,
    Imagen2,
    ContenedorLista,
    ItemListaDerecha3,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion6Laescondida() {
  return (
    <>
     <Box2  id='3-servicios'>
         <SubBox2>
             <BoxMaps2Laescondida>
             {/* <Imagen2 alt='fotoCamion' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg'  ></Imagen2> */}
             </BoxMaps2Laescondida>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero3>3.</Numero3>
                  </div>  
                  <div>
                    <TituloDerecha>Servicios</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    La Escondida cuenta con 148 terrenos de <br/>
                    variadas medidas, que llegan hasta los 609 m2. <br/>
                    Dándote la posibilidad de elegir tu lote ideal.<br/>
                    </ParrafoDerecha>
                  </div>
                   <ContenedorLista>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/></span>Electricidad aérea</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649629353/DESARROLLOSGRUPODELSUD/Vector_lfysdy.svg'/></span>Tranquera de ingreso y egreso</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649435466/DESARROLLOSGRUPODELSUD/Vector_g9k2zu.jpg'/></span>Cerco perimetral de 5 hilos</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/></span>Calle de tosca y calcáreo</ItemListaDerecha3>
                    </ul>
                  </ContenedorLista>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion6Laescondida
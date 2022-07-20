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
                      La Escondida cuenta con 148 terrenos de 
                      variadas medidas, que llegan hasta los 609 m2. 
                      Dándote la posibilidad de elegir tu lote ideal.
                    </ParrafoDerecha>
                  </div>
                   <ContenedorLista>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3 style={{borderTop: '1px solid #6464643B'}}><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741465/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/destello-1-1-1_xrlv3z.webp'/></span>Electricidad aérea</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715491/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Frame-4-1_isnljh_xnvdoc.webp'/></span>Tranquera de ingreso y egreso</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715490/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Frame-3_rxikyf_hv4fp9.webp'/></span>Cerco perimetral de 5 hilos</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715466/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/road_1_qqkxci_e1cu4d.webp'/></span>Calle de tosca y calcáreo</ItemListaDerecha3>
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
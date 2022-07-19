import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps2Victorias, 
    SubBoxUbicacion,
    Numero3,
    TituloDerecha ,
    ParrafoDerecha,
    SubtituloDerecha,
    ItemListaDerecha,
    Imagen2,
    ContenedorLista,
    ItemListaDerecha3,
}  from './LasVictoriasElements'

function Seccion6Victorias() {
  return (
    <>
     <Box2 id='3-servicios' >
         <SubBox2>
             <BoxMaps2Victorias>
             {/* <Imagen2 alt='fotoCamion' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg'  ></Imagen2> */}
             </BoxMaps2Victorias>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero3 >3.</Numero3>
                  </div>  
                  <div>
                    <TituloDerecha>Servicios</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    Este proyecto contará con los servicios
                    de electricidad aérea; además de un cerco 
                    perimetral que rodea todo el desarrollo
                    y un portón para el ingreso y egreso al
                    predio. Desde Desarrollos Delsud nos 
                    ocupamos del mejorado de las calles, 
                    cuyo final de obra cuenta con tosca y calcáreo.
                    </ParrafoDerecha>
                  </div>
                  <ContenedorLista>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741465/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/destello-1-1-1_xrlv3z.webp'/></span>Electricidad</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715491/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Frame-4-1_isnljh_xnvdoc.webp'/></span>Portones de ingreso y egreso</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715490/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Frame-3_rxikyf_hv4fp9.webp'/></span>Cerco perimetral</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715466/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/road_1_qqkxci_e1cu4d.webp'/></span>Mejorado de calles</ItemListaDerecha3>
                    </ul>
                  </ContenedorLista>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion6Victorias
import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps2Lacampiña, 
    SubBoxUbicacion,
    Numero3,
    TituloDerecha ,
    ParrafoDerecha,
    Imagen2,
    ItemListaDerecha3,
    ContenedorLista,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion6Lacampiña() {
  return (
    <>
     <Box2 id='3-servicios' >
         <SubBox2>
             <BoxMaps2Lacampiña>
             {/* <Imagen2 alt='fotoCamion' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649432434/DESARROLLOSGRUPODELSUD/lomas_04_b8zrms.jpg'  ></Imagen2> */}
             </BoxMaps2Lacampiña>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero3 id='#3-servicios'>3.</Numero3>
                  </div>  
                  <div>
                    <TituloDerecha>Servicios</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    Contará con los servicios de electricidad subterránea <br/>
                    y agua potable; además de un cerco perimetral que rodea <br/>
                    todo el desarrollo y portón automatizado para el ingreso y egreso.
                    <br></br>
                    <br>
                    </br>
                    Desde Desarrollos Delsud nos ocupamos del <br/>
                    mejorado de las calles, cuyo final de obra <br/>
                    cuenta con tosca y calcáreo.<br/>
                    </ParrafoDerecha>
                  </div>
                  <ContenedorLista>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741465/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/destello-1-1-1_xrlv3z.webp'/></span>Electricidad</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741465/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/difuminar-1-1_nd7w9v.webp'/></span>Agua Potable</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715466/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/road_1_qqkxci_e1cu4d.webp'/></span>Mejorado de calles</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715491/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Frame-4-1_isnljh_xnvdoc.webp'/></span>Portones de ingreso y egreso</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715490/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Frame-3_rxikyf_hv4fp9.webp'/></span>Cerco perimetral</ItemListaDerecha3>
                    </ul>
                  </ContenedorLista>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion6Lacampiña
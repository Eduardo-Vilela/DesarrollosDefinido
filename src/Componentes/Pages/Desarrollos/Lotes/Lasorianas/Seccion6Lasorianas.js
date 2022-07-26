import React from 'react'
import { 
    Box2,
    BoxUbicacion, 
    SubBox2,
    BoxMaps, 
    SubBoxUbicacion,
    Numero3,
    TituloDerecha ,
    ParrafoDerecha,

    Imagen2,
    ContenedorLista,
    ItemListaDerecha3,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion6Lasorianas() {
  return (
    <>
     <Box2 id='3-servicios' >
         <SubBox2>
             <BoxMaps>
             {/* <Imagen2 alt='fotoCamion' width='100%' height='100%' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658850743/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/Orianas_-_Servicios_-_Horizontal_emcryy.jpg'  ></Imagen2> */}
             </BoxMaps>
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
                    Contará con los servicios de electricidad y agua potable, 
                    suministrado por reconocida empresa de la zona, aunque cabe destacar que 
                    la conectividad de estos fue facilitada por obra privada de Desarrollos Delsud. 
                    Por otro lado, el ingreso y egreso al predio será posible mediante dos portones ubicados 
                    sobre la calle 515. Desde la empresa también nos hemos ocupado del mejoramiento de la calle,
                     cuyo final de obra cuenta con tosca y calcáreo, y de su luminaria común. De esta manera, 
                     facilitamos los recursos necesarios para que cada propietario
                      cumpla los sueños de su propia inversión.
                    </ParrafoDerecha>
                  </div>
                  <ContenedorLista>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3 style={{borderTop: '1px solid #6464643B'}}><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741465/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/destello-1-1-1_xrlv3z.webp'/></span>Electricidad</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{marginRight:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741465/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/difuminar-1-1_nd7w9v.webp'/></span>Agua Potable</ItemListaDerecha3>
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

export default Seccion6Lasorianas
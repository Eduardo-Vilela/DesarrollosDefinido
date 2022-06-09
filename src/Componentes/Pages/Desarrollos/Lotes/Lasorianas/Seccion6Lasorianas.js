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
    SubtituloDerecha,
    ItemListaDerecha,
    Imagen2,
    ItemListaDerecha3,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion6Lasorianas() {
  return (
    <>
     <Box2 id='3-servicios' >
         <SubBox2>
             <BoxMaps>
             <Imagen2 alt='fotoCamion' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg'  ></Imagen2>
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
                    suministrado por reconocida empresa de la zona,
                     aunque cabe destacar que la conectividad de estos 
                     fue facilitada por obra privada de Desarrollos Delsud. 
                     Desde la empresa también nos hemos ocupado del 
                     mejoramiento de la calle, cuyo final de obra 
                     cuenta con tosca y calcáreo, y de su luminaria común. 
                     De esta manera, facilitamos los recursos necesarios 
                     para que cada propietario cumpla los 
                     sueños de su propia inversión.
                    </ParrafoDerecha>
                  </div>
                  <div style={{width:'55%' ,padding:'40px 0px'}}>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/></span>Electricidad</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/Vectorfbaf_zx4xjl.svg'/></span>Agua Potable</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/></span>Mejorado de calles</ItemListaDerecha3>
                    </ul>
                  </div>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion6Lasorianas
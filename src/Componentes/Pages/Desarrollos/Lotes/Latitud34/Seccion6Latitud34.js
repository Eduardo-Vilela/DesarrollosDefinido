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
    BoxMaps2Latitud,
}  from '../LasVictorias/LasVictoriasElements'

function Seccion6Latitud34() {
  return (
    <>
     <Box2 >
         <SubBox2>
             <BoxMaps2Latitud>
             {/* <Imagen2 alt='fotoCamion' width='100%' height='100%' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649627424/DESARROLLOSGRUPODELSUD/Latitud_34_2_1_os8k4l.jpg'  ></Imagen2> */}
             </BoxMaps2Latitud>
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
                        Contará con los servicios de electricidad y agua potable. <br/>
                        Desde la empresa también nos hemos ocupado del mejoramiento <br/>
                        de la calle, cuyo final de obra cuenta con tosca y calcáreo, <br/>
                        y de su luminaria común. De esta manera, <br/>
                        facilitamos los recursos necesarios para que <br/>
                        cada propietario cumpla los sueños de su propia inversión. <br/>
                    </ParrafoDerecha>
                  </div>
                  <div style={{width:'60%'}}>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <ItemListaDerecha3><span style={{margin:'6%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/></span>Electricidad</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'6%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/Vectorfbaf_zx4xjl.svg'/></span>Agua Potable</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654703981/DESARROLLOSGRUPODELSUD/Frame-4-1_isnljh.svg'/></span>Portón automatizado de ingreso y egreso</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1654703981/DESARROLLOSGRUPODELSUD/Frame-3_rxikyf.svg'/></span>Cerco perimetral</ItemListaDerecha3>
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

export default Seccion6Latitud34
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
}  from './LasVictoriasElements'

function Seccion6Victorias() {
  return (
    <>
     <Box2 id='3-servicios'>
         <SubBox2>
             <BoxMaps>
             <Imagen2 alt='fotoCamion' width='100%' height='100%' src=''  ></Imagen2>
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
                        <ItemListaDerecha3 style={{borderTop: '1px solid #6464643B'}}><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/></span>Electricidad</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649629353/DESARROLLOSGRUPODELSUD/Vector_lfysdy.svg'/></span>Portones de ingreso y egreso</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649435466/DESARROLLOSGRUPODELSUD/Vector_g9k2zu.jpg'/></span>Cerco perimetral</ItemListaDerecha3>
                        <ItemListaDerecha3><span style={{margin:'5%'}}><img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/></span>Mejorado de calles</ItemListaDerecha3>
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
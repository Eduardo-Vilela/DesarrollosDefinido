import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha, ContenedorIframe} from './LasVictoriasElements'

function Seccion4Victorias() {
  return (
    <>
     <Box2 id='1-ubicacion'>
         <SubBox2>
             <BoxMaps>
              <a target="_blank" href='https://www.google.com/maps/d/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&hl=es&ehbc=2E312F&ll=-34.96304583639384%2C-58.024891572119124&z=12'>
                <ContenedorIframe className='boxMapita'>
                  <iframe className='ajusteMobileIframe' 
                    title='mapa' 
                    allowfullscreen=""
                    src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-34.96171380196507%2C-58.11148728866966&z=17" 
                    style={{width:'100%',height:'100%'}}>
                  </iframe>
                
                </ContenedorIframe>
              </a>
             </BoxMaps>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero1 >1.</Numero1>
                  </div>  
                  <div>
                    <TituloDerecha>Ubicación</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    Las Victorias se encuentra ubicado
                    en la calle 492 e/ 202 y 208 de la
                    Localidad de Abasto en el partido de 
                    La Plata, posee una privilegiada conexión 
                    con la R.P. N° 36, permitiendo un acceso
                    fácil y rápido tanto al casco urbano de la 
                    ciudad de La Plata, como a CABA.
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                    <ul style={{paddingLeft: '22px'}}>
                        <ItemListaDerecha>Colegios</ItemListaDerecha>
                        <ItemListaDerecha>Comercios</ItemListaDerecha>
                        <ItemListaDerecha>Entidades Bancarias</ItemListaDerecha>
                        <ItemListaDerecha>Avenidas y Rutas cercanas</ItemListaDerecha>
                    </ul>
                  </div>
                 </SubBoxUbicacion>
             </BoxUbicacion>
         </SubBox2>
     </Box2>
    </>
  )
}

export default Seccion4Victorias
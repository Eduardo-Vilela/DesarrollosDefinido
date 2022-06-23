import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha, ContenedorIframe} from './LasVictoriasElements'

function Seccion4Victorias() {
  return (
    <>
     <Box2 id='1-ubicacion'>
         <SubBox2>
             <BoxMaps>
               <ContenedorIframe>
                <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-34.96171380196507%2C-58.11148728866966&z=17" 
                    style={{width:'100%',height:'100%'}}
                    ></iframe>
                    {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-34.9620918853923%2C-58.10999598045738&z=17" width="640" height="480"></iframe> */}
                </ContenedorIframe>
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
                    Las Victorias se encuentra ubicado <br/>
                    en la calle 492 e/ 202 y 208 de la <br/>
                    Localidad de Abasto en el partido de <br/>
                    La Plata, posee una privilegiada conexión <br/>
                    con la R.P. N° 36, permitiendo un acceso <br/>
                    fácil y rápido tanto al casco urbano de la <br/>
                    ciudad de La Plata, como a CABA.<br/>
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                  </div>
                  <div>
                    <ul>
                        <ItemListaDerecha  >Colegios</ItemListaDerecha>
                        <ItemListaDerecha  >Comercios</ItemListaDerecha>
                        <ItemListaDerecha  >Entidades Bancarias</ItemListaDerecha>
                        <ItemListaDerecha  >Avenidas y Rutas cercanas</ItemListaDerecha>
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
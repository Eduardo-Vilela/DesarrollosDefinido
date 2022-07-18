import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha, ContenedorIframe} from '../LasVictorias/LasVictoriasElements'

function Seccion4Latitud34() {
  return (
    <>
     <Box2 id='1-ubicacion' >
         <SubBox2>
             <BoxMaps>
               <ContenedorIframe>
                <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-34.98251173112081%2C-57.952128860118854&z=19" 
                    style={{width:'100%',height:'100%'}}
                    />
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
                       Latitud 34° se encuentra ubicado en la <br/> 
                       calle 90 e/ 143 y 152 de la Localidad de <br/> 
                       Los Hornos, en el partido de La Plata, <br/> 
                       posee una privilegiada conexión con el <br/> 
                       centro de la ciudad a través de la <br/> 
                       asfaltada calle 155, que conecta luego <br/> 
                       con las principales avenidas 66 y 60.<br/> 
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                  </div>
                  <div>
                    <ul>
                        <ItemListaDerecha  >Colegios</ItemListaDerecha>
                        <ItemListaDerecha  >Comercios</ItemListaDerecha>
                        <ItemListaDerecha  >Gastronomía</ItemListaDerecha>
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

export default Seccion4Latitud34
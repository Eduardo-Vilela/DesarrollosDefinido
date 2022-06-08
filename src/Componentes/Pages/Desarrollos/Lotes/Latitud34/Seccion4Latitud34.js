import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha} from '../LasVictorias/LasVictoriasElements'

function Seccion4Latitud34() {
  return (
    <>
     <Box2 >
         <SubBox2>
             <BoxMaps>
                <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.8865420140028!2d-58.11021278476073!3d-34.959452280368836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2db5c9445b9dd%3A0x5d9c05728e96f7f2!2sC.%20202%20%26%20C.%20492%2C%20Abasto%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649628958491!5m2!1ses!2sar" 
                    style={{width:'100%',height:'100vh'}}
                    />
             </BoxMaps>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero1 id='1-ubicacion'>1.</Numero1>
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
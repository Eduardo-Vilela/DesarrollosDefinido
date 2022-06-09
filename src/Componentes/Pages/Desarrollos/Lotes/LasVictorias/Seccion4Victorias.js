import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha} from './LasVictoriasElements'

function Seccion4Victorias() {
  return (
    <>
     <Box2 id='1-ubicacion'>
         <SubBox2>
             <BoxMaps>
                <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.8865420140028!2d-58.11021278476073!3d-34.959452280368836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2db5c9445b9dd%3A0x5d9c05728e96f7f2!2sC.%20202%20%26%20C.%20492%2C%20Abasto%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649628958491!5m2!1ses!2sar" 
                    style={{width:'100%',height:'100%'}}
                    />
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
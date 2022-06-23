import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha,ContenedorIframe} from '../LasVictorias/LasVictoriasElements'

function Seccion4Lacampiña() {
  return (
    <>
     <Box2 id='1-ubicacion' >
         <SubBox2>
             <BoxMaps>
             <ContenedorIframe>
             <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-35.018875770782074%2C-58.083655325794986&z=19" 
              style={{width:'100%',height:'100%',objectFit:'cover'}}
              ></iframe>
              </ContenedorIframe>
             </BoxMaps>
             <BoxUbicacion>
                 <SubBoxUbicacion>
                  <div>
                    <Numero1>1.</Numero1>
                  </div>  
                  <div>
                    <TituloDerecha>Ubicación</TituloDerecha>
                  </div> 
                  <div>
                    <ParrafoDerecha>
                    Este nuevo lanzamiento está ubicado <br/>
                    en la localidad Ángel Etcheverry, <br/>
                    sobre la calle 229, entre las calles 38 y 42. <br/>
                    Es de fácil acceso ya que se encuentra <br/>
                    muy próximo a las Avenida 44.<br/>
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

export default Seccion4Lacampiña
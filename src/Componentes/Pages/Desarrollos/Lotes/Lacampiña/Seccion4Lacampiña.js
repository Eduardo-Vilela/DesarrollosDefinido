import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha,ContenedorIframe} from '../LasVictorias/LasVictoriasElements'

function Seccion4Lacampiña() {
  return (
    <>
     <Box2 id='1-ubicacion' >
         <SubBox2>
             <BoxMaps>
             <ContenedorIframe>
             <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.53042292712!2d-58.083831394617675!3d-35.01713083049595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c39a9bb0a4a1%3A0x8396e9bdfd083b9a!2sC.%2038%20%26%20C.%20229%2C%20Abasto%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649432253889!5m2!1ses!2sar" 
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
import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha} from '../LasVictorias/LasVictoriasElements'

function Seccion4Laescondida() {
  return (
    <>
     <Box2 >
         <SubBox2>
             <BoxMaps>
             <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.4360534275897!2d-58.03778858476052!3d-34.970740880366016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c2c3d7d2af8b%3A0xd23784691f43fa46!2sC.%20177%20%26%20C.%2037%2C%20B1901%20Melchor%20Romero%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649095098204!5m2!1ses!2sar" 
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
                    Se encuentra en una zona con cercanía a comercios y servicios,<br/> 
                    y a sólo 20 minutos del centro de la ciudad de La Plata. Al ser<br/>
                    una zona rodeada por la naturaleza es ideal para proyectar un<br/>
                    en el cual poder disfrutar de un descanso de fin de <br/>
                    semana, como también la rutina del día a día.<br/>
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

export default Seccion4Laescondida
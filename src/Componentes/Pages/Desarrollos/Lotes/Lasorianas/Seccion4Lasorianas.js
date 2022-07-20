import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha, ContenedorIframe} from '../LasVictorias/LasVictoriasElements'

function Seccion4Lasorianas() {
  return (
    <>
     <Box2 id='1-ubicacion'>
         <SubBox2>
             <BoxMaps>
             <a target="_blank" href='https://www.google.com/maps/d/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&hl=es&ehbc=2E312F&ll=-34.96304583639384%2C-58.024891572119124&z=12'>
               <ContenedorIframe className='boxMapita'>
                  <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-34.94496460627%2C-58.05325918310052&z=19" 
                  style={{width:'100%',height:'100%'}}
                  />
                
                </ContenedorIframe>
              </a>
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
                    Se encuentra en una zona con cercanía a comercios y servicios, 
                    y a sólo 20 minutos del centro de la ciudad de La Plata. Al ser
                    una zona rodeada por la naturaleza es ideal para proyectar un
                    en el cual poder disfrutar de un descanso de fin de 
                    semana, como también la rutina del día a día.
                    </ParrafoDerecha>
                  </div>
                  <div>
                    <SubtituloDerecha>¿Qué hay en la zona?</SubtituloDerecha>
                    <ul style={{paddingLeft: '22px'}}>
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

export default Seccion4Lasorianas
import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha,ContenedorIframe} from '../LasVictorias/LasVictoriasElements'

function Seccion4Eljuncal() {
  return (
    <>
     <Box2 id='1-ubicacion' >
         <SubBox2>
             <BoxMaps>
             <a target="_blank" href='https://www.google.com/maps/d/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&hl=es&ehbc=2E312F&ll=-34.96304583639384%2C-58.024891572119124&z=12'>
               <ContenedorIframe className='boxMapita'>
                  <iframe title='mapa' src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-34.97131511231089%2C-58.03725295015823&z=19" 
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
                    Este proyecto de grandes dimensiones, se encuentra ubicado en la localidad de Lisandro Olmos. El mismo, abarca desde la calle 32 hasta 37 y desde 177 a 179.
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

export default Seccion4Eljuncal
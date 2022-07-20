import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha,ContenedorIframe} from '../LasVictorias/LasVictoriasElements'

function Seccion4Laescondida() {
  return (
    <>
     <Box2 id='1-ubicacion' >
         <SubBox2>
             <BoxMaps>
             <a target="_blank" href='https://www.google.com/maps/d/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&hl=es&ehbc=2E312F&ll=-34.96304583639384%2C-58.024891572119124&z=12'>
               <ContenedorIframe className='boxMapita'>
                  <iframe title='mapaDesarrollo' style={{width:'100%',height:'100%'}} src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ehbc=2E312F&ll=-34.991774368099954%2C-57.97178732995529&z=17" />
         
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
                    La Escondida es un gran lugar para aquellos  
                    que buscan salir de la ciudad, y respirar aire puro,   
                    ideal para vivienda de fin de semana o permanente. 
                    Se encuentra a tan solo veinte minutos 
                    del casco urbano, en la localidad de Los Hornos.
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

export default Seccion4Laescondida
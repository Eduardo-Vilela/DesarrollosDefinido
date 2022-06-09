import React from 'react'
import { Box2,BoxUbicacion, SubBox2,BoxMaps, SubBoxUbicacion,Numero1,TituloDerecha ,ParrafoDerecha,SubtituloDerecha,ItemListaDerecha} from '../LasVictorias/LasVictoriasElements'

function Seccion4Laescondida() {
  return (
    <>
     <Box2 id='1-ubicacion' >
         <SubBox2>
             <BoxMaps>
                <iframe title='mapaDesarrollo' style={{width:'100%',height:'100vh'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.624905275253!2d-57.97389288475996!3d-34.991059080361005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e9a317af01df%3A0xdc23f7f16c9236b1!2sC.%2084%20%26%20C.%20161%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1651591292140!5m2!1ses!2sar" />
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
                    La Escondida es un gran lugar para aquellos <br/>
                    que buscan salir de la ciudad, y respirar aire puro, <br/>
                    ideal para vivienda de fin de semana o permanente.<br/> 
                    Se encuentra a tan solo veinte minutos <br/>
                    del casco urbano, en la localidad de Los Hornos.<br/>
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
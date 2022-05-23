import React from 'react'
import {BoxPadre1,SubBoxPadre2,Contenedor1,Contenedor2,Video1,Video2,Video3 } from './Seccion2Elements'

function Seccion2() {
  return (
    <>
     <BoxPadre1>
         <SubBoxPadre2>
             <Contenedor1>
             <Video1 loop autoPlay>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649779825/DESARROLLOSGRUPODELSUD/abajo-izquierda_222_raqdek.mp4"
                  type="video/mp4"
                />
              </Video1>
              <br/>
              <Video2  loop autoPlay>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649779825/DESARROLLOSGRUPODELSUD/abajo-izquierda_222_raqdek.mp4"
                  type="video/mp4"
                />
              </Video2>
             </Contenedor1>
             <Contenedor2>
                <Video3  loop autoPlay>
                    <source
                    src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649779687/DESARROLLOSGRUPODELSUD/video-derecha222_dedlp3.mp4"
                    type="video/mp4"
                    />
                </Video3>
             </Contenedor2>
         </SubBoxPadre2>
     </BoxPadre1>
    </>
  )
}

export default Seccion2
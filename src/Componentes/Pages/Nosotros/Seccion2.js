import React from 'react'
import {BoxPadre1,SubBoxPadre2,Contenedor1,Contenedor2,Video1,Video2,Video3 } from './Seccion2Elements'

function Seccion2() {
  return (
    <>
    <BoxPadre1>
        <SubBoxPadre2>
            <Contenedor1>
            <Video1 loop autoPlay data-aos="fade-up" data-aos-duration="3000">
                <source
                style={{borderRadius:'20px !important'}}
                  src="https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657725847/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/abajo-izquierda_222_osnlmn.mp4"
                  type="video/mp4"
                />
              </Video1>
              <br/>
              <Video2  loop autoPlay data-aos="fade-right" data-aos-duration="3000">
                <source
                  src="https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657725846/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/abajo-izquierda222_w7kr9v.mp4"
                  type="video/mp4"
                />
              </Video2>
            </Contenedor1>
            <Contenedor2>
                <Video3  loop autoPlay data-aos="fade-left" data-aos-duration="3000">
                    <source
                    src="https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657725851/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/video-derecha222.mp4_qfidzh.mp4"
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
import React from 'react'
import '../../Estilos/Nosotros.css'


function Seccion2() {
  return (
    <>
    <div className='flexPrincipal-seccion2-nosotros'>
        <div className='nosotros-seccion2-flex'>
            <div className='contenedor-2imagenes' >
            <video className='bordesVideos' loop autoPlay>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649779825/DESARROLLOSGRUPODELSUD/abajo-izquierda_222_raqdek.mp4"
                  type="video/mp4"
                />
              </video>
              <br/>
              <video className='bordesVideos'  loop autoPlay>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649779825/DESARROLLOSGRUPODELSUD/abajo-izquierda_222_raqdek.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div  className='contenedor-1imagen'>
                <video className='bordesVideos'  loop autoPlay>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649779687/DESARROLLOSGRUPODELSUD/video-derecha222_dedlp3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
        </div>
    </div>
    </>
  )
}

export default Seccion2
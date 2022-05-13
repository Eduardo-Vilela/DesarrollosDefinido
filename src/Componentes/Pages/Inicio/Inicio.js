import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Estilos/Inicio.css'

function Inicio() {
  
  return (
    <>     
        <div class="contenedor">
               <video  loop autoPlay muted  className='videoInicio'>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649776409/DESARROLLOSGRUPODELSUD/Portada_Desarrollos_yecj66.mp4"
                  type="video/mp4"
                />
              </video>
              <div className='overlayBackgroundInicio'></div>
          <div className='contenedorParrafo '>
            <h1 className='titulo-inicio'>
                Tenemos el terreno ideal
                 <br/>
                para vos y tu familia
            </h1>
            <p className='subtitulo-inicio'>
                Contamos con una amplia variedad de terrenos para que 
                <br/>
                encuentres el que mejor se adapte a tus necesidades.
            </p>
          </div>
        </div> 
  </>  
  )
}

export default Inicio
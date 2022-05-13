import React from 'react'
import '../../Estilos/Inicio.css'

function Seccion7() {
  return (
    <>
     <div className='seccion7-flex'>
      <div className='flexTop-seccion7' >
          <div>
          <h3 className='seccion7Titulo'>Estamos cerca</h3>
          </div>
          <div className='flexSubtitulo-seccion7'>
             <img alt='' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647348106/DESARROLLOSGRUPODELSUD/Group_65_tkbbt7.svg'/>
              <br></br>
             <p className='ajusteSubtitulo-seccion7'>La Plata, Buenos Aires</p>
         </div>
      </div>
      <div className='contenedor-maps'>
          <iframe className='contenedor-maps' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7020930548233!2d-57.952751484761976!3d-34.913924880380335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd19aed8c2ce5caf6!2sDesarrollos%20Delsud!5e0!3m2!1ses!2sar!4v1649100000405!5m2!1ses!2sar" width="1400" height="700"/>
      </div> 
      </div>  
    </>
  )
}

export default Seccion7
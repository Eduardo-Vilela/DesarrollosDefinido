import React from 'react'
import '../../Estilos/Nosotros.css'


function Seccion6() {
  return (
    <>
     <div className='back-seccion6-nosotros'>    
       <div className='seccion6-nosotros-flex'>
         <div className='izquierda-seccion6-nosotros'>
           <h2 className='titulo-seccion6-nosotros'>
              ¿Conocés Grupo Delsud?
           </h2>
           <p className='subtitulo-seccion6-nosotros'>
               Estamos esperando que seas parte
           </p>
           <a href='aafafa' className='boton-seccion6-nosotros'>
               Ir a Grupo Delsud → 
           </a>
         </div>
         <div className='derecha-seccion6-nosotros desactivacionLogo-subnav-seccion6'>
           <img alt='foto-seccion5-prevfooter' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647614820/DESARROLLOSGRUPODELSUD/Frame_sshhg1.png'/>
         </div>
       </div>
     </div>
    </>
  )
}

export default Seccion6
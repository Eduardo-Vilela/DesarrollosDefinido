import React from 'react'
import '../../Estilos/Inicio.css'


function Seccion3() {
  return (
    <>
       <div className='seccion3-nav'>
         <div className='seccion3-texto'>
             <p>¡Estamos para asesorate!</p>
         </div> 
         <div>
            <a href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><img className='seccion3-redes' alt='facebook' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647265206/DESARROLLOSGRUPODELSUD/Vector_ldkf57.png'/></a>
            <a href='https://www.instagram.com/desarrollos.delsud/' ><img className='seccion3-redes' alt='instagram' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648474919/DESARROLLOSGRUPODELSUD/Vector_rklfgc.svg'/></a>
            <a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' ><img className='seccion3-redes' alt='whatsapp' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648474919/DESARROLLOSGRUPODELSUD/Group_1_kmfv3i.svg'/></a>
         </div>
       </div>
    </>
  )
}

export default Seccion3
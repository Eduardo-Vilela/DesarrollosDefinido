import React from 'react'
import '../Componentes/Estilos/icono.css'


function Icono() {
  return (
    <>
      <div className='contenedorIcono'>
        <a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>
         <div>
             <img  className='iconoWsp'  alt='icono' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649883996/DESARROLLOSGRUPODELSUD/icons8-whatsapp_1_qsbb4r.svg'/>
         </div>
         </a> 
     </div>
    </>
  )
}

export default Icono
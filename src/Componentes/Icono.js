import React from 'react'
import './icono.css'
import cargarArchivos from './Files'

function Icono() {
  cargarArchivos();
  return (
    <>
      <div className='contenedorIcono'>
        <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>
         <div>
             <img  className='iconoWsp'  id='iconowspchat'alt='icono' src=''/>
         </div>
         </a> 
     </div>
    </>
  )
}

export default Icono
import React from 'react'
import '../../Estilos/Inicio.css'

function Seccion2() {
  return (
    <>
      <div className='seccion2--flex'>
        <div className='izquierda'> 
            <div className='ajusteMobileSeccion2'> 
                <h2 className='seccion2-titulo'>
                    Nosotros
                </h2>
                <p className='seccion2-font'>
                Somos una de las empresas desarrolladoras urbanísticas más completas
                y eficientes del mercado.
                </p>
                <p className='seccion2-font'>
                Nuestro objetivo es que accedas a tu terreno de forma rápida y con la mejor financiación.
                Disponemos de maquinarias y personal permanente para cubrir todas las etapas del proceso en tiempos 
            inmejorables, haciendo de nuestros desarrollos, tu alternativa más rentable.
                </p>
                 <a href='aaaaa' className='boton-seccion2'>Conocenos →</a>
          </div>    
        </div>
        <div className='derecha'>
          {/* <img alt='seccion2-foto' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647161501/DESARROLLOSGRUPODELSUD/Lomas_de_Arana-Muestra-1_1_tqpjva.png'/> */}
        </div>
      </div>

   </>
  )
}

export default Seccion2
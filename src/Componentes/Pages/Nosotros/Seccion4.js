import React from 'react'
import '../../Estilos/Nosotros.css'




function Seccion4() {
  return (
    <>
     <div className='seccion4-nosotros'>
         <div data-aos="fade-up" data-aos-duration="3000" className='seccion4-flex1'>
           <div className='contenedorParrafo-seccion4'>
              <h3 className='seccion4-nosotros-titulo'>
                  ¿Qué nos inspira?
              </h3>
              <p className='nosotros-seccion4-parrafo'>
                A la hora de emprender un proyecto, sea cual sea, nos inspiramos
                en nuestros clientes. Cuando proyectamos, diseñamos y llevamos
                a cabo un proyecto, lo hacemos con la mente puesta en la calidad
                de vida de las personas que lo van a adquirir, brindando la máxima 
                funcionalidad y calidad.
                <br></br>
                Además, nos enorgullece contarte que formamos parte de un
                grupo empresarial que en solo dos años supo crecer para  
                acompañarte en todo tu proceso.
                <br></br>
                Pertenecer a Grupo Delsud, nos permite contar con financiación 
                propia bajo requisitos mínimos y con planes realmente a medida,  
                para que puedas adquirir el bien de anhelo con mayor facilidad y    
                poder acompañarte en todo el proceso de tu soñada inversión de
                futuro.
              </p>
            </div>
         </div>
         <div data-aos="fade-up" data-aos-duration="3000" className='seccion4-nosotros-imagen'>
           {/* <img className='ajusteFoto-seccion4' alt='foto-seccion4-nosotros' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647546408/DESARROLLOSGRUPODELSUD/pexels-karolina-grabowska-4207907_1_buv9vz.jpg'/> */}
         </div> 
     </div>
     
    </>
  )
}

export default Seccion4
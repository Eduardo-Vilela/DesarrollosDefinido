import React from 'react'
import '../../Estilos/Nosotros.css'



function Seccion1() {
  return (
    <>
     <div data-aos="fade-up"  data-aos-duration="3000" className='nosotros-seccion1-flex'>
         <div className='nosotros-seccion1-flex1'>
           <h1 className='nosotros-titulo'>
               Llegamos para que
               <br/>  
               cumplir tu sueño sea 
               <br/>
               más simple
           </h1>
         </div>
         <div data-aos="fade-up"  data-aos-duration="3000" className='nosotros-seccion1-flex2'>
           <p className='nosotros-texto'>
            Somos una de las empresas desarrolladoras de inmuebles más
            completas y eficaces del mercado. Nuestro objetivo es que 
            puedas adquirir tu terreno de manera rápida y sencilla.
            <br/>
            <br/>
            Entendiendo la importancia del proceso de adquisición de un 
            terreno, es que contamos con un equipo de asesoramiento 
            en constante crecimiento y capacitación que buscará ayudarte a 
            elegir tu mejor opción.
            <br/>
            <br/>
             El acompañamiento es una parte vital de nuestro servicio, por 
             ende en todas las etapas del proceso nos aseguramos de brindar 
             el apoyo necesario incluso una vez concretada la operación.
             <br/>
             <br/>
             Además, somos la única empresa en la zona que cuenta con 
             maquinarias propias y personal contratado de forma permanente, 
             motivo por el cual podemos ejecutar las obras en períodos de 
             tiempo muy cortos, sin descuidar el proceso que un desarrollo
              urbanístico merece.
            </p>
         </div>
     </div>
    </>
  )
}

export default Seccion1
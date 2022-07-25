import React from 'react'
import {
BoxPadre,
SubBoxPadre,
BoxBack2,
BoxIntermedioNos
} from './Seccion4Elements'
import { BoxTexto, Parrafo3, Titulo3,BoxIntermedio, } from '../Home/Seccion3Elements'

function Seccion4() {
  return (
    <>
     <BoxPadre>
      <SubBoxPadre>
        <BoxTexto>
          <BoxIntermedioNos data-aos="fade-up"  data-aos-duration="3000">
            <Titulo3 className='seccion4-nosotros-titulo'>
                  ¿Qué nos inspira?
            </Titulo3>
            <Parrafo3 className='nosotros-seccion4-parrafo'>
                A la hora de emprender un proyecto, sea cual sea, nos inspiramos
                en nuestros clientes. Cuando proyectamos, diseñamos y llevamos
                a cabo un proyecto, lo hacemos con la mente puesta en la calidad
                de vida de las personas que lo van a adquirir, brindando la máxima 
                funcionalidad y calidad.<br/>
                <br/>
                
                Además, nos enorgullece contarte que formamos parte de un
                grupo empresarial que en solo cuatro años supo crecer para  
                acompañarte en todo tu proceso.
                <br/>
                <br/>
                Pertenecer a Grupo Delsud, nos permite contar con financiación 
                propia bajo requisitos mínimos y con planes realmente a medida,  
                para que puedas adquirir el bien de anhelo con mayor facilidad y    
                poder acompañarte en todo el proceso de tu soñada inversión de
                futuro.
            </Parrafo3>
            </BoxIntermedioNos> 
        </BoxTexto>
        <BoxBack2 data-aos="fade-up"  data-aos-duration="3000">
 
        </BoxBack2>
      </SubBoxPadre>
     </BoxPadre>
    </>
  )
}

export default Seccion4
import React from 'react'
import {
    BoxPrincipal,
    BoxTexto,
    BoxBack,
    Titulo3,
    SubBox,
    Parrafo3,
    Button3
} from './Seccion3Elements'




function Seccion3() {
  return (
    <>
     <BoxPrincipal>
      <SubBox>
        <BoxTexto>
          <Titulo3 className='seccion2-titulo'>Nosotros</Titulo3>
          <Parrafo3 className='seccion2-font'>
            Somos una de las empresas desarrolladoras urbanísticas más completas
            y eficientes del mercado.
            <br/>
            Nuestro objetivo es que accedas a tu terreno de forma rápida y con la mejor financiación.
            Disponemos de maquinarias y personal permanente para cubrir todas las etapas del proceso en tiempos 
            inmejorables, haciendo de nuestros desarrollos, tu alternativa más rentable.
            </Parrafo3>
          <Button3 href='aaaaa' className='boton-seccion2'>Conocenos →</Button3>
        </BoxTexto>
        <BoxBack>
          
        </BoxBack>
      </SubBox>
     </BoxPrincipal>  
    </>
  )
}

export default Seccion3
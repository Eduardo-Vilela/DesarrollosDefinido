import React from 'react'
import {
    BoxPrincipal,
    BoxTexto,
    BoxBack,
    Titulo3,
    SubBox,
    Parrafo3,
    Button3,
    BoxIntermedio,
    BoxInterior
} from './Seccion3Elements'




function Seccion3() {
  return (
    <>
     <BoxPrincipal>
      <SubBox>
        <BoxTexto>
          <BoxIntermedio>
            <BoxInterior>
            <Titulo3>Nosotros</Titulo3>
              <Parrafo3>
              Somos una de las empresas desarrolladoras urbanísticas más completas
              y eficientes del mercado. <br></br>
              Nuestro objetivo es que accedas a tu terreno de forma rápida y con la mejor financiación.
              Disponemos de maquinarias y personal permanente para cubrir todas las etapas del proceso en tiempos 
              inmejorables, haciendo de nuestros desarrollos, tu alternativa más rentable.
              </Parrafo3> 
            <Button3 to='/Nosotros'>Conocenos →</Button3>
            </BoxInterior>
          </BoxIntermedio>  
        </BoxTexto>
        <BoxBack>
          
        </BoxBack>
      </SubBox>
     </BoxPrincipal>  
    </>
  )
}

export default Seccion3
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
    BoxInterior,
    ContenedorCollage,
    SubContenedorCollage,
    SubContenedorCollage1,
    SubContenedorCollage2,
    FotoNosotros1,
    FotoNosotros2,
    FotoNosotros3,
    ContenedorCollage2,

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
                <Button3 to='/Nosotros'>Conocenos</Button3>
            </BoxInterior>
          </BoxIntermedio>  
        </BoxTexto>
        <BoxBack>
        <ContenedorCollage2 >
          <SubContenedorCollage>
              <FotoNosotros1 alt='foto1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658853019/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nosotros_-_Foto_2_jkmbhj.jpg'/>
              
          </SubContenedorCollage>
          </ContenedorCollage2>
          <ContenedorCollage >
            <SubContenedorCollage1 >
             <FotoNosotros2  alt='foto2' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658853018/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nosotros_-_Foto_1_srcsvu.jpg'/>
            </SubContenedorCollage1>
            <SubContenedorCollage2 >
             <FotoNosotros3  alt='foto3' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658853018/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nosotros_-_Foto_3_muxllg.jpg'/>
            </SubContenedorCollage2>
          </ContenedorCollage>
        </BoxBack>
      </SubBox>
     </BoxPrincipal>  
    </>
  )
}

export default Seccion3
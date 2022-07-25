import React from 'react'
import {
    Box2,
    BoxTitulo,
    SubBox,
    AjusteBox,
    Titulo,
    Parrafo,
    Button1,
    Imagen1,
    Separador
} from './LasVictoriasElements'


function Seccion2Victorias() {
  return (
    <>
     <Box2>
       <SubBox>
         <BoxTitulo>
             <AjusteBox data-aos="fade-up"  data-aos-duration="2000">
               <Separador> 
                <Titulo>Viví en contacto<br/> con la naturaleza</Titulo>
               </Separador>
               <Separador>
                    <Parrafo>
                        Este nuevo desarrollo de la empresa se 
                        encuentra en la localidad de Abasto, partido 
                        de La Plata, en la zona sur de la provincia de 
                        Buenos Aires. Ubicado sobre la calle 492 entre las 
                        calles 202 y 208, en una zona en constante evolución. 
                        Las Victorias es el lugar ideal para quien desea 
                        planificar su vida en la tranquilidad que 
                        otorgan los espacios verdes.
                    </Parrafo>
                </Separador>
                <Separador>
                <Button1> Me interesa → </Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo>
             <Imagen1 data-aos="fade-up"  data-aos-duration="2000"  alt='fotoseccion1-lasvictorias' src=''/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Victorias
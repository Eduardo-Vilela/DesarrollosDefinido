import React from 'react'
import {
    Box2,
    BoxTitulo,
    SubBox,
    AjusteBox,
    Titulo,
    Parrafo,
    Button1,
    Video1,
    Separador
} from '../LasVictorias/LasVictoriasElements'


function Seccion2Eljuncal() {
  return (
    <>
     <Box2>
       <SubBox>
         <BoxTitulo>
             <AjusteBox>
               <Separador> 
                <Titulo>La tranquilidad <br/>que buscabas</Titulo>
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
             <Video1 loop autoPlay alt='fotoseccion1-lasvictorias' type="video/mp4"  src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657804339/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/El-Juncal-Landing22222_siy7dg.mp4'/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Eljuncal
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
    Separador,
    Imagen1
} from '../LasVictorias/LasVictoriasElements'


function Seccion2Lasorianas() {
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
             <Imagen1 loop autoPlay alt='fotoseccion1-lasvictorias' type="video/mp4" src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715491/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/foto-inicio--1024x858_ataue4_zwbcrz.jpg'/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Lasorianas
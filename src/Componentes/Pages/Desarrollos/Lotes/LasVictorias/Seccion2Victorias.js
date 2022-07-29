import React from 'react'
import {
    Box2,
    BoxTitulo,
    SubBox,
    AjusteBox,
    Titulo,
    Parrafo,
    Button1,
    Separador,
    Video2
} from './LasVictoriasElements'


function Seccion2Victorias() {
  return (
    <>
     <Box2 data-aos="fade-up"  data-aos-duration="2000">
       <SubBox>
         <BoxTitulo>
             <AjusteBox >
               <Separador> 
                <Titulo>Viví en contacto con la naturaleza</Titulo>
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
                  <Button1><a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'style={{textDecoration:'none',color:'white'}}>Me interesa</a></Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo >
             <Video2 loop muted autoPlay alt='fotoseccion1-lasvictorias' type="video/mp4" src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1659109477/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Las_Victorias_-_landing_hcmro5.mp4'/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Victorias
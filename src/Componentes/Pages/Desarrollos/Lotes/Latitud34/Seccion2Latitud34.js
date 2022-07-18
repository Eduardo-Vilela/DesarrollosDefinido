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


function Seccion2Latitud34() {
  return (
    <>
     <Box2>
       <SubBox>
         <BoxTitulo>
             <AjusteBox>
               <Separador> 
                <Titulo>Disfrutá un nuevo <br/> estilo de vida</Titulo>
               </Separador>
               <Separador>
                    <Parrafo>
                      Este proyecto de grandes dimensiones se 
                      encuentra en la conocida localidad de Los Hornos, 
                      partido de La Plata. Se encuentra ubicado 
                      en la calle 90 entre las calles 143 y 152. 
                      Es un desarrollo especial, ideal para encontrar 
                      la tranquilidad que brindan los espacios 
                      verdes que la rodean, y en cercanía a todo lo necesario.
                    </Parrafo>
                </Separador>
                <Separador>
                <Button1><a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'style={{textDecoration:'none',color:'white'}}>Me interesa → </a></Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo>
            <Video1 loop autoPlay type="video/mp4"  alt='fotoseccion1-lasvictorias' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808376/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/latitud22222_tuuzuh.mp4'/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Latitud34
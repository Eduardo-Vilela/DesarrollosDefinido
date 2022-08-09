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
import cargarArchivos from './Files'
function Seccion2Eljuncal() {
  cargarArchivos();
  return (
    <>
     <Box2>
       <SubBox>
         <BoxTitulo>
             <AjusteBox data-aos="fade-up"  data-aos-duration="2000">
               <Separador> 
                <Titulo>La tranquilidad <br/>que buscabas</Titulo>
               </Separador>
               <Separador>
                    <Parrafo>
                        Este nuevo desarrollo de la empresa se 
                        encuentra en la localidad de Lisandro Olmos, partido 
                        de La Plata. Ubicado sobre la calle 32 hasta 37 y desde 177 a 179, en una zona en constante evolución. 
                        Es un desarrollo que está conformado por más de 21 manzanas con terrenos de diferentes dimensiones. 
                        Un lugar perfecto para comenzar un proyecto familiar, rodeado de tranquilidad y abundante naturaleza.
                    </Parrafo>
                </Separador>
                <Separador>
                  <Button1><a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'style={{textDecoration:'none',color:'white'}}>Me interesa</a></Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo>
             <Video1 id='eljuncallanding' data-aos="fade-up"  data-aos-duration="2000" loop muted autoPlay alt='fotoseccion1-lasvictorias' type="video/mp4"  src=''/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Eljuncal
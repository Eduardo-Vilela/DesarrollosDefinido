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


function Seccion2Lacampiña() {
  return (
    <>
     <Box2>
       <SubBox>
         <BoxTitulo>
             <AjusteBox data-aos="fade-up"  data-aos-duration="2000">
               <Separador> 
                <Titulo>Viví rodeado <br/>de naturaleza</Titulo>
               </Separador>
               <Separador>
                    <Parrafo>
                    Este lanzamiento de nuestra empresa está ubicado
                     en la localidad Ángel Etcheverry, partido de La Plata, 
                     sobre la calle 229, entre las calles 38 y 42. <br/>
                     Es un barrio semicerrado de aproximadamente cinco manzanas, 
                     rodeado de quintas que propician un entorno tranquilo, 
                     silencioso y reservado, alejado de la gran urbe pero al 
                     mismo tiempo con la conexión para 
                     acercarse a ella de ser necesario.
                    </Parrafo>
                </Separador>
                <Separador>
                <Button1><a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'style={{textDecoration:'none',color:'white'}}>Me interesa</a></Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo data-aos="fade-up"  data-aos-duration="2000">
             <Video1 loop muted autoPlay alt='fotoseccion1-lasvictorias' type="video/mp4" src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657809914/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/La-Campina222222_pmfcqa.mp4' />
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Lacampiña
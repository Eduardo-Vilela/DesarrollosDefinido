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
             <AjusteBox>
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
                <Button1> Me interesa → </Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo>
             <Video1 loop autoPlay alt='fotoseccion1-lasvictorias' type="video/mp4" src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785728/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La-Campina222222_iikg4r.mp4'/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Lacampiña
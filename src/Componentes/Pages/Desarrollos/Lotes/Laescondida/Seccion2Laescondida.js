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
} from '../LasVictorias/LasVictoriasElements'


function Seccion2Laescondida() {
  return (
    <>
     <Box2>
       <SubBox>
         <BoxTitulo>
             <AjusteBox>
               <Separador> 
                <Titulo>El placer de <br/>vivir donde querés</Titulo>
               </Separador>
               <Separador>
                    <Parrafo>
                    La Escondida, se encuentra en Los Hornos, ciudad de La Plata, sobre la calle 84 entre las calles 161 y 167. A tan solo veinte minutos del casco de la ciudad.
                    Es un barrio semi-cerrado de siete manzanas, rodeado de espacios verdes que propician un entorno tranquilo, silencioso y reservado. Los lotes que integran este desarrollo, son de medidas variadas que van desde los 251 m2 hasta 609 m2.
                    Este proyecto es un gran lugar para aquellos que buscan salir de la ciudad y respirar aire puro, ideal como vivienda de fin de semana o permanente.
                    </Parrafo>
                </Separador>
                <Separador>
                <Button1> Me interesa → </Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo>
             <Imagen1 alt='fotoseccion1-lasvictorias'  src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651586609/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_8-Foto-1024x576_rkb7op.jpg'/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Laescondida
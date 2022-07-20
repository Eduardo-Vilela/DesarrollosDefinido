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
                      La Escondida, se encuentra en Los Hornos, ciudad de La Plata, 
                      sobre la calle 84 entre las calles 161 y 167. A tan solo veinte
                      minutos del casco de la ciudad. Es un barrio semi-cerrado de 
                      siete manzanas, rodeado de espacios verdes que propician un 
                      entorno tranquilo, silencioso y reservado. Los lotes que 
                      integran este desarrollo, son de medidas variadas que van 
                      desde los 251 m2 hasta 609 m2. Este proyecto es un gran lugar 
                      para aquellos que buscan salir de la ciudad y respirar aire 
                      puro, ideal como vivienda de fin de semana o permanente.
                    </Parrafo>
                </Separador>
                <Separador>
                <Button1><a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'style={{textDecoration:'none',color:'white'}}>Me interesa</a></Button1>
                </Separador>
            </AjusteBox>    
         </BoxTitulo>
         <BoxTitulo>
             <Imagen1 alt='fotoseccion1-lasvictorias'  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715435/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/render-grupo_8-Foto-1024x576_rkb7op_hkzdaz.webp'/>
         </BoxTitulo>
       </SubBox>
     </Box2>
    </>
  )
}

export default Seccion2Laescondida
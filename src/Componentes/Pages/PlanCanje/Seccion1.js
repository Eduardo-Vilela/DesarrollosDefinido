import React from 'react'
import {
BoxPrimario,
BoxSecundario,
BoxTerceario,
BoxAuto,
BoxTarjetas,
BoxTitulos,
FotoAuto,
TituloPlan,
SubtituloPlanCanje,
Box1,
Box2,
TituloCard,
SubtituloCard,
Columnas,
CardLote,
CardLote1,
CardLote2,
CardLote3,
CardLote4,
CardLote5,
T1,
S1,
} from './Seccion1Elements'


function Seccion1() {
  return (
    <>
     <BoxPrimario>
         <BoxSecundario>
             <BoxTitulos>
              <Box1>
                  <TituloPlan>Plan Canje</TituloPlan>
                  <span style={{width: '3%'}}></span>
                  <img style={{width: '10%'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648065960/DESARROLLOSGRUPODELSUD/Group_1337_rctgnn.svg' alt='plancanje'/>
              </Box1>
              <Box2>
                  <SubtituloPlanCanje> Tomamos tu auto en parte de pago <br/>por el terreno que siempre soñaste</SubtituloPlanCanje>
              </Box2>
             </BoxTitulos>
             <BoxAuto>
               <FotoAuto alt='aaaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653586516/DESARROLLOSGRUPODELSUD/pngwing.com_lkuost.png'/>
             </BoxAuto>
         </BoxSecundario>
         <BoxTerceario>
           <BoxTarjetas>
              <TituloCard>Qué ubicación te interesa</TituloCard>
              <SubtituloCard>Seleccioná una opción</SubtituloCard>
              <Columnas>
                <CardLote>
                   <T1>Lisandro Olmos</T1>
                   <S1>La Plata</S1>                    
                </CardLote>
                <CardLote1>
                   <T1>Abasto</T1>
                   <S1>La Plata</S1>  
                </CardLote1>
                <CardLote2>
                   <T1>Ángel Etcheverry </T1>
                   <S1>La Plata</S1> 
                </CardLote2>
              </Columnas>
              <Columnas>
                <CardLote3>
                    <T1>Los Hornos</T1>
                    <S1>La Plata</S1>
                </CardLote3>
                <CardLote4>
                    <T1>Melchor Romero </T1>
                    <S1>La Plata</S1>
                </CardLote4>
                <CardLote5>
                  <T1>Los Hornos</T1>
                  <S1>La Plata</S1>
                </CardLote5>
              </Columnas>
           </BoxTarjetas>
         </BoxTerceario>
     </BoxPrimario>
    </>
  )
}

export default Seccion1
import React from 'react'
import {Link }from 'react-router-dom'
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
                <Link to='/FormularioDesarrollo/Eljuncal'>
                   <T1>Lisandro Olmos</T1>
                   <S1>La Plata</S1>   
                 </Link>                 
                </CardLote>
                <CardLote1>
                <Link to='/FormularioDesarrollo/Lasorianas'>
                   <T1>Abasto</T1>
                   <S1>La Plata</S1>  
                </Link>   
                </CardLote1>
                <CardLote2>
                <Link to='/FormularioDesarrollo/Lacampiña'>
                   <T1>Ángel Etcheverry </T1>
                   <S1>La Plata</S1> 
                </Link>   
                </CardLote2>
              </Columnas>
              <Columnas>
                <CardLote3>
                 <Link to='/FormularioDesarrollo/Latitud34'>
                    <T1>Los Hornos</T1>
                    <S1>La Plata</S1>
                 </Link>
                </CardLote3>
                <CardLote4>
                  <Link to='/FormularioDesarrollo/Lasvictorias'>
                    <T1>Melchor Romero </T1>
                    <S1>La Plata</S1>
                  </Link>  
                </CardLote4>
                <CardLote5>
                <Link to='/FormularioDesarrollo/Laescondida'>
                  <T1>Los Hornos</T1>
                  <S1>La Plata</S1>
                </Link>  
                </CardLote5>
              </Columnas>
           </BoxTarjetas>
         </BoxTerceario>
     </BoxPrimario>
    </>
  )
}

export default Seccion1